(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/QI7":function(t,e,i){},CKFw:function(t,e,i){},Zwvo:function(t,e,i){"use strict";var n=i("CKFw");i.n(n).a},ntQ4:function(t,e,i){"use strict";i.r(e);i("ma9I"),i("2B1R");var n=i("a3WO");var s=i("BsWD");function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(s.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=i("VTBJ"),a=i("zAb8");function l(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function c(t,e){return(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t)}function u(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return c(i.overflowY,e)||c(i.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function d(t,e,i,n,s,r,o,a){return r<t&&o>e||r>t&&o<e?0:r<=t&&a<=i||o>=e&&a>=i?r-t-n:o>e&&a<i||r<t&&a>i?o-e+s:0}var p=function(t,e){var i=e.scrollMode,n=e.block,s=e.inline,r=e.boundary,o=e.skipOverflowHiddenElements,a="function"==typeof r?r:function(t){return t!==r};if(!l(t))throw new TypeError("Invalid target");for(var c=document.scrollingElement||document.documentElement,p=[],h=t;l(h)&&a(h);){if((h=h.parentNode)===c){p.push(h);break}h===document.body&&u(h)&&!u(document.documentElement)||u(h,o)&&p.push(h)}for(var m=window.visualViewport?visualViewport.width:innerWidth,f=window.visualViewport?visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,g=t.getBoundingClientRect(),y=g.height,w=g.width,C=g.top,j=g.right,O=g.bottom,x=g.left,_="start"===n||"nearest"===n?C:"end"===n?O:C+y/2,k="center"===s?x+w/2:"end"===s?j:x,E=[],z=0;z<p.length;z++){var T=p[z],$=T.getBoundingClientRect(),I=$.height,S=$.width,H=$.top,B=$.right,M=$.bottom,W=$.left;if("if-needed"===i&&C>=0&&x>=0&&O<=f&&j<=m&&C>=H&&O<=M&&x>=W&&j<=B)return E;var D=getComputedStyle(T),V=parseInt(D.borderLeftWidth,10),A=parseInt(D.borderTopWidth,10),G=parseInt(D.borderRightWidth,10),N=parseInt(D.borderBottomWidth,10),P=0,L=0,U="offsetWidth"in T?T.offsetWidth-T.clientWidth-V-G:0,Y="offsetHeight"in T?T.offsetHeight-T.clientHeight-A-N:0;if(c===T)P="start"===n?_:"end"===n?_-f:"nearest"===n?d(v,v+f,f,A,N,v+_,v+_+y,y):_-f/2,L="start"===s?k:"center"===s?k-m/2:"end"===s?k-m:d(b,b+m,m,V,G,b+k,b+k+w,w),P=Math.max(0,P+v),L=Math.max(0,L+b);else{P="start"===n?_-H-A:"end"===n?_-M+N+Y:"nearest"===n?d(H,M,I,A,N+Y,_,_+y,y):_-(H+I/2)+Y/2,L="start"===s?k-W-V:"center"===s?k-(W+S/2)+U/2:"end"===s?k-B+G+U:d(W,B,S,V,G+U,k,k+w,w);var K=T.scrollLeft,X=T.scrollTop;_+=X-(P=Math.max(0,Math.min(X+P,T.scrollHeight-I+Y))),k+=K-(L=Math.max(0,Math.min(K+L,T.scrollWidth-S+U)))}E.push({el:T,top:P,left:L})}return E};function h(t){return t===Object(t)&&0!==Object.keys(t).length}var m=function(t,e){var i=!t.ownerDocument.documentElement.contains(t);if(h(e)&&"function"==typeof e.behavior)return e.behavior(i?[]:p(t,e));if(!i){var n=function(t){return!1===t?{block:"end",inline:"nearest"}:h(t)?t:{block:"start",inline:"nearest"}}(e);return function(t,e){void 0===e&&(e="auto");var i="scrollBehavior"in document.body.style;t.forEach((function(t){var n=t.el,s=t.top,r=t.left;n.scroll&&i?n.scroll({top:s,left:r,behavior:e}):(n.scrollTop=s,n.scrollLeft=r)}))}(p(t,n),n.behavior)}},f=i("ueaQ"),b=i("I2HU"),v=i("GPXY"),g=i("CJ0+"),y=i("CKn+"),w=i("SqIO"),C=i("qOTs");function j(t){return function e(i){for(var n,s,r,o=[],a=0,l=i.length;a<l;){if(Object(C.a)(i[a]))for(r=0,s=(n=t?e(i[a]):i[a]).length;r<s;)o[o.length]=n[r],r+=1;else o[o.length]=i[a];a+=1}return o}}var O=Object(w.a)(j(!0)),x=i("pkSs"),_=i("Ffhv"),k=(i("pBQB"),i("cbYo")),E=(i("qePV"),{props:{size:{type:Number,default:16}}}),z=i("KHd+"),T=Object(z.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"rgba(255, 255, 255)",d:"M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.086 3.68c.567.677.571 1.625.009 2.306l-3.13 3.794c-.936 1.136-1.452 2.555-1.452 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-4.639 7.257l3.13 3.794c.652.792.996 1.726.996 2.83h-1.061c-.793-2.017-4.939-5-4.939-5s-4.147 2.983-4.94 5h-1.06c0-1.104.343-2.039.996-2.829l3.129-3.793c1.167-1.414 1.159-3.459-.019-4.864l-3.086-3.681c-.66-.785-1.02-1.736-1.02-2.834h12c0 1.101-.363 2.05-1.02 2.834l-3.087 3.68c-1.177 1.405-1.185 3.451-.019 4.863z"}})])}),[],!1,null,null,null).exports,$={props:{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1}}},I=Object(z.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative mr-6"},[this.top?e("span",{staticClass:"absolute top-0 left-0 h-4 border-gray-500 border-l-2 w-1 -mt-4 ml-4"}):this._e(),e("span",{staticClass:"w-8 h-8 border-gray-500 bg-blue-700 border-1 rounded flex items-center justify-center shadow overflow-hidden"},[this._t("default")],2),this.bottom?e("span",{staticClass:"absolute bottom-0 left-0 h-4 border-gray-500 border-l-2 w-1 -mb-4 ml-4"}):this._e()])}),[],!1,null,null,null).exports,S={components:{Bullet:I,HourGlass:T},props:{id:{type:String,default:null},data:{type:Object,default:function(){return{}}}},computed:{title:function(){return Object(g.a)("","title",this.data)},start:function(){return Object(g.a)("","start",this.data)},node:function(){return Object(y.a)("node",this.data)},top:function(){return"start"!==this.node},bottom:function(){return"end"!==this.node}},methods:Object(o.a)(Object(o.a)({},Object(f.mapActions)("playEpisode")),{},{duration:Object(v.a)(x.d,x.e),play:function(){this.playEpisode({id:this.id,playtime:Object(x.e)(this.start)})}})},H=Object(z.a)(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex items-center mb-2 p-2"},[i("bullet",{attrs:{top:t.top,bottom:t.bottom}},[i("hour-glass")],1),i("a",{staticClass:"block uppercase font-normal cursor-pointer px-2",on:{click:t.play}},[t._v("\n    "+t._s(t.title)+"\n  ")]),i("div",{staticClass:"text-gray-500 ml-auto font-mono"},[t._v(t._s(t.duration(t.start)))])],1)}),[],!1,null,null,null).exports,B={components:{Bullet:I,Icon:k.b},props:{id:{type:String,default:null},data:{type:Object,default:function(){return{}}}},data:function(){return this.mapState({ghost:_.c.player.ghost.time,hovered:_.c.player.ghost.active,current:_.c.current.episode,playtime:_.c.player.playtime})},computed:{title:function(){return Object(g.a)("","title",this.data)},start:function(){return Object(g.a)(0,"start",this.data)},end:function(){return Object(g.a)(0,"end",this.data)},href:function(){return Object(y.a)("href",this.data)},active:function(){return this.current===this.id},ghostChapter:function(){return this.active&&!this.activeChapter&&this.hovered&&this.ghost>=this.start&&this.ghost<this.end},activeChapter:function(){return this.active&&this.playtime>=this.start&&this.playtime<this.end}},methods:Object(o.a)(Object(o.a)({},Object(f.mapActions)("playEpisode","simulatePlaytime","enableGhost","disableGhost")),{},{toHumanTime:x.d,play:function(){this.playEpisode({id:this.id,playtime:this.start})},simulateChapter:function(){this.active&&(this.enableGhost(),this.simulatePlaytime(this.start>0?this.start+1:0))}})},M=Object(z.a)(B,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex items-center mb-2 px-2",on:{mouseover:t.simulateChapter,mouseout:t.disableGhost}},[i("bullet",{attrs:{top:!0,bottom:!0,time:t.start}},[i("ClientOnly",[i("icon",{attrs:{type:"chapter",size:25,color:"rgba(255, 255, 255)"}})],1)],1),i("div",{staticClass:"flex w-full items-center p-2 -mx-2 rounded",class:{"bg-podlove-blue-300":t.ghostChapter,"bg-podlove-blue-700 text-gray-100":t.activeChapter}},[i("a",{staticClass:"block uppercase font-normal cursor-pointer px-2 py-1 rounded whitespace-no-wrap truncate w-5/6",on:{click:t.play}},[t._v("\n      "+t._s(t.title)+"\n    ")]),i("div",{staticClass:"ml-auto font-mono",class:{"text-gray-100":t.activeChapter,"text-gray-500":!t.activeChapter}},[t._v("\n      "+t._s(t.toHumanTime(t.start))+"\n    ")])])],1)}),[],!1,null,null,null).exports,W={components:{Bullet:I},data:Object(f.mapState)({ghost:_.c.player.ghost.time,hovered:_.c.player.ghost.active,current:_.c.current.episode,playtime:_.c.player.playtime}),props:{id:{type:String,default:null},data:{type:Object,default:function(){return{}}}},computed:{speaker:function(){return{avatar:Object(b.a)(["speaker","avatar"],this.data),name:Object(b.a)(["speaker","name"],this.data)}},start:function(){return Object(y.a)("start",this.data)},texts:function(){return Object(g.a)([],"texts",this.data)},active:function(){return this.current===this.id}},methods:Object(o.a)(Object(o.a)({},Object(f.mapActions)("playEpisode","simulatePlaytime","enableGhost","disableGhost")),{},{toHumanTime:x.d,play:function(t){this.playEpisode({id:this.id,playtime:t})},simulateSection:function(t){this.active&&(this.enableGhost(),this.simulatePlaytime(t))},activeTranscript:function(t,e){return this.active&&this.playtime>=t&&this.playtime<e},ghostTranscript:function(t,e){return this.active&&!this.activeTranscript(t,e)&&this.hovered&&this.ghost>=t&&this.ghost<e},transcriptId:function(t,e){return this.activeTranscript(t,e)?"transcript-active":this.ghostTranscript(t,e)?"transcript-ghost-active":null}})},D={components:{TimelineMarker:H,Chapter:M,Transcript:Object(z.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("div",{staticClass:"flex items-center mb-2"},[n("bullet",{attrs:{top:!0,bottom:!0,time:t.start}},[t.speaker.avatar?n("g-image",{attrs:{src:i("EhNw")("./"+t.speaker.avatar)}}):t._e()],1),n("a",{staticClass:"block uppercase font-normal cursor-pointer px-2"},[t._v("\n      "+t._s(t.speaker.name)+"\n    ")]),n("div",{staticClass:"ml-auto text-gray-500 font-mono"},[t._v(t._s(t.toHumanTime(t.start)))])],1),n("div",{staticClass:"flex"},[t._m(0),n("div",{staticClass:"px-2"},t._l(t.texts,(function(e,i){return n("span",{key:e.start,staticClass:"m-1 break-words cursor-pointer",class:{"border-b-2 border-podlove-blue-200":t.ghostTranscript(e.start,e.end),"border-b-2 border-podlove-blue-700":t.activeTranscript(e.start,e.end),"ml-0":0===i},attrs:{id:t.transcriptId(e.start,e.end)},on:{click:function(i){return t.play(e.start)},mouseover:function(i){return t.simulateSection(e.start,e.end)},mouseout:t.disableGhost}},[t._v(t._s(e.text))])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-10 mr-4 flex-shrink-0 relative"},[e("div",{staticClass:"h-full w-1 border-gray-500 border-l-2 ml-4"})])}],!1,null,null,null).exports},props:{timeline:{type:Array,default:function(){return[]}},id:{type:String,default:null}}},V=Object(z.a)(D,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-6"},t._l(t.timeline,(function(e,n){return i("div",{key:"timeline-"+n,staticClass:"-ml-6"},[i(e.type,{tag:"component",attrs:{data:e,id:t.id}})],1)})),0)}),[],!1,null,null,null).exports,A=i("OPII"),G=(i("wLYn"),{props:{size:{type:Number,default:25}}}),N=Object(z.a)(G,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"data-v-21801504":"","data-v-07745886":"",width:this.size,height:this.size,viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414",background:"currentColor","aria-hidden":"true","data-v-43f471ac":""}},[e("g",{attrs:{fill:"currentColor"}},[e("path",{attrs:{d:"M4 10v26h12v10l12-10h18V10H4zm2 2h38v22H27.009L18 41.7V34H6V12z"}}),e("circle",{attrs:{cx:"15",cy:"23",r:"2.5"}}),e("circle",{attrs:{cx:"25",cy:"23",r:"2.5"}}),e("circle",{attrs:{cx:"35",cy:"23",r:"2.5"}})])])}),[],!1,null,null,null).exports,P={props:{size:{type:Number,default:25}}},L=Object(z.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.size,height:this.size,xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{fill:"currentColor",d:"M24 20l-6.455 4-5.545-4-5.545 4-6.455-4v-20l6.455 4 5.545-4 5.545 4 6.455-4v20zm-11.5-13h-1v-5.406l-4.5 3.246v4.16h-1v-4.106l-5-3.098v17.647l5 3.099v-6.542h1v6.374l4.5-3.246v-5.128h1v5.128l4.5 3.246v-5.374h1v5.542l5-3.099v-17.647l-5 3.098v3.106h-1v-3.16l-4.5-3.246v5.406zm8.172 7.016l-1.296-1.274 1.273-1.293-.708-.702-1.272 1.294-1.294-1.271-.703.702 1.296 1.276-1.273 1.296.703.703 1.277-1.298 1.295 1.275.702-.708zm-14.102-.606c-.373 0-.741-.066-1.092-.195l.407-1.105c.221.081.451.122.685.122.26 0 .514-.05.754-.149l.448 1.09c-.383.157-.787.237-1.202.237zm-2.601-2.374c-.535 0-.969.433-.969.968 0 .534.434.968.969.968.535 0 .969-.434.969-.968 0-.535-.434-.968-.969-.968zm11.271 1.591l-1.659-.945.583-1.024 1.66.945-.584 1.024zm-6.455-.02l-.605-1.011 1.638-.981.606 1.01-1.639.982zm3.918-1.408c-.243-.101-.5-.153-.763-.153-.231 0-.457.04-.674.118l-.402-1.108c.346-.125.708-.188 1.076-.188.419 0 .83.082 1.216.243l-.453 1.088z"}})])}),[],!1,null,null,null).exports,U={props:{size:{type:Number,default:25}}},Y=Object(z.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.size,height:this.size,xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{fill:"currentColor",d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"}})])}),[],!1,null,null,null).exports,K={props:{size:{type:Number,default:25}}},X=Object(z.a)(K,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.size,height:this.size,xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{fill:"currentColor",d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"}})])}),[],!1,null,null,null).exports,Q={data:function(){return{docked:!1}},components:{Icon:k.b,DiscussIcon:N,TimelineIcon:L,SummaryIcon:Y,ShownotesIcon:X},mounted:function(){this.handleScroll(),window.addEventListener("scroll",Object(a.a)(100,this.handleScroll.bind(this)))},methods:{handleScroll:function(){var t=this.$el.clientHeight,e=this.$el.offsetTop,i=window.scrollY;this.docked=i>t+e+100},scrollTo:function(t){var e=document.getElementById(t);e&&m(e,{behavior:"smooth",scrollMode:"always",block:"start"})}}},J=(i("Zwvo"),Object(z.a)(Q,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-full bottom-0 h-16 flex mt-0",class:{"fixed top-0 z-40 docked":t.docked,absolute:!t.docked}},[i("div",{staticClass:"h-20 relative w-full flex items-center justify-center",class:{"bg-white -mb-4":!t.docked,"bg-transparent":t.docked}},[t.docked?t._e():i("span",{staticClass:"w-full absolute top-0 shadow left"})]),i("div",{staticClass:"text-gray-100 h-16 flex justify-center items-center py-4 px-8 w-full",class:{"bg-podlove-blue-900 shadow rounded-b docked-bg":t.docked}},[i("button",{staticClass:"mx-4 font-thin flex items-center overflow-visible",on:{click:function(e){return t.scrollTo("header")}}},[i("summary-icon",{staticClass:"mr-3"}),i("span",{staticClass:"uppercase hidden md:block"},[t._v("Summary")])],1),i("button",{staticClass:"mx-4 font-thin flex items-center overflow-visible",on:{click:function(e){return t.scrollTo("timeline")}}},[i("timeline-icon",{staticClass:"mr-3"}),i("span",{staticClass:"uppercase hidden md:block"},[t._v("Timeline")])],1),i("button",{staticClass:"mx-4 font-thin flex items-center overflow-visible",on:{click:function(e){return t.scrollTo("shownotes")}}},[i("shownotes-icon",{staticClass:"mr-3"}),i("span",{staticClass:"uppercase hidden md:block"},[t._v("Shownotes")])],1),i("button",{staticClass:"mx-4 font-thin flex items-center overflow-visible",on:{click:function(e){return t.scrollTo("discuss")}}},[i("discuss-icon",{staticClass:"mr-3"}),i("span",{staticClass:"uppercase hidden md:block"},[t._v("Discuss")])],1)]),i("div",{staticClass:"h-20 relative w-full -mb-4",class:{"bg-white -mb-4":!t.docked}},[t.docked?t._e():i("span",{staticClass:"w-full absolute top-0 shadow right"})])])}),[],!1,null,"48395b84",null).exports),R=i("1CAM"),q={mounted:function(){window.DiscourseEmbed={discourseUrl:"https://community.podlove.org/",discourseEmbedUrl:window.location.href};var t=document.createElement("script");t.setAttribute("src","https://community.podlove.org/javascripts/embed.js"),document.head.appendChild(t)}},F=Object(z.a)(q,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"discourse-comments"}})}),[],!1,null,null,null).exports,Z={data:Object(f.mapState)({episode:_.c.current.episode,playtime:_.c.player.playtime,ghost:_.c.player.ghost.time,followContent:_.c.playbar.followContent}),components:{Subscribe:A.a,Timeline:V,EpisodeHeader:R.a,EpisodeNavigation:J,Discuss:F},computed:{id:function(){return Object(b.a)(["episode","id"],this.$page)},follow:function(){return this.followContent&&this.episode===this.id}},watch:{playtime:function(){this.scroll()},ghost:function(){this.scroll()},followContent:function(){this.followContent&&this.scroll()}},methods:Object(o.a)(Object(o.a)({},Object(f.mapActions)("playEpisode")),{},{scroll:function(){this.follow&&this.scrollIntoView()},scrollIntoView:Object(a.a)(500,(function(){var t=document.getElementById("transcript-ghost-active")||document.getElementById("transcript-active");return t&&m(t,{behavior:"smooth",scrollMode:"always",block:"center",inline:"center"})})),duration:Object(v.a)(x.d,x.e)}),metaInfo:function(){var t=Object(b.a)(["$page","episode"],this),e=Object(b.a)(["$static","metadata"],this),n=Object(g.a)([],"contributors",this),s=Object(g.a)([],"audio",t),o=Object(y.a)("poster",t)||Object(b.a)(["show","poster"],t);return{title:Object(y.a)("title",t),meta:[{name:"description",content:Object(y.a)("summary",t)}].concat(r(n.map((function(t){return{name:"author",content:Object(y.a)("name",t)}}))),[{property:"og:type",content:"website"},{property:"og:site_name",content:Object(b.a)(["show","title"],e)},{property:"og:title",content:Object(y.a)("title",t)},{property:"og:url",content:"".concat(Object(y.a)("siteUrl",e)).concat(Object(y.a)("path",t))},{property:"og:description",content:Object(y.a)("summary",t)},{property:"og:image",content:Object(y.a)("siteUrl",e)+i("GSoK")("./".concat(o)).src}],r(O(s.map((function(t){return[{property:"og:audio:type",content:t.mimeType},{property:"og:audio",content:t.url}]})))))}}},tt=(i("zXU8"),null),et=i("Kw5r"),it=et.a.config.optionMergeStrategies.computed,nt={metadata:{siteUrl:"https://podlovers.org",show:{title:"Podlovers",poster:"a8a820df339a721dafecf50de90f17d2.png"}}},st=function(t){var e=t.options;e.__staticData?e.__staticData.data=nt:(e.__staticData=et.a.observable({data:nt}),e.computed=it({$static:function(){return e.__staticData.data}},e.computed))},rt=Object(z.a)(Z,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("episode-header",{attrs:{id:t.id,title:t.$page.episode.title,poster:t.$page.episode.poster,"publication-date":t.$page.episode.publicationDate,duration:t.$page.episode.duration,contributors:t.$page.episode.contributors}},[i("episode-navigation")],1),i("div",{staticClass:"lg:w-full lg:flex lg:justify-center pt-20"},[i("div",{staticClass:"lg:w-app"},[i("section",{attrs:{id:"summary"}},[i("h2",{staticClass:"font-mono inline-block border-gray-400 border-b-2 mb-6 mx-8 sm:mx-2"},[t._v("Summary")]),i("div",{staticClass:"font-light border-gray-400 border-b mb-12 pt-6 pb-12 px-12"},[t._v(t._s(t.$page.episode.summary))])]),i("section",{attrs:{id:"timeline"}},[i("h2",{staticClass:"font-mono inline-block border-gray-400 border-b-2 mb-6 mx-8 sm:mx-2"},[t._v("Timeline")]),i("timeline",{staticClass:"font-light border-gray-400 border-b mb-12 pb-12 px-12",attrs:{id:t.$page.episode.id,timeline:t.$page.episode.timeline}})],1),i("section",{attrs:{id:"shownotes"}},[i("h2",{staticClass:"font-mono inline-block border-gray-400 border-b-2 mb-6  mx-8 sm:mx-"},[t._v("Shownotes")]),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"font-light episode-content border-gray-400 border-b mb-12 pb-12 px-12",domProps:{innerHTML:t._s(t.$page.episode.content)}})]),i("section",{attrs:{id:"discuss"}},[i("discuss",{staticClass:"mb-12 px-2"})],1)])])],1)}),[],!1,null,null,null);"function"==typeof tt&&tt(rt),"function"==typeof st&&st(rt);e.default=rt.exports},zXU8:function(t,e,i){"use strict";var n=i("/QI7");i.n(n).a}}]);