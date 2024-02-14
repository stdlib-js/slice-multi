// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-slice@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(t){return n(t)||r(t)||i(t)||s(t)}function l(){var t,e,n,r,i;if(t=arguments.length,!(this instanceof l)){if(1===t)return new l(arguments[0]);if(2===t)return new l(arguments[0],arguments[1]);if(3===t)return new l(arguments[0],arguments[1],arguments[2]);if(4===t)return new l(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===t)return new l(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(n=[],i=0;i<t;i++)n.push(arguments[i]);return e=Object.create(l.prototype),l.apply(e,n)}for(this._data=[],i=0;i<t;i++){if(!d(r=arguments[i]))throw new TypeError(o("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(r)));this._data.push(void 0===r?null:r)}return this}t(l,"name","MultiSlice"),e(l.prototype,"ndims",(function(){return this._data.length})),e(l.prototype,"data",(function(){return this._data.slice()})),t(l.prototype,"toString",(function(){var t,e,n;for(t=this._data,e=[],n=0;n<t.length;n++)e.push(String(t[n]));return"MultiSlice("+e.join(",")+")"})),t(l.prototype,"toJSON",(function(){var t,e,n,r;for(t=this._data,e={type:"MultiSlice",data:[]},r=0;r<t.length;r++)n=t[r],e.data.push(n&&"function"==typeof n.toJSON?n.toJSON():n);return e}));export{l as default};
//# sourceMappingURL=index.mjs.map
