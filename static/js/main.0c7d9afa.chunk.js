(this["webpackJsonpanime-searcher"]=this["webpackJsonpanime-searcher"]||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(10),o="https://kitsu.io/api/edge/anime?",s="&filter[text]=",u="&filter[id]=",d="&sort=ratingRank",m="&sort=popularityRank",f="&filter[status]=current&sort=popularityRank",p="&page[offset]=",v="https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0",g="&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis",E="filter[categories]=",y="&page[limit]="+12+g,h={method:"GET",headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},b=function(e){var t=o+e+y;return function(e){e({type:"GET_ANIME",payload:{data:[],url:"",pending:!0}}),fetch(t,h).then((function(e){return e.json()})).then((function(a){return e({type:"GET_ANIME",payload:{data:a.data,url:t,pending:!1}})}))}},_=function(e,t){return{type:"TOGGLE_FAVORITE",payload:{id:e,item:t}}},I=function(e){return function(t){t({type:"GET_TITLE",payload:{id:e,pending:!0,data:{}}}),fetch(o+u+e+g).then((function(e){return e.json()})).then((function(a){return t({type:"GET_TITLE",payload:{id:e,pending:!1,data:a.data[0]}})}))}},N={url:"",loadedData:[],penging:!0,pendingMore:!1},T=a(4),B={favIds:[],favs:[]},O=[],S={title:{},pending:!0,id:""},k=Object(c.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ANIME":return{url:t.payload.url,loadedData:t.payload.data,pending:t.payload.pending};case"GET_MORE":return{url:t.payload.url,loadedData:e.loadedData.concat(t.payload.data),pendingMore:t.payload.pendingMore};default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FAVORITE":return-1===e.favIds.indexOf(t.payload.id)?{favIds:[].concat(Object(T.a)(e.favIds),[t.payload.id]),favs:[].concat(Object(T.a)(e.favs),[t.payload.item])}:{favIds:e.favIds.filter((function(e){return e!==t.payload.id})),favs:e.favs.filter((function(e){return e.id!==t.payload.id}))};case"GET_LOCAL_STR":return{favIds:t.payload.favIds,favs:t.payload.favs};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return t.payload;default:return e}},title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TITLE":return{id:t.payload.id,pending:t.payload.pending,title:t.payload.data};default:return e}}}),j=a(2),A=a(24),C=a.n(A),R=a(25),w=a(6),G=a(9),M=function(e,t){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,r)}),t)}},x=function(e,t){localStorage.setItem("ids",JSON.stringify(e)),localStorage.setItem("favs",JSON.stringify(t))};a(38);var L=Object(j.b)(null,(function(e){return{getPop:function(){return e(b(m))},getTop:function(){return e(b(d))},getAir:function(){return e(b(f))},getByName:function(t){return e(b(t))}}}))((function(e){return r.a.createElement("div",{className:"ButtonBar",id:"btnBar"},r.a.createElement("input",{type:"text",className:"ButtonBar__input",id:"search",placeholder:"anime search",onChange:M((function(){e.getByName(s+document.getElementById("search").value)}),1e3)}),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getPop},"Most Popular"),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getTop},"Top Rated"),r.a.createElement("button",{className:"ButtonBar__button",onClick:e.getAir},"Top Airing"))})),F=a(27);a(39);function D(e){return r.a.createElement("div",{className:"AnimeCard"},e.children)}a(40);var J=Object(j.b)((function(e){return{results:Object(T.a)(e.results.loadedData),url:e.results.url,favorites:Object(T.a)(e.favorites.favs),favIds:Object(T.a)(e.favorites.favIds),pending:e.results.pending,more:e.results.pendingMore}}),(function(e){return{getMoreRes:function(t,a){return e(function(e,t){return function(a){a({type:"GET_MORE",payload:{data:[],url:"",pendingMore:!0}}),fetch(e+p+t,h).then((function(e){return e.json()})).then((function(t){return a({type:"GET_MORE",payload:{data:t.data,url:e,pendingMore:!1}})}))}}(t,a))},addFav:function(t,a){return e(_(t,a))},getTit:function(t){return e(I(t))}}}))((function(e){var t=Object(n.useState)(10),a=Object(F.a)(t,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){return x(e.favIds,e.favorites)})),r.a.createElement("div",{style:{backgroundColor:"#001f3f"}},r.a.createElement("div",{className:"AnimeList"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):e.results.map((function(t){return r.a.createElement(D,{key:t.id,id:t.id},r.a.createElement("h3",{className:"AnimeCard__h3"},-1===e.favIds.indexOf(t.id)?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow"},onClick:function(){e.addFav(t.id,t)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.addFav(t.id,t)}}),t.attributes.canonicalTitle),r.a.createElement(w.b,{to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("img",{className:"img",onClick:function(){return e.getTit(t.id)},src:t.attributes.posterImage.medium,alt:""})))}))),e.more?r.a.createElement("div",{className:"loader",style:{margin:"auto"}}):r.a.createElement("button",{className:"AnimeList__btn",style:{marginTop:"150px"},onClick:function(){l(i+10),e.getMoreRes(e.url,i)}},"Show More"))}));a(42);var P=Object(j.b)((function(e){return{favorites:Object(T.a)(e.favorites.favs),favIds:Object(T.a)(e.favorites.favIds)}}),(function(e){return{toggleFav:function(t){return e(_(t))},getTit:function(t){return e(I(t))}}}))((function(e){return Object(n.useEffect)((function(){return x(e.favIds,e.favorites)})),r.a.createElement("div",{className:"Favs"},e.favorites.map((function(t){return r.a.createElement("div",{className:"Favs__card",key:t.id},r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.toggleFav(t.id,t)}}),r.a.createElement(w.b,{className:"Favs__card__link",to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("h3",{className:"cardH",onClick:function(){return e.getTit(t.id)}},t.attributes.canonicalTitle)))})))}));a(43);var H=Object(j.b)(null,(function(e){return{getPop:function(){return e(b(m))},getLcStr:function(){return e({type:"GET_LOCAL_STR",payload:{favIds:JSON.parse(localStorage.getItem("ids")),favs:JSON.parse(localStorage.getItem("favs"))}})},getCat:function(){return e((function(e){fetch(v).then((function(e){return e.json()})).then((function(t){return e({type:"GET_CATEGORIES",payload:t.data})}))}))}}}))((function(e){return Object(n.useEffect)((function(){e.getPop(),e.getCat(),localStorage.getItem("ids")&&localStorage.getItem("favs")&&e.getLcStr()}),[e]),r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header__h3"},"Simple Anime Search",r.a.createElement("i",{class:"fas fa-bars",id:"bars",onClick:function(){"header__nav"===document.getElementById("nav").className?document.getElementById("nav").className="header__nav--responsive":document.getElementById("nav").className="header__nav",document.getElementById("btnBar")&&"ButtonBar"===document.getElementById("btnBar").className?(document.getElementById("btnBar").className="ButtonBar--responsive",document.getElementById("nav").className="header__nav--responsive"):document.getElementById("btnBar")&&"ButtonBar--responsive"===document.getElementById("btnBar").className&&(document.getElementById("btnBar").className="ButtonBar",document.getElementById("nav").className="header__nav")}})),r.a.createElement("nav",{className:"header__nav",id:"nav"},r.a.createElement(w.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch"},"Discover Anime"),r.a.createElement(w.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/categories"},"Browse popular categories"),r.a.createElement(w.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/favorites"},"Favorites")))}));a(44);var V=Object(j.b)((function(e){return{categ:e.categories}}),(function(e){return{search:function(t){return e(b(t))}}}))((function(e){return r.a.createElement("div",{className:"Cats"},e.categ.map((function(t){return r.a.createElement(w.b,{className:"Cats__link",key:t.id,to:"/SimpleAnimeSearch",onClick:function(){return e.search(E+t.attributes.title+m)}},t.attributes.title)})))}));a(45);var W=Object(j.b)((function(e){return{title:e.title.title,favorites:Object(T.a)(e.favorites.favs),favIds:Object(T.a)(e.favorites.favIds),pending:e.title.pending,titleId:e.title.id}}),(function(e){return{addFav:function(t,a){return e(_(t,a))},getTit:function(t){return e(I(t))}}}))((function(e){return Object(n.useEffect)((function(){return x(e.favIds,e.favorites)})),Object(n.useEffect)((function(){if(!e.titleId){var t=window.location.pathname.split("/").pop();e.getTit(t)}}),[e]),r.a.createElement("div",{className:"TitleBox"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):r.a.createElement("div",{className:"TitleBox__info"},r.a.createElement("img",{className:"TitleBox__info__img",src:e.title.attributes.posterImage.medium,alt:""}),r.a.createElement("div",{className:"TitleBox__info__text"},r.a.createElement("h3",{className:"cardH"},-1===e.favIds.indexOf(e.title.id)?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow"},onClick:function(){e.addFav(e.title.id,e.title)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow"},onClick:function(){e.addFav(e.title.id,e.title)}}),e.title.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating:   ",e.title.attributes.averageRating),r.a.createElement("p",null,"Popularity rank: ",e.title.attributes.popularityRank),r.a.createElement("p",null,"Age rating: ",e.title.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",e.title.attributes.episodeCount),r.a.createElement("p",null,"Status: ",e.title.attributes.status),r.a.createElement("p",{className:"descHide",id:e.title.id+"desc"},"Synopsis:"),r.a.createElement("p",null,e.title.attributes.synopsis))))}));a(46);var $=Object(j.b)((function(e){return{titleId:e.title.id}}),null)((function(e){return r.a.createElement("div",{className:"main"},r.a.createElement(w.a,null,r.a.createElement(H,null),r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/SimpleAnimeSearch"},r.a.createElement(L,null),r.a.createElement(J,null)),r.a.createElement(G.a,{exact:!0,path:"/SimpleAnimeSearch/favorites"},r.a.createElement(P,null)),r.a.createElement(G.a,{exact:!0,path:"/SimpleAnimeSearch/categories"},r.a.createElement(V,null)),r.a.createElement(G.a,{path:"/SimpleAnimeSearch/"+e.titleId},r.a.createElement(W,null)))))})),q=Object(c.d)(k,Object(c.a)(C.a,R.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,{store:q},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0c7d9afa.chunk.js.map