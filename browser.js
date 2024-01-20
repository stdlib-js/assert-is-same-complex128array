// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,M=C.__defineGetter__,P=C.__defineSetter__,O=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};var U=I;function Y(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=G()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=J(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},H=Number,K=H.prototype.toString,Q=G();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return W(e)||ee(e)}Y(re,"isPrimitive",W),Y(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return e<te&&e>ne&&oe(e)}function ue(e){return W(e)&&ae(e)}function fe(e){return ee(e)&&ae(e.valueOf())}function le(e){return ue(e)||fe(e)}function ce(e){return ue(e)&&e>=0}function se(e){return fe(e)&&e.valueOf()>=0}function ye(e){return ce(e)||se(e)}function pe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=4294967295}function he(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(le,"isPrimitive",ue),Y(le,"isObject",fe),Y(ye,"isPrimitive",ce),Y(ye,"isObject",se);var ge="function"==typeof ArrayBuffer;function me(e){return ge&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var we=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function be(e){return"object"==typeof e&&null!==e&&!we(e)}var de=/./;function ve(e){return"boolean"==typeof e}var Ee=Boolean,Ae=Boolean.prototype.toString,Te=G();function _e(e){return"object"==typeof e&&(e instanceof Ee||(Te?function(e){try{return Ae.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function xe(e){return ve(e)||_e(e)}function je(){return new Function("return this;")()}Y(xe,"isPrimitive",ve),Y(xe,"isObject",_e);var ke="object"==typeof self?self:null,Ve="object"==typeof window?window:null,Le="object"==typeof globalThis?globalThis:null,Se=function(e){if(arguments.length){if(!ve(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return je()}if(Le)return Le;if(ke)return ke;if(Ve)return Ve;throw new Error("unexpected error. Unable to resolve global object.")}(),Re=Se.document&&Se.document.childNodes,Be=Int8Array;function Ie(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function Fe(e){return null!==e&&"object"==typeof e}function Me(e){return Fe(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Pe(e){var r,t,n;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ce.exec(n.toString()))return r[1]}return Me(e)?"Buffer":t}Y(Ie,"REGEXP",Ce),Y(Fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!we(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Fe));var Oe="function"==typeof de||"object"==typeof Be||"function"==typeof Re?function(e){return Pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Pe(e).toLowerCase():r};function Ne(e){return"function"===Oe(e)}function Ue(e,r){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Ue,"BYTES_PER_ELEMENT",8),Y(Ue.prototype,"BYTES_PER_ELEMENT",8),Y(Ue.prototype,"byteLength",16),Y(Ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Ue.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ye="function"==typeof Math.fround?Math.fround:null,We="function"==typeof Float32Array,$e="function"==typeof Float32Array?Float32Array:null,Ge="function"==typeof Float32Array?Float32Array:void 0,Ze=function(){var e,r,t;if("function"!=typeof $e)return!1;try{r=new $e([1,3.14,-3.14,5e40]),t=r,e=(We&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")},Xe=new Ze(1),Je="function"==typeof Ye?Ye:function(e){return Xe[0]=e,Xe[0]};function ze(e,r){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Je(e)}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Je(r)}),this}function qe(e){return e instanceof Ue||e instanceof ze||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function De(e){return oe(e/2)}function He(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}Y(ze,"BYTES_PER_ELEMENT",4),Y(ze.prototype,"BYTES_PER_ELEMENT",4),Y(ze.prototype,"byteLength",8),Y(ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(ze.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Ke=He()?Symbol.iterator:null;function Qe(e,r,t){U(e,r,{configurable:!1,enumerable:!1,get:t})}var er="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){var e,r,t;if("function"!=typeof rr)return!1;try{r=new rr([1,3.14,-3.14,NaN]),t=r,e=(er&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?tr:function(){throw new Error("not implemented")};function ir(e){return e.re}function or(e){return e.im}function ar(e,r){return new Ze(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function ur(e,r){return new nr(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var fr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function lr(e){var r=fr[e];return"function"==typeof r?r:fr.default}var cr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function sr(e){var r=cr[e];return"function"==typeof r?r:cr.default}function yr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(pe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!qe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(ir(n),or(n))}return r}function pr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,pe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!qe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ir(o),or(o))}return n}function hr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!qe(n=r[i]))return null;e[o]=ir(n),e[o+1]=or(n),o+=2}return e}var gr=2*nr.BYTES_PER_ELEMENT,mr=He();function wr(e){return e instanceof Er||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function br(e){return e===Er||"Complex64Array"===e.name}function dr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===gr/2}function vr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===gr}function Er(){var e,r,t,n;if(r=arguments.length,!(this instanceof Er))return 0===r?new Er:1===r?new Er(arguments[0]):2===r?new Er(arguments[0],arguments[1]):new Er(arguments[0],arguments[1],arguments[2]);if(0===r)t=new nr(0);else if(1===r)if(ce(arguments[0]))t=new nr(2*arguments[0]);else if(he(arguments[0]))if((n=(t=arguments[0]).length)&&we(t)&&qe(t[0])){if(null===(t=hr(new nr(2*n),t))){if(!De(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new nr(arguments[0])}}else{if(dr(t))t=ar(t,0);else if(vr(t))t=ur(t,0);else if(!De(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new nr(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/gr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",gr,t.byteLength));t=new nr(t)}else{if(!be(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===mr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ne(t[Ke]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ne((t=t[Ke]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=yr(t))instanceof Error)throw t;t=new nr(t)}else{if(!me(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/gr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",gr,e));if(2===r){if(!oe((n=t.byteLength-e)/gr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",gr,n));t=new nr(t,e)}else{if(!ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*gr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*gr));t=new nr(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Ar(e){return e instanceof Er||"Complex128Array"===Pe(e)}function Tr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&16===e.BYTES_PER_ELEMENT}function _r(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&8===e.BYTES_PER_ELEMENT}Y(Er,"BYTES_PER_ELEMENT",gr),Y(Er,"name","Complex128Array"),Y(Er,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ne(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ne(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(wr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(r,e.get(s),s)))o[y]=ir(c),o[y+1]=or(c);else{if(!(pe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(he(e)){if(n){for(f=e.length,u=e.get&&e.set?sr("default"):lr("default"),s=0;s<f;s++)if(!qe(u(e,s))){l=!0;break}if(l){if(!De(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(r,u(e,s),s)))o[y]=ir(c),o[y+1]=or(c);else{if(!(pe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(be(e)&&mr&&Ne(e[Ke])){if(!Ne((o=e[Ke]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?pr(o,n,r):yr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Er,"of",(function(){var e,r;if(!Ne(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Qe(Er.prototype,"buffer",(function(){return this._buffer.buffer})),Qe(Er.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qe(Er.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Er.prototype,"BYTES_PER_ELEMENT",Er.BYTES_PER_ELEMENT),Y(Er.prototype,"copyWithin",(function(e,r){if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Er.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ue(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Ke&&Y(t,Ke,(function(){return r.entries()})),t})),Y(Er.prototype,"get",(function(e){var r;if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ue((r=this._buffer)[e*=2],r[e+1])})),Qe(Er.prototype,"length",(function(){return this._length})),Y(Er.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(qe(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ir(e),void(n[t+1]=or(e))}if(wr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new nr(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!he(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!qe(e[f])){o=!0;break}if(o){if(!De(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new nr(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ir(u),n[t+1]=or(u),t+=2}}));var xr="function",jr={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function kr(e){var r=jr[e];return"function"==typeof r?r:jr.default}var Vr={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function Lr(e){var r=Vr[e];return"function"==typeof r?r:Vr.default}var Sr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Rr="function"==typeof Uint32Array,Br="function"==typeof Uint32Array?Uint32Array:null,Ir="function"==typeof Uint32Array?Uint32Array:void 0,Cr=function(){var e,r,t;if("function"!=typeof Br)return!1;try{r=new Br(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Rr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ir:function(){throw new Error("not implemented")},Fr="function"==typeof Int32Array,Mr="function"==typeof Int32Array?Int32Array:null,Pr="function"==typeof Int32Array?Int32Array:void 0,Or=function(){var e,r,t;if("function"!=typeof Mr)return!1;try{r=new Mr([1,3.14,-3.14,2147483648]),t=r,e=(Fr&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Pr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint16Array,Ur="function"==typeof Uint16Array?Uint16Array:null,Yr="function"==typeof Uint16Array?Uint16Array:void 0,Wr=function(){var e,r,t;if("function"!=typeof Ur)return!1;try{r=new Ur(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Nr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Yr:function(){throw new Error("not implemented")},$r="function"==typeof Int16Array,Gr="function"==typeof Int16Array?Int16Array:null,Zr="function"==typeof Int16Array?Int16Array:void 0,Xr=function(){var e,r,t;if("function"!=typeof Gr)return!1;try{r=new Gr([1,3.14,-3.14,32768]),t=r,e=($r&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Zr:function(){throw new Error("not implemented")},Jr="function"==typeof Uint8Array,zr="function"==typeof Uint8Array?Uint8Array:null,qr="function"==typeof Uint8Array?Uint8Array:void 0,Dr=function(){var e,r,t;if("function"!=typeof zr)return!1;try{r=new zr(r=[1,3.14,-3.14,256,257]),t=r,e=(Jr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?qr:function(){throw new Error("not implemented")},Hr="function"==typeof Uint8ClampedArray,Kr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Qr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,et=function(){var e,r,t;if("function"!=typeof Kr)return!1;try{r=new Kr([-1,0,1,3.14,4.99,255,256]),t=r,e=(Hr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Qr:function(){throw new Error("not implemented")},rt="function"==typeof Int8Array,tt="function"==typeof Int8Array?Int8Array:null,nt="function"==typeof Int8Array?Int8Array:void 0,it=function(){var e,r,t;if("function"!=typeof tt)return!1;try{r=new tt([1,3.14,-3.14,128]),t=r,e=(rt&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?nt:function(){throw new Error("not implemented")};function ot(e){return e.re}function at(e){return e.im}function ut(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(pe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!qe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(ot(n),at(n))}return r}function ft(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,pe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!qe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ot(o),at(o))}return n}function lt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!qe(n=r[i]))return null;e[o]=ot(n),e[o+1]=at(n),o+=2}return e}var ct=2*Ze.BYTES_PER_ELEMENT,st=He();function yt(e){return e instanceof mt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function pt(e){return e===mt||"Complex128Array"===e.name}function ht(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ct}function gt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*ct}function mt(){var e,r,t,n;if(r=arguments.length,!(this instanceof mt))return 0===r?new mt:1===r?new mt(arguments[0]):2===r?new mt(arguments[0],arguments[1]):new mt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ze(0);else if(1===r)if(ce(arguments[0]))t=new Ze(2*arguments[0]);else if(he(arguments[0]))if((n=(t=arguments[0]).length)&&we(t)&&qe(t[0])){if(null===(t=lt(new Ze(2*n),t))){if(!De(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ze(arguments[0])}}else{if(ht(t))t=ar(t,0);else if(gt(t))t=ur(t,0);else if(!De(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ze(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/ct))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ct,t.byteLength));t=new Ze(t)}else{if(!be(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===st)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ne(t[Ke]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ne((t=t[Ke]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ut(t))instanceof Error)throw t;t=new Ze(t)}else{if(!me(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/ct))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ct,e));if(2===r){if(!oe((n=t.byteLength-e)/ct))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ct,n));t=new Ze(t,e)}else{if(!ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ct>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ct));t=new Ze(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(mt,"BYTES_PER_ELEMENT",ct),Y(mt,"name","Complex64Array"),Y(mt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ne(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ne(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(yt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(r,e.get(s),s)))o[y]=ot(c),o[y+1]=at(c);else{if(!(pe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(he(e)){if(n){for(f=e.length,u=e.get&&e.set?sr("default"):lr("default"),s=0;s<f;s++)if(!qe(u(e,s))){l=!0;break}if(l){if(!De(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(r,u(e,s),s)))o[y]=ot(c),o[y+1]=at(c);else{if(!(pe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(be(e)&&st&&Ne(e[Ke])){if(!Ne((o=e[Ke]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?ft(o,n,r):ut(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(mt,"of",(function(){var e,r;if(!Ne(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Qe(mt.prototype,"buffer",(function(){return this._buffer.buffer})),Qe(mt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qe(mt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(mt.prototype,"BYTES_PER_ELEMENT",mt.BYTES_PER_ELEMENT),Y(mt.prototype,"copyWithin",(function(e,r){if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(mt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new ze(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Ke&&Y(t,Ke,(function(){return r.entries()})),t})),Y(mt.prototype,"get",(function(e){var r;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new ze((r=this._buffer)[e*=2],r[e+1])})),Qe(mt.prototype,"length",(function(){return this._length})),Y(mt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(qe(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ot(e),void(n[t+1]=at(e))}if(yt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ze(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!he(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!qe(e[f])){o=!0;break}if(o){if(!De(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ze(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ot(u),n[t+1]=at(u),t+=2}}));var wt=[nr,Ze,Or,Cr,Xr,Wr,it,Dr,et,mt,Er],bt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=bt.length;function vt(e){var r,t=function(e){var r;if(we(e))return"generic";if(Me(e))return null;for(r=0;r<dt;r++)if(e instanceof wt[r])return bt[r];return Sr[Pe(e)]||null}(e);return typeof(r=e).get===xr&&typeof r.set===xr?{accessorProtocol:!0,accessors:[sr(t),Lr(t)]}:{accessorProtocol:!1,accessors:[lr(t),kr(t)]}}function Et(e){var r=vt(e);return{data:e,accessorProtocol:r.accessorProtocol,accessors:r.accessors}}function At(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function Tt(e,r){var t;for(t=0;t<e.length;t++)if(!At(e[t],r[t]))return!1;return!0}function _t(e,r){var t,n,i,o,a;return e.length===r.length&&(n=Et(e),i=Et(r),n.accessorProtocol||i.accessorProtocol?(t=2,Tr(e)?(o=ur(e,0),t-=1):_r(e)&&(o=ar(e,0),t-=1),Tr(r)?(a=ur(r,0),t-=1):_r(r)&&(a=ar(r,0),t-=1),0===t?Tt(o,a):function(e,r){var t,n,i,o,a;for(t=e.data,n=r.data,i=e.accessors[0],o=r.accessors[0],a=0;a<t.length;a++)if(!At(i(t,a),o(n,a)))return!1;return!0}(n,i)):Tt(e,r))}return function(e,r){return!(!Ar(e)||!Ar(r))&&_t(e,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSameComplex128Array=r();
//# sourceMappingURL=browser.js.map