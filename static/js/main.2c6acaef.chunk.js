(this["webpackJsonpanime-searcher"]=this["webpackJsonpanime-searcher"]||[]).push([[0],{27:function(e,t,a){e.exports=a(47)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i);a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(11),l=a(9),s=a.n(l),u=a(14),d="https://kitsu.io/api/edge/anime?",f="&filter[text]=",m="&filter[id]=",p="&sort=ratingRank",v="&sort=popularityRank",g="&filter[status]=current&sort=popularityRank",E=12,y="&page[offset]=",h="https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0",_="&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis",b="filter[categories]=",N=",youtubeVideoId",T="&page[limit]="+E+_,I={method:"GET",headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},O=function(e){var t=d+e+T;return function(){var e=Object(u.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_ANIME",payload:{data:[],url:"",pending:!0}}),e.next=3,fetch(t,I);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a({type:"GET_ANIME",payload:{data:r.data,url:t,pending:!1,offset:E}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e,t){return{type:"TOGGLE_FAVORITE",payload:{id:e,item:t}}},k=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_TITLE",payload:{id:e,pending:!0,data:{}}}),t.next=3,fetch(d+m+e+_+N);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,a({type:"GET_TITLE",payload:{id:e,pending:!1,data:r.data[0]}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w={url:"",loadedData:[],penging:!0,pendingMore:!1,offset:0},x=a(4),B={favIds:[],favs:[]},j=[],C={title:{},pending:!0,id:""},A=Object(o.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ANIME":return{url:t.payload.url,loadedData:t.payload.data,pending:t.payload.pending,offset:t.payload.offset};case"GET_MORE":return{url:t.payload.url,loadedData:e.loadedData.concat(t.payload.data),pendingMore:t.payload.pendingMore,offset:t.payload.offset};default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FAVORITE":return-1===e.favIds.indexOf(t.payload.id)?{favIds:[].concat(Object(x.a)(e.favIds),[t.payload.id]),favs:[].concat(Object(x.a)(e.favs),[t.payload.item])}:{favIds:e.favIds.filter((function(e){return e!==t.payload.id})),favs:e.favs.filter((function(e){return e.id!==t.payload.id}))};case"GET_LOCAL_STR":return{favIds:t.payload.favIds,favs:t.payload.favs};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return t.payload;default:return e}},title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TITLE":return{id:t.payload.id,pending:t.payload.pending,title:t.payload.data};default:return e}}}),R=a(2),G=a(24),M=a.n(G),L=a(25),F=a(6),D=a(10),J=function(e,t){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,r)}),t)}},P=function(e,t){e.length>0?(localStorage.setItem("ids",JSON.stringify(e)),localStorage.setItem("favs",JSON.stringify(t))):localStorage.clear()};a(38);var V=Object(R.b)(null,(function(e){return{getPop:function(){return e(O(v))},getTop:function(){return e(O(p))},getAir:function(){return e(O(g))},getByName:function(t){return e(O(t))}}}))((function(e){return r.a.createElement("div",{className:"ButtonBar",id:"btnBar"},r.a.createElement("input",{type:"text",className:"ButtonBar__input",id:"search",placeholder:"anime search",onChange:J((function(){e.getByName(f+document.getElementById("search").value)}),1e3)}),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getPop},"Most Popular"),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getTop},"Top Rated"),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getAir},"Top Airing"))}));a(39);function H(e){return r.a.createElement("div",{className:"AnimeCard"},e.children)}a(40);var W=Object(R.b)((function(e){return{results:Object(x.a)(e.results.loadedData),url:e.results.url,favorites:Object(x.a)(e.favorites.favs),favIds:Object(x.a)(e.favorites.favIds),pending:e.results.pending,more:e.results.pendingMore,offset:e.results.offset}}),(function(e){return{getMoreRes:function(t,a){return e(function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n){var r,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_MORE",payload:{data:[],url:"",pendingMore:!0}}),a.next=3,fetch(e+y+t,I);case 3:return r=a.sent,a.next=6,r.json();case 6:i=a.sent,n({type:"GET_MORE",payload:{data:i.data,url:e,pendingMore:!1,offset:t+E}});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))},addFav:function(t,a){return e(S(t,a))},getTit:function(t){return e(k(t))}}}))((function(e){return Object(n.useEffect)((function(){return P(e.favIds,e.favorites)})),r.a.createElement("div",{style:{backgroundColor:"#001f3f"}},r.a.createElement("div",{className:"AnimeList"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):e.results.map((function(t){return r.a.createElement(H,{key:t.id,id:t.id},r.a.createElement("h3",{className:"AnimeCard__h3"},-1===e.favIds.indexOf(t.id)?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow"},onClick:function(){e.addFav(t.id,t)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.addFav(t.id,t)}}),t.attributes.canonicalTitle),r.a.createElement(F.b,{to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("img",{className:"img",onClick:function(){return e.getTit(t.id)},src:t.attributes.posterImage.medium,alt:""})))}))),e.more?r.a.createElement("div",{className:"loader",style:{margin:"auto"}}):r.a.createElement("button",{className:"AnimeList__btn",style:{marginTop:"150px"},onClick:function(){e.getMoreRes(e.url,e.offset)}},"Show More"))}));a(42);var $=Object(R.b)((function(e){return{favorites:Object(x.a)(e.favorites.favs),favIds:Object(x.a)(e.favorites.favIds)}}),(function(e){return{toggleFav:function(t){return e(S(t))},getTit:function(t){return e(k(t))}}}))((function(e){return Object(n.useEffect)((function(){return P(e.favIds,e.favorites)})),r.a.createElement("div",{className:"Favs"},e.favorites.map((function(t){return r.a.createElement("div",{className:"Favs__card",key:t.id},r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.toggleFav(t.id,t)}}),r.a.createElement(F.b,{className:"Favs__card__link",to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("h3",{className:"cardH",onClick:function(){return e.getTit(t.id)}},t.attributes.canonicalTitle)))})))}));a(43);var q=Object(R.b)(null,(function(e){return{getPop:function(){return e(O(v))},getLcStr:function(){return e({type:"GET_LOCAL_STR",payload:{favIds:JSON.parse(localStorage.getItem("ids")),favs:JSON.parse(localStorage.getItem("favs"))}})},getCat:function(){return e(function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"GET_CATEGORIES",payload:n.data});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){return Object(n.useEffect)((function(){e.getPop(),e.getCat(),localStorage.getItem("ids")&&localStorage.getItem("favs")&&e.getLcStr()}),[e]),r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header__h3"},"Simple Anime Search",r.a.createElement("i",{className:"fas fa-bars",id:"bars",onClick:function(){"header__nav"===document.getElementById("nav").className?document.getElementById("nav").className="header__nav--responsive":"header__nav--responsive"===document.getElementById("nav").className&&(document.getElementById("nav").className="header__nav")}})),r.a.createElement("nav",{className:"header__nav",id:"nav"},r.a.createElement(F.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch"},"Discover Anime"),r.a.createElement(F.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/categories"},"Browse popular categories"),r.a.createElement(F.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/favorites"},"Favorites")))}));a(44);var z=Object(R.b)((function(e){return{categ:e.categories}}),(function(e){return{search:function(t){return e(O(t))}}}))((function(e){return r.a.createElement("div",{className:"Cats"},e.categ.map((function(t){return r.a.createElement(F.b,{className:"Cats__link",key:t.id,to:"/SimpleAnimeSearch",onClick:function(){return e.search(b+t.attributes.title+v)}},t.attributes.title)})))}));a(45);var K=Object(R.b)((function(e){return{title:e.title.title,favorites:Object(x.a)(e.favorites.favs),favIds:Object(x.a)(e.favorites.favIds),pending:e.title.pending,titleId:e.title.id}}),(function(e){return{addFav:function(t,a){return e(S(t,a))},getTit:function(t){return e(k(t))}}}))((function(e){return Object(n.useEffect)((function(){return P(e.favIds,e.favorites)})),Object(n.useEffect)((function(){if(!e.titleId){var t=window.location.pathname.split("/").pop();e.getTit(t)}}),[e]),r.a.createElement("div",{className:"TitleBox"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):r.a.createElement("div",{className:"TitleBox__info"},r.a.createElement("img",{className:"TitleBox__info__img",src:e.title.attributes.posterImage.medium,alt:""}),r.a.createElement("div",{className:"TitleBox__info__text"},r.a.createElement("h3",{className:"cardH"},-1===e.favIds.indexOf(e.title.id)?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow"},onClick:function(){e.addFav(e.title.id,e.title)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.addFav(e.title.id,e.title)}}),e.title.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating: ",e.title.attributes.averageRating),r.a.createElement("p",null,"Popularity rank: ",e.title.attributes.popularityRank),r.a.createElement("p",null,"Age rating: ",e.title.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",e.title.attributes.episodeCount),r.a.createElement("p",null,"Status: ",e.title.attributes.status),r.a.createElement("p",{className:"descHide",id:e.title.id+"desc"},"Synopsis:"),r.a.createElement("p",null,e.title.attributes.synopsis),r.a.createElement("button",{className:"TitleBox__vidBtn",onClick:function(){document.getElementById("watchBox").className="TitleBox__vidContainer--watch"}},"Watch trailer")),r.a.createElement("div",{id:"watchBox",className:"TitleBox__vidContainer",onClick:function(){document.getElementById("watchBox").className="TitleBox__vidContainer"}},r.a.createElement("iframe",{title:"trailer",src:"https://www.youtube.com/embed/"+e.title.attributes.youtubeVideoId}))))}));a(46);var Q=Object(R.b)((function(e){return{titleId:e.title.id}}),null)((function(e){return r.a.createElement("div",{className:"main"},r.a.createElement(F.a,null,r.a.createElement(q,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/SimpleAnimeSearch"},r.a.createElement(V,null),r.a.createElement(W,null)),r.a.createElement(D.a,{exact:!0,path:"/SimpleAnimeSearch/favorites"},r.a.createElement($,null)),r.a.createElement(D.a,{exact:!0,path:"/SimpleAnimeSearch/categories"},r.a.createElement(z,null)),r.a.createElement(D.a,{path:"/SimpleAnimeSearch/"+e.titleId},r.a.createElement(K,null)))))})),U=Object(o.d)(A,Object(o.a)(M.a,L.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R.a,{store:U},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2c6acaef.chunk.js.map