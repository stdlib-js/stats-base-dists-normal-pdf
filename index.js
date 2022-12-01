// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,p=Math.ceil;function v(r){return r<0?p(r):y(r)}var s=Number.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,d=1023;function w(r){return r===b||r===s}var A,_=2147483647,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),N=Object.prototype.toString,g=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",U=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return N.call(r);t=r[h],u=h,n=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[h]=t:delete r[h],e}:function(r){return N.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=A,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,L="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,x=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:W,uint8:x};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n,t,e){return Q[0]=r,n[e]=R[X],n[e+t]=R[Z],n}function rr(r){return $(r,[0,0],1,0)}c(rr,"assign",$);var nr,tr,er=!0===J?1:0,or=new P(1),ur=new E(or.buffer);function ir(r){return or[0]=r,ur[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var vr=[0,0];function sr(r,n){var t,e;return rr.assign(r,vr,1,0),t=vr[0],t&=_,e=ir(n),pr(t|=e&=2147483648,vr[1])}function br(r){return Math.abs(r)}function dr(r,n,t,e){return l(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var wr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||l(r)||w(r)?r:(dr(r,wr,1,0),n+=wr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-d|0}(r=wr[0]),n<-1074?sr(0,r):n>1023?r<0?s:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr.assign(r,Ar,1,0),t=Ar[0],t&=2148532223,e*pr(t|=n+d<<20,Ar[1])))}var mr=1.4426950408889634,Nr=1/(1<<28);function gr(r){var n;return l(r)||r===b?r:r===s?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nr?1+r:function(r,n,t){var e,o,u,i;return _r(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=v(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}function hr(r){return y(r)===r}function Ur(r){return hr(r/2)}function jr(r){return Ur(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===J?0:1,Sr=new P(1),Er=new E(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===J?1:0,Gr=new P(1),Pr=new E(Gr.buffer);function Lr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var Mr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],xr=[0,1.350039202129749e-8],kr=1048575,Yr=1048576,qr=1083179008,Cr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,n){var t,e,o,u,i,f,a,c,y,p,v,A,m,N;if(l(r)||l(n))return NaN;if(rr.assign(n,Br,1,0),i=Br[0],0===Br[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(n===b)?0:b}(r,n)}if(rr.assign(r,Br,1,0),u=Br[0],0===Br[1]){if(0===u)return function(r,n){return n===s?b:n===b?0:n>0?jr(n)?r:0:jr(n)?sr(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(w(r))return r===s?Jr(-0,-n):n<0?0:b}if(r<0&&!1===hr(n))return(r-r)/(r-r);if(o=br(r),t=u&_|0,e=i&_|0,a=i>>>31|0,f=(f=u>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(ir(r)&_)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Cr*Cr:f*zr*zr;if(t>1072693248)return 0===a?f*Cr*Cr:f*zr*zr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Dr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,s,b,w,A,_,m,N,g,h,U;return N=0,t<Mr&&(N-=53,t=ir(n*=9007199254740992)),N+=(t>>20)-d|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,N+=1,t-=Mr),i=Fr(o=(_=(n=Lr(n,t))-(c=Vr[h]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=h<<18),A=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Fr(a=3+(u=i*i)+(A+=(f=m*(_-i*a-i*(n-(a-c))))*(i+o)),0),b=(v=-7.028461650952758e-9*(y=Fr(y=(_=i*a)+(m=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(m-(y-_))+xr[h])-((s=Fr(s=(p=.9617967009544373*y)+v+(l=Wr[h])+(w=N),0))-w-l-p),r[0]=s,r[1]=b,r}(Dr,o,t);if(A=(p=(n-(c=Fr(n,0)))*v[0]+n*v[1])+(y=c*v[0]),rr.assign(A,Br,1,0),m=Tr(Br[0]),N=Tr(Br[1]),m>=qr){if(0!=(m-qr|N))return f*Cr*Cr;if(p+8008566259537294e-32>A-y)return f*Cr*Cr}else if((m&_)>=1083231232){if(0!=(m-3230714880|N))return f*zr*zr;if(p<=A-y)return f*zr*zr}return A=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&_|0)>>20)-d|0,c=0,l>1071644672&&(o=Lr(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&_)>>20)-d|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=ir(a=1-((a=(u=.6931471824645996*(o=Fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?_r(a,c):Lr(a,r)}(m,y,p),f*A}var Kr=6.283185307179586;function Qr(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:0===t?r===n?b:0:(e=Jr(t,2),1/Ir(e*Kr)*gr(-1/(2*e)*Jr(r-n,2)))}function Rr(r){return function(){return r}}function Xr(r){return l(r)?Rr(NaN):function(n){return l(n)?NaN:n===r?b:0}}return c((function(r,n){return l(r)||l(n)?NaN:r===n?b:0}),"factory",Xr),c(Qr,"factory",(function(r,n){var t,e,o;return l(r)||l(n)||n<0?Rr(NaN):0===n?Xr(r):(t=Jr(n,2),e=1/Ir(t*Kr),o=-1/(2*t),function(n){return l(n)?NaN:e*gr(o*Jr(n-r,2))})})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
