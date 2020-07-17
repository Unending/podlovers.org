const download = require("image-downloader");
const { resolve, dirname, extname, basename } = require("path");
const { prop, propOr, reduce, sortBy, last, path, endsWith } = require("ramda");
const axios = require("axios");
const sequential = require("promise-sequential");
const fs = require("fs-extra");
const hash = require("hasha");

const endpoint = (...path) => `https://backend.podlovers.org/${path.join("/")}`;

const timeRegex = new RegExp(/^(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})(?:\.(\d{1,3}))?$/);
const toPlayerTime = (time = "0") => {
  const matches = timeRegex.exec(time);

  if (!matches) {
    return 0;
  }

  const hours = parseInt(matches[2] ? matches[1] : 0);
  const minutes = parseInt(matches[2] ? matches[2] : matches[1] || 0);
  const seconds = parseInt(matches[3] || 0);
  const milliseconds = parseInt(matches[4] || 0);

  return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000 + milliseconds;
};

const fetchTranscripts = async url => (url ? await axios.get(url).then(({ data = [] }) => data) : []);

const cacheImage = async url =>
  await download
    .image({
      url,
      dest: resolve(__dirname, "..", "assets", "images")
    })
    .then(async ({ filename }) => await
        hash
          .fromFile(filename, { algorithm: "md5" })
          .then(fileHash => resolve(dirname(filename), `${fileHash}${extname(filename)}`))
          .then(async dest => {
            await fs.move(filename, dest, { overwrite: true })
            return basename(dest)
          })
    )
    .catch(err => console.error(`Error downloading ${url}`, err));

module.exports = async store => {
  const episodes = store.addCollection("Episode");
  const contributors = store.addCollection("Contributor");
  const groups = store.addCollection("Group");
  const roles = store.addCollection("Role");

  const transformChapters = duration => (result, chapter, index, chapters) => {
    const end = propOr({ start: duration }, index + 1, chapters);
    const href = propOr("", "href", chapter).trim();

    return [
      ...result,
      {
        index: index + 1,
        start: toPlayerTime(chapter.start),
        end: toPlayerTime(end.start),
        title: prop("title", chapter),
        image: prop("image", chapter),
        href
      }
    ];
  };

  const isNewChunk = (current, previous) => {
    if (previous === undefined) {
      return true;
    }

    const text = previous.texts.reduce((result, item) => result + " " + item.text, "");
    const endOfSentence = endsWith(".", text) || endsWith("!", text) || endsWith("?", text);

    return prop("speaker", current) !== path(["speaker", "id"], previous) || (text.length > 1500 && endOfSentence);
  };

  const transformTranscript = reduce((transcripts, chunk) => {
    const previousChunk = last(transcripts);

    if (isNewChunk(chunk, previousChunk)) {
      return [
        ...transcripts,
        {
          type: "transcript",
          start: chunk.start_ms,
          end: chunk.end_ms,
          speaker: chunk.speaker ? store.createReference("Contributor", chunk.speaker) : null,
          texts: [
            {
              start: chunk.start_ms,
              end: chunk.end_ms,
              text: chunk.text
            }
          ]
        }
      ];
    }

    return [
      ...transcripts.slice(0, -1),
      {
        ...previousChunk,
        end: chunk.end_ms,
        texts: [
          ...previousChunk.texts,
          {
            start: chunk.start_ms,
            end: chunk.end_ms,
            text: chunk.text
          }
        ]
      }
    ];
  }, []);

  const createContributor = async data => {
    data.role ? roles.addNode(data.role) : null;
    data.group ? groups.addNode(data.group) : null;
    contributors.addNode({
      id: data.id,
      name: data.name,
      avatar: await cacheImage(data.avatar),
      role: data.role ? store.createReference("Role", data.role.id) : null,
      group: data.group ? store.createReference("Group", data.group.id) : null
    });
    return store.createReference("Contributor", data.id);
  };

  const createTimeline = async (data = {}) => {
    const transcripts = data.transcripts ? await fetchTranscripts(data.transcripts).then(transformTranscript) : [];
    const chapters = (data.chapters || []).map((chapter, index) => ({
      ...chapter,
      type: "chapter",
      index: index + 1,
      speaker: null
    }));

    const timeline = [
      { type: "timeline-marker", title: "Start", start: 0, node: "start", speaker: null },
      ...transcripts,
      ...chapters,
      { type: "timeline-marker", title: "End", start: data.duration, node: "end", speaker: null }
    ];

    return sortBy(prop("start"), timeline);
  };

  const publisher = await axios
    .get(endpoint("wp-json", "wp", "v2", "episodes"))
    .then(({ data = [] }) => data.map(({ id, slug, content: { rendered } }) => ({ id, slug, content: rendered })));

  await sequential(
    publisher.map(({ id, slug, content }) => () =>
      axios
        .get(endpoint("wp-json", "podlove-web-player", "shortcode", "publisher", id))
        .then(async ({ data }) => ({
          ...data,
          id: slug,
          duration: toPlayerTime(data.duration),
          content,
          contributors: await Promise.all(propOr([], "contributors", data).map(createContributor)),
          chapters: await Promise.all(propOr([], "chapters", data).reduce(transformChapters(toPlayerTime(data.duration)), []).map(async chapter => ({
            ...chapter,
            image: chapter.image ? await cacheImage(chapter.image) : ''
          }))),
          show: {
            ...data.show,
            poster: await cacheImage(data.show.poster)
          },
          poster: await cacheImage(data.poster)
        }))
        .then(async data => ({
          ...data,
          timeline: await createTimeline(data)
        }))
        .then(data => console.log("🎙 ", `[${id}]`, slug) || episodes.addNode(data))
    )
  );
};