const feed = 'https://forschergeist.de/feed/m4a/'

const podcastClients = [
  {
    id: "apple-podcasts",
    service: "id934797989"
  },
  {
    id: "antenna-pod"
  },
  {
    id: "beyond-pod"
  },
  {
    id: "castbox",
    service: "castbox-id"
  },
  {
    id: "castro"
  },
  {
    id: "clementine"
  },
  {
    id: "downcast"
  },
  {
    id: "google-podcasts",
    service: feed
  },
  {
    id: "itunes"
  },
  {
    id: "i-catcher"
  },
  {
    id: "overcast"
  },
  {
    id: "player-fm"
  },
  {
    id: "pocket-casts"
  },
  {
    id: "pocket-casts",
    service: feed
  },
  {
    id: "pod-grasp"
  },
  {
    id: "podcast-addict"
  },
  {
    id: "podcast-republic"
  },
  {
    id: "podcat"
  },
  {
    id: "podscout"
  },
  {
    id: "rss-radio"
  }
]

module.exports = async store => {
  store.addMetadata('feed', feed);
  const clients = store.addCollection("Client");

  podcastClients.map(client => clients.addNode(client));
}