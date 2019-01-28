(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],p=0,h=[];p<o.length;p++)i=o[p],s[i]&&h.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/hackernewsboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1035:function(t,e,a){"use strict";var n=a("8834"),s=a.n(n);s.a},2849:function(t,e,a){},3273:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Navbar"),a("transition",{attrs:{name:"animation"}},[a("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[a("i",{staticClass:"material-icons md-36"},[t._v("radio")]),a("h1",[a("router-link",{staticClass:"logo__name",attrs:{to:{path:"/"},title:"logo and link to top news"}},[t._v("HackNewsBoard")])],1)]),a("div",{staticClass:"header__buttons"},[a("div",{staticClass:"search",attrs:{title:"search"}},[a("i",{staticClass:"material-icons icon__search"},[t._v("search")]),a("input",{staticClass:"search__field",attrs:{type:"text",placeholder:"search..."},domProps:{value:t.search},on:{input:t.onChange}})]),a("div",{staticClass:"store"},[a("router-link",{attrs:{to:{path:"/favorites"},title:"favorites"}},[a("i",{staticClass:"material-icons store"},[t._v("favorite")])])],1)])])},o=[],c=new n["a"],u={name:"Header",data:function(){return{search:""}},methods:{onChange:function(t){c.$emit("search",t.target.value.trim())}}},l=u,p=(a("e331"),a("2877")),h=Object(p["a"])(l,i,o,!1,null,"40d6ec8b",null);h.options.__file="Header.vue";var g=h.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"nav__list"},[a("router-link",{staticClass:"nav__item--link",attrs:{to:{path:"/"}}},[t._v("Top")]),a("router-link",{staticClass:"nav__item--link",attrs:{to:{path:"/new"}}},[t._v("New")]),a("router-link",{staticClass:"nav__item--link",attrs:{to:{path:"/show"}}},[t._v("Show")]),a("router-link",{staticClass:"nav__item--link",attrs:{to:{path:"/ask"}}},[t._v("Ask")]),a("router-link",{staticClass:"nav__item--link",attrs:{to:{path:"/jobs"}}},[t._v("Jobs")])],1)])])},d=[],m={name:"Navbar"},v=m,_=(a("c4a9"),Object(p["a"])(v,f,d,!1,null,"ce8b22b2",null));_.options.__file="Navbar.vue";var b=_.exports,w={name:"App",components:{Header:g,Navbar:b}},x=w,C=(a("034f"),Object(p["a"])(x,s,r,!1,null,null,null));C.options.__file="App.vue";var k=C.exports,P=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.newspages.length>0?[a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])]),t._l(t.renderNews,function(t,e){return a("div",{key:e,staticClass:"container"},[a("div",{staticClass:"newspage--container"},[a("newslist",{attrs:{newspage:t}}),a("newsitem",{attrs:{newspage:t}})],1)])}),a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage+1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])])]:t._e()],2)},O=[],y=a("75fc"),R=(a("386d"),a("96cf"),a("3b8d")),D=a("bc3a"),N=a.n(D),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"newspage__block"},[a("h2",[a("router-link",{staticClass:"newspage__title",attrs:{to:{path:"/story/"+t.newspage.id}}},[t._v(t._s(t.newspage.title))])],1),a("p",[a("a",{staticClass:"newspage__link",attrs:{href:t.newspage.url}},[t._v(t._s(t.newspage.url))])]),a("p",[t._v("Comments: "+t._s(t.newspage.comments_count))]),a("p",[t._v("Score: "+t._s(t.newspage.points))])])])},S=[],F={name:"newslist",props:["newspage"]},T=F,E=Object(p["a"])(T,$,S,!1,null,null,null);E.options.__file="newslist.vue";var L=E.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"store-block"},[t.renderFavorites?a("div",{staticClass:"store",attrs:{title:"Remove from favorites"},on:{click:function(e){t.deleteFavorite(t.newspage)}}},[a("i",{staticClass:"material-icons store store--true"},[t._v("favorites")])]):a("div",{staticClass:"store",attrs:{title:"Add to favorites"},on:{click:function(e){t.addToFavorite(t.newspage)}}},[a("i",{staticClass:"material-icons store store--false"},[t._v("favorites")])])])])},B=[],H=a("cebc"),J=a("2f62"),M={name:"newsitem",props:["newspage"],computed:Object(H["a"])({},Object(J["c"])(["favorites"]),{renderFavorites:function(){return this.favorites.indexOf(this.newspage)>-1}}),methods:Object(H["a"])({},Object(J["b"])(["addToFavorite","deleteFavorite"]))},q=M,z=Object(p["a"])(q,A,B,!1,null,null,null);z.options.__file="newsitem.vue";var G=z.exports,I={name:"Top",components:{newslist:L,newsitem:G},data:function(){return{err:"",newspages:[],page:1,maxPage:10,search:""}},created:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return c.$on("search",function(t){return e.search=t}),t.next=3,this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{renderNews:function(){var t=this;return this.newspages.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{firstPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage+1)){t.next=5;break}return this.page=1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),lastPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.maxPage,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),inc:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.page+1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),last:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=this.page-1,this.search="",t.next=4,this.loadData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://api.hnpwa.com/v0/news/".concat(this.page,".json"));case 2:e=t.sent,this.newspages=Object(y["a"])(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},K=I,Q=Object(p["a"])(K,j,O,!1,null,null,null);Q.options.__file="Top.vue";var U=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.newspages.length>0?[a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])]),t._l(t.renderNews,function(t,e){return a("div",{key:e,staticClass:"container"},[a("div",{staticClass:"newspage--container"},[a("newslist",{attrs:{newspage:t}}),a("newsitem",{attrs:{newspage:t}})],1)])}),a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage+1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])])]:t._e()],2)},W=[],X={name:"New",components:{newslist:L,newsitem:G},data:function(){return{err:"",newspages:[],page:1,maxPage:10,search:""}},created:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return c.$on("search",function(t){return e.search=t}),t.next=3,this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{renderNews:function(){var t=this;return this.newspages.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{firstPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage+1)){t.next=5;break}return this.page=1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),lastPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.maxPage,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),inc:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.page+1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),last:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=this.page-1,this.search="",t.next=4,this.loadData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://api.hnpwa.com/v0/newest/".concat(this.page,".json"));case 2:e=t.sent,this.newspages=Object(y["a"])(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},Y=X,Z=Object(p["a"])(Y,V,W,!1,null,null,null);Z.options.__file="New.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.newspages.length>0?[a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])]),t._l(t.renderNews,function(t,e){return a("div",{key:e,staticClass:"container"},[a("div",{staticClass:"newspage--container"},[a("newslist",{attrs:{newspage:t}}),a("newsitem",{attrs:{newspage:t}})],1)])}),a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage+1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])])]:t._e()],2)},at=[],nt={name:"Show",components:{newslist:L,newsitem:G},data:function(){return{err:"",newspages:[],page:1,maxPage:2,search:""}},created:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return c.$on("search",function(t){return e.search=t}),t.next=3,this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{renderNews:function(){var t=this;return this.newspages.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{firstPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage+1)){t.next=5;break}return this.page=1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),lastPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.maxPage,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),inc:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.page+1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),last:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=this.page-1,this.search="",t.next=4,this.loadData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://api.hnpwa.com/v0/show/".concat(this.page,".json"));case 2:e=t.sent,this.newspages=Object(y["a"])(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},st=nt,rt=Object(p["a"])(st,et,at,!1,null,null,null);rt.options.__file="Show.vue";var it=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.newspages.length>0?[a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])]),t._l(t.renderNews,function(e,n){return a("div",{key:n,staticClass:"container"},[a("div",{staticClass:"newspage--container"},[a("div",{staticClass:"newspage__block"},[a("h2",[a("router-link",{staticClass:"newspage__title newspage__title--ask",attrs:{to:{path:"/story/"+e.id}}},[t._v(t._s(e.title))])],1),a("p",[t._v("Comments: "+t._s(e.comments_count))]),a("p",[t._v("Score: "+t._s(e.points))])]),a("newsitem",{attrs:{newspage:e}})],1)])}),a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage+1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])])]:t._e()],2)},ct=[],ut={name:"Ask",components:{newsitem:G},data:function(){return{err:"",newspages:[],page:1,maxPage:2,search:""}},created:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return c.$on("search",function(t){return e.search=t}),t.next=3,this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{renderNews:function(){var t=this;return this.newspages.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{firstPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage+1)){t.next=5;break}return this.page=1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),lastPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.maxPage,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),inc:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.page+1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),last:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=this.page-1,this.search="",t.next=4,this.loadData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://api.hnpwa.com/v0/ask/".concat(this.page,".json"));case 2:e=t.sent,this.newspages=Object(y["a"])(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},lt=ut,pt=(a("83be"),Object(p["a"])(lt,ot,ct,!1,null,"6eba874a",null));pt.options.__file="Ask.vue";var ht=pt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.newspages.length>0?[a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])]),t._l(t.renderNews,function(t,e){return a("div",{key:e,staticClass:"container"},[a("div",{staticClass:"newspage--container"},[a("newslist",{attrs:{newspage:t}}),a("newsitem",{attrs:{newspage:t}})],1)])}),a("div",{staticClass:"container btn--container"},[a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage+1},on:{click:function(e){t.firstPage()}}},[t._v("«")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page<=1},on:{click:function(e){t.last()}}},[t._v("<")]),a("button",{staticClass:"btn__page btn--num",attrs:{disabled:t.page<=t.maxPage}},[t._v(t._s(t.page))]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.inc()}}},[t._v(">")]),a("button",{staticClass:"btn__page",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){t.lastPage()}}},[t._v("»")])])]:t._e()],2)},ft=[],dt={name:"Show",components:{newslist:L,newsitem:G},data:function(){return{err:"",newspages:[],page:1,maxPage:1,search:""}},created:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return c.$on("search",function(t){return e.search=t}),t.next=3,this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{renderNews:function(){var t=this;return this.newspages.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{firstPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage+1)){t.next=5;break}return this.page=1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),lastPage:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.maxPage,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),inc:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.page<this.maxPage)){t.next=5;break}return this.page=this.page+1,this.search="",t.next=5,this.loadData();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),last:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=this.page-1,this.search="",t.next=4,this.loadData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://api.hnpwa.com/v0/jobs/".concat(this.page,".json"));case 2:e=t.sent,this.newspages=Object(y["a"])(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},mt=dt,vt=Object(p["a"])(mt,gt,ft,!1,null,null,null);vt.options.__file="Jobs.vue";var _t=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"news__title"},[t._v(t._s(t.newspage.title))]),a("div",{staticClass:"news__title--block"},[a("p",[t._v("Score: "+t._s(t.newspage.score))]),a("a",{staticClass:"news__url",attrs:{href:t.newspage.url}},[t._v(t._s(t.newspage.url))])]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn&&!t.showComments,expression:"showBtn  && !showComments"}],staticClass:"btn btn--login",on:{click:function(e){t.showComments=!t.showComments}}},[t._v("Display comments")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn&&t.showComments,expression:"showBtn  && showComments"}],staticClass:"btn btn--signup",on:{click:function(e){t.showComments=!t.showComments}}},[t._v("hide comments")]),t._l(t.comments,function(e){return a("div",{key:e.id},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showComments,expression:"showComments"}],staticClass:"comment__block"},[a("h3",[t._v("Name: "+t._s(e.by))]),a("h5",[t._v("Time: "+t._s(e.time))]),a("p",{staticClass:"comment__text"},[t._v(t._s(e.text))]),a("div",{directives:[{name:"show",rawName:"v-show",value:null==e.by,expression:"comment.by == null"}],staticClass:"show"},[a("h2",[t._v("No comment. T_T")])])])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"show"},[a("h2",[t._v("No comments yet. T_T")])])],2)},wt=[],xt=(a("ac6a"),{name:"Story",data:function(){return{newspage:{},comments:[],show:!1,showBtn:!0,showComments:!1}},created:function(){var t=this;N.a.get("https://hacker-news.firebaseio.com/v0/item/"+this.$route.params.id+".json").then(function(e){t.newspage=e.data,t.newspage.comments=[],t.newspage.kids.forEach(function(e){N.a.get("https://hacker-news.firebaseio.com/v0/item/"+e+".json").then(function(e){null==e.data.by&&console.log(e.data.by),t.comments.push(e.data)}).catch(function(t){console.log(t)})})}).catch(function(e){console.log(e),t.show=!0,t.showBtn=!1})}}),Ct=xt,kt=(a("1035"),Object(p["a"])(Ct,bt,wt,!1,null,"14e58040",null));kt.options.__file="Story.vue";var Pt=kt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.favorites,function(e,n){return a("div",{key:n,staticClass:"newspage--container"},[a("div",{staticClass:"newspage__block"},[a("h2",[a("router-link",{staticClass:"newspage__title",attrs:{to:{path:"/story/"+e.id}}},[t._v(t._s(e.title))])],1),a("p",[a("a",{staticClass:"newspage__link",attrs:{href:e.url}},[t._v(t._s(e.url))])]),a("p",[t._v("Comments: "+t._s(e.comments_count))]),a("p",[t._v("Score: "+t._s(e.points))])]),a("div",{staticClass:"store-block"},[a("div",{staticClass:"store store--false",on:{click:function(a){t.deleteFavorite(e)}}},[a("i",{staticClass:"material-icons store"},[t._v("clear")])])])])}),0)},Ot=[],yt={computed:Object(H["a"])({},Object(J["c"])(["favorites"])),methods:Object(H["a"])({},Object(J["b"])(["addToFavorite","deleteFavorite"]))},Rt=yt,Dt=Object(p["a"])(Rt,jt,Ot,!1,null,null,null);Dt.options.__file="Favorites.vue";var Nt=Dt.exports;n["a"].use(P["a"]);var $t=new P["a"]({routes:[{path:"/favorites",name:"Favorites",component:Nt},{path:"/",name:"Top",component:U},{path:"/show",name:"Show",component:it},{path:"/ask",name:"Ask",component:ht},{path:"/new",name:"New",component:tt},{path:"/jobs",name:"Jobs",component:_t},{path:"/story/:id",name:"Story",component:Pt}],mode:"history"});n["a"].use(J["a"]);var St=new J["a"].Store({state:{favorites:[]},mutations:{updateFavorites:function(t,e){t.favorites.push(e)},clearFavorite:function(t,e){t.favorites=t.favorites.filter(function(t){return t!==e})}},actions:{addToFavorite:function(t,e){var a=t.commit;a("updateFavorites",e)},deleteFavorite:function(t,e){var a=t.commit;a("clearFavorite",e)}}});a("e2b4");n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:$t,store:St,components:{App:k},render:function(t){return t(k)}})},"64a9":function(t,e,a){},"83be":function(t,e,a){"use strict";var n=a("988e"),s=a.n(n);s.a},8834:function(t,e,a){},"988e":function(t,e,a){},c4a9:function(t,e,a){"use strict";var n=a("3273"),s=a.n(n);s.a},e2b4:function(t,e,a){},e331:function(t,e,a){"use strict";var n=a("2849"),s=a.n(n);s.a}});
//# sourceMappingURL=app.635a6fd3.js.map