// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@esm/index.mjs";function a(s,m,o){var a;return d(s)||d(m)||d(o)||o<0?NaN:0===o?s===m?r:0:(a=e(o,2),1/n(a*i)*t(-1/(2*a)*e(s-m,2)))}function p(s,r){var a,p,l;return d(s)||d(r)||r<0?m(NaN):0===r?o(s):(a=e(r,2),p=1/n(a*i),l=-1/(2*a),function(n){if(d(n))return NaN;return p*t(l*e(n-s,2))})}s(a,"factory",p);export{a as default,p as factory};
//# sourceMappingURL=index.mjs.map
