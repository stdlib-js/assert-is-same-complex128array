// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,M=C.__defineGetter__,P=C.__defineSetter__,O=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var U=I;function Y(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=G()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[q],e=J(r,q);try{r[q]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[q]=t:delete r[q],n}:function(r){return Z.call(r)},H=Number,K=H.prototype.toString;var Q=G();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function er(r){return W(r)||rr(r)}Y(er,"isPrimitive",W),Y(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=H.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<tr&&r>nr&&or(r)}function ur(r){return W(r)&&ar(r)}function fr(r){return rr(r)&&ar(r.valueOf())}function lr(r){return ur(r)||fr(r)}function cr(r){return ur(r)&&r>=0}function sr(r){return fr(r)&&r.valueOf()>=0}function yr(r){return cr(r)||sr(r)}Y(lr,"isPrimitive",ur),Y(lr,"isObject",fr),Y(yr,"isPrimitive",cr),Y(yr,"isObject",sr);function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=4294967295}function hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=9007199254740991}var gr="function"==typeof ArrayBuffer;function mr(r){return gr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===D(r)}var wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function br(r){return"object"==typeof r&&null!==r&&!wr(r)}var vr=/./;function dr(r){return"boolean"==typeof r}var Er=Boolean,Ar=Boolean.prototype.toString;var _r=G();function Tr(r){return"object"==typeof r&&(r instanceof Er||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function xr(r){return dr(r)||Tr(r)}function jr(){return new Function("return this;")()}Y(xr,"isPrimitive",dr),Y(xr,"isObject",Tr);var kr="object"==typeof self?self:null,Vr="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Rr="object"==typeof Lr?Lr:null,Sr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!dr(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jr()}if(Sr)return Sr;if(kr)return kr;if(Vr)return Vr;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Br.document&&Br.document.childNodes,Cr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Mr=/^\s*function\s*([^(]*)/i;function Pr(r){return null!==r&&"object"==typeof r}function Or(r){return Pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Nr(r){var e,t,n;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Mr.exec(n.toString()))return e[1]}return Or(r)?"Buffer":t}Y(Fr,"REGEXP",Mr),Y(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!wr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Ur="function"==typeof vr||"object"==typeof Cr||"function"==typeof Ir?function(r){return Nr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Nr(r).toLowerCase():e};function Yr(r){return"function"===Ur(r)}function Wr(r,e){if(!(this instanceof Wr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Wr,"BYTES_PER_ELEMENT",8),Y(Wr.prototype,"BYTES_PER_ELEMENT",8),Y(Wr.prototype,"byteLength",16),Y(Wr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Wr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var $r="function"==typeof Math.fround?Math.fround:null,Gr="function"==typeof Float32Array;var Zr="function"==typeof Float32Array?Float32Array:null;var Xr="function"==typeof Float32Array?Float32Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,5e40]),t=e,r=(Gr&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===tr}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")},zr=new Jr(1);var qr="function"==typeof $r?$r:function(r){return zr[0]=r,zr[0]};function Dr(r,e){if(!(this instanceof Dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:qr(r)}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:qr(e)}),this}function Hr(r){return r instanceof Wr||r instanceof Dr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Kr(r){return or(r/2)}function Qr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}Y(Dr,"BYTES_PER_ELEMENT",4),Y(Dr.prototype,"BYTES_PER_ELEMENT",4),Y(Dr.prototype,"byteLength",8),Y(Dr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Dr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var re=Qr()?Symbol.iterator:null;function ee(r,e,t){U(r,e,{configurable:!1,enumerable:!1,get:t})}var te="function"==typeof Float64Array;var ne="function"==typeof Float64Array?Float64Array:null;var ie="function"==typeof Float64Array?Float64Array:void 0;var oe=function(){var r,e,t;if("function"!=typeof ne)return!1;try{e=new ne([1,3.14,-3.14,NaN]),t=e,r=(te&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ie:function(){throw new Error("not implemented")};function ae(r){return r.re}function ue(r){return r.im}function fe(r,e){return new Jr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function le(r,e){return new oe(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var ce={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function se(r){var e=ce[r];return"function"==typeof e?e:ce.default}var ye={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function pe(r){var e=ye[r];return"function"==typeof e?e:ye.default}function he(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(pr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Hr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ae(n),ue(n))}return e}function ge(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,pr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Hr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ae(o),ue(o))}return n}function me(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Hr(n=e[i]))return null;r[o]=ae(n),r[o+1]=ue(n),o+=2}return r}var we=2*oe.BYTES_PER_ELEMENT,be=Qr();function ve(r){return r instanceof _e||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function de(r){return r===_e||"Complex64Array"===r.name}function Ee(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===we/2}function Ae(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===we}function _e(){var r,e,t,n;if(e=arguments.length,!(this instanceof _e))return 0===e?new _e:1===e?new _e(arguments[0]):2===e?new _e(arguments[0],arguments[1]):new _e(arguments[0],arguments[1],arguments[2]);if(0===e)t=new oe(0);else if(1===e)if(cr(arguments[0]))t=new oe(2*arguments[0]);else if(hr(arguments[0]))if((n=(t=arguments[0]).length)&&wr(t)&&Hr(t[0])){if(null===(t=me(new oe(2*n),t))){if(!Kr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new oe(arguments[0])}}else{if(Ee(t))t=fe(t,0);else if(Ae(t))t=le(t,0);else if(!Kr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new oe(t)}else if(mr(arguments[0])){if(!or((t=arguments[0]).byteLength/we))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",we,t.byteLength));t=new oe(t)}else{if(!br(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===be)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Yr(t[re]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Yr((t=t[re]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=he(t))instanceof Error)throw t;t=new oe(t)}else{if(!mr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!cr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!or(r/we))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",we,r));if(2===e){if(!or((n=t.byteLength-r)/we))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",we,n));t=new oe(t,r)}else{if(!cr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*we>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*we));t=new oe(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Te(r){return r instanceof _e||"Complex128Array"===Nr(r)}Y(_e,"BYTES_PER_ELEMENT",we),Y(_e,"name","Complex128Array"),Y(_e,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Yr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ve(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Hr(c=n.call(e,r.get(s),s)))o[y]=ae(c),o[y+1]=ue(c);else{if(!(pr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(hr(r)){if(n){for(f=r.length,u=r.get&&r.set?pe("default"):se("default"),s=0;s<f;s++)if(!Hr(u(r,s))){l=!0;break}if(l){if(!Kr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Hr(c=n.call(e,u(r,s),s)))o[y]=ae(c),o[y+1]=ue(c);else{if(!(pr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(br(r)&&be&&Yr(r[re])){if(!Yr((o=r[re]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?ge(o,n,e):he(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(_e,"of",(function(){var r,e;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ee(_e.prototype,"buffer",(function(){return this._buffer.buffer})),ee(_e.prototype,"byteLength",(function(){return this._buffer.byteLength})),ee(_e.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(_e.prototype,"BYTES_PER_ELEMENT",_e.BYTES_PER_ELEMENT),Y(_e.prototype,"copyWithin",(function(r,e){if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(_e.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Wr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),re&&Y(t,re,(function(){return e.entries()})),t})),Y(_e.prototype,"get",(function(r){var e;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Wr((e=this._buffer)[r*=2],e[r+1])})),ee(_e.prototype,"length",(function(){return this._length})),Y(_e.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!cr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Hr(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ae(r),void(n[t+1]=ue(r))}if(ve(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new oe(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!hr(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Hr(r[f])){o=!0;break}if(o){if(!Kr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new oe(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ae(u),n[t+1]=ue(u),t+=2}}));function xe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&16===r.BYTES_PER_ELEMENT}function je(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&8===r.BYTES_PER_ELEMENT}var ke={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function Ve(r){var e=ke[r];return"function"==typeof e?e:ke.default}var Le={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function Re(r){var e=Le[r];return"function"==typeof e?e:Le.default}var Se={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Be="function"==typeof Uint32Array;var Ie="function"==typeof Uint32Array?Uint32Array:null;var Ce="function"==typeof Uint32Array?Uint32Array:void 0;var Fe=function(){var r,e,t;if("function"!=typeof Ie)return!1;try{e=new Ie(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Be&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ce:function(){throw new Error("not implemented")},Me="function"==typeof Int32Array;var Pe="function"==typeof Int32Array?Int32Array:null;var Oe="function"==typeof Int32Array?Int32Array:void 0;var Ne=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,2147483648]),t=e,r=(Me&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Oe:function(){throw new Error("not implemented")},Ue="function"==typeof Uint16Array;var Ye="function"==typeof Uint16Array?Uint16Array:null;var We="function"==typeof Uint16Array?Uint16Array:void 0;var $e=function(){var r,e,t;if("function"!=typeof Ye)return!1;try{e=new Ye(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ue&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")},Ge="function"==typeof Int16Array;var Ze="function"==typeof Int16Array?Int16Array:null;var Xe="function"==typeof Int16Array?Int16Array:void 0;var Je=function(){var r,e,t;if("function"!=typeof Ze)return!1;try{e=new Ze([1,3.14,-3.14,32768]),t=e,r=(Ge&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Xe:function(){throw new Error("not implemented")},ze="function"==typeof Uint8Array;var qe="function"==typeof Uint8Array?Uint8Array:null;var De="function"==typeof Uint8Array?Uint8Array:void 0;var He=function(){var r,e,t;if("function"!=typeof qe)return!1;try{e=new qe(e=[1,3.14,-3.14,256,257]),t=e,r=(ze&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?De:function(){throw new Error("not implemented")},Ke="function"==typeof Uint8ClampedArray;var Qe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var rt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var et=function(){var r,e,t;if("function"!=typeof Qe)return!1;try{e=new Qe([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ke&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?rt:function(){throw new Error("not implemented")},tt="function"==typeof Int8Array;var nt="function"==typeof Int8Array?Int8Array:null;var it="function"==typeof Int8Array?Int8Array:void 0;var ot=function(){var r,e,t;if("function"!=typeof nt)return!1;try{e=new nt([1,3.14,-3.14,128]),t=e,r=(tt&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?it:function(){throw new Error("not implemented")};function at(r){return r.re}function ut(r){return r.im}function ft(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(pr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Hr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(at(n),ut(n))}return e}function lt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,pr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Hr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(at(o),ut(o))}return n}function ct(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Hr(n=e[i]))return null;r[o]=at(n),r[o+1]=ut(n),o+=2}return r}var st=2*Jr.BYTES_PER_ELEMENT,yt=Qr();function pt(r){return r instanceof wt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ht(r){return r===wt||"Complex128Array"===r.name}function gt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st}function mt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*st}function wt(){var r,e,t,n;if(e=arguments.length,!(this instanceof wt))return 0===e?new wt:1===e?new wt(arguments[0]):2===e?new wt(arguments[0],arguments[1]):new wt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Jr(0);else if(1===e)if(cr(arguments[0]))t=new Jr(2*arguments[0]);else if(hr(arguments[0]))if((n=(t=arguments[0]).length)&&wr(t)&&Hr(t[0])){if(null===(t=ct(new Jr(2*n),t))){if(!Kr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Jr(arguments[0])}}else{if(gt(t))t=fe(t,0);else if(mt(t))t=le(t,0);else if(!Kr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Jr(t)}else if(mr(arguments[0])){if(!or((t=arguments[0]).byteLength/st))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",st,t.byteLength));t=new Jr(t)}else{if(!br(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===yt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Yr(t[re]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Yr((t=t[re]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ft(t))instanceof Error)throw t;t=new Jr(t)}else{if(!mr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!cr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!or(r/st))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",st,r));if(2===e){if(!or((n=t.byteLength-r)/st))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",st,n));t=new Jr(t,r)}else{if(!cr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*st>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*st));t=new Jr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(wt,"BYTES_PER_ELEMENT",st),Y(wt,"name","Complex64Array"),Y(wt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Yr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(pt(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Hr(c=n.call(e,r.get(s),s)))o[y]=at(c),o[y+1]=ut(c);else{if(!(pr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(hr(r)){if(n){for(f=r.length,u=r.get&&r.set?pe("default"):se("default"),s=0;s<f;s++)if(!Hr(u(r,s))){l=!0;break}if(l){if(!Kr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Hr(c=n.call(e,u(r,s),s)))o[y]=at(c),o[y+1]=ut(c);else{if(!(pr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(br(r)&&yt&&Yr(r[re])){if(!Yr((o=r[re]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?lt(o,n,e):ft(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(wt,"of",(function(){var r,e;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ee(wt.prototype,"buffer",(function(){return this._buffer.buffer})),ee(wt.prototype,"byteLength",(function(){return this._buffer.byteLength})),ee(wt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(wt.prototype,"BYTES_PER_ELEMENT",wt.BYTES_PER_ELEMENT),Y(wt.prototype,"copyWithin",(function(r,e){if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(wt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Dr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),re&&Y(t,re,(function(){return e.entries()})),t})),Y(wt.prototype,"get",(function(r){var e;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Dr((e=this._buffer)[r*=2],e[r+1])})),ee(wt.prototype,"length",(function(){return this._length})),Y(wt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!cr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Hr(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=at(r),void(n[t+1]=ut(r))}if(pt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Jr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!hr(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Hr(r[f])){o=!0;break}if(o){if(!Kr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Jr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=at(u),n[t+1]=ut(u),t+=2}}));var bt=[oe,Jr,Ne,Fe,Je,$e,ot,He,et,wt,_e],vt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=vt.length;function Et(r){var e,t=function(r){var e;if(wr(r))return"generic";if(Or(r))return null;for(e=0;e<dt;e++)if(r instanceof bt[e])return vt[e];return Se[Nr(r)]||null}(r);return"function"==typeof(e=r).get&&"function"==typeof e.set?{accessorProtocol:!0,accessors:[pe(t),Re(t)]}:{accessorProtocol:!1,accessors:[se(t),Ve(t)]}}function At(r){var e=Et(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function _t(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}function Tt(r,e){var t;for(t=0;t<r.length;t++)if(!_t(r[t],e[t]))return!1;return!0}function xt(r,e){var t,n,i,o,a;return r.length===e.length&&(n=At(r),i=At(e),n.accessorProtocol||i.accessorProtocol?(t=2,xe(r)?(o=le(r,0),t-=1):je(r)&&(o=fe(r,0),t-=1),xe(e)?(a=le(e,0),t-=1):je(e)&&(a=fe(e,0),t-=1),0===t?Tt(o,a):function(r,e){var t,n,i,o,a;for(t=r.data,n=e.data,i=r.accessors[0],o=e.accessors[0],a=0;a<t.length;a++)if(!_t(i(t,a),o(n,a)))return!1;return!0}(n,i)):Tt(r,e))}function jt(r,e){return!(!Te(r)||!Te(e))&&xt(r,e)}export{jt as default};
//# sourceMappingURL=mod.js.map