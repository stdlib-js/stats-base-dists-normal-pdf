"use strict";var f=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=f(function(h,c){
var I=require('@stdlib/math-base-special-exp/dist'),o=require('@stdlib/math-base-special-pow/dist'),O=require('@stdlib/math-base-special-sqrt/dist'),P=require('@stdlib/constants-float64-two-pi/dist'),w=require('@stdlib/constants-float64-pinf/dist'),n=require('@stdlib/math-base-assert-is-nan/dist');function x(t,r,e){var a,u,i;return n(t)||n(r)||n(e)||e<0?NaN:e===0?t===r?w:0:(a=o(e,2),u=1/O(a*P),i=-1/(2*a),u*I(i*o(t-r,2)))}c.exports=x
});var y=f(function(j,N){
var A=require('@stdlib/utils-constant-function/dist'),B=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,v=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sqrt/dist'),T=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-pow/dist'),W=require('@stdlib/constants-float64-two-pi/dist');function _(t,r){var e,a,u;if(v(t)||v(r)||r<0)return A(NaN);if(r===0)return B(t);return e=p(r,2),a=1/F(e*W),u=-1/(2*e),i;function i(q){return v(q)?NaN:a*T(u*p(q-t,2))}}N.exports=_
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),R=y();l(d,"factory",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
