/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(n){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new A(r||[]);return a(i,"_invoke",{value:C(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function E(){}var L={};d(L,s,(function(){return this}));var k=Object.getPrototypeOf,T=k&&k(k(j([])));T&&T!==o&&i.call(T,s)&&(L=T);var x=E.prototype=b.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,n){function r(o,a,c,s){var u=h(e[o],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,r){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=R(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var u=h(t,e,r);if("normal"===u.type){if(o=r.done?m:y,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function R(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,R(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=d(E,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,d(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},S(_.prototype),d(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(x),d(x,l,"Generator"),d(x,s,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function o(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}require("fs");var a=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},null,o=[{key:"getLink",value:function(){return window.location.href}},{key:"getAuthorizationUrl",value:function(){var t=encodeURIComponent(this.REDIRECT_URI),e=encodeURIComponent("user-read-private user-read-email playlist-read-private user-library-read playlist-modify-public playlist-modify-private");return"".concat(this.AUTH_URL,"?client_id=").concat(this.CLIENT_ID,"&response_type=code&redirect_uri=").concat(t,"&scope=").concat(e)}},{key:"getAuthCode",value:function(t){return t.substring(t.indexOf("?code=")+6)}},{key:"requestAccessAndRefreshTokens",value:(i=e().mark((function t(n){var r,o,i,a,c,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=btoa("".concat(this.CLIENT_ID,":").concat(this.CLIENT_SECRET)),o=new URL(this.TOKEN_URL),i="grant_type=authorization_code&client_credentials&code=".concat(n,"&redirect_uri=").concat(encodeURIComponent(this.REDIRECT_URI)),t.next=5,fetch(o,{method:"POST",headers:{Authorization:"Basic ".concat(r),"Content-Type":"application/x-www-form-urlencoded"},body:i});case 5:if((a=t.sent).ok){t.next=8;break}throw new Error("Failed to request access and refresh tokens: ".concat(a.status," ").concat(a.statusText));case 8:return t.next=10,a.json();case 10:return c=t.sent,s=c.access_token,console.log(c),t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,e=arguments;return new Promise((function(r,o){var a=i.apply(t,e);function c(t){n(a,r,o,c,s,"next",t)}function s(t){n(a,r,o,c,s,"throw",t)}c(void 0)}))},function(t){return a.apply(this,arguments)})},{key:"sendToken",value:function(t){fetch("/receiveAuthCode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,type:"token"})}).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.text()})).then((function(t){console.log("Response from server:",t)})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))}}],o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,i,a}();o(a,"CLIENT_ID","cb18dd90851c4cdbb12c12905aa51e30"),o(a,"CLIENT_SECRET","b6ebc17b8a454eb3b5f2cf75fb48f5e1"),o(a,"REDIRECT_URI","http://localhost:8080"),o(a,"AUTH_URL","https://accounts.spotify.com/authorize"),o(a,"TOKEN_URL","https://accounts.spotify.com/api/token"),o(a,"code",void 0);const c=require("electron");function s(t){var e=t.track.name,n=u(t.track.artists),r=t.track.album.images[0],o=t.track.artists[0].href,i=document.querySelector(".tracks");console.log(e,n,r,o);var a=document.createElement("li"),c=document.createElement("div");c.setAttribute("class","track"),c.setAttribute("data-artist-endpoint",o);var s=document.createElement("img");s.setAttribute("class","logo"),s.src=r?r.url:"source/icon.png";var l=document.createElement("div");l.setAttribute("class","details");var d=document.createElement("p");d.setAttribute("class","name");var f=document.createElement("p");f.setAttribute("class","artist"),d.textContent=e,f.textContent=n.join(", "),l.appendChild(d),l.appendChild(f),c.appendChild(s),c.appendChild(l),a.appendChild(c),i.appendChild(a)}window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".button-start");document.querySelector(".icon-container"),t.addEventListener("click",(function(e){t.classList.toggle("animation-active"),setTimeout((function(){var e,n;t.classList.add("fade-out"),setTimeout((function(){t.style.display="none"}),500),e=document.querySelector(".loader-container"),n=document.querySelector(".status"),e.style.display="block",n.style.display="block",setTimeout((function(){e.classList.add("fade-in"),n.classList.add("fade-in")}),400)}),2e3),console.log(a.getAuthorizationUrl()),c.ipcRenderer.send("open-auth-window",a.getAuthorizationUrl())})),c.ipcRenderer.on("authorized",(function(){setTimeout((function(){l("Making magic")}),3e3)})),c.ipcRenderer.on("send-created-playlist",(function(t,e){l("Adding songs");var n=e.songs;console.log(n[0]);for(var r=0;r<n.length;r+=1)s(n[r]);setTimeout((function(){var t,e,n,r,o;document.querySelectorAll("li").forEach((function(t){t.addEventListener("click",(function(){var e=t.querySelector(".track").dataset.artistEndpoint;console.log("You tapped on div with ".concat(e)),c.ipcRenderer.send("send-endpoint",e)}))})),t=document.querySelector(".list-container"),e=document.querySelector(".icon-container"),n=document.querySelector(".loader-container"),r=document.querySelector(".slide-in-text"),o=document.querySelector(".status"),n.classList.remove("fade-in"),o.classList.remove("fade-in"),o.style.opacity=0,setTimeout((function(){n.style.display="none",o.style.display="none",e.classList.add("move"),r.classList.add("slid-in")}),600),setTimeout((function(){var e=document.querySelector(".tracks");t.classList.contains("fade-in")||e.classList.contains("fade-in")||(t.style.display="block",e.style.display="block",setTimeout((function(){t.classList.add("fade-in"),e.classList.add("fade-in")}),100))}),1500)}),5e3)})),c.ipcRenderer.on("response-artist",(function(t,e){console.log(e)})),c.ipcRenderer.on("throw-error",(function(t,e){setTimeout((function(){var t=document.querySelector(".icon-container"),n=document.querySelector(".loader-container"),r=document.querySelector(".list-container"),o=document.querySelector(".status");o.style.opacity=0,t.style.opacity=0,n.style.opacity=0,r.style.opacity=0,setTimeout((function(){r.style.display="none",t.style.display="none",n.style.display="none",o.style.display="none",function(t){var e=document.querySelector("body"),n=document.createElement("div");n.setAttribute("class","error-container");var r=document.createElement("div");r.setAttribute("class","error-title");var o=document.createElement("div");o.setAttribute("class","error-description"),r.textContent="".concat(t.message,": ").concat(t.status),o.textContent=t.description,n.appendChild(r),n.appendChild(o),e.appendChild(n),setTimeout((function(){r.classList.add("fade-in"),o.classList.add("fade-in"),n.classList.add("fade-in")}),10)}(e)}),1700)}),4500),console.log(e)}))}));var u=function(t){var e=[];if(t.length<3)return t.map((function(t){return t.name}));for(var n=0;n<=2;)e.push(t[n].name),n+=1;if(e.join(",").length>36){var r=0;for(e=[];r<2;)e.push(t[r].name),r+=1}return e};function l(t){var e=document.querySelector(".status");e.style.opacity=0,setTimeout((function(){e.textContent=t,e.style.opacity=1}),500)}})();