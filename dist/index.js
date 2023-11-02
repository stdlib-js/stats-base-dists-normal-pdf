"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=f(function(h,c){
var I=require('@stdlib/math-base-special-exp/dist'),o=require('@stdlib/math-base-special-pow/dist'),O=require('@stdlib/math-base-special-sqrt/dist'),P=require('@stdlib/constants-float64-two-pi/dist'),w=require('@stdlib/constants-float64-pinf/dist'),n=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r,t){var a,u,i;return n(e)||n(r)||n(t)||t<0?NaN:t===0?e===r?w:0:(a=o(t,2),u=1/O(a*P),i=-1/(2*a),u*I(i*o(e-r,2)))}c.exports=x
});var y=f(function(j,N){
var A=require('@stdlib/utils-constant-function/dist'),B=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,v=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sqrt/dist'),T=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-pow/dist'),W=require('@stdlib/constants-float64-two-pi/dist');function _(e,r){var t,a,u;if(v(e)||v(r)||r<0)return A(NaN);if(r===0)return B(e);return t=p(r,2),a=1/F(t*W),u=-1/(2*t),i;function i(q){return v(q)?NaN:a*T(u*p(q-e,2))}}N.exports=_
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),R=y();l(d,"factory",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
