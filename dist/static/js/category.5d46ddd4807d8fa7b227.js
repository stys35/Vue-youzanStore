webpackJsonp([5],{"+GGk":function(e,t,n){"use strict";var r=n("zIVT");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},"/VWB":function(e,t,n){"use strict";var r=n("RlDD");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},"035s":function(e,t){},"0l+G":function(e,t,n){"use strict";var r=n("obgR");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},"1DmB":function(e,t,n){"use strict";var r=n("zIVT");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"4nb4":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"5aBc":function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),s="",a=0,u=r;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new o;t=t<<8|n}return s}},"7LYE":function(e,t,n){"use strict";var r=n("zIVT"),o=n("wZW9"),i=n("RS1v"),s=n("9T8H"),a=n("1DmB"),u=n("0l+G"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("5aBc");e.exports=function(e){return new Promise(function(t,f){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||a(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,r),l=null}},l.onerror=function(){f(u("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var y=n("OhlP"),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in l&&r.forEach(p,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===d&&(d=null),l.send(d)})}},"9RB6":function(e,t,n){"use strict";var r=n("T2kP"),o=n("zIVT"),i=n("+GGk"),s=n("U2+V");function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},"9T8H":function(e,t,n){"use strict";var r=n("zIVT"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},BTlr:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},C9l1:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"Ex+b":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},HXpE:function(e,t,n){"use strict";var r=n("zIVT"),o=n("4nb4"),i=n("9RB6"),s=n("T2kP");function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(s);u.Axios=i,u.create=function(e){return a(r.merge(s,e))},u.Cancel=n("RlDD"),u.CancelToken=n("/VWB"),u.isCancel=n("C9l1"),u.all=function(e){return Promise.all(e)},u.spread=n("Kbjq"),e.exports=u,e.exports.default=u},Hwmd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("035s"),o=(n.n(r),n("igmb")),i=(n.n(o),n("7+uW")),s=n("uj17"),a=n.n(s),u=n("TFhR"),c=n("U/rD");new i.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSublist(0,0)},methods:{getTopList:function(){var e=this;a.a.get(u.a.topList).then(function(t){e.topLists=t.data.lists,console.log(t)})},getSublist:function(e,t){var n=this;this.topIndex=t,0===t?this.getRank():a.a.get(u.a.subList,{id:e}).then(function(e){n.subData=e.data.data})},getRank:function(){var e=this;a.a.get(u.a.rank).then(function(t){e.rankData=t.data.data,console.log(e.rankData)})},toSearch:function(e){location.href="search.html?keyword="+e.name+"&id="+e.id}},mixins:[c.a]})},Kbjq:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},NgAd:function(e,t){},OhlP:function(e,t,n){"use strict";var r=n("zIVT");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},RS1v:function(e,t,n){"use strict";var r=n("zIVT");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},RlDD:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},T2kP:function(e,t,n){"use strict";(function(t){var r=n("zIVT"),o=n("TOXd"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7LYE"):void 0!==t&&(a=n("7LYE")),a),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u}).call(t,n("W2nU"))},TFhR:function(e,t,n){"use strict";var r={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in r)r.hasOwnProperty(o)&&(r[o]="http://rap2api.taobao.org/app/mock/7058"+r[o]);t.a=r},TOXd:function(e,t,n){"use strict";var r=n("zIVT");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},"U/rD":function(e,t,n){"use strict";var r={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var n=t.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:n("nq5D").a}};t.a=r},"U2+V":function(e,t,n){"use strict";var r=n("zIVT"),o=n("i7gz"),i=n("C9l1"),s=n("T2kP"),a=n("Ex+b"),u=n("BTlr");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},ZH5x:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},i7gz:function(e,t,n){"use strict";var r=n("zIVT");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},igmb:function(e,t){},jCMp:function(e,t,n){"use strict";var r=new(n("7+uW").default);t.a=r},nq5D:function(e,t,n){"use strict";var r=n("6iV/"),o=n.n(r),i=n("jCMp"),s=n("162o"),a=(o.a.parse(location.search.substr(1)).index,[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}]),u={props:["obj"],name:"Foot",data:function(){return{navConfig:a,curIndex:parseInt(o.a.parse(location.search.substr(1)).index)||0,ob:this.obj}},created:function(){var e=this;Object(s.setTimeout)(function(){e.ob.age=18,i.a.$emit("change",18)},5e3)},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t,console.log(location.href),event.preventDefault()}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,r){return n("li",{key:r,class:{active:r==e.curIndex},on:{click:function(n){e.changeNav(t,r)}}},[n("a",[n("i",{class:t.icon}),e._v(" "),n("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]};var f=n("VU/8")(u,c,!1,function(e){n("NgAd")},null,null);t.a=f.exports},obgR:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},uj17:function(e,t,n){e.exports=n("HXpE")},wZW9:function(e,t,n){"use strict";var r=n("0l+G");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},zIVT:function(e,t,n){"use strict";var r=n("4nb4"),o=n("ZH5x"),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}}},["Hwmd"]);
//# sourceMappingURL=category.5d46ddd4807d8fa7b227.js.map