!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.toNeanthal=e():n.toNeanthal=e()}(window,function(){return function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=1)}([function(n,e,r){window,n.exports=function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";r.r(e);var t=[0,1,-1,2,-1,-1,3,4,5,-1,-1,-1,-1,-1,-1,-1,6,7,8,-1,9,10,11,12,13,14,15,16,17,18],o=[0,1,2,3,4,5,6,-1,7,8,9,10,11,12,13,14,15,16,-1,17,18,19,20,21,-1,22,23,24,25,26],u=[0,1,3,6,7,8,16,17,18,20,21,22,23,24,25,26,27,28,29],i=[0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,25,26,27,28,29],f=4352,a=4370,c=4449,s=4469,p=4520,l=4546,g=12593,m=12622,d=12623,h=12643,y=44032,v=55215;function b(n){if(n.length<2)return n.join("");var e=T(n[0])-f,r=T(n[1])-c,t=n.length>2?T(n[2])-p+1:0,o=y+21*e*28+28*r+t;return String.fromCodePoint(o)}function j(n){if(_(n))return String.fromCodePoint(f+t[T(n)-g])}function C(n){if(_(n))return String.fromCodePoint(p+o[T(n)-g])}function x(n){if(w(n))return String.fromCodePoint(c+T(n)-d)}function A(n,e){return Array.from(n).map(function(n){if(!J(n))return[n];var r=function(n){var e=T(n)-y,r=e%28,t=(e-r)/28%21;return{choseong:((e-r)/28-t)/21,jungseong:t,jongseong:r}}(n),t=e(r);return r.jongseong||t.pop(),t.map(function(n){return String.fromCodePoint(n)})})}function S(n){return Array.prototype.flat?n.flat():n.reduce(function(n,e){return Array.isArray(e)?n.concat(S(e)):n.concat(e)},[])}function O(n,e,r){return!(!n||!n.length)&&Array.from(n).every(function(n){var t=T(n);return t>=e&&t<=r})}function P(n){return O(n,f,a)}function _(n){return O(n,g,m)}function w(n){return O(n,d,h)}function F(n){return O(n,p,l)}function M(n){return O(n,c,s)}function J(n){return O(n,y,v)}function T(n){return n.codePointAt(0)}e.default={compose:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];for(var t=Array.from(S(e)),o=t.length,u=[],i=[],f=0;f<o;){var a=t[f];P(a)&&(u.push(a),M(a=t[f+1])&&(u.push(a),F(a=t[(f+=1)+1])&&(u.push(a),f+=1))),u.length?(i.push(b(u)),u.length=0):i.push(a),f+=1}return i.join("")},composeCharacter:b,composeWithCompat:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];for(var t=Array.from(S(e)),o=[],u=[],i=0,f=[];i<t.length;){var a=t[i];_(a)&&(o.push(a),u.push(j(a)),w(a=t[i+1])&&(u.push(x(a)),_(a=t[(i+=1)+1])&&!w(t[i+2])&&(u.push(C(a)),i+=1))),u.length>1?f.push(b(u)):o.length?f=f.concat(o):f.push(a),o.length=0,u.length=0,i+=1}return f.join("")},decompose:function(n){return A(n,function(n){return[f+n.choseong,c+n.jungseong,p+n.jongseong-1]})},decomposeAsCompat:function(n){return A(n,function(n){return[g+u[n.choseong],d+n.jungseong,g+i[n.jongseong-1]]})},getChoseongFromCompat:j,getJongseongFromCompat:C,getJungseongFromCompat:x,isChoseong:P,isCompatConsonant:_,isCompatVowel:w,isJongseong:F,isJungseong:M,isSyllable:J}}]).default},function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),u=["ㄱ","ㄳ","ㄴ","ㄵ","ㄶ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅃ","ㅄ","ㅇ"],i=["ㅇ"],f="ᄋ",a="ᅳ";function c(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var t=p(Array.from(e)),c=!1,s=!1,l=[];return t.forEach(function(n,e){if(c)if(s){var r=t[e+1];r&&o.a.isCompatVowel(r)?(l.push(o.a.getChoseongFromCompat(n)),c=!0,s=!1):(function(n){return i.indexOf(n)>=0}(n)||(!function(n){return u.indexOf(n)>=0}(n)?(l.push(o.a.getChoseongFromCompat(n)),l.push(a)):l.push(o.a.getJongseongFromCompat(n))),c=!1,s=!1)}else l.push(o.a.getJungseongFromCompat(n)),s=!0;else o.a.isCompatConsonant(n)?l.push(o.a.getChoseongFromCompat(n)):(l.push(f),l.push(o.a.getJungseongFromCompat(n)),s=!0),c=!0}),l.join("")}function s(n){var e=Array.from(n);return e.every(o.a.isSyllable)?c(e.reverse().map(function(n){return p(o.a.decomposeAsCompat(n)).reverse()})):e.join("")}function p(n){return n.reduce(function(n,e){return Array.isArray(e)?n.concat(p(e)):n.concat(e)},[])}e.default=function(n){return n.split(/\s+/).map(s).join(" ")}}]).default});