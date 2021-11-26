(function(e){function t(t){for(var r,c,s=t[0],l=t[1],i=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return E}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    container\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n    mt-5\n  ",attrs:{id:"app"}},[n("h3",[e._v("Willkommen bei der Service Worker Untersuchung!")]),n("ButtonGet",{on:{get:e.fetchData}}),n("CardView",{attrs:{employees:e.employees},on:{del:e.delEmployee}})],1)},a=[],c=n("1da1"),s=(n("99af"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])}),l=[],i={},u=i,d=n("2877"),p=Object(d["a"])(u,s,l,!1,null,"d62479b4",null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:t.picture.large,alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v("Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last))]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v(" Delete ")])])})),0)])])},v=[],h={props:{employees:{type:Array}},data:function(){return{serverAddress:""}}},g=h,b=(n("d2e8"),Object(d["a"])(g,m,v,!1,null,"534d3199",null)),y=b.exports,w=n("bc3a"),_=n.n(w),x={name:"app",components:{ButtonGet:f,CardView:y},data:function(){return{serverAddress:"",employees:[]}},methods:{fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetchData called"),t.prev=1,t.next=4,_.a.get("".concat(e.serverAddress,"/employees"));case 4:n=t.sent,r=n.data,e.employees=r,console.log("OK"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},delEmployee:function(e){console.log("delEmployee called");try{_.a.delete("".concat(this.serverAddress,"/employees/").concat(e.id)),this.fetchData(),console.log("Gelöscht")}catch(t){console.log(t.message)}},updateAvailable:function(){alert("UPDATE")}},created:function(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})}},k=x,j=Object(d["a"])(k,o,a,!1,null,null,null),O=j.exports,C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var E="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"88af":function(e,t,n){},d2e8:function(e,t,n){"use strict";n("88af")}});
//# sourceMappingURL=app.0f00aa27.js.map