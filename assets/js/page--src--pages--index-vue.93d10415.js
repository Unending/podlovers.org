(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1CAM":function(t,e,s){"use strict";s("DQNa"),s("qePV");var a=s("pkSs"),i=s("gCpa"),n=s("pBQB"),l={components:{PlayButton:i.a,Contributor:n.a},props:{id:{type:String,default:null},title:{type:String,default:null},poster:{type:String,default:null},contributors:{type:Array,default:function(){return[]}},duration:{type:Number,default:null},publicationDate:{type:String,default:null},path:{type:String,default:null}},methods:{toHumanTime:a.d,date:function(t){return new Date(t).toLocaleDateString()}},computed:{expanded:function(){return!!this.$slots.default}}},r=(s("KWPR"),s("KHd+")),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"episode-header w-full px-8 pt-20 pb-32 bg-gray-900 flex items-center justify-center relative shadow",class:{"pb-40":t.expanded},attrs:{id:"header"}},[s("div",{staticClass:"w-app flex font-light items-center flex-col mt-6"},[s("div",{staticClass:"flex flex-col items-center md:items-start md:flex-row"},[s("div",{staticClass:"episode-poster relative mb-4 md:mb-0 md:mr-8"},[t.poster?s("g-image",{staticClass:"rounded shadow-lg",attrs:{src:t.poster}}):t._e(),s("div",{staticClass:"absolute w-full h-full inset-0 flex items-center justify-center opacity-25 hover:opacity-100 transition ease-in duration-100"},[s("play-button",{attrs:{size:150,color:"rgba(255, 255, 255)",background:"rgba(44, 82, 130, 0.5)",id:t.id}})],1)],1),s("div",{staticClass:"flex flex-col items-center md:block"},[s("div",[s("span",{staticClass:"text-gray-500 font-mono text-sm"},[t._v(t._s(t.date(t.publicationDate)))]),s("span",{staticClass:"text-gray-500 font-mono text-sm mx-2"},[t._v("・")]),s("span",{staticClass:"text-gray-500 font-mono text-sm"},[t._v(t._s(t.toHumanTime(t.duration)))])]),s("g-link",{staticClass:"text-center md:text-left",attrs:{to:t.path}},[t.title?s("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-white text-3xl mb-5",domProps:{innerHTML:t._s(t.title)}}):t._e()]),s("div",{staticClass:"w-full flex justify-center md:justify-start"},[s("div",{staticClass:"flex items-center"},t._l(t.contributors,(function(e,a){return s("div",{key:"contributor-"+e.id,staticClass:"text-center flex flex-col items-center mx-2 mb-2",class:{"ml-0":0===a}},[s("contributor",{staticClass:"block w-12",attrs:{contributor:e}}),s("span",{staticClass:"text-gray-300 truncate"},[t._v(t._s(e.name.split(" ").shift()))])],1)})),0)])],1)]),t._t("default")],2)])}),[],!1,null,"7a91ebf5",null);e.a=o.exports},"2qjx":function(t,e,s){"use strict";t.exports=function(t,e){var s=Number(e);if(isNaN(s))return"…";if(t.length<=s)return t;var a=t.substr(0,s),i=a.lastIndexOf(" ");return-1===i?"…":a.substr(0,i)+" …"}},"5Ww3":function(t,e,s){},DQNa:function(t,e,s){var a=s("busE"),i=Date.prototype,n=i.toString,l=i.getTime;new Date(NaN)+""!="Invalid Date"&&a(i,"toString",(function(){var t=l.call(this);return t==t?n.call(this):"Invalid Date"}))},KWPR:function(t,e,s){"use strict";var a=s("qvo2");s.n(a).a},RNEW:function(t,e,s){"use strict";var a=s("5Ww3");s.n(a).a},gCpa:function(t,e,s){"use strict";s("qePV");var a=s("VTBJ"),i=s("ueaQ"),n=s("9Lsm"),l=s("cbYo"),r=s("Ffhv"),o={props:{id:{type:String,default:null},color:{type:String,default:null},background:{type:String,default:null},size:{type:Number,default:null}},data:function(){return this.mapState({playing:r.c.episode.playing(this.id)})},components:{PlayButton:l.d},methods:Object(a.a)(Object(a.a)({},Object(i.mapActions)("playEpisode","pauseEpisode")),{},{play:function(t){switch(t.type){case n.w:this.playEpisode({id:this.id});break;case n.v:this.pauseEpisode()}}})},u=s("KHd+"),c=Object(u.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("ClientOnly",[e("play-button",{attrs:{size:this.size,color:this.color,background:this.background,type:this.playing?"pause":"play"},on:{click:this.play}})],1)}),[],!1,null,null,null);e.a=c.exports},iyQ6:function(t,e,s){"use strict";s.r(e);var a=s("Pvxg"),i=s("YQsy"),n=Object(i.a)(0),l=s("aTUd"),r=(s("DQNa"),s("rePB")),o=s("pkSs"),u=s("2qjx"),c=s.n(u),d=(s("Ffhv"),s("pBQB")),p={components:{PlayButton:s("gCpa").a,Contributor:d.a},props:{episode:{type:Object,default:function(){var t;return t={id:null,title:null,summary:null,contributors:null,publicationDate:null,poster:null,show:null,path:null},Object(r.a)(t,"contributors",[]),Object(r.a)(t,"duration",null),t}}},computed:{summary:function(){return c()(Object(a.a)("",["episode","summary"],this),400)}},methods:{date:function(t){return new Date(t).toLocaleDateString()},toHumanTime:o.d}},m=(s("RNEW"),s("KHd+")),f={components:{PlayerTile:Object(m.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("div",{staticClass:"player-tile-button w-20 h-20 mr-4 relative flex-shrink-0 mt-1"},[t.episode.poster?s("g-image",{staticClass:"rounded w-20 h-20",attrs:{src:t.episode.poster}}):t._e(),s("div",{staticClass:"absolute flex opacity-0 hover:opacity-100 items-center justify-center w-20 h-20 inset-0"},[s("play-button",{attrs:{color:"rgba(255, 255, 255)",background:"rgba(44, 82, 130)",size:50,id:t.episode.id}})],1)],1),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"h-20 mb-2 sm:h-auto sm:mb-0"},[t.episode.title?s("g-link",{staticClass:"leading-tight sm:leading block text-xl mb-1 uppercase",attrs:{to:t.episode.path}},[t._v(t._s(t.episode.title))]):t._e(),s("div",{staticClass:"flex mb-2 items-center"},[t._l(t.episode.contributors,(function(t){return s("contributor",{key:"contributor-"+t.id,staticClass:"mr-1 w-6",attrs:{contributor:t}})})),t.episode.contributors.length>0?s("span",{staticClass:"text-gray-500 mx-1"},[t._v("・")]):t._e(),t.episode.publicationDate?s("span",{staticClass:"block font-light text-gray-500 text-base"},[t._v(t._s(t.date(t.episode.publicationDate)))]):t._e(),t.episode.duration?s("span",{staticClass:"text-gray-500 mx-1"},[t._v("・")]):t._e(),t.episode.duration?s("span",{staticClass:"block font-light text-gray-500"},[t._v(t._s(t.toHumanTime(t.episode.duration)))]):t._e()],2)],1),t.summary?s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"summary font-light -ml-24 sm:ml-0",domProps:{innerHTML:t._s(t.summary)}}):t._e()])])}),[],!1,null,"08e860d5",null).exports,EpisodeHeader:s("1CAM").a},computed:{episodes:function(){return Object(a.a)([],["$page","episodes","edges"],this)},latest:function(){return n(this.episodes)},list:function(){return Object(l.a)(1,this.episodes.length-1,this.episodes)}}},b=null,g=Object(m.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("episode-header",{staticClass:"mb-4",attrs:{id:t.latest.node.id,poster:t.latest.node.poster,duration:t.latest.node.duration,"publication-date":t.latest.node.publicationDate,title:t.latest.node.title,contributors:t.latest.node.contributors,path:t.latest.node.path}}),s("div",{staticClass:"flex justify-center"},[t.list.length>1?s("div",{staticClass:"w-app p-8"},t._l(t.list,(function(e,a){return s("player-tile",{key:e.node.id,staticClass:"py-8 border-gray-400 border-dashed",class:{"pt-0":0===a,"border-b":a<t.list.length-1},attrs:{episode:e.node}})})),1):s("div",{staticClass:"w-app py-32 flex justify-center items-center"},[s("span",{staticClass:"italic font-thin text-xl"},[t._v("\n        here be dragons\n      ")])])])],1)}),[],!1,null,null,null);"function"==typeof b&&b(g);e.default=g.exports},pBQB:function(t,e,s){"use strict";var a={props:{contributor:{type:Object,default:function(){return{name:null,id:null,avatar:null}}}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("g-link",{attrs:{title:this.contributor.name}},[e("g-image",{staticClass:"rounded",attrs:{src:this.contributor.avatar}})],1)}),[],!1,null,null,null);e.a=n.exports},qvo2:function(t,e,s){}}]);