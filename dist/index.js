"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=v(function(Q,f){
var s=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/math-base-special-abs2/dist'),y=require('@stdlib/constants-float64-sqrt-two-pi/dist'),d=require('@stdlib/constants-float64-pinf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function T(t,r,e){var n;return u(t)||u(r)||u(e)||e<0?NaN:e===0?t===r?d:0:(n=1/(e*y),n*s(-.5*N((t-r)/e)))}f.exports=T
});var o=v(function(S,c){
var _=require('@stdlib/utils-constant-function/dist'),I=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,a=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-exp/dist'),P=require('@stdlib/math-base-special-abs2/dist'),R=require('@stdlib/constants-float64-sqrt-two-pi/dist');function b(t,r){var e;if(a(t)||a(r)||r<0)return _(NaN);if(r===0)return I(t);return e=1/(r*R),n;function n(i){return a(i)?NaN:e*O(-.5*P((i-t)/r))}}c.exports=b
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),A=o();x(p,"factory",A);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
