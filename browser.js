// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,j=isNaN,T=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,s,l,f,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(c(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function N(e){var r,t,n;if(!A(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F=Object.prototype,P=F.toString,$=F.__defineGetter__,R=F.__defineSetter__,C=F.__lookupGetter__,M=F.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e,r,t){G(e,r,{configurable:!1,enumerable:!1,get:t})}function J(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof U?U.toStringTag:"",q=W()?function(e){var r,t,n,i,o;if(null==e)return X.call(e);t=e[Y],o=Y,r=null!=(i=e)&&z.call(i,o);try{e[Y]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,K=W();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function ee(e){return J(e)||Q(e)}Z(ee,"isPrimitive",J),Z(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=D.NEGATIVE_INFINITY,ne=Math.floor;function ie(e){return e<re&&e>te&&ne(r=e)===r;var r}function oe(e){return J(e)&&ie(e)}function ae(e){return Q(e)&&ie(e.valueOf())}function ue(e){return oe(e)||ae(e)}function ce(e){return null===e}function se(e){return void 0===e}function le(e){return oe(e)||ce(e)||se(e)}function fe(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof fe))return new fe(r,t,n);if(!le(r))throw new TypeError(N("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!le(t))throw new TypeError(N("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!le(n))throw new TypeError(N("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(N("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function pe(){return/^\s*function\s*([^(]*)/i}Z(ue,"isPrimitive",oe),Z(ue,"isObject",ae),Z(fe,"name","Slice"),B(fe.prototype,"start",(function(){return this._start})),B(fe.prototype,"stop",(function(){return this._stop})),B(fe.prototype,"step",(function(){return this._step})),Z(fe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),Z(fe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var ge=/^\s*function\s*([^(]*)/i;Z(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function he(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return he(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function be(e){return oe(e)||ce(e)||se(e)||function(e){return e instanceof fe||"Slice"===ye(e)}(e)}function ve(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof ve)){if(1===e)return new ve(arguments[0]);if(2===e)return new ve(arguments[0],arguments[1]);if(3===e)return new ve(arguments[0],arguments[1],arguments[2]);if(4===e)return new ve(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new ve(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(ve.prototype),ve.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!be(n=arguments[i]))throw new TypeError(N("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(n)));this._data.push(void 0===n?null:n)}return this}return Z(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he)),Z(ve,"name","MultiSlice"),B(ve.prototype,"ndims",(function(){return this._data.length})),B(ve.prototype,"data",(function(){return this._data.slice()})),Z(ve.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),Z(ve.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),ve},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).MultiSlice=r();
//# sourceMappingURL=browser.js.map
