/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(n){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new O(r||[]);return i(a,"_invoke",{value:A(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var h="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function b(){}function L(){}function w(){}var E={};d(E,s,(function(){return this}));var C=Object.getPrototypeOf,k=C&&C(C(j([])));k&&k!==o&&a.call(k,s)&&(E=k);var x=w.prototype=b.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(o,i,c,s){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function A(t,e,r){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=_(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var u=f(t,e,r);if("normal"===u.type){if(o=r.done?y:m,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=y,r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return L.prototype=w,i(x,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:L,configurable:!0}),L.displayName=d(w,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},T(S.prototype),d(S.prototype,u,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new S(p(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(x),d(x,l,"Generator"),d(x,s,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function o(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var i=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},null,o=[{key:"getLink",value:function(){return window.location.href}},{key:"getAuthorizationUrl",value:function(){var t=encodeURIComponent(this.REDIRECT_URI),e=encodeURIComponent("user-read-private user-read-email playlist-read-private user-library-read playlist-modify-public playlist-modify-private");return"".concat(this.AUTH_URL,"?client_id=").concat(this.CLIENT_ID,"&response_type=code&redirect_uri=").concat(t,"&scope=").concat(e)}},{key:"getAuthCode",value:function(t){return t.substring(t.indexOf("?code=")+6)}},{key:"requestAccessAndRefreshTokens",value:(a=e().mark((function t(n){var r,o,a,i,c,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=btoa("".concat(this.CLIENT_ID,":").concat(this.CLIENT_SECRET)),o=new URL(this.TOKEN_URL),a="grant_type=authorization_code&client_credentials&code=".concat(n,"&redirect_uri=").concat(encodeURIComponent(this.REDIRECT_URI)),t.next=5,fetch(o,{method:"POST",headers:{Authorization:"Basic ".concat(r),"Content-Type":"application/x-www-form-urlencoded"},body:a});case 5:if((i=t.sent).ok){t.next=8;break}throw new Error("Failed to request access and refresh tokens: ".concat(i.status," ").concat(i.statusText));case 8:return t.next=10,i.json();case 10:return c=t.sent,s=c.access_token,console.log(c),t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=a.apply(t,e);function c(t){n(i,r,o,c,s,"next",t)}function s(t){n(i,r,o,c,s,"throw",t)}c(void 0)}))},function(t){return i.apply(this,arguments)})},{key:"sendToken",value:function(t){fetch("/receiveAuthCode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,type:"token"})}).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.text()})).then((function(t){console.log("Response from server:",t)})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))}}],o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,a,i}();o(i,"CLIENT_ID","cb18dd90851c4cdbb12c12905aa51e30"),o(i,"CLIENT_SECRET","b6ebc17b8a454eb3b5f2cf75fb48f5e1"),o(i,"REDIRECT_URI","http://localhost:8080"),o(i,"AUTH_URL","https://accounts.spotify.com/authorize"),o(i,"TOKEN_URL","https://accounts.spotify.com/api/token"),o(i,"code",void 0);const c=require("electron");var s=!1,u=!1;function l(t){var e=t.track.name,n=d(t.track.artists),r=t.track.album.images[0],o=t.track.preview_url,a=document.querySelector(".tracks");console.log(e,n,r,o);var i=document.createElement("li");i.classList.add("track-list-item");var c=document.createElement("div");c.setAttribute("class","track"),c.setAttribute("data-track-preview",o);var s=document.createElement("img");s.setAttribute("class","logo"),s.src=r?r.url:"source/icon.png";var u=document.createElement("div");u.setAttribute("class","details");var l=document.createElement("p");l.setAttribute("class","name");var p=document.createElement("p");p.setAttribute("class","artist"),l.textContent=e,p.textContent=n.join(", "),u.appendChild(l),u.appendChild(p),c.appendChild(s),c.appendChild(u),i.appendChild(c),a.appendChild(i)}window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".button-start");t.addEventListener("click",(function(e){t.classList.toggle("animation-active"),setTimeout((function(){var e,n;t.classList.add("fade-out"),setTimeout((function(){t.style.display="none"}),500),e=document.querySelector(".loader-container"),n=document.querySelector(".status"),e.style.display="block",n.style.display="block",setTimeout((function(){e.classList.add("fade-in"),n.classList.add("fade-in")}),400)}),2e3),c.ipcRenderer.send("open-auth-window",i.getAuthorizationUrl())})),c.ipcRenderer.on("authorized",(function(){setTimeout((function(){p("Making magic")}),3e3)})),c.ipcRenderer.on("send-created-playlist",(function(t,e){p("Adding songs");var n=e.songs;console.log(n[0]);for(var r=0;r<n.length;r+=1)l(n[r]);setTimeout((function(){var t,n,r,o,a;document.querySelectorAll("li").forEach((function(t){t.addEventListener("click",(function(){var e=t.querySelector(".name").textContent,n=t.querySelector(".artist").textContent.split(", "),r=t.querySelector(".logo").src,o=t.querySelector(".track").dataset.trackPreview;console.log("You tapped on div with ".concat(o)),"null"!==o?(function(t){var e=document.createElement("div");e.setAttribute("class","popup");var n=document.createElement("div");n.setAttribute("class","audio-player-container");var r=document.createElement("div");r.setAttribute("class","image-container");var o=document.createElement("div");o.setAttribute("class","gradient-overlay");var a=document.createElement("img");a.setAttribute("class","track-logo"),a.src=t.logo;var i=document.createElement("div");i.setAttribute("class","track-name"),i.textContent=function(t){return t.length>22?"".concat(t.slice(0,19),"..."):t}(t.name);var c=document.createElement("ul");c.setAttribute("class","artists"),t.artists.map((function(t){var e=document.createElement("li");e.classList.add("artist");var n=document.createElement("a");n.classList.add("link-to-artist"),n.href="",n.textContent=t,e.appendChild(n),c.appendChild(e)}));var s=document.createElement("div");s.classList.add("player");var u=document.createElement("audio");u.src=t.previewUrl;var l=document.createElement("button");l.classList.add("btn"),l.setAttribute("data-status","stop");var d=document.createElement("img");d.classList.add("btn-icon"),d.src="assets/start.png";var p=document.createElement("div");p.classList.add("player-info");var f=document.createElement("div");f.classList.add("current"),f.classList.add("time"),f.textContent="0:00";var h=document.createElement("div");h.classList.add("progress-container");var m=document.createElement("input");m.classList.add("progress-bar"),m.setAttribute("type","range"),m.setAttribute("min",0),m.setAttribute("max",100),m.setAttribute("value",0);var v=document.createElement("div");v.classList.add("duration"),v.classList.add("time"),v.textContent="0:29";var y=document.createElement("div");y.classList.add("volume-container");var g=document.createElement("input");g.classList.add("volume"),g.setAttribute("type","range"),g.setAttribute("min",0),g.setAttribute("max",1),g.setAttribute("step",.1),g.setAttribute("value",1),r.appendChild(o),h.appendChild(m),y.appendChild(g),p.appendChild(f),p.appendChild(h),p.appendChild(v),p.appendChild(y),l.appendChild(d),s.appendChild(u),s.appendChild(l),s.appendChild(p),n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(s),e.appendChild(n),e.addEventListener("click",(function(t){e.classList.contains("show")&&t.target===e&&(e.classList.remove("show"),setTimeout((function(){e.remove()}),400))})),setTimeout((function(){e.classList.add("show")}),10),document.body.appendChild(e)}({name:e,artists:n,logo:r,previewUrl:o}),function(){var t=document.querySelector(".btn"),e=document.querySelector("audio"),n=document.querySelector(".progress-bar"),r=document.querySelector(".volume"),o=document.querySelector(".current"),a=document.querySelector(".duration"),i=!1;function c(t){var e=100*t;10===e&&(e+=7),r.style.background="linear-gradient(to right, white ".concat(e,"%, gray ").concat(e,"%)")}e.volume=.1,r.value=.1,c(r.value),e.addEventListener("timeupdate",(function(){var t=e.currentTime,r=e.duration,i=t/r*100;n.value=i,n.style.background="linear-gradient(to right, white ".concat(i+1.7,"%, gray ").concat(i+1.7,"%)");var c=Math.floor(t/60),s=Math.floor(t%60),u=Math.floor(r/60),l=Math.floor(r%60);o.textContent="".concat(c,":").concat(s.toString().padStart(2,"0")),a.textContent="".concat(u,":").concat(l.toString().padStart(2,"0"))})),n.addEventListener("input",(function(){var t=e.duration,r=n.value/100*t;e.currentTime=r;var o=n.value;n.style.background="linear-gradient(to right, white ".concat(o,"%, gray ").concat(o,"%)")})),r.addEventListener("input",(function(){e.volume=r.value,c(r.value)})),t.addEventListener("click",(function(n){var r=t.dataset.status,o=n.target;"stop"===r?(o.src="assets/stop.png",t.dataset.status="start",e.play()):(o.src="assets/start.png",t.dataset.status="stop",e.pause()),i=!i}))}()):u||(u=!0,function(){var t=document.createElement("div");t.classList.add("error-preview-message");var e=document.createElement("img");e.classList.add("error-icon"),e.src="assets/error.png";var n=document.createElement("p");n.classList.add("error-text"),n.textContent="No preview here :(",t.appendChild(e),t.appendChild(n),document.body.appendChild(t),setTimeout((function(){t.classList.add("show")}),10),setTimeout((function(){t.classList.remove("show")}),2500),setTimeout((function(){t.remove(),u=!1}),3e3)}())}))})),t=document.querySelector(".list-container"),n=document.querySelector(".icon-container"),r=document.querySelector(".loader-container"),o=document.querySelector(".slide-in-text"),a=document.querySelector(".status"),r.classList.remove("fade-in"),a.classList.remove("fade-in"),a.style.opacity=0,setTimeout((function(){r.style.display="none",a.style.display="none",n.classList.add("move"),o.classList.add("slid-in")}),600),setTimeout((function(){var e=document.querySelector(".tracks");t.classList.contains("fade-in")||e.classList.contains("fade-in")||(t.style.display="block",e.style.display="block",setTimeout((function(){t.classList.add("fade-in"),e.classList.add("fade-in")}),100))}),1500),function(t){var e=document.createElement("button");e.classList.add("button-copy"),e.textContent="Copy link";var n=document.createElement("span");n.textContent="Copied",e.appendChild(n),e.addEventListener("click",(function(){navigator.clipboard.writeText(t),e.classList.contains("animation-active")||(e.classList.add("animation-active"),setTimeout((function(){e.classList.remove("animation-active")}),5e3))})),document.body.appendChild(e),setTimeout((function(){e.classList.add("fade-in")}),1700)}("https://open.spotify.com/playlist/".concat(e.uri.split(":")[2]))}),5e3)})),c.ipcRenderer.on("throw-error",(function(t,e){s||(setTimeout((function(){var t=document.querySelector(".icon-container"),n=document.querySelector(".loader-container"),r=document.querySelector(".list-container"),o=document.querySelector(".status"),a=document.querySelector(".container"),i=document.querySelector(".button-copy");o.style.opacity=0,t.style.opacity=0,n.style.opacity=0,r.style.opacity=0,i&&(i.style.opacity=0),setTimeout((function(){a.style.display="none",i&&(i.style.display="none"),function(t){var e=document.querySelector("body"),n=document.createElement("div");n.setAttribute("class","error-container");var r=document.createElement("div");r.setAttribute("class","error-title");var o=document.createElement("div");o.setAttribute("class","error-description"),r.textContent="".concat(t.message).concat(t.status),o.textContent=t.description,n.appendChild(r),n.appendChild(o),e.appendChild(n),setTimeout((function(){r.classList.add("fade-in"),o.classList.add("fade-in"),n.classList.add("fade-in")}),10)}(e)}),1e3)}),4500),s=!0),console.log(e)}))}));var d=function(t){var e=[];if(t.length<3)return t.map((function(t){return t.name}));for(var n=0;n<=2;)e.push(t[n].name),n+=1;if(e.join(",").length>36){var r=0;for(e=[];r<2;)e.push(t[r].name),r+=1}return e};function p(t){var e=document.querySelector(".status");e.style.opacity=0,setTimeout((function(){e.textContent=t,e.style.opacity=1}),500)}})();