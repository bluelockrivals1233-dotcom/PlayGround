(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="160",ym=0,xf=1,wm=2,Dd=1,kd=2,cr=3,Vr=0,oi=1,pr=2,Lr=0,gs=1,Ef=2,Af=3,Sf=4,Rm=5,ma=100,Cm=101,Um=102,Tf=103,Mf=104,Om=200,Pm=201,Nm=202,Im=203,$c=204,Yc=205,Dm=206,km=207,Lm=208,Fm=209,Bm=210,Gm=211,Vm=212,Hm=213,zm=214,Wm=0,Xm=1,Km=2,El=3,jm=4,qm=5,$m=6,Ym=7,Ld=0,Zm=1,Jm=2,Fr=0,Qm=1,eg=2,tg=3,Fd=4,ng=5,ig=6,Bd=300,As=301,Ss=302,Zc=303,Jc=304,Bl=306,Qc=1e3,ki=1001,eu=1002,ei=1003,bf=1004,oc=1005,bi=1006,rg=1007,lo=1008,Br=1009,ag=1010,sg=1011,xu=1012,Gd=1013,Dr=1014,kr=1015,co=1016,Vd=1017,Hd=1018,Ea=1020,og=1021,Li=1023,lg=1024,cg=1025,Aa=1026,Ts=1027,ug=1028,zd=1029,fg=1030,Wd=1031,Xd=1033,lc=33776,cc=33777,uc=33778,fc=33779,yf=35840,wf=35841,Rf=35842,Cf=35843,Kd=36196,Uf=37492,Of=37496,Pf=37808,Nf=37809,If=37810,Df=37811,kf=37812,Lf=37813,Ff=37814,Bf=37815,Gf=37816,Vf=37817,Hf=37818,zf=37819,Wf=37820,Xf=37821,hc=36492,Kf=36494,jf=36495,hg=36283,qf=36284,$f=36285,Yf=36286,jd=3e3,Sa=3001,dg=3200,pg=3201,qd=0,_g=1,yi="",Un="srgb",gr="srgb-linear",Eu="display-p3",Gl="display-p3-linear",Al="linear",mn="srgb",Sl="rec709",Tl="p3",Xa=7680,Zf=519,mg=512,gg=513,vg=514,$d=515,xg=516,Eg=517,Ag=518,Sg=519,Jf=35044,Qf="300 es",tu=1035,_r=2e3,Ml=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const io=Math.PI/180,uo=180/Math.PI;function Ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function ti(n,e,t){return Math.max(e,Math.min(t,n))}function Au(n,e){return(n%e+e)%e}function Tg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Mg(n,e,t){return n!==e?(t-n)/(e-n):0}function ro(n,e,t){return(1-t)*n+t*e}function bg(n,e,t,i){return ro(n,e,1-Math.exp(-t*i))}function yg(n,e=1){return e-Math.abs(Au(n,e*2)-e)}function wg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ug(n,e){return n+Math.random()*(e-n)}function Og(n){return n*(.5-Math.random())}function Pg(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(n){return n*io}function Ig(n){return n*uo}function nu(n){return(n&n-1)===0&&n!==0}function Dg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kg(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),f=a((e+i)/2),_=s((e+i)/2),h=a((e-i)/2),g=s((e-i)/2),E=a((i-e)/2),T=s((i-e)/2);switch(r){case"XYX":n.set(o*_,l*h,l*g,o*f);break;case"YZY":n.set(l*g,o*_,l*h,o*f);break;case"ZXZ":n.set(l*h,l*g,o*_,o*f);break;case"XZX":n.set(o*_,l*T,l*E,o*f);break;case"YXY":n.set(l*E,o*_,l*T,o*f);break;case"ZYZ":n.set(l*T,l*E,o*_,o*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const iu={DEG2RAD:io,RAD2DEG:uo,generateUUID:Ps,clamp:ti,euclideanModulo:Au,mapLinear:Tg,inverseLerp:Mg,lerp:ro,damp:bg,pingpong:yg,smoothstep:wg,smootherstep:Rg,randInt:Cg,randFloat:Ug,randFloatSpread:Og,seededRandom:Pg,degToRad:Ng,radToDeg:Ig,isPowerOfTwo:nu,ceilPowerOfTwo:Dg,floorPowerOfTwo:bl,setQuaternionFromProperEuler:kg,normalize:Zn,denormalize:us};class en{constructor(e=0,t=0){en.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ti(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(e,t,i,r,a,s,o,l,f){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,f)}set(e,t,i,r,a,s,o,l,f){const _=this.elements;return _[0]=e,_[1]=r,_[2]=o,_[3]=t,_[4]=a,_[5]=l,_[6]=i,_[7]=s,_[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],f=i[1],_=i[4],h=i[7],g=i[2],E=i[5],T=i[8],y=r[0],x=r[3],p=r[6],W=r[1],F=r[4],k=r[7],ce=r[2],q=r[5],V=r[8];return a[0]=s*y+o*W+l*ce,a[3]=s*x+o*F+l*q,a[6]=s*p+o*k+l*V,a[1]=f*y+_*W+h*ce,a[4]=f*x+_*F+h*q,a[7]=f*p+_*k+h*V,a[2]=g*y+E*W+T*ce,a[5]=g*x+E*F+T*q,a[8]=g*p+E*k+T*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],f=e[7],_=e[8];return t*s*_-t*o*f-i*a*_+i*o*l+r*a*f-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],f=e[7],_=e[8],h=_*s-o*f,g=o*l-_*a,E=f*a-s*l,T=t*h+i*g+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=h*y,e[1]=(r*f-_*i)*y,e[2]=(o*i-r*s)*y,e[3]=g*y,e[4]=(_*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=E*y,e[7]=(i*l-f*t)*y,e[8]=(s*t-i*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),f=Math.sin(a);return this.set(i*l,i*f,-i*(l*s+f*o)+s+e,-r*f,r*l,-r*(-f*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new qt;function Yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lg(){const n=yl("canvas");return n.style.display="block",n}const th={};function ao(n){n in th||(th[n]=!0,console.warn(n))}const nh=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[gr]:{transfer:Al,primaries:Sl,toReference:n=>n,fromReference:n=>n},[Un]:{transfer:mn,primaries:Sl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gl]:{transfer:Al,primaries:Tl,toReference:n=>n.applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh)},[Eu]:{transfer:mn,primaries:Tl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh).convertLinearToSRGB()}},Fg=new Set([gr,Gl]),on={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Bo[e].toReference,r=Bo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Bo[n].primaries},getTransfer:function(n){return n===yi?Al:Bo[n].transfer}};function vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ka;class Zd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ka===void 0&&(Ka=yl("canvas")),Ka.width=e.width,Ka.height=e.height;const i=Ka.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ka}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=vs(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vs(t[i]/255)*255):t[i]=vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bg=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(_c(r[s].image)):a.push(_c(r[s]))}else a=_c(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class li extends Os{constructor(e=li.DEFAULT_IMAGE,t=li.DEFAULT_MAPPING,i=ki,r=ki,a=bi,s=lo,o=Li,l=Br,f=li.DEFAULT_ANISOTROPY,_=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ps(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new en(0,0),this.repeat=new en(1,1),this.center=new en(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===Sa?Un:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Un?Sa:jd}set encoding(e){ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sa?Un:yi}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Bd;li.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,t=0,i=0,r=1){vn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,f=l[0],_=l[4],h=l[8],g=l[1],E=l[5],T=l[9],y=l[2],x=l[6],p=l[10];if(Math.abs(_-g)<.01&&Math.abs(h-y)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(h+y)<.1&&Math.abs(T+x)<.1&&Math.abs(f+E+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(f+1)/2,k=(E+1)/2,ce=(p+1)/2,q=(_+g)/4,V=(h+y)/4,_e=(T+x)/4;return F>k&&F>ce?F<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(F),r=q/i,a=V/i):k>ce?k<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(k),i=q/r,a=_e/r):ce<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(ce),i=V/a,r=_e/a),this.set(i,r,a,t),this}let W=Math.sqrt((x-T)*(x-T)+(h-y)*(h-y)+(g-_)*(g-_));return Math.abs(W)<.001&&(W=1),this.x=(x-T)/W,this.y=(h-y)/W,this.z=(g-_)/W,this.w=Math.acos((f+E+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vg extends Os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sa?Un:yi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new li(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends Vg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qd extends li{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hg extends li{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],f=i[r+1],_=i[r+2],h=i[r+3];const g=a[s+0],E=a[s+1],T=a[s+2],y=a[s+3];if(o===0){e[t+0]=l,e[t+1]=f,e[t+2]=_,e[t+3]=h;return}if(o===1){e[t+0]=g,e[t+1]=E,e[t+2]=T,e[t+3]=y;return}if(h!==y||l!==g||f!==E||_!==T){let x=1-o;const p=l*g+f*E+_*T+h*y,W=p>=0?1:-1,F=1-p*p;if(F>Number.EPSILON){const ce=Math.sqrt(F),q=Math.atan2(ce,p*W);x=Math.sin(x*q)/ce,o=Math.sin(o*q)/ce}const k=o*W;if(l=l*x+g*k,f=f*x+E*k,_=_*x+T*k,h=h*x+y*k,x===1-o){const ce=1/Math.sqrt(l*l+f*f+_*_+h*h);l*=ce,f*=ce,_*=ce,h*=ce}}e[t]=l,e[t+1]=f,e[t+2]=_,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],f=i[r+2],_=i[r+3],h=a[s],g=a[s+1],E=a[s+2],T=a[s+3];return e[t]=o*T+_*h+l*E-f*g,e[t+1]=l*T+_*g+f*h-o*E,e[t+2]=f*T+_*E+o*g-l*h,e[t+3]=_*T-o*h-l*g-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,f=o(i/2),_=o(r/2),h=o(a/2),g=l(i/2),E=l(r/2),T=l(a/2);switch(s){case"XYZ":this._x=g*_*h+f*E*T,this._y=f*E*h-g*_*T,this._z=f*_*T+g*E*h,this._w=f*_*h-g*E*T;break;case"YXZ":this._x=g*_*h+f*E*T,this._y=f*E*h-g*_*T,this._z=f*_*T-g*E*h,this._w=f*_*h+g*E*T;break;case"ZXY":this._x=g*_*h-f*E*T,this._y=f*E*h+g*_*T,this._z=f*_*T+g*E*h,this._w=f*_*h-g*E*T;break;case"ZYX":this._x=g*_*h-f*E*T,this._y=f*E*h+g*_*T,this._z=f*_*T-g*E*h,this._w=f*_*h+g*E*T;break;case"YZX":this._x=g*_*h+f*E*T,this._y=f*E*h+g*_*T,this._z=f*_*T-g*E*h,this._w=f*_*h-g*E*T;break;case"XZY":this._x=g*_*h-f*E*T,this._y=f*E*h-g*_*T,this._z=f*_*T+g*E*h,this._w=f*_*h+g*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],f=t[2],_=t[6],h=t[10],g=i+o+h;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(_-l)*E,this._y=(a-f)*E,this._z=(s-r)*E}else if(i>o&&i>h){const E=2*Math.sqrt(1+i-o-h);this._w=(_-l)/E,this._x=.25*E,this._y=(r+s)/E,this._z=(a+f)/E}else if(o>h){const E=2*Math.sqrt(1+o-i-h);this._w=(a-f)/E,this._x=(r+s)/E,this._y=.25*E,this._z=(l+_)/E}else{const E=2*Math.sqrt(1+h-i-o);this._w=(s-r)/E,this._x=(a+f)/E,this._y=(l+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ti(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,f=t._z,_=t._w;return this._x=i*_+s*o+r*f-a*l,this._y=r*_+s*l+a*o-i*f,this._z=a*_+s*f+i*l-r*o,this._w=s*_-i*o-r*l-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const E=1-t;return this._w=E*s+t*this._w,this._x=E*i+t*this._x,this._y=E*r+t*this._y,this._z=E*a+t*this._z,this.normalize(),this}const f=Math.sqrt(l),_=Math.atan2(f,o),h=Math.sin((1-t)*_)/f,g=Math.sin(t*_)/f;return this._w=s*h+this._w*g,this._x=i*h+this._x*g,this._y=r*h+this._y*g,this._z=a*h+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class We{constructor(e=0,t=0,i=0){We.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,f=2*(s*r-o*i),_=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*f+s*h-o*_,this.y=i+l*_+o*f-a*h,this.z=r+l*h+a*_-s*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ti(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new We,rh=new yo;class wo{constructor(e=new We(1/0,1/0,1/0),t=new We(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Oi):Oi.fromBufferAttribute(a,s),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Vo.subVectors(this.max,Ys),ja.subVectors(e.a,Ys),qa.subVectors(e.b,Ys),$a.subVectors(e.c,Ys),yr.subVectors(qa,ja),wr.subVectors($a,qa),oa.subVectors(ja,$a);let t=[0,-yr.z,yr.y,0,-wr.z,wr.y,0,-oa.z,oa.y,yr.z,0,-yr.x,wr.z,0,-wr.x,oa.z,0,-oa.x,-yr.y,yr.x,0,-wr.y,wr.x,0,-oa.y,oa.x,0];return!gc(t,ja,qa,$a,Vo)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,ja,qa,$a,Vo))?!1:(Ho.crossVectors(yr,wr),t=[Ho.x,Ho.y,Ho.z],gc(t,ja,qa,$a,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new We,new We,new We,new We,new We,new We,new We,new We],Oi=new We,Go=new wo,ja=new We,qa=new We,$a=new We,yr=new We,wr=new We,oa=new We,Ys=new We,Vo=new We,Ho=new We,la=new We;function gc(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){la.fromArray(n,a);const o=r.x*Math.abs(la.x)+r.y*Math.abs(la.y)+r.z*Math.abs(la.z),l=e.dot(la),f=t.dot(la),_=i.dot(la);if(Math.max(-Math.max(l,f,_),Math.min(l,f,_))>o)return!1}return!0}const zg=new wo,Zs=new We,vc=new We;class Su{constructor(e=new We,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(vc)),this.expandByPoint(Zs.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new We,xc=new We,zo=new We,Rr=new We,Ec=new We,Wo=new We,Ac=new We;class Wg{constructor(e=new We,t=new We(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xc.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(xc);const a=e.distanceTo(t)*.5,s=-this.direction.dot(zo),o=Rr.dot(this.direction),l=-Rr.dot(zo),f=Rr.lengthSq(),_=Math.abs(1-s*s);let h,g,E,T;if(_>0)if(h=s*l-o,g=s*o-l,T=a*_,h>=0)if(g>=-T)if(g<=T){const y=1/_;h*=y,g*=y,E=h*(h+s*g+2*o)+g*(s*h+g+2*l)+f}else g=a,h=Math.max(0,-(s*g+o)),E=-h*h+g*(g+2*l)+f;else g=-a,h=Math.max(0,-(s*g+o)),E=-h*h+g*(g+2*l)+f;else g<=-T?(h=Math.max(0,-(-s*a+o)),g=h>0?-a:Math.min(Math.max(-a,-l),a),E=-h*h+g*(g+2*l)+f):g<=T?(h=0,g=Math.min(Math.max(-a,-l),a),E=g*(g+2*l)+f):(h=Math.max(0,-(s*a+o)),g=h>0?a:Math.min(Math.max(-a,-l),a),E=-h*h+g*(g+2*l)+f);else g=s>0?-a:a,h=Math.max(0,-(s*g+o)),E=-h*h+g*(g+2*l)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xc).addScaledVector(zo,g),E}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const i=rr.dot(this.direction),r=rr.dot(rr)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const f=1/this.direction.x,_=1/this.direction.y,h=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,r=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,r=(e.min.x-g.x)*f),_>=0?(a=(e.min.y-g.y)*_,s=(e.max.y-g.y)*_):(a=(e.max.y-g.y)*_,s=(e.min.y-g.y)*_),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-g.z)*h,l=(e.max.z-g.z)*h):(o=(e.max.z-g.z)*h,l=(e.min.z-g.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,r,a){Ec.subVectors(t,e),Wo.subVectors(i,e),Ac.crossVectors(Ec,Wo);let s=this.direction.dot(Ac),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Rr.subVectors(this.origin,e);const l=o*this.direction.dot(Wo.crossVectors(Rr,Wo));if(l<0)return null;const f=o*this.direction.dot(Ec.cross(Rr));if(f<0||l+f>s)return null;const _=-o*Rr.dot(Ac);return _<0?null:this.at(_/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wn{constructor(e,t,i,r,a,s,o,l,f,_,h,g,E,T,y,x){wn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,f,_,h,g,E,T,y,x)}set(e,t,i,r,a,s,o,l,f,_,h,g,E,T,y,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=f,p[6]=_,p[10]=h,p[14]=g,p[3]=E,p[7]=T,p[11]=y,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ya.setFromMatrixColumn(e,0).length(),a=1/Ya.setFromMatrixColumn(e,1).length(),s=1/Ya.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),f=Math.sin(r),_=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const g=s*_,E=s*h,T=o*_,y=o*h;t[0]=l*_,t[4]=-l*h,t[8]=f,t[1]=E+T*f,t[5]=g-y*f,t[9]=-o*l,t[2]=y-g*f,t[6]=T+E*f,t[10]=s*l}else if(e.order==="YXZ"){const g=l*_,E=l*h,T=f*_,y=f*h;t[0]=g+y*o,t[4]=T*o-E,t[8]=s*f,t[1]=s*h,t[5]=s*_,t[9]=-o,t[2]=E*o-T,t[6]=y+g*o,t[10]=s*l}else if(e.order==="ZXY"){const g=l*_,E=l*h,T=f*_,y=f*h;t[0]=g-y*o,t[4]=-s*h,t[8]=T+E*o,t[1]=E+T*o,t[5]=s*_,t[9]=y-g*o,t[2]=-s*f,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const g=s*_,E=s*h,T=o*_,y=o*h;t[0]=l*_,t[4]=T*f-E,t[8]=g*f+y,t[1]=l*h,t[5]=y*f+g,t[9]=E*f-T,t[2]=-f,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const g=s*l,E=s*f,T=o*l,y=o*f;t[0]=l*_,t[4]=y-g*h,t[8]=T*h+E,t[1]=h,t[5]=s*_,t[9]=-o*_,t[2]=-f*_,t[6]=E*h+T,t[10]=g-y*h}else if(e.order==="XZY"){const g=s*l,E=s*f,T=o*l,y=o*f;t[0]=l*_,t[4]=-h,t[8]=f*_,t[1]=g*h+y,t[5]=s*_,t[9]=E*h-T,t[2]=T*h-E,t[6]=o*_,t[10]=y*h+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,Kg)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Cr.crossVectors(i,fi),Cr.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Cr.crossVectors(i,fi)),Cr.normalize(),Xo.crossVectors(fi,Cr),r[0]=Cr.x,r[4]=Xo.x,r[8]=fi.x,r[1]=Cr.y,r[5]=Xo.y,r[9]=fi.y,r[2]=Cr.z,r[6]=Xo.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],f=i[12],_=i[1],h=i[5],g=i[9],E=i[13],T=i[2],y=i[6],x=i[10],p=i[14],W=i[3],F=i[7],k=i[11],ce=i[15],q=r[0],V=r[4],_e=r[8],A=r[12],U=r[1],ee=r[5],Y=r[9],de=r[13],X=r[2],j=r[6],ke=r[10],Le=r[14],Ce=r[3],pe=r[7],Me=r[11],Ve=r[15];return a[0]=s*q+o*U+l*X+f*Ce,a[4]=s*V+o*ee+l*j+f*pe,a[8]=s*_e+o*Y+l*ke+f*Me,a[12]=s*A+o*de+l*Le+f*Ve,a[1]=_*q+h*U+g*X+E*Ce,a[5]=_*V+h*ee+g*j+E*pe,a[9]=_*_e+h*Y+g*ke+E*Me,a[13]=_*A+h*de+g*Le+E*Ve,a[2]=T*q+y*U+x*X+p*Ce,a[6]=T*V+y*ee+x*j+p*pe,a[10]=T*_e+y*Y+x*ke+p*Me,a[14]=T*A+y*de+x*Le+p*Ve,a[3]=W*q+F*U+k*X+ce*Ce,a[7]=W*V+F*ee+k*j+ce*pe,a[11]=W*_e+F*Y+k*ke+ce*Me,a[15]=W*A+F*de+k*Le+ce*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],f=e[13],_=e[2],h=e[6],g=e[10],E=e[14],T=e[3],y=e[7],x=e[11],p=e[15];return T*(+a*l*h-r*f*h-a*o*g+i*f*g+r*o*E-i*l*E)+y*(+t*l*E-t*f*g+a*s*g-r*s*E+r*f*_-a*l*_)+x*(+t*f*h-t*o*E-a*s*h+i*s*E+a*o*_-i*f*_)+p*(-r*o*_-t*l*h+t*o*g+r*s*h-i*s*g+i*l*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],f=e[7],_=e[8],h=e[9],g=e[10],E=e[11],T=e[12],y=e[13],x=e[14],p=e[15],W=h*x*f-y*g*f+y*l*E-o*x*E-h*l*p+o*g*p,F=T*g*f-_*x*f-T*l*E+s*x*E+_*l*p-s*g*p,k=_*y*f-T*h*f+T*o*E-s*y*E-_*o*p+s*h*p,ce=T*h*l-_*y*l-T*o*g+s*y*g+_*o*x-s*h*x,q=t*W+i*F+r*k+a*ce;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/q;return e[0]=W*V,e[1]=(y*g*a-h*x*a-y*r*E+i*x*E+h*r*p-i*g*p)*V,e[2]=(o*x*a-y*l*a+y*r*f-i*x*f-o*r*p+i*l*p)*V,e[3]=(h*l*a-o*g*a-h*r*f+i*g*f+o*r*E-i*l*E)*V,e[4]=F*V,e[5]=(_*x*a-T*g*a+T*r*E-t*x*E-_*r*p+t*g*p)*V,e[6]=(T*l*a-s*x*a-T*r*f+t*x*f+s*r*p-t*l*p)*V,e[7]=(s*g*a-_*l*a+_*r*f-t*g*f-s*r*E+t*l*E)*V,e[8]=k*V,e[9]=(T*h*a-_*y*a-T*i*E+t*y*E+_*i*p-t*h*p)*V,e[10]=(s*y*a-T*o*a+T*i*f-t*y*f-s*i*p+t*o*p)*V,e[11]=(_*o*a-s*h*a-_*i*f+t*h*f+s*i*E-t*o*E)*V,e[12]=ce*V,e[13]=(_*y*r-T*h*r+T*i*g-t*y*g-_*i*x+t*h*x)*V,e[14]=(T*o*r-s*y*r-T*i*l+t*y*l+s*i*x-t*o*x)*V,e[15]=(s*h*r-_*o*r+_*i*l-t*h*l-s*i*g+t*o*g)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,f=a*s,_=a*o;return this.set(f*s+i,f*o-r*l,f*l+r*o,0,f*o+r*l,_*o+i,_*l-r*s,0,f*l-r*o,_*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,f=a+a,_=s+s,h=o+o,g=a*f,E=a*_,T=a*h,y=s*_,x=s*h,p=o*h,W=l*f,F=l*_,k=l*h,ce=i.x,q=i.y,V=i.z;return r[0]=(1-(y+p))*ce,r[1]=(E+k)*ce,r[2]=(T-F)*ce,r[3]=0,r[4]=(E-k)*q,r[5]=(1-(g+p))*q,r[6]=(x+W)*q,r[7]=0,r[8]=(T+F)*V,r[9]=(x-W)*V,r[10]=(1-(g+y))*V,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Ya.set(r[0],r[1],r[2]).length();const s=Ya.set(r[4],r[5],r[6]).length(),o=Ya.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Pi.copy(this);const f=1/a,_=1/s,h=1/o;return Pi.elements[0]*=f,Pi.elements[1]*=f,Pi.elements[2]*=f,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,t.setFromRotationMatrix(Pi),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=_r){const l=this.elements,f=2*a/(t-e),_=2*a/(i-r),h=(t+e)/(t-e),g=(i+r)/(i-r);let E,T;if(o===_r)E=-(s+a)/(s-a),T=-2*s*a/(s-a);else if(o===Ml)E=-s/(s-a),T=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=_,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=E,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=_r){const l=this.elements,f=1/(t-e),_=1/(i-r),h=1/(s-a),g=(t+e)*f,E=(i+r)*_;let T,y;if(o===_r)T=(s+a)*h,y=-2*h;else if(o===Ml)T=a*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*_,l[9]=0,l[13]=-E,l[2]=0,l[6]=0,l[10]=y,l[14]=-T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ya=new We,Pi=new wn,Xg=new We(0,0,0),Kg=new We(1,1,1),Cr=new We,Xo=new We,fi=new We,ah=new wn,sh=new yo;class Vl{constructor(e=0,t=0,i=0,r=Vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],f=r[5],_=r[9],h=r[2],g=r[6],E=r[10];switch(t){case"XYZ":this._y=Math.asin(ti(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(o,E),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ti(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-h,E),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ti(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(ti(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-_,f),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,E));break;case"XZY":this._z=Math.asin(-ti(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vl.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const oh=new We,Za=new yo,ar=new wn,Ko=new We,Js=new We,qg=new We,$g=new yo,lh=new We(1,0,0),ch=new We(0,1,0),uh=new We(0,0,1),Yg={type:"added"},Zg={type:"removed"};class Vn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new We,t=new Vl,i=new yo,r=new We(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wn},normalMatrix:{value:new qt}}),this.matrix=new wn,this.matrixWorld=new wn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Za.setFromAxisAngle(e,t),this.quaternion.multiply(Za),this}rotateOnWorldAxis(e,t){return Za.setFromAxisAngle(e,t),this.quaternion.premultiply(Za),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Js,Ko,this.up):ar.lookAt(Ko,Js,this.up),this.quaternion.setFromRotationMatrix(ar),r&&(ar.extractRotation(r.matrixWorld),Za.setFromRotationMatrix(ar),this.quaternion.premultiply(Za.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,$g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,_=l.length;f<_;f++){const h=l[f];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),f=s(e.textures),_=s(e.images),h=s(e.shapes),g=s(e.skeletons),E=s(e.animations),T=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),f.length>0&&(i.textures=f),_.length>0&&(i.images=_),h.length>0&&(i.shapes=h),g.length>0&&(i.skeletons=g),E.length>0&&(i.animations=E),T.length>0&&(i.nodes=T)}return i.object=r,i;function s(o){const l=[];for(const f in o){const _=o[f];delete _.metadata,l.push(_)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new We(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new We,sr=new We,Sc=new We,or=new We,Ja=new We,Qa=new We,fh=new We,Tc=new We,Mc=new We,bc=new We;let jo=!1;class Ii{constructor(e=new We,t=new We,i=new We){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ni.subVectors(e,t),r.cross(Ni);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Ni.subVectors(r,t),sr.subVectors(i,t),Sc.subVectors(e,t);const s=Ni.dot(Ni),o=Ni.dot(sr),l=Ni.dot(Sc),f=sr.dot(sr),_=sr.dot(Sc),h=s*f-o*o;if(h===0)return a.set(0,0,0),null;const g=1/h,E=(f*l-o*_)*g,T=(s*_-o*l)*g;return a.set(1-E-T,T,E)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getUV(e,t,i,r,a,s,o,l){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),this.getInterpolation(e,t,i,r,a,s,o,l)}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,or.x),l.addScaledVector(s,or.y),l.addScaledVector(o,or.z),l)}static isFrontFacing(e,t,i,r){return Ni.subVectors(i,t),sr.subVectors(e,t),Ni.cross(sr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ni.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),Ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Ja.subVectors(r,i),Qa.subVectors(a,i),Tc.subVectors(e,i);const l=Ja.dot(Tc),f=Qa.dot(Tc);if(l<=0&&f<=0)return t.copy(i);Mc.subVectors(e,r);const _=Ja.dot(Mc),h=Qa.dot(Mc);if(_>=0&&h<=_)return t.copy(r);const g=l*h-_*f;if(g<=0&&l>=0&&_<=0)return s=l/(l-_),t.copy(i).addScaledVector(Ja,s);bc.subVectors(e,a);const E=Ja.dot(bc),T=Qa.dot(bc);if(T>=0&&E<=T)return t.copy(a);const y=E*f-l*T;if(y<=0&&f>=0&&T<=0)return o=f/(f-T),t.copy(i).addScaledVector(Qa,o);const x=_*T-E*h;if(x<=0&&h-_>=0&&E-T>=0)return fh.subVectors(a,r),o=(h-_)/(h-_+(E-T)),t.copy(r).addScaledVector(fh,o);const p=1/(x+y+g);return s=y*p,o=g*p,t.copy(i).addScaledVector(Ja,s).addScaledVector(Qa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},qo={h:0,s:0,l:0};function yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=on.workingColorSpace){return this.r=e,this.g=t,this.b=i,on.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=on.workingColorSpace){if(e=Au(e,1),t=ti(t,0,1),i=ti(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=yc(s,a,e+1/3),this.g=yc(s,a,e),this.b=yc(s,a,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return on.fromWorkingColorSpace(Wn.copy(this),e),Math.round(ti(Wn.r*255,0,255))*65536+Math.round(ti(Wn.g*255,0,255))*256+Math.round(ti(Wn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(Wn.copy(this),t);const i=Wn.r,r=Wn.g,a=Wn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,f;const _=(o+s)/2;if(o===s)l=0,f=0;else{const h=s-o;switch(f=_<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=f,e.l=_,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Un){on.fromWorkingColorSpace(Wn.copy(this),e);const t=Wn.r,i=Wn.g,r=Wn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(qo);const i=ro(Ur.h,qo.h,t),r=ro(Ur.s,qo.s,t),a=ro(Ur.l,qo.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Qt;Qt.NAMES=tp;let Jg=0;class Ro extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=gs,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Yc,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Yc&&(i.blendDst=this.blendDst),this.blendEquation!==ma&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new We,$o=new en;class ji{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),r=Zn(r,this.array),a=Zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jf&&(e.usage=this.usage),e}}class np extends ji{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ip extends ji{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jn extends ji{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qg=0;const Si=new wn,wc=new Vn,es=new We,hi=new wo,Qs=new wo,Ln=new We;class Zi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?ip:np)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new We(-1/0,-1/0,-1/0),new We(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new We,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(hi.min,Qs.min),hi.expandByPoint(Ln),Ln.addVectors(hi.max,Qs.max),hi.expandByPoint(Ln)):(hi.expandByPoint(Qs.min),hi.expandByPoint(Qs.max))}hi.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ln.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ln));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let f=0,_=o.count;f<_;f++)Ln.fromBufferAttribute(o,f),l&&(es.fromBufferAttribute(e,f),Ln.add(es)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,f=[],_=[];for(let U=0;U<o;U++)f[U]=new We,_[U]=new We;const h=new We,g=new We,E=new We,T=new en,y=new en,x=new en,p=new We,W=new We;function F(U,ee,Y){h.fromArray(r,U*3),g.fromArray(r,ee*3),E.fromArray(r,Y*3),T.fromArray(s,U*2),y.fromArray(s,ee*2),x.fromArray(s,Y*2),g.sub(h),E.sub(h),y.sub(T),x.sub(T);const de=1/(y.x*x.y-x.x*y.y);isFinite(de)&&(p.copy(g).multiplyScalar(x.y).addScaledVector(E,-y.y).multiplyScalar(de),W.copy(E).multiplyScalar(y.x).addScaledVector(g,-x.x).multiplyScalar(de),f[U].add(p),f[ee].add(p),f[Y].add(p),_[U].add(W),_[ee].add(W),_[Y].add(W))}let k=this.groups;k.length===0&&(k=[{start:0,count:i.length}]);for(let U=0,ee=k.length;U<ee;++U){const Y=k[U],de=Y.start,X=Y.count;for(let j=de,ke=de+X;j<ke;j+=3)F(i[j+0],i[j+1],i[j+2])}const ce=new We,q=new We,V=new We,_e=new We;function A(U){V.fromArray(a,U*3),_e.copy(V);const ee=f[U];ce.copy(ee),ce.sub(V.multiplyScalar(V.dot(ee))).normalize(),q.crossVectors(_e,ee);const de=q.dot(_[U])<0?-1:1;l[U*4]=ce.x,l[U*4+1]=ce.y,l[U*4+2]=ce.z,l[U*4+3]=de}for(let U=0,ee=k.length;U<ee;++U){const Y=k[U],de=Y.start,X=Y.count;for(let j=de,ke=de+X;j<ke;j+=3)A(i[j+0]),A(i[j+1]),A(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ji(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,E=i.count;g<E;g++)i.setXYZ(g,0,0,0);const r=new We,a=new We,s=new We,o=new We,l=new We,f=new We,_=new We,h=new We;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),y=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),_.subVectors(s,a),h.subVectors(r,a),_.cross(h),o.fromBufferAttribute(i,T),l.fromBufferAttribute(i,y),f.fromBufferAttribute(i,x),o.add(_),l.add(_),f.add(_),i.setXYZ(T,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,E=t.count;g<E;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),s.fromBufferAttribute(t,g+2),_.subVectors(s,a),h.subVectors(r,a),_.cross(h),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(o,l){const f=o.array,_=o.itemSize,h=o.normalized,g=new f.constructor(l.length*_);let E=0,T=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?E=l[y]*o.data.stride+o.offset:E=l[y]*_;for(let p=0;p<_;p++)g[T++]=f[E++]}return new ji(g,_,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],f=e(l,i);t.setAttribute(o,f)}const a=this.morphAttributes;for(const o in a){const l=[],f=a[o];for(let _=0,h=f.length;_<h;_++){const g=f[_],E=e(g,i);l.push(E)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const f=s[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const f=i[l];e.data.attributes[l]=f.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],_=[];for(let h=0,g=f.length;h<g;h++){const E=f[h];_.push(E.toJSON(e.data))}_.length>0&&(r[l]=_,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const f in r){const _=r[f];this.setAttribute(f,_.clone(t))}const a=e.morphAttributes;for(const f in a){const _=[],h=a[f];for(let g=0,E=h.length;g<E;g++)_.push(h[g].clone(t));this.morphAttributes[f]=_}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let f=0,_=s.length;f<_;f++){const h=s[f];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new wn,ca=new Wg,Yo=new Su,dh=new We,ts=new We,ns=new We,is=new We,Rc=new We,Zo=new We,Jo=new en,Qo=new en,el=new en,ph=new We,_h=new We,mh=new We,tl=new We,nl=new We;class hn extends Vn{constructor(e=new Zi,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Zo.set(0,0,0);for(let l=0,f=a.length;l<f;l++){const _=o[l],h=a[l];_!==0&&(Rc.fromBufferAttribute(h,e),s?Zo.addScaledVector(Rc,_):Zo.addScaledVector(Rc.sub(t),_))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(a),ca.copy(e.ray).recast(e.near),!(Yo.containsPoint(ca.origin)===!1&&(ca.intersectSphere(Yo,dh)===null||ca.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(hh.copy(a).invert(),ca.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,f=a.attributes.uv,_=a.attributes.uv1,h=a.attributes.normal,g=a.groups,E=a.drawRange;if(o!==null)if(Array.isArray(s))for(let T=0,y=g.length;T<y;T++){const x=g[T],p=s[x.materialIndex],W=Math.max(x.start,E.start),F=Math.min(o.count,Math.min(x.start+x.count,E.start+E.count));for(let k=W,ce=F;k<ce;k+=3){const q=o.getX(k),V=o.getX(k+1),_e=o.getX(k+2);r=il(this,p,e,i,f,_,h,q,V,_e),r&&(r.faceIndex=Math.floor(k/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const T=Math.max(0,E.start),y=Math.min(o.count,E.start+E.count);for(let x=T,p=y;x<p;x+=3){const W=o.getX(x),F=o.getX(x+1),k=o.getX(x+2);r=il(this,s,e,i,f,_,h,W,F,k),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let T=0,y=g.length;T<y;T++){const x=g[T],p=s[x.materialIndex],W=Math.max(x.start,E.start),F=Math.min(l.count,Math.min(x.start+x.count,E.start+E.count));for(let k=W,ce=F;k<ce;k+=3){const q=k,V=k+1,_e=k+2;r=il(this,p,e,i,f,_,h,q,V,_e),r&&(r.faceIndex=Math.floor(k/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const T=Math.max(0,E.start),y=Math.min(l.count,E.start+E.count);for(let x=T,p=y;x<p;x+=3){const W=x,F=x+1,k=x+2;r=il(this,s,e,i,f,_,h,W,F,k),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function e0(n,e,t,i,r,a,s,o){let l;if(e.side===oi?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Vr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(nl);return f<t.near||f>t.far?null:{distance:f,point:nl.clone(),object:n}}function il(n,e,t,i,r,a,s,o,l,f){n.getVertexPosition(o,ts),n.getVertexPosition(l,ns),n.getVertexPosition(f,is);const _=e0(n,e,t,i,ts,ns,is,tl);if(_){r&&(Jo.fromBufferAttribute(r,o),Qo.fromBufferAttribute(r,l),el.fromBufferAttribute(r,f),_.uv=Ii.getInterpolation(tl,ts,ns,is,Jo,Qo,el,new en)),a&&(Jo.fromBufferAttribute(a,o),Qo.fromBufferAttribute(a,l),el.fromBufferAttribute(a,f),_.uv1=Ii.getInterpolation(tl,ts,ns,is,Jo,Qo,el,new en),_.uv2=_.uv1),s&&(ph.fromBufferAttribute(s,o),_h.fromBufferAttribute(s,l),mh.fromBufferAttribute(s,f),_.normal=Ii.getInterpolation(tl,ts,ns,is,ph,_h,mh,new We),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const h={a:o,b:l,c:f,normal:new We,materialIndex:0};Ii.getNormal(ts,ns,is,h.normal),_.face=h}return _}class si extends Zi{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],f=[],_=[],h=[];let g=0,E=0;T("z","y","x",-1,-1,i,t,e,s,a,0),T("z","y","x",1,-1,i,t,-e,s,a,1),T("x","z","y",1,1,e,i,t,r,s,2),T("x","z","y",1,-1,e,i,-t,r,s,3),T("x","y","z",1,-1,e,t,i,r,a,4),T("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new jn(f,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(h,2));function T(y,x,p,W,F,k,ce,q,V,_e,A){const U=k/V,ee=ce/_e,Y=k/2,de=ce/2,X=q/2,j=V+1,ke=_e+1;let Le=0,Ce=0;const pe=new We;for(let Me=0;Me<ke;Me++){const Ve=Me*ee-de;for(let we=0;we<j;we++){const se=we*U-Y;pe[y]=se*W,pe[x]=Ve*F,pe[p]=X,f.push(pe.x,pe.y,pe.z),pe[y]=0,pe[x]=0,pe[p]=q>0?1:-1,_.push(pe.x,pe.y,pe.z),h.push(we/V),h.push(1-Me/_e),Le+=1}}for(let Me=0;Me<_e;Me++)for(let Ve=0;Ve<V;Ve++){const we=g+Ve+j*Me,se=g+Ve+j*(Me+1),ge=g+(Ve+1)+j*(Me+1),$e=g+(Ve+1)+j*Me;l.push(we,se,$e),l.push(se,ge,$e),Ce+=6}o.addGroup(E,Ce,A),E+=Ce,g+=Le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const r in i)e[r]=i[r]}return e}function t0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rp(n){return n.getRenderTarget()===null?n.outputColorSpace:on.workingColorSpace}const n0={clone:Ms,merge:Qn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wn,this.projectionMatrix=new wn,this.projectionMatrixInverse=new wn,this.coordinateSystem=_r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _i extends ap{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,f=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/f,r*=s.width/l,i*=s.height/f}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,as=1;class a0 extends Vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(rs,as,e,t);r.layers=this.layers,this.add(r);const a=new _i(rs,as,e,t);a.layers=this.layers,this.add(a);const s=new _i(rs,as,e,t);s.layers=this.layers,this.add(s);const o=new _i(rs,as,e,t);o.layers=this.layers,this.add(o);const l=new _i(rs,as,e,t);l.layers=this.layers,this.add(l);const f=new _i(rs,as,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const f of t)this.remove(f);if(e===_r)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,f,_]=this.children,h=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,_),e.setRenderTarget(h,g,E),e.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class sp extends li{constructor(e,t,i,r,a,s,o,l,f,_){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,r,a,s,o,l,f,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s0 extends Ma{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sa?Un:yi),this.texture=new sp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new si(5,5,5),a=new ya({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Lr});a.uniforms.tEquirect.value=t;const s=new hn(r,a),o=t.minFilter;return t.minFilter===lo&&(t.minFilter=bi),new a0(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Cc=new We,o0=new We,l0=new qt;class pa{constructor(e=new We(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cc.subVectors(i,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l0.getNormalMatrix(e),r=this.coplanarPoint(Cc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ua=new Su,rl=new We;class Tu{constructor(e=new pa,t=new pa,i=new pa,r=new pa,a=new pa,s=new pa){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_r){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],f=r[4],_=r[5],h=r[6],g=r[7],E=r[8],T=r[9],y=r[10],x=r[11],p=r[12],W=r[13],F=r[14],k=r[15];if(i[0].setComponents(l-a,g-f,x-E,k-p).normalize(),i[1].setComponents(l+a,g+f,x+E,k+p).normalize(),i[2].setComponents(l+s,g+_,x+T,k+W).normalize(),i[3].setComponents(l-s,g-_,x-T,k-W).normalize(),i[4].setComponents(l-o,g-h,x-y,k-F).normalize(),t===_r)i[5].setComponents(l+o,g+h,x+y,k+F).normalize();else if(t===Ml)i[5].setComponents(o,h,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476,ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function c0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(f,_){const h=f.array,g=f.usage,E=h.byteLength,T=n.createBuffer();n.bindBuffer(_,T),n.bufferData(_,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(h instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:T,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:E}}function a(f,_,h){const g=_.array,E=_._updateRange,T=_.updateRanges;if(n.bindBuffer(h,f),E.count===-1&&T.length===0&&n.bufferSubData(h,0,g),T.length!==0){for(let y=0,x=T.length;y<x;y++){const p=T[y];t?n.bufferSubData(h,p.start*g.BYTES_PER_ELEMENT,g,p.start,p.count):n.bufferSubData(h,p.start*g.BYTES_PER_ELEMENT,g.subarray(p.start,p.start+p.count))}_.clearUpdateRanges()}E.count!==-1&&(t?n.bufferSubData(h,E.offset*g.BYTES_PER_ELEMENT,g,E.offset,E.count):n.bufferSubData(h,E.offset*g.BYTES_PER_ELEMENT,g.subarray(E.offset,E.offset+E.count)),E.count=-1),_.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const _=i.get(f);_&&(n.deleteBuffer(_.buffer),i.delete(f))}function l(f,_){if(f.isGLBufferAttribute){const g=i.get(f);(!g||g.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const h=i.get(f);if(h===void 0)i.set(f,r(f,_));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,_),h.version=f.version}}return{get:s,remove:o,update:l}}class Co extends Zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),f=o+1,_=l+1,h=e/o,g=t/l,E=[],T=[],y=[],x=[];for(let p=0;p<_;p++){const W=p*g-s;for(let F=0;F<f;F++){const k=F*h-a;T.push(k,-W,0),y.push(0,0,1),x.push(F/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let W=0;W<o;W++){const F=W+f*p,k=W+f*(p+1),ce=W+1+f*(p+1),q=W+1+f*p;E.push(F,k,q),E.push(k,ce,q)}this.setIndex(E),this.setAttribute("position",new jn(T,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,H0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:h0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:_0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:v0,batching_vertex:x0,begin_vertex:E0,beginnormal_vertex:A0,bsdfs:S0,iridescence_fragment:T0,bumpmap_pars_fragment:M0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:U0,color_pars_vertex:O0,color_vertex:P0,common:N0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:D0,displacementmap_pars_vertex:k0,displacementmap_vertex:L0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:G0,colorspace_pars_fragment:V0,envmap_fragment:H0,envmap_common_pars_fragment:z0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:iv,envmap_vertex:K0,fog_vertex:j0,fog_pars_vertex:q0,fog_fragment:$0,fog_pars_fragment:Y0,gradientmap_pars_fragment:Z0,lightmap_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:rv,lights_toon_pars_fragment:av,lights_phong_fragment:sv,lights_phong_pars_fragment:ov,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:uv,lights_fragment_maps:fv,lights_fragment_end:hv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:vv,map_particle_fragment:xv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Av,metalnessmap_pars_fragment:Sv,morphcolor_vertex:Tv,morphnormal_vertex:Mv,morphtarget_pars_vertex:bv,morphtarget_vertex:yv,normal_fragment_begin:wv,normal_fragment_maps:Rv,normal_pars_fragment:Cv,normal_pars_vertex:Uv,normal_vertex:Ov,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:kv,opaque_fragment:Lv,packing:Fv,premultiplied_alpha_fragment:Bv,project_vertex:Gv,dithering_fragment:Vv,dithering_pars_fragment:Hv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Wv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:Kv,shadowmap_vertex:jv,shadowmask_pars_fragment:qv,skinbase_vertex:$v,skinning_pars_vertex:Yv,skinning_vertex:Zv,skinnormal_vertex:Jv,specularmap_fragment:Qv,specularmap_pars_fragment:ex,tonemapping_fragment:tx,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:rx,uv_pars_fragment:ax,uv_pars_vertex:sx,uv_vertex:ox,worldpos_vertex:lx,background_vert:cx,background_frag:ux,backgroundCube_vert:fx,backgroundCube_frag:hx,cube_vert:dx,cube_frag:px,depth_vert:_x,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:vx,equirect_vert:xx,equirect_frag:Ex,linedashed_vert:Ax,linedashed_frag:Sx,meshbasic_vert:Tx,meshbasic_frag:Mx,meshlambert_vert:bx,meshlambert_frag:yx,meshmatcap_vert:wx,meshmatcap_frag:Rx,meshnormal_vert:Cx,meshnormal_frag:Ux,meshphong_vert:Ox,meshphong_frag:Px,meshphysical_vert:Nx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:kx,points_vert:Lx,points_frag:Fx,shadow_vert:Bx,shadow_frag:Gx,sprite_vert:Vx,sprite_frag:Hx},At={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new en(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new en(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ki={basic:{uniforms:Qn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Qn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Qn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Qn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Qn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Qn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Qn([At.points,At.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Qn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Qn([At.common,At.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Qn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Qn([At.sprite,At.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Qn([At.common,At.displacementmap,{referencePosition:{value:new We},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Qn([At.lights,At.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ki.physical={uniforms:Qn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new en(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new en},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new en},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const al={r:0,b:0,g:0};function zx(n,e,t,i,r,a,s){const o=new Qt(0);let l=a===!0?0:1,f,_,h=null,g=0,E=null;function T(x,p){let W=!1,F=p.isScene===!0?p.background:null;F&&F.isTexture&&(F=(p.backgroundBlurriness>0?t:e).get(F)),F===null?y(o,l):F&&F.isColor&&(y(F,1),W=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,s):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||W)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),F&&(F.isCubeTexture||F.mapping===Bl)?(_===void 0&&(_=new hn(new si(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Ms(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(ce,q,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,_.material.toneMapped=on.getTransfer(F.colorSpace)!==mn,(h!==F||g!==F.version||E!==n.toneMapping)&&(_.material.needsUpdate=!0,h=F,g=F.version,E=n.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(f===void 0&&(f=new hn(new Co(2,2),new ya({name:"BackgroundMaterial",uniforms:Ms(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=F,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=on.getTransfer(F.colorSpace)!==mn,F.matrixAutoUpdate===!0&&F.updateMatrix(),f.material.uniforms.uvTransform.value.copy(F.matrix),(h!==F||g!==F.version||E!==n.toneMapping)&&(f.material.needsUpdate=!0,h=F,g=F.version,E=n.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function y(x,p){x.getRGB(al,rp(n)),i.buffers.color.setClear(al.r,al.g,al.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(x,p=1){o.set(x),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,y(o,l)},render:T}}function Wx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=x(null);let f=l,_=!1;function h(X,j,ke,Le,Ce){let pe=!1;if(s){const Me=y(Le,ke,j);f!==Me&&(f=Me,E(f.object)),pe=p(X,Le,ke,Ce),pe&&W(X,Le,ke,Ce)}else{const Me=j.wireframe===!0;(f.geometry!==Le.id||f.program!==ke.id||f.wireframe!==Me)&&(f.geometry=Le.id,f.program=ke.id,f.wireframe=Me,pe=!0)}Ce!==null&&t.update(Ce,n.ELEMENT_ARRAY_BUFFER),(pe||_)&&(_=!1,_e(X,j,ke,Le),Ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Ce).buffer))}function g(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function E(X){return i.isWebGL2?n.bindVertexArray(X):a.bindVertexArrayOES(X)}function T(X){return i.isWebGL2?n.deleteVertexArray(X):a.deleteVertexArrayOES(X)}function y(X,j,ke){const Le=ke.wireframe===!0;let Ce=o[X.id];Ce===void 0&&(Ce={},o[X.id]=Ce);let pe=Ce[j.id];pe===void 0&&(pe={},Ce[j.id]=pe);let Me=pe[Le];return Me===void 0&&(Me=x(g()),pe[Le]=Me),Me}function x(X){const j=[],ke=[],Le=[];for(let Ce=0;Ce<r;Ce++)j[Ce]=0,ke[Ce]=0,Le[Ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ke,attributeDivisors:Le,object:X,attributes:{},index:null}}function p(X,j,ke,Le){const Ce=f.attributes,pe=j.attributes;let Me=0;const Ve=ke.getAttributes();for(const we in Ve)if(Ve[we].location>=0){const ge=Ce[we];let $e=pe[we];if($e===void 0&&(we==="instanceMatrix"&&X.instanceMatrix&&($e=X.instanceMatrix),we==="instanceColor"&&X.instanceColor&&($e=X.instanceColor)),ge===void 0||ge.attribute!==$e||$e&&ge.data!==$e.data)return!0;Me++}return f.attributesNum!==Me||f.index!==Le}function W(X,j,ke,Le){const Ce={},pe=j.attributes;let Me=0;const Ve=ke.getAttributes();for(const we in Ve)if(Ve[we].location>=0){let ge=pe[we];ge===void 0&&(we==="instanceMatrix"&&X.instanceMatrix&&(ge=X.instanceMatrix),we==="instanceColor"&&X.instanceColor&&(ge=X.instanceColor));const $e={};$e.attribute=ge,ge&&ge.data&&($e.data=ge.data),Ce[we]=$e,Me++}f.attributes=Ce,f.attributesNum=Me,f.index=Le}function F(){const X=f.newAttributes;for(let j=0,ke=X.length;j<ke;j++)X[j]=0}function k(X){ce(X,0)}function ce(X,j){const ke=f.newAttributes,Le=f.enabledAttributes,Ce=f.attributeDivisors;ke[X]=1,Le[X]===0&&(n.enableVertexAttribArray(X),Le[X]=1),Ce[X]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,j),Ce[X]=j)}function q(){const X=f.newAttributes,j=f.enabledAttributes;for(let ke=0,Le=j.length;ke<Le;ke++)j[ke]!==X[ke]&&(n.disableVertexAttribArray(ke),j[ke]=0)}function V(X,j,ke,Le,Ce,pe,Me){Me===!0?n.vertexAttribIPointer(X,j,ke,Ce,pe):n.vertexAttribPointer(X,j,ke,Le,Ce,pe)}function _e(X,j,ke,Le){if(i.isWebGL2===!1&&(X.isInstancedMesh||Le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;F();const Ce=Le.attributes,pe=ke.getAttributes(),Me=j.defaultAttributeValues;for(const Ve in pe){const we=pe[Ve];if(we.location>=0){let se=Ce[Ve];if(se===void 0&&(Ve==="instanceMatrix"&&X.instanceMatrix&&(se=X.instanceMatrix),Ve==="instanceColor"&&X.instanceColor&&(se=X.instanceColor)),se!==void 0){const ge=se.normalized,$e=se.itemSize,it=t.get(se);if(it===void 0)continue;const Ye=it.buffer,ht=it.type,ct=it.bytesPerElement,z=i.isWebGL2===!0&&(ht===n.INT||ht===n.UNSIGNED_INT||se.gpuType===Gd);if(se.isInterleavedBufferAttribute){const ne=se.data,B=ne.stride,Ae=se.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<we.locationSize;ve++)ce(we.location+ve,ne.meshPerAttribute);X.isInstancedMesh!==!0&&Le._maxInstanceCount===void 0&&(Le._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<we.locationSize;ve++)k(we.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ve=0;ve<we.locationSize;ve++)V(we.location+ve,$e/we.locationSize,ht,ge,B*ct,(Ae+$e/we.locationSize*ve)*ct,z)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<we.locationSize;ne++)ce(we.location+ne,se.meshPerAttribute);X.isInstancedMesh!==!0&&Le._maxInstanceCount===void 0&&(Le._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<we.locationSize;ne++)k(we.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ne=0;ne<we.locationSize;ne++)V(we.location+ne,$e/we.locationSize,ht,ge,$e*ct,$e/we.locationSize*ne*ct,z)}}else if(Me!==void 0){const ge=Me[Ve];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(we.location,ge);break;case 3:n.vertexAttrib3fv(we.location,ge);break;case 4:n.vertexAttrib4fv(we.location,ge);break;default:n.vertexAttrib1fv(we.location,ge)}}}}q()}function A(){Y();for(const X in o){const j=o[X];for(const ke in j){const Le=j[ke];for(const Ce in Le)T(Le[Ce].object),delete Le[Ce];delete j[ke]}delete o[X]}}function U(X){if(o[X.id]===void 0)return;const j=o[X.id];for(const ke in j){const Le=j[ke];for(const Ce in Le)T(Le[Ce].object),delete Le[Ce];delete j[ke]}delete o[X.id]}function ee(X){for(const j in o){const ke=o[j];if(ke[X.id]===void 0)continue;const Le=ke[X.id];for(const Ce in Le)T(Le[Ce].object),delete Le[Ce];delete ke[X.id]}}function Y(){de(),_=!0,f!==l&&(f=l,E(f.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:de,dispose:A,releaseStatesOfGeometry:U,releaseStatesOfProgram:ee,initAttributes:F,enableAttribute:k,disableUnusedAttributes:q}}function Xx(n,e,t,i){const r=i.isWebGL2;let a;function s(_){a=_}function o(_,h){n.drawArrays(a,_,h),t.update(h,a,1)}function l(_,h,g){if(g===0)return;let E,T;if(r)E=n,T="drawArraysInstanced";else if(E=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[T](a,_,h,g),t.update(h,a,g)}function f(_,h,g){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<g;T++)this.render(_[T],h[T]);else{E.multiDrawArraysWEBGL(a,_,0,h,0,g);let T=0;for(let y=0;y<g;y++)T+=h[y];t.update(T,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=f}function Kx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const f=s||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),T=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),W=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,k=s||e.has("OES_texture_float"),ce=F&&k,q=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:_,maxTextures:h,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:T,maxAttributes:y,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:W,vertexTextures:F,floatFragmentTextures:k,floatVertexTextures:ce,maxSamples:q}}function jx(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new pa,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,g){const E=h.length!==0||g||i!==0||r;return r=g,i=h.length,E},this.beginShadows=function(){a=!0,_(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,g){t=_(h,g,0)},this.setState=function(h,g,E){const T=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,p=n.get(h);if(!r||T===null||T.length===0||a&&!x)a?_(null):f();else{const W=a?0:i,F=W*4;let k=p.clippingState||null;l.value=k,k=_(T,g,F,E);for(let ce=0;ce!==F;++ce)k[ce]=t[ce];p.clippingState=k,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=W}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(h,g,E,T){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=l.value,T!==!0||x===null){const p=E+y*4,W=g.matrixWorldInverse;o.getNormalMatrix(W),(x===null||x.length<p)&&(x=new Float32Array(p));for(let F=0,k=E;F!==y;++F,k+=4)s.copy(h[F]).applyMatrix4(W,o),s.normal.toArray(x,k),x[k+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function qx(n){let e=new WeakMap;function t(s,o){return o===Zc?s.mapping=As:o===Jc&&(s.mapping=Ss),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Zc||o===Jc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const f=new s0(l.height/2);return f.fromEquirectangularTexture(n,s),e.set(s,f),s.addEventListener("dispose",r),t(f.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class lp extends ap{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,s=a+f*this.view.width,o-=_*this.view.offsetY,l=o-_*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,gh=[.125,.215,.35,.446,.526,.582],ga=20,Uc=new lp,vh=new Qt;let Oc=null,Pc=0,Nc=0;const _a=(1+Math.sqrt(5))/2,ss=1/_a,xh=[new We(1,1,1),new We(-1,1,1),new We(1,1,-1),new We(-1,1,-1),new We(0,_a,ss),new We(0,_a,-ss),new We(ss,0,_a),new We(-ss,0,_a),new We(_a,ss,0),new We(-_a,ss,0)];class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Pc,Nc),e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:co,format:Li,colorSpace:gr,depthBuffer:!1},r=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(a)),this._blurMaterial=Yx(a,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,r){const o=new _i(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],_=this._renderer,h=_.autoClear,g=_.toneMapping;_.getClearColor(vh),_.toneMapping=Fr,_.autoClear=!1;const E=new ba({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),T=new hn(new si,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(vh),y=!0);for(let p=0;p<6;p++){const W=p%3;W===0?(o.up.set(0,l[p],0),o.lookAt(f[p],0,0)):W===1?(o.up.set(0,0,l[p]),o.lookAt(0,f[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,f[p]));const F=this._cubeSize;sl(r,W*F,p>2?F:0,F,F),_.setRenderTarget(r),y&&_.render(T,o),_.render(e,o)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=g,_.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===As||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new hn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;sl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=xh[(r-1)%xh.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,h=new hn(this._lodPlanes[r],f),g=f.uniforms,E=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*ga-1),y=a/T,x=isFinite(a)?1+Math.floor(_*y):ga;x>ga&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ga}`);const p=[];let W=0;for(let V=0;V<ga;++V){const _e=V/y,A=Math.exp(-_e*_e/2);p.push(A),V===0?W+=A:V<x&&(W+=2*A)}for(let V=0;V<p.length;V++)p[V]=p[V]/W;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=p,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-i;const k=this._sizeLods[r],ce=3*k*(r>F-fs?r-F+fs:0),q=4*(this._cubeSize-k);sl(t,ce,q,3*k,2*k),l.setRenderTarget(t),l.render(h,Uc)}}function $x(n){const e=[],t=[],i=[];let r=n;const a=n-fs+1+gh.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-fs?l=gh[s-n+fs-1]:s===0&&(l=0),i.push(l);const f=1/(o-2),_=-f,h=1+f,g=[_,_,h,_,h,h,_,_,h,h,_,h],E=6,T=6,y=3,x=2,p=1,W=new Float32Array(y*T*E),F=new Float32Array(x*T*E),k=new Float32Array(p*T*E);for(let q=0;q<E;q++){const V=q%3*2/3-1,_e=q>2?0:-1,A=[V,_e,0,V+2/3,_e,0,V+2/3,_e+1,0,V,_e,0,V+2/3,_e+1,0,V,_e+1,0];W.set(A,y*T*q),F.set(g,x*T*q);const U=[q,q,q,q,q,q];k.set(U,p*T*q)}const ce=new Zi;ce.setAttribute("position",new ji(W,y)),ce.setAttribute("uv",new ji(F,x)),ce.setAttribute("faceIndex",new ji(k,p)),e.push(ce),r>fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(n,e,t){const i=new Ma(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Yx(n,e,t){const i=new Float32Array(ga),r=new We(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:ga,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Sh(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Th(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,f=l===Zc||l===Jc,_=l===As||l===Ss;if(f||_)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Eh(n)),h=f?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(f&&h&&h.height>0||_&&h&&r(h)){t===null&&(t=new Eh(n));const g=f?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,g),o.addEventListener("dispose",a),g.texture}else return null}}}return o}function r(o){let l=0;const f=6;for(let _=0;_<f;_++)o[_]!==void 0&&l++;return l===f}function a(o){const l=o.target;l.removeEventListener("dispose",a);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qx(n,e,t,i){const r={},a=new WeakMap;function s(h){const g=h.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);for(const T in g.morphAttributes){const y=g.morphAttributes[T];for(let x=0,p=y.length;x<p;x++)e.remove(y[x])}g.removeEventListener("dispose",s),delete r[g.id];const E=a.get(g);E&&(e.remove(E),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(h,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function l(h){const g=h.attributes;for(const T in g)e.update(g[T],n.ARRAY_BUFFER);const E=h.morphAttributes;for(const T in E){const y=E[T];for(let x=0,p=y.length;x<p;x++)e.update(y[x],n.ARRAY_BUFFER)}}function f(h){const g=[],E=h.index,T=h.attributes.position;let y=0;if(E!==null){const W=E.array;y=E.version;for(let F=0,k=W.length;F<k;F+=3){const ce=W[F+0],q=W[F+1],V=W[F+2];g.push(ce,q,q,V,V,ce)}}else if(T!==void 0){const W=T.array;y=T.version;for(let F=0,k=W.length/3-1;F<k;F+=3){const ce=F+0,q=F+1,V=F+2;g.push(ce,q,q,V,V,ce)}}else return;const x=new(Yd(g)?ip:np)(g,1);x.version=y;const p=a.get(h);p&&e.remove(p),a.set(h,x)}function _(h){const g=a.get(h);if(g){const E=h.index;E!==null&&g.version<E.version&&f(h)}else f(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:_}}function eE(n,e,t,i){const r=i.isWebGL2;let a;function s(E){a=E}let o,l;function f(E){o=E.type,l=E.bytesPerElement}function _(E,T){n.drawElements(a,T,o,E*l),t.update(T,a,1)}function h(E,T,y){if(y===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,T,o,E*l,y),t.update(T,a,y)}function g(E,T,y){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<y;p++)this.render(E[p]/l,T[p]);else{x.multiDrawElementsWEBGL(a,T,0,o,E,0,y);let p=0;for(let W=0;W<y;W++)p+=T[W];t.update(p,a,1)}}this.setMode=s,this.setIndex=f,this.render=_,this.renderInstances=h,this.renderMultiDraw=g}function tE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nE(n,e){return n[0]-e[0]}function iE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rE(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new vn,o=[];for(let f=0;f<8;f++)o[f]=[f,0];function l(f,_,h){const g=f.morphTargetInfluences;if(e.isWebGL2===!0){const T=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,y=T!==void 0?T.length:0;let x=a.get(_);if(x===void 0||x.count!==y){let j=function(){de.dispose(),a.delete(_),_.removeEventListener("dispose",j)};var E=j;x!==void 0&&x.texture.dispose();const F=_.morphAttributes.position!==void 0,k=_.morphAttributes.normal!==void 0,ce=_.morphAttributes.color!==void 0,q=_.morphAttributes.position||[],V=_.morphAttributes.normal||[],_e=_.morphAttributes.color||[];let A=0;F===!0&&(A=1),k===!0&&(A=2),ce===!0&&(A=3);let U=_.attributes.position.count*A,ee=1;U>e.maxTextureSize&&(ee=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const Y=new Float32Array(U*ee*4*y),de=new Qd(Y,U,ee,y);de.type=kr,de.needsUpdate=!0;const X=A*4;for(let ke=0;ke<y;ke++){const Le=q[ke],Ce=V[ke],pe=_e[ke],Me=U*ee*4*ke;for(let Ve=0;Ve<Le.count;Ve++){const we=Ve*X;F===!0&&(s.fromBufferAttribute(Le,Ve),Y[Me+we+0]=s.x,Y[Me+we+1]=s.y,Y[Me+we+2]=s.z,Y[Me+we+3]=0),k===!0&&(s.fromBufferAttribute(Ce,Ve),Y[Me+we+4]=s.x,Y[Me+we+5]=s.y,Y[Me+we+6]=s.z,Y[Me+we+7]=0),ce===!0&&(s.fromBufferAttribute(pe,Ve),Y[Me+we+8]=s.x,Y[Me+we+9]=s.y,Y[Me+we+10]=s.z,Y[Me+we+11]=pe.itemSize===4?s.w:1)}}x={count:y,texture:de,size:new en(U,ee)},a.set(_,x),_.addEventListener("dispose",j)}let p=0;for(let F=0;F<g.length;F++)p+=g[F];const W=_.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",W),h.getUniforms().setValue(n,"morphTargetInfluences",g),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const T=g===void 0?0:g.length;let y=i[_.id];if(y===void 0||y.length!==T){y=[];for(let k=0;k<T;k++)y[k]=[k,0];i[_.id]=y}for(let k=0;k<T;k++){const ce=y[k];ce[0]=k,ce[1]=g[k]}y.sort(iE);for(let k=0;k<8;k++)k<T&&y[k][1]?(o[k][0]=y[k][0],o[k][1]=y[k][1]):(o[k][0]=Number.MAX_SAFE_INTEGER,o[k][1]=0);o.sort(nE);const x=_.morphAttributes.position,p=_.morphAttributes.normal;let W=0;for(let k=0;k<8;k++){const ce=o[k],q=ce[0],V=ce[1];q!==Number.MAX_SAFE_INTEGER&&V?(x&&_.getAttribute("morphTarget"+k)!==x[q]&&_.setAttribute("morphTarget"+k,x[q]),p&&_.getAttribute("morphNormal"+k)!==p[q]&&_.setAttribute("morphNormal"+k,p[q]),r[k]=V,W+=V):(x&&_.hasAttribute("morphTarget"+k)===!0&&_.deleteAttribute("morphTarget"+k),p&&_.hasAttribute("morphNormal"+k)===!0&&_.deleteAttribute("morphNormal"+k),r[k]=0)}const F=_.morphTargetsRelative?1:1-W;h.getUniforms().setValue(n,"morphTargetBaseInfluence",F),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function aE(n,e,t,i){let r=new WeakMap;function a(l){const f=i.render.frame,_=l.geometry,h=e.get(l,_);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return h}function s(){r=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:s}}class cp extends li{constructor(e,t,i,r,a,s,o,l,f,_){if(_=_!==void 0?_:Aa,_!==Aa&&_!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&_===Aa&&(i=Dr),i===void 0&&_===Ts&&(i=Ea),super(null,r,a,s,o,l,_,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const up=new li,fp=new cp(1,1);fp.compareFunction=$d;const hp=new Qd,dp=new Hg,pp=new sp,Mh=[],bh=[],yh=new Float32Array(16),wh=new Float32Array(9),Rh=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Mh[r];if(a===void 0&&(a=new Float32Array(r),Mh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hl(n,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function oE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),Pn(t,e)}}function lE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),Pn(t,e)}}function cE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),Pn(t,e)}}function uE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(On(t,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),Pn(t,i)}}function fE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(On(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),Pn(t,i)}}function hE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(On(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),Pn(t,i)}}function dE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),Pn(t,e)}}function _E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),Pn(t,e)}}function mE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),Pn(t,e)}}function gE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),Pn(t,e)}}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),Pn(t,e)}}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),Pn(t,e)}}function AE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?fp:up;t.setTexture2D(e||a,r)}function SE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dp,r)}function TE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pp,r)}function ME(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hp,r)}function bE(n){switch(n){case 5126:return sE;case 35664:return oE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return hE;case 5124:case 35670:return dE;case 35667:case 35671:return pE;case 35668:case 35672:return _E;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return vE;case 36295:return xE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return ME}}function yE(n,e){n.uniform1fv(this.addr,e)}function wE(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function RE(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function CE(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function UE(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OE(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PE(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NE(n,e){n.uniform1iv(this.addr,e)}function IE(n,e){n.uniform2iv(this.addr,e)}function DE(n,e){n.uniform3iv(this.addr,e)}function kE(n,e){n.uniform4iv(this.addr,e)}function LE(n,e){n.uniform1uiv(this.addr,e)}function FE(n,e){n.uniform2uiv(this.addr,e)}function BE(n,e){n.uniform3uiv(this.addr,e)}function GE(n,e){n.uniform4uiv(this.addr,e)}function VE(n,e,t){const i=this.cache,r=e.length,a=Hl(t,r);On(i,a)||(n.uniform1iv(this.addr,a),Pn(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||up,a[s])}function HE(n,e,t){const i=this.cache,r=e.length,a=Hl(t,r);On(i,a)||(n.uniform1iv(this.addr,a),Pn(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||dp,a[s])}function zE(n,e,t){const i=this.cache,r=e.length,a=Hl(t,r);On(i,a)||(n.uniform1iv(this.addr,a),Pn(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||pp,a[s])}function WE(n,e,t){const i=this.cache,r=e.length,a=Hl(t,r);On(i,a)||(n.uniform1iv(this.addr,a),Pn(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||hp,a[s])}function XE(n){switch(n){case 5126:return yE;case 35664:return wE;case 35665:return RE;case 35666:return CE;case 35674:return UE;case 35675:return OE;case 35676:return PE;case 5124:case 35670:return NE;case 35667:case 35671:return IE;case 35668:case 35672:return DE;case 35669:case 35673:return kE;case 5125:return LE;case 36294:return FE;case 36295:return BE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return WE}}class KE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bE(t.type)}}class jE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XE(t.type)}}class qE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function $E(n,e,t){const i=n.name,r=i.length;for(Ic.lastIndex=0;;){const a=Ic.exec(i),s=Ic.lastIndex;let o=a[1];const l=a[2]==="]",f=a[3];if(l&&(o=o|0),f===void 0||f==="["&&s+2===r){Ch(t,f===void 0?new KE(o,n,e):new jE(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new qE(o),Ch(t,h)),t=h}}}class pl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);$E(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const YE=37297;let ZE=0;function JE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function QE(n){const e=on.getPrimaries(on.workingColorSpace),t=on.getPrimaries(n);let i;switch(e===t?i="":e===Tl&&t===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&t===Tl&&(i="LinearSRGBToLinearDisplayP3"),n){case gr:case Gl:return[i,"LinearTransferOETF"];case Un:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Oh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+JE(n.getShaderSource(e),s)}else return r}function eA(n,e){const t=QE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tA(n,e){let t;switch(e){case Qm:t="Linear";break;case eg:t="Reinhard";break;case tg:t="OptimizedCineon";break;case Fd:t="ACESFilmic";break;case ig:t="AgX";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function iA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function rA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function hs(n){return n!==""}function Ph(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(n){return n.replace(sA,lA)}const oA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lA(n,e){let t=zt[e];if(t===void 0){const i=oA.get(e);if(i!==void 0)t=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ru(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(n){return n.replace(cA,uA)}function uA(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Dh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Ss:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Zm:e="ENVMAP_BLENDING_MIX";break;case Jm:e="ENVMAP_BLENDING_ADD";break}return e}function _A(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mA(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=fA(t),f=hA(t),_=dA(t),h=pA(t),g=_A(t),E=t.isWebGL2?"":nA(t),T=iA(t),y=rA(a),x=r.createProgram();let p,W,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(hs).join(`
`),p.length>0&&(p+=`
`),W=[E,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(hs).join(`
`),W.length>0&&(W+=`
`)):(p=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),W=[E,Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+_:"",t.envMap?"#define "+h:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?zt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?tA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,eA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),s=ru(s),s=Ph(s,t),s=Nh(s,t),o=ru(o),o=Ph(o,t),o=Nh(o,t),s=Ih(s),o=Ih(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,p=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,W=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+W);const k=F+p+s,ce=F+W+o,q=Uh(r,r.VERTEX_SHADER,k),V=Uh(r,r.FRAGMENT_SHADER,ce);r.attachShader(x,q),r.attachShader(x,V),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function _e(Y){if(n.debug.checkShaderErrors){const de=r.getProgramInfoLog(x).trim(),X=r.getShaderInfoLog(q).trim(),j=r.getShaderInfoLog(V).trim();let ke=!0,Le=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ke=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,q,V);else{const Ce=Oh(r,q,"vertex"),pe=Oh(r,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+Ce+`
`+pe)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(X===""||j==="")&&(Le=!1);Le&&(Y.diagnostics={runnable:ke,programLog:de,vertexShader:{log:X,prefix:p},fragmentShader:{log:j,prefix:W}})}r.deleteShader(q),r.deleteShader(V),A=new pl(r,x),U=aA(r,x)}let A;this.getUniforms=function(){return A===void 0&&_e(this),A};let U;this.getAttributes=function(){return U===void 0&&_e(this),U};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=r.getProgramParameter(x,YE)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=q,this.fragmentShader=V,this}let gA=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xA(e),t.set(e,i)),i}}class xA{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}}function EA(n,e,t,i,r,a,s){const o=new ep,l=new vA,f=[],_=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let E=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return A===0?"uv":`uv${A}`}function x(A,U,ee,Y,de){const X=Y.fog,j=de.geometry,ke=A.isMeshStandardMaterial?Y.environment:null,Le=(A.isMeshStandardMaterial?t:e).get(A.envMap||ke),Ce=Le&&Le.mapping===Bl?Le.image.height:null,pe=T[A.type];A.precision!==null&&(E=r.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ve=Me!==void 0?Me.length:0;let we=0;j.morphAttributes.position!==void 0&&(we=1),j.morphAttributes.normal!==void 0&&(we=2),j.morphAttributes.color!==void 0&&(we=3);let se,ge,$e,it;if(pe){const Yt=Ki[pe];se=Yt.vertexShader,ge=Yt.fragmentShader}else se=A.vertexShader,ge=A.fragmentShader,l.update(A),$e=l.getVertexShaderID(A),it=l.getFragmentShaderID(A);const Ye=n.getRenderTarget(),ht=de.isInstancedMesh===!0,ct=de.isBatchedMesh===!0,z=!!A.map,ne=!!A.matcap,B=!!Le,Ae=!!A.aoMap,ve=!!A.lightMap,H=!!A.bumpMap,re=!!A.normalMap,le=!!A.displacementMap,Be=!!A.emissiveMap,M=!!A.metalnessMap,v=!!A.roughnessMap,O=A.anisotropy>0,Te=A.clearcoat>0,Se=A.iridescence>0,Oe=A.sheen>0,P=A.transmission>0,Q=O&&!!A.anisotropyMap,ie=Te&&!!A.clearcoatMap,xe=Te&&!!A.clearcoatNormalMap,Xe=Te&&!!A.clearcoatRoughnessMap,ze=Se&&!!A.iridescenceMap,dt=Se&&!!A.iridescenceThicknessMap,et=Oe&&!!A.sheenColorMap,te=Oe&&!!A.sheenRoughnessMap,fe=!!A.specularMap,Ne=!!A.specularColorMap,qe=!!A.specularIntensityMap,st=P&&!!A.transmissionMap,C=P&&!!A.thicknessMap,Re=!!A.gradientMap,he=!!A.alphaMap,L=A.alphaTest>0,ye=!!A.alphaHash,Je=!!A.extensions,tt=!!j.attributes.uv1,gt=!!j.attributes.uv2,St=!!j.attributes.uv3;let Tt=Fr;return A.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:_,shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:se,fragmentShader:ge,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:ct,instancing:ht,instancingColor:ht&&de.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:gr,map:z,matcap:ne,envMap:B,envMapMode:B&&Le.mapping,envMapCubeUVHeight:Ce,aoMap:Ae,lightMap:ve,bumpMap:H,normalMap:re,displacementMap:g&&le,emissiveMap:Be,normalMapObjectSpace:re&&A.normalMapType===_g,normalMapTangentSpace:re&&A.normalMapType===qd,metalnessMap:M,roughnessMap:v,anisotropy:O,anisotropyMap:Q,clearcoat:Te,clearcoatMap:ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Xe,iridescence:Se,iridescenceMap:ze,iridescenceThicknessMap:dt,sheen:Oe,sheenColorMap:et,sheenRoughnessMap:te,specularMap:fe,specularColorMap:Ne,specularIntensityMap:qe,transmission:P,transmissionMap:st,thicknessMap:C,gradientMap:Re,opaque:A.transparent===!1&&A.blending===gs,alphaMap:he,alphaTest:L,alphaHash:ye,combine:A.combine,mapUv:z&&y(A.map.channel),aoMapUv:Ae&&y(A.aoMap.channel),lightMapUv:ve&&y(A.lightMap.channel),bumpMapUv:H&&y(A.bumpMap.channel),normalMapUv:re&&y(A.normalMap.channel),displacementMapUv:le&&y(A.displacementMap.channel),emissiveMapUv:Be&&y(A.emissiveMap.channel),metalnessMapUv:M&&y(A.metalnessMap.channel),roughnessMapUv:v&&y(A.roughnessMap.channel),anisotropyMapUv:Q&&y(A.anisotropyMap.channel),clearcoatMapUv:ie&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:et&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:te&&y(A.sheenRoughnessMap.channel),specularMapUv:fe&&y(A.specularMap.channel),specularColorMapUv:Ne&&y(A.specularColorMap.channel),specularIntensityMapUv:qe&&y(A.specularIntensityMap.channel),transmissionMapUv:st&&y(A.transmissionMap.channel),thicknessMapUv:C&&y(A.thicknessMap.channel),alphaMapUv:he&&y(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(re||O),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:gt,vertexUv3s:St,pointsUvs:de.isPoints===!0&&!!j.attributes.uv&&(z||he),fog:!!X,useFog:A.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:de.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:we,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:z&&A.map.isVideoTexture===!0&&on.getTransfer(A.map.colorSpace)===mn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pr,flipSided:A.side===oi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:Je&&A.extensions.derivatives===!0,extensionFragDepth:Je&&A.extensions.fragDepth===!0,extensionDrawBuffers:Je&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:Je&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Je&&A.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function p(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ee in A.defines)U.push(ee),U.push(A.defines[ee]);return A.isRawShaderMaterial===!1&&(W(U,A),F(U,A),U.push(n.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function W(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function F(A,U){o.disableAll(),U.isWebGL2&&o.enable(0),U.supportsVertexTextures&&o.enable(1),U.instancing&&o.enable(2),U.instancingColor&&o.enable(3),U.matcap&&o.enable(4),U.envMap&&o.enable(5),U.normalMapObjectSpace&&o.enable(6),U.normalMapTangentSpace&&o.enable(7),U.clearcoat&&o.enable(8),U.iridescence&&o.enable(9),U.alphaTest&&o.enable(10),U.vertexColors&&o.enable(11),U.vertexAlphas&&o.enable(12),U.vertexUv1s&&o.enable(13),U.vertexUv2s&&o.enable(14),U.vertexUv3s&&o.enable(15),U.vertexTangents&&o.enable(16),U.anisotropy&&o.enable(17),U.alphaHash&&o.enable(18),U.batching&&o.enable(19),A.push(o.mask),o.disableAll(),U.fog&&o.enable(0),U.useFog&&o.enable(1),U.flatShading&&o.enable(2),U.logarithmicDepthBuffer&&o.enable(3),U.skinning&&o.enable(4),U.morphTargets&&o.enable(5),U.morphNormals&&o.enable(6),U.morphColors&&o.enable(7),U.premultipliedAlpha&&o.enable(8),U.shadowMapEnabled&&o.enable(9),U.useLegacyLights&&o.enable(10),U.doubleSided&&o.enable(11),U.flipSided&&o.enable(12),U.useDepthPacking&&o.enable(13),U.dithering&&o.enable(14),U.transmission&&o.enable(15),U.sheen&&o.enable(16),U.opaque&&o.enable(17),U.pointsUvs&&o.enable(18),U.decodeVideoTexture&&o.enable(19),A.push(o.mask)}function k(A){const U=T[A.type];let ee;if(U){const Y=Ki[U];ee=n0.clone(Y.uniforms)}else ee=A.uniforms;return ee}function ce(A,U){let ee;for(let Y=0,de=f.length;Y<de;Y++){const X=f[Y];if(X.cacheKey===U){ee=X,++ee.usedTimes;break}}return ee===void 0&&(ee=new mA(n,U,A,a),f.push(ee)),ee}function q(A){if(--A.usedTimes===0){const U=f.indexOf(A);f[U]=f[f.length-1],f.pop(),A.destroy()}}function V(A){l.remove(A)}function _e(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:k,acquireProgram:ce,releaseProgram:q,releaseShaderCache:V,programs:f,dispose:_e}}function AA(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function SA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,g,E,T,y,x){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:g,material:E,groupOrder:T,renderOrder:h.renderOrder,z:y,group:x},n[e]=p):(p.id=h.id,p.object=h,p.geometry=g,p.material=E,p.groupOrder=T,p.renderOrder=h.renderOrder,p.z=y,p.group=x),e++,p}function o(h,g,E,T,y,x){const p=s(h,g,E,T,y,x);E.transmission>0?i.push(p):E.transparent===!0?r.push(p):t.push(p)}function l(h,g,E,T,y,x){const p=s(h,g,E,T,y,x);E.transmission>0?i.unshift(p):E.transparent===!0?r.unshift(p):t.unshift(p)}function f(h,g){t.length>1&&t.sort(h||SA),i.length>1&&i.sort(g||kh),r.length>1&&r.sort(g||kh)}function _(){for(let h=e,g=n.length;h<g;h++){const E=n[h];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:_,sort:f}}function TA(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Lh,n.set(i,[s])):r>=a.length?(s=new Lh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function MA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new We,color:new Qt};break;case"SpotLight":t={position:new We,direction:new We,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new We,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new We,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":t={color:new Qt,position:new We,halfWidth:new We,halfHeight:new We};break}return n[e.id]=t,t}}}function bA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yA=0;function wA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RA(n,e){const t=new MA,i=bA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new We);const a=new We,s=new wn,o=new wn;function l(_,h){let g=0,E=0,T=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,x=0,p=0,W=0,F=0,k=0,ce=0,q=0,V=0,_e=0,A=0;_.sort(wA);const U=h===!0?Math.PI:1;for(let Y=0,de=_.length;Y<de;Y++){const X=_[Y],j=X.color,ke=X.intensity,Le=X.distance,Ce=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)g+=j.r*ke*U,E+=j.g*ke*U,T+=j.b*ke*U;else if(X.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(X.sh.coefficients[pe],ke);A++}else if(X.isDirectionalLight){const pe=t.get(X);if(pe.color.copy(X.color).multiplyScalar(X.intensity*U),X.castShadow){const Me=X.shadow,Ve=i.get(X);Ve.shadowBias=Me.bias,Ve.shadowNormalBias=Me.normalBias,Ve.shadowRadius=Me.radius,Ve.shadowMapSize=Me.mapSize,r.directionalShadow[y]=Ve,r.directionalShadowMap[y]=Ce,r.directionalShadowMatrix[y]=X.shadow.matrix,k++}r.directional[y]=pe,y++}else if(X.isSpotLight){const pe=t.get(X);pe.position.setFromMatrixPosition(X.matrixWorld),pe.color.copy(j).multiplyScalar(ke*U),pe.distance=Le,pe.coneCos=Math.cos(X.angle),pe.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),pe.decay=X.decay,r.spot[p]=pe;const Me=X.shadow;if(X.map&&(r.spotLightMap[V]=X.map,V++,Me.updateMatrices(X),X.castShadow&&_e++),r.spotLightMatrix[p]=Me.matrix,X.castShadow){const Ve=i.get(X);Ve.shadowBias=Me.bias,Ve.shadowNormalBias=Me.normalBias,Ve.shadowRadius=Me.radius,Ve.shadowMapSize=Me.mapSize,r.spotShadow[p]=Ve,r.spotShadowMap[p]=Ce,q++}p++}else if(X.isRectAreaLight){const pe=t.get(X);pe.color.copy(j).multiplyScalar(ke),pe.halfWidth.set(X.width*.5,0,0),pe.halfHeight.set(0,X.height*.5,0),r.rectArea[W]=pe,W++}else if(X.isPointLight){const pe=t.get(X);if(pe.color.copy(X.color).multiplyScalar(X.intensity*U),pe.distance=X.distance,pe.decay=X.decay,X.castShadow){const Me=X.shadow,Ve=i.get(X);Ve.shadowBias=Me.bias,Ve.shadowNormalBias=Me.normalBias,Ve.shadowRadius=Me.radius,Ve.shadowMapSize=Me.mapSize,Ve.shadowCameraNear=Me.camera.near,Ve.shadowCameraFar=Me.camera.far,r.pointShadow[x]=Ve,r.pointShadowMap[x]=Ce,r.pointShadowMatrix[x]=X.shadow.matrix,ce++}r.point[x]=pe,x++}else if(X.isHemisphereLight){const pe=t.get(X);pe.skyColor.copy(X.color).multiplyScalar(ke*U),pe.groundColor.copy(X.groundColor).multiplyScalar(ke*U),r.hemi[F]=pe,F++}}W>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=E,r.ambient[2]=T;const ee=r.hash;(ee.directionalLength!==y||ee.pointLength!==x||ee.spotLength!==p||ee.rectAreaLength!==W||ee.hemiLength!==F||ee.numDirectionalShadows!==k||ee.numPointShadows!==ce||ee.numSpotShadows!==q||ee.numSpotMaps!==V||ee.numLightProbes!==A)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=W,r.point.length=x,r.hemi.length=F,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=ce,r.pointShadowMap.length=ce,r.spotShadow.length=q,r.spotShadowMap.length=q,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=ce,r.spotLightMatrix.length=q+V-_e,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=_e,r.numLightProbes=A,ee.directionalLength=y,ee.pointLength=x,ee.spotLength=p,ee.rectAreaLength=W,ee.hemiLength=F,ee.numDirectionalShadows=k,ee.numPointShadows=ce,ee.numSpotShadows=q,ee.numSpotMaps=V,ee.numLightProbes=A,r.version=yA++)}function f(_,h){let g=0,E=0,T=0,y=0,x=0;const p=h.matrixWorldInverse;for(let W=0,F=_.length;W<F;W++){const k=_[W];if(k.isDirectionalLight){const ce=r.directional[g];ce.direction.setFromMatrixPosition(k.matrixWorld),a.setFromMatrixPosition(k.target.matrixWorld),ce.direction.sub(a),ce.direction.transformDirection(p),g++}else if(k.isSpotLight){const ce=r.spot[T];ce.position.setFromMatrixPosition(k.matrixWorld),ce.position.applyMatrix4(p),ce.direction.setFromMatrixPosition(k.matrixWorld),a.setFromMatrixPosition(k.target.matrixWorld),ce.direction.sub(a),ce.direction.transformDirection(p),T++}else if(k.isRectAreaLight){const ce=r.rectArea[y];ce.position.setFromMatrixPosition(k.matrixWorld),ce.position.applyMatrix4(p),o.identity(),s.copy(k.matrixWorld),s.premultiply(p),o.extractRotation(s),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),ce.halfWidth.applyMatrix4(o),ce.halfHeight.applyMatrix4(o),y++}else if(k.isPointLight){const ce=r.point[E];ce.position.setFromMatrixPosition(k.matrixWorld),ce.position.applyMatrix4(p),E++}else if(k.isHemisphereLight){const ce=r.hemi[x];ce.direction.setFromMatrixPosition(k.matrixWorld),ce.direction.transformDirection(p),x++}}}return{setup:l,setupView:f,state:r}}function Fh(n,e){const t=new RA(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function f(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:f,pushLight:s,pushShadow:o}}function CA(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Fh(n,e),t.set(a,[l])):s>=o.length?(l=new Fh(n,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class UA extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OA extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IA(n,e,t){let i=new Tu;const r=new en,a=new en,s=new vn,o=new UA({depthPacking:pg}),l=new OA,f={},_=t.maxTextureSize,h={[Vr]:oi,[oi]:Vr,[pr]:pr},g=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new en},radius:{value:4}},vertexShader:PA,fragmentShader:NA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new Zi;T.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new hn(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(q,V,_e){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||q.length===0)return;const A=n.getRenderTarget(),U=n.getActiveCubeFace(),ee=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Lr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const de=p!==cr&&this.type===cr,X=p===cr&&this.type!==cr;for(let j=0,ke=q.length;j<ke;j++){const Le=q[j],Ce=Le.shadow;if(Ce===void 0){console.warn("THREE.WebGLShadowMap:",Le,"has no shadow.");continue}if(Ce.autoUpdate===!1&&Ce.needsUpdate===!1)continue;r.copy(Ce.mapSize);const pe=Ce.getFrameExtents();if(r.multiply(pe),a.copy(Ce.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(a.x=Math.floor(_/pe.x),r.x=a.x*pe.x,Ce.mapSize.x=a.x),r.y>_&&(a.y=Math.floor(_/pe.y),r.y=a.y*pe.y,Ce.mapSize.y=a.y)),Ce.map===null||de===!0||X===!0){const Ve=this.type!==cr?{minFilter:ei,magFilter:ei}:{};Ce.map!==null&&Ce.map.dispose(),Ce.map=new Ma(r.x,r.y,Ve),Ce.map.texture.name=Le.name+".shadowMap",Ce.camera.updateProjectionMatrix()}n.setRenderTarget(Ce.map),n.clear();const Me=Ce.getViewportCount();for(let Ve=0;Ve<Me;Ve++){const we=Ce.getViewport(Ve);s.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),Y.viewport(s),Ce.updateMatrices(Le,Ve),i=Ce.getFrustum(),k(V,_e,Ce.camera,Le,this.type)}Ce.isPointLightShadow!==!0&&this.type===cr&&W(Ce,_e),Ce.needsUpdate=!1}p=this.type,x.needsUpdate=!1,n.setRenderTarget(A,U,ee)};function W(q,V){const _e=e.update(y);g.defines.VSM_SAMPLES!==q.blurSamples&&(g.defines.VSM_SAMPLES=q.blurSamples,E.defines.VSM_SAMPLES=q.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),q.mapPass===null&&(q.mapPass=new Ma(r.x,r.y)),g.uniforms.shadow_pass.value=q.map.texture,g.uniforms.resolution.value=q.mapSize,g.uniforms.radius.value=q.radius,n.setRenderTarget(q.mapPass),n.clear(),n.renderBufferDirect(V,null,_e,g,y,null),E.uniforms.shadow_pass.value=q.mapPass.texture,E.uniforms.resolution.value=q.mapSize,E.uniforms.radius.value=q.radius,n.setRenderTarget(q.map),n.clear(),n.renderBufferDirect(V,null,_e,E,y,null)}function F(q,V,_e,A){let U=null;const ee=_e.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(ee!==void 0)U=ee;else if(U=_e.isPointLight===!0?l:o,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const Y=U.uuid,de=V.uuid;let X=f[Y];X===void 0&&(X={},f[Y]=X);let j=X[de];j===void 0&&(j=U.clone(),X[de]=j,V.addEventListener("dispose",ce)),U=j}if(U.visible=V.visible,U.wireframe=V.wireframe,A===cr?U.side=V.shadowSide!==null?V.shadowSide:V.side:U.side=V.shadowSide!==null?V.shadowSide:h[V.side],U.alphaMap=V.alphaMap,U.alphaTest=V.alphaTest,U.map=V.map,U.clipShadows=V.clipShadows,U.clippingPlanes=V.clippingPlanes,U.clipIntersection=V.clipIntersection,U.displacementMap=V.displacementMap,U.displacementScale=V.displacementScale,U.displacementBias=V.displacementBias,U.wireframeLinewidth=V.wireframeLinewidth,U.linewidth=V.linewidth,_e.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const Y=n.properties.get(U);Y.light=_e}return U}function k(q,V,_e,A,U){if(q.visible===!1)return;if(q.layers.test(V.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&U===cr)&&(!q.frustumCulled||i.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,q.matrixWorld);const de=e.update(q),X=q.material;if(Array.isArray(X)){const j=de.groups;for(let ke=0,Le=j.length;ke<Le;ke++){const Ce=j[ke],pe=X[Ce.materialIndex];if(pe&&pe.visible){const Me=F(q,pe,A,U);q.onBeforeShadow(n,q,V,_e,de,Me,Ce),n.renderBufferDirect(_e,null,de,Me,q,Ce),q.onAfterShadow(n,q,V,_e,de,Me,Ce)}}}else if(X.visible){const j=F(q,X,A,U);q.onBeforeShadow(n,q,V,_e,de,j,null),n.renderBufferDirect(_e,null,de,j,q,null),q.onAfterShadow(n,q,V,_e,de,j,null)}}const Y=q.children;for(let de=0,X=Y.length;de<X;de++)k(Y[de],V,_e,A,U)}function ce(q){q.target.removeEventListener("dispose",ce);for(const _e in f){const A=f[_e],U=q.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function DA(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const ye=new vn;let Je=null;const tt=new vn(0,0,0,0);return{setMask:function(gt){Je!==gt&&!L&&(n.colorMask(gt,gt,gt,gt),Je=gt)},setLocked:function(gt){L=gt},setClear:function(gt,St,Tt,bt,Yt){Yt===!0&&(gt*=bt,St*=bt,Tt*=bt),ye.set(gt,St,Tt,bt),tt.equals(ye)===!1&&(n.clearColor(gt,St,Tt,bt),tt.copy(ye))},reset:function(){L=!1,Je=null,tt.set(-1,0,0,0)}}}function a(){let L=!1,ye=null,Je=null,tt=null;return{setTest:function(gt){gt?ct(n.DEPTH_TEST):z(n.DEPTH_TEST)},setMask:function(gt){ye!==gt&&!L&&(n.depthMask(gt),ye=gt)},setFunc:function(gt){if(Je!==gt){switch(gt){case Wm:n.depthFunc(n.NEVER);break;case Xm:n.depthFunc(n.ALWAYS);break;case Km:n.depthFunc(n.LESS);break;case El:n.depthFunc(n.LEQUAL);break;case jm:n.depthFunc(n.EQUAL);break;case qm:n.depthFunc(n.GEQUAL);break;case $m:n.depthFunc(n.GREATER);break;case Ym:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Je=gt}},setLocked:function(gt){L=gt},setClear:function(gt){tt!==gt&&(n.clearDepth(gt),tt=gt)},reset:function(){L=!1,ye=null,Je=null,tt=null}}}function s(){let L=!1,ye=null,Je=null,tt=null,gt=null,St=null,Tt=null,bt=null,Yt=null;return{setTest:function(Ot){L||(Ot?ct(n.STENCIL_TEST):z(n.STENCIL_TEST))},setMask:function(Ot){ye!==Ot&&!L&&(n.stencilMask(Ot),ye=Ot)},setFunc:function(Ot,Pt,Gt){(Je!==Ot||tt!==Pt||gt!==Gt)&&(n.stencilFunc(Ot,Pt,Gt),Je=Ot,tt=Pt,gt=Gt)},setOp:function(Ot,Pt,Gt){(St!==Ot||Tt!==Pt||bt!==Gt)&&(n.stencilOp(Ot,Pt,Gt),St=Ot,Tt=Pt,bt=Gt)},setLocked:function(Ot){L=Ot},setClear:function(Ot){Yt!==Ot&&(n.clearStencil(Ot),Yt=Ot)},reset:function(){L=!1,ye=null,Je=null,tt=null,gt=null,St=null,Tt=null,bt=null,Yt=null}}}const o=new r,l=new a,f=new s,_=new WeakMap,h=new WeakMap;let g={},E={},T=new WeakMap,y=[],x=null,p=!1,W=null,F=null,k=null,ce=null,q=null,V=null,_e=null,A=new Qt(0,0,0),U=0,ee=!1,Y=null,de=null,X=null,j=null,ke=null;const Le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Ce=!1,pe=0;const Me=n.getParameter(n.VERSION);Me.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(Me)[1]),Ce=pe>=1):Me.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),Ce=pe>=2);let Ve=null,we={};const se=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),$e=new vn().fromArray(se),it=new vn().fromArray(ge);function Ye(L,ye,Je,tt){const gt=new Uint8Array(4),St=n.createTexture();n.bindTexture(L,St),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<Je;Tt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ye+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return St}const ht={};ht[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ht[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),f.setClear(0),ct(n.DEPTH_TEST),l.setFunc(El),Be(!1),M(xf),ct(n.CULL_FACE),re(Lr);function ct(L){g[L]!==!0&&(n.enable(L),g[L]=!0)}function z(L){g[L]!==!1&&(n.disable(L),g[L]=!1)}function ne(L,ye){return E[L]!==ye?(n.bindFramebuffer(L,ye),E[L]=ye,i&&(L===n.DRAW_FRAMEBUFFER&&(E[n.FRAMEBUFFER]=ye),L===n.FRAMEBUFFER&&(E[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function B(L,ye){let Je=y,tt=!1;if(L)if(Je=T.get(ye),Je===void 0&&(Je=[],T.set(ye,Je)),L.isWebGLMultipleRenderTargets){const gt=L.texture;if(Je.length!==gt.length||Je[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Tt=gt.length;St<Tt;St++)Je[St]=n.COLOR_ATTACHMENT0+St;Je.length=gt.length,tt=!0}}else Je[0]!==n.COLOR_ATTACHMENT0&&(Je[0]=n.COLOR_ATTACHMENT0,tt=!0);else Je[0]!==n.BACK&&(Je[0]=n.BACK,tt=!0);tt&&(t.isWebGL2?n.drawBuffers(Je):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Je))}function Ae(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const ve={[ma]:n.FUNC_ADD,[Cm]:n.FUNC_SUBTRACT,[Um]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Tf]=n.MIN,ve[Mf]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[Tf]=L.MIN_EXT,ve[Mf]=L.MAX_EXT)}const H={[Om]:n.ZERO,[Pm]:n.ONE,[Nm]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Lm]:n.DST_COLOR,[Dm]:n.DST_ALPHA,[Im]:n.ONE_MINUS_SRC_COLOR,[Yc]:n.ONE_MINUS_SRC_ALPHA,[Fm]:n.ONE_MINUS_DST_COLOR,[km]:n.ONE_MINUS_DST_ALPHA,[Gm]:n.CONSTANT_COLOR,[Vm]:n.ONE_MINUS_CONSTANT_COLOR,[Hm]:n.CONSTANT_ALPHA,[zm]:n.ONE_MINUS_CONSTANT_ALPHA};function re(L,ye,Je,tt,gt,St,Tt,bt,Yt,Ot){if(L===Lr){p===!0&&(z(n.BLEND),p=!1);return}if(p===!1&&(ct(n.BLEND),p=!0),L!==Rm){if(L!==W||Ot!==ee){if((F!==ma||q!==ma)&&(n.blendEquation(n.FUNC_ADD),F=ma,q=ma),Ot)switch(L){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ef:n.blendFunc(n.ONE,n.ONE);break;case Af:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ef:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Af:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}k=null,ce=null,V=null,_e=null,A.set(0,0,0),U=0,W=L,ee=Ot}return}gt=gt||ye,St=St||Je,Tt=Tt||tt,(ye!==F||gt!==q)&&(n.blendEquationSeparate(ve[ye],ve[gt]),F=ye,q=gt),(Je!==k||tt!==ce||St!==V||Tt!==_e)&&(n.blendFuncSeparate(H[Je],H[tt],H[St],H[Tt]),k=Je,ce=tt,V=St,_e=Tt),(bt.equals(A)===!1||Yt!==U)&&(n.blendColor(bt.r,bt.g,bt.b,Yt),A.copy(bt),U=Yt),W=L,ee=!1}function le(L,ye){L.side===pr?z(n.CULL_FACE):ct(n.CULL_FACE);let Je=L.side===oi;ye&&(Je=!Je),Be(Je),L.blending===gs&&L.transparent===!1?re(Lr):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const tt=L.stencilWrite;f.setTest(tt),tt&&(f.setMask(L.stencilWriteMask),f.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),f.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):z(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){Y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),Y=L)}function M(L){L!==ym?(ct(n.CULL_FACE),L!==de&&(L===xf?n.cullFace(n.BACK):L===wm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):z(n.CULL_FACE),de=L}function v(L){L!==X&&(Ce&&n.lineWidth(L),X=L)}function O(L,ye,Je){L?(ct(n.POLYGON_OFFSET_FILL),(j!==ye||ke!==Je)&&(n.polygonOffset(ye,Je),j=ye,ke=Je)):z(n.POLYGON_OFFSET_FILL)}function Te(L){L?ct(n.SCISSOR_TEST):z(n.SCISSOR_TEST)}function Se(L){L===void 0&&(L=n.TEXTURE0+Le-1),Ve!==L&&(n.activeTexture(L),Ve=L)}function Oe(L,ye,Je){Je===void 0&&(Ve===null?Je=n.TEXTURE0+Le-1:Je=Ve);let tt=we[Je];tt===void 0&&(tt={type:void 0,texture:void 0},we[Je]=tt),(tt.type!==L||tt.texture!==ye)&&(Ve!==Je&&(n.activeTexture(Je),Ve=Je),n.bindTexture(L,ye||ht[L]),tt.type=L,tt.texture=ye)}function P(){const L=we[Ve];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(L){$e.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$e.copy(L))}function st(L){it.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function C(L,ye){let Je=h.get(ye);Je===void 0&&(Je=new WeakMap,h.set(ye,Je));let tt=Je.get(L);tt===void 0&&(tt=n.getUniformBlockIndex(ye,L.name),Je.set(L,tt))}function Re(L,ye){const tt=h.get(ye).get(L);_.get(ye)!==tt&&(n.uniformBlockBinding(ye,tt,L.__bindingPointIndex),_.set(ye,tt))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},Ve=null,we={},E={},T=new WeakMap,y=[],x=null,p=!1,W=null,F=null,k=null,ce=null,q=null,V=null,_e=null,A=new Qt(0,0,0),U=0,ee=!1,Y=null,de=null,X=null,j=null,ke=null,$e.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),f.reset()}return{buffers:{color:o,depth:l,stencil:f},enable:ct,disable:z,bindFramebuffer:ne,drawBuffers:B,useProgram:Ae,setBlending:re,setMaterial:le,setFlipSided:Be,setCullFace:M,setLineWidth:v,setPolygonOffset:O,setScissorTest:Te,activeTexture:Se,bindTexture:Oe,unbindTexture:P,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:fe,texImage3D:Ne,updateUBOMapping:C,uniformBlockBinding:Re,texStorage2D:et,texStorage3D:te,texSubImage2D:xe,texSubImage3D:Xe,compressedTexSubImage2D:ze,compressedTexSubImage3D:dt,scissor:qe,viewport:st,reset:he}}function kA(n,e,t,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,v){return E?new OffscreenCanvas(M,v):yl("canvas")}function y(M,v,O,Te){let Se=1;if((M.width>Te||M.height>Te)&&(Se=Te/Math.max(M.width,M.height)),Se<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const Oe=v?bl:Math.floor,P=Oe(Se*M.width),Q=Oe(Se*M.height);h===void 0&&(h=T(P,Q));const ie=O?T(P,Q):h;return ie.width=P,ie.height=Q,ie.getContext("2d").drawImage(M,0,0,P,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+P+"x"+Q+")."),ie}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function x(M){return nu(M.width)&&nu(M.height)}function p(M){return o?!1:M.wrapS!==ki||M.wrapT!==ki||M.minFilter!==ei&&M.minFilter!==bi}function W(M,v){return M.generateMipmaps&&v&&M.minFilter!==ei&&M.minFilter!==bi}function F(M){n.generateMipmap(M)}function k(M,v,O,Te,Se=!1){if(o===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Oe=v;if(v===n.RED&&(O===n.FLOAT&&(Oe=n.R32F),O===n.HALF_FLOAT&&(Oe=n.R16F),O===n.UNSIGNED_BYTE&&(Oe=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Oe=n.R8UI),O===n.UNSIGNED_SHORT&&(Oe=n.R16UI),O===n.UNSIGNED_INT&&(Oe=n.R32UI),O===n.BYTE&&(Oe=n.R8I),O===n.SHORT&&(Oe=n.R16I),O===n.INT&&(Oe=n.R32I)),v===n.RG&&(O===n.FLOAT&&(Oe=n.RG32F),O===n.HALF_FLOAT&&(Oe=n.RG16F),O===n.UNSIGNED_BYTE&&(Oe=n.RG8)),v===n.RGBA){const P=Se?Al:on.getTransfer(Te);O===n.FLOAT&&(Oe=n.RGBA32F),O===n.HALF_FLOAT&&(Oe=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Oe=P===mn?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Oe=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Oe=n.RGB5_A1)}return(Oe===n.R16F||Oe===n.R32F||Oe===n.RG16F||Oe===n.RG32F||Oe===n.RGBA16F||Oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Oe}function ce(M,v,O){return W(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==ei&&M.minFilter!==bi?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function q(M){return M===ei||M===bf||M===oc?n.NEAREST:n.LINEAR}function V(M){const v=M.target;v.removeEventListener("dispose",V),A(v),v.isVideoTexture&&_.delete(v)}function _e(M){const v=M.target;v.removeEventListener("dispose",_e),ee(v)}function A(M){const v=i.get(M);if(v.__webglInit===void 0)return;const O=M.source,Te=g.get(O);if(Te){const Se=Te[v.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&U(M),Object.keys(Te).length===0&&g.delete(O)}i.remove(M)}function U(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const O=M.source,Te=g.get(O);delete Te[v.__cacheKey],s.memory.textures--}function ee(M){const v=M.texture,O=i.get(M),Te=i.get(v);if(Te.__webglTexture!==void 0&&(n.deleteTexture(Te.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(O.__webglFramebuffer[Se]))for(let Oe=0;Oe<O.__webglFramebuffer[Se].length;Oe++)n.deleteFramebuffer(O.__webglFramebuffer[Se][Oe]);else n.deleteFramebuffer(O.__webglFramebuffer[Se]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Se])}else{if(Array.isArray(O.__webglFramebuffer))for(let Se=0;Se<O.__webglFramebuffer.length;Se++)n.deleteFramebuffer(O.__webglFramebuffer[Se]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Se=0;Se<O.__webglColorRenderbuffer.length;Se++)O.__webglColorRenderbuffer[Se]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Se]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Se=0,Oe=v.length;Se<Oe;Se++){const P=i.get(v[Se]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),s.memory.textures--),i.remove(v[Se])}i.remove(v),i.remove(M)}let Y=0;function de(){Y=0}function X(){const M=Y;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),Y+=1,M}function j(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ke(M,v){const O=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const Te=M.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(O,M,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Le(M,v){const O=i.get(M);if(M.version>0&&O.__version!==M.version){$e(O,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Ce(M,v){const O=i.get(M);if(M.version>0&&O.__version!==M.version){$e(O,M,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function pe(M,v){const O=i.get(M);if(M.version>0&&O.__version!==M.version){it(O,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const Me={[Qc]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[eu]:n.MIRRORED_REPEAT},Ve={[ei]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[oc]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[rg]:n.LINEAR_MIPMAP_NEAREST,[lo]:n.LINEAR_MIPMAP_LINEAR},we={[mg]:n.NEVER,[Sg]:n.ALWAYS,[gg]:n.LESS,[$d]:n.LEQUAL,[vg]:n.EQUAL,[Ag]:n.GEQUAL,[xg]:n.GREATER,[Eg]:n.NOTEQUAL};function se(M,v,O){if(O?(n.texParameteri(M,n.TEXTURE_WRAP_S,Me[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Me[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Me[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ve[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ve[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==ki||v.wrapT!==ki)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,q(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,q(v.minFilter)),v.minFilter!==ei&&v.minFilter!==bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Te=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ei||v.minFilter!==oc&&v.minFilter!==lo||v.type===kr&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function ge(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",V));const Te=v.source;let Se=g.get(Te);Se===void 0&&(Se={},g.set(Te,Se));const Oe=j(v);if(Oe!==M.__cacheKey){Se[Oe]===void 0&&(Se[Oe]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Se[Oe].usedTimes++;const P=Se[M.__cacheKey];P!==void 0&&(Se[M.__cacheKey].usedTimes--,P.usedTimes===0&&U(v)),M.__cacheKey=Oe,M.__webglTexture=Se[Oe].texture}return O}function $e(M,v,O){let Te=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Te=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Te=n.TEXTURE_3D);const Se=ge(M,v),Oe=v.source;t.bindTexture(Te,M.__webglTexture,n.TEXTURE0+O);const P=i.get(Oe);if(Oe.version!==P.__version||Se===!0){t.activeTexture(n.TEXTURE0+O);const Q=on.getPrimaries(on.workingColorSpace),ie=v.colorSpace===yi?null:on.getPrimaries(v.colorSpace),xe=v.colorSpace===yi||Q===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=p(v)&&x(v.image)===!1;let ze=y(v.image,Xe,!1,r.maxTextureSize);ze=Be(v,ze);const dt=x(ze)||o,et=a.convert(v.format,v.colorSpace);let te=a.convert(v.type),fe=k(v.internalFormat,et,te,v.colorSpace,v.isVideoTexture);se(Te,v,dt);let Ne;const qe=v.mipmaps,st=o&&v.isVideoTexture!==!0&&fe!==Kd,C=P.__version===void 0||Se===!0,Re=ce(v,ze,dt);if(v.isDepthTexture)fe=n.DEPTH_COMPONENT,o?v.type===kr?fe=n.DEPTH_COMPONENT32F:v.type===Dr?fe=n.DEPTH_COMPONENT24:v.type===Ea?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:v.type===kr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Aa&&fe===n.DEPTH_COMPONENT&&v.type!==xu&&v.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Dr,te=a.convert(v.type)),v.format===Ts&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,v.type!==Ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ea,te=a.convert(v.type))),C&&(st?t.texStorage2D(n.TEXTURE_2D,1,fe,ze.width,ze.height):t.texImage2D(n.TEXTURE_2D,0,fe,ze.width,ze.height,0,et,te,null));else if(v.isDataTexture)if(qe.length>0&&dt){st&&C&&t.texStorage2D(n.TEXTURE_2D,Re,fe,qe[0].width,qe[0].height);for(let he=0,L=qe.length;he<L;he++)Ne=qe[he],st?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ne.width,Ne.height,et,te,Ne.data):t.texImage2D(n.TEXTURE_2D,he,fe,Ne.width,Ne.height,0,et,te,Ne.data);v.generateMipmaps=!1}else st?(C&&t.texStorage2D(n.TEXTURE_2D,Re,fe,ze.width,ze.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze.width,ze.height,et,te,ze.data)):t.texImage2D(n.TEXTURE_2D,0,fe,ze.width,ze.height,0,et,te,ze.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&C&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,fe,qe[0].width,qe[0].height,ze.depth);for(let he=0,L=qe.length;he<L;he++)Ne=qe[he],v.format!==Li?et!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,ze.depth,et,Ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,fe,Ne.width,Ne.height,ze.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,ze.depth,et,te,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,fe,Ne.width,Ne.height,ze.depth,0,et,te,Ne.data)}else{st&&C&&t.texStorage2D(n.TEXTURE_2D,Re,fe,qe[0].width,qe[0].height);for(let he=0,L=qe.length;he<L;he++)Ne=qe[he],v.format!==Li?et!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ne.width,Ne.height,et,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,he,fe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ne.width,Ne.height,et,te,Ne.data):t.texImage2D(n.TEXTURE_2D,he,fe,Ne.width,Ne.height,0,et,te,Ne.data)}else if(v.isDataArrayTexture)st?(C&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,fe,ze.width,ze.height,ze.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ze.width,ze.height,ze.depth,et,te,ze.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,ze.width,ze.height,ze.depth,0,et,te,ze.data);else if(v.isData3DTexture)st?(C&&t.texStorage3D(n.TEXTURE_3D,Re,fe,ze.width,ze.height,ze.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ze.width,ze.height,ze.depth,et,te,ze.data)):t.texImage3D(n.TEXTURE_3D,0,fe,ze.width,ze.height,ze.depth,0,et,te,ze.data);else if(v.isFramebufferTexture){if(C)if(st)t.texStorage2D(n.TEXTURE_2D,Re,fe,ze.width,ze.height);else{let he=ze.width,L=ze.height;for(let ye=0;ye<Re;ye++)t.texImage2D(n.TEXTURE_2D,ye,fe,he,L,0,et,te,null),he>>=1,L>>=1}}else if(qe.length>0&&dt){st&&C&&t.texStorage2D(n.TEXTURE_2D,Re,fe,qe[0].width,qe[0].height);for(let he=0,L=qe.length;he<L;he++)Ne=qe[he],st?t.texSubImage2D(n.TEXTURE_2D,he,0,0,et,te,Ne):t.texImage2D(n.TEXTURE_2D,he,fe,et,te,Ne);v.generateMipmaps=!1}else st?(C&&t.texStorage2D(n.TEXTURE_2D,Re,fe,ze.width,ze.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,te,ze)):t.texImage2D(n.TEXTURE_2D,0,fe,et,te,ze);W(v,dt)&&F(Te),P.__version=Oe.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function it(M,v,O){if(v.image.length!==6)return;const Te=ge(M,v),Se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const Oe=i.get(Se);if(Se.version!==Oe.__version||Te===!0){t.activeTexture(n.TEXTURE0+O);const P=on.getPrimaries(on.workingColorSpace),Q=v.colorSpace===yi?null:on.getPrimaries(v.colorSpace),ie=v.colorSpace===yi||P===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Xe=v.image[0]&&v.image[0].isDataTexture,ze=[];for(let he=0;he<6;he++)!xe&&!Xe?ze[he]=y(v.image[he],!1,!0,r.maxCubemapSize):ze[he]=Xe?v.image[he].image:v.image[he],ze[he]=Be(v,ze[he]);const dt=ze[0],et=x(dt)||o,te=a.convert(v.format,v.colorSpace),fe=a.convert(v.type),Ne=k(v.internalFormat,te,fe,v.colorSpace),qe=o&&v.isVideoTexture!==!0,st=Oe.__version===void 0||Te===!0;let C=ce(v,dt,et);se(n.TEXTURE_CUBE_MAP,v,et);let Re;if(xe){qe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,C,Ne,dt.width,dt.height);for(let he=0;he<6;he++){Re=ze[he].mipmaps;for(let L=0;L<Re.length;L++){const ye=Re[L];v.format!==Li?te!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,ye.width,ye.height,te,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,ye.width,ye.height,te,fe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Ne,ye.width,ye.height,0,te,fe,ye.data)}}}else{Re=v.mipmaps,qe&&st&&(Re.length>0&&C++,t.texStorage2D(n.TEXTURE_CUBE_MAP,C,Ne,ze[0].width,ze[0].height));for(let he=0;he<6;he++)if(Xe){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze[he].width,ze[he].height,te,fe,ze[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ne,ze[he].width,ze[he].height,0,te,fe,ze[he].data);for(let L=0;L<Re.length;L++){const Je=Re[L].image[he].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,Je.width,Je.height,te,fe,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Ne,Je.width,Je.height,0,te,fe,Je.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,te,fe,ze[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ne,te,fe,ze[he]);for(let L=0;L<Re.length;L++){const ye=Re[L];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,te,fe,ye.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Ne,te,fe,ye.image[he])}}}W(v,et)&&F(n.TEXTURE_CUBE_MAP),Oe.__version=Se.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ye(M,v,O,Te,Se,Oe){const P=a.convert(O.format,O.colorSpace),Q=a.convert(O.type),ie=k(O.internalFormat,P,Q,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Xe=Math.max(1,v.width>>Oe),ze=Math.max(1,v.height>>Oe);Se===n.TEXTURE_3D||Se===n.TEXTURE_2D_ARRAY?t.texImage3D(Se,Oe,ie,Xe,ze,v.depth,0,P,Q,null):t.texImage2D(Se,Oe,ie,Xe,ze,0,P,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),re(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,Se,i.get(O).__webglTexture,0,H(v)):(Se===n.TEXTURE_2D||Se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Te,Se,i.get(O).__webglTexture,Oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(M,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let Te=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||re(v)){const Se=v.depthTexture;Se&&Se.isDepthTexture&&(Se.type===kr?Te=n.DEPTH_COMPONENT32F:Se.type===Dr&&(Te=n.DEPTH_COMPONENT24));const Oe=H(v);re(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Te,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Te,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const Te=H(v);O&&re(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,n.DEPTH24_STENCIL8,v.width,v.height):re(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Se=0;Se<Te.length;Se++){const Oe=Te[Se],P=a.convert(Oe.format,Oe.colorSpace),Q=a.convert(Oe.type),ie=k(Oe.internalFormat,P,Q,Oe.colorSpace),xe=H(v);O&&re(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ie,v.width,v.height):re(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ke(v.depthTexture,0);const Te=i.get(v.depthTexture).__webglTexture,Se=H(v);if(v.depthTexture.format===Aa)re(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Te,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Te,0);else if(v.depthTexture.format===Ts)re(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Te,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function z(M){const v=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ct(v.__webglFramebuffer,M)}else if(O){v.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Te]),v.__webglDepthbuffer[Te]=n.createRenderbuffer(),ht(v.__webglDepthbuffer[Te],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ht(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(M,v,O){const Te=i.get(M);v!==void 0&&Ye(Te.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&z(M)}function B(M){const v=M.texture,O=i.get(M),Te=i.get(v);M.addEventListener("dispose",_e),M.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture()),Te.__version=v.version,s.memory.textures++);const Se=M.isWebGLCubeRenderTarget===!0,Oe=M.isWebGLMultipleRenderTargets===!0,P=x(M)||o;if(Se){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[Q][ie]=n.createFramebuffer()}else O.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)O.__webglFramebuffer[Q]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Oe)if(r.drawBuffers){const Q=M.texture;for(let ie=0,xe=Q.length;ie<xe;ie++){const Xe=i.get(Q[ie]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&re(M)===!1){const Q=Oe?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<Q.length;ie++){const xe=Q[ie];O.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const Xe=a.convert(xe.format,xe.colorSpace),ze=a.convert(xe.type),dt=k(xe.internalFormat,Xe,ze,xe.colorSpace,M.isXRRenderTarget===!0),et=H(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,dt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,Te.__webglTexture),se(n.TEXTURE_CUBE_MAP,v,P);for(let Q=0;Q<6;Q++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ye(O.__webglFramebuffer[Q][ie],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else Ye(O.__webglFramebuffer[Q],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);W(v,P)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){const Q=M.texture;for(let ie=0,xe=Q.length;ie<xe;ie++){const Xe=Q[ie],ze=i.get(Xe);t.bindTexture(n.TEXTURE_2D,ze.__webglTexture),se(n.TEXTURE_2D,Xe,P),Ye(O.__webglFramebuffer,M,Xe,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),W(Xe,P)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?Q=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,Te.__webglTexture),se(Q,v,P),o&&v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ye(O.__webglFramebuffer[ie],M,v,n.COLOR_ATTACHMENT0,Q,ie);else Ye(O.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,Q,0);W(v,P)&&F(Q),t.unbindTexture()}M.depthBuffer&&z(M)}function Ae(M){const v=x(M)||o,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Te=0,Se=O.length;Te<Se;Te++){const Oe=O[Te];if(W(Oe,v)){const P=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Q=i.get(Oe).__webglTexture;t.bindTexture(P,Q),F(P),t.unbindTexture()}}}function ve(M){if(o&&M.samples>0&&re(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,Te=M.height;let Se=n.COLOR_BUFFER_BIT;const Oe=[],P=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=i.get(M),ie=M.isWebGLMultipleRenderTargets===!0;if(ie)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){Oe.push(n.COLOR_ATTACHMENT0+xe),M.depthBuffer&&Oe.push(P);const Xe=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(Xe===!1&&(M.depthBuffer&&(Se|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Se|=n.STENCIL_BUFFER_BIT)),ie&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[P]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])),ie){const ze=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,O,Te,0,0,O,Te,Se,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]);const Xe=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function H(M){return Math.min(r.maxSamples,M.samples)}function re(M){const v=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(M){const v=s.render.frame;_.get(M)!==v&&(_.set(M,v),M.update())}function Be(M,v){const O=M.colorSpace,Te=M.format,Se=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===tu||O!==gr&&O!==yi&&(on.getTransfer(O)===mn?o===!1?e.has("EXT_sRGB")===!0&&Te===Li?(M.format=tu,M.minFilter=bi,M.generateMipmaps=!1):v=Zd.sRGBToLinear(v):(Te!==Li||Se!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=X,this.resetTextureUnits=de,this.setTexture2D=ke,this.setTexture2DArray=Le,this.setTexture3D=Ce,this.setTextureCube=pe,this.rebindTextures=ne,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=re}function LA(n,e,t){const i=t.isWebGL2;function r(a,s=yi){let o;const l=on.getTransfer(s);if(a===Br)return n.UNSIGNED_BYTE;if(a===Vd)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Hd)return n.UNSIGNED_SHORT_5_5_5_1;if(a===ag)return n.BYTE;if(a===sg)return n.SHORT;if(a===xu)return n.UNSIGNED_SHORT;if(a===Gd)return n.INT;if(a===Dr)return n.UNSIGNED_INT;if(a===kr)return n.FLOAT;if(a===co)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===og)return n.ALPHA;if(a===Li)return n.RGBA;if(a===lg)return n.LUMINANCE;if(a===cg)return n.LUMINANCE_ALPHA;if(a===Aa)return n.DEPTH_COMPONENT;if(a===Ts)return n.DEPTH_STENCIL;if(a===tu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===ug)return n.RED;if(a===zd)return n.RED_INTEGER;if(a===fg)return n.RG;if(a===Wd)return n.RG_INTEGER;if(a===Xd)return n.RGBA_INTEGER;if(a===lc||a===cc||a===uc||a===fc)if(l===mn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===lc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===lc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===yf||a===wf||a===Rf||a===Cf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===yf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Cf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Uf||a===Of)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Uf)return l===mn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Of)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Pf||a===Nf||a===If||a===Df||a===kf||a===Lf||a===Ff||a===Bf||a===Gf||a===Vf||a===Hf||a===zf||a===Wf||a===Xf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Pf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Nf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===If)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Df)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Lf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ff)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Gf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Hf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xf)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hc||a===Kf||a===jf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===hc)return l===mn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Kf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===jf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hg||a===qf||a===$f||a===Yf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===hc)return o.COMPRESSED_RED_RGTC1_EXT;if(a===qf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===$f)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ea?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class FA extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BA={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new We,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new We),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new We,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new We),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){s=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,i),p=this._getHandJoint(f,y);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const _=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],g=_.position.distanceTo(h.position),E=.02,T=.005;f.inputState.pinching&&g>E+T?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=E-T&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),f!==null&&(f.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class GA extends Os{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,f=null,_=null,h=null,g=null,E=null,T=null;const y=t.getContextAttributes();let x=null,p=null;const W=[],F=[],k=new en;let ce=null;const q=new _i;q.layers.enable(1),q.viewport=new vn;const V=new _i;V.layers.enable(2),V.viewport=new vn;const _e=[q,V],A=new FA;A.layers.enable(1),A.layers.enable(2);let U=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=W[se];return ge===void 0&&(ge=new Dc,W[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=W[se];return ge===void 0&&(ge=new Dc,W[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=W[se];return ge===void 0&&(ge=new Dc,W[se]=ge),ge.getHandSpace()};function Y(se){const ge=F.indexOf(se.inputSource);if(ge===-1)return;const $e=W[ge];$e!==void 0&&($e.update(se.inputSource,se.frame,f||s),$e.dispatchEvent({type:se.type,data:se.inputSource}))}function de(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",X);for(let se=0;se<W.length;se++){const ge=F[se];ge!==null&&(F[se]=null,W[se].disconnect(ge))}U=null,ee=null,e.setRenderTarget(x),E=null,g=null,h=null,r=null,p=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(ce),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return h},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",de),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),ce=e.getPixelRatio(),e.getSize(k),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),p=new Ma(E.framebufferWidth,E.framebufferHeight,{format:Li,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ge=null,$e=null,it=null;y.depth&&(it=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Ts:Aa,$e=y.stencil?Ea:Dr);const Ye={colorFormat:t.RGBA8,depthFormat:it,scaleFactor:a};h=new XRWebGLBinding(r,t),g=h.createProjectionLayer(Ye),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),p=new Ma(g.textureWidth,g.textureHeight,{format:Li,type:Br,depthTexture:new cp(g.textureWidth,g.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ht=e.properties.get(p);ht.__ignoreDepthValues=g.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),f=null,s=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(se){for(let ge=0;ge<se.removed.length;ge++){const $e=se.removed[ge],it=F.indexOf($e);it>=0&&(F[it]=null,W[it].disconnect($e))}for(let ge=0;ge<se.added.length;ge++){const $e=se.added[ge];let it=F.indexOf($e);if(it===-1){for(let ht=0;ht<W.length;ht++)if(ht>=F.length){F.push($e),it=ht;break}else if(F[ht]===null){F[ht]=$e,it=ht;break}if(it===-1)break}const Ye=W[it];Ye&&Ye.connect($e)}}const j=new We,ke=new We;function Le(se,ge,$e){j.setFromMatrixPosition(ge.matrixWorld),ke.setFromMatrixPosition($e.matrixWorld);const it=j.distanceTo(ke),Ye=ge.projectionMatrix.elements,ht=$e.projectionMatrix.elements,ct=Ye[14]/(Ye[10]-1),z=Ye[14]/(Ye[10]+1),ne=(Ye[9]+1)/Ye[5],B=(Ye[9]-1)/Ye[5],Ae=(Ye[8]-1)/Ye[0],ve=(ht[8]+1)/ht[0],H=ct*Ae,re=ct*ve,le=it/(-Ae+ve),Be=le*-Ae;ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Be),se.translateZ(le),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const M=ct+le,v=z+le,O=H-Be,Te=re+(it-Be),Se=ne*z/v*M,Oe=B*z/v*M;se.projectionMatrix.makePerspective(O,Te,Se,Oe,M,v),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function Ce(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;A.near=V.near=q.near=se.near,A.far=V.far=q.far=se.far,(U!==A.near||ee!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,ee=A.far);const ge=se.parent,$e=A.cameras;Ce(A,ge);for(let it=0;it<$e.length;it++)Ce($e[it],ge);$e.length===2?Le(A,q,V):A.projectionMatrix.copy(q.projectionMatrix),pe(se,A,ge)};function pe(se,ge,$e){$e===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy($e.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=uo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&E===null))return l},this.setFoveation=function(se){l=se,g!==null&&(g.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)};let Me=null;function Ve(se,ge){if(_=ge.getViewerPose(f||s),T=ge,_!==null){const $e=_.views;E!==null&&(e.setRenderTargetFramebuffer(p,E.framebuffer),e.setRenderTarget(p));let it=!1;$e.length!==A.cameras.length&&(A.cameras.length=0,it=!0);for(let Ye=0;Ye<$e.length;Ye++){const ht=$e[Ye];let ct=null;if(E!==null)ct=E.getViewport(ht);else{const ne=h.getViewSubImage(g,ht);ct=ne.viewport,Ye===0&&(e.setRenderTargetTextures(p,ne.colorTexture,g.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(p))}let z=_e[Ye];z===void 0&&(z=new _i,z.layers.enable(Ye),z.viewport=new vn,_e[Ye]=z),z.matrix.fromArray(ht.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(ht.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(A.matrix.copy(z.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),it===!0&&A.cameras.push(z)}}for(let $e=0;$e<W.length;$e++){const it=F[$e],Ye=W[$e];it!==null&&Ye!==void 0&&Ye.update(it,ge,f||s)}Me&&Me(se,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),T=null}const we=new op;we.setAnimationLoop(Ve),this.setAnimationLoop=function(se){Me=se},this.dispose=function(){}}}function VA(n,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,rp(n)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,W,F,k){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(x,p):p.isMeshToonMaterial?(a(x,p),h(x,p)):p.isMeshPhongMaterial?(a(x,p),_(x,p)):p.isMeshStandardMaterial?(a(x,p),g(x,p),p.isMeshPhysicalMaterial&&E(x,p,k)):p.isMeshMatcapMaterial?(a(x,p),T(x,p)):p.isMeshDepthMaterial?a(x,p):p.isMeshDistanceMaterial?(a(x,p),y(x,p)):p.isMeshNormalMaterial?a(x,p):p.isLineBasicMaterial?(s(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,W,F):p.isSpriteMaterial?f(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===oi&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===oi&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const W=e.get(p).envMap;if(W&&(x.envMap.value=W,x.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap){x.lightMap.value=p.lightMap;const F=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=p.lightMapIntensity*F,t(p.lightMap,x.lightMapTransform)}p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function s(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,W,F){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*W,x.scale.value=F*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function _(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function g(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),e.get(p).envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function E(x,p,W){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&x.clearcoatNormalScale.value.negate())),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=W.texture,x.transmissionSamplerSize.value.set(W.width,W.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,p){p.matcap&&(x.matcap.value=p.matcap)}function y(x,p){const W=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(W.matrixWorld),x.nearDistance.value=W.shadow.camera.near,x.farDistance.value=W.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HA(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(W,F){const k=F.program;i.uniformBlockBinding(W,k)}function f(W,F){let k=r[W.id];k===void 0&&(T(W),k=_(W),r[W.id]=k,W.addEventListener("dispose",x));const ce=F.program;i.updateUBOMapping(W,ce);const q=e.render.frame;a[W.id]!==q&&(g(W),a[W.id]=q)}function _(W){const F=h();W.__bindingPointIndex=F;const k=n.createBuffer(),ce=W.__size,q=W.usage;return n.bindBuffer(n.UNIFORM_BUFFER,k),n.bufferData(n.UNIFORM_BUFFER,ce,q),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,F,k),k}function h(){for(let W=0;W<o;W++)if(s.indexOf(W)===-1)return s.push(W),W;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(W){const F=r[W.id],k=W.uniforms,ce=W.__cache;n.bindBuffer(n.UNIFORM_BUFFER,F);for(let q=0,V=k.length;q<V;q++){const _e=Array.isArray(k[q])?k[q]:[k[q]];for(let A=0,U=_e.length;A<U;A++){const ee=_e[A];if(E(ee,q,A,ce)===!0){const Y=ee.__offset,de=Array.isArray(ee.value)?ee.value:[ee.value];let X=0;for(let j=0;j<de.length;j++){const ke=de[j],Le=y(ke);typeof ke=="number"||typeof ke=="boolean"?(ee.__data[0]=ke,n.bufferSubData(n.UNIFORM_BUFFER,Y+X,ee.__data)):ke.isMatrix3?(ee.__data[0]=ke.elements[0],ee.__data[1]=ke.elements[1],ee.__data[2]=ke.elements[2],ee.__data[3]=0,ee.__data[4]=ke.elements[3],ee.__data[5]=ke.elements[4],ee.__data[6]=ke.elements[5],ee.__data[7]=0,ee.__data[8]=ke.elements[6],ee.__data[9]=ke.elements[7],ee.__data[10]=ke.elements[8],ee.__data[11]=0):(ke.toArray(ee.__data,X),X+=Le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,ee.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function E(W,F,k,ce){const q=W.value,V=F+"_"+k;if(ce[V]===void 0)return typeof q=="number"||typeof q=="boolean"?ce[V]=q:ce[V]=q.clone(),!0;{const _e=ce[V];if(typeof q=="number"||typeof q=="boolean"){if(_e!==q)return ce[V]=q,!0}else if(_e.equals(q)===!1)return _e.copy(q),!0}return!1}function T(W){const F=W.uniforms;let k=0;const ce=16;for(let V=0,_e=F.length;V<_e;V++){const A=Array.isArray(F[V])?F[V]:[F[V]];for(let U=0,ee=A.length;U<ee;U++){const Y=A[U],de=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,j=de.length;X<j;X++){const ke=de[X],Le=y(ke),Ce=k%ce;Ce!==0&&ce-Ce<Le.boundary&&(k+=ce-Ce),Y.__data=new Float32Array(Le.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=k,k+=Le.storage}}}const q=k%ce;return q>0&&(k+=ce-q),W.__size=k,W.__cache={},this}function y(W){const F={boundary:0,storage:0};return typeof W=="number"||typeof W=="boolean"?(F.boundary=4,F.storage=4):W.isVector2?(F.boundary=8,F.storage=8):W.isVector3||W.isColor?(F.boundary=16,F.storage=12):W.isVector4?(F.boundary=16,F.storage=16):W.isMatrix3?(F.boundary=48,F.storage=48):W.isMatrix4?(F.boundary=64,F.storage=64):W.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",W),F}function x(W){const F=W.target;F.removeEventListener("dispose",x);const k=s.indexOf(F.__bindingPointIndex);s.splice(k,1),n.deleteBuffer(r[F.id]),delete r[F.id],delete a[F.id]}function p(){for(const W in r)n.deleteBuffer(r[W]);s=[],r={},a={}}return{bind:l,update:f,dispose:p}}class _p{constructor(e={}){const{canvas:t=Lg(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=s;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const p=[],W=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this._useLegacyLights=!1,this.toneMapping=Fr,this.toneMappingExposure=1;const F=this;let k=!1,ce=0,q=0,V=null,_e=-1,A=null;const U=new vn,ee=new vn;let Y=null;const de=new Qt(0);let X=0,j=t.width,ke=t.height,Le=1,Ce=null,pe=null;const Me=new vn(0,0,j,ke),Ve=new vn(0,0,j,ke);let we=!1;const se=new Tu;let ge=!1,$e=!1,it=null;const Ye=new wn,ht=new en,ct=new We,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return V===null?Le:1}let B=i;function Ae(b,K){for(let ue=0;ue<b.length;ue++){const Pe=b[ue],u=t.getContext(Pe,K);if(u!==null)return u}return null}try{const b={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:_,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vu}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){const K=["webgl2","webgl","experimental-webgl"];if(F.isWebGL1Renderer===!0&&K.shift(),B=Ae(K,b),B===null)throw Ae(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,H,re,le,Be,M,v,O,Te,Se,Oe,P,Q,ie,xe,Xe,ze,dt,et,te,fe,Ne,qe,st;function C(){ve=new Jx(B),H=new Kx(B,ve,e),ve.init(H),Ne=new LA(B,ve,H),re=new DA(B,ve,H),le=new tE(B),Be=new AA,M=new kA(B,ve,re,Be,H,Ne,le),v=new qx(F),O=new Zx(F),Te=new c0(B,H),qe=new Wx(B,ve,Te,H),Se=new Qx(B,Te,le,qe),Oe=new aE(B,Se,Te,le),et=new rE(B,H,M),Xe=new jx(Be),P=new EA(F,v,O,ve,H,qe,Xe),Q=new VA(F,Be),ie=new TA,xe=new CA(ve,H),dt=new zx(F,v,O,re,Oe,g,l),ze=new IA(F,Oe,H),st=new HA(B,le,H,re),te=new Xx(B,ve,le,H),fe=new eE(B,ve,le,H),le.programs=P.programs,F.capabilities=H,F.extensions=ve,F.properties=Be,F.renderLists=ie,F.shadowMap=ze,F.state=re,F.info=le}C();const Re=new GA(F,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(b){b!==void 0&&(Le=b,this.setSize(j,ke,!1))},this.getSize=function(b){return b.set(j,ke)},this.setSize=function(b,K,ue=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ke=K,t.width=Math.floor(b*Le),t.height=Math.floor(K*Le),ue===!0&&(t.style.width=b+"px",t.style.height=K+"px"),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(j*Le,ke*Le).floor()},this.setDrawingBufferSize=function(b,K,ue){j=b,ke=K,Le=ue,t.width=Math.floor(b*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,b,K)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,K,ue,Pe){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,K,ue,Pe),re.viewport(U.copy(Me).multiplyScalar(Le).floor())},this.getScissor=function(b){return b.copy(Ve)},this.setScissor=function(b,K,ue,Pe){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,K,ue,Pe),re.scissor(ee.copy(Ve).multiplyScalar(Le).floor())},this.getScissorTest=function(){return we},this.setScissorTest=function(b){re.setScissorTest(we=b)},this.setOpaqueSort=function(b){Ce=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(b=!0,K=!0,ue=!0){let Pe=0;if(b){let u=!1;if(V!==null){const S=V.texture.format;u=S===Xd||S===Wd||S===zd}if(u){const S=V.texture.type,N=S===Br||S===Dr||S===xu||S===Ea||S===Vd||S===Hd,oe=dt.getClearColor(),G=dt.getClearAlpha(),De=oe.r,Ge=oe.g,rt=oe.b;N?(E[0]=De,E[1]=Ge,E[2]=rt,E[3]=G,B.clearBufferuiv(B.COLOR,0,E)):(T[0]=De,T[1]=Ge,T[2]=rt,T[3]=G,B.clearBufferiv(B.COLOR,0,T))}else Pe|=B.COLOR_BUFFER_BIT}K&&(Pe|=B.DEPTH_BUFFER_BIT),ue&&(Pe|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ie.dispose(),xe.dispose(),Be.dispose(),v.dispose(),O.dispose(),Oe.dispose(),qe.dispose(),st.dispose(),P.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Yt),Re.removeEventListener("sessionend",Ot),it&&(it.dispose(),it=null),Pt.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const b=le.autoReset,K=ze.enabled,ue=ze.autoUpdate,Pe=ze.needsUpdate,u=ze.type;C(),le.autoReset=b,ze.enabled=K,ze.autoUpdate=ue,ze.needsUpdate=Pe,ze.type=u}function ye(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Je(b){const K=b.target;K.removeEventListener("dispose",Je),tt(K)}function tt(b){gt(b),Be.remove(b)}function gt(b){const K=Be.get(b).programs;K!==void 0&&(K.forEach(function(ue){P.releaseProgram(ue)}),b.isShaderMaterial&&P.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ue,Pe,u,S){K===null&&(K=z);const N=u.isMesh&&u.matrixWorld.determinant()<0,oe=nt(b,K,ue,Pe,u);re.setMaterial(Pe,N);let G=ue.index,De=1;if(Pe.wireframe===!0){if(G=Se.getWireframeAttribute(ue),G===void 0)return;De=2}const Ge=ue.drawRange,rt=ue.attributes.position;let Mt=Ge.start*De,Nt=(Ge.start+Ge.count)*De;S!==null&&(Mt=Math.max(Mt,S.start*De),Nt=Math.min(Nt,(S.start+S.count)*De)),G!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,G.count)):rt!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,rt.count));const Ct=Nt-Mt;if(Ct<0||Ct===1/0)return;qe.setup(u,Pe,oe,ue,G);let sn,Lt=te;if(G!==null&&(sn=Te.get(G),Lt=fe,Lt.setIndex(sn)),u.isMesh)Pe.wireframe===!0?(re.setLineWidth(Pe.wireframeLinewidth*ne()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(u.isLine){let R=Pe.linewidth;R===void 0&&(R=1),re.setLineWidth(R*ne()),u.isLineSegments?Lt.setMode(B.LINES):u.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else u.isPoints?Lt.setMode(B.POINTS):u.isSprite&&Lt.setMode(B.TRIANGLES);if(u.isBatchedMesh)Lt.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else if(u.isInstancedMesh)Lt.renderInstances(Mt,Ct,u.count);else if(ue.isInstancedBufferGeometry){const R=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ue=Math.min(ue.instanceCount,R);Lt.renderInstances(Mt,Ct,Ue)}else Lt.render(Mt,Ct)};function St(b,K,ue){b.transparent===!0&&b.side===pr&&b.forceSinglePass===!1?(b.side=oi,b.needsUpdate=!0,tn(b,K,ue),b.side=Vr,b.needsUpdate=!0,tn(b,K,ue),b.side=pr):tn(b,K,ue)}this.compile=function(b,K,ue=null){ue===null&&(ue=b),x=xe.get(ue),x.init(),W.push(x),ue.traverseVisible(function(u){u.isLight&&u.layers.test(K.layers)&&(x.pushLight(u),u.castShadow&&x.pushShadow(u))}),b!==ue&&b.traverseVisible(function(u){u.isLight&&u.layers.test(K.layers)&&(x.pushLight(u),u.castShadow&&x.pushShadow(u))}),x.setupLights(F._useLegacyLights);const Pe=new Set;return b.traverse(function(u){const S=u.material;if(S)if(Array.isArray(S))for(let N=0;N<S.length;N++){const oe=S[N];St(oe,ue,u),Pe.add(oe)}else St(S,ue,u),Pe.add(S)}),W.pop(),x=null,Pe},this.compileAsync=function(b,K,ue=null){const Pe=this.compile(b,K,ue);return new Promise(u=>{function S(){if(Pe.forEach(function(N){Be.get(N).currentProgram.isReady()&&Pe.delete(N)}),Pe.size===0){u(b);return}setTimeout(S,10)}ve.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let Tt=null;function bt(b){Tt&&Tt(b)}function Yt(){Pt.stop()}function Ot(){Pt.start()}const Pt=new op;Pt.setAnimationLoop(bt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(b){Tt=b,Re.setAnimationLoop(b),b===null?Pt.stop():Pt.start()},Re.addEventListener("sessionstart",Yt),Re.addEventListener("sessionend",Ot),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(K),K=Re.getCamera()),b.isScene===!0&&b.onBeforeRender(F,b,K,V),x=xe.get(b,W.length),x.init(),W.push(x),Ye.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),se.setFromProjectionMatrix(Ye),$e=this.localClippingEnabled,ge=Xe.init(this.clippingPlanes,$e),y=ie.get(b,p.length),y.init(),p.push(y),Gt(b,K,0,F.sortObjects),y.finish(),F.sortObjects===!0&&y.sort(Ce,pe),this.info.render.frame++,ge===!0&&Xe.beginShadows();const ue=x.state.shadowsArray;if(ze.render(ue,b,K),ge===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(y,b),x.setupLights(F._useLegacyLights),K.isArrayCamera){const Pe=K.cameras;for(let u=0,S=Pe.length;u<S;u++){const N=Pe[u];ln(y,b,N,N.viewport)}}else ln(y,b,K);V!==null&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),b.isScene===!0&&b.onAfterRender(F,b,K),qe.resetDefaultState(),_e=-1,A=null,W.pop(),W.length>0?x=W[W.length-1]:x=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Gt(b,K,ue,Pe){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){Pe&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ye);const N=Oe.update(b),oe=b.material;oe.visible&&y.push(b,N,oe,ue,ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){const N=Oe.update(b),oe=b.material;if(Pe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),ct.copy(N.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(Ye)),Array.isArray(oe)){const G=N.groups;for(let De=0,Ge=G.length;De<Ge;De++){const rt=G[De],Mt=oe[rt.materialIndex];Mt&&Mt.visible&&y.push(b,N,Mt,ue,ct.z,rt)}}else oe.visible&&y.push(b,N,oe,ue,ct.z,null)}}const S=b.children;for(let N=0,oe=S.length;N<oe;N++)Gt(S[N],K,ue,Pe)}function ln(b,K,ue,Pe){const u=b.opaque,S=b.transmissive,N=b.transparent;x.setupLightsView(ue),ge===!0&&Xe.setGlobalState(F.clippingPlanes,ue),S.length>0&&dn(u,S,K,ue),Pe&&re.viewport(U.copy(Pe)),u.length>0&&cn(u,K,ue),S.length>0&&cn(S,K,ue),N.length>0&&cn(N,K,ue),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function dn(b,K,ue,Pe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const S=H.isWebGL2;it===null&&(it=new Ma(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?co:Br,minFilter:lo,samples:S?4:0})),F.getDrawingBufferSize(ht),S?it.setSize(ht.x,ht.y):it.setSize(bl(ht.x),bl(ht.y));const N=F.getRenderTarget();F.setRenderTarget(it),F.getClearColor(de),X=F.getClearAlpha(),X<1&&F.setClearColor(16777215,.5),F.clear();const oe=F.toneMapping;F.toneMapping=Fr,cn(b,ue,Pe),M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it);let G=!1;for(let De=0,Ge=K.length;De<Ge;De++){const rt=K[De],Mt=rt.object,Nt=rt.geometry,Ct=rt.material,sn=rt.group;if(Ct.side===pr&&Mt.layers.test(Pe.layers)){const Lt=Ct.side;Ct.side=oi,Ct.needsUpdate=!0,an(Mt,ue,Pe,Nt,Ct,sn),Ct.side=Lt,Ct.needsUpdate=!0,G=!0}}G===!0&&(M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it)),F.setRenderTarget(N),F.setClearColor(de,X),F.toneMapping=oe}function cn(b,K,ue){const Pe=K.isScene===!0?K.overrideMaterial:null;for(let u=0,S=b.length;u<S;u++){const N=b[u],oe=N.object,G=N.geometry,De=Pe===null?N.material:Pe,Ge=N.group;oe.layers.test(ue.layers)&&an(oe,K,ue,G,De,Ge)}}function an(b,K,ue,Pe,u,S){b.onBeforeRender(F,K,ue,Pe,u,S),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),u.onBeforeRender(F,K,ue,Pe,b,S),u.transparent===!0&&u.side===pr&&u.forceSinglePass===!1?(u.side=oi,u.needsUpdate=!0,F.renderBufferDirect(ue,K,Pe,u,b,S),u.side=Vr,u.needsUpdate=!0,F.renderBufferDirect(ue,K,Pe,u,b,S),u.side=pr):F.renderBufferDirect(ue,K,Pe,u,b,S),b.onAfterRender(F,K,ue,Pe,u,S)}function tn(b,K,ue){K.isScene!==!0&&(K=z);const Pe=Be.get(b),u=x.state.lights,S=x.state.shadowsArray,N=u.state.version,oe=P.getParameters(b,u.state,S,K,ue),G=P.getProgramCacheKey(oe);let De=Pe.programs;Pe.environment=b.isMeshStandardMaterial?K.environment:null,Pe.fog=K.fog,Pe.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||Pe.environment),De===void 0&&(b.addEventListener("dispose",Je),De=new Map,Pe.programs=De);let Ge=De.get(G);if(Ge!==void 0){if(Pe.currentProgram===Ge&&Pe.lightsStateVersion===N)return J(b,oe),Ge}else oe.uniforms=P.getUniforms(b),b.onBuild(ue,oe,F),b.onBeforeCompile(oe,F),Ge=P.acquireProgram(oe,G),De.set(G,Ge),Pe.uniforms=oe.uniforms;const rt=Pe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=Xe.uniform),J(b,oe),Pe.needsLights=Z(b),Pe.lightsStateVersion=N,Pe.needsLights&&(rt.ambientLightColor.value=u.state.ambient,rt.lightProbe.value=u.state.probe,rt.directionalLights.value=u.state.directional,rt.directionalLightShadows.value=u.state.directionalShadow,rt.spotLights.value=u.state.spot,rt.spotLightShadows.value=u.state.spotShadow,rt.rectAreaLights.value=u.state.rectArea,rt.ltc_1.value=u.state.rectAreaLTC1,rt.ltc_2.value=u.state.rectAreaLTC2,rt.pointLights.value=u.state.point,rt.pointLightShadows.value=u.state.pointShadow,rt.hemisphereLights.value=u.state.hemi,rt.directionalShadowMap.value=u.state.directionalShadowMap,rt.directionalShadowMatrix.value=u.state.directionalShadowMatrix,rt.spotShadowMap.value=u.state.spotShadowMap,rt.spotLightMatrix.value=u.state.spotLightMatrix,rt.spotLightMap.value=u.state.spotLightMap,rt.pointShadowMap.value=u.state.pointShadowMap,rt.pointShadowMatrix.value=u.state.pointShadowMatrix),Pe.currentProgram=Ge,Pe.uniformsList=null,Ge}function Ie(b){if(b.uniformsList===null){const K=b.currentProgram.getUniforms();b.uniformsList=pl.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function J(b,K){const ue=Be.get(b);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function nt(b,K,ue,Pe,u){K.isScene!==!0&&(K=z),M.resetTextureUnits();const S=K.fog,N=Pe.isMeshStandardMaterial?K.environment:null,oe=V===null?F.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:gr,G=(Pe.isMeshStandardMaterial?O:v).get(Pe.envMap||N),De=Pe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ge=!!ue.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),rt=!!ue.morphAttributes.position,Mt=!!ue.morphAttributes.normal,Nt=!!ue.morphAttributes.color;let Ct=Fr;Pe.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=F.toneMapping);const sn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Lt=sn!==void 0?sn.length:0,R=Be.get(Pe),Ue=x.state.lights;if(ge===!0&&($e===!0||b!==A)){const _t=b===A&&Pe.id===_e;Xe.setState(Pe,b,_t)}let je=!1;Pe.version===R.__version?(R.needsLights&&R.lightsStateVersion!==Ue.state.version||R.outputColorSpace!==oe||u.isBatchedMesh&&R.batching===!1||!u.isBatchedMesh&&R.batching===!0||u.isInstancedMesh&&R.instancing===!1||!u.isInstancedMesh&&R.instancing===!0||u.isSkinnedMesh&&R.skinning===!1||!u.isSkinnedMesh&&R.skinning===!0||u.isInstancedMesh&&R.instancingColor===!0&&u.instanceColor===null||u.isInstancedMesh&&R.instancingColor===!1&&u.instanceColor!==null||R.envMap!==G||Pe.fog===!0&&R.fog!==S||R.numClippingPlanes!==void 0&&(R.numClippingPlanes!==Xe.numPlanes||R.numIntersection!==Xe.numIntersection)||R.vertexAlphas!==De||R.vertexTangents!==Ge||R.morphTargets!==rt||R.morphNormals!==Mt||R.morphColors!==Nt||R.toneMapping!==Ct||H.isWebGL2===!0&&R.morphTargetsCount!==Lt)&&(je=!0):(je=!0,R.__version=Pe.version);let Ze=R.currentProgram;je===!0&&(Ze=tn(Pe,K,u));let pt=!1,Qe=!1,ot=!1;const Dt=Ze.getUniforms(),Ke=R.uniforms;if(re.useProgram(Ze.program)&&(pt=!0,Qe=!0,ot=!0),Pe.id!==_e&&(_e=Pe.id,Qe=!0),pt||A!==b){Dt.setValue(B,"projectionMatrix",b.projectionMatrix),Dt.setValue(B,"viewMatrix",b.matrixWorldInverse);const _t=Dt.map.cameraPosition;_t!==void 0&&_t.setValue(B,ct.setFromMatrixPosition(b.matrixWorld)),H.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Qe=!0,ot=!0)}if(u.isSkinnedMesh){Dt.setOptional(B,u,"bindMatrix"),Dt.setOptional(B,u,"bindMatrixInverse");const _t=u.skeleton;_t&&(H.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),Dt.setValue(B,"boneTexture",_t.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}u.isBatchedMesh&&(Dt.setOptional(B,u,"batchingTexture"),Dt.setValue(B,"batchingTexture",u._matricesTexture,M));const lt=ue.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0&&H.isWebGL2===!0)&&et.update(u,ue,Ze),(Qe||R.receiveShadow!==u.receiveShadow)&&(R.receiveShadow=u.receiveShadow,Dt.setValue(B,"receiveShadow",u.receiveShadow)),Pe.isMeshGouraudMaterial&&Pe.envMap!==null&&(Ke.envMap.value=G,Ke.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),Qe&&(Dt.setValue(B,"toneMappingExposure",F.toneMappingExposure),R.needsLights&&mt(Ke,ot),S&&Pe.fog===!0&&Q.refreshFogUniforms(Ke,S),Q.refreshMaterialUniforms(Ke,Pe,Le,ke,it),pl.upload(B,Ie(R),Ke,M)),Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(pl.upload(B,Ie(R),Ke,M),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&Dt.setValue(B,"center",u.center),Dt.setValue(B,"modelViewMatrix",u.modelViewMatrix),Dt.setValue(B,"normalMatrix",u.normalMatrix),Dt.setValue(B,"modelMatrix",u.matrixWorld),Pe.isShaderMaterial||Pe.isRawShaderMaterial){const _t=Pe.uniformsGroups;for(let It=0,Bn=_t.length;It<Bn;It++)if(H.isWebGL2){const kn=_t[It];st.update(kn,Ze),st.bind(kn,Ze)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ze}function mt(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function Z(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,K,ue){Be.get(b.texture).__webglTexture=K,Be.get(b.depthTexture).__webglTexture=ue;const Pe=Be.get(b);Pe.__hasExternalTextures=!0,Pe.__hasExternalTextures&&(Pe.__autoAllocateDepthBuffer=ue===void 0,Pe.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Pe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,K){const ue=Be.get(b);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ue=0){V=b,ce=K,q=ue;let Pe=!0,u=null,S=!1,N=!1;if(b){const G=Be.get(b);G.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(B.FRAMEBUFFER,null),Pe=!1):G.__webglFramebuffer===void 0?M.setupRenderTarget(b):G.__hasExternalTextures&&M.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(N=!0);const Ge=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?u=Ge[K][ue]:u=Ge[K],S=!0):H.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?u=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?u=Ge[ue]:u=Ge,U.copy(b.viewport),ee.copy(b.scissor),Y=b.scissorTest}else U.copy(Me).multiplyScalar(Le).floor(),ee.copy(Ve).multiplyScalar(Le).floor(),Y=we;if(re.bindFramebuffer(B.FRAMEBUFFER,u)&&H.drawBuffers&&Pe&&re.drawBuffers(b,u),re.viewport(U),re.scissor(ee),re.setScissorTest(Y),S){const G=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,G.__webglTexture,ue)}else if(N){const G=Be.get(b.texture),De=K||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,G.__webglTexture,ue||0,De)}_e=-1},this.readRenderTargetPixels=function(b,K,ue,Pe,u,S,N){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&N!==void 0&&(oe=oe[N]),oe){re.bindFramebuffer(B.FRAMEBUFFER,oe);try{const G=b.texture,De=G.format,Ge=G.type;if(De!==Li&&Ne.convert(De)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=Ge===co&&(ve.has("EXT_color_buffer_half_float")||H.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==Br&&Ne.convert(Ge)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===kr&&(H.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-Pe&&ue>=0&&ue<=b.height-u&&B.readPixels(K,ue,Pe,u,Ne.convert(De),Ne.convert(Ge),S)}finally{const G=V!==null?Be.get(V).__webglFramebuffer:null;re.bindFramebuffer(B.FRAMEBUFFER,G)}}},this.copyFramebufferToTexture=function(b,K,ue=0){const Pe=Math.pow(2,-ue),u=Math.floor(K.image.width*Pe),S=Math.floor(K.image.height*Pe);M.setTexture2D(K,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,b.x,b.y,u,S),re.unbindTexture()},this.copyTextureToTexture=function(b,K,ue,Pe=0){const u=K.image.width,S=K.image.height,N=Ne.convert(ue.format),oe=Ne.convert(ue.type);M.setTexture2D(ue,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ue.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ue.unpackAlignment),K.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,b.x,b.y,u,S,N,oe,K.image.data):K.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,b.x,b.y,K.mipmaps[0].width,K.mipmaps[0].height,N,K.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Pe,b.x,b.y,N,oe,K.image),Pe===0&&ue.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(b,K,ue,Pe,u=0){if(F.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const S=b.max.x-b.min.x+1,N=b.max.y-b.min.y+1,oe=b.max.z-b.min.z+1,G=Ne.convert(Pe.format),De=Ne.convert(Pe.type);let Ge;if(Pe.isData3DTexture)M.setTexture3D(Pe,0),Ge=B.TEXTURE_3D;else if(Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)M.setTexture2DArray(Pe,0),Ge=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Pe.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Pe.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Pe.unpackAlignment);const rt=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nt=B.getParameter(B.UNPACK_SKIP_PIXELS),Ct=B.getParameter(B.UNPACK_SKIP_ROWS),sn=B.getParameter(B.UNPACK_SKIP_IMAGES),Lt=ue.isCompressedTexture?ue.mipmaps[u]:ue.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),ue.isDataTexture||ue.isData3DTexture?B.texSubImage3D(Ge,u,K.x,K.y,K.z,S,N,oe,G,De,Lt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ge,u,K.x,K.y,K.z,S,N,oe,G,Lt.data)):B.texSubImage3D(Ge,u,K.x,K.y,K.z,S,N,oe,G,De,Lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ct),B.pixelStorei(B.UNPACK_SKIP_IMAGES,sn),u===0&&Pe.generateMipmaps&&B.generateMipmap(Ge),re.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),re.unbindTexture()},this.resetState=function(){ce=0,q=0,V=null,re.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=on.workingColorSpace===Gl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Un?Sa:jd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sa?Un:gr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zA extends _p{}zA.prototype.isWebGL1Renderer=!0;class bu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(e),this.density=t}clone(){return new bu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class WA extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class XA extends li{constructor(e,t,i,r,a,s,o,l,f){super(e,t,i,r,a,s,o,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Zi{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const f=this;r=Math.floor(r),a=Math.floor(a);const _=[],h=[],g=[],E=[];let T=0;const y=[],x=i/2;let p=0;W(),s===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(E,2));function W(){const k=new We,ce=new We;let q=0;const V=(t-e)/i;for(let _e=0;_e<=a;_e++){const A=[],U=_e/a,ee=U*(t-e)+e;for(let Y=0;Y<=r;Y++){const de=Y/r,X=de*l+o,j=Math.sin(X),ke=Math.cos(X);ce.x=ee*j,ce.y=-U*i+x,ce.z=ee*ke,h.push(ce.x,ce.y,ce.z),k.set(j,V,ke).normalize(),g.push(k.x,k.y,k.z),E.push(de,1-U),A.push(T++)}y.push(A)}for(let _e=0;_e<r;_e++)for(let A=0;A<a;A++){const U=y[A][_e],ee=y[A+1][_e],Y=y[A+1][_e+1],de=y[A][_e+1];_.push(U,ee,de),_.push(ee,Y,de),q+=6}f.addGroup(p,q,0),p+=q}function F(k){const ce=T,q=new en,V=new We;let _e=0;const A=k===!0?e:t,U=k===!0?1:-1;for(let Y=1;Y<=r;Y++)h.push(0,x*U,0),g.push(0,U,0),E.push(.5,.5),T++;const ee=T;for(let Y=0;Y<=r;Y++){const X=Y/r*l+o,j=Math.cos(X),ke=Math.sin(X);V.x=A*ke,V.y=x*U,V.z=A*j,h.push(V.x,V.y,V.z),g.push(0,U,0),q.x=j*.5+.5,q.y=ke*.5*U+.5,E.push(q.x,q.y),T++}for(let Y=0;Y<r;Y++){const de=ce+Y,X=ee+Y;k===!0?_.push(X,X+1,de):_.push(X+1,X,de),_e+=3}f.addGroup(p,_e,k===!0?1:2),p+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Is extends fo{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Is(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yu extends Zi{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let f=0;const _=[],h=new We,g=new We,E=[],T=[],y=[],x=[];for(let p=0;p<=i;p++){const W=[],F=p/i;let k=0;p===0&&s===0?k=.5/t:p===i&&l===Math.PI&&(k=-.5/t);for(let ce=0;ce<=t;ce++){const q=ce/t;h.x=-e*Math.cos(r+q*a)*Math.sin(s+F*o),h.y=e*Math.cos(s+F*o),h.z=e*Math.sin(r+q*a)*Math.sin(s+F*o),T.push(h.x,h.y,h.z),g.copy(h).normalize(),y.push(g.x,g.y,g.z),x.push(q+k,1-F),W.push(f++)}_.push(W)}for(let p=0;p<i;p++)for(let W=0;W<t;W++){const F=_[p][W+1],k=_[p][W],ce=_[p+1][W],q=_[p+1][W+1];(p!==0||s>0)&&E.push(F,k,q),(p!==i-1||l<Math.PI)&&E.push(k,ce,q)}this.setIndex(E),this.setAttribute("position",new jn(T,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wu extends Zi{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],f=[],_=new We,h=new We,g=new We;for(let E=0;E<=i;E++)for(let T=0;T<=r;T++){const y=T/r*a,x=E/i*Math.PI*2;h.x=(e+t*Math.cos(x))*Math.cos(y),h.y=(e+t*Math.cos(x))*Math.sin(y),h.z=t*Math.sin(x),o.push(h.x,h.y,h.z),_.x=e*Math.cos(y),_.y=e*Math.sin(y),g.subVectors(h,_).normalize(),l.push(g.x,g.y,g.z),f.push(T/r),f.push(E/i)}for(let E=1;E<=i;E++)for(let T=1;T<=r;T++){const y=(r+1)*E+T-1,x=(r+1)*(E-1)+T-1,p=(r+1)*(E-1)+T,W=(r+1)*E+T;s.push(y,x,W),s.push(x,p,W)}this.setIndex(s),this.setAttribute("position",new jn(o,3)),this.setAttribute("normal",new jn(l,3)),this.setAttribute("uv",new jn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wl extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new en(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ru extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class KA extends Ru{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kc=new wn,Bh=new We,Gh=new We;class mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new en(512,512),this.map=null,this.mapPass=null,this.matrix=new wn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new en(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vh=new wn,eo=new We,Lc=new We;class jA extends mp{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new en(4,2),this._viewportCount=6,this._viewports=[new vn(2,1,1,1),new vn(0,1,1,1),new vn(3,1,1,1),new vn(1,1,1,1),new vn(3,0,1,1),new vn(1,0,1,1)],this._cubeDirections=[new We(1,0,0),new We(-1,0,0),new We(0,0,1),new We(0,0,-1),new We(0,1,0),new We(0,-1,0)],this._cubeUps=[new We(0,1,0),new We(0,1,0),new We(0,1,0),new We(0,1,0),new We(0,0,1),new We(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(eo),Lc.copy(i.position),Lc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lc),i.updateMatrixWorld(),r.makeTranslation(-eo.x,-eo.y,-eo.z),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class qA extends Ru{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $A extends mp{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends Ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new $A}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);var YA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ZA(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Mn={},nn={},Ut={},Wt={};const JA={},QA=Object.freeze(Object.defineProperty({__proto__:null,default:JA},Symbol.toStringTag,{value:"Module"})),Kn=ZA(QA);var Hh;function Ei(){if(Hh)return Wt;Hh=1;var n={};const e=n.FENGARICONF?JSON.parse(n.FENGARICONF):{},{LUA_VERSION_MAJOR:t,LUA_VERSION_MINOR:i,to_luastring:r}=Dn(),a=";";Wt.LUA_PATH_SEP=a;const s="?";Wt.LUA_PATH_MARK=s;const o="!";Wt.LUA_EXEC_DIR=o;const l=t+"."+i;if(Wt.LUA_VDIR=l,typeof process>"u"){const A="/";Wt.LUA_DIRSEP=A;const U="./lua/"+l+"/";Wt.LUA_LDIR=U;const ee=U;Wt.LUA_JSDIR=ee;const Y=r(U+"?.lua;"+U+"?/init.lua;./?.lua;./?/init.lua");Wt.LUA_PATH_DEFAULT=Y;const de=r(ee+"?.js;"+ee+"loadall.js;./?.js");Wt.LUA_JSPATH_DEFAULT=de}else if(Kn.platform()==="win32"){const A="\\";Wt.LUA_DIRSEP=A;const U="!\\lua\\";Wt.LUA_LDIR=U;const ee="!\\";Wt.LUA_JSDIR=ee;const Y="!\\..\\share\\lua\\"+l+"\\";Wt.LUA_SHRDIR=Y;const de=r(U+"?.lua;"+U+"?\\init.lua;"+ee+"?.lua;"+ee+"?\\init.lua;"+Y+"?.lua;"+Y+"?\\init.lua;.\\?.lua;.\\?\\init.lua");Wt.LUA_PATH_DEFAULT=de;const X=r(ee+"?.js;"+ee+"..\\share\\lua\\"+l+"\\?.js;"+ee+"loadall.js;.\\?.js");Wt.LUA_JSPATH_DEFAULT=X}else{const A="/";Wt.LUA_DIRSEP=A;const U="/usr/local/";Wt.LUA_ROOT=U;const ee="/usr/",Y=U+"share/lua/"+l+"/",de=ee+"share/lua/"+l+"/";Wt.LUA_LDIR=Y;const X=Y;Wt.LUA_JSDIR=X;const j=de,ke=r(Y+"?.lua;"+Y+"?/init.lua;"+de+"?.lua;"+de+"?/init.lua;./?.lua;./?/init.lua");Wt.LUA_PATH_DEFAULT=ke;const Le=r(X+"?.js;"+X+"loadall.js;"+j+"?.js;"+j+"loadall.js;./?.js");Wt.LUA_JSPATH_DEFAULT=Le}const f=e.LUA_COMPAT_FLOATSTRING||!1,_=2147483647,h=-2147483648,g=e.LUAI_MAXSTACK||1e6,E=e.LUA_IDSIZE||59,T=function(A){return String(A)},y=function(A){return String(Number(A.toPrecision(14)))},x=function(A){return A>=h&&A<-h?A:!1},p="",W="",F=`%${p}d`,k="%.14g",ce=function(){return 46},q=e.LUAL_BUFFERSIZE||8192,V=function(A){if(A===0)return[A,0];var U=new DataView(new ArrayBuffer(8));U.setFloat64(0,A);var ee=U.getUint32(0)>>>20&2047;ee===0&&(U.setFloat64(0,A*Math.pow(2,64)),ee=(U.getUint32(0)>>>20&2047)-64);var Y=ee-1022,de=_e(A,-Y);return[de,Y]},_e=function(A,U){for(var ee=Math.min(3,Math.ceil(Math.abs(U)/1023)),Y=A,de=0;de<ee;de++)Y*=Math.pow(2,Math.floor((U+de)/ee));return Y};return Wt.LUAI_MAXSTACK=g,Wt.LUA_COMPAT_FLOATSTRING=f,Wt.LUA_IDSIZE=E,Wt.LUA_INTEGER_FMT=F,Wt.LUA_INTEGER_FRMLEN=p,Wt.LUA_MAXINTEGER=_,Wt.LUA_MININTEGER=h,Wt.LUA_NUMBER_FMT=k,Wt.LUA_NUMBER_FRMLEN=W,Wt.LUAL_BUFFERSIZE=q,Wt.frexp=V,Wt.ldexp=_e,Wt.lua_getlocaledecpoint=ce,Wt.lua_integer2str=T,Wt.lua_number2str=y,Wt.lua_numbertointeger=x,Wt}var zh;function Dn(){if(zh)return Ut;zh=1;let n;typeof Uint8Array.from=="function"?n=Uint8Array.from.bind(Uint8Array):n=function(O){let Te=0,Se=O.length,Oe=new Uint8Array(Se);for(;Se>Te;)Oe[Te]=O[Te++];return Oe};let e;if(typeof new Uint8Array().indexOf=="function")e=function(O,Te,Se){return O.indexOf(Te,Se)};else{let O=[].indexOf;if(O.call(new Uint8Array(1),0)!==0)throw Error("missing .indexOf");e=function(Te,Se,Oe){return O.call(Te,Se,Oe)}}let t;typeof Uint8Array.of=="function"?t=Uint8Array.of.bind(Uint8Array):t=function(){return n(arguments)};const i=function(O){return O instanceof Uint8Array},r=function(O,Te){if(O!==Te){let Se=O.length;if(Se!==Te.length)return!1;for(let Oe=0;Oe<Se;Oe++)if(O[Oe]!==Te[Oe])return!1}return!0},a="cannot convert invalid utf8 to javascript string",s=function(O,Te,Se,Oe){if(!i(O))throw new TypeError("to_jsstring expects a Uint8Array");Se===void 0?Se=O.length:Se=Math.min(O.length,Se);let P="";for(let Q=Te!==void 0?Te:0;Q<Se;){let ie=O[Q++];if(ie<128)P+=String.fromCharCode(ie);else if(ie<194||ie>244){if(!Oe)throw RangeError(a);P+="�"}else if(ie<=223){if(Q>=Se){if(!Oe)throw RangeError(a);P+="�";continue}let xe=O[Q++];if((xe&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}P+=String.fromCharCode(((ie&31)<<6)+(xe&63))}else if(ie<=239){if(Q+1>=Se){if(!Oe)throw RangeError(a);P+="�";continue}let xe=O[Q++];if((xe&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}let Xe=O[Q++];if((Xe&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}let ze=((ie&15)<<12)+((xe&63)<<6)+(Xe&63);if(ze<=65535)P+=String.fromCharCode(ze);else{ze-=65536;let dt=(ze>>10)+55296,et=ze%1024+56320;P+=String.fromCharCode(dt,et)}}else{if(Q+2>=Se){if(!Oe)throw RangeError(a);P+="�";continue}let xe=O[Q++];if((xe&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}let Xe=O[Q++];if((Xe&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}let ze=O[Q++];if((ze&192)!==128){if(!Oe)throw RangeError(a);P+="�";continue}let dt=((ie&7)<<18)+((xe&63)<<12)+((Xe&63)<<6)+(ze&63);dt-=65536;let et=(dt>>10)+55296,te=dt%1024+56320;P+=String.fromCharCode(et,te)}}return P},o=";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#".split("").reduce(function(O,Te){return O[Te.charCodeAt(0)]=!0,O},{}),l=function(O){if(!i(O))throw new TypeError("to_uristring expects a Uint8Array");let Te="";for(let Se=0;Se<O.length;Se++){let Oe=O[Se];o[Oe]?Te+=String.fromCharCode(Oe):Te+="%"+(Oe<16?"0":"")+Oe.toString(16)}return Te},f={},_=function(O,Te){if(typeof O!="string")throw new TypeError("to_luastring expects a javascript string");if(Te){let Q=f[O];if(i(Q))return Q}let Se=O.length,Oe=Array(Se),P=0;for(let Q=0;Q<Se;++Q){let ie=O.charCodeAt(Q);if(ie<=127)Oe[P++]=ie;else if(ie<=2047)Oe[P++]=192|ie>>6,Oe[P++]=128|ie&63;else{if(ie>=55296&&ie<=56319&&Q+1<Se){let xe=O.charCodeAt(Q+1);xe>=56320&&xe<=57343&&(Q++,ie=(ie-55296)*1024+xe+9216)}ie<=65535?(Oe[P++]=224|ie>>12,Oe[P++]=128|ie>>6&63,Oe[P++]=128|ie&63):(Oe[P++]=240|ie>>18,Oe[P++]=128|ie>>12&63,Oe[P++]=128|ie>>6&63,Oe[P++]=128|ie&63)}}return Oe=n(Oe),Te&&(f[O]=Oe),Oe},h=function(O){if(!i(O))if(typeof O=="string")O=_(O);else throw new TypeError("expects an array of bytes or javascript string");return O};Ut.luastring_from=n,Ut.luastring_indexOf=e,Ut.luastring_of=t,Ut.is_luastring=i,Ut.luastring_eq=r,Ut.to_jsstring=s,Ut.to_uristring=l,Ut.to_luastring=_,Ut.from_userstring=h;const g=_("\x1BLua"),E="5",T="3",y=503,x="4",p="Lua "+E+"."+T,W=p+"."+x,F=W+"  Copyright (C) 1994-2017 Lua.org, PUC-Rio",k="R. Ierusalimschy, L. H. de Figueiredo, W. Celes";Ut.LUA_SIGNATURE=g,Ut.LUA_VERSION_MAJOR=E,Ut.LUA_VERSION_MINOR=T,Ut.LUA_VERSION_NUM=y,Ut.LUA_VERSION_RELEASE=x,Ut.LUA_VERSION=p,Ut.LUA_RELEASE=W,Ut.LUA_COPYRIGHT=F,Ut.LUA_AUTHORS=k;const ce={LUA_OK:0,LUA_YIELD:1,LUA_ERRRUN:2,LUA_ERRSYNTAX:3,LUA_ERRMEM:4,LUA_ERRGCMM:5,LUA_ERRERR:6},q={LUA_TNONE:-1,LUA_TNIL:0,LUA_TBOOLEAN:1,LUA_TLIGHTUSERDATA:2,LUA_TNUMBER:3,LUA_TSTRING:4,LUA_TTABLE:5,LUA_TFUNCTION:6,LUA_TUSERDATA:7,LUA_TTHREAD:8,LUA_NUMTAGS:9};q.LUA_TSHRSTR=q.LUA_TSTRING|0,q.LUA_TLNGSTR=q.LUA_TSTRING|16,q.LUA_TNUMFLT=q.LUA_TNUMBER|0,q.LUA_TNUMINT=q.LUA_TNUMBER|16,q.LUA_TLCL=q.LUA_TFUNCTION|0,q.LUA_TLCF=q.LUA_TFUNCTION|16,q.LUA_TCCL=q.LUA_TFUNCTION|32;const V=0,_e=1,A=2,U=3,ee=4,Y=5,de=6,X=7,j=8,ke=9,Le=10,Ce=11,pe=12,Me=13,Ve=0,we=1,se=2,ge=20,{LUAI_MAXSTACK:$e}=Ei(),it=-$e-1e3,Ye=function(O){return it-O},ht=1,ct=2,z=ct;class ne{constructor(){this.event=NaN,this.name=null,this.namewhat=null,this.what=null,this.source=null,this.currentline=NaN,this.linedefined=NaN,this.lastlinedefined=NaN,this.nups=NaN,this.nparams=NaN,this.isvararg=NaN,this.istailcall=NaN,this.short_src=null,this.i_ci=null}}const B=0,Ae=1,ve=2,H=3,re=4,le=1<<B,Be=1<<Ae,M=1<<ve,v=1<<H;return Ut.LUA_HOOKCALL=B,Ut.LUA_HOOKCOUNT=H,Ut.LUA_HOOKLINE=ve,Ut.LUA_HOOKRET=Ae,Ut.LUA_HOOKTAILCALL=re,Ut.LUA_MASKCALL=le,Ut.LUA_MASKCOUNT=v,Ut.LUA_MASKLINE=M,Ut.LUA_MASKRET=Be,Ut.LUA_MINSTACK=ge,Ut.LUA_MULTRET=-1,Ut.LUA_OPADD=V,Ut.LUA_OPBAND=X,Ut.LUA_OPBNOT=Me,Ut.LUA_OPBOR=j,Ut.LUA_OPBXOR=ke,Ut.LUA_OPDIV=Y,Ut.LUA_OPEQ=Ve,Ut.LUA_OPIDIV=de,Ut.LUA_OPLE=se,Ut.LUA_OPLT=we,Ut.LUA_OPMOD=U,Ut.LUA_OPMUL=A,Ut.LUA_OPPOW=ee,Ut.LUA_OPSHL=Le,Ut.LUA_OPSHR=Ce,Ut.LUA_OPSUB=_e,Ut.LUA_OPUNM=pe,Ut.LUA_REGISTRYINDEX=it,Ut.LUA_RIDX_GLOBALS=ct,Ut.LUA_RIDX_LAST=z,Ut.LUA_RIDX_MAINTHREAD=ht,Ut.constant_types=q,Ut.lua_Debug=ne,Ut.lua_upvalueindex=Ye,Ut.thread_status=ce,Ut}const Ji=Dn(),vp="0",xp="1",eS=1,Ep="5",Ap="Fengari "+vp+"."+xp,Sp=Ap+"."+Ep,Tp="B. Giannangeli, Daurnimator",tS=Sp+"  Copyright (C) 2017-2019 "+Tp+`
Based on: `+Ji.LUA_COPYRIGHT;nn.FENGARI_AUTHORS=Tp;nn.FENGARI_COPYRIGHT=tS;nn.FENGARI_RELEASE=Sp;nn.FENGARI_VERSION=Ap;nn.FENGARI_VERSION_MAJOR=vp;nn.FENGARI_VERSION_MINOR=xp;nn.FENGARI_VERSION_NUM=eS;nn.FENGARI_VERSION_RELEASE=Ep;nn.is_luastring=Ji.is_luastring;nn.luastring_eq=Ji.luastring_eq;nn.luastring_from=Ji.luastring_from;nn.luastring_indexOf=Ji.luastring_indexOf;nn.luastring_of=Ji.luastring_of;nn.to_jsstring=Ji.to_jsstring;nn.to_luastring=Ji.to_luastring;nn.to_uristring=Ji.to_uristring;nn.from_userstring=Ji.from_userstring;var be={},ut={},Rn={};const nS=function(n){if(!n)throw Error("assertion failed")};Rn.lua_assert=nS;const iS=function(n,e,t){if(!e)throw Error(t)};Rn.api_check=iS;const rS=200;Rn.LUAI_MAXCCALLS=rS;const aS=32;Rn.LUA_MINBUFFER=aS;const sS=function(n,e,t){let i=e%t;return i*t<0&&(i+=t),i};Rn.luai_nummod=sS;const oS=2147483647;Rn.MAX_INT=oS;const lS=-2147483648;Rn.MIN_INT=lS;var Cn={},bn={},lr={},pn={},Kr={};const{luastring_of:cS}=Dn(),Ds=cS(0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,22,22,22,22,22,22,22,22,22,22,4,4,4,4,4,4,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,5,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),Mp=0,bp=1,uS=2,fS=3,hS=4,dS=function(n){return(Ds[n+1]&1<<bp)!==0},pS=function(n){return(Ds[n+1]&1<<hS)!==0},_S=function(n){return(Ds[n+1]&1<<uS)!==0},mS=function(n){return(Ds[n+1]&1<<fS)!==0},gS=function(n){return(Ds[n+1]&1<<Mp)!==0},vS=function(n){return(Ds[n+1]&(1<<Mp|1<<bp))!==0};Kr.lisdigit=dS;Kr.lislalnum=vS;Kr.lislalpha=gS;Kr.lisprint=_S;Kr.lisspace=mS;Kr.lisxdigit=pS;var yn={},Ti={},qn={};const{is_luastring:xS,luastring_eq:ES,luastring_from:AS,to_luastring:SS}=Dn(),{lua_assert:ho}=Rn;class po{constructor(e,t){this.hash=null,this.realstring=t}getstr(){return this.realstring}tsslen(){return this.realstring.length}}const TS=function(n,e){return ho(n instanceof po),ho(e instanceof po),n==e||ES(n.realstring,e.realstring)},yp=function(n){ho(xS(n));let e=n.length,t="|";for(let i=0;i<e;i++)t+=n[i].toString(16);return t},MS=function(n){return ho(n instanceof po),n.hash===null&&(n.hash=yp(n.getstr())),n.hash},Cu=function(n,e){return ho(e instanceof Uint8Array),new po(n,e)},bS=function(n,e){return Cu(n,AS(e))},yS=function(n,e){return Cu(n,SS(e))};qn.luaS_eqlngstr=TS;qn.luaS_hash=yp;qn.luaS_hashlongstr=MS;qn.luaS_bless=Cu;qn.luaS_new=bS;qn.luaS_newliteral=yS;qn.TString=po;var Wh;function xr(){if(Wh)return Ti;Wh=1;const{constant_types:{LUA_TBOOLEAN:n,LUA_TCCL:e,LUA_TLCF:t,LUA_TLCL:i,LUA_TLIGHTUSERDATA:r,LUA_TLNGSTR:a,LUA_TNIL:s,LUA_TNUMFLT:o,LUA_TNUMINT:l,LUA_TSHRSTR:f,LUA_TTABLE:_,LUA_TTHREAD:h,LUA_TUSERDATA:g},to_luastring:E}=Dn(),{LUA_MAXINTEGER:T}=Ei(),{lua_assert:y}=Rn,x=qr(),p=Ci(),{luaS_hashlongstr:W,TString:F}=qn,k=jr();let ce=new WeakMap;const q=function(we){let se=ce.get(we);return se||(se={},ce.set(we,se)),se},V=function(we,se){switch(se.type){case s:return x.luaG_runerror(we,E("table index is nil",!0));case o:if(isNaN(se.value))return x.luaG_runerror(we,E("table index is NaN",!0));case l:case n:case _:case i:case t:case e:case g:case h:return se.value;case f:case a:return W(se.tsvalue());case r:{let ge=se.value;switch(typeof ge){case"string":return"*"+ge;case"number":return"#"+ge;case"boolean":return ge?"?true":"?false";case"function":return q(ge);case"object":if(ge instanceof k.lua_State&&ge.l_G===we.l_G||ge instanceof _e||ge instanceof p.Udata||ge instanceof p.LClosure||ge instanceof p.CClosure)return q(ge);default:return ge}}default:throw new Error("unknown key type: "+se.type)}};class _e{constructor(se){this.id=se.l_G.id_counter++,this.strong=new Map,this.dead_strong=new Map,this.dead_weak=void 0,this.f=void 0,this.l=void 0,this.metatable=null,this.flags=-1}}const A=function(we){we.flags=0},U=function(we,se,ge,$e){we.dead_strong.clear(),we.dead_weak=void 0;let it=null,Ye={key:ge,value:$e,p:it=we.l,n:void 0};we.f||(we.f=Ye),it&&(it.n=Ye),we.strong.set(se,Ye),we.l=Ye},ee=function(we){return typeof we=="object"?we!==null:typeof we=="function"},Y=function(we,se){let ge=we.strong.get(se);if(ge){ge.key.setdeadvalue(),ge.value=void 0;let $e=ge.n,it=ge.p;ge.p=void 0,it&&(it.n=$e),$e&&($e.p=it),we.f===ge&&(we.f=$e),we.l===ge&&(we.l=it),we.strong.delete(se),ee(se)?(we.dead_weak||(we.dead_weak=new WeakMap),we.dead_weak.set(se,ge)):we.dead_strong.set(se,ge)}},de=function(we){return new _e(we)},X=function(we,se){let ge=we.strong.get(se);return ge?ge.value:p.luaO_nilobject},j=function(we,se){return y(typeof se=="number"&&(se|0)===se),X(we,se)},ke=function(we,se){return y(se instanceof F),X(we,W(se))},Le=function(we,se,ge){return y(ge instanceof p.TValue),ge.ttisnil()||ge.ttisfloat()&&isNaN(ge.value)?p.luaO_nilobject:X(se,V(we,ge))},Ce=function(we,se,ge){y(typeof se=="number"&&(se|0)===se&&ge instanceof p.TValue);let $e=se;if(ge.ttisnil()){Y(we,$e);return}let it=we.strong.get($e);if(it)it.value.setfrom(ge);else{let Ye=new p.TValue(l,se),ht=new p.TValue(ge.type,ge.value);U(we,$e,Ye,ht)}},pe=function(we,se,ge,$e){y(ge instanceof p.TValue);let it=V(we,ge);if($e.ttisnil()){Y(se,it);return}let Ye=se.strong.get(it);if(Ye)Ye.value.setfrom($e);else{let ht,ct=ge.value;ge.ttisfloat()&&(ct|0)===ct?ht=new p.TValue(l,ct):ht=new p.TValue(ge.type,ct);let z=new p.TValue($e.type,$e.value);U(se,it,ht,z)}},Me=function(we){let se=0,ge=we.strong.size+1;for(;!j(we,ge).ttisnil();){if(se=ge,ge>T/2){for(se=1;!j(we,se).ttisnil();)se++;return se-1}ge*=2}for(;ge-se>1;){let $e=Math.floor((se+ge)/2);j(we,$e).ttisnil()?ge=$e:se=$e}return se},Ve=function(we,se,ge){let $e=we.stack[ge],it;if($e.type===s){if(it=se.f,!it)return!1}else{let Ye=V(we,$e);if(it=se.strong.get(Ye),it){if(it=it.n,!it)return!1}else{if(it=se.dead_weak&&se.dead_weak.get(Ye)||se.dead_strong.get(Ye),!it)return x.luaG_runerror(we,E("invalid key to 'next'"));do if(it=it.n,!it)return!1;while(it.key.ttisdeadkey())}}return p.setobj2s(we,ge,it.key),p.setobj2s(we,ge+1,it.value),!0};return Ti.invalidateTMcache=A,Ti.luaH_get=Le,Ti.luaH_getint=j,Ti.luaH_getn=Me,Ti.luaH_getstr=ke,Ti.luaH_setfrom=pe,Ti.luaH_setint=Ce,Ti.luaH_new=de,Ti.luaH_next=Ve,Ti.Table=_e,Ti}var di={},An={},wt={};const wS=["MOVE","LOADK","LOADKX","LOADBOOL","LOADNIL","GETUPVAL","GETTABUP","GETTABLE","SETTABUP","SETUPVAL","SETTABLE","NEWTABLE","SELF","ADD","SUB","MUL","MOD","POW","DIV","IDIV","BAND","BOR","BXOR","SHL","SHR","UNM","BNOT","NOT","LEN","CONCAT","JMP","EQ","LT","LE","TEST","TESTSET","CALL","TAILCALL","RETURN","FORLOOP","FORPREP","TFORCALL","TFORLOOP","SETLIST","CLOSURE","VARARG","EXTRAARG"],RS={OP_MOVE:0,OP_LOADK:1,OP_LOADKX:2,OP_LOADBOOL:3,OP_LOADNIL:4,OP_GETUPVAL:5,OP_GETTABUP:6,OP_GETTABLE:7,OP_SETTABUP:8,OP_SETUPVAL:9,OP_SETTABLE:10,OP_NEWTABLE:11,OP_SELF:12,OP_ADD:13,OP_SUB:14,OP_MUL:15,OP_MOD:16,OP_POW:17,OP_DIV:18,OP_IDIV:19,OP_BAND:20,OP_BOR:21,OP_BXOR:22,OP_SHL:23,OP_SHR:24,OP_UNM:25,OP_BNOT:26,OP_NOT:27,OP_LEN:28,OP_CONCAT:29,OP_JMP:30,OP_EQ:31,OP_LT:32,OP_LE:33,OP_TEST:34,OP_TESTSET:35,OP_CALL:36,OP_TAILCALL:37,OP_RETURN:38,OP_FORLOOP:39,OP_FORPREP:40,OP_TFORCALL:41,OP_TFORLOOP:42,OP_SETLIST:43,OP_CLOSURE:44,OP_VARARG:45,OP_EXTRAARG:46},Sn=0,En=1,Jn=2,Kt=3,Ht=0,_l=1,no=2,wp=3,Uo=[64|Jn<<4|Sn<<2|Ht,64|Kt<<4|Sn<<2|_l,64|Sn<<4|Sn<<2|_l,64|En<<4|En<<2|Ht,64|En<<4|Sn<<2|Ht,64|En<<4|Sn<<2|Ht,64|En<<4|Kt<<2|Ht,64|Jn<<4|Kt<<2|Ht,0|Kt<<4|Kt<<2|Ht,0|En<<4|Sn<<2|Ht,0|Kt<<4|Kt<<2|Ht,64|En<<4|En<<2|Ht,64|Jn<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Kt<<4|Kt<<2|Ht,64|Jn<<4|Sn<<2|Ht,64|Jn<<4|Sn<<2|Ht,64|Jn<<4|Sn<<2|Ht,64|Jn<<4|Sn<<2|Ht,64|Jn<<4|Jn<<2|Ht,0|Jn<<4|Sn<<2|no,128|Kt<<4|Kt<<2|Ht,128|Kt<<4|Kt<<2|Ht,128|Kt<<4|Kt<<2|Ht,128|Sn<<4|En<<2|Ht,192|Jn<<4|En<<2|Ht,64|En<<4|En<<2|Ht,64|En<<4|En<<2|Ht,0|En<<4|Sn<<2|Ht,64|Jn<<4|Sn<<2|no,64|Jn<<4|Sn<<2|no,0|Sn<<4|En<<2|Ht,64|Jn<<4|Sn<<2|no,0|En<<4|En<<2|Ht,64|En<<4|Sn<<2|_l,64|En<<4|Sn<<2|Ht,0|En<<4|En<<2|wp],CS=function(n){return Uo[n]&3},US=function(n){return Uo[n]>>4&3},OS=function(n){return Uo[n]>>2&3},PS=function(n){return Uo[n]&64},NS=function(n){return Uo[n]&128},Hr=9,zr=9,va=Hr+zr,wa=8,_o=Hr+zr+wa,bs=6,qi=0,Wr=qi+bs,Ra=Wr+wa,mo=Ra+Hr,xa=Ra,go=Wr,Rp=(1<<va)-1,Rl=Rp>>1,IS=(1<<_o)-1,Cp=(1<<wa)-1,DS=(1<<zr)-1,kS=(1<<Hr)-1,Oo=1<<zr-1,LS=Oo-1,FS=Cp,BS=function(n){return n&Oo},GS=function(n){return n&~Oo},VS=function(n){return n|Oo},Gn=function(n,e){return~(-1<<n)<<e},Up=function(n,e){return~Gn(n,e)},HS=function(n){return n.opcode},zS=function(n,e){return n.code=n.code&Up(bs,qi)|e<<qi&Gn(bs,qi),ks(n)},Po=function(n,e,t,i){return n.code=n.code&Up(i,t)|e<<t&Gn(i,t),ks(n)},WS=function(n){return n.A},XS=function(n,e){return Po(n,e,Wr,wa)},KS=function(n){return n.B},jS=function(n,e){return Po(n,e,mo,zr)},qS=function(n){return n.C},$S=function(n,e){return Po(n,e,Ra,Hr)},YS=function(n){return n.Bx},Op=function(n,e){return Po(n,e,xa,va)},ZS=function(n){return n.Ax},JS=function(n,e){return Po(n,e,go,_o)},QS=function(n){return n.sBx},eT=function(n,e){return Op(n,e+Rl)},ks=function(n){if(typeof n=="number")return{code:n,opcode:n>>qi&Gn(bs,0),A:n>>Wr&Gn(wa,0),B:n>>mo&Gn(zr,0),C:n>>Ra&Gn(Hr,0),Bx:n>>xa&Gn(va,0),Ax:n>>go&Gn(_o,0),sBx:(n>>xa&Gn(va,0))-Rl};{let e=n.code;return n.opcode=e>>qi&Gn(bs,0),n.A=e>>Wr&Gn(wa,0),n.B=e>>mo&Gn(zr,0),n.C=e>>Ra&Gn(Hr,0),n.Bx=e>>xa&Gn(va,0),n.Ax=e>>go&Gn(_o,0),n.sBx=(e>>xa&Gn(va,0))-Rl,n}},tT=function(n,e,t,i){return ks(n<<qi|e<<Wr|t<<mo|i<<Ra)},nT=function(n,e,t){return ks(n<<qi|e<<Wr|t<<xa)},iT=function(n,e){return ks(n<<qi|e<<go)},rT=50;wt.BITRK=Oo;wt.CREATE_ABC=tT;wt.CREATE_ABx=nT;wt.CREATE_Ax=iT;wt.GET_OPCODE=HS;wt.GETARG_A=WS;wt.GETARG_B=KS;wt.GETARG_C=qS;wt.GETARG_Bx=YS;wt.GETARG_Ax=ZS;wt.GETARG_sBx=QS;wt.INDEXK=GS;wt.ISK=BS;wt.LFIELDS_PER_FLUSH=rT;wt.MAXARG_A=Cp;wt.MAXARG_Ax=IS;wt.MAXARG_B=DS;wt.MAXARG_Bx=Rp;wt.MAXARG_C=kS;wt.MAXARG_sBx=Rl;wt.MAXINDEXRK=LS;wt.NO_REG=FS;wt.OpArgK=Kt;wt.OpArgN=Sn;wt.OpArgR=Jn;wt.OpArgU=En;wt.OpCodes=wS;wt.OpCodesI=RS;wt.POS_A=Wr;wt.POS_Ax=go;wt.POS_B=mo;wt.POS_Bx=xa;wt.POS_C=Ra;wt.POS_OP=qi;wt.RKASK=VS;wt.SETARG_A=XS;wt.SETARG_Ax=JS;wt.SETARG_B=jS;wt.SETARG_Bx=Op;wt.SETARG_C=$S;wt.SETARG_sBx=eT;wt.SET_OPCODE=zS;wt.SIZE_A=wa;wt.SIZE_Ax=_o;wt.SIZE_B=zr;wt.SIZE_Bx=va;wt.SIZE_C=Hr;wt.SIZE_OP=bs;wt.fullins=ks;wt.getBMode=US;wt.getCMode=OS;wt.getOpMode=CS;wt.iABC=Ht;wt.iABx=_l;wt.iAsBx=no;wt.iAx=wp;wt.testAMode=PS;wt.testTMode=NS;var Xh;function Ls(){if(Xh)return An;Xh=1;const{LUA_MASKLINE:n,LUA_MASKCOUNT:e,LUA_MULTRET:t,constant_types:{LUA_TBOOLEAN:i,LUA_TLCF:r,LUA_TLIGHTUSERDATA:a,LUA_TLNGSTR:s,LUA_TNIL:o,LUA_TNUMBER:l,LUA_TNUMFLT:f,LUA_TNUMINT:_,LUA_TSHRSTR:h,LUA_TTABLE:g,LUA_TUSERDATA:E},to_luastring:T}=Dn(),{INDEXK:y,ISK:x,LFIELDS_PER_FLUSH:p,OpCodesI:{OP_ADD:W,OP_BAND:F,OP_BNOT:k,OP_BOR:ce,OP_BXOR:q,OP_CALL:V,OP_CLOSURE:_e,OP_CONCAT:A,OP_DIV:U,OP_EQ:ee,OP_EXTRAARG:Y,OP_FORLOOP:de,OP_FORPREP:X,OP_GETTABLE:j,OP_GETTABUP:ke,OP_GETUPVAL:Le,OP_IDIV:Ce,OP_JMP:pe,OP_LE:Me,OP_LEN:Ve,OP_LOADBOOL:we,OP_LOADK:se,OP_LOADKX:ge,OP_LOADNIL:$e,OP_LT:it,OP_MOD:Ye,OP_MOVE:ht,OP_MUL:ct,OP_NEWTABLE:z,OP_NOT:ne,OP_POW:B,OP_RETURN:Ae,OP_SELF:ve,OP_SETLIST:H,OP_SETTABLE:re,OP_SETTABUP:le,OP_SETUPVAL:Be,OP_SHL:M,OP_SHR:v,OP_SUB:O,OP_TAILCALL:Te,OP_TEST:Se,OP_TESTSET:Oe,OP_TFORCALL:P,OP_TFORLOOP:Q,OP_UNM:ie,OP_VARARG:xe}}=wt,{LUA_MAXINTEGER:Xe,LUA_MININTEGER:ze,lua_numbertointeger:dt}=Ei(),{lua_assert:et,luai_nummod:te}=Rn,fe=Ci(),Ne=Bs(),qe=jr(),{luaS_bless:st,luaS_eqlngstr:C,luaS_hashlongstr:Re}=qn,he=Qi(),L=Fs(),ye=xr(),Je=qr(),tt=function(R){let Ue=R.ci,je=Ue.l_base,Ze=Ue.l_code[Ue.l_savedpc-1],pt=Ze.opcode;switch(pt){case W:case O:case ct:case U:case Ce:case F:case ce:case q:case M:case v:case Ye:case B:case ie:case k:case Ve:case ke:case j:case ve:{fe.setobjs2s(R,je+Ze.A,R.top-1),delete R.stack[--R.top];break}case Me:case it:case ee:{let Qe=!R.stack[R.top-1].l_isfalse();delete R.stack[--R.top],Ue.callstatus&qe.CIST_LEQ&&(et(pt===Me),Ue.callstatus^=qe.CIST_LEQ,Qe=!Qe),et(Ue.l_code[Ue.l_savedpc].opcode===pe),Qe!==!!Ze.A&&Ue.l_savedpc++;break}case A:{let Qe=R.top-1,ot=Ze.B,Dt=Qe-1-(je+ot);fe.setobjs2s(R,Qe-2,Qe),Dt>1&&(R.top=Qe-1,Nt(R,Dt)),fe.setobjs2s(R,Ue.l_base+Ze.A,R.top-1),he.adjust_top(R,Ue.top);break}case P:{et(Ue.l_code[Ue.l_savedpc].opcode===Q),he.adjust_top(R,Ue.top);break}case V:{Ze.C-1>=0&&he.adjust_top(R,Ue.top);break}}},gt=function(R,Ue,je){return Ue+je.A},St=function(R,Ue,je){return Ue+je.B},Tt=function(R,Ue,je,Ze){return x(Ze.B)?je[y(Ze.B)]:R.stack[Ue+Ze.B]},bt=function(R,Ue,je,Ze){return x(Ze.C)?je[y(Ze.C)]:R.stack[Ue+Ze.C]},Yt=function(R){let Ue=R.ci;Ue.callstatus|=qe.CIST_FRESH;e:for(;;){et(Ue===R.ci);let je=Ue.func.value,Ze=je.p.k,pt=Ue.l_base,Qe=Ue.l_code[Ue.l_savedpc++];R.hookmask&(n|e)&&Je.luaG_traceexec(R);let ot=gt(R,pt,Qe);switch(Qe.opcode){case ht:{fe.setobjs2s(R,ot,St(R,pt,Qe));break}case se:{let Ke=Ze[Qe.Bx];fe.setobj2s(R,ot,Ke);break}case ge:{et(Ue.l_code[Ue.l_savedpc].opcode===Y);let Ke=Ze[Ue.l_code[Ue.l_savedpc++].Ax];fe.setobj2s(R,ot,Ke);break}case we:{R.stack[ot].setbvalue(Qe.B!==0),Qe.C!==0&&Ue.l_savedpc++;break}case $e:{for(let Ke=0;Ke<=Qe.B;Ke++)R.stack[ot+Ke].setnilvalue();break}case Le:{let Ke=Qe.B;fe.setobj2s(R,ot,je.upvals[Ke]);break}case ke:{let Ke=je.upvals[Qe.B],lt=bt(R,pt,Ze,Qe);sn(R,Ke,lt,ot);break}case j:{let Ke=R.stack[St(R,pt,Qe)],lt=bt(R,pt,Ze,Qe);sn(R,Ke,lt,ot);break}case le:{let Ke=je.upvals[Qe.A],lt=Tt(R,pt,Ze,Qe),_t=bt(R,pt,Ze,Qe);Lt(R,Ke,lt,_t);break}case Be:{je.upvals[Qe.B].setfrom(R.stack[ot]);break}case re:{let Ke=R.stack[ot],lt=Tt(R,pt,Ze,Qe),_t=bt(R,pt,Ze,Qe);Lt(R,Ke,lt,_t);break}case z:{R.stack[ot].sethvalue(ye.luaH_new(R));break}case ve:{let Ke=St(R,pt,Qe),lt=bt(R,pt,Ze,Qe);fe.setobjs2s(R,ot+1,Ke),sn(R,R.stack[Ke],lt,ot);break}case W:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;Ke.ttisinteger()&&lt.ttisinteger()?R.stack[ot].setivalue(Ke.value+lt.value|0):(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(_t+It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_ADD);break}case O:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;Ke.ttisinteger()&&lt.ttisinteger()?R.stack[ot].setivalue(Ke.value-lt.value|0):(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(_t-It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_SUB);break}case ct:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;Ke.ttisinteger()&&lt.ttisinteger()?R.stack[ot].setivalue(K(Ke.value,lt.value)):(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(_t*It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_MUL);break}case Ye:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;Ke.ttisinteger()&&lt.ttisinteger()?R.stack[ot].setivalue(Pe(R,Ke.value,lt.value)):(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(te(R,_t,It)):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_MOD);break}case B:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(Math.pow(_t,It)):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_POW);break}case U:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(_t/It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_DIV);break}case Ce:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;Ke.ttisinteger()&&lt.ttisinteger()?R.stack[ot].setivalue(ue(R,Ke.value,lt.value)):(_t=J(Ke))!==!1&&(It=J(lt))!==!1?R.stack[ot].setfltvalue(Math.floor(_t/It)):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_IDIV);break}case F:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=Ie(Ke))!==!1&&(It=Ie(lt))!==!1?R.stack[ot].setivalue(_t&It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_BAND);break}case ce:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=Ie(Ke))!==!1&&(It=Ie(lt))!==!1?R.stack[ot].setivalue(_t|It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_BOR);break}case q:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=Ie(Ke))!==!1&&(It=Ie(lt))!==!1?R.stack[ot].setivalue(_t^It):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_BXOR);break}case M:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=Ie(Ke))!==!1&&(It=Ie(lt))!==!1?R.stack[ot].setivalue(S(_t,It)):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_SHL);break}case v:{let Ke=Tt(R,pt,Ze,Qe),lt=bt(R,pt,Ze,Qe),_t,It;(_t=Ie(Ke))!==!1&&(It=Ie(lt))!==!1?R.stack[ot].setivalue(S(_t,-It)):L.luaT_trybinTM(R,Ke,lt,R.stack[ot],L.TMS.TM_SHR);break}case ie:{let Ke=R.stack[St(R,pt,Qe)],lt;Ke.ttisinteger()?R.stack[ot].setivalue(-Ke.value|0):(lt=J(Ke))!==!1?R.stack[ot].setfltvalue(-lt):L.luaT_trybinTM(R,Ke,Ke,R.stack[ot],L.TMS.TM_UNM);break}case k:{let Ke=R.stack[St(R,pt,Qe)];Ke.ttisinteger()?R.stack[ot].setivalue(~Ke.value):L.luaT_trybinTM(R,Ke,Ke,R.stack[ot],L.TMS.TM_BNOT);break}case ne:{let Ke=R.stack[St(R,pt,Qe)];R.stack[ot].setbvalue(Ke.l_isfalse());break}case Ve:{b(R,R.stack[ot],R.stack[St(R,pt,Qe)]);break}case A:{let Ke=Qe.B,lt=Qe.C;R.top=pt+lt+1,Nt(R,lt-Ke+1);let _t=pt+Ke;fe.setobjs2s(R,ot,_t),he.adjust_top(R,Ue.top);break}case pe:{Ot(R,Ue,Qe,0);break}case ee:{dn(R,Tt(R,pt,Ze,Qe),bt(R,pt,Ze,Qe))!==Qe.A?Ue.l_savedpc++:Pt(R,Ue);break}case it:{Gt(R,Tt(R,pt,Ze,Qe),bt(R,pt,Ze,Qe))!==Qe.A?Ue.l_savedpc++:Pt(R,Ue);break}case Me:{ln(R,Tt(R,pt,Ze,Qe),bt(R,pt,Ze,Qe))!==Qe.A?Ue.l_savedpc++:Pt(R,Ue);break}case Se:{(Qe.C?R.stack[ot].l_isfalse():!R.stack[ot].l_isfalse())?Ue.l_savedpc++:Pt(R,Ue);break}case Oe:{let Ke=St(R,pt,Qe),lt=R.stack[Ke];(Qe.C?lt.l_isfalse():!lt.l_isfalse())?Ue.l_savedpc++:(fe.setobjs2s(R,ot,Ke),Pt(R,Ue));break}case V:{let Ke=Qe.B,lt=Qe.C-1;if(Ke!==0&&he.adjust_top(R,ot+Ke),he.luaD_precall(R,ot,lt))lt>=0&&he.adjust_top(R,Ue.top);else{Ue=R.ci;continue e}break}case Te:{let Ke=Qe.B;if(Ke!==0&&he.adjust_top(R,ot+Ke),!he.luaD_precall(R,ot,t)){let lt=R.ci,_t=lt.previous,It=lt.func,Bn=lt.funcOff,kn=_t.funcOff,Vi=lt.l_base+It.value.p.numparams;je.p.p.length>0&&Ne.luaF_close(R,_t.l_base);for(let Hi=0;Bn+Hi<Vi;Hi++)fe.setobjs2s(R,kn+Hi,Bn+Hi);_t.l_base=kn+(lt.l_base-Bn),_t.top=kn+(R.top-Bn),he.adjust_top(R,_t.top),_t.l_code=lt.l_code,_t.l_savedpc=lt.l_savedpc,_t.callstatus|=qe.CIST_TAIL,_t.next=null,Ue=R.ci=_t,et(R.top===_t.l_base+R.stack[kn].value.p.maxstacksize);continue e}break}case Ae:{je.p.p.length>0&&Ne.luaF_close(R,pt);let Ke=he.luaD_poscall(R,Ue,ot,Qe.B!==0?Qe.B-1:R.top-ot);if(Ue.callstatus&qe.CIST_FRESH)return;Ue=R.ci,Ke&&he.adjust_top(R,Ue.top),et(Ue.callstatus&qe.CIST_LUA),et(Ue.l_code[Ue.l_savedpc-1].opcode===V);continue e}case de:{if(R.stack[ot].ttisinteger()){let Ke=R.stack[ot+2].value,lt=R.stack[ot].value+Ke|0,_t=R.stack[ot+1].value;(0<Ke?lt<=_t:_t<=lt)&&(Ue.l_savedpc+=Qe.sBx,R.stack[ot].chgivalue(lt),R.stack[ot+3].setivalue(lt))}else{let Ke=R.stack[ot+2].value,lt=R.stack[ot].value+Ke,_t=R.stack[ot+1].value;(0<Ke?lt<=_t:_t<=lt)&&(Ue.l_savedpc+=Qe.sBx,R.stack[ot].chgfltvalue(lt),R.stack[ot+3].setfltvalue(lt))}break}case X:{let Ke=R.stack[ot],lt=R.stack[ot+1],_t=R.stack[ot+2],It;if(Ke.ttisinteger()&&_t.ttisinteger()&&(It=an(lt,_t.value))){let Bn=It.stopnow?0:Ke.value;lt.value=It.ilimit,Ke.value=Bn-_t.value|0}else{let Bn,kn,Vi;(Bn=J(lt))===!1&&Je.luaG_runerror(R,T("'for' limit must be a number",!0)),R.stack[ot+1].setfltvalue(Bn),(kn=J(_t))===!1&&Je.luaG_runerror(R,T("'for' step must be a number",!0)),R.stack[ot+2].setfltvalue(kn),(Vi=J(Ke))===!1&&Je.luaG_runerror(R,T("'for' initial value must be a number",!0)),R.stack[ot].setfltvalue(Vi-kn)}Ue.l_savedpc+=Qe.sBx;break}case P:{let Ke=ot+3;fe.setobjs2s(R,Ke+2,ot+2),fe.setobjs2s(R,Ke+1,ot+1),fe.setobjs2s(R,Ke,ot),he.adjust_top(R,Ke+3),he.luaD_call(R,Ke,Qe.C),he.adjust_top(R,Ue.top),Qe=Ue.l_code[Ue.l_savedpc++],ot=gt(R,pt,Qe),et(Qe.opcode===Q)}case Q:{R.stack[ot+1].ttisnil()||(fe.setobjs2s(R,ot,ot+1),Ue.l_savedpc+=Qe.sBx);break}case H:{let Ke=Qe.B,lt=Qe.C;Ke===0&&(Ke=R.top-ot-1),lt===0&&(et(Ue.l_code[Ue.l_savedpc].opcode===Y),lt=Ue.l_code[Ue.l_savedpc++].Ax);let _t=R.stack[ot].value,It=(lt-1)*p+Ke;for(;Ke>0;Ke--)ye.luaH_setint(_t,It--,R.stack[ot+Ke]);he.adjust_top(R,Ue.top);break}case _e:{let Ke=je.p.p[Qe.Bx],lt=N(Ke,je.upvals,R.stack,pt);lt===null?oe(R,Ke,je.upvals,pt,ot):R.stack[ot].setclLvalue(lt);break}case xe:{let Ke=Qe.B-1,lt=pt-Ue.funcOff-je.p.numparams-1,_t;for(lt<0&&(lt=0),Ke<0&&(Ke=lt,he.luaD_checkstack(R,lt),he.adjust_top(R,ot+lt)),_t=0;_t<Ke&&_t<lt;_t++)fe.setobjs2s(R,ot+_t,pt-lt+_t);for(;_t<Ke;_t++)R.stack[ot+_t].setnilvalue();break}case Y:throw Error("invalid opcode")}}},Ot=function(R,Ue,je,Ze){let pt=je.A;pt!==0&&Ne.luaF_close(R,Ue.l_base+pt-1),Ue.l_savedpc+=je.sBx+Ze},Pt=function(R,Ue){Ot(R,Ue,Ue.l_code[Ue.l_savedpc],1)},Gt=function(R,Ue,je){if(Ue.ttisnumber()&&je.ttisnumber())return nt(Ue,je)?1:0;if(Ue.ttisstring()&&je.ttisstring())return Z(Ue.tsvalue(),je.tsvalue())<0?1:0;{let Ze=L.luaT_callorderTM(R,Ue,je,L.TMS.TM_LT);return Ze===null&&Je.luaG_ordererror(R,Ue,je),Ze?1:0}},ln=function(R,Ue,je){let Ze;return Ue.ttisnumber()&&je.ttisnumber()?mt(Ue,je)?1:0:Ue.ttisstring()&&je.ttisstring()?Z(Ue.tsvalue(),je.tsvalue())<=0?1:0:(Ze=L.luaT_callorderTM(R,Ue,je,L.TMS.TM_LE),Ze!==null?Ze?1:0:(R.ci.callstatus|=qe.CIST_LEQ,Ze=L.luaT_callorderTM(R,je,Ue,L.TMS.TM_LT),R.ci.callstatus^=qe.CIST_LEQ,Ze===null&&Je.luaG_ordererror(R,Ue,je),Ze?0:1))},dn=function(R,Ue,je){if(Ue.ttype()!==je.ttype())return Ue.ttnov()!==je.ttnov()||Ue.ttnov()!==l?0:Ue.value===je.value?1:0;let Ze;switch(Ue.ttype()){case o:return 1;case i:return Ue.value==je.value?1:0;case a:case _:case f:case r:return Ue.value===je.value?1:0;case h:case s:return C(Ue.tsvalue(),je.tsvalue())?1:0;case E:case g:if(Ue.value===je.value)return 1;if(R===null)return 0;Ze=L.fasttm(R,Ue.value.metatable,L.TMS.TM_EQ),Ze===null&&(Ze=L.fasttm(R,je.value.metatable,L.TMS.TM_EQ));break;default:return Ue.value===je.value?1:0}if(Ze===null)return 0;let pt=new fe.TValue;return L.luaT_callTM(R,Ze,Ue,je,pt,1),pt.l_isfalse()?0:1},cn=function(R,Ue){return dn(null,R,Ue)},an=function(R,Ue){let je=!1,Ze=tn(R,Ue<0?2:1);if(Ze===!1){let pt=J(R);if(pt===!1)return!1;0<pt?(Ze=Xe,Ue<0&&(je=!0)):(Ze=ze,Ue>=0&&(je=!0))}return{stopnow:je,ilimit:Ze}},tn=function(R,Ue){if(R.ttisfloat()){let je=R.value,Ze=Math.floor(je);if(je!==Ze){if(Ue===0)return!1;Ue>1&&(Ze+=1)}return dt(Ze)}else{if(R.ttisinteger())return R.value;if(De(R)){let je=new fe.TValue;if(fe.luaO_str2num(R.svalue(),je)===R.vslen()+1)return tn(je,Ue)}}return!1},Ie=function(R){return R.ttisinteger()?R.value:tn(R,0)},J=function(R){if(R.ttnov()===l)return R.value;if(De(R)){let Ue=new fe.TValue;if(fe.luaO_str2num(R.svalue(),Ue)===R.vslen()+1)return Ue.value}return!1},nt=function(R,Ue){return R.value<Ue.value},mt=function(R,Ue){return R.value<=Ue.value},Z=function(R,Ue){let je=Re(R),Ze=Re(Ue);return je===Ze?0:je<Ze?-1:1},b=function(R,Ue,je){let Ze;switch(je.ttype()){case g:{let pt=je.value;if(Ze=L.fasttm(R,pt.metatable,L.TMS.TM_LEN),Ze!==null)break;Ue.setivalue(ye.luaH_getn(pt));return}case h:case s:Ue.setivalue(je.vslen());return;default:{Ze=L.luaT_gettmbyobj(R,je,L.TMS.TM_LEN),Ze.ttisnil()&&Je.luaG_typeerror(R,je,T("get length of",!0));break}}L.luaT_callTM(R,Ze,je,je,Ue,1)},K=Math.imul||function(R,Ue){let je=R>>>16&65535,Ze=R&65535,pt=Ue>>>16&65535,Qe=Ue&65535;return Ze*Qe+(je*Qe+Ze*pt<<16>>>0)|0},ue=function(R,Ue,je){return je===0&&Je.luaG_runerror(R,T("attempt to divide by zero")),Math.floor(Ue/je)|0},Pe=function(R,Ue,je){return je===0&&Je.luaG_runerror(R,T("attempt to perform 'n%%0'")),Ue-Math.floor(Ue/je)*je|0},u=32,S=function(R,Ue){return Ue<0?Ue<=-u?0:R>>>-Ue:Ue>=u?0:R<<Ue},N=function(R,Ue,je,Ze){let pt=R.cache;if(pt!==null){let Qe=R.upvalues,ot=Qe.length;for(let Dt=0;Dt<ot;Dt++){let Ke=Qe[Dt].instack?je[Ze+Qe[Dt].idx]:Ue[Qe[Dt].idx];if(pt.upvals[Dt]!==Ke)return null}}return pt},oe=function(R,Ue,je,Ze,pt){let Qe=Ue.upvalues.length,ot=Ue.upvalues,Dt=new fe.LClosure(R,Qe);Dt.p=Ue,R.stack[pt].setclLvalue(Dt);for(let Ke=0;Ke<Qe;Ke++)ot[Ke].instack?Dt.upvals[Ke]=Ne.luaF_findupval(R,Ze+ot[Ke].idx):Dt.upvals[Ke]=je[ot[Ke].idx];Ue.cache=Dt},G=function(R){return R.ttisnumber()},De=function(R){return R.ttisstring()},Ge=function(R,Ue){let je=R.stack[Ue];return je.ttisstring()?!0:G(je)?(fe.luaO_tostring(R,je),!0):!1},rt=function(R){return R.ttisstring()&&R.vslen()===0},Mt=function(R,Ue,je,Ze){let pt=0;do{let Qe=R.stack[Ue-je],ot=Qe.vslen(),Dt=Qe.svalue();Ze.set(Dt,pt),pt+=ot}while(--je>0)},Nt=function(R,Ue){et(Ue>=2);do{let je=R.top,Ze=2;if(!(R.stack[je-2].ttisstring()||G(R.stack[je-2]))||!Ge(R,je-1))L.luaT_trybinTM(R,R.stack[je-2],R.stack[je-1],R.stack[je-2],L.TMS.TM_CONCAT);else if(rt(R.stack[je-1]))Ge(R,je-2);else if(rt(R.stack[je-2]))fe.setobjs2s(R,je-2,je-1);else{let pt=R.stack[je-1].vslen();for(Ze=1;Ze<Ue&&Ge(R,je-Ze-1);Ze++){let Dt=R.stack[je-Ze-1].vslen();pt+=Dt}let Qe=new Uint8Array(pt);Mt(R,je,Ze,Qe);let ot=st(R,Qe);fe.setsvalue2s(R,je-Ze,ot)}for(Ue-=Ze-1;R.top>je-(Ze-1);)delete R.stack[--R.top]}while(Ue>1)},Ct=2e3,sn=function(R,Ue,je,Ze){for(let pt=0;pt<Ct;pt++){let Qe;if(!Ue.ttistable())Qe=L.luaT_gettmbyobj(R,Ue,L.TMS.TM_INDEX),Qe.ttisnil()&&Je.luaG_typeerror(R,Ue,T("index",!0));else{let ot=ye.luaH_get(R,Ue.value,je);if(ot.ttisnil()){if(Qe=L.fasttm(R,Ue.value.metatable,L.TMS.TM_INDEX),Qe===null){R.stack[Ze].setnilvalue();return}}else{fe.setobj2s(R,Ze,ot);return}}if(Qe.ttisfunction()){L.luaT_callTM(R,Qe,Ue,je,R.stack[Ze],1);return}Ue=Qe}Je.luaG_runerror(R,T("'__index' chain too long; possible loop",!0))},Lt=function(R,Ue,je,Ze){for(let pt=0;pt<Ct;pt++){let Qe;if(Ue.ttistable()){let ot=Ue.value;if(!ye.luaH_get(R,ot,je).ttisnil()||(Qe=L.fasttm(R,ot.metatable,L.TMS.TM_NEWINDEX))===null){ye.luaH_setfrom(R,ot,je,Ze),ye.invalidateTMcache(ot);return}}else(Qe=L.luaT_gettmbyobj(R,Ue,L.TMS.TM_NEWINDEX)).ttisnil()&&Je.luaG_typeerror(R,Ue,T("index",!0));if(Qe.ttisfunction()){L.luaT_callTM(R,Qe,Ue,je,Ze,0);return}Ue=Qe}Je.luaG_runerror(R,T("'__newindex' chain too long; possible loop",!0))};return An.cvt2str=G,An.cvt2num=De,An.luaV_gettable=sn,An.luaV_concat=Nt,An.luaV_div=ue,An.luaV_equalobj=dn,An.luaV_execute=Yt,An.luaV_finishOp=tt,An.luaV_imul=K,An.luaV_lessequal=ln,An.luaV_lessthan=Gt,An.luaV_mod=Pe,An.luaV_objlen=b,An.luaV_rawequalobj=cn,An.luaV_shiftl=S,An.luaV_tointeger=tn,An.settable=Lt,An.tointeger=Ie,An.tonumber=J,An}var Kh;function Fs(){if(Kh)return di;Kh=1;const{constant_types:{LUA_TTABLE:n,LUA_TUSERDATA:e},to_luastring:t}=Dn(),{lua_assert:i}=Rn,r=Ci(),a=Qi(),s=jr(),{luaS_bless:o,luaS_new:l}=qn,f=xr(),_=qr(),h=Ls(),g=["no value","nil","boolean","userdata","number","string","table","function","userdata","thread","proto"].map(A=>t(A)),E=function(A){return g[A+1]},T={TM_INDEX:0,TM_NEWINDEX:1,TM_GC:2,TM_MODE:3,TM_LEN:4,TM_EQ:5,TM_ADD:6,TM_SUB:7,TM_MUL:8,TM_MOD:9,TM_POW:10,TM_DIV:11,TM_IDIV:12,TM_BAND:13,TM_BOR:14,TM_BXOR:15,TM_SHL:16,TM_SHR:17,TM_UNM:18,TM_BNOT:19,TM_LT:20,TM_LE:21,TM_CONCAT:22,TM_CALL:23,TM_N:24},y=function(A){A.l_G.tmname[T.TM_INDEX]=new l(A,t("__index",!0)),A.l_G.tmname[T.TM_NEWINDEX]=new l(A,t("__newindex",!0)),A.l_G.tmname[T.TM_GC]=new l(A,t("__gc",!0)),A.l_G.tmname[T.TM_MODE]=new l(A,t("__mode",!0)),A.l_G.tmname[T.TM_LEN]=new l(A,t("__len",!0)),A.l_G.tmname[T.TM_EQ]=new l(A,t("__eq",!0)),A.l_G.tmname[T.TM_ADD]=new l(A,t("__add",!0)),A.l_G.tmname[T.TM_SUB]=new l(A,t("__sub",!0)),A.l_G.tmname[T.TM_MUL]=new l(A,t("__mul",!0)),A.l_G.tmname[T.TM_MOD]=new l(A,t("__mod",!0)),A.l_G.tmname[T.TM_POW]=new l(A,t("__pow",!0)),A.l_G.tmname[T.TM_DIV]=new l(A,t("__div",!0)),A.l_G.tmname[T.TM_IDIV]=new l(A,t("__idiv",!0)),A.l_G.tmname[T.TM_BAND]=new l(A,t("__band",!0)),A.l_G.tmname[T.TM_BOR]=new l(A,t("__bor",!0)),A.l_G.tmname[T.TM_BXOR]=new l(A,t("__bxor",!0)),A.l_G.tmname[T.TM_SHL]=new l(A,t("__shl",!0)),A.l_G.tmname[T.TM_SHR]=new l(A,t("__shr",!0)),A.l_G.tmname[T.TM_UNM]=new l(A,t("__unm",!0)),A.l_G.tmname[T.TM_BNOT]=new l(A,t("__bnot",!0)),A.l_G.tmname[T.TM_LT]=new l(A,t("__lt",!0)),A.l_G.tmname[T.TM_LE]=new l(A,t("__le",!0)),A.l_G.tmname[T.TM_CONCAT]=new l(A,t("__concat",!0)),A.l_G.tmname[T.TM_CALL]=new l(A,t("__call",!0))},x=t("__name",!0),p=function(A,U){let ee;if(U.ttistable()&&(ee=U.value.metatable)!==null||U.ttisfulluserdata()&&(ee=U.value.metatable)!==null){let Y=f.luaH_getstr(ee,o(A,x));if(Y.ttisstring())return Y.svalue()}return E(U.ttnov())},W=function(A,U,ee,Y,de,X){let j=A.top;if(r.pushobj2s(A,U),r.pushobj2s(A,ee),r.pushobj2s(A,Y),X||r.pushobj2s(A,de),A.ci.callstatus&s.CIST_LUA?a.luaD_call(A,j,X):a.luaD_callnoyield(A,j,X),X){let ke=A.stack[A.top-1];delete A.stack[--A.top],de.setfrom(ke)}},F=function(A,U,ee,Y,de){let X=_e(A,U,de);return X.ttisnil()&&(X=_e(A,ee,de)),X.ttisnil()?!1:(W(A,X,U,ee,Y,1),!0)},k=function(A,U,ee,Y,de){if(!F(A,U,ee,Y,de))switch(de){case T.TM_CONCAT:return _.luaG_concaterror(A,U,ee);case T.TM_BAND:case T.TM_BOR:case T.TM_BXOR:case T.TM_SHL:case T.TM_SHR:case T.TM_BNOT:{let X=h.tonumber(U),j=h.tonumber(ee);return X!==!1&&j!==!1?_.luaG_tointerror(A,U,ee):_.luaG_opinterror(A,U,ee,t("perform bitwise operation on",!0))}default:return _.luaG_opinterror(A,U,ee,t("perform arithmetic on",!0))}},ce=function(A,U,ee,Y){let de=new r.TValue;return F(A,U,ee,de,Y)?!de.l_isfalse():null},q=function(A,U,ee){return U===null||U.flags&1<<ee?null:V(U,ee,A.l_G.tmname[ee])},V=function(A,U,ee){const Y=f.luaH_getstr(A,ee);return i(U<=T.TM_EQ),Y.ttisnil()?(A.flags|=1<<U,null):Y},_e=function(A,U,ee){let Y;switch(U.ttnov()){case n:case e:Y=U.value.metatable;break;default:Y=A.l_G.mt[U.ttnov()]}return Y?f.luaH_getstr(Y,A.l_G.tmname[ee]):r.luaO_nilobject};return di.fasttm=q,di.TMS=T,di.luaT_callTM=W,di.luaT_callbinTM=F,di.luaT_trybinTM=k,di.luaT_callorderTM=ce,di.luaT_gettm=V,di.luaT_gettmbyobj=_e,di.luaT_init=y,di.luaT_objtypename=p,di.ttypename=E,di}var jh;function jr(){if(jh)return yn;jh=1;const{LUA_MINSTACK:n,LUA_RIDX_GLOBALS:e,LUA_RIDX_MAINTHREAD:t,constant_types:{LUA_NUMTAGS:i,LUA_TNIL:r,LUA_TTABLE:a,LUA_TTHREAD:s},thread_status:{LUA_OK:o}}=Dn(),l=Ci(),f=Qi(),_=zl(),h=xr(),g=Fs(),E=5,T=2*n;class y{constructor(){this.func=null,this.funcOff=NaN,this.top=NaN,this.previous=null,this.next=null,this.l_base=NaN,this.l_code=null,this.l_savedpc=NaN,this.c_k=null,this.c_old_errfunc=null,this.c_ctx=null,this.nresults=NaN,this.callstatus=NaN}}class x{constructor(X){this.id=X.id_counter++,this.base_ci=new y,this.top=NaN,this.stack_last=NaN,this.oldpc=NaN,this.l_G=X,this.stack=null,this.ci=null,this.errorJmp=null,this.nCcalls=0,this.hook=null,this.hookmask=0,this.basehookcount=0,this.allowhook=1,this.hookcount=this.basehookcount,this.nny=1,this.status=o,this.errfunc=0}}class p{constructor(){this.id_counter=1,this.ids=new WeakMap,this.mainthread=null,this.l_registry=new l.TValue(r,null),this.panic=null,this.atnativeerror=null,this.version=null,this.tmname=new Array(g.TMS.TM_N),this.mt=new Array(i)}}const W=function(de){let X=new y;return de.ci.next=X,X.previous=de.ci,X.next=null,de.ci=X,X},F=function(de){let X=de.ci;X.next=null},k=function(de,X){de.stack=new Array(T),de.top=0,de.stack_last=T-E;let j=de.base_ci;j.next=j.previous=null,j.callstatus=0,j.funcOff=de.top,j.func=de.stack[de.top],de.stack[de.top++]=new l.TValue(r,null),j.top=de.top+n,de.ci=j},ce=function(de){de.ci=de.base_ci,F(de),de.stack=null},q=function(de,X){let j=h.luaH_new(de);X.l_registry.sethvalue(j),h.luaH_setint(j,t,new l.TValue(s,de)),h.luaH_setint(j,e,new l.TValue(a,h.luaH_new(de)))},V=function(de){let X=de.l_G;k(de),q(de,X),g.luaT_init(de),X.version=_.lua_version(null)},_e=function(de){let X=de.l_G,j=new x(X);return de.stack[de.top]=new l.TValue(s,j),_.api_incr_top(de),j.hookmask=de.hookmask,j.basehookcount=de.basehookcount,j.hook=de.hook,j.hookcount=j.basehookcount,k(j),j},A=function(de,X){ce(X)},U=function(){let de=new p,X=new x(de);return de.mainthread=X,f.luaD_rawrunprotected(X,V,null)!==o&&(X=null),X},ee=function(de){ce(de)},Y=function(de){de=de.l_G.mainthread,ee(de)};return yn.lua_State=x,yn.CallInfo=y,yn.CIST_OAH=1,yn.CIST_LUA=2,yn.CIST_HOOKED=4,yn.CIST_FRESH=8,yn.CIST_YPCALL=16,yn.CIST_TAIL=32,yn.CIST_HOOKYIELD=64,yn.CIST_LEQ=128,yn.CIST_FIN=256,yn.EXTRA_STACK=E,yn.lua_close=Y,yn.lua_newstate=U,yn.lua_newthread=_e,yn.luaE_extendCI=W,yn.luaE_freeCI=F,yn.luaE_freethread=A,yn}var qh;function Ci(){if(qh)return pn;qh=1;const{LUA_OPADD:n,LUA_OPBAND:e,LUA_OPBNOT:t,LUA_OPBOR:i,LUA_OPBXOR:r,LUA_OPDIV:a,LUA_OPIDIV:s,LUA_OPMOD:o,LUA_OPMUL:l,LUA_OPPOW:f,LUA_OPSHL:_,LUA_OPSHR:h,LUA_OPSUB:g,LUA_OPUNM:E,constant_types:{LUA_NUMTAGS:T,LUA_TBOOLEAN:y,LUA_TCCL:x,LUA_TFUNCTION:p,LUA_TLCF:W,LUA_TLCL:F,LUA_TLIGHTUSERDATA:k,LUA_TLNGSTR:ce,LUA_TNIL:q,LUA_TNUMBER:V,LUA_TNUMFLT:_e,LUA_TNUMINT:A,LUA_TSHRSTR:U,LUA_TSTRING:ee,LUA_TTABLE:Y,LUA_TTHREAD:de,LUA_TUSERDATA:X},from_userstring:j,luastring_indexOf:ke,luastring_of:Le,to_jsstring:Ce,to_luastring:pe}=Dn(),{lisdigit:Me,lisprint:Ve,lisspace:we,lisxdigit:se}=Kr,ge=qr(),$e=Qi(),it=jr(),{luaS_bless:Ye,luaS_new:ht}=qn,ct=xr(),{LUA_COMPAT_FLOATSTRING:z,ldexp:ne,lua_integer2str:B,lua_number2str:Ae}=Ei(),ve=Ls(),{MAX_INT:H,luai_nummod:re,lua_assert:le}=Rn,Be=Fs(),M=T,v=T+1;class O{constructor(J,nt){this.type=J,this.value=nt}ttype(){return this.type&63}ttnov(){return this.type&15}checktag(J){return this.type===J}checktype(J){return this.ttnov()===J}ttisnumber(){return this.checktype(V)}ttisfloat(){return this.checktag(_e)}ttisinteger(){return this.checktag(A)}ttisnil(){return this.checktag(q)}ttisboolean(){return this.checktag(y)}ttislightuserdata(){return this.checktag(k)}ttisstring(){return this.checktype(ee)}ttisshrstring(){return this.checktag(U)}ttislngstring(){return this.checktag(ce)}ttistable(){return this.checktag(Y)}ttisfunction(){return this.checktype(p)}ttisclosure(){return(this.type&31)===p}ttisCclosure(){return this.checktag(x)}ttisLclosure(){return this.checktag(F)}ttislcf(){return this.checktag(W)}ttisfulluserdata(){return this.checktag(X)}ttisthread(){return this.checktag(de)}ttisdeadkey(){return this.checktag(v)}l_isfalse(){return this.ttisnil()||this.ttisboolean()&&this.value===!1}setfltvalue(J){this.type=_e,this.value=J}chgfltvalue(J){le(this.type==_e),this.value=J}setivalue(J){this.type=A,this.value=J}chgivalue(J){le(this.type==A),this.value=J}setnilvalue(){this.type=q,this.value=null}setfvalue(J){this.type=W,this.value=J}setpvalue(J){this.type=k,this.value=J}setbvalue(J){this.type=y,this.value=J}setsvalue(J){this.type=ce,this.value=J}setuvalue(J){this.type=X,this.value=J}setthvalue(J){this.type=de,this.value=J}setclLvalue(J){this.type=F,this.value=J}setclCvalue(J){this.type=x,this.value=J}sethvalue(J){this.type=Y,this.value=J}setdeadvalue(){this.type=v,this.value=null}setfrom(J){this.type=J.type,this.value=J.value}tsvalue(){return le(this.ttisstring()),this.value}svalue(){return this.tsvalue().getstr()}vslen(){return this.tsvalue().tsslen()}jsstring(J,nt){return Ce(this.svalue(),J,nt,!0)}}const Te=function(Ie,J){Ie.stack[Ie.top++]=new O(J.type,J.value)},Se=function(Ie,J){Ie.stack[Ie.top++]=new O(ce,J)},Oe=function(Ie,J,nt){Ie.stack[J].setfrom(Ie.stack[nt])},P=function(Ie,J,nt){Ie.stack[J].setfrom(nt)},Q=function(Ie,J,nt){Ie.stack[J].setsvalue(nt)},ie=new O(q,null);Object.freeze(ie),pn.luaO_nilobject=ie;class xe{constructor(J,nt){this.id=J.l_G.id_counter++,this.p=null,this.nupvalues=nt,this.upvals=new Array(nt)}}class Xe{constructor(J,nt,mt){for(this.id=J.l_G.id_counter++,this.f=nt,this.nupvalues=mt,this.upvalue=new Array(mt);mt--;)this.upvalue[mt]=new O(q,null)}}class ze{constructor(J,nt){this.id=J.l_G.id_counter++,this.metatable=null,this.uservalue=new O(q,null),this.len=nt,this.data=Object.create(null)}}class dt{constructor(){this.varname=null,this.startpc=NaN,this.endpc=NaN}}const et=pe("..."),te=pe('[string "'),fe=pe('"]'),Ne=function(Ie,J){let nt=Ie.length,mt;if(Ie[0]===61)nt<J?(mt=new Uint8Array(nt-1),mt.set(Ie.subarray(1))):(mt=new Uint8Array(J),mt.set(Ie.subarray(1,J+1)));else if(Ie[0]===64)nt<=J?(mt=new Uint8Array(nt-1),mt.set(Ie.subarray(1))):(mt=new Uint8Array(J),mt.set(et),J-=et.length,mt.set(Ie.subarray(nt-J),et.length));else{mt=new Uint8Array(J);let Z=ke(Ie,10);mt.set(te);let b=te.length;J-=te.length+et.length+fe.length,nt<J&&Z===-1?(mt.set(Ie,b),b+=Ie.length):(Z!==-1&&(nt=Z),nt>J&&(nt=J),mt.set(Ie.subarray(0,nt),b),b+=nt,mt.set(et,b),b+=et.length),mt.set(fe,b),b+=fe.length,mt=mt.subarray(0,b)}return mt},qe=function(Ie){return Me(Ie)?Ie-48:(Ie&223)-55},st=8,C=function(Ie,J){let nt=1;if(le(J<=1114111),J<128)Ie[st-1]=J;else{let mt=63;do Ie[st-nt++]=128|J&63,J>>=6,mt>>=1;while(J>mt);Ie[st-nt]=~mt<<1|J}return nt},Re=30,he=function(Ie){let J=0,nt=0,mt=0,Z=0,b=0,K,ue=!1;for(;we(Ie[J]);)J++;if(((K=Ie[J]===45)||Ie[J]===43)&&J++,!(Ie[J]===48&&(Ie[J+1]===120||Ie[J+1]===88)))return null;for(J+=2;;J++)if(Ie[J]===46){if(ue)break;ue=!0}else if(se(Ie[J]))mt===0&&Ie[J]===48?Z++:++mt<=Re?nt=nt*16+qe(Ie[J]):b++,ue&&b--;else break;if(Z+mt===0)return null;if(b*=4,Ie[J]===112||Ie[J]===80){let Pe=0,u;if(J++,((u=Ie[J]===45)||Ie[J]===43)&&J++,!Me(Ie[J]))return null;for(;Me(Ie[J]);)Pe=Pe*10+Ie[J++]-48;u&&(Pe=-Pe),b+=Pe}return K&&(nt=-nt),{n:ne(nt,b),i:J}},L=function(Ie){try{Ie=Ce(Ie)}catch{return null}let J=/^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(Ie);if(!J)return null;let nt=parseFloat(J[0]);return isNaN(nt)?null:{n:nt,i:J[0].length}},ye=function(Ie,J){let nt=J==="x"?he(Ie):L(Ie);if(nt===null)return null;for(;we(Ie[nt.i]);)nt.i++;return nt.i===Ie.length||Ie[nt.i]===0?nt:null},Je=[46,120,88,110,78],tt={46:".",120:"x",88:"x",110:"n",78:"n"},gt=function(Ie){let J=Ie.length,nt=0;for(let b=0;b<J;b++){let K=Ie[b];if(Je.indexOf(K)!==-1){nt=K;break}}let mt=tt[nt];return mt==="n"?null:ye(Ie,mt)},St=Math.floor(H/10),Tt=H%10,bt=function(Ie){let J=0,nt=0,mt=!0,Z;for(;we(Ie[J]);)J++;if(((Z=Ie[J]===45)||Ie[J]===43)&&J++,Ie[J]===48&&(Ie[J+1]===120||Ie[J+1]===88))for(J+=2;J<Ie.length&&se(Ie[J]);J++)nt=nt*16+qe(Ie[J])|0,mt=!1;else for(;J<Ie.length&&Me(Ie[J]);J++){let b=Ie[J]-48;if(nt>=St&&(nt>St||b>Tt+Z))return null;nt=nt*10+b|0,mt=!1}for(;J<Ie.length&&we(Ie[J]);)J++;return mt||J!==Ie.length&&Ie[J]!==0?null:{n:(Z?-nt:nt)|0,i:J}},Yt=function(Ie,J){let nt=bt(Ie);return nt!==null?(J.setivalue(nt.n),nt.i+1):(nt=gt(Ie),nt!==null?(J.setfltvalue(nt.n),nt.i+1):0)},Ot=function(Ie,J){let nt;if(J.ttisinteger())nt=pe(B(J.value));else{let mt=Ae(J.value);!z&&/^[-0123456789]+$/.test(mt)&&(mt+=".0"),nt=pe(mt)}J.setsvalue(Ye(Ie,nt))},Pt=function(Ie,J){$e.luaD_inctop(Ie),Q(Ie,Ie.top-1,ht(Ie,J))},Gt=function(Ie,J,nt){let mt=0,Z=0,b=0,K;for(;K=ke(J,37,Z),K!=-1;){switch(Pt(Ie,J.subarray(Z,K)),J[K+1]){case 115:{let ue=nt[b++];if(ue===null)ue=pe("(null)",!0);else{ue=j(ue);let Pe=ke(ue,0);Pe!==-1&&(ue=ue.subarray(0,Pe))}Pt(Ie,ue);break}case 99:{let ue=nt[b++];Ve(ue)?Pt(Ie,Le(ue)):ln(Ie,pe("<\\%d>",!0),ue);break}case 100:case 73:$e.luaD_inctop(Ie),Ie.stack[Ie.top-1].setivalue(nt[b++]),Ot(Ie,Ie.stack[Ie.top-1]);break;case 102:$e.luaD_inctop(Ie),Ie.stack[Ie.top-1].setfltvalue(nt[b++]),Ot(Ie,Ie.stack[Ie.top-1]);break;case 112:{let ue=nt[b++];if(ue instanceof it.lua_State||ue instanceof ct.Table||ue instanceof ze||ue instanceof xe||ue instanceof Xe)Pt(Ie,pe("0x"+ue.id.toString(16)));else switch(typeof ue){case"undefined":Pt(Ie,pe("undefined"));break;case"number":Pt(Ie,pe("Number("+ue+")"));break;case"string":Pt(Ie,pe("String("+JSON.stringify(ue)+")"));break;case"boolean":Pt(Ie,pe(ue?"Boolean(true)":"Boolean(false)"));break;case"object":if(ue===null){Pt(Ie,pe("null"));break}case"function":{let Pe=Ie.l_G.ids.get(ue);Pe||(Pe=Ie.l_G.id_counter++,Ie.l_G.ids.set(ue,Pe)),Pt(Ie,pe("0x"+Pe.toString(16)));break}default:Pt(Ie,pe("<id NYI>"))}break}case 85:{let ue=new Uint8Array(st),Pe=C(ue,nt[b++]);Pt(Ie,ue.subarray(st-Pe));break}case 37:Pt(Ie,pe("%",!0));break;default:ge.luaG_runerror(Ie,pe("invalid option '%%%c' to 'lua_pushfstring'"),J[K+1])}mt+=2,Z=K+2}return $e.luaD_checkstack(Ie,1),Pt(Ie,J.subarray(Z)),mt>0&&ve.luaV_concat(Ie,mt+1),Ie.stack[Ie.top-1].svalue()},ln=function(Ie,J,...nt){return Gt(Ie,J,nt)},dn=function(Ie){let J=0;if(Ie<8)return Ie;for(;Ie>=128;)Ie=Ie+15>>4,J+=4;for(;Ie>=16;)Ie=Ie+1>>1,J++;return J+1<<3|Ie-8},cn=function(Ie,J,nt,mt){switch(J){case n:return nt+mt|0;case g:return nt-mt|0;case l:return ve.luaV_imul(nt,mt);case o:return ve.luaV_mod(Ie,nt,mt);case s:return ve.luaV_div(Ie,nt,mt);case e:return nt&mt;case i:return nt|mt;case r:return nt^mt;case _:return ve.luaV_shiftl(nt,mt);case h:return ve.luaV_shiftl(nt,-mt);case E:return 0-nt|0;case t:return-1^nt;default:le(0)}},an=function(Ie,J,nt,mt){switch(J){case n:return nt+mt;case g:return nt-mt;case l:return nt*mt;case a:return nt/mt;case f:return Math.pow(nt,mt);case s:return Math.floor(nt/mt);case E:return-nt;case o:return re(Ie,nt,mt);default:le(0)}},tn=function(Ie,J,nt,mt,Z){let b=typeof Z=="number"?Ie.stack[Z]:Z;switch(J){case e:case i:case r:case _:case h:case t:{let K,ue;if((K=ve.tointeger(nt))!==!1&&(ue=ve.tointeger(mt))!==!1){b.setivalue(cn(Ie,J,K,ue));return}else break}case a:case f:{let K,ue;if((K=ve.tonumber(nt))!==!1&&(ue=ve.tonumber(mt))!==!1){b.setfltvalue(an(Ie,J,K,ue));return}else break}default:{let K,ue;if(nt.ttisinteger()&&mt.ttisinteger()){b.setivalue(cn(Ie,J,nt.value,mt.value));return}else if((K=ve.tonumber(nt))!==!1&&(ue=ve.tonumber(mt))!==!1){b.setfltvalue(an(Ie,J,K,ue));return}else break}}le(Ie!==null),Be.luaT_trybinTM(Ie,nt,mt,Z,J-n+Be.TMS.TM_ADD)};return pn.CClosure=Xe,pn.LClosure=xe,pn.LUA_TDEADKEY=v,pn.LUA_TPROTO=M,pn.LocVar=dt,pn.TValue=O,pn.Udata=ze,pn.UTF8BUFFSZ=st,pn.luaO_arith=tn,pn.luaO_chunkid=Ne,pn.luaO_hexavalue=qe,pn.luaO_int2fb=dn,pn.luaO_pushfstring=ln,pn.luaO_pushvfstring=Gt,pn.luaO_str2num=Yt,pn.luaO_tostring=Ot,pn.luaO_utf8esc=C,pn.numarith=an,pn.pushobj2s=Te,pn.pushsvalue2s=Se,pn.setobjs2s=Oe,pn.setobj2s=P,pn.setsvalue2s=Q,pn}var $h;function Bs(){if($h)return lr;$h=1;const{constant_types:{LUA_TNIL:n}}=Dn(),e=Ci();class t{constructor(f){this.id=f.l_G.id_counter++,this.k=[],this.p=[],this.code=[],this.cache=null,this.lineinfo=[],this.upvalues=[],this.numparams=0,this.is_vararg=!1,this.maxstacksize=0,this.locvars=[],this.linedefined=0,this.lastlinedefined=0,this.source=null}}const i=function(l,f){return new e.LClosure(l,f)},r=function(l,f){return l.stack[f]},a=function(l,f){for(let _=f;_<l.top;_++){let h=l.stack[_];l.stack[_]=new e.TValue(h.type,h.value)}},s=function(l,f){for(let _=0;_<f.nupvalues;_++)f.upvals[_]=new e.TValue(n,null)},o=function(l,f,_){for(let h=0;h<l.locvars.length&&l.locvars[h].startpc<=_;h++)if(_<l.locvars[h].endpc&&(f--,f===0))return l.locvars[h].varname.getstr();return null};return lr.MAXUPVAL=255,lr.Proto=t,lr.luaF_findupval=r,lr.luaF_close=a,lr.luaF_getlocalname=o,lr.luaF_initupvals=s,lr.luaF_newLclosure=i,lr}var fa={},Bt={},ai={},Ai={};const{lua_assert:Pp}=Rn;class aT{constructor(){this.buffer=null,this.n=0}}const sT=function(n){return n.buffer.subarray(0,n.n)},oT=function(n,e){n.n-=e},lT=function(n){n.n=0},cT=function(n,e,t){let i=new Uint8Array(t);e.buffer&&i.set(e.buffer),e.buffer=i};class uT{constructor(e,t,i){this.L=e,Pp(typeof t=="function","ZIO requires a reader"),this.reader=t,this.data=i,this.n=0,this.buffer=null,this.off=0}zgetc(){return this.n-- >0?this.buffer[this.off++]:Uu(this)}}const Cl=-1,Uu=function(n){let e=n.reader(n.L,n.data);if(e===null)return Cl;Pp(e instanceof Uint8Array,"Should only load binary of array of bytes");let t=e.length;return t===0?Cl:(n.buffer=e,n.off=0,n.n=t-1,n.buffer[n.off++])},fT=function(n,e,t,i){for(;i;){if(n.n===0){if(Uu(n)===Cl)return i;n.n++,n.off--}let r=i<=n.n?i:n.n;for(let a=0;a<r;a++)e[t++]=n.buffer[n.off++];n.n-=r,n.n===0&&(n.buffer=null),i-=r}return 0};Ai.EOZ=Cl;Ai.luaZ_buffer=sT;Ai.luaZ_buffremove=oT;Ai.luaZ_fill=Uu;Ai.luaZ_read=fT;Ai.luaZ_resetbuffer=lT;Ai.luaZ_resizebuffer=cT;Ai.MBuffer=aT;Ai.ZIO=uT;var Yh;function Ou(){if(Yh)return ai;Yh=1;const{constant_types:{LUA_TBOOLEAN:n,LUA_TLNGSTR:e},thread_status:{LUA_ERRSYNTAX:t},to_luastring:i}=Dn(),{LUA_MINBUFFER:r,MAX_INT:a,lua_assert:s}=Rn,o=qr(),l=Qi(),{lisdigit:f,lislalnum:_,lislalpha:h,lisspace:g,lisxdigit:E}=Kr,T=Ci(),{luaS_bless:y,luaS_hash:x,luaS_hashlongstr:p,luaS_new:W}=qn,F=xr(),{EOZ:k,luaZ_buffer:ce,luaZ_buffremove:q,luaZ_resetbuffer:V,luaZ_resizebuffer:_e}=Ai,A=257,U=i("_ENV",!0),ee=A,Y=A+1,de=A+2,X=A+3,j=A+4,ke=A+5,Le=A+6,Ce=A+7,pe=A+8,Me=A+9,Ve=A+10,we=A+11,se=A+12,ge=A+13,$e=A+14,it=A+15,Ye=A+16,ht=A+17,ct=A+18,z=A+19,ne=A+20,B=A+21,Ae=A+22,ve=A+23,H=A+24,re=A+25,le=A+26,Be=A+27,M=A+28,v=A+29,O=A+30,Te=A+31,Se=A+32,Oe=A+33,P=A+34,Q=A+35,ie=A+36,xe={TK_AND:ee,TK_BREAK:Y,TK_DO:de,TK_ELSE:X,TK_ELSEIF:j,TK_END:ke,TK_FALSE:Le,TK_FOR:Ce,TK_FUNCTION:pe,TK_GOTO:Me,TK_IF:Ve,TK_IN:we,TK_LOCAL:se,TK_NIL:ge,TK_NOT:$e,TK_OR:it,TK_REPEAT:Ye,TK_RETURN:ht,TK_THEN:ct,TK_TRUE:z,TK_UNTIL:ne,TK_WHILE:B,TK_IDIV:Ae,TK_CONCAT:ve,TK_DOTS:H,TK_EQ:re,TK_GE:le,TK_LE:Be,TK_NE:M,TK_SHL:v,TK_SHR:O,TK_DBCOLON:Te,TK_EOS:Se,TK_FLT:Oe,TK_INT:P,TK_NAME:Q,TK_STRING:ie},Xe=["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while","//","..","...","==",">=","<=","~=","<<",">>","::","<eof>","<number>","<integer>","<name>","<string>"].map((Z,b)=>i(Z));class ze{constructor(){this.r=NaN,this.i=NaN,this.ts=null}}class dt{constructor(){this.token=NaN,this.seminfo=new ze}}class et{constructor(){this.current=NaN,this.linenumber=NaN,this.lastline=NaN,this.t=new dt,this.lookahead=new dt,this.fs=null,this.L=null,this.z=null,this.buff=null,this.h=null,this.dyd=null,this.source=null,this.envn=null}}const te=function(Z,b){let K=Z.buff;if(K.n+1>K.buffer.length){K.buffer.length>=a/2&&St(Z,i("lexical element too long",!0),0);let ue=K.buffer.length*2;_e(Z.L,K,ue)}K.buffer[K.n++]=b<0?255+b+1:b},fe=function(Z,b){if(b<A)return T.luaO_pushfstring(Z.L,i("'%c'",!0),b);{let K=Xe[b-A];return b<Se?T.luaO_pushfstring(Z.L,i("'%s'",!0),K):K}},Ne=function(Z){return Z.current===10||Z.current===13},qe=function(Z){Z.current=Z.z.zgetc()},st=function(Z){te(Z,Z.current),qe(Z)},C=new T.TValue(n,!0),Re=function(Z,b){let K=Z.L,ue=W(K,b),Pe=Z.h.strong.get(p(ue));if(Pe)ue=Pe.key.tsvalue();else{let u=new T.TValue(e,ue);F.luaH_setfrom(K,Z.h,u,C)}return ue},he=function(Z){let b=Z.current;s(Ne(Z)),qe(Z),Ne(Z)&&Z.current!==b&&qe(Z),++Z.linenumber>=a&&St(Z,i("chunk has too many lines",!0),0)},L=function(Z,b,K,ue,Pe){b.t={token:0,seminfo:new ze},b.L=Z,b.current=Pe,b.lookahead={token:Se,seminfo:new ze},b.z=K,b.fs=null,b.linenumber=1,b.lastline=1,b.source=ue,b.envn=y(Z,U),_e(Z,b.buff,r)},ye=function(Z,b){return Z.current===b?(qe(Z),!0):!1},Je=function(Z,b){return Z.current===b[0].charCodeAt(0)||Z.current===b[1].charCodeAt(0)?(st(Z),!0):!1},tt=function(Z,b){let K="Ee",ue=Z.current;for(s(f(Z.current)),st(Z),ue===48&&Je(Z,"xX")&&(K="Pp");;)if(Je(Z,K)&&Je(Z,"-+"),E(Z.current))st(Z);else if(Z.current===46)st(Z);else break;let Pe=new T.TValue;return T.luaO_str2num(ce(Z.buff),Pe)===0&&St(Z,i("malformed number",!0),Oe),Pe.ttisinteger()?(b.i=Pe.value,P):(s(Pe.ttisfloat()),b.r=Pe.value,Oe)},gt=function(Z,b){switch(b){case Q:case ie:case Oe:case P:return T.luaO_pushfstring(Z.L,i("'%s'",!0),ce(Z.buff));default:return fe(Z,b)}},St=function(Z,b,K){b=o.luaG_addinfo(Z.L,b,Z.source,Z.linenumber),K&&T.luaO_pushfstring(Z.L,i("%s near %s"),b,gt(Z,K)),l.luaD_throw(Z.L,t)},Tt=function(Z,b){St(Z,b,Z.t.token)},bt=function(Z){let b=0,K=Z.current;for(s(K===91||K===93),st(Z);Z.current===61;)st(Z),b++;return Z.current===K?b:-b-1},Yt=function(Z,b,K){let ue=Z.linenumber;st(Z),Ne(Z)&&he(Z);let Pe=!1;for(;!Pe;)switch(Z.current){case k:{let S=`unfinished long ${b?"string":"comment"} (starting at line ${ue})`;St(Z,i(S),Se);break}case 93:{bt(Z)===K&&(st(Z),Pe=!0);break}case 10:case 13:{te(Z,10),he(Z),b||V(Z.buff);break}default:b?st(Z):qe(Z)}b&&(b.ts=Re(Z,Z.buff.buffer.subarray(2+K,Z.buff.n-(2+K))))},Ot=function(Z,b,K){b||(Z.current!==k&&st(Z),St(Z,K,ie))},Pt=function(Z){return st(Z),Ot(Z,E(Z.current),i("hexadecimal digit expected",!0)),T.luaO_hexavalue(Z.current)},Gt=function(Z){let b=Pt(Z);return b=(b<<4)+Pt(Z),q(Z.buff,2),b},ln=function(Z){let b=4;st(Z),Ot(Z,Z.current===123,i("missing '{'",!0));let K=Pt(Z);for(st(Z);E(Z.current);)b++,K=(K<<4)+T.luaO_hexavalue(Z.current),Ot(Z,K<=1114111,i("UTF-8 value too large",!0)),st(Z);return Ot(Z,Z.current===125,i("missing '}'",!0)),qe(Z),q(Z.buff,b),K},dn=function(Z){let b=new Uint8Array(T.UTF8BUFFSZ),K=T.luaO_utf8esc(b,ln(Z));for(;K>0;K--)te(Z,b[T.UTF8BUFFSZ-K])},cn=function(Z){let b=0,K;for(K=0;K<3&&f(Z.current);K++)b=10*b+Z.current-48,st(Z);return Ot(Z,b<=255,i("decimal escape too large",!0)),q(Z.buff,K),b},an=function(Z,b,K){for(st(Z);Z.current!==b;)switch(Z.current){case k:St(Z,i("unfinished string",!0),Se);break;case 10:case 13:St(Z,i("unfinished string",!0),ie);break;case 92:{st(Z);let ue,Pe;switch(Z.current){case 97:Pe=7,ue="read_save";break;case 98:Pe=8,ue="read_save";break;case 102:Pe=12,ue="read_save";break;case 110:Pe=10,ue="read_save";break;case 114:Pe=13,ue="read_save";break;case 116:Pe=9,ue="read_save";break;case 118:Pe=11,ue="read_save";break;case 120:Pe=Gt(Z),ue="read_save";break;case 117:dn(Z),ue="no_save";break;case 10:case 13:he(Z),Pe=10,ue="only_save";break;case 92:case 34:case 39:Pe=Z.current,ue="read_save";break;case k:ue="no_save";break;case 122:{for(q(Z.buff,1),qe(Z);g(Z.current);)Ne(Z)?he(Z):qe(Z);ue="no_save";break}default:{Ot(Z,f(Z.current),i("invalid escape sequence",!0)),Pe=cn(Z),ue="only_save";break}}ue==="read_save"&&qe(Z),(ue==="read_save"||ue==="only_save")&&(q(Z.buff,1),te(Z,Pe));break}default:st(Z)}st(Z),K.ts=Re(Z,Z.buff.buffer.subarray(1,Z.buff.n-1))},tn=Object.create(null);Xe.forEach((Z,b)=>tn[x(Z)]=b);const Ie=function(Z){let b=tn[p(Z)];return b!==void 0&&b<=22},J=function(Z,b){for(V(Z.buff);;)switch(s(typeof Z.current=="number"),Z.current){case 10:case 13:{he(Z);break}case 32:case 12:case 9:case 11:{qe(Z);break}case 45:{if(qe(Z),Z.current!==45)return 45;if(qe(Z),Z.current===91){let K=bt(Z);if(V(Z.buff),K>=0){Yt(Z,null,K),V(Z.buff);break}}for(;!Ne(Z)&&Z.current!==k;)qe(Z);break}case 91:{let K=bt(Z);return K>=0?(Yt(Z,b,K),ie):(K!==-1&&St(Z,i("invalid long string delimiter",!0),ie),91)}case 61:return qe(Z),ye(Z,61)?re:61;case 60:return qe(Z),ye(Z,61)?Be:ye(Z,60)?v:60;case 62:return qe(Z),ye(Z,61)?le:ye(Z,62)?O:62;case 47:return qe(Z),ye(Z,47)?Ae:47;case 126:return qe(Z),ye(Z,61)?M:126;case 58:return qe(Z),ye(Z,58)?Te:58;case 34:case 39:return an(Z,Z.current,b),ie;case 46:return st(Z),ye(Z,46)?ye(Z,46)?H:ve:f(Z.current)?tt(Z,b):46;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return tt(Z,b);case k:return Se;default:if(h(Z.current)){do st(Z);while(_(Z.current));let K=Re(Z,ce(Z.buff));b.ts=K;let ue=tn[p(K)];return ue!==void 0&&ue<=22?ue+A:Q}else{let K=Z.current;return qe(Z),K}}},nt=function(Z){Z.lastline=Z.linenumber,Z.lookahead.token!==Se?(Z.t.token=Z.lookahead.token,Z.t.seminfo.i=Z.lookahead.seminfo.i,Z.t.seminfo.r=Z.lookahead.seminfo.r,Z.t.seminfo.ts=Z.lookahead.seminfo.ts,Z.lookahead.token=Se):Z.t.token=J(Z,Z.t.seminfo)},mt=function(Z){return s(Z.lookahead.token===Se),Z.lookahead.token=J(Z,Z.lookahead.seminfo),Z.lookahead.token};return ai.FIRST_RESERVED=A,ai.LUA_ENV=U,ai.LexState=et,ai.RESERVED=xe,ai.isreserved=Ie,ai.luaX_lookahead=mt,ai.luaX_newstring=Re,ai.luaX_next=nt,ai.luaX_setinput=L,ai.luaX_syntaxerror=Tt,ai.luaX_token2str=fe,ai.luaX_tokens=Xe,ai}var Zh;function hT(){if(Zh)return Bt;Zh=1;const{LUA_MULTRET:n,LUA_OPADD:e,LUA_OPBAND:t,LUA_OPBNOT:i,LUA_OPBOR:r,LUA_OPBXOR:a,LUA_OPDIV:s,LUA_OPIDIV:o,LUA_OPMOD:l,LUA_OPSHL:f,LUA_OPSHR:_,LUA_OPUNM:h,constant_types:{LUA_TBOOLEAN:g,LUA_TLIGHTUSERDATA:E,LUA_TLNGSTR:T,LUA_TNIL:y,LUA_TNUMFLT:x,LUA_TNUMINT:p,LUA_TTABLE:W},to_luastring:F}=Dn(),{lua_assert:k}=Rn,ce=Ou(),q=Ci(),V=wt,_e=Np(),A=xr(),U=Ls(),ee=V.OpCodesI,Y=q.TValue,de=255,X=-1,j={OPR_ADD:0,OPR_SUB:1,OPR_MUL:2,OPR_MOD:3,OPR_POW:4,OPR_DIV:5,OPR_IDIV:6,OPR_BAND:7,OPR_BOR:8,OPR_BXOR:9,OPR_SHL:10,OPR_SHR:11,OPR_CONCAT:12,OPR_EQ:13,OPR_LT:14,OPR_LE:15,OPR_NE:16,OPR_GT:17,OPR_GE:18,OPR_AND:19,OPR_OR:20,OPR_NOBINOPR:21},ke={OPR_MINUS:0,OPR_BNOT:1,OPR_NOT:2,OPR_LEN:3,OPR_NOUNOPR:4},Le=function(u){return u.t!==u.f},Ce=function(u,S){let N=_e.expkind;if(Le(u))return!1;switch(u.k){case N.VKINT:return S?new Y(p,u.u.ival):!0;case N.VKFLT:return S?new Y(x,u.u.nval):!0;default:return!1}},pe=function(u,S,N){let oe,G=S+N-1;if(u.pc>u.lasttarget&&(oe=u.f.code[u.pc-1],oe.opcode===ee.OP_LOADNIL)){let De=oe.A,Ge=De+oe.B;if(De<=S&&S<=Ge+1||S<=De&&De<=G+1){De<S&&(S=De),Ge>G&&(G=Ge),V.SETARG_A(oe,S),V.SETARG_B(oe,G-S);return}}M(u,ee.OP_LOADNIL,S,N-1,0)},Me=function(u,S){return u.f.code[S.u.info]},Ve=function(u,S){let N=u.f.code[S].sBx;return N===X?X:S+1+N},we=function(u,S,N){let oe=u.f.code[S],G=N-(S+1);k(N!==X),Math.abs(G)>V.MAXARG_sBx&&ce.luaX_syntaxerror(u.ls,F("control structure too long",!0)),V.SETARG_sBx(oe,G)},se=function(u,S,N){if(N===X)return S;if(S===X)S=N;else{let oe=S,G=Ve(u,oe);for(;G!==X;)oe=G,G=Ve(u,oe);we(u,oe,N)}return S},ge=function(u){let S=u.jpc;u.jpc=X;let N=O(u,ee.OP_JMP,0,X);return N=se(u,N,S),N},$e=function(u,S){return re(u,ge(u),S)},it=function(u,S,N){M(u,ee.OP_RETURN,S,N+1,0)},Ye=function(u,S,N,oe,G){return M(u,S,N,oe,G),ge(u)},ht=function(u){return u.lasttarget=u.pc,u.pc},ct=function(u,S){return S>=1&&V.testTMode(u.f.code[S-1].opcode)?S-1:S},z=function(u,S){return u.f.code[ct(u,S)]},ne=function(u,S,N){let oe=ct(u,S),G=u.f.code[oe];return G.opcode!==ee.OP_TESTSET?!1:(N!==V.NO_REG&&N!==G.B?V.SETARG_A(G,N):u.f.code[oe]=V.CREATE_ABC(ee.OP_TEST,G.B,0,G.C),!0)},B=function(u,S){for(;S!==X;S=Ve(u,S))ne(u,S,V.NO_REG)},Ae=function(u,S,N,oe,G){for(;S!==X;){let De=Ve(u,S);ne(u,S,oe)?we(u,S,N):we(u,S,G),S=De}},ve=function(u){Ae(u,u.jpc,u.pc,V.NO_REG,u.pc),u.jpc=X},H=function(u,S){ht(u),u.jpc=se(u,u.jpc,S)},re=function(u,S,N){N===u.pc?H(u,S):(k(N<u.pc),Ae(u,S,N,V.NO_REG,N))},le=function(u,S,N){for(N++;S!==X;S=Ve(u,S)){let oe=u.f.code[S];k(oe.opcode===ee.OP_JMP&&(oe.A===0||oe.A>=N)),V.SETARG_A(oe,N)}},Be=function(u,S){let N=u.f;return ve(u),N.code[u.pc]=S,N.lineinfo[u.pc]=u.ls.lastline,u.pc++},M=function(u,S,N,oe,G){return k(V.getOpMode(S)===V.iABC),k(V.getBMode(S)!==V.OpArgN||oe===0),k(V.getCMode(S)!==V.OpArgN||G===0),k(N<=V.MAXARG_A&&oe<=V.MAXARG_B&&G<=V.MAXARG_C),Be(u,V.CREATE_ABC(S,N,oe,G))},v=function(u,S,N,oe){return k(V.getOpMode(S)===V.iABx||V.getOpMode(S)===V.iAsBx),k(V.getCMode(S)===V.OpArgN),k(N<=V.MAXARG_A&&oe<=V.MAXARG_Bx),Be(u,V.CREATE_ABx(S,N,oe))},O=function(u,S,N,oe){return v(u,S,N,oe+V.MAXARG_sBx)},Te=function(u,S){return k(S<=V.MAXARG_Ax),Be(u,V.CREATE_Ax(ee.OP_EXTRAARG,S))},Se=function(u,S,N){if(N<=V.MAXARG_Bx)return v(u,ee.OP_LOADK,S,N);{let oe=v(u,ee.OP_LOADKX,S,0);return Te(u,N),oe}},Oe=function(u,S){let N=u.freereg+S;N>u.f.maxstacksize&&(N>=de&&ce.luaX_syntaxerror(u.ls,F("function or expression needs too many registers",!0)),u.f.maxstacksize=N)},P=function(u,S){Oe(u,S),u.freereg+=S},Q=function(u,S){!V.ISK(S)&&S>=u.nactvar&&(u.freereg--,k(S===u.freereg))},ie=function(u,S){S.k===_e.expkind.VNONRELOC&&Q(u,S.u.info)},xe=function(u,S,N){let oe=S.k===_e.expkind.VNONRELOC?S.u.info:-1,G=N.k===_e.expkind.VNONRELOC?N.u.info:-1;oe>G?(Q(u,oe),Q(u,G)):(Q(u,G),Q(u,oe))},Xe=function(u,S,N){let oe=u.f,G=A.luaH_get(u.L,u.ls.h,S);if(G.ttisinteger()){let Ge=G.value;if(Ge<u.nk&&oe.k[Ge].ttype()===N.ttype()&&oe.k[Ge].value===N.value)return Ge}let De=u.nk;return A.luaH_setfrom(u.L,u.ls.h,S,new q.TValue(p,De)),oe.k[De]=N,u.nk++,De},ze=function(u,S){let N=new Y(T,S);return Xe(u,N,N)},dt=function(u,S){let N=new Y(E,S),oe=new Y(p,S);return Xe(u,N,oe)},et=function(u,S){let N=new Y(x,S);return Xe(u,N,N)},te=function(u,S){let N=new Y(g,S);return Xe(u,N,N)},fe=function(u){let S=new Y(y,null),N=new Y(W,u.ls.h);return Xe(u,N,S)},Ne=function(u,S,N){let oe=_e.expkind;if(S.k===oe.VCALL)V.SETARG_C(Me(u,S),N+1);else if(S.k===oe.VVARARG){let G=Me(u,S);V.SETARG_B(G,N+1),V.SETARG_A(G,u.freereg),P(u,1)}else k(N===n)},qe=function(u,S){Ne(u,S,n)},st=function(u,S){let N=_e.expkind;S.k===N.VCALL?(k(Me(u,S).C===2),S.k=N.VNONRELOC,S.u.info=Me(u,S).A):S.k===N.VVARARG&&(V.SETARG_B(Me(u,S),2),S.k=N.VRELOCABLE)},C=function(u,S){let N=_e.expkind;switch(S.k){case N.VLOCAL:{S.k=N.VNONRELOC;break}case N.VUPVAL:{S.u.info=M(u,ee.OP_GETUPVAL,0,S.u.info,0),S.k=N.VRELOCABLE;break}case N.VINDEXED:{let oe;Q(u,S.u.ind.idx),S.u.ind.vt===N.VLOCAL?(Q(u,S.u.ind.t),oe=ee.OP_GETTABLE):(k(S.u.ind.vt===N.VUPVAL),oe=ee.OP_GETTABUP),S.u.info=M(u,oe,0,S.u.ind.t,S.u.ind.idx),S.k=N.VRELOCABLE;break}case N.VVARARG:case N.VCALL:{st(u,S);break}}},Re=function(u,S,N,oe){return ht(u),M(u,ee.OP_LOADBOOL,S,N,oe)},he=function(u,S,N){let oe=_e.expkind;switch(C(u,S),S.k){case oe.VNIL:{pe(u,N,1);break}case oe.VFALSE:case oe.VTRUE:{M(u,ee.OP_LOADBOOL,N,S.k===oe.VTRUE,0);break}case oe.VK:{Se(u,N,S.u.info);break}case oe.VKFLT:{Se(u,N,et(u,S.u.nval));break}case oe.VKINT:{Se(u,N,dt(u,S.u.ival));break}case oe.VRELOCABLE:{let G=Me(u,S);V.SETARG_A(G,N);break}case oe.VNONRELOC:{N!==S.u.info&&M(u,ee.OP_MOVE,N,S.u.info,0);break}default:{k(S.k===oe.VJMP);return}}S.u.info=N,S.k=oe.VNONRELOC},L=function(u,S){S.k!==_e.expkind.VNONRELOC&&(P(u,1),he(u,S,u.freereg-1))},ye=function(u,S){for(;S!==X;S=Ve(u,S))if(z(u,S).opcode!==ee.OP_TESTSET)return!0;return!1},Je=function(u,S,N){let oe=_e.expkind;if(he(u,S,N),S.k===oe.VJMP&&(S.t=se(u,S.t,S.u.info)),Le(S)){let G,De=X,Ge=X;if(ye(u,S.t)||ye(u,S.f)){let rt=S.k===oe.VJMP?X:ge(u);De=Re(u,N,0,1),Ge=Re(u,N,1,0),H(u,rt)}G=ht(u),Ae(u,S.f,G,N,De),Ae(u,S.t,G,N,Ge)}S.f=S.t=X,S.u.info=N,S.k=oe.VNONRELOC},tt=function(u,S){C(u,S),ie(u,S),P(u,1),Je(u,S,u.freereg-1)},gt=function(u,S){if(C(u,S),S.k===_e.expkind.VNONRELOC){if(!Le(S))return S.u.info;if(S.u.info>=u.nactvar)return Je(u,S,S.u.info),S.u.info}return tt(u,S),S.u.info},St=function(u,S){(S.k!==_e.expkind.VUPVAL||Le(S))&&gt(u,S)},Tt=function(u,S){Le(S)?gt(u,S):C(u,S)},bt=function(u,S){let N=_e.expkind,oe=!1;switch(Tt(u,S),S.k){case N.VTRUE:S.u.info=te(u,!0),oe=!0;break;case N.VFALSE:S.u.info=te(u,!1),oe=!0;break;case N.VNIL:S.u.info=fe(u),oe=!0;break;case N.VKINT:S.u.info=dt(u,S.u.ival),oe=!0;break;case N.VKFLT:S.u.info=et(u,S.u.nval),oe=!0;break;case N.VK:oe=!0;break}return oe&&(S.k=N.VK,S.u.info<=V.MAXINDEXRK)?V.RKASK(S.u.info):gt(u,S)},Yt=function(u,S,N){let oe=_e.expkind;switch(S.k){case oe.VLOCAL:{ie(u,N),Je(u,N,S.u.info);return}case oe.VUPVAL:{let G=gt(u,N);M(u,ee.OP_SETUPVAL,G,S.u.info,0);break}case oe.VINDEXED:{let G=S.u.ind.vt===oe.VLOCAL?ee.OP_SETTABLE:ee.OP_SETTABUP,De=bt(u,N);M(u,G,S.u.ind.t,S.u.ind.idx,De);break}}ie(u,N)},Ot=function(u,S,N){gt(u,S);let oe=S.u.info;ie(u,S),S.u.info=u.freereg,S.k=_e.expkind.VNONRELOC,P(u,2),M(u,ee.OP_SELF,S.u.info,oe,bt(u,N)),ie(u,N)},Pt=function(u,S){let N=z(u,S.u.info);k(V.testTMode(N.opcode)&&N.opcode!==ee.OP_TESTSET&&N.opcode!==ee.OP_TEST),V.SETARG_A(N,!N.A)},Gt=function(u,S,N){if(S.k===_e.expkind.VRELOCABLE){let oe=Me(u,S);if(oe.opcode===ee.OP_NOT)return u.pc--,Ye(u,ee.OP_TEST,oe.B,0,!N)}return L(u,S),ie(u,S),Ye(u,ee.OP_TESTSET,V.NO_REG,S.u.info,N)},ln=function(u,S){let N=_e.expkind,oe;switch(C(u,S),S.k){case N.VJMP:{Pt(u,S),oe=S.u.info;break}case N.VK:case N.VKFLT:case N.VKINT:case N.VTRUE:{oe=X;break}default:{oe=Gt(u,S,0);break}}S.f=se(u,S.f,oe),H(u,S.t),S.t=X},dn=function(u,S){let N=_e.expkind,oe;switch(C(u,S),S.k){case N.VJMP:{oe=S.u.info;break}case N.VNIL:case N.VFALSE:{oe=X;break}default:{oe=Gt(u,S,1);break}}S.t=se(u,S.t,oe),H(u,S.f),S.f=X},cn=function(u,S){let N=_e.expkind;switch(C(u,S),S.k){case N.VNIL:case N.VFALSE:{S.k=N.VTRUE;break}case N.VK:case N.VKFLT:case N.VKINT:case N.VTRUE:{S.k=N.VFALSE;break}case N.VJMP:{Pt(u,S);break}case N.VRELOCABLE:case N.VNONRELOC:{L(u,S),ie(u,S),S.u.info=M(u,ee.OP_NOT,0,S.u.info,0),S.k=N.VRELOCABLE;break}}{let oe=S.f;S.f=S.t,S.t=oe}B(u,S.f),B(u,S.t)},an=function(u,S,N){let oe=_e.expkind;k(!Le(S)&&(_e.vkisinreg(S.k)||S.k===oe.VUPVAL)),S.u.ind.t=S.u.info,S.u.ind.idx=bt(u,N),S.u.ind.vt=S.k===oe.VUPVAL?oe.VUPVAL:oe.VLOCAL,S.k=oe.VINDEXED},tn=function(u,S,N){switch(u){case t:case r:case a:case f:case _:case i:return U.tointeger(S)!==!1&&U.tointeger(N)!==!1;case s:case o:case l:return N.value!==0;default:return 1}},Ie=function(u,S,N){let oe=_e.expkind,G,De;if(!(G=Ce(S,!0))||!(De=Ce(N,!0))||!tn(u,G,De))return 0;let Ge=new Y;if(q.luaO_arith(null,u,G,De,Ge),Ge.ttisinteger())S.k=oe.VKINT,S.u.ival=Ge.value;else{let rt=Ge.value;if(isNaN(rt)||rt===0)return!1;S.k=oe.VKFLT,S.u.nval=rt}return!0},J=function(u,S,N,oe){let G=gt(u,N);ie(u,N),N.u.info=M(u,S,0,G,0),N.k=_e.expkind.VRELOCABLE,ue(u,oe)},nt=function(u,S,N,oe,G){let De=bt(u,oe),Ge=bt(u,N);xe(u,N,oe),N.u.info=M(u,S,0,Ge,De),N.k=_e.expkind.VRELOCABLE,ue(u,G)},mt=function(u,S,N,oe){let G=_e.expkind,De;N.k===G.VK?De=V.RKASK(N.u.info):(k(N.k===G.VNONRELOC),De=N.u.info);let Ge=bt(u,oe);switch(xe(u,N,oe),S){case j.OPR_NE:{N.u.info=Ye(u,ee.OP_EQ,0,De,Ge);break}case j.OPR_GT:case j.OPR_GE:{let rt=S-j.OPR_NE+ee.OP_EQ;N.u.info=Ye(u,rt,1,Ge,De);break}default:{let rt=S-j.OPR_EQ+ee.OP_EQ;N.u.info=Ye(u,rt,1,De,Ge);break}}N.k=G.VJMP},Z=function(u,S,N,oe){let G=new _e.expdesc;switch(G.k=_e.expkind.VKINT,G.u.ival=G.u.nval=G.u.info=0,G.t=X,G.f=X,S){case ke.OPR_MINUS:case ke.OPR_BNOT:if(Ie(S+h,N,G))break;case ke.OPR_LEN:J(u,S+ee.OP_UNM,N,oe);break;case ke.OPR_NOT:cn(u,N);break}},b=function(u,S,N){switch(S){case j.OPR_AND:{ln(u,N);break}case j.OPR_OR:{dn(u,N);break}case j.OPR_CONCAT:{tt(u,N);break}case j.OPR_ADD:case j.OPR_SUB:case j.OPR_MUL:case j.OPR_DIV:case j.OPR_IDIV:case j.OPR_MOD:case j.OPR_POW:case j.OPR_BAND:case j.OPR_BOR:case j.OPR_BXOR:case j.OPR_SHL:case j.OPR_SHR:{Ce(N,!1)||bt(u,N);break}default:{bt(u,N);break}}},K=function(u,S,N,oe,G){let De=_e.expkind;switch(S){case j.OPR_AND:{k(N.t===X),C(u,oe),oe.f=se(u,oe.f,N.f),N.to(oe);break}case j.OPR_OR:{k(N.f===X),C(u,oe),oe.t=se(u,oe.t,N.t),N.to(oe);break}case j.OPR_CONCAT:{Tt(u,oe);let Ge=Me(u,oe);oe.k===De.VRELOCABLE&&Ge.opcode===ee.OP_CONCAT?(k(N.u.info===Ge.B-1),ie(u,N),V.SETARG_B(Ge,N.u.info),N.k=De.VRELOCABLE,N.u.info=oe.u.info):(tt(u,oe),nt(u,ee.OP_CONCAT,N,oe,G));break}case j.OPR_ADD:case j.OPR_SUB:case j.OPR_MUL:case j.OPR_DIV:case j.OPR_IDIV:case j.OPR_MOD:case j.OPR_POW:case j.OPR_BAND:case j.OPR_BOR:case j.OPR_BXOR:case j.OPR_SHL:case j.OPR_SHR:{Ie(S+e,N,oe)||nt(u,S+ee.OP_ADD,N,oe,G);break}case j.OPR_EQ:case j.OPR_LT:case j.OPR_LE:case j.OPR_NE:case j.OPR_GT:case j.OPR_GE:{mt(u,S,N,oe);break}}return N},ue=function(u,S){u.f.lineinfo[u.pc-1]=S},Pe=function(u,S,N,oe){let G=(N-1)/V.LFIELDS_PER_FLUSH+1,De=oe===n?0:oe;k(oe!==0&&oe<=V.LFIELDS_PER_FLUSH),G<=V.MAXARG_C?M(u,ee.OP_SETLIST,S,De,G):G<=V.MAXARG_Ax?(M(u,ee.OP_SETLIST,S,De,0),Te(u,G)):ce.luaX_syntaxerror(u.ls,F("constructor too long",!0)),u.freereg=S+1};return Bt.BinOpr=j,Bt.NO_JUMP=X,Bt.UnOpr=ke,Bt.getinstruction=Me,Bt.luaK_checkstack=Oe,Bt.luaK_code=Be,Bt.luaK_codeABC=M,Bt.luaK_codeABx=v,Bt.luaK_codeAsBx=O,Bt.luaK_codek=Se,Bt.luaK_concat=se,Bt.luaK_dischargevars=C,Bt.luaK_exp2RK=bt,Bt.luaK_exp2anyreg=gt,Bt.luaK_exp2anyregup=St,Bt.luaK_exp2nextreg=tt,Bt.luaK_exp2val=Tt,Bt.luaK_fixline=ue,Bt.luaK_getlabel=ht,Bt.luaK_goiffalse=dn,Bt.luaK_goiftrue=ln,Bt.luaK_indexed=an,Bt.luaK_infix=b,Bt.luaK_intK=dt,Bt.luaK_jump=ge,Bt.luaK_jumpto=$e,Bt.luaK_nil=pe,Bt.luaK_numberK=et,Bt.luaK_patchclose=le,Bt.luaK_patchlist=re,Bt.luaK_patchtohere=H,Bt.luaK_posfix=K,Bt.luaK_prefix=Z,Bt.luaK_reserveregs=P,Bt.luaK_ret=it,Bt.luaK_self=Ot,Bt.luaK_setlist=Pe,Bt.luaK_setmultret=qe,Bt.luaK_setoneret=st,Bt.luaK_setreturns=Ne,Bt.luaK_storevar=Yt,Bt.luaK_stringK=ze,Bt}var Jh;function Np(){if(Jh)return fa;Jh=1;const{LUA_MULTRET:n,to_luastring:e}=Dn(),{BinOpr:{OPR_ADD:t,OPR_AND:i,OPR_BAND:r,OPR_BOR:a,OPR_BXOR:s,OPR_CONCAT:o,OPR_DIV:l,OPR_EQ:f,OPR_GE:_,OPR_GT:h,OPR_IDIV:g,OPR_LE:E,OPR_LT:T,OPR_MOD:y,OPR_MUL:x,OPR_NE:p,OPR_NOBINOPR:W,OPR_OR:F,OPR_POW:k,OPR_SHL:ce,OPR_SHR:q,OPR_SUB:V},UnOpr:{OPR_BNOT:_e,OPR_LEN:A,OPR_MINUS:U,OPR_NOT:ee,OPR_NOUNOPR:Y},NO_JUMP:de,getinstruction:X,luaK_checkstack:j,luaK_codeABC:ke,luaK_codeABx:Le,luaK_codeAsBx:Ce,luaK_codek:pe,luaK_concat:Me,luaK_dischargevars:Ve,luaK_exp2RK:we,luaK_exp2anyreg:se,luaK_exp2anyregup:ge,luaK_exp2nextreg:$e,luaK_exp2val:it,luaK_fixline:Ye,luaK_getlabel:ht,luaK_goiffalse:ct,luaK_goiftrue:z,luaK_indexed:ne,luaK_infix:B,luaK_intK:Ae,luaK_jump:ve,luaK_jumpto:H,luaK_nil:re,luaK_patchclose:le,luaK_patchlist:Be,luaK_patchtohere:M,luaK_posfix:v,luaK_prefix:O,luaK_reserveregs:Te,luaK_ret:Se,luaK_self:Oe,luaK_setlist:P,luaK_setmultret:Q,luaK_setoneret:ie,luaK_setreturns:xe,luaK_storevar:Xe,luaK_stringK:ze}=hT(),dt=Qi(),et=Bs(),te=Ou(),{LUAI_MAXCCALLS:fe,MAX_INT:Ne,lua_assert:qe}=Rn,st=Ci(),{OpCodesI:{OP_CALL:C,OP_CLOSURE:Re,OP_FORLOOP:he,OP_FORPREP:L,OP_GETUPVAL:ye,OP_MOVE:Je,OP_NEWTABLE:tt,OP_SETTABLE:gt,OP_TAILCALL:St,OP_TFORCALL:Tt,OP_TFORLOOP:bt,OP_VARARG:Yt},LFIELDS_PER_FLUSH:Ot,SETARG_B:Pt,SETARG_C:Gt,SET_OPCODE:ln}=wt,{luaS_eqlngstr:dn,luaS_new:cn,luaS_newliteral:an}=qn,tn=xr(),Ie=et.Proto,J=te.RESERVED,nt=200,mt=function(m){return m===K.VCALL||m===K.VVARARG},Z=function(m,I){return dn(m,I)};class b{constructor(){this.previous=null,this.firstlabel=NaN,this.firstgoto=NaN,this.nactvar=NaN,this.upval=NaN,this.isloop=NaN}}const K={VVOID:0,VNIL:1,VTRUE:2,VFALSE:3,VK:4,VKFLT:5,VKINT:6,VNONRELOC:7,VLOCAL:8,VUPVAL:9,VINDEXED:10,VJMP:11,VRELOCABLE:12,VCALL:13,VVARARG:14},ue=function(m){return K.VLOCAL<=m&&m<=K.VINDEXED},Pe=function(m){return m===K.VNONRELOC||m===K.VLOCAL};class u{constructor(){this.k=NaN,this.u={ival:NaN,nval:NaN,info:NaN,ind:{idx:NaN,t:NaN,vt:NaN}},this.t=NaN,this.f=NaN}to(I){this.k=I.k,this.u=I.u,this.t=I.t,this.f=I.f}}class S{constructor(){this.f=null,this.prev=null,this.ls=null,this.bl=null,this.pc=NaN,this.lasttarget=NaN,this.jpc=NaN,this.nk=NaN,this.np=NaN,this.firstlocal=NaN,this.nlocvars=NaN,this.nactvar=NaN,this.nups=NaN,this.freereg=NaN}}class N{constructor(){this.idx=NaN}}class oe{constructor(){this.name=null,this.pc=NaN,this.line=NaN,this.nactvar=NaN}}class G{constructor(){this.arr=[],this.n=NaN,this.size=NaN}}class De{constructor(){this.actvar={arr:[],n:NaN,size:NaN},this.gt=new G,this.label=new G}}const Ge=function(m,I){m.t.token=0,te.luaX_syntaxerror(m,I)},rt=function(m,I){te.luaX_syntaxerror(m,st.luaO_pushfstring(m.L,e("%s expected",!0),te.luaX_token2str(m,I)))},Mt=function(m,I,me){let He=m.ls.L,at=m.f.linedefined,vt=at===0?e("main function",!0):st.luaO_pushfstring(He,e("function at line %d",!0),at),kt=st.luaO_pushfstring(He,e("too many %s (limit is %d) in %s",!0),me,I,vt);te.luaX_syntaxerror(m.ls,kt)},Nt=function(m,I,me,He){I>me&&Mt(m,me,He)},Ct=function(m,I){return m.t.token===I?(te.luaX_next(m),!0):!1},sn=function(m,I){m.t.token!==I&&rt(m,I)},Lt=function(m,I){sn(m,I),te.luaX_next(m)},R=function(m,I,me){I||te.luaX_syntaxerror(m,me)},Ue=function(m,I,me,He){Ct(m,I)||(He===m.linenumber?rt(m,I):te.luaX_syntaxerror(m,st.luaO_pushfstring(m.L,e("%s expected (to close %s at line %d)"),te.luaX_token2str(m,I),te.luaX_token2str(m,me),He)))},je=function(m){sn(m,J.TK_NAME);let I=m.t.seminfo.ts;return te.luaX_next(m),I},Ze=function(m,I,me){m.f=m.t=de,m.k=I,m.u.info=me},pt=function(m,I,me){Ze(I,K.VK,ze(m.fs,me))},Qe=function(m,I){pt(m,I,je(m))},ot=function(m,I){let me=m.fs,He=me.f;return He.locvars[me.nlocvars]=new st.LocVar,He.locvars[me.nlocvars].varname=I,me.nlocvars++},Dt=function(m,I){let me=m.fs,He=m.dyd,at=ot(m,I);Nt(me,He.actvar.n+1-me.firstlocal,nt,e("local variables",!0)),He.actvar.arr[He.actvar.n]=new N,He.actvar.arr[He.actvar.n].idx=at,He.actvar.n++},Ke=function(m,I){Dt(m,te.luaX_newstring(m,e(I,!0)))},lt=function(m,I){let me=m.ls.dyd.actvar.arr[m.firstlocal+I].idx;return qe(me<m.nlocvars),m.f.locvars[me]},_t=function(m,I){let me=m.fs;for(me.nactvar=me.nactvar+I;I;I--)lt(me,me.nactvar-I).startpc=me.pc},It=function(m,I){for(m.ls.dyd.actvar.n-=m.nactvar-I;m.nactvar>I;)lt(m,--m.nactvar).endpc=m.pc},Bn=function(m,I){let me=m.f.upvalues;for(let He=0;He<m.nups;He++)if(Z(me[He].name,I))return He;return-1},kn=function(m,I,me){let He=m.f;return Nt(m,m.nups+1,et.MAXUPVAL,e("upvalues",!0)),He.upvalues[m.nups]={instack:me.k===K.VLOCAL,idx:me.u.info,name:I},m.nups++},Vi=function(m,I){for(let me=m.nactvar-1;me>=0;me--)if(Z(I,lt(m,me).varname))return me;return-1},Hi=function(m,I){let me=m.bl;for(;me.nactvar>I;)me=me.previous;me.upval=1},$n=function(m,I,me,He){if(m===null)Ze(me,K.VVOID,0);else{let at=Vi(m,I);if(at>=0)Ze(me,K.VLOCAL,at),He||Hi(m,at);else{let vt=Bn(m,I);if(vt<0){if($n(m.prev,I,me,0),me.k===K.VVOID)return;vt=kn(m,I,me)}Ze(me,K.VUPVAL,vt)}}},Fa=function(m,I){let me=je(m),He=m.fs;if($n(He,me,I,1),I.k===K.VVOID){let at=new u;$n(He,m.envn,I,1),qe(I.k!==K.VVOID),pt(m,at,me),ne(He,I,at)}},Zr=function(m,I,me,He){let at=m.fs,vt=I-me;if(mt(He.k))vt++,vt<0&&(vt=0),xe(at,He,vt),vt>1&&Te(at,vt-1);else if(He.k!==K.VVOID&&$e(at,He),vt>0){let kt=at.freereg;Te(at,vt),re(at,kt,vt)}me>I&&(m.fs.freereg-=me-I)},zi=function(m){let I=m.L;++I.nCcalls,Nt(m.fs,I.nCcalls,fe,e("JS levels",!0))},Jr=function(m){return m.L.nCcalls--},Qr=function(m,I,me){let He=m.fs,at=m.dyd.gt,vt=at.arr[I];if(qe(Z(vt.name,me.name)),vt.nactvar<me.nactvar){let kt=lt(He,vt.nactvar).varname,ri=st.luaO_pushfstring(m.L,e("<goto %s> at line %d jumps into the scope of local '%s'"),vt.name.getstr(),vt.line,kt.getstr());Ge(m,ri)}Be(He,vt.pc,me.pc);for(let kt=I;kt<at.n-1;kt++)at.arr[kt]=at.arr[kt+1];at.n--},Ba=function(m,I){let me=m.fs.bl,He=m.dyd,at=He.gt.arr[I];for(let vt=me.firstlabel;vt<He.label.n;vt++){let kt=He.label.arr[vt];if(Z(kt.name,at.name))return at.nactvar>kt.nactvar&&(me.upval||He.label.n>me.firstlabel)&&le(m.fs,at.pc,kt.nactvar),Qr(m,I,kt),!0}return!1},er=function(m,I,me,He,at){let vt=I.n;return I.arr[vt]=new oe,I.arr[vt].name=me,I.arr[vt].line=He,I.arr[vt].nactvar=m.fs.nactvar,I.arr[vt].pc=at,I.n=vt+1,vt},Ga=function(m,I){let me=m.dyd.gt,He=m.fs.bl.firstgoto;for(;He<me.n;)Z(me.arr[He].name,I.name)?Qr(m,He,I):He++},Hs=function(m,I){let me=I.firstgoto,He=m.ls.dyd.gt;for(;me<He.n;){let at=He.arr[me];at.nactvar>I.nactvar&&(I.upval&&le(m,at.pc,I.nactvar),at.nactvar=I.nactvar),Ba(m.ls,me)||me++}},ii=function(m,I,me){I.isloop=me,I.nactvar=m.nactvar,I.firstlabel=m.ls.dyd.label.n,I.firstgoto=m.ls.dyd.gt.n,I.upval=0,I.previous=m.bl,m.bl=I,qe(m.freereg===m.nactvar)},Va=function(m){let I=an(m.L,"break"),me=er(m,m.dyd.label,I,0,m.fs.pc);Ga(m,m.dyd.label.arr[me])},ea=function(m,I){let me=te.isreserved(I.name)?"<%s> at line %d not inside a loop":"no visible label '%s' for <goto> at line %d";me=st.luaO_pushfstring(m.L,e(me),I.name.getstr(),I.line),Ge(m,me)},ta=function(m){let I=m.L,me=new Ie(I),He=m.fs,at=He.f;return at.p[He.np++]=me,me},zs=function(m,I){let me=m.fs.prev;Ze(I,K.VRELOCABLE,Le(me,Re,0,me.np-1)),$e(me,I)},Ha=function(m,I,me){I.prev=m.fs,I.ls=m,m.fs=I,I.pc=0,I.lasttarget=0,I.jpc=de,I.freereg=0,I.nk=0,I.np=0,I.nups=0,I.nlocvars=0,I.nactvar=0,I.firstlocal=m.dyd.actvar.n,I.bl=null;let He=I.f;He.source=m.source,He.maxstacksize=2,ii(I,me,!1)},ci=function(m){let I=m.bl,me=m.ls;if(I.previous&&I.upval){let He=ve(m);le(m,He,I.nactvar),M(m,He)}I.isloop&&Va(me),m.bl=I.previous,It(m,I.nactvar),qe(I.nactvar===m.nactvar),m.freereg=m.nactvar,me.dyd.label.n=I.firstlabel,I.previous?Hs(m,I):I.firstgoto<me.dyd.gt.n&&ea(me,me.dyd.gt.arr[I.firstgoto])},na=function(m){let I=m.fs;Se(I,0,0),ci(I),qe(I.bl===null),m.fs=I.prev},Sr=function(m,I){switch(m.t.token){case J.TK_ELSE:case J.TK_ELSEIF:case J.TK_END:case J.TK_EOS:return!0;case J.TK_UNTIL:return I;default:return!1}},tr=function(m){for(;!Sr(m,1);){if(m.t.token===J.TK_RETURN){sc(m);return}sc(m)}},ia=function(m,I){let me=m.fs,He=new u;ge(me,I),te.luaX_next(m),Qe(m,He),ne(me,I,He)},ui=function(m,I){te.luaX_next(m),w(m,I),it(m.fs,I),Lt(m,93)};class Tr{constructor(){this.v=new u,this.t=new u,this.nh=NaN,this.na=NaN,this.tostore=NaN}}const Wi=function(m,I){let me=m.fs,He=m.fs.freereg,at=new u,vt=new u;m.t.token===J.TK_NAME?(Nt(me,I.nh,Ne,e("items in a constructor",!0)),Qe(m,at)):ui(m,at),I.nh++,Lt(m,61);let kt=we(me,at);w(m,vt),ke(me,gt,I.t.u.info,kt,we(me,vt)),me.freereg=He},Ws=function(m,I){I.v.k!==K.VVOID&&($e(m,I.v),I.v.k=K.VVOID,I.tostore===Ot&&(P(m,I.t.u.info,I.na,I.tostore),I.tostore=0))},Mr=function(m,I){I.tostore!==0&&(mt(I.v.k)?(Q(m,I.v),P(m,I.t.u.info,I.na,n),I.na--):(I.v.k!==K.VVOID&&$e(m,I.v),P(m,I.t.u.info,I.na,I.tostore)))},br=function(m,I){w(m,I.v),Nt(m.fs,I.na,Ne,e("items in a constructor",!0)),I.na++,I.tostore++},Xs=function(m,I){switch(m.t.token){case J.TK_NAME:{te.luaX_lookahead(m)!==61?br(m,I):Wi(m,I);break}case 91:{Wi(m,I);break}default:{br(m,I);break}}},ra=function(m,I){let me=m.fs,He=m.linenumber,at=ke(me,tt,0,0,0),vt=new Tr;vt.na=vt.nh=vt.tostore=0,vt.t=I,Ze(I,K.VRELOCABLE,at),Ze(vt.v,K.VVOID,0),$e(m.fs,I),Lt(m,123);do{if(qe(vt.v.k===K.VVOID||vt.tostore>0),m.t.token===125)break;Ws(me,vt),Xs(m,vt)}while(Ct(m,44)||Ct(m,59));Ue(m,125,123,He),Mr(me,vt),Pt(me.f.code[at],st.luaO_int2fb(vt.na)),Gt(me.f.code[at],st.luaO_int2fb(vt.nh))},Ks=function(m){let I=m.fs,me=I.f,He=0;if(me.is_vararg=!1,m.t.token!==41)do switch(m.t.token){case J.TK_NAME:{Dt(m,je(m)),He++;break}case J.TK_DOTS:{te.luaX_next(m),me.is_vararg=!0;break}default:te.luaX_syntaxerror(m,e("<name> or '...' expected",!0))}while(!me.is_vararg&&Ct(m,44));_t(m,He),me.numparams=I.nactvar,Te(I,I.nactvar)},aa=function(m,I,me,He){let at=new S,vt=new b;at.f=ta(m),at.f.linedefined=He,Ha(m,at,vt),Lt(m,40),me&&(Ke(m,"self"),_t(m,1)),Ks(m),Lt(m,41),tr(m),at.f.lastlinedefined=m.linenumber,Ue(m,J.TK_END,J.TK_FUNCTION,He),zs(m,I),na(m)},Ui=function(m,I){let me=1;for(w(m,I);Ct(m,44);)$e(m.fs,I),w(m,I),me++;return me},za=function(m,I,me){let He=m.fs,at=new u;switch(m.t.token){case 40:{te.luaX_next(m),m.t.token===41?at.k=K.VVOID:(Ui(m,at),Q(He,at)),Ue(m,41,40,me);break}case 123:{ra(m,at);break}case J.TK_STRING:{pt(m,at,m.t.seminfo.ts),te.luaX_next(m);break}default:te.luaX_syntaxerror(m,e("function arguments expected",!0))}qe(I.k===K.VNONRELOC);let vt,kt=I.u.info;mt(at.k)?vt=n:(at.k!==K.VVOID&&$e(He,at),vt=He.freereg-(kt+1)),Ze(I,K.VCALL,ke(He,C,kt,vt+1,2)),Ye(He,me),He.freereg=kt+1},js=function(m,I){switch(m.t.token){case 40:{let me=m.linenumber;te.luaX_next(m),w(m,I),Ue(m,41,40,me),Ve(m.fs,I);return}case J.TK_NAME:{Fa(m,I);return}default:te.luaX_syntaxerror(m,e("unexpected symbol",!0))}},sa=function(m,I){let me=m.fs,He=m.linenumber;for(js(m,I);;)switch(m.t.token){case 46:{ia(m,I);break}case 91:{let at=new u;ge(me,I),ui(m,at),ne(me,I,at);break}case 58:{let at=new u;te.luaX_next(m),Qe(m,at),Oe(me,I,at),za(m,I,He);break}case 40:case J.TK_STRING:case 123:{$e(me,I),za(m,I,He);break}default:return}},qs=function(m,I){switch(m.t.token){case J.TK_FLT:{Ze(I,K.VKFLT,0),I.u.nval=m.t.seminfo.r;break}case J.TK_INT:{Ze(I,K.VKINT,0),I.u.ival=m.t.seminfo.i;break}case J.TK_STRING:{pt(m,I,m.t.seminfo.ts);break}case J.TK_NIL:{Ze(I,K.VNIL,0);break}case J.TK_TRUE:{Ze(I,K.VTRUE,0);break}case J.TK_FALSE:{Ze(I,K.VFALSE,0);break}case J.TK_DOTS:{let me=m.fs;R(m,me.f.is_vararg,e("cannot use '...' outside a vararg function",!0)),Ze(I,K.VVARARG,ke(me,Yt,0,1,0));break}case 123:{ra(m,I);return}case J.TK_FUNCTION:{te.luaX_next(m),aa(m,I,0,m.linenumber);return}default:{sa(m,I);return}}te.luaX_next(m)},Fo=function(m){switch(m){case J.TK_NOT:return ee;case 45:return U;case 126:return _e;case 35:return A;default:return Y}},$s=function(m){switch(m){case 43:return t;case 45:return V;case 42:return x;case 37:return y;case 94:return k;case 47:return l;case J.TK_IDIV:return g;case 38:return r;case 124:return a;case 126:return s;case J.TK_SHL:return ce;case J.TK_SHR:return q;case J.TK_CONCAT:return o;case J.TK_NE:return p;case J.TK_EQ:return f;case 60:return T;case J.TK_LE:return E;case 62:return h;case J.TK_GE:return _;case J.TK_AND:return i;case J.TK_OR:return F;default:return W}},d=[{left:10,right:10},{left:10,right:10},{left:11,right:11},{left:11,right:11},{left:14,right:13},{left:11,right:11},{left:11,right:11},{left:6,right:6},{left:4,right:4},{left:5,right:5},{left:7,right:7},{left:7,right:7},{left:9,right:8},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:2,right:2},{left:1,right:1}],$=12,c=function(m,I,me){zi(m);let He=Fo(m.t.token);if(He!==Y){let vt=m.linenumber;te.luaX_next(m),c(m,I,$),O(m.fs,He,I,vt)}else qs(m,I);let at=$s(m.t.token);for(;at!==W&&d[at].left>me;){let vt=new u,kt=m.linenumber;te.luaX_next(m),B(m.fs,at,I);let ri=c(m,vt,d[at].right);v(m.fs,at,I,vt,kt),at=ri}return Jr(m),at},w=function(m,I){c(m,I,0)},D=function(m){let I=m.fs,me=new b;ii(I,me,0),tr(m),ci(I)};class ae{constructor(){this.prev=null,this.v=new u}}const Ee=function(m,I,me){let He=m.fs,at=He.freereg,vt=!1;for(;I;I=I.prev)I.v.k===K.VINDEXED&&(I.v.u.ind.vt===me.k&&I.v.u.ind.t===me.u.info&&(vt=!0,I.v.u.ind.vt=K.VLOCAL,I.v.u.ind.t=at),me.k===K.VLOCAL&&I.v.u.ind.idx===me.u.info&&(vt=!0,I.v.u.ind.idx=at));if(vt){let kt=me.k===K.VLOCAL?Je:ye;ke(He,kt,at,me.u.info,0),Te(He,1)}},Fe=function(m,I,me){let He=new u;if(R(m,ue(I.v.k),e("syntax error",!0)),Ct(m,44)){let at=new ae;at.prev=I,sa(m,at.v),at.v.k!==K.VINDEXED&&Ee(m,I,at.v),Nt(m.fs,me+m.L.nCcalls,fe,e("JS levels",!0)),Fe(m,at,me+1)}else{Lt(m,61);let at=Ui(m,He);if(at!==me)Zr(m,me,at,He);else{ie(m.fs,He),Xe(m.fs,I.v,He);return}}Ze(He,K.VNONRELOC,m.fs.freereg-1),Xe(m.fs,I.v,He)},xt=function(m){let I=new u;return w(m,I),I.k===K.VNIL&&(I.k=K.VFALSE),z(m.fs,I),I.f},yt=function(m,I){let me=m.linenumber,He;Ct(m,J.TK_GOTO)?He=je(m):(te.luaX_next(m),He=an(m.L,"break"));let at=er(m,m.dyd.gt,He,me,I);Ba(m,at)},$t=function(m,I,me){for(let He=m.bl.firstlabel;He<I.n;He++)if(Z(me,I.arr[He].name)){let at=st.luaO_pushfstring(m.ls.L,e("label '%s' already defined on line %d",!0),me.getstr(),I.arr[He].line);Ge(m.ls,at)}},un=function(m){for(;m.t.token===59||m.t.token===J.TK_DBCOLON;)sc(m)},Vt=function(m,I,me){let He=m.fs,at=m.dyd.label,vt;$t(He,at,I),Lt(m,J.TK_DBCOLON),vt=er(m,at,I,me,ht(He)),un(m),Sr(m,0)&&(at.arr[vt].nactvar=He.bl.nactvar),Ga(m,at.arr[vt])},jt=function(m,I){let me=m.fs,He=new b;te.luaX_next(m);let at=ht(me),vt=xt(m);ii(me,He,1),Lt(m,J.TK_DO),D(m),H(me,at),Ue(m,J.TK_END,J.TK_WHILE,I),ci(me),M(me,vt)},nr=function(m,I){let me=m.fs,He=ht(me),at=new b,vt=new b;ii(me,at,1),ii(me,vt,0),te.luaX_next(m),tr(m),Ue(m,J.TK_UNTIL,J.TK_REPEAT,I);let kt=xt(m);vt.upval&&le(me,kt,vt.nactvar),ci(me),Be(me,kt,He),ci(me)},ac=function(m){let I=new u;return w(m,I),$e(m.fs,I),qe(I.k===K.VNONRELOC),I.u.info},gf=function(m,I,me,He,at){let vt=new b,kt=m.fs,ri;_t(m,3),Lt(m,J.TK_DO);let Wa=at?Ce(kt,L,I,de):ve(kt);ii(kt,vt,0),_t(m,He),Te(kt,He),D(m),ci(kt),M(kt,Wa),at?ri=Ce(kt,he,I,de):(ke(kt,Tt,I,0,He),Ye(kt,me),ri=Ce(kt,bt,I+2,de)),Be(kt,ri,Wa+1),Ye(kt,me)},pm=function(m,I,me){let He=m.fs,at=He.freereg;Ke(m,"(for index)"),Ke(m,"(for limit)"),Ke(m,"(for step)"),Dt(m,I),Lt(m,61),ac(m),Lt(m,44),ac(m),Ct(m,44)?ac(m):(pe(He,He.freereg,Ae(He,1)),Te(He,1)),gf(m,at,me,1,1)},_m=function(m,I){let me=m.fs,He=new u,at=4,vt=me.freereg;for(Ke(m,"(for generator)"),Ke(m,"(for state)"),Ke(m,"(for control)"),Dt(m,I);Ct(m,44);)Dt(m,je(m)),at++;Lt(m,J.TK_IN);let kt=m.linenumber;Zr(m,3,Ui(m,He),He),j(me,3),gf(m,vt,kt,at-3,0)},mm=function(m,I){let me=m.fs,He=new b;ii(me,He,1),te.luaX_next(m);let at=je(m);switch(m.t.token){case 61:pm(m,at,I);break;case 44:case J.TK_IN:_m(m,at);break;default:te.luaX_syntaxerror(m,e("'=' or 'in' expected",!0))}Ue(m,J.TK_END,J.TK_FOR,I),ci(me)},vf=function(m,I){let me=new b,He=m.fs,at=new u,vt;if(te.luaX_next(m),w(m,at),Lt(m,J.TK_THEN),m.t.token===J.TK_GOTO||m.t.token===J.TK_BREAK){for(ct(m.fs,at),ii(He,me,!1),yt(m,at.t);Ct(m,59););if(Sr(m,0))return ci(He),I;vt=ve(He)}else z(m.fs,at),ii(He,me,!1),vt=at.f;return tr(m),ci(He),(m.t.token===J.TK_ELSE||m.t.token===J.TK_ELSEIF)&&(I=Me(He,I,ve(He))),M(He,vt),I},gm=function(m,I){let me=m.fs,He=de;for(He=vf(m,He);m.t.token===J.TK_ELSEIF;)He=vf(m,He);Ct(m,J.TK_ELSE)&&D(m),Ue(m,J.TK_END,J.TK_IF,I),M(me,He)},vm=function(m){let I=new u,me=m.fs;Dt(m,je(m)),_t(m,1),aa(m,I,0,m.linenumber),lt(me,I.u.info).startpc=me.pc},xm=function(m){let I=0,me,He=new u;do Dt(m,je(m)),I++;while(Ct(m,44));Ct(m,61)?me=Ui(m,He):(He.k=K.VVOID,me=0),Zr(m,I,me,He),_t(m,I)},Em=function(m,I){let me=0;for(Fa(m,I);m.t.token===46;)ia(m,I);return m.t.token===58&&(me=1,ia(m,I)),me},Am=function(m,I){let me=new u,He=new u;te.luaX_next(m);let at=Em(m,me);aa(m,He,at,I),Xe(m.fs,me,He),Ye(m.fs,I)},Sm=function(m){let I=m.fs,me=new ae;sa(m,me.v),m.t.token===61||m.t.token===44?(me.prev=null,Fe(m,me,1)):(R(m,me.v.k===K.VCALL,e("syntax error",!0)),Gt(X(I,me.v),1))},Tm=function(m){let I=m.fs,me=new u,He,at;Sr(m,1)||m.t.token===59?He=at=0:(at=Ui(m,me),mt(me.k)?(Q(I,me),me.k===K.VCALL&&at===1&&(ln(X(I,me),St),qe(X(I,me).A===I.nactvar)),He=I.nactvar,at=n):at===1?He=se(I,me):($e(I,me),He=I.nactvar,qe(at===I.freereg-He))),Se(I,He,at),Ct(m,59)},sc=function(m){let I=m.linenumber;switch(zi(m),m.t.token){case 59:{te.luaX_next(m);break}case J.TK_IF:{gm(m,I);break}case J.TK_WHILE:{jt(m,I);break}case J.TK_DO:{te.luaX_next(m),D(m),Ue(m,J.TK_END,J.TK_DO,I);break}case J.TK_FOR:{mm(m,I);break}case J.TK_REPEAT:{nr(m,I);break}case J.TK_FUNCTION:{Am(m,I);break}case J.TK_LOCAL:{te.luaX_next(m),Ct(m,J.TK_FUNCTION)?vm(m):xm(m);break}case J.TK_DBCOLON:{te.luaX_next(m),Vt(m,je(m),I);break}case J.TK_RETURN:{te.luaX_next(m),Tm(m);break}case J.TK_BREAK:case J.TK_GOTO:{yt(m,ve(m.fs));break}default:{Sm(m);break}}qe(m.fs.f.maxstacksize>=m.fs.freereg&&m.fs.freereg>=m.fs.nactvar),m.fs.freereg=m.fs.nactvar,Jr(m)},Mm=function(m,I){let me=new b,He=new u;Ha(m,I,me),I.f.is_vararg=!0,Ze(He,K.VLOCAL,0),kn(I,m.envn,He),te.luaX_next(m),tr(m),sn(m,J.TK_EOS),na(m)},bm=function(m,I,me,He,at,vt){let kt=new te.LexState,ri=new S,Wa=et.luaF_newLclosure(m,1);return dt.luaD_inctop(m),m.stack[m.top-1].setclLvalue(Wa),kt.h=tn.luaH_new(m),dt.luaD_inctop(m),m.stack[m.top-1].sethvalue(kt.h),ri.f=Wa.p=new Ie(m),ri.f.source=cn(m,at),kt.buff=me,kt.dyd=He,He.actvar.n=He.gt.n=He.label.n=0,te.luaX_setinput(m,kt,I,ri.f.source,vt),Mm(kt,ri),qe(!ri.prev&&ri.nups===1&&!kt.fs),qe(He.actvar.n===0&&He.gt.n===0&&He.label.n===0),delete m.stack[--m.top],Wa};return fa.Dyndata=De,fa.expkind=K,fa.expdesc=u,fa.luaY_parser=bm,fa.vkisinreg=Pe,fa}var Fc={},Qh;function dT(){if(Qh)return Fc;Qh=1;const{LUA_SIGNATURE:n,constant_types:{LUA_TBOOLEAN:e,LUA_TLNGSTR:t,LUA_TNIL:i,LUA_TNUMFLT:r,LUA_TNUMINT:a,LUA_TSHRSTR:s},thread_status:{LUA_ERRSYNTAX:o},is_luastring:l,luastring_eq:f,to_luastring:_}=Dn(),h=Qi(),g=Bs(),E=Ci(),{MAXARG_sBx:T,POS_A:y,POS_Ax:x,POS_B:p,POS_Bx:W,POS_C:F,POS_OP:k,SIZE_A:ce,SIZE_Ax:q,SIZE_B:V,SIZE_Bx:_e,SIZE_C:A,SIZE_OP:U}=wt,{lua_assert:ee}=Rn,{luaS_bless:Y}=qn,{luaZ_read:de,ZIO:X}=Ai;let j=[25,147,13,10,26,10];class ke{constructor(pe,Me,Ve){this.intSize=4,this.size_tSize=4,this.instructionSize=4,this.integerSize=4,this.numberSize=8,ee(Me instanceof X,"BytecodeParser only operates on a ZIO"),ee(l(Ve)),Ve[0]===64||Ve[0]===61?this.name=Ve.subarray(1):Ve[0]==n[0]?this.name=_("binary string",!0):this.name=Ve,this.L=pe,this.Z=Me,this.arraybuffer=new ArrayBuffer(Math.max(this.intSize,this.size_tSize,this.instructionSize,this.integerSize,this.numberSize)),this.dv=new DataView(this.arraybuffer),this.u8=new Uint8Array(this.arraybuffer)}read(pe){let Me=new Uint8Array(pe);return de(this.Z,Me,0,pe)!==0&&this.error("truncated"),Me}LoadByte(){return de(this.Z,this.u8,0,1)!==0&&this.error("truncated"),this.u8[0]}LoadInt(){return de(this.Z,this.u8,0,this.intSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadNumber(){return de(this.Z,this.u8,0,this.numberSize)!==0&&this.error("truncated"),this.dv.getFloat64(0,!0)}LoadInteger(){return de(this.Z,this.u8,0,this.integerSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadSize_t(){return this.LoadInteger()}LoadString(){let pe=this.LoadByte();return pe===255&&(pe=this.LoadSize_t()),pe===0?null:Y(this.L,this.read(pe-1))}static MASK1(pe,Me){return~(-1<<pe)<<Me}LoadCode(pe){let Me=this.LoadInt(),Ve=ke;for(let we=0;we<Me;we++){de(this.Z,this.u8,0,this.instructionSize)!==0&&this.error("truncated");let se=this.dv.getUint32(0,!0);pe.code[we]={code:se,opcode:se>>k&Ve.MASK1(U,0),A:se>>y&Ve.MASK1(ce,0),B:se>>p&Ve.MASK1(V,0),C:se>>F&Ve.MASK1(A,0),Bx:se>>W&Ve.MASK1(_e,0),Ax:se>>x&Ve.MASK1(q,0),sBx:(se>>W&Ve.MASK1(_e,0))-T}}}LoadConstants(pe){let Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++){let we=this.LoadByte();switch(we){case i:pe.k.push(new E.TValue(i,null));break;case e:pe.k.push(new E.TValue(e,this.LoadByte()!==0));break;case r:pe.k.push(new E.TValue(r,this.LoadNumber()));break;case a:pe.k.push(new E.TValue(a,this.LoadInteger()));break;case s:case t:pe.k.push(new E.TValue(t,this.LoadString()));break;default:this.error(`unrecognized constant '${we}'`)}}}LoadProtos(pe){let Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++)pe.p[Ve]=new g.Proto(this.L),this.LoadFunction(pe.p[Ve],pe.source)}LoadUpvalues(pe){let Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++)pe.upvalues[Ve]={name:null,instack:this.LoadByte(),idx:this.LoadByte()}}LoadDebug(pe){let Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++)pe.lineinfo[Ve]=this.LoadInt();Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++)pe.locvars[Ve]={varname:this.LoadString(),startpc:this.LoadInt(),endpc:this.LoadInt()};Me=this.LoadInt();for(let Ve=0;Ve<Me;Ve++)pe.upvalues[Ve].name=this.LoadString()}LoadFunction(pe,Me){pe.source=this.LoadString(),pe.source===null&&(pe.source=Me),pe.linedefined=this.LoadInt(),pe.lastlinedefined=this.LoadInt(),pe.numparams=this.LoadByte(),pe.is_vararg=this.LoadByte()!==0,pe.maxstacksize=this.LoadByte(),this.LoadCode(pe),this.LoadConstants(pe),this.LoadUpvalues(pe),this.LoadProtos(pe),this.LoadDebug(pe)}checkliteral(pe,Me){let Ve=this.read(pe.length);f(Ve,pe)||this.error(Me)}checkHeader(){this.checkliteral(n.subarray(1),"not a"),this.LoadByte()!==83&&this.error("version mismatch in"),this.LoadByte()!==0&&this.error("format mismatch in"),this.checkliteral(j,"corrupted"),this.intSize=this.LoadByte(),this.size_tSize=this.LoadByte(),this.instructionSize=this.LoadByte(),this.integerSize=this.LoadByte(),this.numberSize=this.LoadByte(),this.checksize(this.intSize,4,"int"),this.checksize(this.size_tSize,4,"size_t"),this.checksize(this.instructionSize,4,"instruction"),this.checksize(this.integerSize,4,"integer"),this.checksize(this.numberSize,8,"number"),this.LoadInteger()!==22136&&this.error("endianness mismatch in"),this.LoadNumber()!==370.5&&this.error("float format mismatch in")}error(pe){E.luaO_pushfstring(this.L,_("%s: %s precompiled chunk"),this.name,_(pe)),h.luaD_throw(this.L,o)}checksize(pe,Me,Ve){pe!==Me&&this.error(`${Ve} size mismatch in`)}}const Le=function(Ce,pe,Me){let Ve=new ke(Ce,pe,Me);Ve.checkHeader();let we=g.luaF_newLclosure(Ce,Ve.LoadByte());return h.luaD_inctop(Ce),Ce.stack[Ce.top-1].setclLvalue(we),we.p=new g.Proto(Ce),Ve.LoadFunction(we.p,null),ee(we.nupvalues===we.p.upvalues.length),we};return Fc.luaU_undump=Le,Fc}var ed;function Qi(){if(ed)return bn;ed=1;const{LUA_HOOKCALL:n,LUA_HOOKRET:e,LUA_HOOKTAILCALL:t,LUA_MASKCALL:i,LUA_MASKLINE:r,LUA_MASKRET:a,LUA_MINSTACK:s,LUA_MULTRET:o,LUA_SIGNATURE:l,constant_types:{LUA_TCCL:f,LUA_TLCF:_,LUA_TLCL:h,LUA_TNIL:g},thread_status:{LUA_ERRMEM:E,LUA_ERRERR:T,LUA_ERRRUN:y,LUA_ERRSYNTAX:x,LUA_OK:p,LUA_YIELD:W},lua_Debug:F,luastring_indexOf:k,to_luastring:ce}=Dn(),q=zl(),V=qr(),_e=Bs(),{api_check:A,lua_assert:U,LUAI_MAXCCALLS:ee}=Rn,Y=Ci(),de=wt,X=Np(),j=jr(),{luaS_newliteral:ke}=qn,Le=Fs(),{LUAI_MAXSTACK:Ce}=Ei(),pe=dT(),Me=Ls(),{MBuffer:Ve}=Ai,we=function(C,Re){if(C.top<Re)for(;C.top<Re;)C.stack[C.top++]=new Y.TValue(g,null);else for(;C.top>Re;)delete C.stack[--C.top]},se=function(C,Re,he){let L=C.top;for(;C.top<he+1;)C.stack[C.top++]=new Y.TValue(g,null);switch(Re){case E:{Y.setsvalue2s(C,he,ke(C,"not enough memory"));break}case T:{Y.setsvalue2s(C,he,ke(C,"error in error handling"));break}default:Y.setobjs2s(C,he,L-1)}for(;C.top>he+1;)delete C.stack[--C.top]},ge=Ce+200,$e=function(C,Re){U(Re<=Ce||Re==ge),U(C.stack_last==C.stack.length-j.EXTRA_STACK),C.stack.length=Re,C.stack_last=Re-j.EXTRA_STACK},it=function(C,Re){let he=C.stack.length;if(he>Ce)v(C,T);else{let L=C.top+Re+j.EXTRA_STACK,ye=2*he;ye>Ce&&(ye=Ce),ye<L&&(ye=L),ye>Ce?($e(C,ge),V.luaG_runerror(C,ce("stack overflow",!0))):$e(C,ye)}},Ye=function(C,Re){C.stack_last-C.top<=Re&&it(C,Re)},ht=function(C){let Re=C.top;for(let he=C.ci;he!==null;he=he.previous)Re<he.top&&(Re=he.top);return U(Re<=C.stack_last),Re+1},ct=function(C){let Re=ht(C),he=Re+Math.floor(Re/8)+2*j.EXTRA_STACK;he>Ce&&(he=Ce),C.stack.length>Ce&&j.luaE_freeCI(C),Re<=Ce-j.EXTRA_STACK&&he<C.stack.length&&$e(C,he)},z=function(C){Ye(C,1),C.stack[C.top++]=new Y.TValue(g,null)},ne=function(C,Re,he){let L=C.stack[Re];switch(L.type){case f:case _:{let ye=L.type===f?L.value.f:L.value;Ye(C,s);let Je=j.luaE_extendCI(C);Je.funcOff=Re,Je.nresults=he,Je.func=L,Je.top=C.top+s,U(Je.top<=C.stack_last),Je.callstatus=0,C.hookmask&i&&ve(C,n,-1);let tt=ye(C);if(typeof tt!="number"||tt<0||(tt|0)!==tt)throw Error("invalid return value from JS function (expected integer)");return q.api_checknelems(C,tt),B(C,Je,C.top-tt,tt),!0}case h:{let ye,Je=L.value.p,tt=C.top-Re-1,gt=Je.maxstacksize;if(Ye(C,gt),Je.is_vararg)ye=re(C,Je,tt);else{for(;tt<Je.numparams;tt++)C.stack[C.top++]=new Y.TValue(g,null);ye=Re+1}let St=j.luaE_extendCI(C);return St.funcOff=Re,St.nresults=he,St.func=L,St.l_base=ye,St.top=ye+gt,we(C,St.top),St.l_code=Je.code,St.l_savedpc=0,St.callstatus=j.CIST_LUA,C.hookmask&i&&H(C,St),!1}default:return Ye(C,1),le(C,Re,L),ne(C,Re,he)}},B=function(C,Re,he,L){let ye=Re.nresults;C.hookmask&(a|r)&&(C.hookmask&a&&ve(C,e,-1),C.oldpc=Re.previous.l_savedpc);let Je=Re.funcOff;return C.ci=Re.previous,C.ci.next=null,Ae(C,he,Je,L,ye)},Ae=function(C,Re,he,L,ye){switch(ye){case 0:break;case 1:{L===0?C.stack[he].setnilvalue():Y.setobjs2s(C,he,Re);break}case o:{for(let tt=0;tt<L;tt++)Y.setobjs2s(C,he+tt,Re+tt);for(let tt=C.top;tt>=he+L;tt--)delete C.stack[tt];return C.top=he+L,!1}default:{let tt;if(ye<=L)for(tt=0;tt<ye;tt++)Y.setobjs2s(C,he+tt,Re+tt);else{for(tt=0;tt<L;tt++)Y.setobjs2s(C,he+tt,Re+tt);for(;tt<ye;tt++)he+tt>=C.top?C.stack[he+tt]=new Y.TValue(g,null):C.stack[he+tt].setnilvalue()}break}}let Je=he+ye;for(let tt=C.top;tt>=Je;tt--)delete C.stack[tt];return C.top=Je,!0},ve=function(C,Re,he){let L=C.hook;if(L&&C.allowhook){let ye=C.ci,Je=C.top,tt=ye.top,gt=new F;gt.event=Re,gt.currentline=he,gt.i_ci=ye,Ye(C,s),ye.top=C.top+s,U(ye.top<=C.stack_last),C.allowhook=0,ye.callstatus|=j.CIST_HOOKED,L(C,gt),U(!C.allowhook),C.allowhook=1,ye.top=tt,we(C,Je),ye.callstatus&=~j.CIST_HOOKED}},H=function(C,Re){let he=n;Re.l_savedpc++,Re.previous.callstatus&j.CIST_LUA&&Re.previous.l_code[Re.previous.l_savedpc-1].opcode==de.OpCodesI.OP_TAILCALL&&(Re.callstatus|=j.CIST_TAIL,he=t),ve(C,he,-1),Re.l_savedpc--},re=function(C,Re,he){let L=Re.numparams,ye=C.top-he,Je=C.top,tt;for(tt=0;tt<L&&tt<he;tt++)Y.pushobj2s(C,C.stack[ye+tt]),C.stack[ye+tt].setnilvalue();for(;tt<L;tt++)C.stack[C.top++]=new Y.TValue(g,null);return Je},le=function(C,Re,he){let L=Le.luaT_gettmbyobj(C,he,Le.TMS.TM_CALL);L.ttisfunction(L)||V.luaG_typeerror(C,he,ce("call",!0)),Y.pushobj2s(C,C.stack[C.top-1]);for(let ye=C.top-2;ye>Re;ye--)Y.setobjs2s(C,ye,ye-1);Y.setobj2s(C,Re,L)},Be=function(C){C.nCcalls===ee?V.luaG_runerror(C,ce("JS stack overflow",!0)):C.nCcalls>=ee+(ee>>3)&&v(C,T)},M=function(C,Re,he){++C.nCcalls>=ee&&Be(C),ne(C,Re,he)||Me.luaV_execute(C),C.nCcalls--},v=function(C,Re){if(C.errorJmp)throw C.errorJmp.status=Re,C.errorJmp;{let he=C.l_G;if(C.status=Re,he.mainthread.errorJmp)he.mainthread.stack[he.mainthread.top++]=C.stack[C.top-1],v(he.mainthread,Re);else{let L=he.panic;throw L&&(se(C,Re,C.top),C.ci.top<C.top&&(C.ci.top=C.top),L(C)),new Error(`Aborted ${Re}`)}}},O=function(C,Re,he){let L=C.nCcalls,ye={status:p,previous:C.errorJmp};C.errorJmp=ye;try{Re(C,he)}catch(Je){if(ye.status===p){let tt=C.l_G.atnativeerror;if(tt)try{if(ye.status=p,q.lua_pushcfunction(C,tt),q.lua_pushlightuserdata(C,Je),te(C,C.top-2,1),C.errfunc!==0){let gt=C.errfunc;Y.pushobj2s(C,C.stack[C.top-1]),Y.setobjs2s(C,C.top-2,gt),te(C,C.top-2,1)}ye.status=y}catch{ye.status===p&&(ye.status=-1)}else ye.status=-1}}return C.errorJmp=ye.previous,C.nCcalls=L,ye.status},Te=function(C,Re){let he=C.ci;U(he.c_k!==null&&C.nny===0),U(he.callstatus&j.CIST_YPCALL||Re===W),he.callstatus&j.CIST_YPCALL&&(he.callstatus&=~j.CIST_YPCALL,C.errfunc=he.c_old_errfunc),he.nresults===o&&C.ci.top<C.top&&(C.ci.top=C.top);let L=he.c_k,ye=L(C,Re,he.c_ctx);q.api_checknelems(C,ye),B(C,he,C.top-ye,ye)},Se=function(C,Re){for(Re!==null&&Te(C,Re);C.ci!==C.base_ci;)C.ci.callstatus&j.CIST_LUA?(Me.luaV_finishOp(C),Me.luaV_execute(C)):Te(C,W)},Oe=function(C){for(let Re=C.ci;Re!==null;Re=Re.previous)if(Re.callstatus&j.CIST_YPCALL)return Re;return null},P=function(C,Re){let he=Oe(C);if(he===null)return 0;let L=he.extra;return _e.luaF_close(C,L),se(C,Re,L),C.ci=he,C.allowhook=he.callstatus&j.CIST_OAH,C.nny=0,ct(C),C.errfunc=he.c_old_errfunc,1},Q=function(C,Re,he){let L=ke(C,Re);if(he===0)Y.pushsvalue2s(C,L),A(C,C.top<=C.ci.top,"stack overflow");else{for(let ye=1;ye<he;ye++)delete C.stack[--C.top];Y.setsvalue2s(C,C.top-1,L)}return y},ie=function(C,Re){let he=C.top-Re,L=C.ci;C.status===p?ne(C,he-1,o)||Me.luaV_execute(C):(U(C.status===W),C.status=p,L.funcOff=L.extra,L.func=C.stack[L.funcOff],L.callstatus&j.CIST_LUA?Me.luaV_execute(C):(L.c_k!==null&&(Re=L.c_k(C,W,L.c_ctx),q.api_checknelems(C,Re),he=C.top-Re),B(C,L,he,Re)),Se(C,null))},xe=function(C,Re,he){let L=C.nny;if(C.status===p){if(C.ci!==C.base_ci)return Q(C,"cannot resume non-suspended coroutine",he)}else if(C.status!==W)return Q(C,"cannot resume dead coroutine",he);if(C.nCcalls=Re?Re.nCcalls+1:1,C.nCcalls>=ee)return Q(C,"JS stack overflow",he);C.nny=0,q.api_checknelems(C,C.status===p?he+1:he);let ye=O(C,ie,he);if(ye===-1)ye=y;else{for(;ye>W&&P(C,ye);)ye=O(C,Se,ye);ye>W?(C.status=ye,se(C,ye,C.top),C.ci.top=C.top):U(ye===C.status)}return C.nny=L,C.nCcalls--,U(C.nCcalls===(Re?Re.nCcalls:0)),ye},Xe=function(C){return C.nny===0},ze=function(C,Re,he,L){let ye=C.ci;return q.api_checknelems(C,Re),C.nny>0&&(C!==C.l_G.mainthread?V.luaG_runerror(C,ce("attempt to yield across a JS-call boundary",!0)):V.luaG_runerror(C,ce("attempt to yield from outside a coroutine",!0))),C.status=W,ye.extra=ye.funcOff,ye.callstatus&j.CIST_LUA?A(C,L===null,"hooks cannot continue after yielding"):(ye.c_k=L,L!==null&&(ye.c_ctx=he),ye.funcOff=C.top-Re-1,ye.func=C.stack[ye.funcOff],v(C,W)),U(ye.callstatus&j.CIST_HOOKED),0},dt=function(C,Re){ze(C,Re,0,null)},et=function(C,Re,he,L,ye){let Je=C.ci,tt=C.allowhook,gt=C.nny,St=C.errfunc;C.errfunc=ye;let Tt=O(C,Re,he);return Tt!==p&&(_e.luaF_close(C,L),se(C,Tt,L),C.ci=Je,C.allowhook=tt,C.nny=gt,ct(C)),C.errfunc=St,Tt},te=function(C,Re,he){C.nny++,M(C,Re,he),C.nny--};class fe{constructor(Re,he,L){this.z=Re,this.buff=new Ve,this.dyd=new X.Dyndata,this.mode=L,this.name=he}}const Ne=function(C,Re,he){Re&&k(Re,he[0])===-1&&(Y.luaO_pushfstring(C,ce("attempt to load a %s chunk (mode is '%s')"),he,Re),v(C,x))},qe=function(C,Re){let he,L=Re.z.zgetc();L===l[0]?(Ne(C,Re.mode,ce("binary",!0)),he=pe.luaU_undump(C,Re.z,Re.name)):(Ne(C,Re.mode,ce("text",!0)),he=X.luaY_parser(C,Re.z,Re.buff,Re.dyd,Re.name,L)),U(he.nupvalues===he.p.upvalues.length),_e.luaF_initupvals(C,he)},st=function(C,Re,he,L){let ye=new fe(Re,he,L);C.nny++;let Je=et(C,qe,ye,C.top,C.errfunc);return C.nny--,Je};return bn.adjust_top=we,bn.luaD_call=M,bn.luaD_callnoyield=te,bn.luaD_checkstack=Ye,bn.luaD_growstack=it,bn.luaD_hook=ve,bn.luaD_inctop=z,bn.luaD_pcall=et,bn.luaD_poscall=B,bn.luaD_precall=ne,bn.luaD_protectedparser=st,bn.luaD_rawrunprotected=O,bn.luaD_reallocstack=$e,bn.luaD_throw=v,bn.lua_isyieldable=Xe,bn.lua_resume=xe,bn.lua_yield=dt,bn.lua_yieldk=ze,bn}var td;function qr(){if(td)return Cn;td=1;const{LUA_HOOKCOUNT:n,LUA_HOOKLINE:e,LUA_MASKCOUNT:t,LUA_MASKLINE:i,constant_types:{LUA_TBOOLEAN:r,LUA_TNIL:a,LUA_TTABLE:s},thread_status:{LUA_ERRRUN:o,LUA_YIELD:l},from_userstring:f,luastring_eq:_,luastring_indexOf:h,to_luastring:g}=Dn(),{api_check:E,lua_assert:T}=Rn,{LUA_IDSIZE:y}=Ei(),x=zl(),p=Qi(),W=Bs(),F=Ou(),k=Ci(),ce=wt,q=jr(),V=xr(),_e=Fs(),A=Ls(),U=function(P){return T(P.callstatus&q.CIST_LUA),P.l_savedpc-1},ee=function(P){return P.func.value.p.lineinfo.length!==0?P.func.value.p.lineinfo[U(P)]:-1},Y=function(P){if(P.status===l){let Q=P.ci,ie=Q.funcOff;Q.func=P.stack[Q.extra],Q.funcOff=Q.extra,Q.extra=ie}},de=function(P,Q,ie,xe){(Q===null||ie===0)&&(ie=0,Q=null),P.ci.callstatus&q.CIST_LUA&&(P.oldpc=P.ci.l_savedpc),P.hook=Q,P.basehookcount=xe,P.hookcount=P.basehookcount,P.hookmask=ie},X=function(P){return P.hook},j=function(P){return P.hookmask},ke=function(P){return P.basehookcount},Le=function(P,Q,ie){let xe,Xe;if(Q<0)return 0;for(xe=P.ci;Q>0&&xe!==P.base_ci;xe=xe.previous)Q--;return Q===0&&xe!==P.base_ci?(Xe=1,ie.i_ci=xe):Xe=0,Xe},Ce=function(P,Q){T(Q<P.upvalues.length);let ie=P.upvalues[Q].name;return ie===null?g("?",!0):ie.getstr()},pe=function(P,Q){let ie=P.func.value.p.numparams;return Q>=P.l_base-P.funcOff-ie?null:{pos:P.funcOff+ie+Q,name:g("(*vararg)",!0)}},Me=function(P,Q,ie){let xe,Xe=null;if(Q.callstatus&q.CIST_LUA){if(ie<0)return pe(Q,-ie);xe=Q.l_base,Xe=W.luaF_getlocalname(Q.func.value.p,ie,U(Q))}else xe=Q.funcOff+1;if(Xe===null)if((Q===P.ci?P.top:Q.next.funcOff)-xe>=ie&&ie>0)Xe=g("(*temporary)",!0);else return null;return{pos:xe+(ie-1),name:Xe}},Ve=function(P,Q,ie){let xe;if(Y(P),Q===null)P.stack[P.top-1].ttisLclosure()?xe=W.luaF_getlocalname(P.stack[P.top-1].value.p,ie,0):xe=null;else{let Xe=Me(P,Q.i_ci,ie);Xe?(xe=Xe.name,k.pushobj2s(P,P.stack[Xe.pos]),E(P,P.top<=P.ci.top,"stack overflow")):xe=null}return Y(P),xe},we=function(P,Q,ie){let xe;Y(P);let Xe=Me(P,Q.i_ci,ie);return Xe?(xe=Xe.name,k.setobjs2s(P,Xe.pos,P.top-1),delete P.stack[--P.top]):xe=null,Y(P),xe},se=function(P,Q){if(Q===null||Q instanceof k.CClosure)P.source=g("=[JS]",!0),P.linedefined=-1,P.lastlinedefined=-1,P.what=g("J",!0);else{let ie=Q.p;P.source=ie.source?ie.source.getstr():g("=?",!0),P.linedefined=ie.linedefined,P.lastlinedefined=ie.lastlinedefined,P.what=P.linedefined===0?g("main",!0):g("Lua",!0)}P.short_src=k.luaO_chunkid(P.source,y)},ge=function(P,Q){if(Q===null||Q instanceof k.CClosure)P.stack[P.top]=new k.TValue(a,null),x.api_incr_top(P);else{let ie=Q.p.lineinfo,xe=V.luaH_new(P);P.stack[P.top]=new k.TValue(s,xe),x.api_incr_top(P);let Xe=new k.TValue(r,!0);for(let ze=0;ze<ie.length;ze++)V.luaH_setint(xe,ie[ze],Xe)}},$e=function(P,Q){let ie={name:null,funcname:null};return Q===null?null:Q.callstatus&q.CIST_FIN?(ie.name=g("__gc",!0),ie.funcname=g("metamethod",!0),ie):!(Q.callstatus&q.CIST_TAIL)&&Q.previous.callstatus&q.CIST_LUA?B(P,Q.previous):null},it=function(P,Q,ie,xe,Xe){let ze=1;for(;Q.length>0;Q=Q.subarray(1))switch(Q[0]){case 83:{se(ie,xe);break}case 108:{ie.currentline=Xe&&Xe.callstatus&q.CIST_LUA?ee(Xe):-1;break}case 117:{ie.nups=xe===null?0:xe.nupvalues,xe===null||xe instanceof k.CClosure?(ie.isvararg=!0,ie.nparams=0):(ie.isvararg=xe.p.is_vararg,ie.nparams=xe.p.numparams);break}case 116:{ie.istailcall=Xe?Xe.callstatus&q.CIST_TAIL:0;break}case 110:{let dt=$e(P,Xe);dt===null?(ie.namewhat=g("",!0),ie.name=null):(ie.namewhat=dt.funcname,ie.name=dt.name);break}case 76:case 102:break;default:ze=0}return ze},Ye=function(P,Q,ie){Q=f(Q);let xe,Xe,ze,dt;return Y(P),Q[0]===62?(ze=null,dt=P.stack[P.top-1],E(P,dt.ttisfunction(),"function expected"),Q=Q.subarray(1),P.top--):(ze=ie.i_ci,dt=ze.func,T(ze.func.ttisfunction())),Xe=dt.ttisclosure()?dt.value:null,xe=it(P,Q,ie,Xe,ze),h(Q,102)>=0&&(k.pushobj2s(P,dt),E(P,P.top<=P.ci.top,"stack overflow")),Y(P),h(Q,76)>=0&&ge(P,Xe),xe},ht=function(P,Q,ie){let xe={name:null,funcname:null};if(ce.ISK(ie)){let Xe=P.k[ce.INDEXK(ie)];if(Xe.ttisstring())return xe.name=Xe.svalue(),xe}else{let Xe=ne(P,Q,ie);if(Xe&&Xe.funcname[0]===99)return Xe}return xe.name=g("?",!0),xe},ct=function(P,Q){return P<Q?-1:P},z=function(P,Q,ie){let xe=-1,Xe=0,ze=ce.OpCodesI;for(let dt=0;dt<Q;dt++){let et=P.code[dt],te=et.A;switch(et.opcode){case ze.OP_LOADNIL:{let fe=et.B;te<=ie&&ie<=te+fe&&(xe=ct(dt,Xe));break}case ze.OP_TFORCALL:{ie>=te+2&&(xe=ct(dt,Xe));break}case ze.OP_CALL:case ze.OP_TAILCALL:{ie>=te&&(xe=ct(dt,Xe));break}case ze.OP_JMP:{let fe=et.sBx,Ne=dt+1+fe;dt<Ne&&Ne<=Q&&Ne>Xe&&(Xe=Ne);break}default:ce.testAMode(et.opcode)&&ie===te&&(xe=ct(dt,Xe));break}}return xe},ne=function(P,Q,ie){let xe={name:W.luaF_getlocalname(P,ie+1,Q),funcname:null};if(xe.name)return xe.funcname=g("local",!0),xe;let Xe=z(P,Q,ie),ze=ce.OpCodesI;if(Xe!==-1){let dt=P.code[Xe];switch(dt.opcode){case ze.OP_MOVE:{let et=dt.B;if(et<dt.A)return ne(P,Xe,et);break}case ze.OP_GETTABUP:case ze.OP_GETTABLE:{let et=dt.C,te=dt.B,fe=dt.opcode===ze.OP_GETTABLE?W.luaF_getlocalname(P,te+1,Xe):Ce(P,te);return xe.name=ht(P,Xe,et).name,xe.funcname=fe&&_(fe,F.LUA_ENV)?g("global",!0):g("field",!0),xe}case ze.OP_GETUPVAL:return xe.name=Ce(P,dt.B),xe.funcname=g("upvalue",!0),xe;case ze.OP_LOADK:case ze.OP_LOADKX:{let et=dt.opcode===ze.OP_LOADK?dt.Bx:P.code[Xe+1].Ax;if(P.k[et].ttisstring())return xe.name=P.k[et].svalue(),xe.funcname=g("constant",!0),xe;break}case ze.OP_SELF:{let et=dt.C;return xe.name=ht(P,Xe,et).name,xe.funcname=g("method",!0),xe}}}return null},B=function(P,Q){let ie={name:null,funcname:null},xe=0,Xe=Q.func.value.p,ze=U(Q),dt=Xe.code[ze],et=ce.OpCodesI;if(Q.callstatus&q.CIST_HOOKED)return ie.name=g("?",!0),ie.funcname=g("hook",!0),ie;switch(dt.opcode){case et.OP_CALL:case et.OP_TAILCALL:return ne(Xe,ze,dt.A);case et.OP_TFORCALL:return ie.name=g("for iterator",!0),ie.funcname=g("for iterator",!0),ie;case et.OP_SELF:case et.OP_GETTABUP:case et.OP_GETTABLE:xe=_e.TMS.TM_INDEX;break;case et.OP_SETTABUP:case et.OP_SETTABLE:xe=_e.TMS.TM_NEWINDEX;break;case et.OP_ADD:xe=_e.TMS.TM_ADD;break;case et.OP_SUB:xe=_e.TMS.TM_SUB;break;case et.OP_MUL:xe=_e.TMS.TM_MUL;break;case et.OP_MOD:xe=_e.TMS.TM_MOD;break;case et.OP_POW:xe=_e.TMS.TM_POW;break;case et.OP_DIV:xe=_e.TMS.TM_DIV;break;case et.OP_IDIV:xe=_e.TMS.TM_IDIV;break;case et.OP_BAND:xe=_e.TMS.TM_BAND;break;case et.OP_BOR:xe=_e.TMS.TM_BOR;break;case et.OP_BXOR:xe=_e.TMS.TM_BXOR;break;case et.OP_SHL:xe=_e.TMS.TM_SHL;break;case et.OP_SHR:xe=_e.TMS.TM_SHR;break;case et.OP_UNM:xe=_e.TMS.TM_UNM;break;case et.OP_BNOT:xe=_e.TMS.TM_BNOT;break;case et.OP_LEN:xe=_e.TMS.TM_LEN;break;case et.OP_CONCAT:xe=_e.TMS.TM_CONCAT;break;case et.OP_EQ:xe=_e.TMS.TM_EQ;break;case et.OP_LT:xe=_e.TMS.TM_LT;break;case et.OP_LE:xe=_e.TMS.TM_LE;break;default:return null}return ie.name=P.l_G.tmname[xe].getstr(),ie.funcname=g("metamethod",!0),ie},Ae=function(P,Q,ie){for(let xe=Q.l_base;xe<Q.top;xe++)if(P.stack[xe]===ie)return xe;return!1},ve=function(P,Q,ie){let xe=Q.func.value;for(let Xe=0;Xe<xe.nupvalues;Xe++)if(xe.upvals[Xe]===ie)return{name:Ce(xe.p,Xe),funcname:g("upvalue",!0)};return null},H=function(P,Q){let ie=P.ci,xe=null;if(ie.callstatus&q.CIST_LUA){xe=ve(P,ie,Q);let Xe=Ae(P,ie,Q);!xe&&Xe&&(xe=ne(ie.func.value.p,U(ie),Xe-ie.l_base))}return xe?k.luaO_pushfstring(P,g(" (%s '%s')",!0),xe.funcname,xe.name):g("",!0)},re=function(P,Q,ie){let xe=_e.luaT_objtypename(P,Q);O(P,g("attempt to %s a %s value%s",!0),ie,xe,H(P,Q))},le=function(P,Q,ie){(Q.ttisstring()||A.cvt2str(Q))&&(Q=ie),re(P,Q,g("concatenate",!0))},Be=function(P,Q,ie,xe){A.tonumber(Q)===!1&&(ie=Q),re(P,ie,xe)},M=function(P,Q,ie){let xe=_e.luaT_objtypename(P,Q),Xe=_e.luaT_objtypename(P,ie);_(xe,Xe)?O(P,g("attempt to compare two %s values",!0),xe):O(P,g("attempt to compare %s with %s",!0),xe,Xe)},v=function(P,Q,ie,xe){let Xe;return ie?Xe=k.luaO_chunkid(ie.getstr(),y):Xe=g("?",!0),k.luaO_pushfstring(P,g("%s:%d: %s",!0),Xe,xe,Q)},O=function(P,Q,...ie){let xe=P.ci,Xe=k.luaO_pushvfstring(P,Q,ie);xe.callstatus&q.CIST_LUA&&v(P,Xe,xe.func.value.p.source,ee(xe)),Te(P)},Te=function(P){if(P.errfunc!==0){let Q=P.errfunc;k.pushobj2s(P,P.stack[P.top-1]),k.setobjs2s(P,P.top-2,Q),p.luaD_callnoyield(P,P.top-2,1)}p.luaD_throw(P,o)},Se=function(P,Q,ie){A.tointeger(Q)===!1&&(ie=Q),O(P,g("number%s has no integer representation",!0),H(P,ie))},Oe=function(P){let Q=P.ci,ie=P.hookmask,xe=--P.hookcount===0&&ie&t;if(xe)P.hookcount=P.basehookcount;else if(!(ie&i))return;if(Q.callstatus&q.CIST_HOOKYIELD){Q.callstatus&=~q.CIST_HOOKYIELD;return}if(xe&&p.luaD_hook(P,n,-1),ie&i){let Xe=Q.func.value.p,ze=Q.l_savedpc-1,dt=Xe.lineinfo.length!==0?Xe.lineinfo[ze]:-1;(ze===0||Q.l_savedpc<=P.oldpc||dt!==(Xe.lineinfo.length!==0?Xe.lineinfo[P.oldpc-1]:-1))&&p.luaD_hook(P,e,dt)}P.oldpc=Q.l_savedpc,P.status===l&&(xe&&(P.hookcount=1),Q.l_savedpc--,Q.callstatus|=q.CIST_HOOKYIELD,Q.funcOff=P.top-1,Q.func=P.stack[Q.funcOff],p.luaD_throw(P,l))};return Cn.luaG_addinfo=v,Cn.luaG_concaterror=le,Cn.luaG_errormsg=Te,Cn.luaG_opinterror=Be,Cn.luaG_ordererror=M,Cn.luaG_runerror=O,Cn.luaG_tointerror=Se,Cn.luaG_traceexec=Oe,Cn.luaG_typeerror=re,Cn.lua_gethook=X,Cn.lua_gethookcount=ke,Cn.lua_gethookmask=j,Cn.lua_getinfo=Ye,Cn.lua_getlocal=Ve,Cn.lua_getstack=Le,Cn.lua_sethook=de,Cn.lua_setlocal=we,Cn}var Ip={};const{LUA_SIGNATURE:nd,LUA_VERSION_MAJOR:pT,LUA_VERSION_MINOR:_T,constant_types:{LUA_TBOOLEAN:mT,LUA_TLNGSTR:gT,LUA_TNIL:vT,LUA_TNUMFLT:xT,LUA_TNUMINT:ET,LUA_TSHRSTR:AT},luastring_of:Dp}=Dn(),id=Dp(25,147,13,10,26,10),ST=22136,TT=370.5,MT=Number(pT)*16+Number(_T),bT=0;class yT{constructor(){this.L=null,this.writer=null,this.data=null,this.strip=NaN,this.status=NaN}}const Ca=function(n,e,t){t.status===0&&e>0&&(t.status=t.writer(t.L,n,e,t.data))},Fn=function(n,e){Ca(Dp(n),1,e)},mi=function(n,e){let t=new ArrayBuffer(4);new DataView(t).setInt32(0,n,!0);let r=new Uint8Array(t);Ca(r,4,e)},Pu=function(n,e){let t=new ArrayBuffer(4);new DataView(t).setInt32(0,n,!0);let r=new Uint8Array(t);Ca(r,4,e)},kp=function(n,e){let t=new ArrayBuffer(8);new DataView(t).setFloat64(0,n,!0);let r=new Uint8Array(t);Ca(r,8,e)},vo=function(n,e){if(n===null)Fn(0,e);else{let t=n.tsslen()+1,i=n.getstr();t<255?Fn(t,e):(Fn(255,e),Pu(t,e)),Ca(i,t-1,e)}},wT=function(n,e){let t=n.code.map(i=>i.code);mi(t.length,e);for(let i=0;i<t.length;i++)mi(t[i],e)},RT=function(n,e){let t=n.k.length;mi(t,e);for(let i=0;i<t;i++){let r=n.k[i];switch(Fn(r.ttype(),e),r.ttype()){case vT:break;case mT:Fn(r.value?1:0,e);break;case xT:kp(r.value,e);break;case ET:Pu(r.value,e);break;case AT:case gT:vo(r.tsvalue(),e);break}}},CT=function(n,e){let t=n.p.length;mi(t,e);for(let i=0;i<t;i++)Lp(n.p[i],n.source,e)},UT=function(n,e){let t=n.upvalues.length;mi(t,e);for(let i=0;i<t;i++)Fn(n.upvalues[i].instack?1:0,e),Fn(n.upvalues[i].idx,e)},OT=function(n,e){let t=e.strip?0:n.lineinfo.length;mi(t,e);for(let i=0;i<t;i++)mi(n.lineinfo[i],e);t=e.strip?0:n.locvars.length,mi(t,e);for(let i=0;i<t;i++)vo(n.locvars[i].varname,e),mi(n.locvars[i].startpc,e),mi(n.locvars[i].endpc,e);t=e.strip?0:n.upvalues.length,mi(t,e);for(let i=0;i<t;i++)vo(n.upvalues[i].name,e)},Lp=function(n,e,t){t.strip||n.source===e?vo(null,t):vo(n.source,t),mi(n.linedefined,t),mi(n.lastlinedefined,t),Fn(n.numparams,t),Fn(n.is_vararg?1:0,t),Fn(n.maxstacksize,t),wT(n,t),RT(n,t),UT(n,t),CT(n,t),OT(n,t)},PT=function(n){Ca(nd,nd.length,n),Fn(MT,n),Fn(bT,n),Ca(id,id.length,n),Fn(4,n),Fn(4,n),Fn(4,n),Fn(4,n),Fn(8,n),Pu(ST,n),kp(TT,n)},NT=function(n,e,t,i,r){let a=new yT;return a.L=n,a.writer=t,a.data=i,a.strip=r,a.status=0,PT(a),Fn(e.upvalues.length,a),Lp(e,null,a),a.status};Ip.luaU_dump=NT;var rd;function zl(){if(rd)return ut;rd=1;const{LUA_MULTRET:n,LUA_OPBNOT:e,LUA_OPEQ:t,LUA_OPLE:i,LUA_OPLT:r,LUA_OPUNM:a,LUA_REGISTRYINDEX:s,LUA_RIDX_GLOBALS:o,LUA_VERSION_NUM:l,constant_types:{LUA_NUMTAGS:f,LUA_TBOOLEAN:_,LUA_TCCL:h,LUA_TFUNCTION:g,LUA_TLCF:E,LUA_TLCL:T,LUA_TLIGHTUSERDATA:y,LUA_TLNGSTR:x,LUA_TNIL:p,LUA_TNONE:W,LUA_TNUMFLT:F,LUA_TNUMINT:k,LUA_TSHRSTR:ce,LUA_TTABLE:q,LUA_TTHREAD:V,LUA_TUSERDATA:_e},thread_status:{LUA_OK:A},from_userstring:U,to_luastring:ee}=Dn(),{api_check:Y}=Rn,de=qr(),X=Qi(),{luaU_dump:j}=Ip,ke=Bs(),Le=Ci(),Ce=jr(),{luaS_bless:pe,luaS_new:Me,luaS_newliteral:Ve}=qn,we=Fs(),{LUAI_MAXSTACK:se}=Ei(),ge=Ls(),$e=xr(),{ZIO:it}=Ai,Ye=Le.TValue,ht=Le.CClosure,ct=function(d){d.top++,Y(d,d.top<=d.ci.top,"stack overflow")},z=function(d,$){Y(d,$<d.top-d.ci.funcOff,"not enough elements in the stack")},ne=function(d){if(!d)throw TypeError("invalid argument")},B=function(d){ne(typeof d=="number"&&(d|0)===d)},Ae=function(d){return d!==Le.luaO_nilobject},ve=function(d){return d===null?l:d.l_G.version},H=function(d,$){let c=d.l_G.panic;return d.l_G.panic=$,c},re=function(d,$){let c=d.l_G.atnativeerror;return d.l_G.atnativeerror=$,c},le=function(d,$){let c=d.ci;if($>0){let w=c.funcOff+$;return Y(d,$<=c.top-(c.funcOff+1),"unacceptable index"),w>=d.top?Le.luaO_nilobject:d.stack[w]}else return $>s?(Y(d,$!==0&&-$<=d.top,"invalid index"),d.stack[d.top+$]):$===s?d.l_G.l_registry:($=s-$,Y(d,$<=ke.MAXUPVAL+1,"upvalue index too large"),c.func.ttislcf()?Le.luaO_nilobject:$<=c.func.value.nupvalues?c.func.value.upvalue[$-1]:Le.luaO_nilobject)},Be=function(d,$){let c=d.ci;if($>0){let w=c.funcOff+$;return Y(d,$<=c.top-(c.funcOff+1),"unacceptable index"),w>=d.top?null:w}else{if($>s)return Y(d,$!==0&&-$<=d.top,"invalid index"),d.top+$;throw Error("attempt to use pseudo-index")}},M=function(d,$){let c,w=d.ci;return Y(d,$>=0,"negative 'n'"),d.stack_last-d.top>$?c=!0:d.top+Ce.EXTRA_STACK>se-$?c=!1:(X.luaD_growstack(d,$),c=!0),c&&w.top<d.top+$&&(w.top=d.top+$),c},v=function(d,$,c){if(d!==$){z(d,c),Y(d,d.l_G===$.l_G,"moving among independent states"),Y(d,$.ci.top-$.top>=c,"stack overflow"),d.top-=c;for(let w=0;w<c;w++)$.stack[$.top]=new Le.TValue,Le.setobj2s($,$.top,d.stack[d.top+w]),delete d.stack[d.top+w],$.top++}},O=function(d,$){return $>0||$<=s?$:d.top-d.ci.funcOff+$},Te=function(d){return d.top-(d.ci.funcOff+1)},Se=function(d,$){Le.pushobj2s(d,le(d,$)),Y(d,d.top<=d.ci.top,"stack overflow")},Oe=function(d,$){let c=d.ci.funcOff,w;$>=0?(Y(d,$<=d.stack_last-(c+1),"new top too large"),w=c+1+$):(Y(d,-($+1)<=d.top-(c+1),"invalid new top"),w=d.top+$+1),X.adjust_top(d,w)},P=function(d,$){Oe(d,-$-1)},Q=function(d,$,c){for(;$<c;$++,c--){let w=d.stack[$],D=new Ye(w.type,w.value);Le.setobjs2s(d,$,c),Le.setobj2s(d,c,D)}},ie=function(d,$,c){let w=d.top-1,D=Be(d,$),ae=d.stack[D];Y(d,Ae(ae)&&$>s,"index not in the stack"),Y(d,(c>=0?c:-c)<=w-D+1,"invalid 'n'");let Ee=c>=0?w-c:D-c-1;Q(d,D,Ee),Q(d,Ee+1,d.top-1),Q(d,D,d.top-1)},xe=function(d,$,c){let w=le(d,$);le(d,c).setfrom(w)},Xe=function(d,$){ie(d,$,-1),P(d,1)},ze=function(d,$){ie(d,$,1)},dt=function(d,$){xe(d,-1,$),P(d,1)},et=function(d){d.stack[d.top]=new Ye(p,null),ct(d)},te=function(d,$){ne(typeof $=="number"),d.stack[d.top]=new Ye(F,$),ct(d)},fe=function(d,$){B($),d.stack[d.top]=new Ye(k,$),ct(d)},Ne=function(d,$,c){B(c);let w;return c===0?($=ee("",!0),w=pe(d,$)):($=U($),Y(d,$.length>=c,"invalid length to lua_pushlstring"),w=Me(d,$.subarray(0,c))),Le.pushsvalue2s(d,w),Y(d,d.top<=d.ci.top,"stack overflow"),w.value},qe=function(d,$){if($==null)d.stack[d.top]=new Ye(p,null),d.top++;else{let c=Me(d,U($));Le.pushsvalue2s(d,c),$=c.getstr()}return Y(d,d.top<=d.ci.top,"stack overflow"),$},st=function(d,$,c){return $=U($),Le.luaO_pushvfstring(d,$,c)},C=function(d,$,...c){return $=U($),Le.luaO_pushvfstring(d,$,c)},Re=function(d,$){if($==null)d.stack[d.top]=new Ye(p,null),d.top++;else{ne(typeof $=="string");let c=Ve(d,$);Le.pushsvalue2s(d,c),$=c.getstr()}return Y(d,d.top<=d.ci.top,"stack overflow"),$},he=function(d,$,c){if(ne(typeof $=="function"),B(c),c===0)d.stack[d.top]=new Ye(E,$);else{z(d,c),Y(d,c<=ke.MAXUPVAL,"upvalue index too large");let w=new ht(d,$,c);for(let D=0;D<c;D++)w.upvalue[D].setfrom(d.stack[d.top-c+D]);for(let D=1;D<c;D++)delete d.stack[--d.top];c>0&&--d.top,d.stack[d.top].setclCvalue(w)}ct(d)},L=he,ye=function(d,$){he(d,$,0)},Je=ye,tt=function(d,$){d.stack[d.top]=new Ye(_,!!$),ct(d)},gt=function(d,$){d.stack[d.top]=new Ye(y,$),ct(d)},St=function(d){return d.stack[d.top]=new Ye(V,d),ct(d),d.l_G.mainthread===d},Tt=function(d){Ie(d,s,o)},bt=function(d,$,c){let w=Me(d,U(c));z(d,1),Le.pushsvalue2s(d,w),Y(d,d.top<=d.ci.top,"stack overflow"),ge.settable(d,$,d.stack[d.top-1],d.stack[d.top-2]),delete d.stack[--d.top],delete d.stack[--d.top]},Yt=function(d,$){bt(d,$e.luaH_getint(d.l_G.l_registry.value,o),$)},Ot=function(d,$){z(d,1);let c,w=le(d,$);switch(d.stack[d.top-1].ttisnil()?c=null:(Y(d,d.stack[d.top-1].ttistable(),"table expected"),c=d.stack[d.top-1].value),w.ttnov()){case _e:case q:{w.value.metatable=c;break}default:{d.l_G.mt[w.ttnov()]=c;break}}return delete d.stack[--d.top],!0},Pt=function(d,$){z(d,2);let c=le(d,$);ge.settable(d,c,d.stack[d.top-2],d.stack[d.top-1]),delete d.stack[--d.top],delete d.stack[--d.top]},Gt=function(d,$,c){bt(d,le(d,$),c)},ln=function(d,$,c){B(c),z(d,1);let w=le(d,$);d.stack[d.top]=new Ye(k,c),ct(d),ge.settable(d,w,d.stack[d.top-1],d.stack[d.top-2]),delete d.stack[--d.top],delete d.stack[--d.top]},dn=function(d,$){z(d,2);let c=le(d,$);Y(d,c.ttistable(),"table expected");let w=d.stack[d.top-2],D=d.stack[d.top-1];$e.luaH_setfrom(d,c.value,w,D),$e.invalidateTMcache(c.value),delete d.stack[--d.top],delete d.stack[--d.top]},cn=function(d,$,c){B(c),z(d,1);let w=le(d,$);Y(d,w.ttistable(),"table expected"),$e.luaH_setint(w.value,c,d.stack[d.top-1]),delete d.stack[--d.top]},an=function(d,$,c){z(d,1);let w=le(d,$);Y(d,w.ttistable(),"table expected");let D=new Ye(y,c),ae=d.stack[d.top-1];$e.luaH_setfrom(d,w.value,D,ae),delete d.stack[--d.top]},tn=function(d,$,c){let w=Me(d,U(c));return Le.pushsvalue2s(d,w),Y(d,d.top<=d.ci.top,"stack overflow"),ge.luaV_gettable(d,$,d.stack[d.top-1],d.top-1),d.stack[d.top-1].ttnov()},Ie=function(d,$,c){let w=le(d,$);return B(c),Y(d,w.ttistable(),"table expected"),Le.pushobj2s(d,$e.luaH_getint(w.value,c)),Y(d,d.top<=d.ci.top,"stack overflow"),d.stack[d.top-1].ttnov()},J=function(d,$,c){let w=le(d,$);Y(d,w.ttistable(),"table expected");let D=new Ye(y,c);return Le.pushobj2s(d,$e.luaH_get(d,w.value,D)),Y(d,d.top<=d.ci.top,"stack overflow"),d.stack[d.top-1].ttnov()},nt=function(d,$){let c=le(d,$);return Y(d,c.ttistable(c),"table expected"),Le.setobj2s(d,d.top-1,$e.luaH_get(d,c.value,d.stack[d.top-1])),d.stack[d.top-1].ttnov()},mt=function(d,$,c){let w=new Le.TValue(q,$e.luaH_new(d));d.stack[d.top]=w,ct(d)},Z=function(d,$){return new Le.Udata(d,$)},b=function(d,$){let c=Z(d,$);return d.stack[d.top]=new Le.TValue(_e,c),ct(d),c.data},K=function(d,$,c){switch(B(c),$.ttype()){case h:{let w=$.value;return 1<=c&&c<=w.nupvalues?{name:ee("",!0),val:w.upvalue[c-1]}:null}case T:{let w=$.value,D=w.p;if(!(1<=c&&c<=D.upvalues.length))return null;let ae=D.upvalues[c-1].name;return{name:ae?ae.getstr():ee("(*no name)",!0),val:w.upvals[c-1]}}default:return null}},ue=function(d,$,c){let w=K(d,le(d,$),c);if(w){let D=w.name,ae=w.val;return Le.pushobj2s(d,ae),Y(d,d.top<=d.ci.top,"stack overflow"),D}return null},Pe=function(d,$,c){let w=le(d,$);z(d,1);let D=K(d,w,c);if(D){let ae=D.name;return D.val.setfrom(d.stack[d.top-1]),delete d.stack[--d.top],ae}return null},u=function(d){mt(d)},S=function(d,$,c){ye(d,c),Yt(d,$)},N=function(d,$){let c=le(d,$),w,D=!1;switch(c.ttnov()){case q:case _e:w=c.value.metatable;break;default:w=d.l_G.mt[c.ttnov()];break}return w!=null&&(d.stack[d.top]=new Ye(q,w),ct(d),D=!0),D},oe=function(d,$){let c=le(d,$);Y(d,c.ttisfulluserdata(),"full userdata expected");let w=c.value.uservalue;return d.stack[d.top]=new Ye(w.type,w.value),ct(d),d.stack[d.top-1].ttnov()},G=function(d,$){let c=le(d,$);return ge.luaV_gettable(d,c,d.stack[d.top-1],d.top-1),d.stack[d.top-1].ttnov()},De=function(d,$,c){return tn(d,le(d,$),c)},Ge=function(d,$,c){let w=le(d,$);return B(c),d.stack[d.top]=new Ye(k,c),ct(d),ge.luaV_gettable(d,w,d.stack[d.top-1],d.top-1),d.stack[d.top-1].ttnov()},rt=function(d,$){return tn(d,$e.luaH_getint(d.l_G.l_registry.value,o),$)},Mt=function(d,$){return!le(d,$).l_isfalse()},Nt=function(d,$){let c=le(d,$);if(!c.ttisstring()){if(!ge.cvt2str(c))return null;Le.luaO_tostring(d,c)}return c.svalue()},Ct=Nt,sn=function(d,$){let c=le(d,$);if(!c.ttisstring()){if(!ge.cvt2str(c))return null;Le.luaO_tostring(d,c)}return c.jsstring()},Lt=function(d,$){let c=Nt(d,$);return new DataView(c.buffer,c.byteOffset,c.byteLength)},R=function(d,$){let c=le(d,$);switch(c.ttype()){case ce:case x:return c.vslen();case _e:return c.value.len;case q:return $e.luaH_getn(c.value);default:return 0}},Ue=function(d,$){let c=le(d,$);return c.ttislcf()||c.ttisCclosure()?c.value:null},je=function(d,$){let c=Ze(d,$);return c===!1?0:c},Ze=function(d,$){return ge.tointeger(le(d,$))},pt=function(d,$){let c=Qe(d,$);return c===!1?0:c},Qe=function(d,$){return ge.tonumber(le(d,$))},ot=function(d,$){let c=le(d,$);switch(c.ttnov()){case _e:return c.value.data;case y:return c.value;default:return null}},Dt=function(d,$){let c=le(d,$);return c.ttisthread()?c.value:null},Ke=function(d,$){let c=le(d,$);switch(c.ttype()){case q:case T:case h:case E:case V:case _e:case y:return c.value;default:return null}},lt=new WeakMap,_t=function(d,$){let c=lt.get(d);return c?$===null||$.l_G===c:!1},It=function(d,$,c){let w=function(D){Y(D,D instanceof Ce.lua_State&&d===D.l_G,"must be from same global state"),D.stack[D.top]=new Ye($,c),ct(D)};return lt.set(w,d),w},Bn=function(d,$){let c=le(d,$);return It(d.l_G,c.type,c.value)},kn=function(d,$,c,w){let D=le(d,$),ae=le(d,c),Ee=0;if(Ae(D)&&Ae(ae))switch(w){case t:Ee=ge.luaV_equalobj(d,D,ae);break;case r:Ee=ge.luaV_lessthan(d,D,ae);break;case i:Ee=ge.luaV_lessequal(d,D,ae);break;default:Y(d,!1,"invalid option")}return Ee},Vi=function(d,$){let c=new Ye,w=Le.luaO_str2num($,c);return w!==0&&(d.stack[d.top]=c,ct(d)),w},Hi=function(d,$){X.luaD_callnoyield(d,$.funcOff,$.nresults)},$n=function(d,$){let c=le(d,$);return Ae(c)?c.ttnov():W},Fa=function(d,$){return Y(d,W<=$&&$<f,"invalid tag"),we.ttypename($)},Zr=function(d,$){let c=le(d,$);return c.ttislcf(c)||c.ttisCclosure()},zi=function(d,$){return $n(d,$)===p},Jr=function(d,$){return $n(d,$)===_},Qr=function(d,$){return $n(d,$)===W},Ba=function(d,$){return $n(d,$)<=0},er=function(d,$){return le(d,$).ttistable()},Ga=function(d,$){return le(d,$).ttisinteger()},Hs=function(d,$){return ge.tonumber(le(d,$))!==!1},ii=function(d,$){let c=le(d,$);return c.ttisstring()||ge.cvt2str(c)},Va=function(d,$){let c=le(d,$);return c.ttisfulluserdata(c)||c.ttislightuserdata()},ea=function(d,$){return $n(d,$)===V},ta=function(d,$){return $n(d,$)===g},zs=function(d,$){return $n(d,$)===y},Ha=function(d,$,c){let w=le(d,$),D=le(d,c);return Ae(w)&&Ae(D)?ge.luaV_equalobj(null,w,D):0},ci=function(d,$){$!==a&&$!==e?z(d,2):(z(d,1),Le.pushobj2s(d,d.stack[d.top-1]),Y(d,d.top<=d.ci.top,"stack overflow")),Le.luaO_arith(d,$,d.stack[d.top-2],d.stack[d.top-1],d.stack[d.top-2]),delete d.stack[--d.top]},na=ee("?"),Sr=function(d,$,c,w,D){w?w=U(w):w=na,D!==null&&(D=U(D));let ae=new it(d,$,c),Ee=X.luaD_protectedparser(d,ae,w,D);if(Ee===A){let Fe=d.stack[d.top-1].value;if(Fe.nupvalues>=1){let xt=$e.luaH_getint(d.l_G.l_registry.value,o);Fe.upvals[0].setfrom(xt)}}return Ee},tr=function(d,$,c,w){z(d,1);let D=d.stack[d.top-1];return D.ttisLclosure()?j(d,D.value.p,$,c,w):1},ia=function(d){return d.status},ui=function(d,$){z(d,1);let c=le(d,$);Y(d,c.ttisfulluserdata(),"full userdata expected"),c.value.uservalue.setfrom(d.stack[d.top-1]),delete d.stack[--d.top]},Tr=function(d,$,c){Y(d,c===n||d.ci.top-d.top>=c-$,"results from function overflow current stack size")},Wi=function(d,$,c,w,D){Y(d,D===null||!(d.ci.callstatus&Ce.CIST_LUA),"cannot use continuations inside hooks"),z(d,$+1),Y(d,d.status===A,"cannot do calls on non-normal thread"),Tr(d,$,c);let ae=d.top-($+1);D!==null&&d.nny===0?(d.ci.c_k=D,d.ci.c_ctx=w,X.luaD_call(d,ae,c)):X.luaD_callnoyield(d,ae,c),c===n&&d.ci.top<d.top&&(d.ci.top=d.top)},Ws=function(d,$,c){Wi(d,$,c,0,null)},Mr=function(d,$,c,w,D,ae){Y(d,ae===null||!(d.ci.callstatus&Ce.CIST_LUA),"cannot use continuations inside hooks"),z(d,$+1),Y(d,d.status===A,"cannot do calls on non-normal thread"),Tr(d,$,c);let Ee,Fe;w===0?Fe=0:Fe=Be(d,w);let xt=d.top-($+1);if(ae===null||d.nny>0){let yt={funcOff:xt,nresults:c};Ee=X.luaD_pcall(d,Hi,yt,xt,Fe)}else{let yt=d.ci;yt.c_k=ae,yt.c_ctx=D,yt.extra=xt,yt.c_old_errfunc=d.errfunc,d.errfunc=Fe,yt.callstatus&=~Ce.CIST_OAH|d.allowhook,yt.callstatus|=Ce.CIST_YPCALL,X.luaD_call(d,xt,c),yt.callstatus&=~Ce.CIST_YPCALL,d.errfunc=yt.c_old_errfunc,Ee=A}return c===n&&d.ci.top<d.top&&(d.ci.top=d.top),Ee},br=function(d,$,c,w){return Mr(d,$,c,w,0,null)},Xs=function(d){z(d,1),de.luaG_errormsg(d)},ra=function(d,$){let c=le(d,$);return Y(d,c.ttistable(),"table expected"),d.stack[d.top]=new Ye,$e.luaH_next(d,c.value,d.top-1)?(ct(d),1):(delete d.stack[d.top],delete d.stack[--d.top],0)},Ks=function(d,$){z(d,$),$>=2?ge.luaV_concat(d,$):$===0&&(Le.pushsvalue2s(d,pe(d,ee("",!0))),Y(d,d.top<=d.ci.top,"stack overflow"))},aa=function(d,$){let c=le(d,$),w=new Ye;ge.luaV_objlen(d,w,c),d.stack[d.top]=w,ct(d)},Ui=function(d,$,c){let w=le(d,$);Y(d,w.ttisLclosure(),"Lua function expected");let D=w.value;return B(c),Y(d,1<=c&&c<=D.p.upvalues.length,"invalid upvalue index"),{f:D,i:c-1}},za=function(d,$,c){let w=le(d,$);switch(w.ttype()){case T:{let D=Ui(d,$,c);return D.f.upvals[D.i]}case h:{let D=w.value;return Y(d,(c|0)===c&&c>0&&c<=D.nupvalues,"invalid upvalue index"),D.upvalue[c-1]}default:return Y(d,!1,"closure expected"),null}},js=function(d,$,c,w,D){let ae=Ui(d,$,c),Ee=Ui(d,w,D),Fe=Ee.f.upvals[Ee.i];ae.f.upvals[ae.i]=Fe},sa=function(){},qs=function(){return console.warn("lua_getallocf is not available"),0},Fo=function(){return console.warn("lua_setallocf is not available"),0},$s=function(){return console.warn("lua_getextraspace is not available"),0};return ut.api_incr_top=ct,ut.api_checknelems=z,ut.lua_absindex=O,ut.lua_arith=ci,ut.lua_atpanic=H,ut.lua_atnativeerror=re,ut.lua_call=Ws,ut.lua_callk=Wi,ut.lua_checkstack=M,ut.lua_compare=kn,ut.lua_concat=Ks,ut.lua_copy=xe,ut.lua_createtable=mt,ut.lua_dump=tr,ut.lua_error=Xs,ut.lua_gc=sa,ut.lua_getallocf=qs,ut.lua_getextraspace=$s,ut.lua_getfield=De,ut.lua_getglobal=rt,ut.lua_geti=Ge,ut.lua_getmetatable=N,ut.lua_gettable=G,ut.lua_gettop=Te,ut.lua_getupvalue=ue,ut.lua_getuservalue=oe,ut.lua_insert=ze,ut.lua_isboolean=Jr,ut.lua_iscfunction=Zr,ut.lua_isfunction=ta,ut.lua_isinteger=Ga,ut.lua_islightuserdata=zs,ut.lua_isnil=zi,ut.lua_isnone=Qr,ut.lua_isnoneornil=Ba,ut.lua_isnumber=Hs,ut.lua_isproxy=_t,ut.lua_isstring=ii,ut.lua_istable=er,ut.lua_isthread=ea,ut.lua_isuserdata=Va,ut.lua_len=aa,ut.lua_load=Sr,ut.lua_newtable=u,ut.lua_newuserdata=b,ut.lua_next=ra,ut.lua_pcall=br,ut.lua_pcallk=Mr,ut.lua_pop=P,ut.lua_pushboolean=tt,ut.lua_pushcclosure=he,ut.lua_pushcfunction=ye,ut.lua_pushfstring=C,ut.lua_pushglobaltable=Tt,ut.lua_pushinteger=fe,ut.lua_pushjsclosure=L,ut.lua_pushjsfunction=Je,ut.lua_pushlightuserdata=gt,ut.lua_pushliteral=Re,ut.lua_pushlstring=Ne,ut.lua_pushnil=et,ut.lua_pushnumber=te,ut.lua_pushstring=qe,ut.lua_pushthread=St,ut.lua_pushvalue=Se,ut.lua_pushvfstring=st,ut.lua_rawequal=Ha,ut.lua_rawget=nt,ut.lua_rawgeti=Ie,ut.lua_rawgetp=J,ut.lua_rawlen=R,ut.lua_rawset=dn,ut.lua_rawseti=cn,ut.lua_rawsetp=an,ut.lua_register=S,ut.lua_remove=Xe,ut.lua_replace=dt,ut.lua_rotate=ie,ut.lua_setallocf=Fo,ut.lua_setfield=Gt,ut.lua_setglobal=Yt,ut.lua_seti=ln,ut.lua_setmetatable=Ot,ut.lua_settable=Pt,ut.lua_settop=Oe,ut.lua_setupvalue=Pe,ut.lua_setuservalue=ui,ut.lua_status=ia,ut.lua_stringtonumber=Vi,ut.lua_toboolean=Mt,ut.lua_tocfunction=Ue,ut.lua_todataview=Lt,ut.lua_tointeger=je,ut.lua_tointegerx=Ze,ut.lua_tojsstring=sn,ut.lua_tolstring=Nt,ut.lua_tonumber=pt,ut.lua_tonumberx=Qe,ut.lua_topointer=Ke,ut.lua_toproxy=Bn,ut.lua_tostring=Ct,ut.lua_tothread=Dt,ut.lua_touserdata=ot,ut.lua_type=$n,ut.lua_typename=Fa,ut.lua_upvalueid=za,ut.lua_upvaluejoin=js,ut.lua_version=ve,ut.lua_xmove=v,ut}const Rt=Dn(),ft=zl(),$r=qr(),Wl=Qi(),Nu=jr();be.LUA_AUTHORS=Rt.LUA_AUTHORS;be.LUA_COPYRIGHT=Rt.LUA_COPYRIGHT;be.LUA_ERRERR=Rt.thread_status.LUA_ERRERR;be.LUA_ERRGCMM=Rt.thread_status.LUA_ERRGCMM;be.LUA_ERRMEM=Rt.thread_status.LUA_ERRMEM;be.LUA_ERRRUN=Rt.thread_status.LUA_ERRRUN;be.LUA_ERRSYNTAX=Rt.thread_status.LUA_ERRSYNTAX;be.LUA_HOOKCALL=Rt.LUA_HOOKCALL;be.LUA_HOOKCOUNT=Rt.LUA_HOOKCOUNT;be.LUA_HOOKLINE=Rt.LUA_HOOKLINE;be.LUA_HOOKRET=Rt.LUA_HOOKRET;be.LUA_HOOKTAILCALL=Rt.LUA_HOOKTAILCALL;be.LUA_MASKCALL=Rt.LUA_MASKCALL;be.LUA_MASKCOUNT=Rt.LUA_MASKCOUNT;be.LUA_MASKLINE=Rt.LUA_MASKLINE;be.LUA_MASKRET=Rt.LUA_MASKRET;be.LUA_MINSTACK=Rt.LUA_MINSTACK;be.LUA_MULTRET=Rt.LUA_MULTRET;be.LUA_NUMTAGS=Rt.constant_types.LUA_NUMTAGS;be.LUA_OK=Rt.thread_status.LUA_OK;be.LUA_OPADD=Rt.LUA_OPADD;be.LUA_OPBAND=Rt.LUA_OPBAND;be.LUA_OPBNOT=Rt.LUA_OPBNOT;be.LUA_OPBOR=Rt.LUA_OPBOR;be.LUA_OPBXOR=Rt.LUA_OPBXOR;be.LUA_OPDIV=Rt.LUA_OPDIV;be.LUA_OPEQ=Rt.LUA_OPEQ;be.LUA_OPIDIV=Rt.LUA_OPIDIV;be.LUA_OPLE=Rt.LUA_OPLE;be.LUA_OPLT=Rt.LUA_OPLT;be.LUA_OPMOD=Rt.LUA_OPMOD;be.LUA_OPMUL=Rt.LUA_OPMUL;be.LUA_OPPOW=Rt.LUA_OPPOW;be.LUA_OPSHL=Rt.LUA_OPSHL;be.LUA_OPSHR=Rt.LUA_OPSHR;be.LUA_OPSUB=Rt.LUA_OPSUB;be.LUA_OPUNM=Rt.LUA_OPUNM;be.LUA_REGISTRYINDEX=Rt.LUA_REGISTRYINDEX;be.LUA_RELEASE=Rt.LUA_RELEASE;be.LUA_RIDX_GLOBALS=Rt.LUA_RIDX_GLOBALS;be.LUA_RIDX_LAST=Rt.LUA_RIDX_LAST;be.LUA_RIDX_MAINTHREAD=Rt.LUA_RIDX_MAINTHREAD;be.LUA_SIGNATURE=Rt.LUA_SIGNATURE;be.LUA_TNONE=Rt.constant_types.LUA_TNONE;be.LUA_TNIL=Rt.constant_types.LUA_TNIL;be.LUA_TBOOLEAN=Rt.constant_types.LUA_TBOOLEAN;be.LUA_TLIGHTUSERDATA=Rt.constant_types.LUA_TLIGHTUSERDATA;be.LUA_TNUMBER=Rt.constant_types.LUA_TNUMBER;be.LUA_TSTRING=Rt.constant_types.LUA_TSTRING;be.LUA_TTABLE=Rt.constant_types.LUA_TTABLE;be.LUA_TFUNCTION=Rt.constant_types.LUA_TFUNCTION;be.LUA_TUSERDATA=Rt.constant_types.LUA_TUSERDATA;be.LUA_TTHREAD=Rt.constant_types.LUA_TTHREAD;be.LUA_VERSION=Rt.LUA_VERSION;be.LUA_VERSION_MAJOR=Rt.LUA_VERSION_MAJOR;be.LUA_VERSION_MINOR=Rt.LUA_VERSION_MINOR;be.LUA_VERSION_NUM=Rt.LUA_VERSION_NUM;be.LUA_VERSION_RELEASE=Rt.LUA_VERSION_RELEASE;be.LUA_YIELD=Rt.thread_status.LUA_YIELD;be.lua_Debug=Rt.lua_Debug;be.lua_upvalueindex=Rt.lua_upvalueindex;be.lua_absindex=ft.lua_absindex;be.lua_arith=ft.lua_arith;be.lua_atpanic=ft.lua_atpanic;be.lua_atnativeerror=ft.lua_atnativeerror;be.lua_call=ft.lua_call;be.lua_callk=ft.lua_callk;be.lua_checkstack=ft.lua_checkstack;be.lua_close=Nu.lua_close;be.lua_compare=ft.lua_compare;be.lua_concat=ft.lua_concat;be.lua_copy=ft.lua_copy;be.lua_createtable=ft.lua_createtable;be.lua_dump=ft.lua_dump;be.lua_error=ft.lua_error;be.lua_gc=ft.lua_gc;be.lua_getallocf=ft.lua_getallocf;be.lua_getextraspace=ft.lua_getextraspace;be.lua_getfield=ft.lua_getfield;be.lua_getglobal=ft.lua_getglobal;be.lua_gethook=$r.lua_gethook;be.lua_gethookcount=$r.lua_gethookcount;be.lua_gethookmask=$r.lua_gethookmask;be.lua_geti=ft.lua_geti;be.lua_getinfo=$r.lua_getinfo;be.lua_getlocal=$r.lua_getlocal;be.lua_getmetatable=ft.lua_getmetatable;be.lua_getstack=$r.lua_getstack;be.lua_gettable=ft.lua_gettable;be.lua_gettop=ft.lua_gettop;be.lua_getupvalue=ft.lua_getupvalue;be.lua_getuservalue=ft.lua_getuservalue;be.lua_insert=ft.lua_insert;be.lua_isboolean=ft.lua_isboolean;be.lua_iscfunction=ft.lua_iscfunction;be.lua_isfunction=ft.lua_isfunction;be.lua_isinteger=ft.lua_isinteger;be.lua_islightuserdata=ft.lua_islightuserdata;be.lua_isnil=ft.lua_isnil;be.lua_isnone=ft.lua_isnone;be.lua_isnoneornil=ft.lua_isnoneornil;be.lua_isnumber=ft.lua_isnumber;be.lua_isproxy=ft.lua_isproxy;be.lua_isstring=ft.lua_isstring;be.lua_istable=ft.lua_istable;be.lua_isthread=ft.lua_isthread;be.lua_isuserdata=ft.lua_isuserdata;be.lua_isyieldable=Wl.lua_isyieldable;be.lua_len=ft.lua_len;be.lua_load=ft.lua_load;be.lua_newstate=Nu.lua_newstate;be.lua_newtable=ft.lua_newtable;be.lua_newthread=Nu.lua_newthread;be.lua_newuserdata=ft.lua_newuserdata;be.lua_next=ft.lua_next;be.lua_pcall=ft.lua_pcall;be.lua_pcallk=ft.lua_pcallk;be.lua_pop=ft.lua_pop;be.lua_pushboolean=ft.lua_pushboolean;be.lua_pushcclosure=ft.lua_pushcclosure;be.lua_pushcfunction=ft.lua_pushcfunction;be.lua_pushfstring=ft.lua_pushfstring;be.lua_pushglobaltable=ft.lua_pushglobaltable;be.lua_pushinteger=ft.lua_pushinteger;be.lua_pushjsclosure=ft.lua_pushjsclosure;be.lua_pushjsfunction=ft.lua_pushjsfunction;be.lua_pushlightuserdata=ft.lua_pushlightuserdata;be.lua_pushliteral=ft.lua_pushliteral;be.lua_pushlstring=ft.lua_pushlstring;be.lua_pushnil=ft.lua_pushnil;be.lua_pushnumber=ft.lua_pushnumber;be.lua_pushstring=ft.lua_pushstring;be.lua_pushthread=ft.lua_pushthread;be.lua_pushvalue=ft.lua_pushvalue;be.lua_pushvfstring=ft.lua_pushvfstring;be.lua_rawequal=ft.lua_rawequal;be.lua_rawget=ft.lua_rawget;be.lua_rawgeti=ft.lua_rawgeti;be.lua_rawgetp=ft.lua_rawgetp;be.lua_rawlen=ft.lua_rawlen;be.lua_rawset=ft.lua_rawset;be.lua_rawseti=ft.lua_rawseti;be.lua_rawsetp=ft.lua_rawsetp;be.lua_register=ft.lua_register;be.lua_remove=ft.lua_remove;be.lua_replace=ft.lua_replace;be.lua_resume=Wl.lua_resume;be.lua_rotate=ft.lua_rotate;be.lua_setallocf=ft.lua_setallocf;be.lua_setfield=ft.lua_setfield;be.lua_setglobal=ft.lua_setglobal;be.lua_sethook=$r.lua_sethook;be.lua_seti=ft.lua_seti;be.lua_setlocal=$r.lua_setlocal;be.lua_setmetatable=ft.lua_setmetatable;be.lua_settable=ft.lua_settable;be.lua_settop=ft.lua_settop;be.lua_setupvalue=ft.lua_setupvalue;be.lua_setuservalue=ft.lua_setuservalue;be.lua_status=ft.lua_status;be.lua_stringtonumber=ft.lua_stringtonumber;be.lua_toboolean=ft.lua_toboolean;be.lua_todataview=ft.lua_todataview;be.lua_tointeger=ft.lua_tointeger;be.lua_tointegerx=ft.lua_tointegerx;be.lua_tojsstring=ft.lua_tojsstring;be.lua_tolstring=ft.lua_tolstring;be.lua_tonumber=ft.lua_tonumber;be.lua_tonumberx=ft.lua_tonumberx;be.lua_topointer=ft.lua_topointer;be.lua_toproxy=ft.lua_toproxy;be.lua_tostring=ft.lua_tostring;be.lua_tothread=ft.lua_tothread;be.lua_touserdata=ft.lua_touserdata;be.lua_type=ft.lua_type;be.lua_typename=ft.lua_typename;be.lua_upvalueid=ft.lua_upvalueid;be.lua_upvaluejoin=ft.lua_upvaluejoin;be.lua_version=ft.lua_version;be.lua_xmove=ft.lua_xmove;be.lua_yield=Wl.lua_yield;be.lua_yieldk=Wl.lua_yieldk;be.lua_tocfunction=ft.lua_tocfunction;var Et={};const{LUAL_BUFFERSIZE:IT}=Ei(),{LUA_ERRERR:DT,LUA_MULTRET:Fp,LUA_REGISTRYINDEX:Xl,LUA_SIGNATURE:ad,LUA_TBOOLEAN:kT,LUA_TLIGHTUSERDATA:LT,LUA_TNIL:ys,LUA_TNONE:FT,LUA_TNUMBER:Iu,LUA_TSTRING:xo,LUA_TTABLE:BT,LUA_VERSION_NUM:GT,lua_Debug:Kl,lua_absindex:jl,lua_atpanic:VT,lua_call:Bp,lua_checkstack:HT,lua_concat:Ul,lua_copy:zT,lua_createtable:Du,lua_error:WT,lua_getfield:ql,lua_getinfo:$l,lua_getmetatable:Gp,lua_getstack:Eo,lua_gettop:xs,lua_insert:XT,lua_isinteger:KT,lua_isnil:jT,lua_isnumber:qT,lua_isstring:$T,lua_istable:YT,lua_len:ZT,lua_load:au,lua_newstate:JT,lua_newtable:QT,lua_next:eM,lua_pcall:Vp,lua_pop:xi,lua_pushboolean:Hp,lua_pushcclosure:tM,lua_pushcfunction:nM,lua_pushfstring:ni,lua_pushinteger:Ol,lua_pushliteral:gi,lua_pushlstring:iM,lua_pushnil:ku,lua_pushstring:Gs,lua_pushvalue:Ua,lua_pushvfstring:rM,lua_rawequal:zp,lua_rawget:aM,lua_rawgeti:su,lua_rawlen:sM,lua_rawseti:Pl,lua_remove:vr,lua_setfield:Ao,lua_setglobal:oM,lua_setmetatable:lM,lua_settop:ou,lua_toboolean:Wp,lua_tointeger:Xp,lua_tointegerx:Kp,lua_tojsstring:cM,lua_tolstring:jp,lua_tonumber:uM,lua_tonumberx:fM,lua_topointer:hM,lua_tostring:$i,lua_touserdata:dM,lua_type:Yr,lua_typename:qp,lua_version:sd}=be,{from_userstring:Lu,luastring_eq:$p,to_luastring:Ft,to_uristring:pM}=nn,Yp=DT+1,Fu=Ft("_LOADED"),_M=Ft("_PRELOAD"),mM=Ft("FILE*"),Zp=4*16+8,Bu=Ft("__name"),gM=Ft("__tostring"),Gu=new Uint8Array(0);let Jp=class{constructor(){this.L=null,this.b=Gu,this.n=0}};const od=10,ld=11,Qp=function(n,e,t){if(t===0||!YT(n,-1))return 0;for(ku(n);eM(n,-2);){if(Yr(n,-2)===xo){if(zp(n,e,-1))return xi(n,1),1;if(Qp(n,e,t-1))return vr(n,-2),gi(n,"."),XT(n,-2),Ul(n,3),1}xi(n,1)}return 0},e_=function(n,e){let t=xs(n);if($l(n,Ft("f"),e),ql(n,Xl,Fu),Qp(n,t+1,2)){let i=$i(n,-1);return i[0]===95&&i[1]===71&&i[2]===46&&(Gs(n,i.subarray(3)),vr(n,-2)),zT(n,-1,t+1),xi(n,2),1}else return ou(n,t),0},vM=function(n,e){e_(n,e)?(ni(n,Ft("function '%s'"),$i(n,-1)),vr(n,-2)):e.namewhat.length!==0?ni(n,Ft("%s '%s'"),e.namewhat,e.name):e.what&&e.what[0]===109?gi(n,"main chunk"):e.what&&e.what[0]===76?ni(n,Ft("function <%s:%d>"),e.short_src,e.linedefined):gi(n,"?")},xM=function(n){let e=new Kl,t=1,i=1;for(;Eo(n,i,e);)t=i,i*=2;for(;t<i;){let r=Math.floor((t+i)/2);Eo(n,r,e)?t=r+1:i=r}return i-1},EM=function(n,e,t,i){let r=new Kl,a=xs(n),s=xM(e),o=s-i>od+ld?od:-1;for(t&&ni(n,Ft(`%s
`),t),ju(n,10,null),gi(n,"stack traceback:");Eo(e,i++,r);)o--===0?(gi(n,`
	...`),i=s-ld+1):($l(e,Ft("Slnt",!0),r),ni(n,Ft(`
	%s:`),r.short_src),r.currentline>0&&gi(n,`${r.currentline}:`),gi(n," in "),vM(n,r),r.istailcall&&gi(n,`
	(...tail calls..)`),Ul(n,xs(n)-a));Ul(n,xs(n)-a)},AM=function(n){let e="PANIC: unprotected error in call to Lua API ("+cM(n,-1)+")";throw new Error(e)},Vs=function(n,e,t){let i=new Kl;return Eo(n,0,i)?($l(n,Ft("n"),i),$p(i.namewhat,Ft("method"))&&(e--,e===0)?Fi(n,Ft("calling '%s' on bad self (%s)"),i.name,t):(i.name===null&&(i.name=e_(n,i)?$i(n,-1):Ft("?")),Fi(n,Ft("bad argument #%d to '%s' (%s)"),e,i.name,t))):Fi(n,Ft("bad argument #%d (%s)"),e,t)},t_=function(n,e,t){let i;Ql(n,e,Bu)===xo?i=$i(n,-1):Yr(n,e)===LT?i=Ft("light userdata",!0):i=Vu(n,e);let r=ni(n,Ft("%s expected, got %s"),t,i);return Vs(n,e,r)},n_=function(n,e){let t=new Kl;if(Eo(n,e,t)&&($l(n,Ft("Sl",!0),t),t.currentline>0)){ni(n,Ft("%s:%d: "),t.short_src,t.currentline);return}Gs(n,Ft(""))},Fi=function(n,e,...t){return n_(n,1),rM(n,e,t),Ul(n,2),WT(n)},i_=function(n,e,t,i){if(e)return Hp(n,1),1;{ku(n);let r,a;return i?(r=i.message,a=-i.errno):(r="Success",a=0),t?ni(n,Ft("%s: %s"),t,Ft(r)):Gs(n,Ft(r)),Ol(n,a),3}},SM=function(n,e){let t,i;if(e===null)return Hp(n,1),gi(n,"exit"),Ol(n,0),3;if(e.status)t="exit",i=e.status;else if(e.signal)t="signal",i=e.signal;else return i_(n,0,null,e);return ku(n),gi(n,t),Ol(n,i),3},Yl=function(n,e){return ql(n,Xl,e)},TM=function(n,e){return Yl(n,e)!==ys?0:(xi(n,1),Du(n,0,2),Gs(n,e),Ao(n,-2,Bu),Ua(n,-1),Ao(n,Xl,e),1)},MM=function(n,e){Yl(n,e),lM(n,-2)},r_=function(n,e,t){let i=dM(n,e);return i!==null&&Gp(n,e)?(Yl(n,t),zp(n,-1,-2)||(i=null),xi(n,2),i):null},bM=function(n,e,t){let i=r_(n,e,t);return i===null&&t_(n,e,t),i},yM=function(n,e,t,i){let r=t!==null?o_(n,e,t):a_(n,e);for(let a=0;i[a];a++)if($p(i[a],r))return a;return Vs(n,e,ni(n,Ft("invalid option '%s'"),r))},Zl=function(n,e,t){t_(n,e,qp(n,t))},wM=function(){let n=JT();return n&&VT(n,AM),n},Vu=function(n,e){return qp(n,Yr(n,e))},RM=function(n,e,t,i){e||Vs(n,t,i)},CM=function(n,e){Yr(n,e)===FT&&Vs(n,e,Ft("value expected",!0))},UM=function(n,e,t){Yr(n,e)!==t&&Zl(n,e,t)},Hu=function(n,e){let t=jp(n,e);return t==null&&Zl(n,e,xo),t},a_=Hu,s_=function(n,e,t){return Yr(n,e)<=0?t===null?null:Lu(t):Hu(n,e)},o_=s_,OM=function(n,e){qT(n,e)?Vs(n,e,Ft("number has no integer representation",!0)):Zl(n,e,Iu)},l_=function(n,e){let t=fM(n,e);return t===!1&&Zl(n,e,Iu),t},PM=function(n,e,t){return Ku(n,l_,e,t)},c_=function(n,e){let t=Kp(n,e);return t===!1&&OM(n,e),t},NM=function(n,e,t){return Ku(n,c_,e,t)},No=function(n,e){let t=n.n+e;if(n.b.length<t){let i=Math.max(n.b.length*2,t),r=new Uint8Array(i);r.set(n.b),n.b=r}return n.b.subarray(n.n,t)},zu=function(n,e){e.L=n,e.b=Gu},IM=function(n,e,t){return zu(n,e),No(e,t)},DM=function(n){return No(n,IT)},Jl=function(n,e,t){t>0&&(e=Lu(e),No(n,t).set(e.subarray(0,t)),Xu(n,t))},lu=function(n,e){e=Lu(e),Jl(n,e,e.length)},Wu=function(n){iM(n.L,n.b,n.n),n.n=0,n.b=Gu},kM=function(n,e){No(n,1),n.b[n.n++]=e},Xu=function(n,e){n.n+=e},LM=function(n,e){Xu(n,e),Wu(n)},FM=function(n){let e=n.L,t=$i(e,-1);Jl(n,t,t.length),xi(e,1)},Ku=function(n,e,t,i){return Yr(n,t)<=0?i:e(n,t)},BM=function(n,e){let t=e.string;return e.string=null,t},u_=function(n,e,t,i,r){return au(n,BM,{string:e},i,r)},f_=function(n,e,t,i){return u_(n,e,t,i,null)},h_=function(n,e){return f_(n,e,e.length,e)},GM=function(n,e){return h_(n,e)||Vp(n,0,Fp,0)},Ql=function(n,e,t){if(Gp(n,e)){Gs(n,t);let i=aM(n,-2);return i===ys?xi(n,2):vr(n,-2),i}else return ys},d_=function(n,e,t){return e=jl(n,e),Ql(n,e,t)===ys?!1:(Ua(n,e),Bp(n,1,1),!0)},VM=function(n,e){ZT(n,e);let t=Kp(n,-1);return t===!1&&Fi(n,Ft("object length is not an integer",!0)),xi(n,1),t},HM=Ft("%I"),zM=Ft("%f"),WM=function(n,e){if(d_(n,e,gM))$T(n,-1)||Fi(n,Ft("'__tostring' must return a string"));else switch(Yr(n,e)){case Iu:{KT(n,e)?ni(n,HM,Xp(n,e)):ni(n,zM,uM(n,e));break}case xo:Ua(n,e);break;case kT:gi(n,Wp(n,e)?"true":"false");break;case ys:gi(n,"nil");break;default:{let i=Ql(n,e,Bu),r=i===xo?$i(n,-1):Vu(n,e);ni(n,Ft("%s: %p"),r,hM(n,e)),i!==ys&&vr(n,-2);break}}return jp(n,-1)},XM=function(n,e,t,i){p_(n,Xl,Fu),ql(n,-1,e),Wp(n,-1)||(xi(n,1),nM(n,t),Gs(n,e),Bp(n,1,1),Ua(n,-1),Ao(n,-3,e)),vr(n,-2),i&&(Ua(n,-1),oM(n,e))},KM=function(n,e,t){var i=t>>>0,r=e.length,a=n.length+1-r;e:for(;i<a;i++){for(let s=0;s<r;s++)if(n[i+s]!==e[s])continue e;return i}return-1},jM=function(n,e,t,i){let r,a=new Jp;for(zu(n,a);(r=KM(e,t))>=0;)Jl(a,e,r),lu(a,i),e=e.subarray(r+t.length);return lu(a,e),Wu(a),$i(n,-1)},p_=function(n,e,t){return ql(n,e,t)===BT?!0:(xi(n,1),e=jl(n,e),QT(n),Ua(n,-1),Ao(n,e,t),!1)},__=function(n,e,t){ju(n,t,Ft("too many upvalues",!0));for(let i in e){for(let r=0;r<t;r++)Ua(n,-t);tM(n,e[i],t),Ao(n,-(t+2),Ft(i))}xi(n,t)},ju=function(n,e,t){HT(n,e)||(t?Fi(n,Ft("stack overflow (%s)"),t):Fi(n,Ft("stack overflow",!0)))},qM=function(n){Du(n)},$M=function(n,e){Du(n),__(n,e,0)},YM=-2,m_=-1,ZM=function(n,e){let t;return jT(n,-1)?(xi(n,1),m_):(e=jl(n,e),su(n,e,0),t=Xp(n,-1),xi(n,1),t!==0?(su(n,e,t),Pl(n,e,0)):t=sM(n,e)+1,Pl(n,e,t),t)},JM=function(n,e,t){t>=0&&(e=jl(n,e),su(n,e,0),Pl(n,e,t),Ol(n,t),Pl(n,e,0))},ol=function(n,e,t,i){let r=i.message,a=$i(n,t).subarray(1);return ni(n,Ft("cannot %s %s: %s"),Ft(e),a,Ft(r)),vr(n,t),Yp};let ws;const cd=[239,187,191],QM=function(n){n.n=0;let e,t=0;do{if(e=ws(n),e===null||e!==cd[t])return e;t++,n.buff[n.n++]=e}while(t<cd.length);return n.n=0,ws(n)},ud=function(n){let e=QM(n);if(e===35){do e=ws(n);while(e&&e!==10);return{skipped:!0,c:ws(n)}}else return{skipped:!1,c:e}};let Nl;if(typeof process>"u"){class n{constructor(){this.n=NaN,this.f=null,this.buff=new Uint8Array(1024),this.pos=0,this.err=void 0}}const e=function(t,i){let r=i;if(r.f!==null&&r.n>0){let s=r.n;return r.n=0,r.f=r.f.subarray(r.pos),r.buff.subarray(0,s)}let a=r.f;return r.f=null,a};ws=function(t){return t.pos<t.f.length?t.f[t.pos++]:null},Nl=function(t,i,r){let a=new n,s=xs(t)+1;if(i===null)throw new Error("Can't read stdin in the browser");{ni(t,Ft("@%s"),i);let _=pM(i),h=new XMLHttpRequest;if(h.open("GET",_,!1),typeof window>"u"&&(h.responseType="arraybuffer"),h.send(),h.status>=200&&h.status<=299)typeof h.response=="string"?a.f=Ft(h.response):a.f=new Uint8Array(h.response);else return a.err=h.status,ol(t,"open",s,{message:`${h.status}: ${h.statusText}`})}let o=ud(a);o.c===ad[0]&&i||o.skipped&&(a.buff[a.n++]=10),o.c!==null&&(a.buff[a.n++]=o.c);let l=au(t,e,a,$i(t,-1),r),f=a.err;return f?(ou(t,s),ol(t,"read",s,f)):(vr(t,s),l)}}else{const n=Kn;class e{constructor(){this.n=NaN,this.f=null,this.buff=Buffer.alloc(1024),this.pos=0,this.err=void 0}}const t=function(i,r){let a=r,s=0;if(a.n>0)s=a.n,a.n=0;else{try{s=n.readSync(a.f,a.buff,0,a.buff.length,a.pos)}catch(o){a.err=o,s=0}a.pos+=s}return s>0?a.buff.subarray(0,s):null};ws=function(i){let r=Buffer.alloc(1),a;try{a=n.readSync(i.f,r,0,1,i.pos)}catch(s){return i.err=s,null}return i.pos+=a,a>0?r.readUInt8():null},Nl=function(i,r,a){let s=new e,o=xs(i)+1;if(r===null)gi(i,"=stdin"),s.f=process.stdin.fd;else{ni(i,Ft("@%s"),r);try{s.f=n.openSync(r,"r")}catch(h){return ol(i,"open",o,h)}}let l=ud(s);l.c===ad[0]&&r||l.skipped&&(s.buff[s.n++]=10),l.c!==null&&(s.buff[s.n++]=l.c);let f=au(i,t,s,$i(i,-1),a),_=s.err;if(r)try{n.closeSync(s.f)}catch{}return _?(ou(i,o),ol(i,"read",o,_)):(vr(i,o),f)}}const g_=function(n,e){return Nl(n,e,null)},eb=function(n,e){return g_(n,e)||Vp(n,0,Fp,0)},tb=function(){for(let n=0;n<arguments.length;n++){let e=arguments[n];if(typeof process>"u")do{let t=/([^\n]*)\n?([\d\D]*)/.exec(e);console.error(t[1]),e=t[2]}while(e!=="");else process.stderr.write(e)}},v_=function(n,e,t){let i=sd(n);t!=Zp&&Fi(n,Ft("core and library have incompatible numeric types")),i!=sd(null)?Fi(n,Ft("multiple Lua VMs detected")):i!==e&&Fi(n,Ft("version mismatch: app. needs %f, Lua core provides %f"),e,i)},nb=function(n){v_(n,GT,Zp)};Et.LUA_ERRFILE=Yp;Et.LUA_FILEHANDLE=mM;Et.LUA_LOADED_TABLE=Fu;Et.LUA_NOREF=YM;Et.LUA_PRELOAD_TABLE=_M;Et.LUA_REFNIL=m_;Et.luaL_Buffer=Jp;Et.luaL_addchar=kM;Et.luaL_addlstring=Jl;Et.luaL_addsize=Xu;Et.luaL_addstring=lu;Et.luaL_addvalue=FM;Et.luaL_argcheck=RM;Et.luaL_argerror=Vs;Et.luaL_buffinit=zu;Et.luaL_buffinitsize=IM;Et.luaL_callmeta=d_;Et.luaL_checkany=CM;Et.luaL_checkinteger=c_;Et.luaL_checklstring=Hu;Et.luaL_checknumber=l_;Et.luaL_checkoption=yM;Et.luaL_checkstack=ju;Et.luaL_checkstring=a_;Et.luaL_checktype=UM;Et.luaL_checkudata=bM;Et.luaL_checkversion=nb;Et.luaL_checkversion_=v_;Et.luaL_dofile=eb;Et.luaL_dostring=GM;Et.luaL_error=Fi;Et.luaL_execresult=SM;Et.luaL_fileresult=i_;Et.luaL_getmetafield=Ql;Et.luaL_getmetatable=Yl;Et.luaL_getsubtable=p_;Et.luaL_gsub=jM;Et.luaL_len=VM;Et.luaL_loadbuffer=f_;Et.luaL_loadbufferx=u_;Et.luaL_loadfile=g_;Et.luaL_loadfilex=Nl;Et.luaL_loadstring=h_;Et.luaL_newlib=$M;Et.luaL_newlibtable=qM;Et.luaL_newmetatable=TM;Et.luaL_newstate=wM;Et.luaL_opt=Ku;Et.luaL_optinteger=NM;Et.luaL_optlstring=s_;Et.luaL_optnumber=PM;Et.luaL_optstring=o_;Et.luaL_prepbuffer=DM;Et.luaL_prepbuffsize=No;Et.luaL_pushresult=Wu;Et.luaL_pushresultsize=LM;Et.luaL_ref=ZM;Et.luaL_requiref=XM;Et.luaL_setfuncs=__;Et.luaL_setmetatable=MM;Et.luaL_testudata=r_;Et.luaL_tolstring=WM;Et.luaL_traceback=EM;Et.luaL_typename=Vu;Et.luaL_unref=JM;Et.luaL_where=n_;Et.lua_writestringerror=tb;var fn={},qu={};const{LUA_MULTRET:$u,LUA_OK:Yu,LUA_TFUNCTION:x_,LUA_TNIL:Il,LUA_TNONE:ib,LUA_TNUMBER:rb,LUA_TSTRING:ec,LUA_TTABLE:Rs,LUA_VERSION:ab,LUA_YIELD:sb,lua_call:Zu,lua_callk:ob,lua_concat:lb,lua_error:E_,lua_getglobal:cb,lua_geti:ub,lua_getmetatable:fb,lua_gettop:Da,lua_insert:A_,lua_isnil:hb,lua_isnone:S_,lua_isstring:db,lua_load:pb,lua_next:_b,lua_pcallk:T_,lua_pop:Ju,lua_pushboolean:tc,lua_pushcfunction:M_,lua_pushglobaltable:mb,lua_pushinteger:Io,lua_pushliteral:b_,lua_pushnil:Do,lua_pushstring:gb,lua_pushvalue:Bi,lua_rawequal:vb,lua_rawget:xb,lua_rawlen:Eb,lua_rawset:Ab,lua_remove:Sb,lua_replace:Tb,lua_rotate:Mb,lua_setfield:fd,lua_setmetatable:bb,lua_settop:Er,lua_setupvalue:yb,lua_stringtonumber:wb,lua_toboolean:Rb,lua_tolstring:Cb,lua_tostring:So,lua_type:Oa,lua_typename:Ub}=be,{luaL_argcheck:ko,luaL_checkany:Ri,luaL_checkinteger:Qu,luaL_checkoption:Ob,luaL_checkstack:Pb,luaL_checktype:ka,luaL_error:nc,luaL_getmetafield:ef,luaL_loadbufferx:Nb,luaL_loadfile:Ib,luaL_loadfilex:Db,luaL_optinteger:y_,luaL_optstring:Es,luaL_setfuncs:kb,luaL_tolstring:Lb,luaL_where:Fb}=Et,{to_jsstring:w_,to_luastring:wi}=nn;let so,ml;if(typeof process>"u")if(typeof TextDecoder=="function"){let n="",e=new TextDecoder("utf-8");so=function(i){n+=e.decode(i,{stream:!0})};let t=new Uint8Array(0);ml=function(){n+=e.decode(t),console.log(n),n=""}}else{let n=[];so=function(e){try{e=w_(e)}catch{let i=new Uint8Array(e.length);i.set(e),e=i}n.push(e)},ml=function(){console.log.apply(console.log,n),n=[]}}else so=function(n){process.stdout.write(Buffer.from(n))},ml=function(){process.stdout.write(`
`)};const Bb=function(n){let e=Da(n);cb(n,wi("tostring",!0));for(let t=1;t<=e;t++){Bi(n,-1),Bi(n,t),Zu(n,1,1);let i=Cb(n,-1);if(i===null)return nc(n,wi("'tostring' must return a string to 'print'"));t>1&&so(wi("	")),so(i),Ju(n,1)}return ml(),0},Gb=function(n){return Ri(n,1),Lb(n,1),1},Vb=function(n){return Ri(n,1),fb(n,1)?(ef(n,1,wi("__metatable",!0)),1):(Do(n),1)},Hb=function(n){let e=Oa(n,2);return ka(n,1,Rs),ko(n,e===Il||e===Rs,2,"nil or table expected"),ef(n,1,wi("__metatable",!0))!==Il?nc(n,wi("cannot change a protected metatable")):(Er(n,2),bb(n,1),1)},zb=function(n){return Ri(n,1),Ri(n,2),tc(n,vb(n,1,2)),1},Wb=function(n){let e=Oa(n,1);return ko(n,e===Rs||e===ec,1,"table or string expected"),Io(n,Eb(n,1)),1},Xb=function(n){return ka(n,1,Rs),Ri(n,2),Er(n,2),xb(n,1),1},Kb=function(n){return ka(n,1,Rs),Ri(n,2),Ri(n,3),Er(n,3),Ab(n,1),1},jb=["stop","restart","collect","count","step","setpause","setstepmul","isrunning"].map(n=>wi(n)),qb=function(n){Ob(n,1,"collect",jb),y_(n,2,0),nc(n,wi("lua_gc not implemented"))},$b=function(n){let e=Oa(n,1);return ko(n,e!==ib,1,"value expected"),gb(n,Ub(n,e)),1},Yb=function(n,e,t,i){return Ri(n,1),ef(n,1,e)===Il?(M_(n,i),Bi(n,1),Do(n)):(Bi(n,1),Zu(n,1,3)),3},R_=function(n){return ka(n,1,Rs),Er(n,2),_b(n,1)?2:(Do(n),1)},Zb=function(n){return Yb(n,wi("__pairs",!0),0,R_)},Jb=function(n){let e=Qu(n,2)+1;return Io(n,e),ub(n,1,e)===Il?1:2},Qb=function(n){return Ri(n,1),M_(n,Jb),Bi(n,1),Io(n,0),3},e1=function(n,e){try{n=w_(n)}catch{return null}let t=/^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(n);if(!t)return null;let i=parseInt(t[1]+t[2],e);return isNaN(i)?null:i|0},t1=function(n){if(Oa(n,2)<=0){if(Ri(n,1),Oa(n,1)===rb)return Er(n,1),1;{let e=So(n,1);if(e!==null&&wb(n,e)===e.length+1)return 1}}else{let e=Qu(n,2);ka(n,1,ec);let t=So(n,1);ko(n,2<=e&&e<=36,2,"base out of range");let i=e1(t,e);if(i!==null)return Io(n,i),1}return Do(n),1},C_=function(n){let e=y_(n,2,1);return Er(n,1),Oa(n,1)===ec&&e>0&&(Fb(n,e),Bi(n,1),lb(n,2)),E_(n)},n1=function(n){return Rb(n,1)?Da(n):(Ri(n,1),Sb(n,1),b_(n,"assertion failed!"),Er(n,1),C_(n))},i1=function(n){let e=Da(n);if(Oa(n,1)===ec&&So(n,1)[0]===35)return Io(n,e-1),1;{let t=Qu(n,1);return t<0?t=e+t:t>e&&(t=e),ko(n,1<=t,1,"index out of range"),e-t}},Dl=function(n,e,t){return e!==Yu&&e!==sb?(tc(n,0),Bi(n,-2),2):Da(n)-t},r1=function(n){Ri(n,1),tc(n,1),A_(n,1);let e=T_(n,Da(n)-2,$u,0,0,Dl);return Dl(n,e,0)},a1=function(n){let e=Da(n);ka(n,2,x_),tc(n,1),Bi(n,1),Mb(n,3,2);let t=T_(n,e-2,$u,2,2,Dl);return Dl(n,t,2)},U_=function(n,e,t){return e===Yu?(t!==0&&(Bi(n,t),yb(n,-2,1)||Ju(n,1)),1):(Do(n),A_(n,-2),2)},cu=5,s1=function(n,e){return Pb(n,2,"too many nested functions"),Bi(n,1),Zu(n,0,1),hb(n,-1)?(Ju(n,1),null):(db(n,-1)||nc(n,wi("reader function must return a string")),Tb(n,cu),So(n,cu))},o1=function(n){let e=So(n,1),t=Es(n,3,"bt"),i=S_(n,4)?0:4,r;if(e!==null){let a=Es(n,2,e);r=Nb(n,e,e.length,a,t)}else{let a=Es(n,2,"=(load)");ka(n,1,x_),Er(n,cu),r=pb(n,s1,null,a,t)}return U_(n,r,i)},l1=function(n){let e=Es(n,1,null),t=Es(n,2,null),i=S_(n,3)?0:3,r=Db(n,e,t);return U_(n,r,i)},hd=function(n,e,t){return Da(n)-1},c1=function(n){let e=Es(n,1,null);return Er(n,1),Ib(n,e)!==Yu?E_(n):(ob(n,0,$u,0,hd),hd(n))},u1={assert:n1,collectgarbage:qb,dofile:c1,error:C_,getmetatable:Vb,ipairs:Qb,load:o1,loadfile:l1,next:R_,pairs:Zb,pcall:r1,print:Bb,rawequal:zb,rawget:Xb,rawlen:Wb,rawset:Kb,select:i1,setmetatable:Hb,tonumber:t1,tostring:Gb,type:$b,xpcall:a1},f1=function(n){return mb(n),kb(n,u1,0),Bi(n,-1),fd(n,-2,wi("_G")),b_(n,ab),fd(n,-2,wi("_VERSION")),1};qu.luaopen_base=f1;var tf={};const{LUA_OK:uu,LUA_TFUNCTION:h1,LUA_TSTRING:d1,LUA_YIELD:O_,lua_Debug:p1,lua_checkstack:dd,lua_concat:_1,lua_error:m1,lua_getstack:g1,lua_gettop:Cs,lua_insert:fu,lua_isyieldable:v1,lua_newthread:x1,lua_pop:E1,lua_pushboolean:kl,lua_pushcclosure:A1,lua_pushliteral:dr,lua_pushthread:S1,lua_pushvalue:T1,lua_resume:M1,lua_status:P_,lua_tothread:N_,lua_type:b1,lua_upvalueindex:y1,lua_xmove:gl,lua_yield:w1}=be,{luaL_argcheck:R1,luaL_checktype:C1,luaL_newlib:U1,luaL_where:O1}=Et,I_=function(n){let e=N_(n,1);return R1(n,e,1,"thread expected"),e},D_=function(n,e,t){if(!dd(e,t))return dr(n,"too many arguments to resume"),-1;if(P_(e)===uu&&Cs(e)===0)return dr(n,"cannot resume dead coroutine"),-1;gl(n,e,t);let i=M1(e,n,t);if(i===uu||i===O_){let r=Cs(e);return dd(n,r+1)?(gl(e,n,r),r):(E1(e,r),dr(n,"too many results to resume"),-1)}else return gl(e,n,1),-1},P1=function(n){let e=I_(n),t=D_(n,e,Cs(n)-1);return t<0?(kl(n,0),fu(n,-2),2):(kl(n,1),fu(n,-(t+1)),t+1)},N1=function(n){let e=N_(n,y1(1)),t=D_(n,e,Cs(n));return t<0?(b1(n,-1)===d1&&(O1(n,1),fu(n,-2),_1(n,2)),m1(n)):t},k_=function(n){C1(n,1,h1);let e=x1(n);return T1(n,1),gl(n,e,1),1},I1=function(n){return k_(n),A1(n,N1,1),1},D1=function(n){return w1(n,Cs(n))},k1=function(n){let e=I_(n);if(n===e)dr(n,"running");else switch(P_(e)){case O_:dr(n,"suspended");break;case uu:{let t=new p1;g1(e,0,t)>0?dr(n,"normal"):Cs(e)===0?dr(n,"dead"):dr(n,"suspended");break}default:dr(n,"dead");break}return 1},L1=function(n){return kl(n,v1(n)),1},F1=function(n){return kl(n,S1(n)),2},B1={create:k_,isyieldable:L1,resume:P1,running:F1,status:k1,wrap:I1,yield:D1},G1=function(n){return U1(n,B1),1};tf.luaopen_coroutine=G1;var Bc={},pd;function L_(){if(pd)return Bc;pd=1;const{LUA_MAXINTEGER:n}=Ei(),{LUA_OPEQ:e,LUA_OPLT:t,LUA_TFUNCTION:i,LUA_TNIL:r,LUA_TTABLE:a,lua_call:s,lua_checkstack:o,lua_compare:l,lua_createtable:f,lua_geti:_,lua_getmetatable:h,lua_gettop:g,lua_insert:E,lua_isnil:T,lua_isnoneornil:y,lua_isstring:x,lua_pop:p,lua_pushinteger:W,lua_pushnil:F,lua_pushstring:k,lua_pushvalue:ce,lua_rawget:q,lua_setfield:V,lua_seti:_e,lua_settop:A,lua_toboolean:U,lua_type:ee}=be,{luaL_Buffer:Y,luaL_addlstring:de,luaL_addvalue:X,luaL_argcheck:j,luaL_buffinit:ke,luaL_checkinteger:Le,luaL_checktype:Ce,luaL_error:pe,luaL_len:Me,luaL_newlib:Ve,luaL_opt:we,luaL_optinteger:se,luaL_optlstring:ge,luaL_pushresult:$e,luaL_typename:it}=Et,Ye=La(),{to_luastring:ht}=nn,ct=1,z=2,ne=4,B=ct|z,Ae=function(te,fe,Ne){return k(te,fe),q(te,-Ne)!==r},ve=function(te,fe,Ne){if(ee(te,fe)!==a){let qe=1;h(te,fe)&&(!(Ne&ct)||Ae(te,ht("__index",!0),++qe))&&(!(Ne&z)||Ae(te,ht("__newindex",!0),++qe))&&(!(Ne&ne)||Ae(te,ht("__len",!0),++qe))?p(te,qe):Ce(te,fe,a)}},H=function(te,fe,Ne){return ve(te,fe,Ne|ne),Me(te,fe)},re=function(te,fe,Ne){_(te,1,Ne),x(te,-1)||pe(te,ht("invalid value (%s) at index %d in table for 'concat'"),it(te,-1),Ne),X(fe)},le=function(te){let fe=H(te,1,B)+1,Ne;switch(g(te)){case 2:Ne=fe;break;case 3:{Ne=Le(te,2),j(te,1<=Ne&&Ne<=fe,2,"position out of bounds");for(let qe=fe;qe>Ne;qe--)_(te,1,qe-1),_e(te,1,qe);break}default:return pe(te,"wrong number of arguments to 'insert'")}return _e(te,1,Ne),0},Be=function(te){let fe=H(te,1,B),Ne=se(te,2,fe);for(Ne!==fe&&j(te,1<=Ne&&Ne<=fe+1,1,"position out of bounds"),_(te,1,Ne);Ne<fe;Ne++)_(te,1,Ne+1),_e(te,1,Ne);return F(te),_e(te,1,Ne),1},M=function(te){let fe=Le(te,2),Ne=Le(te,3),qe=Le(te,4),st=y(te,5)?1:5;if(ve(te,1,ct),ve(te,st,z),Ne>=fe){j(te,fe>0||Ne<n+fe,3,"too many elements to move");let C=Ne-fe+1;if(j(te,qe<=n-C+1,4,"destination wrap around"),qe>Ne||qe<=fe||st!==1&&l(te,1,st,e)!==1)for(let Re=0;Re<C;Re++)_(te,1,fe+Re),_e(te,st,qe+Re);else for(let Re=C-1;Re>=0;Re--)_(te,1,fe+Re),_e(te,st,qe+Re)}return ce(te,st),1},v=function(te){let fe=H(te,1,ct),Ne=ge(te,2,""),qe=Ne.length,st=se(te,3,1);fe=se(te,4,fe);let C=new Y;for(ke(te,C);st<fe;st++)re(te,C,st),de(C,Ne,qe);return st===fe&&re(te,C,st),$e(C),1},O=function(te){let fe=g(te);f(te,fe,1),E(te,1);for(let Ne=fe;Ne>=1;Ne--)_e(te,1,Ne);return W(te,fe),V(te,1,ht("n")),1},Te=function(te){let fe=se(te,2,1),Ne=we(te,Le,3,Me(te,1));if(fe>Ne)return 0;let qe=Ne-fe;if(qe>=Number.MAX_SAFE_INTEGER||!o(te,++qe))return pe(te,ht("too many results to unpack"));for(;fe<Ne;fe++)_(te,1,fe);return _(te,1,Ne),qe},Se=function(){return Math.floor(Math.random()*4294967296)},Oe=100,P=function(te,fe,Ne){_e(te,1,fe),_e(te,1,Ne)},Q=function(te,fe,Ne){if(T(te,2))return l(te,fe,Ne,t);{ce(te,2),ce(te,fe-1),ce(te,Ne-2),s(te,2,1);let qe=U(te,-1);return p(te,1),qe}},ie=function(te,fe,Ne){let qe=fe,st=Ne-1;for(;;){for(;_(te,1,++qe),Q(te,-1,-2);)qe==Ne-1&&pe(te,ht("invalid order function for sorting")),p(te,1);for(;_(te,1,--st),Q(te,-3,-1);)st<qe&&pe(te,ht("invalid order function for sorting")),p(te,1);if(st<qe)return p(te,1),P(te,Ne-1,qe),qe;P(te,qe,st)}},xe=function(te,fe,Ne){let qe=Math.floor((fe-te)/4),st=Ne%(qe*2)+(te+qe);return Ye.lua_assert(te+qe<=st&&st<=fe-qe),st},Xe=function(te,fe,Ne,qe){for(;fe<Ne;){if(_(te,1,fe),_(te,1,Ne),Q(te,-1,-2)?P(te,fe,Ne):p(te,2),Ne-fe==1)return;let st;if(Ne-fe<Oe||qe===0?st=Math.floor((fe+Ne)/2):st=xe(fe,Ne,qe),_(te,1,st),_(te,1,fe),Q(te,-2,-1)?P(te,st,fe):(p(te,1),_(te,1,Ne),Q(te,-1,-2)?P(te,st,Ne):p(te,2)),Ne-fe==2)return;_(te,1,st),ce(te,-1),_(te,1,Ne-1),P(te,st,Ne-1),st=ie(te,fe,Ne);let C;st-fe<Ne-st?(Xe(te,fe,st-1,qe),C=st-fe,fe=st+1):(Xe(te,st+1,Ne,qe),C=Ne-st,Ne=st-1),(Ne-fe)/128>C&&(qe=Se())}},dt={concat:v,insert:le,move:M,pack:O,remove:Be,sort:function(te){let fe=H(te,1,B);return fe>1&&(j(te,fe<n,1,"array too big"),y(te,2)||Ce(te,2,i),A(te,2),Xe(te,1,fe,0)),0},unpack:Te},et=function(te){return Ve(te,dt),1};return Bc.luaopen_table=et,Bc}var Gc={},_d;function F_(){if(_d)return Gc;_d=1;const n=Kn,{LUA_REGISTRYINDEX:e,lua_getfield:t,lua_gettop:i,lua_isnone:r,lua_isnoneornil:a,lua_newuserdata:s,lua_pop:o,lua_pushliteral:l,lua_pushnil:f,lua_pushstring:_,lua_pushvalue:h,lua_setfield:g,lua_tostring:E,lua_touserdata:T}=be,{LUA_FILEHANDLE:y,luaL_checkany:x,luaL_checklstring:p,luaL_checkudata:W,luaL_error:F,luaL_fileresult:k,luaL_newlib:ce,luaL_newmetatable:q,luaL_setfuncs:V,luaL_setmetatable:_e,luaL_testudata:A}=Et,U=La(),{to_luastring:ee}=nn,Y="_IO_",de=Y.length,X=ee(Y+"input"),j=ee(Y+"output"),ke=function(v){return W(v,1,y)},Le=function(v){return v.closef===null},Ce=function(v){x(v,1);let O=A(v,1,y);return O===null?f(v):Le(O)?l(v,"closed file"):l(v,"file"),1},pe=function(v){let O=ke(v);return Le(O)?l(v,"file (closed)"):_(v,ee(`file (${O.f.toString()})`)),1},Me=function(v){let O=ke(v);return Le(O)&&F(v,ee("attempt to use a closed file")),U.lua_assert(O.f),O.f},Ve=function(v){let O=s(v);return O.f=null,O.closef=null,_e(v,y),O},we=function(v){let O=ke(v),Te=O.closef;return O.closef=null,Te(v)},se=function(v){return r(v,1)&&t(v,e,j),Me(v),we(v)},ge=function(v,O){t(v,e,O);let Te=T(v,-1);return Le(Te)&&F(v,ee("standard %s file is closed"),O.subarray(de)),Te.f},$e=function(v,O,Te){return a(v,1)||(E(v,1)?F(v,ee("opening files not yet implemented")):(Me(v),h(v,1)),g(v,e,O)),t(v,e,O),1},it=function(v){return $e(v,X)},Ye=function(v){return $e(v,j)},ht=process.versions.node>6?v=>v:v=>Buffer.from(v.buffer,v.byteOffset,v.byteLength),ct=function(v,O,Te){let Se=i(v)-Te,Oe=!0,P;for(;Se--;Te++){let Q=p(v,Te);try{Oe=Oe&&n.writeSync(O.fd,ht(Q),0,Q.length)===Q.length}catch(ie){Oe=!1,P=ie}}return Oe?1:k(v,Oe,null,P)},z=function(v){return ct(v,ge(v,j),1)},ne=function(v){let O=Me(v);return h(v,1),ct(v,O,2)},B=function(v){return ge(v,j),k(v,!0,null,null)},Ae=function(v){return Me(v),k(v,!0,null,null)},ve={close:se,flush:B,input:it,output:Ye,type:Ce,write:z},H={close:se,flush:Ae,write:ne,__tostring:pe},re=function(v){q(v,y),h(v,-1),g(v,-2,ee("__index",!0)),V(v,H,0),o(v,1)},le=function(v){let O=ke(v);return O.closef=le,f(v),l(v,"cannot close standard file"),2},Be=function(v,O,Te,Se){let Oe=Ve(v);Oe.f=O,Oe.closef=le,Te!==null&&(h(v,-1),g(v,e,Te)),g(v,-2,Se)},M=function(v){return ce(v,ve),re(v),Be(v,process.stdin,X,ee("stdin")),Be(v,process.stdout,j,ee("stdout")),Be(v,process.stderr,null,ee("stderr")),1};return Gc.luaopen_io=M,Gc}var nf={},Vc={exports:{}};/*!
 * Tmp
 *
 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
 *
 * MIT Licensed
 */var md;function V1(){return md||(md=1,function(n){const e=Kn,t=Kn,i=Kn,r=Kn,a={fs:e.constants,os:t.constants},s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=/XXXXXX/,l=3,f=(a.O_CREAT||a.fs.O_CREAT)|(a.O_EXCL||a.fs.O_EXCL)|(a.O_RDWR||a.fs.O_RDWR),_=t.platform()==="win32",h=a.EBADF||a.os.errno.EBADF,g=a.ENOENT||a.os.errno.ENOENT,E=448,T=384,y="exit",x=[],p=e.rmdirSync.bind(e);let W=!1;function F(H,re){return e.rm(H,{recursive:!0},re)}function k(H){return e.rmSync(H,{recursive:!0})}function ce(H,re){const le=pe(H,re),Be=le[0],M=le[1];Ye(Be,function(v,O){if(v)return M(v);let Te=O.tries;(function Se(){try{const Oe=we(O);e.stat(Oe,function(P){if(!P)return Te-- >0?Se():M(new Error("Could not get a unique tmp filename, max tries reached "+Oe));M(null,Oe)})}catch(Oe){M(Oe)}})()})}function q(H){const re=pe(H),le=re[0],Be=ht(le);let M=Be.tries;do{const v=we(Be);try{e.statSync(v)}catch{return v}}while(M-- >0);throw new Error("Could not get a unique tmp filename, max tries reached")}function V(H,re){const le=pe(H,re),Be=le[0],M=le[1];ce(Be,function(O,Te){if(O)return M(O);e.open(Te,f,Be.mode||T,function(Oe,P){if(Oe)return M(Oe);if(Be.discardDescriptor)return e.close(P,function(ie){return M(ie,Te,void 0,de(Te,-1,Be,!1))});{const Q=Be.discardDescriptor||Be.detachDescriptor;M(null,Te,P,de(Te,Q?-1:P,Be,!1))}})})}function _e(H){const re=pe(H),le=re[0],Be=le.discardDescriptor||le.detachDescriptor,M=q(le);let v=e.openSync(M,f,le.mode||T);return le.discardDescriptor&&(e.closeSync(v),v=void 0),{name:M,fd:v,removeCallback:de(M,Be?-1:v,le,!0)}}function A(H,re){const le=pe(H,re),Be=le[0],M=le[1];ce(Be,function(O,Te){if(O)return M(O);e.mkdir(Te,Be.mode||E,function(Oe){if(Oe)return M(Oe);M(null,Te,X(Te,Be,!1))})})}function U(H){const re=pe(H),le=re[0],Be=q(le);return e.mkdirSync(Be,le.mode||E),{name:Be,removeCallback:X(Be,le,!0)}}function ee(H,re){const le=function(Be){if(Be&&!z(Be))return re(Be);re()};0<=H[0]?e.close(H[0],function(){e.unlink(H[1],le)}):e.unlink(H[1],le)}function Y(H){let re=null;try{0<=H[0]&&e.closeSync(H[0])}catch(le){if(!ct(le)&&!z(le))throw le}finally{try{e.unlinkSync(H[1])}catch(le){z(le)||(re=le)}}if(re!==null)throw re}function de(H,re,le,Be){const M=j(Y,[re,H],Be),v=j(ee,[re,H],Be,M);return le.keep||x.unshift(M),Be?M:v}function X(H,re,le){const Be=re.unsafeCleanup?F:e.rmdir.bind(e),M=re.unsafeCleanup?k:p,v=j(M,H,le),O=j(Be,H,le,v);return re.keep||x.unshift(v),le?v:O}function j(H,re,le,Be){let M=!1;return function v(O){if(!M){const Te=Be||v,Se=x.indexOf(Te);return Se>=0&&x.splice(Se,1),M=!0,le||H===p||H===k?H(re):H(re,O||function(){})}}}function ke(){if(W)for(;x.length;)try{x[0]()}catch{}}function Le(H){let re=[],le=null;try{le=r.randomBytes(H)}catch{le=r.pseudoRandomBytes(H)}for(let Be=0;Be<H;Be++)re.push(s[le[Be]%s.length]);return re.join("")}function Ce(H){return typeof H>"u"}function pe(H,re){if(typeof H=="function")return[{},H];if(Ce(H))return[{},re];const le={};for(const Be of Object.getOwnPropertyNames(H))le[Be]=H[Be];return[le,re]}function Me(H,re,le){const Be=i.isAbsolute(H)?H:i.join(re,H);e.stat(Be,function(M){M?e.realpath(i.dirname(Be),function(v,O){if(v)return le(v);le(null,i.join(O,i.basename(Be)))}):e.realpath(Be,le)})}function Ve(H,re){const le=i.isAbsolute(H)?H:i.join(re,H);try{return e.statSync(le),e.realpathSync(le)}catch{const M=e.realpathSync(i.dirname(le));return i.join(M,i.basename(le))}}function we(H){const re=H.tmpdir;if(!Ce(H.name))return i.join(re,H.dir,H.name);if(!Ce(H.template))return i.join(re,H.dir,H.template).replace(o,Le(6));const le=[H.prefix?H.prefix:"tmp","-",process.pid,"-",Le(12),H.postfix?"-"+H.postfix:""].join("");return i.join(re,H.dir,le)}function se(H,re){if(typeof re!="string")throw new Error(`${H} option must be a string, got "${typeof re}".`);if(re.includes(".."))throw new Error("Relative value not allowed");return re}function ge(H){if(!Ce(H.name)){const re=H.name;if(i.isAbsolute(re))throw new Error(`name option must not contain an absolute path, found "${re}".`);const le=i.basename(re);if(le===".."||le==="."||le!==re)throw new Error(`name option must not contain a path, found "${re}".`)}if(!Ce(H.template)){if(typeof H.template!="string")throw new Error(`template option must be a string, got "${typeof H.template}".`);if(!H.template.match(o))throw new Error(`Invalid template, found "${H.template}".`)}if(!Ce(H.tries)&&isNaN(H.tries)||H.tries<0)throw new Error(`Invalid tries, found "${H.tries}".`);H.tries=Ce(H.name)?H.tries||l:1,H.keep=!!H.keep,H.detachDescriptor=!!H.detachDescriptor,H.discardDescriptor=!!H.discardDescriptor,H.unsafeCleanup=!!H.unsafeCleanup,H.prefix=Ce(H.prefix)?"":se("prefix",H.prefix),H.postfix=Ce(H.postfix)?"":se("postfix",H.postfix),H.template=Ce(H.template)?void 0:se("template",H.template)}function $e(H,re,le,Be){if(Ce(re))return Be(null);Me(re,le,function(M,v){if(M)return Be(M);const O=i.relative(le,v);if(O.startsWith("..")||i.isAbsolute(O))return Be(new Error(`${H} option must be relative to "${le}", found "${O}".`));Be(null,O)})}function it(H,re,le){if(Ce(re))return;const Be=Ve(re,le),M=i.relative(le,Be);if(M.startsWith("..")||i.isAbsolute(M))throw new Error(`${H} option must be relative to "${le}", found "${M}".`);return M}function Ye(H,re){Ae(H,function(le,Be){if(le)return re(le);H.tmpdir=Be;try{ge(H,Be)}catch(M){return re(M)}$e("dir",H.dir,Be,function(M,v){if(M)return re(M);H.dir=Ce(v)?"":v,$e("template",H.template,Be,function(O,Te){if(O)return re(O);H.template=Te,re(null,H)})})})}function ht(H){const re=H.tmpdir=ve(H);ge(H);const le=it("dir",H.dir,re);return H.dir=Ce(le)?"":le,H.template=it("template",H.template,re),H}function ct(H){return ne(H,-h,"EBADF")}function z(H){return ne(H,-g,"ENOENT")}function ne(H,re,le){return _?H.code===le:H.code===le&&H.errno===re}function B(){W=!0}function Ae(H,re){return e.realpath(H&&H.tmpdir||t.tmpdir(),re)}function ve(H){return e.realpathSync(H&&H.tmpdir||t.tmpdir())}process.addListener(y,ke),Object.defineProperty(n.exports,"tmpdir",{enumerable:!0,configurable:!1,get:function(){return ve()}}),n.exports.dir=A,n.exports.dirSync=U,n.exports.file=V,n.exports.fileSync=_e,n.exports.tmpName=ce,n.exports.tmpNameSync=q,n.exports.setGracefulCleanup=B}(Vc)),Vc.exports}var gd={};const{LUA_TNIL:H1,LUA_TTABLE:z1,lua_close:W1,lua_createtable:X1,lua_getfield:K1,lua_isboolean:j1,lua_isnoneornil:B_,lua_pop:q1,lua_pushboolean:$1,lua_pushfstring:Y1,lua_pushinteger:G_,lua_pushliteral:Z1,lua_pushnil:J1,lua_pushnumber:hu,lua_pushstring:V_,lua_setfield:Q1,lua_settop:ey,lua_toboolean:vd,lua_tointegerx:ty}=be,{luaL_Buffer:ny,luaL_addchar:ur,luaL_addstring:pi,luaL_argerror:iy,luaL_buffinit:ry,luaL_checkinteger:ay,luaL_checkoption:sy,luaL_checkstring:ll,luaL_checktype:oy,luaL_error:vl,luaL_execresult:xd,luaL_fileresult:to,luaL_newlib:ly,luaL_optinteger:cy,luaL_optlstring:uy,luaL_optstring:H_,luaL_pushresult:fy}=Et,{luastring_eq:du,to_jsstring:Ed,to_luastring:Jt}=nn,hy=Jt("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"),Or=function(n,e,t){G_(n,t),Q1(n,-2,Jt(e,!0))},z_=function(n,e,t){Or(n,"sec",t?e.getUTCSeconds():e.getSeconds()),Or(n,"min",t?e.getUTCMinutes():e.getMinutes()),Or(n,"hour",t?e.getUTCHours():e.getHours()),Or(n,"day",t?e.getUTCDate():e.getDate()),Or(n,"month",(t?e.getUTCMonth():e.getMonth())+1),Or(n,"year",t?e.getUTCFullYear():e.getFullYear()),Or(n,"wday",(t?e.getUTCDay():e.getDay())+1),Or(n,"yday",Math.floor((e-new Date(e.getFullYear(),0,0))/864e5))},Ad=Number.MAX_SAFE_INTEGER/2,os=function(n,e,t,i){let r=K1(n,-1,Jt(e,!0)),a=ty(n,-1);if(a===!1){if(r!==H1)return vl(n,Jt("field '%s' is not an integer"),e);if(t<0)return vl(n,Jt("field '%s' missing in date table"),e);a=t}else{if(!(-Ad<=a&&a<=Ad))return vl(n,Jt("field '%s' is out-of-bound"),e);a-=i}return q1(n,1),a},Xn={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(n=>Jt(n)),shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(n=>Jt(n)),months:["January","February","March","April","May","June","July","August","September","October","November","December"].map(n=>Jt(n)),shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(n=>Jt(n)),AM:Jt("AM"),PM:Jt("PM"),am:Jt("am"),pm:Jt("pm"),formats:{c:Jt("%a %b %e %H:%M:%S %Y"),D:Jt("%m/%d/%y"),F:Jt("%Y-%m-%d"),R:Jt("%H:%M"),r:Jt("%I:%M:%S %p"),T:Jt("%H:%M:%S"),X:Jt("%T"),x:Jt("%D")}},Sd=function(n,e){let t=n.getDay();e==="monday"&&(t===0?t=6:t--);let i=(n-new Date(n.getFullYear(),0,1))/864e5;return Math.floor((i+7-t)/7)},Yn=function(n,e,t){e<10&&ur(n,t),pi(n,Jt(String(e)))},fr=function(n,e,t,i){let r=0;for(;r<t.length;)if(t[r]!==37)ur(e,t[r++]);else{r++;let a=dy(n,t,r);switch(t[r]){case 37:ur(e,37);break;case 65:pi(e,Xn.days[i.getDay()]);break;case 66:pi(e,Xn.months[i.getMonth()]);break;case 67:Yn(e,Math.floor(i.getFullYear()/100),48);break;case 68:fr(n,e,Xn.formats.D,i);break;case 70:fr(n,e,Xn.formats.F,i);break;case 72:Yn(e,i.getHours(),48);break;case 73:Yn(e,(i.getHours()+11)%12+1,48);break;case 77:Yn(e,i.getMinutes(),48);break;case 80:pi(e,i.getHours()<12?Xn.am:Xn.pm);break;case 82:fr(n,e,Xn.formats.R,i);break;case 83:Yn(e,i.getSeconds(),48);break;case 84:fr(n,e,Xn.formats.T,i);break;case 85:Yn(e,Sd(i,"sunday"),48);break;case 87:Yn(e,Sd(i,"monday"),48);break;case 88:fr(n,e,Xn.formats.X,i);break;case 89:pi(e,Jt(String(i.getFullYear())));break;case 90:{let s=i.toString().match(/\(([\w\s]+)\)/);s&&pi(e,Jt(s[1]));break}case 97:pi(e,Xn.shortDays[i.getDay()]);break;case 98:case 104:pi(e,Xn.shortMonths[i.getMonth()]);break;case 99:fr(n,e,Xn.formats.c,i);break;case 100:Yn(e,i.getDate(),48);break;case 101:Yn(e,i.getDate(),32);break;case 106:{let s=Math.floor((i-new Date(i.getFullYear(),0,1))/864e5);s<100&&(s<10&&ur(e,48),ur(e,48)),pi(e,Jt(String(s)));break}case 107:Yn(e,i.getHours(),32);break;case 108:Yn(e,(i.getHours()+11)%12+1,32);break;case 109:Yn(e,i.getMonth()+1,48);break;case 110:ur(e,10);break;case 112:pi(e,i.getHours()<12?Xn.AM:Xn.PM);break;case 114:fr(n,e,Xn.formats.r,i);break;case 115:pi(e,Jt(String(Math.floor(i/1e3))));break;case 116:ur(e,8);break;case 117:{let s=i.getDay();pi(e,Jt(String(s===0?7:s)));break}case 119:pi(e,Jt(String(i.getDay())));break;case 120:fr(n,e,Xn.formats.x,i);break;case 121:Yn(e,i.getFullYear()%100,48);break;case 122:{let s=i.getTimezoneOffset();s>0?ur(e,45):(s=-s,ur(e,43)),Yn(e,Math.floor(s/60),48),Yn(e,s%60,48);break}}r+=a}},dy=function(n,e,t){let i=hy,r=0,a=1;for(;r<i.length&&a<=e.length-t;r+=a)if(i[r]===124)a++;else if(du(e.subarray(t,t+a),i.subarray(r,r+a)))return a;iy(n,1,Y1(n,Jt("invalid conversion specifier '%%%s'"),e))},py=function(n){let e=uy(n,1,"%c"),t=B_(n,2)?new Date:new Date(pu(n,2)*1e3),i=!1,r=0;if(e[r]===33&&(i=!0,r++),e[r]===42&&e[r+1]===116)X1(n,0,9),z_(n,t,i);else{let a=new Uint8Array(4);a[0]=37;let s=new ny;ry(n,s),fr(n,s,e,t),fy(s)}return 1},_y=function(n){let e;return B_(n,1)?e=new Date:(oy(n,1,z1),ey(n,1),e=new Date(os(n,"year",-1,0),os(n,"month",-1,1),os(n,"day",-1,0),os(n,"hour",12,0),os(n,"min",0,0),os(n,"sec",0,0)),z_(n,e)),G_(n,Math.floor(e/1e3)),1},pu=function(n,e){return ay(n,e)},my=function(n){let e=pu(n,1),t=pu(n,2);return hu(n,e-t),1},gy=["all","collate","ctype","monetary","numeric","time"].map(n=>Jt(n)),Td=Jt("C"),vy=Jt("POSIX"),xy=function(n){const e=H_(n,1,null);return sy(n,2,"all",gy),V_(n,e===null||e.length==0||du(e,Td)||du(e,vy)?Td:null),1},hr={date:py,difftime:my,setlocale:xy,time:_y};if(typeof process>"u")hr.clock=function(n){return hu(n,performance.now()/1e3),1};else{const n=Kn,e=V1(),t=Kn;hr.exit=function(r){let a;return j1(r,1)?a=vd(r,1)?0:1:a=cy(r,1,0),vd(r,2)&&W1(r),r&&process.exit(a),0},hr.getenv=function(r){let a=ll(r,1);return a=Ed(a),Object.prototype.hasOwnProperty.call(gd,a)?Z1(r,gd[a]):J1(r),1},hr.clock=function(r){return hu(r,process.uptime()),1};const i=function(){return e.tmpNameSync()};hr.remove=function(r){let a=ll(r,1);try{n.unlinkSync(a)}catch(s){if(s.code==="EISDIR")try{n.rmdirSync(a)}catch(o){return to(r,!1,a,o)}else return to(r,!1,a,s)}return to(r,!0)},hr.rename=function(r){let a=ll(r,1),s=ll(r,2);try{n.renameSync(a,s)}catch(o){return to(r,!1,!1,o)}return to(r,!0)},hr.tmpname=function(r){let a=i();return a?(V_(r,Jt(a)),1):vl(r,Jt("unable to generate a unique filename"))},hr.execute=function(r){let a=H_(r,1,null);if(a!==null){a=Ed(a);try{t.execSync(a,{stdio:[process.stdin,process.stdout,process.stderr]})}catch(s){return xd(r,s)}return xd(r,null)}else return $1(r,1),1}}const Ey=function(n){return ly(n,hr),1};nf.luaopen_os=Ey;var Hc={},W_={};(function(n){(function(){var e={not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(o){return r(s(o),arguments)}function i(o,l){return t.apply(null,[o].concat(l||[]))}function r(o,l){var f=1,_=o.length,h,g="",E,T,y,x,p,W,F,k;for(E=0;E<_;E++)if(typeof o[E]=="string")g+=o[E];else if(typeof o[E]=="object"){if(y=o[E],y.keys)for(h=l[f],T=0;T<y.keys.length;T++){if(h==null)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',y.keys[T],y.keys[T-1]));h=h[y.keys[T]]}else y.param_no?h=l[y.param_no]:h=l[f++];if(e.not_type.test(y.type)&&e.not_primitive.test(y.type)&&h instanceof Function&&(h=h()),e.numeric_arg.test(y.type)&&typeof h!="number"&&isNaN(h))throw new TypeError(t("[sprintf] expecting number but found %T",h));switch(e.number.test(y.type)&&(F=h>=0),y.type){case"b":h=parseInt(h,10).toString(2);break;case"c":h=String.fromCharCode(parseInt(h,10));break;case"d":case"i":h=parseInt(h,10);break;case"j":h=JSON.stringify(h,null,y.width?parseInt(y.width):0);break;case"e":h=y.precision?parseFloat(h).toExponential(y.precision):parseFloat(h).toExponential();break;case"f":h=y.precision?parseFloat(h).toFixed(y.precision):parseFloat(h);break;case"g":h=y.precision?String(Number(h.toPrecision(y.precision))):parseFloat(h);break;case"o":h=(parseInt(h,10)>>>0).toString(8);break;case"s":h=String(h),h=y.precision?h.substring(0,y.precision):h;break;case"t":h=String(!!h),h=y.precision?h.substring(0,y.precision):h;break;case"T":h=Object.prototype.toString.call(h).slice(8,-1).toLowerCase(),h=y.precision?h.substring(0,y.precision):h;break;case"u":h=parseInt(h,10)>>>0;break;case"v":h=h.valueOf(),h=y.precision?h.substring(0,y.precision):h;break;case"x":h=(parseInt(h,10)>>>0).toString(16);break;case"X":h=(parseInt(h,10)>>>0).toString(16).toUpperCase();break}e.json.test(y.type)?g+=h:(e.number.test(y.type)&&(!F||y.sign)?(k=F?"+":"-",h=h.toString().replace(e.sign,"")):k="",p=y.pad_char?y.pad_char==="0"?"0":y.pad_char.charAt(1):" ",W=y.width-(k+h).length,x=y.width&&W>0?p.repeat(W):"",g+=y.align?k+h+x:p==="0"?k+x+h:x+k+h)}return g}var a=Object.create(null);function s(o){if(a[o])return a[o];for(var l=o,f,_=[],h=0;l;){if((f=e.text.exec(l))!==null)_.push(f[0]);else if((f=e.modulo.exec(l))!==null)_.push("%");else if((f=e.placeholder.exec(l))!==null){if(f[2]){h|=1;var g=[],E=f[2],T=[];if((T=e.key.exec(E))!==null)for(g.push(T[1]);(E=E.substring(T[0].length))!=="";)if((T=e.key_access.exec(E))!==null)g.push(T[1]);else if((T=e.index_access.exec(E))!==null)g.push(T[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");f[2]=g}else h|=2;if(h===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");_.push({placeholder:f[0],param_no:f[1],keys:f[2],sign:f[3],pad_char:f[4],align:f[5],width:f[6],precision:f[7],type:f[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(f[0].length)}return a[o]=_}n.sprintf=t,n.vsprintf=i,typeof window<"u"&&(window.sprintf=t,window.vsprintf=i)})()})(W_);var Md;function X_(){if(Md)return Hc;Md=1;const{sprintf:n}=W_,{LUA_INTEGER_FMT:e,LUA_INTEGER_FRMLEN:t,LUA_MININTEGER:i,LUA_NUMBER_FMT:r,LUA_NUMBER_FRMLEN:a,frexp:s,lua_getlocaledecpoint:o}=Ei(),{LUA_TBOOLEAN:l,LUA_TFUNCTION:f,LUA_TNIL:_,LUA_TNUMBER:h,LUA_TSTRING:g,LUA_TTABLE:E,lua_call:T,lua_createtable:y,lua_dump:x,lua_gettable:p,lua_gettop:W,lua_isinteger:F,lua_isstring:k,lua_pop:ce,lua_pushcclosure:q,lua_pushinteger:V,lua_pushlightuserdata:_e,lua_pushliteral:A,lua_pushlstring:U,lua_pushnil:ee,lua_pushnumber:Y,lua_pushstring:de,lua_pushvalue:X,lua_remove:j,lua_setfield:ke,lua_setmetatable:Le,lua_settop:Ce,lua_toboolean:pe,lua_tointeger:Me,lua_tonumber:Ve,lua_tostring:we,lua_touserdata:se,lua_type:ge,lua_upvalueindex:$e}=be,{luaL_Buffer:it,luaL_addchar:Ye,luaL_addlstring:ht,luaL_addsize:ct,luaL_addstring:z,luaL_addvalue:ne,luaL_argcheck:B,luaL_argerror:Ae,luaL_buffinit:ve,luaL_buffinitsize:H,luaL_checkinteger:re,luaL_checknumber:le,luaL_checkstack:Be,luaL_checkstring:M,luaL_checktype:v,luaL_error:O,luaL_newlib:Te,luaL_optinteger:Se,luaL_optstring:Oe,luaL_prepbuffsize:P,luaL_pushresult:Q,luaL_pushresultsize:ie,luaL_tolstring:xe,luaL_typename:Xe}=Et,ze=La(),{luastring_eq:dt,luastring_indexOf:et,to_jsstring:te,to_luastring:fe}=nn,qe="%".charCodeAt(0),st=32,C=2147483647,Re=function(c){let w=et(c,0);return w>-1?w:c.length},he=function(c,w){return c>=0?c:0-c>w?0:w+c+1},L=function(c){let w=M(c,1),D=w.length,ae=he(re(c,2),D),Ee=he(Se(c,3,-1),D);return ae<1&&(ae=1),Ee>D&&(Ee=D),ae<=Ee?de(c,w.subarray(ae-1,ae-1+(Ee-ae+1))):A(c,""),1},ye=function(c){return V(c,M(c,1).length),1},Je=function(c){let w=W(c),D=new it,ae=H(c,D,w);for(let Ee=1;Ee<=w;Ee++){let Fe=re(c,Ee);B(c,Fe>=0&&Fe<=255,"value out of range"),ae[Ee-1]=Fe}return ie(D,w),1},tt=function(c,w,D,ae){return ht(ae,w,D),0},gt=function(c){let w=new it,D=pe(c,2);return v(c,1,f),Ce(c,1),ve(c,w),x(c,tt,w,D)!==0?O(c,fe("unable to dump given function")):(Q(w),1)},St=a.length+1,Tt=1,bt=function(c){if(Object.is(c,1/0))return fe("inf");if(Object.is(c,-1/0))return fe("-inf");if(Number.isNaN(c))return fe("nan");if(c===0){let w=n(r+"x0p+0",c);return Object.is(c,-0)&&(w="-"+w),fe(w)}else{let w="",D=s(c),ae=D[0],Ee=D[1];return ae<0&&(w+="-",ae=-ae),w+="0x",w+=(ae*(1<<Tt)).toString(16),Ee-=Tt,w+=n("p%+d",Ee),fe(w)}},Yt=function(c,w,D){let ae=bt(D);if(w[St]===65)for(let Ee=0;Ee<ae.length;Ee++){let Fe=ae[Ee];Fe>=97&&(ae[Ee]=Fe&223)}else w[St]!==97&&O(c,fe("modifiers for format '%%a'/'%%A' not implemented"));return ae},Ot=fe("-+ #0"),Pt=c=>97<=c&&c<=122||65<=c&&c<=90,Gt=c=>48<=c&&c<=57,ln=c=>0<=c&&c<=31||c===127,dn=c=>33<=c&&c<=126,cn=c=>97<=c&&c<=122,an=c=>65<=c&&c<=90,tn=c=>97<=c&&c<=122||65<=c&&c<=90||48<=c&&c<=57,Ie=c=>dn(c)&&!tn(c),J=c=>c===32||c>=9&&c<=13,nt=c=>48<=c&&c<=57||65<=c&&c<=70||97<=c&&c<=102,mt=function(c,w,D){Ye(c,34);let ae=0;for(;D--;){if(w[ae]===34||w[ae]===92||w[ae]===10)Ye(c,92),Ye(c,w[ae]);else if(ln(w[ae])){let Ee=""+w[ae];Gt(w[ae+1])&&(Ee=("000"+Ee).slice(-3)),z(c,fe("\\"+Ee))}else Ye(c,w[ae]);ae++}Ye(c,34)},Z=function(c){if(et(c,46)<0){let w=o(),D=et(c,w);D&&(c[D]=46)}},b=function(c,w,D){switch(ge(c,D)){case g:{let ae=we(c,D);mt(w,ae,ae.length);break}case h:{let ae;if(F(c,D)){let Ee=Me(c,D),Fe=Ee===i?"0x%"+t+"x":e;ae=fe(n(Fe,Ee))}else{let Ee=Ve(c,D);ae=Yt(c,fe(`%${t}a`),Ee),Z(ae)}z(w,ae);break}case _:case l:{xe(c,D),ne(w);break}default:Ae(c,D,fe("value has no literal form"))}},K=function(c,w,D,ae){let Ee=D;for(;w[Ee]!==0&&et(Ot,w[Ee])>=0;)Ee++;Ee-D>=Ot.length&&O(c,fe("invalid format (repeated flags)")),Gt(w[Ee])&&Ee++,Gt(w[Ee])&&Ee++,w[Ee]===46&&(Ee++,Gt(w[Ee])&&Ee++,Gt(w[Ee])&&Ee++),Gt(w[Ee])&&O(c,fe("invalid format (width or precision too long)")),ae[0]=37;for(let Fe=0;Fe<Ee-D+1;Fe++)ae[Fe+1]=w[D+Fe];return Ee},ue=function(c,w){let D=c.length,ae=w.length,Ee=c[D-1];for(let Fe=0;Fe<ae;Fe++)c[Fe+D-1]=w[Fe];c[D+ae-1]=Ee},Pe=function(c){let w=W(c),D=1,ae=M(c,D),Ee=0,Fe=new it;for(ve(c,Fe);Ee<ae.length;)if(ae[Ee]!==qe)Ye(Fe,ae[Ee++]);else if(ae[++Ee]===qe)Ye(Fe,ae[Ee++]);else{let xt=[];switch(++D>w&&Ae(c,D,fe("no value")),Ee=K(c,ae,Ee,xt),String.fromCharCode(ae[Ee++])){case"c":{Ye(Fe,re(c,D));break}case"d":case"i":case"o":case"u":case"x":case"X":{let yt=re(c,D);ue(xt,fe(t,!0)),z(Fe,fe(n(String.fromCharCode(...xt),yt)));break}case"a":case"A":{ue(xt,fe(t,!0)),z(Fe,Yt(c,xt,le(c,D)));break}case"e":case"E":case"f":case"g":case"G":{let yt=le(c,D);ue(xt,fe(t,!0)),z(Fe,fe(n(String.fromCharCode(...xt),yt)));break}case"q":{b(c,Fe,D);break}case"s":{let yt=xe(c,D);xt.length<=2||xt[2]===0?ne(Fe):(B(c,yt.length===Re(yt),D,"string contains zeros"),et(xt,46)<0&&yt.length>=100?ne(Fe):(z(Fe,fe(n(String.fromCharCode(...xt),te(yt)))),ce(c,1)));break}default:return O(c,fe("invalid option '%%%c' to 'format'"),ae[Ee-1])}}return Q(Fe),1},u=0,S=16,N=4,oe=8,G=(1<<oe)-1,De=8;class Ge{constructor(w){this.L=w,this.islittle=!0,this.maxalign=1}}const rt=0,Mt=1,Nt=2,Ct=3,sn=4,Lt=5,R=6,Ue=7,je=8,Ze=Gt,pt=function(c,w){if(c.off>=c.s.length||!Ze(c.s[c.off]))return w;{let D=0;do D=D*10+(c.s[c.off++]-48);while(c.off<c.s.length&&Ze(c.s[c.off])&&D<=(C-9)/10);return D}},Qe=function(c,w,D){let ae=pt(w,D);return(ae>S||ae<=0)&&O(c.L,fe("integral size (%d) out of limits [1,%d]"),ae,S),ae},ot=function(c,w){let D={opt:w.s[w.off++],size:0};switch(D.opt){case 98:return D.size=1,D.opt=rt,D;case 66:return D.size=1,D.opt=Mt,D;case 104:return D.size=2,D.opt=rt,D;case 72:return D.size=2,D.opt=Mt,D;case 108:return D.size=4,D.opt=rt,D;case 76:return D.size=4,D.opt=Mt,D;case 106:return D.size=4,D.opt=rt,D;case 74:return D.size=4,D.opt=Mt,D;case 84:return D.size=4,D.opt=Mt,D;case 102:return D.size=4,D.opt=Nt,D;case 100:return D.size=8,D.opt=Nt,D;case 110:return D.size=8,D.opt=Nt,D;case 105:return D.size=Qe(c,w,4),D.opt=rt,D;case 73:return D.size=Qe(c,w,4),D.opt=Mt,D;case 115:return D.size=Qe(c,w,4),D.opt=sn,D;case 99:return D.size=pt(w,-1),D.size===-1&&O(c.L,fe("missing size for format option 'c'")),D.opt=Ct,D;case 122:return D.opt=Lt,D;case 120:return D.size=1,D.opt=R,D;case 88:return D.opt=Ue,D;case 32:break;case 60:c.islittle=!0;break;case 62:c.islittle=!1;break;case 61:c.islittle=!0;break;case 33:c.maxalign=Qe(c,w,De);break;default:O(c.L,fe("invalid format option '%c'"),D.opt)}return D.opt=je,D},Dt=function(c,w,D){let ae={opt:NaN,size:NaN,ntoalign:NaN},Ee=ot(c,D);ae.size=Ee.size,ae.opt=Ee.opt;let Fe=ae.size;if(ae.opt===Ue)if(D.off>=D.s.length||D.s[D.off]===0)Ae(c.L,1,fe("invalid next option for option 'X'"));else{let xt=ot(c,D);Fe=xt.size,xt=xt.opt,(xt===Ct||Fe===0)&&Ae(c.L,1,fe("invalid next option for option 'X'"))}return Fe<=1||ae.opt===Ct?ae.ntoalign=0:(Fe>c.maxalign&&(Fe=c.maxalign),Fe&Fe-1&&Ae(c.L,1,fe("format asks for alignment not power of 2")),ae.ntoalign=Fe-(w&Fe-1)&Fe-1),ae},Ke=function(c,w,D,ae,Ee){let Fe=P(c,ae);Fe[D?0:ae-1]=w&G;for(let xt=1;xt<ae;xt++)w>>=oe,Fe[D?xt:ae-1-xt]=w&G;if(Ee&&ae>N)for(let xt=N;xt<ae;xt++)Fe[D?xt:ae-1-xt]=G;ct(c,ae)},lt=function(c){let w=new it,D=new Ge(c),ae={s:M(c,1),off:0},Ee=1,Fe=0;for(ee(c),ve(c,w);ae.off<ae.s.length;){let xt=Dt(D,Fe,ae),yt=xt.opt,$t=xt.size,un=xt.ntoalign;for(Fe+=un+$t;un-- >0;)Ye(w,u);switch(Ee++,yt){case rt:{let Vt=re(c,Ee);if($t<N){let jt=1<<$t*8-1;B(c,-jt<=Vt&&Vt<jt,Ee,"integer overflow")}Ke(w,Vt,D.islittle,$t,Vt<0);break}case Mt:{let Vt=re(c,Ee);$t<N&&B(c,Vt>>>0<1<<$t*oe,Ee,"unsigned overflow"),Ke(w,Vt>>>0,D.islittle,$t,!1);break}case Nt:{let Vt=P(w,$t),jt=le(c,Ee),nr=new DataView(Vt.buffer,Vt.byteOffset,Vt.byteLength);$t===4?nr.setFloat32(0,jt,D.islittle):nr.setFloat64(0,jt,D.islittle),ct(w,$t);break}case Ct:{let Vt=M(c,Ee),jt=Vt.length;for(B(c,jt<=$t,Ee,"string longer than given size"),ht(w,Vt,jt);jt++<$t;)Ye(w,u);break}case sn:{let Vt=M(c,Ee),jt=Vt.length;B(c,$t>=4||jt<1<<$t*oe,Ee,"string length does not fit in given size"),Ke(w,jt,D.islittle,$t,0),ht(w,Vt,jt),Fe+=jt;break}case Lt:{let Vt=M(c,Ee),jt=Vt.length;B(c,et(Vt,0)<0,Ee,"strings contains zeros"),ht(w,Vt,jt),Ye(w,0),Fe+=jt+1;break}case R:Ye(w,u);case Ue:case je:Ee--;break}}return Q(w),1},_t=function(c){let w=M(c,1),D=w.length,ae=new Uint8Array(D);for(let Ee=0;Ee<D;Ee++)ae[Ee]=w[D-1-Ee];return de(c,ae),1},It=function(c){let w=M(c,1),D=w.length,ae=new Uint8Array(D);for(let Ee=0;Ee<D;Ee++){let Fe=w[Ee];an(Fe)&&(Fe=Fe|32),ae[Ee]=Fe}return de(c,ae),1},Bn=function(c){let w=M(c,1),D=w.length,ae=new Uint8Array(D);for(let Ee=0;Ee<D;Ee++){let Fe=w[Ee];cn(Fe)&&(Fe=Fe&223),ae[Ee]=Fe}return de(c,ae),1},kn=function(c){let w=M(c,1),D=w.length,ae=re(c,2),Ee=Oe(c,3,""),Fe=Ee.length;if(ae<=0)A(c,"");else{if(D+Fe<D||D+Fe>C/ae)return O(c,fe("resulting string too large"));{let xt=ae*D+(ae-1)*Fe,yt=new it,$t=H(c,yt,xt),un=0;for(;ae-- >1;)$t.set(w,un),un+=D,Fe>0&&($t.set(Ee,un),un+=Fe);$t.set(w,un),ie(yt,xt)}}return 1},Vi=function(c){let w=M(c,1),D=w.length,ae=he(Se(c,2,1),D),Ee=he(Se(c,3,ae),D);if(ae<1&&(ae=1),Ee>D&&(Ee=D),ae>Ee)return 0;if(Ee-ae>=Number.MAX_SAFE_INTEGER)return O(c,"string slice too long");let Fe=Ee-ae+1;Be(c,Fe,"string slice too long");for(let xt=0;xt<Fe;xt++)V(c,w[ae+xt-1]);return Fe},Hi=function(c){let w=new Ge(c),D={s:M(c,1),off:0},ae=0;for(;D.off<D.s.length;){let Ee=Dt(w,ae,D),Fe=Ee.opt,xt=Ee.size,yt=Ee.ntoalign;switch(xt+=yt,B(c,ae<=C-xt,1,"format result too large"),ae+=xt,Fe){case sn:case Lt:Ae(c,1,"variable-length format")}}return V(c,ae),1},$n=function(c,w,D,ae,Ee){let Fe=0,xt=ae<=N?ae:N;for(let yt=xt-1;yt>=0;yt--)Fe<<=oe,Fe|=w[D?yt:ae-1-yt];if(ae<N){if(Ee){let yt=1<<ae*oe-1;Fe=(Fe^yt)-yt}}else if(ae>N){let yt=!Ee||Fe>=0?0:G;for(let $t=xt;$t<ae;$t++)w[D?$t:ae-1-$t]!==yt&&O(c,fe("%d-byte integer does not fit into Lua Integer"),ae)}return Fe},Fa=function(c,w,D,ae){ze.lua_assert(w.length>=ae);let Ee=new DataView(new ArrayBuffer(ae));for(let Fe=0;Fe<ae;Fe++)Ee.setUint8(Fe,w[Fe]);return ae==4?Ee.getFloat32(0,D):Ee.getFloat64(0,D)},Zr=function(c){let w=new Ge(c),D={s:M(c,1),off:0},ae=M(c,2),Ee=ae.length,Fe=he(Se(c,3,1),Ee)-1,xt=0;for(B(c,Fe<=Ee&&Fe>=0,3,"initial position out of string");D.off<D.s.length;){let yt=Dt(w,Fe,D),$t=yt.opt,un=yt.size,Vt=yt.ntoalign;switch(Fe+Vt+un>Ee&&Ae(c,2,fe("data string too short")),Fe+=Vt,Be(c,2,"too many results"),xt++,$t){case rt:case Mt:{let jt=$n(c,ae.subarray(Fe),w.islittle,un,$t===rt);V(c,jt);break}case Nt:{let jt=Fa(c,ae.subarray(Fe),w.islittle,un);Y(c,jt);break}case Ct:{de(c,ae.subarray(Fe,Fe+un));break}case sn:{let jt=$n(c,ae.subarray(Fe),w.islittle,un,0);B(c,Fe+jt+un<=Ee,2,"data string too short"),de(c,ae.subarray(Fe+un,Fe+un+jt)),Fe+=jt;break}case Lt:{let jt=et(ae,0,Fe);jt===-1&&(jt=ae.length-Fe),de(c,ae.subarray(Fe,jt)),Fe=jt+1;break}case Ue:case R:case je:xt--;break}Fe+=un}return V(c,Fe+1),xt+1},zi=-1,Jr=-2,Qr=200,Ba=fe("^$*+?.([%-");class er{constructor(w){this.src=null,this.src_init=null,this.src_end=null,this.p=null,this.p_end=null,this.L=w,this.matchdepth=NaN,this.level=NaN,this.capture=[]}}const Ga=function(c,w){return w=w-49,w<0||w>=c.level||c.capture[w].len===zi?O(c.L,fe("invalid capture index %%%d"),w+1):w},Hs=function(c){let w=c.level;for(w--;w>=0;w--)if(c.capture[w].len===zi)return w;return O(c.L,fe("invalid pattern capture"))},ii=function(c,w){switch(c.p[w++]){case qe:return w===c.p_end&&O(c.L,fe("malformed pattern (ends with '%%')")),w+1;case 91:{c.p[w]===94&&w++;do w===c.p_end&&O(c.L,fe("malformed pattern (missing ']')")),c.p[w++]===qe&&w<c.p_end&&w++;while(c.p[w]!==93);return w+1}default:return w}},Va=function(c,w){switch(w){case 97:return Pt(c);case 65:return!Pt(c);case 99:return ln(c);case 67:return!ln(c);case 100:return Gt(c);case 68:return!Gt(c);case 103:return dn(c);case 71:return!dn(c);case 108:return cn(c);case 76:return!cn(c);case 112:return Ie(c);case 80:return!Ie(c);case 115:return J(c);case 83:return!J(c);case 117:return an(c);case 85:return!an(c);case 119:return tn(c);case 87:return!tn(c);case 120:return nt(c);case 88:return!nt(c);case 122:return c===0;case 90:return c!==0;default:return w===c}},ea=function(c,w,D,ae){let Ee=!0;for(c.p[D+1]===94&&(Ee=!1,D++);++D<ae;)if(c.p[D]===qe){if(D++,Va(w,c.p[D]))return Ee}else if(c.p[D+1]===45&&D+2<ae){if(D+=2,c.p[D-2]<=w&&w<=c.p[D])return Ee}else if(c.p[D]===w)return Ee;return!Ee},ta=function(c,w,D,ae){if(w>=c.src_end)return!1;{let Ee=c.src[w];switch(c.p[D]){case 46:return!0;case qe:return Va(Ee,c.p[D+1]);case 91:return ea(c,Ee,D,ae-1);default:return c.p[D]===Ee}}},zs=function(c,w,D){if(D>=c.p_end-1&&O(c.L,fe("malformed pattern (missing arguments to '%%b'")),c.src[w]!==c.p[D])return null;{let ae=c.p[D],Ee=c.p[D+1],Fe=1;for(;++w<c.src_end;)if(c.src[w]===Ee){if(--Fe===0)return w+1}else c.src[w]===ae&&Fe++}return null},Ha=function(c,w,D,ae){let Ee=0;for(;ta(c,w+Ee,D,ae);)Ee++;for(;Ee>=0;){let Fe=ui(c,w+Ee,ae+1);if(Fe)return Fe;Ee--}return null},ci=function(c,w,D,ae){for(;;){let Ee=ui(c,w,ae+1);if(Ee!==null)return Ee;if(ta(c,w,D,ae))w++;else return null}},na=function(c,w,D,ae){let Ee=c.level;Ee>=st&&O(c.L,fe("too many captures")),c.capture[Ee]=c.capture[Ee]?c.capture[Ee]:{},c.capture[Ee].init=w,c.capture[Ee].len=ae,c.level=Ee+1;let Fe;return(Fe=ui(c,w,D))===null&&c.level--,Fe},Sr=function(c,w,D){let ae=Hs(c);c.capture[ae].len=w-c.capture[ae].init;let Ee;return(Ee=ui(c,w,D))===null&&(c.capture[ae].len=zi),Ee},tr=function(c,w,D,ae,Ee){return dt(c.subarray(w,w+Ee),D.subarray(ae,ae+Ee))},ia=function(c,w,D){D=Ga(c,D);let ae=c.capture[D].len;return c.src_end-w>=ae&&tr(c.src,c.capture[D].init,c.src,w,ae)?w+ae:null},ui=function(c,w,D){let ae=!1,Ee=!0;for(c.matchdepth--===0&&O(c.L,fe("pattern too complex"));Ee||ae;)if(Ee=!1,D!==c.p_end)switch(ae?void 0:c.p[D]){case 40:{c.p[D+1]===41?w=na(c,w,D+2,Jr):w=na(c,w,D+1,zi);break}case 41:{w=Sr(c,w,D+1);break}case 36:{if(D+1!==c.p_end){ae=!0;break}w=c.src.length-w===0?w:null;break}case qe:{switch(c.p[D+1]){case 98:{w=zs(c,w,D+2),w!==null&&(D+=4,Ee=!0);break}case 102:{D+=2,c.p[D]!==91&&O(c.L,fe("missing '[' after '%%f' in pattern"));let Fe=ii(c,D),xt=w===c.src_init?0:c.src[w-1];if(!ea(c,xt,D,Fe-1)&&ea(c,w===c.src_end?0:c.src[w],D,Fe-1)){D=Fe,Ee=!0;break}w=null;break}case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{w=ia(c,w,c.p[D+1]),w!==null&&(D+=2,Ee=!0);break}default:ae=!0}break}default:{ae=!1;let Fe=ii(c,D);if(ta(c,w,D,Fe))switch(c.p[Fe]){case 63:{let xt;(xt=ui(c,w+1,Fe+1))!==null?w=xt:(D=Fe+1,Ee=!0);break}case 43:w++;case 42:w=Ha(c,w,D,Fe);break;case 45:w=ci(c,w,D,Fe);break;default:w++,D=Fe,Ee=!0}else if(c.p[Fe]===42||c.p[Fe]===63||c.p[Fe]===45){D=Fe+1,Ee=!0;break}else w=null;break}}return c.matchdepth++,w},Tr=function(c,w,D,ae){if(w>=c.level)w===0?U(c.L,c.src.subarray(D,ae),ae-D):O(c.L,fe("invalid capture index %%%d"),w+1);else{let Ee=c.capture[w].len;Ee===zi&&O(c.L,fe("unfinished capture")),Ee===Jr?V(c.L,c.capture[w].init-c.src_init+1):U(c.L,c.src.subarray(c.capture[w].init),Ee)}},Wi=function(c,w,D){let ae=c.level===0&&w!=null?1:c.level;Be(c.L,ae,"too many captures");for(let Ee=0;Ee<ae;Ee++)Tr(c,Ee,w,D);return ae},Ws=function(c,w){for(let D=0;D<w;D++)if(et(Ba,c[D])!==-1)return!1;return!0},Mr=function(c,w,D,ae,Ee,Fe){c.L=w,c.matchdepth=Qr,c.src=D,c.src_init=0,c.src_end=ae,c.p=Ee,c.p_end=Fe},br=function(c){c.level=0,ze.lua_assert(c.matchdepth===Qr)},Xs=function(c,w,D){var ae=D>>>0,Ee=w.length;if(Ee===0)return ae;for(;(ae=c.indexOf(w[0],ae))!==-1;ae++)if(dt(c.subarray(ae,ae+Ee),w))return ae;return-1},ra=function(c,w){let D=M(c,1),ae=M(c,2),Ee=D.length,Fe=ae.length,xt=he(Se(c,3,1),Ee);if(xt<1)xt=1;else if(xt>Ee+1)return ee(c),1;if(w&&(pe(c,4)||Ws(ae,Fe))){let yt=Xs(D.subarray(xt-1),ae,0);if(yt>-1)return V(c,xt+yt),V(c,xt+yt+Fe-1),2}else{let yt=new er(c),$t=xt-1,un=ae[0]===94;un&&(ae=ae.subarray(1),Fe--),Mr(yt,c,D,Ee,ae,Fe);do{let Vt;if(br(yt),(Vt=ui(yt,$t,0))!==null)return w?(V(c,$t+1),V(c,Vt),Wi(yt,null,0)+2):Wi(yt,$t,Vt)}while($t++<yt.src_end&&!un)}return ee(c),1},Ks=function(c){return ra(c,1)},aa=function(c){return ra(c,0)};class Ui{constructor(){this.src=NaN,this.p=NaN,this.lastmatch=NaN,this.ms=new er}}const za=function(c){let w=se(c,$e(3));w.ms.L=c;for(let D=w.src;D<=w.ms.src_end;D++){br(w.ms);let ae;if((ae=ui(w.ms,D,w.p))!==null&&ae!==w.lastmatch)return w.src=w.lastmatch=ae,Wi(w.ms,D,ae)}return 0},js=function(c){let w=M(c,1),D=M(c,2),ae=w.length,Ee=D.length;Ce(c,2);let Fe=new Ui;return _e(c,Fe),Mr(Fe.ms,c,w,ae,D,Ee),Fe.src=0,Fe.p=0,Fe.lastmatch=null,q(c,za,3),1},sa=function(c,w,D,ae){let Ee=c.L,Fe=we(Ee,3),xt=Fe.length;for(let yt=0;yt<xt;yt++)Fe[yt]!==qe?Ye(w,Fe[yt]):(yt++,Gt(Fe[yt])?Fe[yt]===48?ht(w,c.src.subarray(D,ae),ae-D):(Tr(c,Fe[yt]-49,D,ae),xe(Ee,-1),j(Ee,-2),ne(w)):(Fe[yt]!==qe&&O(Ee,fe("invalid use of '%c' in replacement string"),qe),Ye(w,Fe[yt])))},qs=function(c,w,D,ae,Ee){let Fe=c.L;switch(Ee){case f:{X(Fe,3);let xt=Wi(c,D,ae);T(Fe,xt,1);break}case E:{Tr(c,0,D,ae),p(Fe,3);break}default:{sa(c,w,D,ae);return}}pe(Fe,-1)?k(Fe,-1)||O(Fe,fe("invalid replacement value (a %s)"),Xe(Fe,-1)):(ce(Fe,1),U(Fe,c.src.subarray(D,ae),ae-D)),ne(w)},$s={byte:Vi,char:Je,dump:gt,find:Ks,format:Pe,gmatch:js,gsub:function(c){let w=M(c,1),D=w.length,ae=M(c,2),Ee=ae.length,Fe=null,xt=ge(c,3),yt=Se(c,4,D+1),$t=ae[0]===94,un=0,Vt=new er(c),jt=new it;for(B(c,xt===h||xt===g||xt===f||xt===E,3,"string/function/table expected"),ve(c,jt),$t&&(ae=ae.subarray(1),Ee--),Mr(Vt,c,w,D,ae,Ee),w=0,ae=0;un<yt;){let nr;if(br(Vt),(nr=ui(Vt,w,ae))!==null&&nr!==Fe)un++,qs(Vt,jt,w,nr,xt),w=Fe=nr;else if(w<Vt.src_end)Ye(jt,Vt.src[w++]);else break;if($t)break}return ht(jt,Vt.src.subarray(w,Vt.src_end),Vt.src_end-w),Q(jt),V(c,un),2},len:ye,lower:It,match:aa,pack:lt,packsize:Hi,rep:kn,reverse:_t,sub:L,unpack:Zr,upper:Bn},d=function(c){y(c,0,1),A(c,""),X(c,-2),Le(c,-2),ce(c,1),X(c,-2),ke(c,-2,fe("__index",!0)),ce(c,1)},$=function(c){return Te(c,$s),d(c),1};return Hc.luaopen_string=$,Hc}var rf={};const{lua_gettop:Ay,lua_pushcfunction:Sy,lua_pushfstring:Ty,lua_pushinteger:Pa,lua_pushnil:K_,lua_pushstring:My,lua_pushvalue:by,lua_setfield:yy,lua_tointeger:wy}=be,{luaL_Buffer:Ry,luaL_addvalue:Cy,luaL_argcheck:Us,luaL_buffinit:Uy,luaL_checkinteger:j_,luaL_checkstack:Oy,luaL_checkstring:Lo,luaL_error:Ll,luaL_newlib:Py,luaL_optinteger:To,luaL_pushresult:Ny}=Et,{luastring_of:Iy,to_luastring:af}=nn,q_=1114111,ps=function(n){return(n&192)===128},Mo=function(n,e){return n>=0?n:0-n>e?0:e+n+1},Dy=[255,127,2047,65535],sf=function(n,e){let t=n[e],i=0;if(t<128)i=t;else{let r=0;for(;t&64;){let a=n[e+ ++r];if((a&192)!==128)return null;i=i<<6|a&63,t<<=1}if(i|=(t&127)<<r*5,r>3||i>q_||i<=Dy[r])return null;e+=r}return{code:i,pos:e+1}},ky=function(n){let e=0,t=Lo(n,1),i=t.length,r=Mo(To(n,2,1),i),a=Mo(To(n,3,-1),i);for(Us(n,1<=r&&--r<=i,2,"initial position out of string"),Us(n,--a<i,3,"final position out of string");r<=a;){let s=sf(t,r);if(s===null)return K_(n),Pa(n,r+1),2;r=s.pos,e++}return Pa(n,e),1},Ly=af("%U"),bd=function(n,e){let t=j_(n,e);Us(n,0<=t&&t<=q_,e,"value out of range"),Ty(n,Ly,t)},Fy=function(n){let e=Ay(n);if(e===1)bd(n,1);else{let t=new Ry;Uy(n,t);for(let i=1;i<=e;i++)bd(n,i),Cy(t);Ny(t)}return 1},By=function(n){let e=Lo(n,1),t=j_(n,2),i=t>=0?1:e.length+1;if(i=Mo(To(n,3,i),e.length),Us(n,1<=i&&--i<=e.length,3,"position out of range"),t===0)for(;i>0&&ps(e[i]);)i--;else if(ps(e[i])&&Ll(n,"initial position is a continuation byte"),t<0)for(;t<0&&i>0;){do i--;while(i>0&&ps(e[i]));t++}else for(t--;t>0&&i<e.length;){do i++;while(ps(e[i]));t--}return t===0?Pa(n,i+1):K_(n),1},Gy=function(n){let e=Lo(n,1),t=Mo(To(n,2,1),e.length),i=Mo(To(n,3,t),e.length);if(Us(n,t>=1,2,"out of range"),Us(n,i<=e.length,3,"out of range"),t>i)return 0;if(i-t>=Number.MAX_SAFE_INTEGER)return Ll(n,"string slice too long");let r=i-t+1;for(Oy(n,r,"string slice too long"),r=0,t-=1;t<i;){let a=sf(e,t);if(a===null)return Ll(n,"invalid UTF-8 code");Pa(n,a.code),t=a.pos,r++}return r},Vy=function(n){let e=Lo(n,1),t=e.length,i=wy(n,2)-1;if(i<0)i=0;else if(i<t)for(i++;ps(e[i]);)i++;if(i>=t)return 0;{let r=sf(e,i);return r===null||ps(e[r.pos])?Ll(n,af("invalid UTF-8 code")):(Pa(n,i+1),Pa(n,r.code),2)}},Hy=function(n){return Lo(n,1),Sy(n,Vy),by(n,1),Pa(n,0),3},zy={char:Fy,codepoint:Gy,codes:Hy,len:ky,offset:By},Wy=Iy(91,0,45,127,194,45,244,93,91,128,45,191,93,42),Xy=function(n){return Py(n,zy),My(n,Wy),yy(n,-2,af("charpattern",!0)),1};rf.luaopen_utf8=Xy;var of={};const{LUA_OPLT:$_,LUA_TNUMBER:Ky,lua_compare:Y_,lua_gettop:lf,lua_isinteger:Na,lua_isnoneornil:jy,lua_pushboolean:qy,lua_pushinteger:Ia,lua_pushliteral:yd,lua_pushnil:Z_,lua_pushnumber:Nn,lua_pushvalue:J_,lua_setfield:cl,lua_settop:cf,lua_tointeger:_u,lua_tointegerx:$y,lua_type:Yy}=be,{luaL_argcheck:Fl,luaL_argerror:Zy,luaL_checkany:Q_,luaL_checkinteger:oo,luaL_checknumber:In,luaL_error:Jy,luaL_newlib:Qy,luaL_optnumber:ew}=Et,{LUA_MAXINTEGER:em,LUA_MININTEGER:tw,lua_numbertointeger:nw}=Ei(),{to_luastring:ul}=nn;let Ta;const tm=function(){return Ta=1103515245*Ta+12345&2147483647,Ta},iw=function(n){Ta=n|0,Ta===0&&(Ta=1)},rw=function(n){let e,t,i=Ta===void 0?Math.random():tm()/2147483648;switch(lf(n)){case 0:return Nn(n,i),1;case 1:{e=1,t=oo(n,1);break}case 2:{e=oo(n,1),t=oo(n,2);break}default:return Jy(n,"wrong number of arguments")}return Fl(n,e<=t,1,"interval is empty"),Fl(n,e>=0||t<=em+e,1,"interval too large"),i*=t-e+1,Ia(n,Math.floor(i)+e),1},aw=function(n){return iw(In(n,1)),tm(),0},sw=function(n){if(Na(n,1)){let e=_u(n,1);e<0&&(e=-e|0),Ia(n,e)}else Nn(n,Math.abs(In(n,1)));return 1},ow=function(n){return Nn(n,Math.sin(In(n,1))),1},lw=function(n){return Nn(n,Math.cos(In(n,1))),1},cw=function(n){return Nn(n,Math.tan(In(n,1))),1},uw=function(n){return Nn(n,Math.asin(In(n,1))),1},fw=function(n){return Nn(n,Math.acos(In(n,1))),1},hw=function(n){let e=In(n,1),t=ew(n,2,1);return Nn(n,Math.atan2(e,t)),1},dw=function(n){let e=$y(n,1);return e!==!1?Ia(n,e):(Q_(n,1),Z_(n)),1},uf=function(n,e){let t=nw(e);t!==!1?Ia(n,t):Nn(n,e)},pw=function(n){return Na(n,1)?cf(n,1):uf(n,Math.floor(In(n,1))),1},_w=function(n){return Na(n,1)?cf(n,1):uf(n,Math.ceil(In(n,1))),1},mw=function(n){return Nn(n,Math.sqrt(In(n,1))),1},gw=function(n){let e=oo(n,1),t=oo(n,2);return qy(n,e>=0?t<0||e<t:t<0&&e<t),1},vw=function(n){let e=In(n,1),t;if(jy(n,2))t=Math.log(e);else{let i=In(n,2);i===2?t=Math.log2(e):i===10?t=Math.log10(e):t=Math.log(e)/Math.log(i)}return Nn(n,t),1},xw=function(n){return Nn(n,Math.exp(In(n,1))),1},Ew=function(n){return Nn(n,In(n,1)*(180/Math.PI)),1},Aw=function(n){return Nn(n,In(n,1)*(Math.PI/180)),1},Sw=function(n){let e=lf(n),t=1;Fl(n,e>=1,1,"value expected");for(let i=2;i<=e;i++)Y_(n,i,t,$_)&&(t=i);return J_(n,t),1},Tw=function(n){let e=lf(n),t=1;Fl(n,e>=1,1,"value expected");for(let i=2;i<=e;i++)Y_(n,t,i,$_)&&(t=i);return J_(n,t),1},Mw=function(n){return Yy(n,1)===Ky?Na(n,1)?yd(n,"integer"):yd(n,"float"):(Q_(n,1),Z_(n)),1},bw=function(n){if(Na(n,1)&&Na(n,2)){let e=_u(n,2);e===0?Zy(n,2,"zero"):Ia(n,_u(n,1)%e|0)}else{let e=In(n,1),t=In(n,2);Nn(n,e%t)}return 1},yw=function(n){if(Na(n,1))cf(n,1),Nn(n,0);else{let e=In(n,1),t=e<0?Math.ceil(e):Math.floor(e);uf(n,t),Nn(n,e===t?0:e-t)}return 2},ww={abs:sw,acos:fw,asin:uw,atan:hw,ceil:_w,cos:lw,deg:Ew,exp:xw,floor:pw,fmod:bw,log:vw,max:Tw,min:Sw,modf:yw,rad:Aw,random:rw,randomseed:aw,sin:ow,sqrt:mw,tan:cw,tointeger:dw,type:Mw,ult:gw},Rw=function(n){return Qy(n,ww),Nn(n,Math.PI),cl(n,-2,ul("pi",!0)),Nn(n,1/0),cl(n,-2,ul("huge",!0)),Ia(n,em),cl(n,-2,ul("maxinteger",!0)),Ia(n,tw),cl(n,-2,ul("mininteger",!0)),1};of.luaopen_math=Rw;var zc={},Wc={},wd;function Cw(){return wd||(wd=1,function(n){var e={},t=process.platform==="win32",i="aes-256-cbc",r="sha256",a="The current environment doesn't support interactive reading from TTY.",s=Kn,o=process.binding("tty_wrap").TTY,l=Kn,f=Kn,_={prompt:"> ",hideEchoBack:!1,mask:"*",limit:[],limitMessage:"Input another, please.$<( [)limit(])>",defaultInput:"",trueValue:[],falseValue:[],caseSensitive:!1,keepWhitespace:!1,encoding:"utf8",bufferSize:1024,print:void 0,history:!0,cd:!1,phContent:void 0,preCheck:void 0},h="none",g=!1,E=0,T="",y=[],x=!1,p=!1,W=!1,F,k,ce,q,V,_e;function A(z){function ne(B){return B.replace(/[^\w\u0080-\uFFFF]/g,function(Ae){return"#"+Ae.charCodeAt(0)+";"})}return q.concat(function(B){var Ae=[];return Object.keys(B).forEach(function(ve){B[ve]==="boolean"?z[ve]&&Ae.push("--"+ve):B[ve]==="string"&&z[ve]&&Ae.push("--"+ve,ne(z[ve]))}),Ae}({display:"string",displayOnly:"boolean",keyIn:"boolean",hideEchoBack:"boolean",mask:"string",limit:"string",caseSensitive:"boolean"}))}function U(z,ne){function B(ie){var xe="",Xe,ze;for(V=V||Kn.tmpdir();;){Xe=f.join(V,ie+xe);try{ze=s.openSync(Xe,"wx")}catch(dt){if(dt.code==="EEXIST"){xe++;continue}else throw dt}s.closeSync(ze);break}return Xe}var Ae={},ve=B("readline-sync.stdout"),H=B("readline-sync.stderr"),re=B("readline-sync.exit"),le=B("readline-sync.done"),Be=Kn,M,v,O,Te,Se,Oe,P,Q;Oe=Be.createHash(r),Oe.update(""+process.pid+E+++Math.random()),Q=Oe.digest("hex"),P=Be.createDecipher(i,Q),M=A(z),t?(v=e.ComSpec||"cmd.exe",e.Q='"',O=["/V:ON","/S","/C","(%Q%"+v+"%Q% /V:ON /S /C %Q%%Q%"+ce+"%Q%"+M.map(function(ie){return" %Q%"+ie+"%Q%"}).join("")+" & (echo !ERRORLEVEL!)>%Q%"+re+"%Q%%Q%) 2>%Q%"+H+"%Q% |%Q%"+process.execPath+"%Q% %Q%"+__dirname+"\\encrypt.js%Q% %Q%"+i+"%Q% %Q%"+Q+"%Q% >%Q%"+ve+"%Q% & (echo 1)>%Q%"+le+"%Q%"]):(v="/bin/sh",O=["-c",'("'+ce+'"'+M.map(function(ie){return" '"+ie.replace(/'/g,"'\\''")+"'"}).join("")+'; echo $?>"'+re+'") 2>"'+H+'" |"'+process.execPath+'" "'+__dirname+'/encrypt.js" "'+i+'" "'+Q+'" >"'+ve+'"; echo 1 >"'+le+'"']),W&&W("_execFileSync",M);try{l.spawn(v,O,ne)}catch(ie){Ae.error=new Error(ie.message),Ae.error.method="_execFileSync - spawn",Ae.error.program=v,Ae.error.args=O}for(;s.readFileSync(le,{encoding:z.encoding}).trim()!=="1";);return(Te=s.readFileSync(re,{encoding:z.encoding}).trim())==="0"?Ae.input=P.update(s.readFileSync(ve,{encoding:"binary"}),"hex",z.encoding)+P.final(z.encoding):(Se=s.readFileSync(H,{encoding:z.encoding}).trim(),Ae.error=new Error(a+(Se?`
`+Se:"")),Ae.error.method="_execFileSync",Ae.error.program=v,Ae.error.args=O,Ae.error.extMessage=Se,Ae.error.exitCode=+Te),s.unlinkSync(ve),s.unlinkSync(H),s.unlinkSync(re),s.unlinkSync(le),Ae}function ee(z){var ne={},B={env:e,encoding:z.encoding},Ae,ve;if(ce||(t?e.PSModulePath?(ce="powershell.exe",q=["-ExecutionPolicy","Bypass","-File",__dirname+"\\read.ps1"]):(ce="cscript.exe",q=["//nologo",__dirname+"\\read.cs.js"]):(ce="/bin/sh",q=[__dirname+"/read.sh"])),t&&!e.PSModulePath&&(B.stdio=[process.stdin]),l.execFileSync){Ae=A(z),W&&W("execFileSync",Ae);try{ne.input=l.execFileSync(ce,Ae,B)}catch(H){ve=H.stderr?(H.stderr+"").trim():"",ne.error=new Error(a+(ve?`
`+ve:"")),ne.error.method="execFileSync",ne.error.program=ce,ne.error.args=Ae,ne.error.extMessage=ve,ne.error.exitCode=H.status,ne.error.code=H.code,ne.error.signal=H.signal}}else ne=U(z,B);return ne.error||(ne.input=ne.input.replace(/^\s*'|'\s*$/g,""),z.display=""),ne}function Y(z){var ne="",B=z.display,Ae=!z.display&&z.keyIn&&z.hideEchoBack&&!z.mask;function ve(){var H=ee(z);if(H.error)throw H.error;return H.input}return p&&p(z),function(){var H,re,le;function Be(){return H||(H=process.binding("fs"),re=process.binding("constants"),re=re&&re.fs&&typeof re.fs.O_RDWR=="number"?re.fs:re),H}if(typeof h=="string")if(h=null,t){if(le=function(M){var v=M.replace(/^\D+/,"").split("."),O=0;return(v[0]=+v[0])&&(O+=v[0]*1e4),(v[1]=+v[1])&&(O+=v[1]*100),(v[2]=+v[2])&&(O+=v[2]),O}(process.version),!(le>=20302&&le<40204||le>=5e4&&le<50100||le>=50600&&le<60200)&&process.stdin.isTTY)process.stdin.pause(),h=process.stdin.fd,k=process.stdin._handle;else try{h=Be().open("CONIN$",re.O_RDWR,parseInt("0666",8)),k=new o(h,!0)}catch{}if(process.stdout.isTTY)F=process.stdout.fd;else{try{F=s.openSync("\\\\.\\CON","w")}catch{}if(typeof F!="number")try{F=Be().open("CONOUT$",re.O_RDWR,parseInt("0666",8))}catch{}}}else{if(process.stdin.isTTY){process.stdin.pause();try{h=s.openSync("/dev/tty","r"),k=process.stdin._handle}catch{}}else try{h=s.openSync("/dev/tty","r"),k=new o(h,!1)}catch{}if(process.stdout.isTTY)F=process.stdout.fd;else try{F=s.openSync("/dev/tty","w")}catch{}}}(),function(){var H=!z.hideEchoBack&&!z.keyIn,re,le,Be,M,v,O,Te;_e="";function Se(Oe){return Oe===g?!0:k.setRawMode(Oe)!==0?!1:(g=Oe,!0)}if(x||!k||typeof F!="number"&&(z.display||!H)){ne=ve();return}if(z.display&&(s.writeSync(F,z.display),z.display=""),!z.displayOnly){if(!Se(!H)){ne=ve();return}for(M=z.keyIn?1:z.bufferSize,Be=Buffer.allocUnsafe&&Buffer.alloc?Buffer.alloc(M):new Buffer(M),z.keyIn&&z.limit&&(le=new RegExp("[^"+z.limit+"]","g"+(z.caseSensitive?"":"i")));;){v=0;try{v=s.readSync(h,Be,0,M)}catch(Oe){if(Oe.code!=="EOF"){Se(!1),ne+=ve();return}}if(v>0?(O=Be.toString(z.encoding,0,v),_e+=O):(O=`
`,_e+="\0"),O&&typeof(Te=(O.match(/^(.*?)[\r\n]/)||[])[1])=="string"&&(O=Te,re=!0),O&&(O=O.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g,"")),O&&le&&(O=O.replace(le,"")),O&&(H||(z.hideEchoBack?z.mask&&s.writeSync(F,new Array(O.length+1).join(z.mask)):s.writeSync(F,O)),ne+=O),!z.keyIn&&re||z.keyIn&&ne.length>=M)break}!H&&!Ae&&s.writeSync(F,`
`),Se(!1)}}(),z.print&&!Ae&&z.print(B+(z.displayOnly?"":(z.hideEchoBack?new Array(ne.length+1).join(z.mask):ne)+`
`),z.encoding),z.displayOnly?"":T=z.keepWhitespace||z.keyIn?ne:ne.trim()}function de(z,ne){var B=[];function Ae(ve){ve!=null&&(Array.isArray(ve)?ve.forEach(Ae):(!ne||ne(ve))&&B.push(ve))}return Ae(z),B}function X(z){return z.replace(/[\x00-\x7f]/g,function(ne){return"\\x"+("00"+ne.charCodeAt().toString(16)).substr(-2)})}function j(){var z=Array.prototype.slice.call(arguments),ne,B;return z.length&&typeof z[0]=="boolean"&&(B=z.shift(),B&&(ne=Object.keys(_),z.unshift(_))),z.reduce(function(Ae,ve){return ve==null||(ve.hasOwnProperty("noEchoBack")&&!ve.hasOwnProperty("hideEchoBack")&&(ve.hideEchoBack=ve.noEchoBack,delete ve.noEchoBack),ve.hasOwnProperty("noTrim")&&!ve.hasOwnProperty("keepWhitespace")&&(ve.keepWhitespace=ve.noTrim,delete ve.noTrim),B||(ne=Object.keys(ve)),ne.forEach(function(H){var re;if(ve.hasOwnProperty(H))switch(re=ve[H],H){case"mask":case"limitMessage":case"defaultInput":case"encoding":re=re!=null?re+"":"",re&&H!=="limitMessage"&&(re=re.replace(/[\r\n]/g,"")),Ae[H]=re;break;case"bufferSize":!isNaN(re=parseInt(re,10))&&typeof re=="number"&&(Ae[H]=re);break;case"displayOnly":case"keyIn":case"hideEchoBack":case"caseSensitive":case"keepWhitespace":case"history":case"cd":Ae[H]=!!re;break;case"limit":case"trueValue":case"falseValue":Ae[H]=de(re,function(le){var Be=typeof le;return Be==="string"||Be==="number"||Be==="function"||le instanceof RegExp}).map(function(le){return typeof le=="string"?le.replace(/[\r\n]/g,""):le});break;case"print":case"phContent":case"preCheck":Ae[H]=typeof re=="function"?re:void 0;break;case"prompt":case"display":Ae[H]=re??"";break}})),Ae},{})}function ke(z,ne,B){return ne.some(function(Ae){var ve=typeof Ae;return ve==="string"?B?z===Ae:z.toLowerCase()===Ae.toLowerCase():ve==="number"?parseFloat(z)===Ae:ve==="function"?Ae(z):Ae instanceof RegExp?Ae.test(z):!1})}function Le(z,ne){var B=f.normalize(t?(e.HOMEDRIVE||"")+(e.HOMEPATH||""):e.HOME||"").replace(/[/\\]+$/,"");return z=f.normalize(z),ne?z.replace(/^~(?=\/|\\|$)/,B):z.replace(new RegExp("^"+X(B)+"(?=\\/|\\\\|$)",t?"i":""),"~")}function Ce(z,ne){var B="(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?",Ae=new RegExp("(\\$)?(\\$<"+B+">)","g"),ve=new RegExp("(\\$)?(\\$\\{"+B+"\\})","g");function H(re,le,Be,M,v,O){var Te;return le||typeof(Te=ne(v))!="string"?Be:Te?(M||"")+Te+(O||""):""}return z.replace(Ae,H).replace(ve,H)}function pe(z,ne,B){var Ae=[],ve=-1,H=0,re="",le,Be;function M(v,O){return O.length>3?(v.push(O[0]+"..."+O[O.length-1]),Be=!0):O.length&&(v=v.concat(O)),v}return le=z.reduce(function(v,O){return v.concat((O+"").split(""))},[]).reduce(function(v,O){var Te,Se;return ne||(O=O.toLowerCase()),Te=/^\d$/.test(O)?1:/^[A-Z]$/.test(O)?2:/^[a-z]$/.test(O)?3:0,B&&Te===0?re+=O:(Se=O.charCodeAt(0),Te&&Te===ve&&Se===H+1?Ae.push(O):(v=M(v,Ae),Ae=[O],ve=Te),H=Se),v},[]),le=M(le,Ae),re&&(le.push(re),Be=!0),{values:le,suppressed:Be}}function Me(z,ne){return z.join(z.length>2?", ":ne?" / ":"/")}function Ve(z,ne){var B={},Ae,ve,H;if(ne.phContent&&(Ae=ne.phContent(z,ne)),typeof Ae!="string")switch(z){case"hideEchoBack":case"mask":case"defaultInput":case"caseSensitive":case"keepWhitespace":case"encoding":case"bufferSize":case"history":case"cd":Ae=ne.hasOwnProperty(z)?typeof ne[z]=="boolean"?ne[z]?"on":"off":ne[z]+"":"";break;case"limit":case"trueValue":case"falseValue":ve=ne[ne.hasOwnProperty(z+"Src")?z+"Src":z],ne.keyIn?(B=pe(ve,ne.caseSensitive),ve=B.values):ve=ve.filter(function(re){var le=typeof re;return le==="string"||le==="number"}),Ae=Me(ve,B.suppressed);break;case"limitCount":case"limitCountNotZero":Ae=ne[ne.hasOwnProperty("limitSrc")?"limitSrc":"limit"].length,Ae=Ae||z!=="limitCountNotZero"?Ae+"":"";break;case"lastInput":Ae=T;break;case"cwd":case"CWD":case"cwdHome":Ae=process.cwd(),z==="CWD"?Ae=f.basename(Ae):z==="cwdHome"&&(Ae=Le(Ae));break;case"date":case"time":case"localeDate":case"localeTime":Ae=new Date()["to"+z.replace(/^./,function(re){return re.toUpperCase()})+"String"]();break;default:typeof(H=(z.match(/^history_m(\d+)$/)||[])[1])=="string"&&(Ae=y[y.length-H]||"")}return Ae}function we(z){var ne=/^(.)-(.)$/.exec(z),B="",Ae,ve,H,re;if(!ne)return null;for(Ae=ne[1].charCodeAt(0),ve=ne[2].charCodeAt(0),re=Ae<ve?1:-1,H=Ae;H!==ve+re;H+=re)B+=String.fromCharCode(H);return B}function se(z){var ne=new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),B="",Ae=[],ve,H;for(z=z.trim();ve=ne.exec(z);)H=ve[3]||ve[4]||"",ve[1]&&(Ae.push(B),B=""),B+=H;return B&&Ae.push(B),Ae}function ge(z,ne){return ne.trueValue.length&&ke(z,ne.trueValue,ne.caseSensitive)?!0:ne.falseValue.length&&ke(z,ne.falseValue,ne.caseSensitive)?!1:z}function $e(z){var ne,B,Ae,ve,H,re,le;function Be(v){return Ve(v,z)}function M(v){z.display+=(/[^\r\n]$/.test(z.display)?`
`:"")+v}for(z.limitSrc=z.limit,z.displaySrc=z.display,z.limit="",z.display=Ce(z.display+"",Be);;){if(ne=Y(z),B=!1,Ae="",z.defaultInput&&!ne&&(ne=z.defaultInput),z.history&&((ve=/^\s*!(?:!|-1)(:p)?\s*$/.exec(ne))?(H=y[0]||"",ve[1]?B=!0:ne=H,M(H+`
`),B||(z.displayOnly=!0,Y(z),z.displayOnly=!1)):ne&&ne!==y[y.length-1]&&(y=[ne])),!B&&z.cd&&ne)switch(re=se(ne),re[0].toLowerCase()){case"cd":if(re[1])try{process.chdir(Le(re[1],!0))}catch(v){M(v+"")}B=!0;break;case"pwd":M(process.cwd()),B=!0;break}if(!B&&z.preCheck&&(le=z.preCheck(ne,z),ne=le.res,le.forceNext&&(B=!0)),!B){if(!z.limitSrc.length||ke(ne,z.limitSrc,z.caseSensitive))break;z.limitMessage&&(Ae=Ce(z.limitMessage,Be))}M((Ae?Ae+`
`:"")+Ce(z.displaySrc+"",Be))}return ge(ne,z)}n._DBG_set_useExt=function(z){x=z},n._DBG_set_checkOptions=function(z){p=z},n._DBG_set_checkMethod=function(z){W=z},n._DBG_clearHistory=function(){T="",y=[]},n.setDefaultOptions=function(z){return _=j(!0,z),j(!0)},n.question=function(z,ne){return $e(j(j(!0,ne),{display:z}))},n.prompt=function(z){var ne=j(!0,z);return ne.display=ne.prompt,$e(ne)},n.keyIn=function(z,ne){var B=j(j(!0,ne),{display:z,keyIn:!0,keepWhitespace:!0});return B.limitSrc=B.limit.filter(function(Ae){var ve=typeof Ae;return ve==="string"||ve==="number"}).map(function(Ae){return Ce(Ae+"",we)}),B.limit=X(B.limitSrc.join("")),["trueValue","falseValue"].forEach(function(Ae){B[Ae]=B[Ae].reduce(function(ve,H){var re=typeof H;return re==="string"||re==="number"?ve=ve.concat((H+"").split("")):ve.push(H),ve},[])}),B.display=Ce(B.display+"",function(Ae){return Ve(Ae,B)}),ge(Y(B),B)},n.questionEMail=function(z,ne){return z==null&&(z="Input e-mail address: "),n.question(z,j({hideEchoBack:!1,limit:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,limitMessage:"Input valid e-mail address, please.",trueValue:null,falseValue:null},ne,{keepWhitespace:!1,cd:!1}))},n.questionNewPassword=function(z,ne){var B,Ae,ve,H=j({hideEchoBack:!0,mask:"*",limitMessage:`It can include: $<charlist>
And the length must be: $<length>`,trueValue:null,falseValue:null,caseSensitive:!0},ne,{history:!1,cd:!1,phContent:function(Se){return Se==="charlist"?B.text:Se==="length"?Ae+"..."+ve:null}}),re,le,Be,M,v,O,Te;for(ne=ne||{},re=Ce(ne.charlist?ne.charlist+"":"$<!-~>",we),(isNaN(Ae=parseInt(ne.min,10))||typeof Ae!="number")&&(Ae=12),(isNaN(ve=parseInt(ne.max,10))||typeof ve!="number")&&(ve=24),M=new RegExp("^["+X(re)+"]{"+Ae+","+ve+"}$"),B=pe([re],H.caseSensitive,!0),B.text=Me(B.values,B.suppressed),le=ne.confirmMessage!=null?ne.confirmMessage:"Reinput a same one to confirm it: ",Be=ne.unmatchMessage!=null?ne.unmatchMessage:"It differs from first one. Hit only the Enter key if you want to retry from first one.",z==null&&(z="Input new password: "),v=H.limitMessage;!Te;)H.limit=M,H.limitMessage=v,O=n.question(z,H),H.limit=[O,""],H.limitMessage=Be,Te=n.question(le,H);return O};function it(z,ne,B){var Ae;function ve(H){return Ae=B(H),!isNaN(Ae)&&typeof Ae=="number"}return n.question(z,j({limitMessage:"Input valid number, please."},ne,{limit:ve,cd:!1})),Ae}n.questionInt=function(z,ne){return it(z,ne,function(B){return parseInt(B,10)})},n.questionFloat=function(z,ne){return it(z,ne,parseFloat)},n.questionPath=function(z,ne){var B="",Ae,ve=j({hideEchoBack:!1,limitMessage:`$<error(
)>Input valid path, please.$<( Min:)min>$<( Max:)max>`,history:!0,cd:!0},ne,{keepWhitespace:!1,limit:function(H){var re,le,Be;H=Le(H,!0),B="";function M(v){v.split(/\/|\\/).reduce(function(O,Te){var Se=f.resolve(O+=Te+f.sep);if(!s.existsSync(Se))s.mkdirSync(Se);else if(!s.statSync(Se).isDirectory())throw new Error("Non directory already exists: "+Se);return O},"")}try{if(re=s.existsSync(H),Ae=re?s.realpathSync(H):f.resolve(H),!ne.hasOwnProperty("exists")&&!re||typeof ne.exists=="boolean"&&ne.exists!==re)return B=(re?"Already exists":"No such file or directory")+": "+Ae,!1;if(!re&&ne.create&&(ne.isDirectory?M(Ae):(M(f.dirname(Ae)),s.closeSync(s.openSync(Ae,"w"))),Ae=s.realpathSync(Ae)),re&&(ne.min||ne.max||ne.isFile||ne.isDirectory)){if(le=s.statSync(Ae),ne.isFile&&!le.isFile())return B="Not file: "+Ae,!1;if(ne.isDirectory&&!le.isDirectory())return B="Not directory: "+Ae,!1;if(ne.min&&le.size<+ne.min||ne.max&&le.size>+ne.max)return B="Size "+le.size+" is out of range: "+Ae,!1}if(typeof ne.validate=="function"&&(Be=ne.validate(Ae))!==!0)return typeof Be=="string"&&(B=Be),!1}catch(v){return B=v+"",!1}return!0},phContent:function(H){return H==="error"?B:H!=="min"&&H!=="max"?null:ne.hasOwnProperty(H)?ne[H]+"":""}});return ne=ne||{},z==null&&(z='Input path (you can "cd" and "pwd"): '),n.question(z,ve),Ae};function Ye(z,ne){var B={},Ae={};return typeof z=="object"?(Object.keys(z).forEach(function(ve){typeof z[ve]=="function"&&(Ae[ne.caseSensitive?ve:ve.toLowerCase()]=z[ve])}),B.preCheck=function(ve){var H;return B.args=se(ve),H=B.args[0]||"",ne.caseSensitive||(H=H.toLowerCase()),B.hRes=H!=="_"&&Ae.hasOwnProperty(H)?Ae[H].apply(ve,B.args.slice(1)):Ae.hasOwnProperty("_")?Ae._.apply(ve,B.args):null,{res:ve,forceNext:!1}},Ae.hasOwnProperty("_")||(B.limit=function(){var ve=B.args[0]||"";return ne.caseSensitive||(ve=ve.toLowerCase()),Ae.hasOwnProperty(ve)})):B.preCheck=function(ve){return B.args=se(ve),B.hRes=typeof z=="function"?z.apply(ve,B.args):!0,{res:ve,forceNext:!1}},B}n.promptCL=function(z,ne){var B=j({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},ne),Ae=Ye(z,B);return B.limit=Ae.limit,B.preCheck=Ae.preCheck,n.prompt(B),Ae.args},n.promptLoop=function(z,ne){for(var B=j({hideEchoBack:!1,trueValue:null,falseValue:null,caseSensitive:!1,history:!0},ne);!z(n.prompt(B)););},n.promptCLLoop=function(z,ne){var B=j({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},ne),Ae=Ye(z,B);for(B.limit=Ae.limit,B.preCheck=Ae.preCheck;n.prompt(B),!Ae.hRes;);},n.promptSimShell=function(z){return n.prompt(j({hideEchoBack:!1,history:!0},z,{prompt:function(){return t?"$<cwd>>":(e.USER||"")+(e.HOSTNAME?"@"+e.HOSTNAME.replace(/\..*$/,""):"")+":$<cwdHome>$ "}()}))};function ht(z,ne,B){var Ae;return z==null&&(z="Are you sure? "),(!ne||ne.guide!==!1)&&(z+="")&&(z=z.replace(/\s*:?\s*$/,"")+" [y/n]: "),Ae=n.keyIn(z,j(ne,{hideEchoBack:!1,limit:B,trueValue:"y",falseValue:"n",caseSensitive:!1})),typeof Ae=="boolean"?Ae:""}n.keyInYN=function(z,ne){return ht(z,ne)},n.keyInYNStrict=function(z,ne){return ht(z,ne,"yn")},n.keyInPause=function(z,ne){z==null&&(z="Continue..."),(!ne||ne.guide!==!1)&&(z+="")&&(z=z.replace(/\s+$/,"")+" (Hit any key)"),n.keyIn(z,j({limit:null},ne,{hideEchoBack:!0,mask:""}))},n.keyInSelect=function(z,ne,B){var Ae=j({hideEchoBack:!1},B,{trueValue:null,falseValue:null,caseSensitive:!1,phContent:function(Be){return Be==="itemsCount"?z.length+"":Be==="firstItem"?(z[0]+"").trim():Be==="lastItem"?(z[z.length-1]+"").trim():null}}),ve="",H={},re=49,le=`
`;if(!Array.isArray(z)||!z.length||z.length>35)throw"`items` must be Array (max length: 35).";return z.forEach(function(Be,M){var v=String.fromCharCode(re);ve+=v,H[v]=M,le+="["+v+"] "+(Be+"").trim()+`
`,re=re===57?97:re+1}),(!B||B.cancel!==!1)&&(ve+="0",H[0]=-1,le+="[0] "+(B&&B.cancel!=null&&typeof B.cancel!="boolean"?(B.cancel+"").trim():"CANCEL")+`
`),Ae.limit=ve,le+=`
`,ne==null&&(ne="Choose one from list: "),(ne+="")&&((!B||B.guide!==!1)&&(ne=ne.replace(/\s*:?\s*$/,"")+" [$<limit>]: "),le+=ne),H[n.keyIn(le,Ae).toLowerCase()]},n.getRawInput=function(){return _e};function ct(z,ne){var B;return ne.length&&(B={},B[z]=ne[0]),n.setDefaultOptions(B)[z]}n.setPrint=function(){return ct("print",arguments)},n.setPrompt=function(){return ct("prompt",arguments)},n.setEncoding=function(){return ct("encoding",arguments)},n.setMask=function(){return ct("mask",arguments)},n.setBufferSize=function(){return ct("bufferSize",arguments)}}(Wc)),Wc}var Rd;function nm(){if(Rd)return zc;Rd=1;const{LUA_MASKCALL:n,LUA_MASKCOUNT:e,LUA_MASKLINE:t,LUA_MASKRET:i,LUA_REGISTRYINDEX:r,LUA_TFUNCTION:a,LUA_TNIL:s,LUA_TTABLE:o,LUA_TUSERDATA:l,lua_Debug:f,lua_call:_,lua_checkstack:h,lua_gethook:g,lua_gethookcount:E,lua_gethookmask:T,lua_getinfo:y,lua_getlocal:x,lua_getmetatable:p,lua_getstack:W,lua_getupvalue:F,lua_getuservalue:k,lua_insert:ce,lua_iscfunction:q,lua_isfunction:V,lua_isnoneornil:_e,lua_isthread:A,lua_newtable:U,lua_pcall:ee,lua_pop:Y,lua_pushboolean:de,lua_pushfstring:X,lua_pushinteger:j,lua_pushlightuserdata:ke,lua_pushliteral:Le,lua_pushnil:Ce,lua_pushstring:pe,lua_pushvalue:Me,lua_rawgetp:Ve,lua_rawsetp:we,lua_rotate:se,lua_setfield:ge,lua_sethook:$e,lua_setlocal:it,lua_setmetatable:Ye,lua_settop:ht,lua_setupvalue:ct,lua_setuservalue:z,lua_tojsstring:ne,lua_toproxy:B,lua_tostring:Ae,lua_tothread:ve,lua_touserdata:H,lua_type:re,lua_upvalueid:le,lua_upvaluejoin:Be,lua_xmove:M}=be,{luaL_argcheck:v,luaL_argerror:O,luaL_checkany:Te,luaL_checkinteger:Se,luaL_checkstring:Oe,luaL_checktype:P,luaL_error:Q,luaL_loadbuffer:ie,luaL_newlib:xe,luaL_optinteger:Xe,luaL_optstring:ze,luaL_traceback:dt,lua_writestringerror:et}=Et,te=La(),{luastring_indexOf:fe,to_luastring:Ne}=nn,qe=function(u,S,N){u!==S&&!h(S,N)&&Q(u,Ne("stack overflow",!0))},st=function(u){return Me(u,r),1},C=function(u){return Te(u,1),p(u,1)||Ce(u),1},Re=function(u){const S=re(u,2);return v(u,S==s||S==o,2,"nil or table expected"),ht(u,2),Ye(u,1),1},he=function(u){return re(u,1)!==l?Ce(u):k(u,1),1},L=function(u){return P(u,1,l),Te(u,2),ht(u,2),z(u,1),1},ye=function(u){return A(u,1)?{arg:1,thread:ve(u,1)}:{arg:0,thread:u}},Je=function(u,S,N){pe(u,N),ge(u,-2,S)},tt=function(u,S,N){j(u,N),ge(u,-2,S)},gt=function(u,S,N){de(u,N),ge(u,-2,S)},St=function(u,S,N){u==S?se(u,-2,1):M(S,u,1),ge(u,-2,N)},Tt=function(u){let S=new f,N=ye(u),oe=N.arg,G=N.thread,De=ze(u,oe+2,"flnStu");if(qe(u,G,3),V(u,oe+1))De=X(u,Ne(">%s"),De),Me(u,oe+1),M(u,G,1);else if(!W(G,Se(u,oe+1),S))return Ce(u),1;return y(G,De,S)||O(u,oe+2,"invalid option"),U(u),fe(De,83)>-1&&(Je(u,Ne("source",!0),S.source),Je(u,Ne("short_src",!0),S.short_src),tt(u,Ne("linedefined",!0),S.linedefined),tt(u,Ne("lastlinedefined",!0),S.lastlinedefined),Je(u,Ne("what",!0),S.what)),fe(De,108)>-1&&tt(u,Ne("currentline",!0),S.currentline),fe(De,117)>-1&&(tt(u,Ne("nups",!0),S.nups),tt(u,Ne("nparams",!0),S.nparams),gt(u,Ne("isvararg",!0),S.isvararg)),fe(De,110)>-1&&(Je(u,Ne("name",!0),S.name),Je(u,Ne("namewhat",!0),S.namewhat)),fe(De,116)>-1&&gt(u,Ne("istailcall",!0),S.istailcall),fe(De,76)>-1&&St(u,G,Ne("activelines",!0)),fe(De,102)>-1&&St(u,G,Ne("func",!0)),1},bt=function(u){let S=ye(u),N=S.thread,oe=S.arg,G=new f,De=Se(u,oe+2);if(V(u,oe+1))return Me(u,oe+1),pe(u,x(u,null,De)),1;{let Ge=Se(u,oe+1);if(!W(N,Ge,G))return O(u,oe+1,"level out of range");qe(u,N,1);let rt=x(N,G,De);return rt?(M(N,u,1),pe(u,rt),se(u,-2,1),2):(Ce(u),1)}},Yt=function(u){let S=ye(u),N=S.thread,oe=S.arg,G=new f,De=Se(u,oe+1),Ge=Se(u,oe+2);if(!W(N,De,G))return O(u,oe+1,"level out of range");Te(u,oe+3),ht(u,oe+3),qe(u,N,1),M(u,N,1);let rt=it(N,G,Ge);return rt===null&&Y(N,1),pe(u,rt),1},Ot=function(u,S){let N=Se(u,2);P(u,1,a);let oe=S?F(u,1,N):ct(u,1,N);return oe===null?0:(pe(u,oe),ce(u,-(S+1)),S+1)},Pt=function(u){return Ot(u,1)},Gt=function(u){return Te(u,3),Ot(u,0)},ln=function(u,S,N){let oe=Se(u,N);return P(u,S,a),v(u,F(u,S,oe)!==null,N,"invalid upvalue index"),oe},dn=function(u){let S=ln(u,1,2);return ke(u,le(u,1,S)),1},cn=function(u){let S=ln(u,1,2),N=ln(u,3,4);return v(u,!q(u,1),1,"Lua function expected"),v(u,!q(u,3),3,"Lua function expected"),Be(u,1,S,3,N),0},an=Ne("__hooks__",!0),tn=["call","return","line","count","tail call"].map(u=>Ne(u)),Ie=function(u,S){Ve(u,r,an);let oe=H(u,-1).get(u);oe&&(oe(u),pe(u,tn[S.event]),S.currentline>=0?j(u,S.currentline):Ce(u),te.lua_assert(y(u,Ne("lS"),S)),_(u,2,0))},J=function(u,S){let N=0;return fe(u,99)>-1&&(N|=n),fe(u,114)>-1&&(N|=i),fe(u,108)>-1&&(N|=t),S>0&&(N|=e),N},nt=function(u,S){let N=0;return u&n&&(S[N++]=99),u&i&&(S[N++]=114),u&t&&(S[N++]=108),S.subarray(0,N)},K={gethook:function(u){let N=ye(u).thread,oe=new Uint8Array(5),G=T(N),De=g(N);return De===null?Ce(u):De!==Ie?Le(u,"external hook"):(Ve(u,r,an),H(u,-1).get(N)(u)),pe(u,nt(G,oe)),j(u,E(N)),3},getinfo:Tt,getlocal:bt,getmetatable:C,getregistry:st,getupvalue:Pt,getuservalue:he,sethook:function(u){let S,N,oe,G=ye(u),De=G.thread,Ge=G.arg;if(_e(u,Ge+1))ht(u,Ge+1),oe=null,S=0,N=0;else{const Nt=Oe(u,Ge+2);P(u,Ge+1,a),N=Xe(u,Ge+3,0),oe=Ie,S=J(Nt,N)}let rt;Ve(u,r,an)===s?(rt=new WeakMap,ke(u,rt),we(u,r,an)):rt=H(u,-1);let Mt=B(u,Ge+1);return rt.set(De,Mt),$e(De,oe,S,N),0},setlocal:Yt,setmetatable:Re,setupvalue:Gt,setuservalue:L,traceback:function(u){let S=ye(u),N=S.thread,oe=S.arg,G=Ae(u,oe+1);if(G===null&&!_e(u,oe+1))Me(u,oe+1);else{let De=Xe(u,oe+2,u===N?1:0);dt(u,N,G,De)}return 1},upvalueid:dn,upvaluejoin:cn};let ue;if(typeof process<"u"){const u=Cw();u.setDefaultOptions({prompt:"lua_debug> "}),ue=function(){return u.prompt()}}else typeof window<"u"&&(ue=function(){let u=prompt("lua_debug>","");return u!==null?u:""});ue&&(K.debug=function(u){for(;;){let S=ue();if(S==="cont")return 0;if(S.length===0)continue;let N=Ne(S);(ie(u,N,N.length,Ne("=(debug command)",!0))||ee(u,0,0,0))&&et(ne(u,-1),`
`),ht(u,0)}});const Pe=function(u){return xe(u,K),1};return zc.luaopen_debug=Pe,zc}function Uw(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Xc={},Cd;function im(){if(Cd)return Xc;Cd=1;var n={};const{LUA_DIRSEP:e,LUA_EXEC_DIR:t,LUA_JSPATH_DEFAULT:i,LUA_PATH_DEFAULT:r,LUA_PATH_MARK:a,LUA_PATH_SEP:s}=Ei(),{LUA_OK:o,LUA_REGISTRYINDEX:l,LUA_TNIL:f,LUA_TTABLE:_,lua_callk:h,lua_createtable:g,lua_getfield:E,lua_insert:T,lua_isfunction:y,lua_isnil:x,lua_isstring:p,lua_newtable:W,lua_pop:F,lua_pushboolean:k,lua_pushcclosure:ce,lua_pushcfunction:q,lua_pushfstring:V,lua_pushglobaltable:_e,lua_pushlightuserdata:A,lua_pushliteral:U,lua_pushlstring:ee,lua_pushnil:Y,lua_pushstring:de,lua_pushvalue:X,lua_rawgeti:j,lua_rawgetp:ke,lua_rawseti:Le,lua_rawsetp:Ce,lua_remove:pe,lua_setfield:Me,lua_setmetatable:Ve,lua_settop:we,lua_toboolean:se,lua_tostring:ge,lua_touserdata:$e,lua_upvalueindex:it}=be,{LUA_LOADED_TABLE:Ye,LUA_PRELOAD_TABLE:ht,luaL_Buffer:ct,luaL_addvalue:z,luaL_buffinit:ne,luaL_checkstring:B,luaL_error:Ae,luaL_getsubtable:ve,luaL_gsub:H,luaL_len:re,luaL_loadfile:le,luaL_newlib:Be,luaL_optstring:M,luaL_pushresult:v,luaL_setfuncs:O}=Et,Te=La(),{luastring_indexOf:Se,to_jsstring:Oe,to_luastring:P,to_uristring:Q}=nn,ie=rm(),xe=function(){return typeof process<"u"?YA:typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:(0,eval)("this")}(),Xe=P("__JSLIBS__"),ze="LUA_PATH",dt="LUA_JSPATH",et="-",te=e,fe=e,Ne=P("luaopen_"),qe=P("_"),st="open",C=P("");let Re;if(typeof process>"u")Re=function(G,De,Ge){De=Q(De);let rt=new XMLHttpRequest;if(rt.open("GET",De,!1),rt.send(),rt.status<200||rt.status>=300)return de(G,P(`${rt.status}: ${rt.statusText}`)),null;let Mt=rt.response;/\/\/[#@] sourceURL=/.test(Mt)||(Mt+=" //# sourceURL="+De);let Nt;try{Nt=Function("fengari",Mt)}catch(sn){return de(G,P(`${sn.name}: ${sn.message}`)),null}let Ct=Nt(ie);return typeof Ct=="function"||typeof Ct=="object"&&Ct!==null?Ct:Ct===void 0?xe:(de(G,P(`library returned unexpected type (${typeof Ct})`)),null)};else{const G=Kn;Re=function(De,Ge,rt){Ge=Oe(Ge),Ge=G.resolve(process.cwd(),Ge);try{return Uw(Ge)}catch(Mt){return de(De,P(Mt.message)),null}}}const he=function(G,De,Ge){let rt=De[Oe(Ge)];return rt&&typeof rt=="function"?rt:(V(G,P("undefined symbol: %s"),Ge),null)},L=function(G){E(G,l,P("LUA_NOENV"));let De=se(G,-1);return F(G,1),De};let ye;if(typeof process<"u"){const G=Kn;ye=function(De){try{let Ge=G.openSync(De,"r");G.closeSync(Ge)}catch{return!1}return!0}}else ye=function(G){G=Q(G);let De=new XMLHttpRequest;return De.open("GET",G,!1),De.send(),De.status>=200&&De.status<=299};const Je=1,tt=2,gt=function(G,De,Ge){let rt=Yt(G,De);if(rt===null){if(rt=Re(G,De,Ge[0]===42),rt===null)return Je;Ot(G,De,rt)}if(Ge[0]===42)return k(G,1),0;{let Mt=he(G,rt,Ge);return Mt===null?tt:(q(G,Mt),0)}},St=function(G){let De=B(G,1),Ge=B(G,2),rt=gt(G,De,Ge);return rt===0?1:(Y(G),T(G,-2),U(G,rt===Je?st:"init"),3)},Tt=function(){return typeof process<"u"?n:xe}(),bt=function(G,De,Ge,rt){let Mt=`${Ge}${Te.LUA_VERSUFFIX}`;de(G,P(Mt));let Nt=Tt[Mt];Nt===void 0&&(Nt=Tt[Ge]),Nt===void 0||L(G)?de(G,rt):(Nt=H(G,P(Nt),P(s+s,!0),P(s+Oe(C)+s,!0)),H(G,Nt,C,rt),pe(G,-2)),Me(G,-3,De),F(G,1)},Yt=function(G,De){ke(G,l,Xe),E(G,-1,De);let Ge=$e(G,-1);return F(G,2),Ge},Ot=function(G,De,Ge){ke(G,l,Xe),A(G,Ge),X(G,-1),Me(G,-3,De),Le(G,-2,re(G,-2)+1),F(G,1)},Pt=function(G,De){for(;De[0]===s.charCodeAt(0);)De=De.subarray(1);if(De.length===0)return null;let Ge=Se(De,s.charCodeAt(0));return Ge<0&&(Ge=De.length),ee(G,De,Ge),De.subarray(Ge)},Gt=function(G,De,Ge,rt,Mt){let Nt=new ct;for(ne(G,Nt),rt[0]!==0&&(De=H(G,De,rt,Mt));(Ge=Pt(G,Ge))!==null;){let Ct=H(G,ge(G,-1),P(a,!0),De);if(pe(G,-2),ye(Ct))return Ct;V(G,P(`
	no file '%s'`),Ct),pe(G,-2),z(Nt)}return v(Nt),null},ln=function(G){return Gt(G,B(G,1),B(G,2),M(G,3,"."),M(G,4,e))!==null?1:(Y(G),T(G,-2),2)},dn=function(G,De,Ge,rt){E(G,it(1),Ge);let Mt=ge(G,-1);return Mt===null&&Ae(G,P("'package.%s' must be a string"),Ge),Gt(G,De,Mt,P("."),rt)},cn=function(G,De,Ge){return De?(de(G,Ge),2):Ae(G,P(`error loading module '%s' from file '%s':
	%s`),ge(G,1),Ge,ge(G,-1))},an=function(G){let De=B(G,1),Ge=dn(G,De,P("path",!0),P(fe,!0));return Ge===null?1:cn(G,le(G,Ge)===o,Ge)},tn=function(G,De,Ge){let rt;Ge=H(G,Ge,P("."),qe);let Mt=Se(Ge,et.charCodeAt(0));if(Mt>=0){rt=ee(G,Ge,Mt),rt=V(G,P("%s%s"),Ne,rt);let Nt=gt(G,De,rt);if(Nt!==tt)return Nt;Ge=Mt+1}return rt=V(G,P("%s%s"),Ne,Ge),gt(G,De,rt)},Ie=function(G){let De=B(G,1),Ge=dn(G,De,P("jspath",!0),P(te,!0));return Ge===null?1:cn(G,tn(G,Ge,De)===0,Ge)},J=function(G){let De=B(G,1),Ge=Se(De,46),rt;if(Ge<0)return 0;ee(G,De,Ge);let Mt=dn(G,ge(G,-1),P("jspath",!0),P(te,!0));return Mt===null?1:(rt=tn(G,Mt,De))!==0?rt!=tt?cn(G,0,Mt):(V(G,P(`
	no module '%s' in file '%s'`),De,Mt),1):(de(G,Mt),2)},nt=function(G){let De=B(G,1);return E(G,l,ht),E(G,-1,De)===f&&V(G,P(`
	no field package.preload['%s']`),De),1},mt=function(G,De,Ge,rt){let Mt=new ct;return ne(G,Mt),E(G,it(1),P("searchers",!0))!==_&&Ae(G,P("'package.searchers' must be a table")),Z(G,o,{name:De,i:1,msg:Mt,ctx:Ge,k:rt})},Z=function(G,De,Ge){for(;De===o?(j(G,3,Ge.i)===f&&(F(G,1),v(Ge.msg),Ae(G,P("module '%s' not found:%s"),Ge.name,ge(G,-1))),de(G,Ge.name),h(G,1,2,Ge,Z)):De=o,!y(G,-2);Ge.i++)p(G,-2)?(F(G,1),z(Ge.msg)):F(G,2);return Ge.k(G,o,Ge.ctx)},b=function(G){let De=B(G,1);return we(G,1),E(G,l,Ye),E(G,2,De),se(G,-1)?1:(F(G,1),mt(G,De,De,K))},K=function(G,De,Ge){return de(G,Ge),T(G,-2),h(G,2,1,Ge,ue),ue(G,o,Ge)},ue=function(G,De,Ge){let rt=Ge;return x(G,-1)||Me(G,2,rt),E(G,2,rt)==f&&(k(G,1),X(G,-1),Me(G,2,rt)),1},Pe={loadlib:St,searchpath:ln},u={require:b},S=function(G){let De=[nt,an,Ie,J,null];g(G);for(let Ge=0;De[Ge];Ge++)X(G,-2),ce(G,De[Ge],1),Le(G,-2,Ge+1);Me(G,-2,P("searchers",!0))},N=function(G){W(G),g(G,0,1),Ve(G,-2),Ce(G,l,Xe)},oe=function(G){return N(G),Be(G,Pe),S(G),bt(G,P("path",!0),ze,r),bt(G,P("jspath",!0),dt,i),U(G,e+`
`+s+`
`+a+`
`+t+`
`+et+`
`),Me(G,-2,P("config",!0)),ve(G,l,Ye),Me(G,-2,P("loaded",!0)),ve(G,l,ht),Me(G,-2,P("preload",!0)),_e(G),X(G,-2),O(G,u,1),F(G,1),1};return Xc.luaopen_package=oe,Xc}var ff={};const{lua_pushinteger:Ow,lua_pushliteral:ha,lua_setfield:Pr}=be,{luaL_newlib:Pw}=Et,{FENGARI_AUTHORS:Nw,FENGARI_COPYRIGHT:Iw,FENGARI_RELEASE:Dw,FENGARI_VERSION:kw,FENGARI_VERSION_MAJOR:Lw,FENGARI_VERSION_MINOR:Fw,FENGARI_VERSION_NUM:Bw,FENGARI_VERSION_RELEASE:Gw,to_luastring:Nr}=nn,Vw=function(n){return Pw(n,{}),ha(n,Nw),Pr(n,-2,Nr("AUTHORS")),ha(n,Iw),Pr(n,-2,Nr("COPYRIGHT")),ha(n,Dw),Pr(n,-2,Nr("RELEASE")),ha(n,kw),Pr(n,-2,Nr("VERSION")),ha(n,Lw),Pr(n,-2,Nr("VERSION_MAJOR")),ha(n,Fw),Pr(n,-2,Nr("VERSION_MINOR")),Ow(n,Bw),Pr(n,-2,Nr("VERSION_NUM")),ha(n,Gw),Pr(n,-2,Nr("VERSION_RELEASE")),1};ff.luaopen_fengari=Vw;var Kc={},Ud;function Hw(){if(Ud)return Kc;Ud=1;const{lua_pop:n}=be,{luaL_requiref:e}=Et,{to_luastring:t}=nn,i={},r=function(x){for(let p in i)e(x,t(p),i[p],1),n(x,1)};Kc.luaL_openlibs=r;const a=La(),{luaopen_base:s}=qu,{luaopen_coroutine:o}=tf,{luaopen_debug:l}=nm(),{luaopen_math:f}=of,{luaopen_package:_}=im(),{luaopen_os:h}=nf,{luaopen_string:g}=X_(),{luaopen_table:E}=L_(),{luaopen_utf8:T}=rf;i._G=s,i[a.LUA_LOADLIBNAME]=_,i[a.LUA_COLIBNAME]=o,i[a.LUA_TABLIBNAME]=E,i[a.LUA_OSLIBNAME]=h,i[a.LUA_STRLIBNAME]=g,i[a.LUA_MATHLIBNAME]=f,i[a.LUA_UTF8LIBNAME]=T,i[a.LUA_DBLIBNAME]=l,typeof process<"u"&&(i[a.LUA_IOLIBNAME]=F_().luaopen_io);const{luaopen_fengari:y}=ff;return i[a.LUA_FENGARILIBNAME]=y,Kc}var Od;function La(){if(Od)return fn;Od=1;const{LUA_VERSION_MAJOR:n,LUA_VERSION_MINOR:e}=be,t="_"+n+"_"+e;fn.LUA_VERSUFFIX=t,fn.lua_assert=function(T){},fn.luaopen_base=qu.luaopen_base;const i="coroutine";fn.LUA_COLIBNAME=i,fn.luaopen_coroutine=tf.luaopen_coroutine;const r="table";if(fn.LUA_TABLIBNAME=r,fn.luaopen_table=L_().luaopen_table,typeof process<"u"){const T="io";fn.LUA_IOLIBNAME=T,fn.luaopen_io=F_().luaopen_io}const a="os";fn.LUA_OSLIBNAME=a,fn.luaopen_os=nf.luaopen_os;const s="string";fn.LUA_STRLIBNAME=s,fn.luaopen_string=X_().luaopen_string;const o="utf8";fn.LUA_UTF8LIBNAME=o,fn.luaopen_utf8=rf.luaopen_utf8;const l="bit32";fn.LUA_BITLIBNAME=l;const f="math";fn.LUA_MATHLIBNAME=f,fn.luaopen_math=of.luaopen_math;const _="debug";fn.LUA_DBLIBNAME=_,fn.luaopen_debug=nm().luaopen_debug;const h="package";fn.LUA_LOADLIBNAME=h,fn.luaopen_package=im().luaopen_package;const g="fengari";fn.LUA_FENGARILIBNAME=g,fn.luaopen_fengari=ff.luaopen_fengari;const E=Hw();return fn.luaL_openlibs=E.luaL_openlibs,fn}/**
@license MIT

Copyright © 2017-2019 Benoit Giannangeli
Copyright © 2017-2019 Daurnimator
Copyright © 1994–2017 Lua.org, PUC-Rio.
*/var Pd;function rm(){if(Pd)return Mn;Pd=1;const n=nn;Mn.FENGARI_AUTHORS=n.FENGARI_AUTHORS,Mn.FENGARI_COPYRIGHT=n.FENGARI_COPYRIGHT,Mn.FENGARI_RELEASE=n.FENGARI_RELEASE,Mn.FENGARI_VERSION=n.FENGARI_VERSION,Mn.FENGARI_VERSION_MAJOR=n.FENGARI_VERSION_MAJOR,Mn.FENGARI_VERSION_MINOR=n.FENGARI_VERSION_MINOR,Mn.FENGARI_VERSION_NUM=n.FENGARI_VERSION_NUM,Mn.FENGARI_VERSION_RELEASE=n.FENGARI_VERSION_RELEASE,Mn.luastring_eq=n.luastring_eq,Mn.luastring_indexOf=n.luastring_indexOf,Mn.luastring_of=n.luastring_of,Mn.to_jsstring=n.to_jsstring,Mn.to_luastring=n.to_luastring,Mn.to_uristring=n.to_uristring;const e=Ei(),t=be,i=Et,r=La();return Mn.luaconf=e,Mn.lua=t,Mn.lauxlib=i,Mn.lualib=r,Mn}var Zt=rm();const zw=`-- MAPA ESTILO GTA 5 -- Cenário demonstrativo em Lua
-- Os locais e coordenadas preservam o mapa enviado pelo jogador.
local mapa = {
    cidade = "Los Santos",

    locais = {
        {
            nome = "Centro de Los Santos",
            tipo = "Cidade",
            posicao = {x = 0, y = 0, z = 0}
        },
        {
            nome = "Vinewood",
            tipo = "Bairro",
            posicao = {x = 500, y = 300, z = 0}
        },
        {
            nome = "Praia de Vespucci",
            tipo = "Praia",
            posicao = {x = -400, y = -200, z = 0}
        },
        {
            nome = "Monte Chiliad",
            tipo = "Montanha",
            posicao = {x = 1200, y = 900, z = 500}
        },
        {
            nome = "Aeroporto",
            tipo = "Aeroporto",
            posicao = {x = -1000, y = -600, z = 0}
        }
    }
}

_G.mapa = mapa

function carregarMapa()
    print("Carregando mapa: " .. mapa.cidade)
    for _, localMapa in ipairs(mapa.locais) do
        print("Local carregado: " .. localMapa.nome)
        print("Tipo: " .. localMapa.tipo)
    end
    print("Mapa carregado!")
end

carregarMapa()
return mapa
`,Ww=`-- Missão: siga o veículo marcado até Vinewood.
-- O jogo chama estas funções Lua durante a partida.
local missaoAtiva = false
local objetivoConcluido = false
local recompensa = 5000

function iniciarMissao()
    missaoAtiva = true
    objetivoConcluido = false
    print("MISSÃO INICIADA")
    print("Siga o veículo marcado no mapa!")
end

function verificarObjetivo()
    if missaoAtiva and objetivoConcluido then
        finalizarMissao()
    end
end

function finalizarMissao()
    missaoAtiva = false
    print("MISSÃO CONCLUÍDA!")
    print("Você recebeu $" .. recompensa)
end

function definirObjetivoConcluido(valor)
    objetivoConcluido = valor
end

function estadoMissao()
    return missaoAtiva, objetivoConcluido, recompensa
end
`,_n=Zt.lauxlib.luaL_newstate();Zt.lualib.luaL_openlibs(_n);const hf=n=>{if(Zt.lauxlib.luaL_dostring(_n,Zt.to_luastring(n))!==Zt.lua.LUA_OK)throw new Error("Erro Lua: "+Zt.lua.lua_tojsstring(_n,-1))};hf(zw);hf(Ww);const df=[];Zt.lua.lua_getglobal(_n,Zt.to_luastring("mapa"));Zt.lua.lua_getfield(_n,-1,Zt.to_luastring("locais"));Zt.lua.lua_pushnil(_n);for(;Zt.lua.lua_next(_n,-2);){Zt.lua.lua_getfield(_n,-1,Zt.to_luastring("nome"));const n=Zt.lua.lua_tojsstring(_n,-1);Zt.lua.lua_pop(_n,1),Zt.lua.lua_getfield(_n,-1,Zt.to_luastring("tipo"));const e=Zt.lua.lua_tojsstring(_n,-1);Zt.lua.lua_pop(_n,1),Zt.lua.lua_getfield(_n,-1,Zt.to_luastring("posicao"));const t=s=>{Zt.lua.lua_getfield(_n,-1,Zt.to_luastring(s));const o=Zt.lua.lua_tonumber(_n,-1);return Zt.lua.lua_pop(_n,1),o},i=t("x"),r=t("y"),a=t("z");Zt.lua.lua_pop(_n,1),df.push({name:n,type:e,x:i*.05,y:-r*.05,height:a*.05}),Zt.lua.lua_pop(_n,1)}Zt.lua.lua_pop(_n,2);const am=n=>hf(n),Xw=()=>{Zt.lua.lua_getglobal(_n,Zt.to_luastring("estadoMissao")),Zt.lua.lua_call(_n,0,3);const n={active:Zt.lua.lua_toboolean(_n,-3),done:Zt.lua.lua_toboolean(_n,-2),reward:Zt.lua.lua_tonumber(_n,-1)};return Zt.lua.lua_pop(_n,3),n},xn=n=>document.querySelector(n),Kw=xn("#game"),Hn=new WA;Hn.background=new Qt("#d69869");Hn.fog=new bu("#d69b72",.0095);const Ir=new _i(58,innerWidth/innerHeight,.1,260),Gi=new _p({antialias:!0,powerPreference:"high-performance"});Gi.setPixelRatio(Math.min(devicePixelRatio,1.65));Gi.setSize(innerWidth,innerHeight);Gi.shadowMap.enabled=!0;Gi.shadowMap.type=kd;Gi.outputColorSpace=Un;Gi.toneMapping=Fd;Gi.toneMappingExposure=1.12;Kw.appendChild(Gi.domElement);Hn.add(new KA("#ffe3c4","#36443f",2));const Ar=new gp("#ffcf95",3.4);Ar.position.set(-32,48,25);Ar.castShadow=!0;Ar.shadow.mapSize.set(1024,1024);Ar.shadow.camera.left=-55;Ar.shadow.camera.right=55;Ar.shadow.camera.top=55;Ar.shadow.camera.bottom=-55;Ar.shadow.bias=-4e-4;Hn.add(Ar);const sm=new gp("#7aa5a5",.7);sm.position.set(30,18,-30);Hn.add(sm);const jc={},rn=(n,e,t=.85,i=0)=>jc[n]||(jc[n]=new wl({color:e,roughness:t,metalness:i})),vi=(n,e,t,i=0,r=0,a=0)=>{const s=new hn(new Co(n,e),t);return s.rotation.x=-Math.PI/2,s.position.set(i,a,r),s.receiveShadow=!0,Hn.add(s),s};vi(180,160,rn("earth","#a69b78"));vi(85,100,rn("ocean","#376b70",.35),-58,0,-.15);vi(20,33,rn("sand","#d2b37f"),-31,5,-.05);const om=[],Yi=(n,e,t,i,r,a,s,{shadow:o=!0}={})=>{const l=new hn(new si(n,e,t),i);return l.position.set(r,a+e/2,s),l.castShadow=o,l.receiveShadow=!0,Hn.add(l),l},pf=rn("road","#353a39",.98);rn("walk","#8d8a7b");const jw=new Set([-20,-12,-4,4,12,20]),qw=new Set([-20,-12,-4,4,12,20]);for(const n of jw)vi(3.2,78,pf,n,0,.015),vi(.13,78,rn("line"+n,"#c6b99b"),n-1.46,0,.027),vi(.13,78,rn("lineb"+n,"#c6b99b"),n+1.46,0,.027);for(const n of qw){vi(82,3.2,pf,0,n,.018);for(let e=-39;e<40;e+=5)vi(1.7,.09,rn("dash"+n+e,"#d6c69d"),e,n,.03)}const xl=[[0,1],[0,-4],[4,-4],[8,-4],[8,-8],[12,-8],[16,-12],[20,-16],[25,-19]];for(let n=1;n<xl.length;n++){const[e,t]=xl[n-1],[i,r]=xl[n],a=Math.hypot(i-e,r-t),s=Math.atan2(i-e,r-t),o=vi(3.5,a+.1,pf,(e+i)/2,(t+r)/2,.045);o.rotation.z=0,o.rotation.y=-s}let qc=41;const Di=()=>(qc=qc*1664525+1013904223>>>0,qc/4294967296),fl=["#b8a48c","#9d9a89","#c5b39a","#7b8987","#b08b73","#828784","#c7bca6"];for(let n=-2;n<=2;n++)for(let e=-2;e<=2;e++){const t=n*8,i=e*8;if(!(Math.hypot(t,i)<4))for(let r of[-1.6,1.7])for(let a of[-1.55,1.65]){const s=t+r,o=i+a;if(s<-19||s>19||o<-19||o>19)continue;const l=2.6+Di()*1.2,f=2.4+Di()*1.3,_=2.5+Di()*(Math.abs(s)<11&&Math.abs(o)<11?15:8),h=rn("facade"+Math.floor(Di()*fl.length),fl[Math.floor(Di()*fl.length)]);Yi(l,_,f,h,s,.05,o),om.push({x:s,z:o,w:l,d:f,h:_}),Yi(l+.16,.22,f+.16,rn("roof"+fl.indexOf(h.color.getHexString()),"#514f49"),s,_+.05,o,{shadow:!1});const g=rn("window"+Math.floor(Di()*5),"#edc58b",.4,.18);if(_>4)for(let E=1.1;E<_-.5;E+=2)for(let T=-l/2+.48;T<l/2-.25;T+=.75){const y=new hn(new si(.3,.42,.035),g);y.position.set(s+T,E,o+f/2+.018),Hn.add(y)}}}Yi(1.25,19,1.25,rn("tower","#dfc7a2"),-1,0,-1);Yi(2.2,1.2,2.2,rn("towercap","#4b4d48"),-1,19,-1);Yi(7,1.25,.22,rn("sign","#eee2c3"),25,11,-15);const ic=document.createElement("canvas");ic.width=512;ic.height=96;const rc=ic.getContext("2d");rc.fillStyle="#e9ddc0";rc.font="bold 68px Arial";rc.textAlign="center";rc.fillText("VINEWOOD",256,72);const lm=new XA(ic);lm.colorSpace=Un;const cm=new hn(new Co(7,1.3),new ba({map:lm,transparent:!0}));cm.position.set(25,11,-14.87);Hn.add(cm);for(let n=0;n<13;n++){const e=22+n*1.75,t=-16-n%5*2.6,i=5+n%4*1.5,r=4+n%5*2.2,a=new hn(new Is(i,r,7),rn("hill"+n,["#777e61","#858467","#6e795f"][n%3]));a.position.set(e,r/2-.1,t),a.receiveShadow=!0,Hn.add(a)}const $w=rn("pine","#4f6755");for(let n=0;n<85;n++){const e=17+Di()*25,t=-9-Di()*25;if(e<19&&t>-12)continue;const i=1.3+Di()*2.4;Yi(.18,i*.55,.18,rn("trunk"+n,"#67533f"),e,0,t,{shadow:!1});const r=new hn(new Is(i*.34,i,6),$w);r.position.set(e,i*.75,t),r.castShadow=!0,Hn.add(r)}vi(17,25,rn("tarmac","#4a5050"),-27,15,.03);vi(2.4,22,rn("runway","#343b3c"),-31,15,.045);for(let n=5;n<26;n+=3)vi(.13,1.3,rn("runwaystripe"+n,"#d6d2b9"),-31,n,.06);for(let n=0;n<6;n++){const e=-34+n%3*4,t=9+Math.floor(n/3)*12;Yi(2.3,1.8,3.8,rn("hangar"+n,"#8a8b7f"),e,.05,t),Yi(2.35,.18,3.9,rn("hangarroof"+n,"#545b59"),e,1.85,t)}for(let n=0;n<5;n++){const e=-36+n*2.6,t=0+n%2*6;Yi(.22,2.1,.22,rn("palmtrunk"+n,"#a78c62"),e,0,t,{shadow:!1});for(let i=0;i<6;i++){const r=new hn(new Is(.22,2,5),rn("leaf"+n+"-"+i,"#598069"));r.position.set(e+Math.sin(i*1.047)*.65,2.35,t+Math.cos(i*1.047)*.65),r.rotation.z=-.8,Hn.add(r)}}vi(3,14,rn("pier","#796b55"),-37,6,.1);const Yw=new wl({color:"#f6d79e",emissive:"#ffb55e",emissiveIntensity:1.4});for(let n=-16;n<=16;n+=8)for(let e=-16;e<=16;e+=8){if(Di()>.56)continue;const t=Di()>.5?2.4:-2.4;Yi(.08,3.2,.08,rn("lampPole"+n+e,"#555a54"),n+t,0,e,{shadow:!1});const i=new hn(new si(.7,.07,.07),rn("lampArm"+n+e,"#555a54"));i.position.set(n+t+.28,3.08,e),Hn.add(i);const r=new hn(new yu(.16,8,6),Yw);r.position.set(n+t+.55,3,e),Hn.add(r)}function um(n,e=!1){const t=new ds,i=new wl({color:n,roughness:.28,metalness:.42}),r=rn("carDark","#20272a",.32),a=new wl({color:"#263d43",roughness:.2,metalness:.45}),s=new hn(new si(1.35,.48,2.7),i);s.position.y=.58,s.castShadow=!0,t.add(s);const o=new hn(new si(1.3,.18,.8),i);o.position.set(0,.84,-.79),t.add(o);const l=new hn(new si(1.02,.5,1.18),a);l.position.set(0,.99,.28),l.castShadow=!0,t.add(l);const f=new hn(new si(.92,.11,.88),i);f.position.set(0,1.27,.3),t.add(f);for(const h of[-.73,.73])for(const g of[-.83,.85]){const E=new hn(new fo(.31,.31,.19,12),r);E.rotation.z=Math.PI/2,E.position.set(h,.38,g),t.add(E);const T=new hn(new fo(.13,.13,.2,10),rn("hub","#92958d",.3,.7));T.rotation.z=Math.PI/2,T.position.set(h*1.03,.38,g),t.add(T)}const _=new ba({color:"#fff0cd"});for(const h of[-.46,.46]){const g=new hn(new si(.27,.12,.04),_);g.position.set(h,.63,-1.37),t.add(g);const E=new hn(new si(.27,.12,.04),new ba({color:"#d34d3d"}));E.position.set(h,.65,1.37),t.add(E)}if(e){const h=new qA("#ffb365",.8,7);h.position.set(0,1.4,-1),t.add(h)}return t}const gn=um("#c67d4e",!0);gn.position.set(0,.05,2);Hn.add(gn);const Gr=um("#d6d1bc");Hn.add(Gr);const _f=new ds,mf=new hn(new wu(.74,.08,8,28),new ba({color:"#ffd36e"}));mf.rotation.x=Math.PI/2;mf.position.y=2.7;_f.add(mf);const fm=new hn(new Is(.22,.5,4),new ba({color:"#ffd36e"}));fm.position.y=2;_f.add(fm);Gr.add(_f);const ls=[[0,0],[0,-4],[4,-4],[8,-4],[8,-8],[12,-8],[16,-12],[20,-16],[24,-18]];let da=0,cs=0,Zw=new We(0,.05,-2);Gr.position.copy(Zw);const mu=xn("#minimap"),Xt=mu.getContext("2d");function Jw(){const n=mu.width,e=mu.height;Xt.clearRect(0,0,n,e),Xt.fillStyle="#1b2926",Xt.fillRect(0,0,n,e);const t=2.65,i=n/2,r=e/2,a=l=>i+(l-gn.position.x)*t,s=l=>r+(l-gn.position.z)*t;Xt.strokeStyle="#59615a",Xt.lineWidth=7;for(const l of[-20,-12,-4,4,12,20])Xt.beginPath(),Xt.moveTo(a(l),0),Xt.lineTo(a(l),e),Xt.stroke();for(const l of[-20,-12,-4,4,12,20])Xt.beginPath(),Xt.moveTo(0,s(l)),Xt.lineTo(n,s(l)),Xt.stroke();Xt.strokeStyle="#d4a976",Xt.lineWidth=2,Xt.beginPath(),xl.forEach(([l,f],_)=>_?Xt.lineTo(a(l),s(f)):Xt.moveTo(a(l),s(f))),Xt.stroke();const o=df.find(l=>l.name==="Vinewood");o&&(Xt.fillStyle="#f6c867",Xt.beginPath(),Xt.arc(a(o.x),s(o.y),5,0,Math.PI*2),Xt.fill()),Xt.fillStyle="#f0d071",Xt.beginPath(),Xt.arc(a(Gr.position.x),s(Gr.position.z),5,0,Math.PI*2),Xt.fill(),Xt.save(),Xt.translate(i,r),Xt.rotate(gn.rotation.y),Xt.fillStyle="#f2eee0",Xt.beginPath(),Xt.moveTo(0,-8),Xt.lineTo(5,6),Xt.lineTo(0,3),Xt.lineTo(-5,6),Xt.closePath(),Xt.fill(),Xt.restore()}const Xi=new Set;let Xr=!1,mr=!1,bo=!1,Mi=0,_s=0,Nd=performance.now(),Id=0,Qw=0,hl=0;const ms={gas:!1,brake:!1,left:!1,right:!1},dl=iu.clamp,gu=(n,e)=>{xn("#toast-title").textContent=n,xn("#toast-text").textContent=e,xn("#toast").classList.add("show"),clearTimeout(gu.timer),gu.timer=setTimeout(()=>xn("#toast").classList.remove("show"),2800)};function hm(){Xr||(Xr=!0,am("iniciarMissao()"),xn("#intro").classList.add("hidden"),xn("#mission-panel").classList.remove("hidden"),xn("#topbar").classList.remove("hidden"),xn("#bottom-hud").classList.remove("hidden"),xn("#minimap-wrap").classList.remove("hidden"),gu("MISSÃO INICIADA","Siga o veículo marcado até Vinewood."))}xn("#start-button").addEventListener("click",hm);xn("#play-again").addEventListener("click",()=>location.reload());xn("#pause-button").addEventListener("click",()=>{!Xr||bo||(mr=!mr,xn("#pause-layer").classList.toggle("hidden",!mr))});xn("#resume-button").addEventListener("click",()=>{mr=!1,xn("#pause-layer").classList.add("hidden")});window.addEventListener("keydown",n=>{const e=n.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e)&&n.preventDefault(),Xi.add(e),e==="escape"&&Xr&&!bo&&(mr=!mr,xn("#pause-layer").classList.toggle("hidden",!mr)),e==="enter"&&!Xr&&hm()});window.addEventListener("keyup",n=>Xi.delete(n.key.toLowerCase()));for(const n of document.querySelectorAll("[data-drive]")){const e=n.dataset.drive,t=r=>{var a;r.preventDefault(),ms[e]=!0,n.classList.add("pressed"),(a=n.setPointerCapture)==null||a.call(n,r.pointerId)},i=r=>{r.preventDefault(),ms[e]=!1,n.classList.remove("pressed")};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("lostpointercapture",i)}function eR(n){if(!Xr||mr||bo)return;const e=Xi.has("w")||Xi.has("arrowup")||ms.gas,t=Xi.has("s")||Xi.has("arrowdown")||ms.brake,i=Xi.has("a")||Xi.has("arrowleft")||ms.left,r=Xi.has("d")||Xi.has("arrowright")||ms.right;e?Mi+=17*n:Mi*=Math.pow(.987,n*60),t&&(Mi-=25*n),Mi=dl(Mi,-7,31);const a=(r?1:0)-(i?1:0);Math.abs(Mi)>.2&&(_s+=a*n*(.82+Math.min(Math.abs(Mi)/15,1.35))*Math.sign(Mi));const s=new We(Math.sin(_s),0,-Math.cos(_s)),o=gn.position.x,l=gn.position.z;gn.position.addScaledVector(s,Mi*n);let f=!1;for(const k of om)if(Math.abs(gn.position.x-k.x)<k.w/2+.82&&Math.abs(gn.position.z-k.z)<k.d/2+.95){f=!0;break}f&&(gn.position.x=o,gn.position.z=l,Mi*=-.19),(Math.abs(gn.position.x)>43||Math.abs(gn.position.z)>39)&&(gn.position.x=dl(gn.position.x,-43,43),gn.position.z=dl(gn.position.z,-39,39),Mi*=.6),gn.rotation.y=_s;const _=ls[da],h=ls[da+1],g=Math.hypot(h[0]-_[0],h[1]-_[1]);cs+=n*(.37/Math.max(g,1)),cs>=1&&(da=Math.min(da+1,ls.length-2),cs=0);const[E,T]=ls[da],[y,x]=ls[da+1];Gr.position.set(iu.lerp(E,y,cs),.05,iu.lerp(T,x,cs)),Gr.rotation.y=Math.atan2(y-E,-(x-T));const p=gn.position.distanceTo(Gr.position);xn("#distance").textContent=Math.max(0,Math.round(p*9))+" m",xn("#distance-fill").style.width=dl(100-p*3.2,4,100)+"%",xn("#speed-value").textContent=String(Math.round(Math.abs(Mi)*5.2)).padStart(2,"0");const W=df.find(k=>k.name==="Vinewood"),F=W?Math.hypot(gn.position.x-W.x,gn.position.z-W.y):99;if(da===ls.length-2&&cs>.88&&F<6&&p<14?hl+=n:hl=Math.max(0,hl-n*.5),hl>1.5){am("definirObjetivoConcluido(true); verificarObjetivo()");const k=Xw();Qw+=k.reward,bo=!0,xn("#win-reward").textContent="$"+k.reward.toLocaleString("en-US"),xn("#victory").classList.remove("hidden")}}function dm(n){requestAnimationFrame(dm);const e=Math.min((n-Nd)/1e3,.05);Nd=n,eR(e),Xr&&!mr&&!bo&&(Id+=e);const t=new We(Math.sin(_s),0,-Math.cos(_s)),i=innerWidth<700,r=i?78:58;Ir.fov!==r&&(Ir.fov=r,Ir.updateProjectionMatrix());const a=gn.position.clone().addScaledVector(t,i?-15:-9.5).add(new We(0,i?22:4.8,0));Ir.position.lerp(a,1-Math.pow(.001,e)),Ir.lookAt(gn.position.clone().addScaledVector(t,i?7:4).add(new We(0,i?1.4:1.2,0))),Xr&&(xn("#clock").textContent=new Date(Id*1e3).toISOString().slice(14,19),Jw()),Gi.render(Hn,Ir)}requestAnimationFrame(dm);window.addEventListener("resize",()=>{Ir.aspect=innerWidth/innerHeight,Ir.updateProjectionMatrix(),Gi.setSize(innerWidth,innerHeight),Gi.setPixelRatio(Math.min(devicePixelRatio,1.65))});
