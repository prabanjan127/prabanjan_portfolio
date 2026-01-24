import{$a as Ar,Aa as Eh,Ba as Sn,Fa as At,Fb as Pr,Gb as yi,Ha as va,Hb as Sa,Ib as Ft,Ja as Qt,Mb as zn,Oa as Tr,Pa as ot,Qa as xe,Ra as _e,Sa as Ge,Ta as xs,Ua as ya,V as yh,Va as ba,W as bh,Xa as Th,Ya as wh,_a as wr,a as Kl,aa as Mh,ab as Dr,b as vh,cb as Ma,db as Cr,eb as Rr,hb as ei,ib as Ae,ja as xa,jb as vi,kb as cn,na as xi,pb as jl,qb as Ah,ra as _s,ta as Sh,ua as Le}from"./chunk-SZNSODTT.js";var Yh=0,Rc=1,Zh=2;var Ws=1,Jh=2,Kr=3,oi=0,Zt=1,Wn=2,Xn=0,nr=1,Pc=2,Ic=3,Fc=4,$h=5,Di=100,Kh=101,jh=102,Qh=103,ed=104,td=200,nd=201,id=202,rd=203,Xa=204,qa=205,sd=206,ad=207,od=208,ld=209,cd=210,ud=211,hd=212,dd=213,fd=214,mo=0,go=1,_o=2,ir=3,xo=4,vo=5,yo=6,bo=7,Lc=0,pd=1,md=2,Nn=0,Nc=1,Uc=2,Oc=3,Bc=4,kc=5,zc=6,Vc=7;var Mc=300,Li=301,lr=302,Mo=303,So=304,Xs=306,Ya=1e3,Gn=1001,Za=1002,Nt=1003,gd=1004;var qs=1005;var Ut=1006,Eo=1007;var Ni=1008;var _n=1009,Gc=1010,Hc=1011,jr=1012,To=1013,Un=1014,On=1015,qn=1016,wo=1017,Ao=1018,Qr=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,An=1023,Hn=1026,Ui=1027,Zc=1028,Do=1029,cr=1030,Co=1031;var Ro=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,Po=35840,Io=35841,Fo=35842,Lo=35843,No=36196,Uo=37492,Oo=37496,Bo=37488,ko=37489,zo=37490,Vo=37491,Go=37808,Ho=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,Jo=37815,$o=37816,Ko=37817,jo=37818,Qo=37819,el=37820,tl=37821,nl=36492,il=36494,rl=36495,sl=36283,al=36284,ol=36285,ll=36286;var Es=2300,Ja=2301,Wa=2302,Sc=2400,Ec=2401,Tc=2402;var _d=3200;var xd=0,vd=1,ui="",dn="srgb",rr="srgb-linear",Ts="linear",Qe="srgb";var er=7680;var wc=519,yd=512,bd=513,Md=514,cl=515,Sd=516,Ed=517,ul=518,Td=519,Ac=35044;var Jc="300 es",Ln=2e3,ws=2001;function $c(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function As(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wd(){let r=As("canvas");return r.style.display="block",r}var Dh={},Xr=null;function Kc(...r){let e="THREE."+r.shift();Xr?Xr("log",e,...r):console.log(e,...r)}function Pe(...r){let e="THREE."+r.shift();Xr?Xr("warn",e,...r):console.warn(e,...r)}function Ce(...r){let e="THREE."+r.shift();Xr?Xr("error",e,...r):console.error(e,...r)}function qr(...r){let e=r.join(" ");e in Dh||(Dh[e]=!0,Pe(...r))}function Ad(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ql=Math.PI/180,$a=180/Math.PI;function Ks(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function He(r,e,t){return Math.max(e,Math.min(t,r))}function bp(r,e){return(r%e+e)%e}function ec(r,e,t){return(1-t)*r+t*e}function vs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function en(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var it=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=l*d+c*f+u*_+h*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);p=Math.sin(p*b)/E,o=Math.sin(o*b)/E,l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new k,Ch=new ci,Ue=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],E=i[4],S=i[7],M=i[2],w=i[5],A=i[8];return s[0]=a*g+o*b+l*M,s[3]=a*m+o*E+l*w,s[6]=a*p+o*S+l*A,s[1]=c*g+u*b+h*M,s[4]=c*m+u*E+h*w,s[7]=c*p+u*S+h*A,s[2]=d*g+f*b+_*M,s[5]=d*m+f*E+_*w,s[8]=d*p+f*S+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nc.makeScale(e,t)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nc=new Ue,Rh=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let r={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Ts:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[rr]:{primaries:e,whitePoint:n,transfer:Ts,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}var Xe=Mp();function ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ir,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=As("canvas")),Ir.width=e.width,Ir.height=e.height;let i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=As("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sp=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ic(i[a].image)):s.push(ic(i[a]))}else s=ic(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ic(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ka.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Ep=0,rc=new k,hi=(()=>{class r extends li{constructor(t=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=Gn,s=Gn,a=Ut,o=Ni,l=An,c=_n,u=r.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ks(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=Mc,r.DEFAULT_ANISOTROPY=1,r})(),yt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(f+1)/2,M=(p+1)/2,w=(u+d)/4,A=(h+g)/4,C=(_+m)/4;return E>S&&E>M?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=A/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=C/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new hi(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ds=class extends hi{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends hi{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Ta.subVectors(this.max,ys),Fr.subVectors(e.a,ys),Lr.subVectors(e.b,ys),Nr.subVectors(e.c,ys),bi.subVectors(Lr,Fr),Mi.subVectors(Nr,Lr),$i.subVectors(Fr,Nr);let t=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!sc(t,Fr,Lr,Nr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Fr,Lr,Nr,Ta))?!1:(wa.crossVectors(bi,Mi),t=[wa.x,wa.y,wa.z],sc(t,Fr,Lr,Nr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new k,new k,new k,new k,new k,new k,new k,new k],Pn=new k,Ea=new Ci,Fr=new k,Lr=new k,Nr=new k,bi=new k,Mi=new k,$i=new k,ys=new k,Ta=new k,wa=new k,Ki=new k;function sc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ki.fromArray(r,s);let o=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tp=new Ci,bs=new k,ac=new k,sr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(ac)),this.expandByPoint(bs.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ni=new k,oc=new k,Aa=new k,Si=new k,lc=new k,Da=new k,cc=new k,Cs=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(oc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Si.dot(this.direction),l=-Si.dot(Aa),c=Si.lengthSq(),u=Math.abs(1-a*a),h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){let g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(oc).addScaledVector(Aa,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),i=ni.dot(ni)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,s){lc.subVectors(t,e),Da.subVectors(n,e),cc.crossVectors(lc,Da);let a=this.direction.dot(cc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);let l=o*this.direction.dot(Da.crossVectors(Si,Da));if(l<0)return null;let c=o*this.direction.dot(lc.cross(Si));if(c<0||l+c>a)return null;let u=-o*Si.dot(cc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class r{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Ap)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ei.crossVectors(n,un),Ei.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ei.crossVectors(n,un)),Ei.normalize(),Ca.crossVectors(un,Ei),i[0]=Ei.x,i[4]=Ca.x,i[8]=un.x,i[1]=Ei.y,i[5]=Ca.y,i[9]=un.y,i[2]=Ei.z,i[6]=Ca.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],E=n[7],S=n[11],M=n[15],w=i[0],A=i[4],C=i[8],x=i[12],T=i[1],R=i[5],B=i[9],N=i[13],W=i[2],H=i[6],V=i[10],O=i[14],Z=i[3],oe=i[7],te=i[11],ce=i[15];return s[0]=a*w+o*T+l*W+c*Z,s[4]=a*A+o*R+l*H+c*oe,s[8]=a*C+o*B+l*V+c*te,s[12]=a*x+o*N+l*O+c*ce,s[1]=u*w+h*T+d*W+f*Z,s[5]=u*A+h*R+d*H+f*oe,s[9]=u*C+h*B+d*V+f*te,s[13]=u*x+h*N+d*O+f*ce,s[2]=_*w+g*T+m*W+p*Z,s[6]=_*A+g*R+m*H+p*oe,s[10]=_*C+g*B+m*V+p*te,s[14]=_*x+g*N+m*O+p*ce,s[3]=b*w+E*T+S*W+M*Z,s[7]=b*A+E*R+S*H+M*oe,s[11]=b*C+E*B+S*V+M*te,s[15]=b*x+E*N+S*O+M*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],b=l*f-c*d,E=o*f-c*h,S=o*d-l*h,M=a*f-c*u,w=a*d-l*u,A=a*h-o*u;return t*(g*b-m*E+p*S)-n*(_*b-m*M+p*w)+i*(_*E-g*M+p*A)-s*(_*S-g*w+m*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,E=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,S=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,M=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,w=t*b+n*E+i*S+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=b*A,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=E*A,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=S*A,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*A,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*A,e[12]=M*A,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*A,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,b=l*c,E=l*u,S=l*h,M=n.x,w=n.y,A=n.z;return i[0]=(1-(g+p))*M,i[1]=(f+S)*M,i[2]=(_-E)*M,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(_+E)*A,i[9]=(m-b)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ur.set(i[0],i[1],i[2]).length(),a=Ur.set(i[4],i[5],i[6]).length(),o=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),In.copy(this);let c=1/s,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ln,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),_,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ln)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ws)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ln,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),_,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ln)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===ws)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ur=new k,In=new St,wp=new k(0,0,0),Ap=new k(1,1,1),Ei=new k,Ca=new k,un=new k,Ih=new St,Fh=new ci,ar=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],o=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],f=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,_),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,Lh=new k,Or=new ci,ii=new St,Ra=new k,Ms=new k,Cp=new k,Rp=new ci,Nh=new k(1,0,0),Uh=new k(0,1,0),Oh=new k(0,0,1),Bh={type:"added"},Pp={type:"removed"},Br={type:"childadded",child:null},uc={type:"childremoved",child:null},Oi=(()=>{class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,n=new ar,i=new ci,s=new k(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ue}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Or.setFromAxisAngle(t,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,n){return Or.setFromAxisAngle(t,n),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,n){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ra.copy(t):Ra.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ms,Ra,this.up):ii.lookAt(Ra,Ms,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),Br.child=t,this.dispatchEvent(Br),Br.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Pp),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>vh(Kl({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Kl({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(a(t.materials,this.material[c]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(t.animations,c))}}if(n){let l=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new k(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),Fn=new k,ri=new k,hc=new k,si=new k,kr=new k,zr=new k,kh=new k,dc=new k,fc=new k,pc=new k,mc=new yt,gc=new yt,_c=new yt,Ai=class r{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fn.subVectors(i,t),ri.subVectors(n,t),hc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ri),l=Fn.dot(hc),c=ri.dot(ri),u=ri.dot(hc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return mc.setScalar(0),gc.setScalar(0),_c.setScalar(0),mc.fromBufferAttribute(e,t),gc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(mc,s.x),a.addScaledVector(gc,s.y),a.addScaledVector(_c,s.z),a}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),ri.subVectors(e,t),Fn.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Fn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;kr.subVectors(i,n),zr.subVectors(s,n),dc.subVectors(e,n);let l=kr.dot(dc),c=zr.dot(dc);if(l<=0&&c<=0)return t.copy(n);fc.subVectors(e,i);let u=kr.dot(fc),h=zr.dot(fc);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(kr,a);pc.subVectors(e,s);let f=kr.dot(pc),_=zr.dot(pc);if(_>=0&&f<=_)return t.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(zr,o);let m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return kh.subVectors(s,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(kh,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(kr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function xc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=bp(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xc(a,s,e+1/3),this.g=xc(a,s,e),this.b=xc(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Xe.workingToColorSpace(Vt.copy(this),e),Math.round(He(Vt.r*255,0,255))*65536+Math.round(He(Vt.g*255,0,255))*256+Math.round(He(Vt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=dn){Xe.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,i=Vt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Pa);let n=ec(Ti.h,Pa.h,t),i=ec(Ti.s,Pa.s,t),s=ec(Ti.l,Pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ke;Ke.NAMES=Dd;var Ip=0,Ri=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=nr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ps=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new k,Ia=new it,Fp=0,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}};var Is=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fs=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tn=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lp=0,En=new St,vc=new Oi,Vr=new k,hn=new Ci,Ss=new Ci,Lt=new k,pn=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Fs:Is)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(hn.min,Ss.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,Ss.max),hn.expandByPoint(Lt)):(hn.expandByPoint(Ss.min),hn.expandByPoint(Ss.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),Lt.add(Vr)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;let c=new k,u=new k,h=new k,d=new it,f=new it,_=new it,g=new k,m=new k;function p(C,x,T){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,T),u.sub(c),h.sub(c),f.sub(d),_.sub(d);let R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(R),o[C].add(g),o[x].add(g),o[T].add(g),l[C].add(m),l[x].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,x=b.length;C<x;++C){let T=b[C],R=T.start,B=T.count;for(let N=R,W=R+B;N<W;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new k,S=new k,M=new k,w=new k;function A(C){M.fromBufferAttribute(i,C),w.copy(M);let x=o[C];E.copy(x),E.sub(M.multiplyScalar(M.dot(x))).normalize(),S.crossVectors(w,x);let R=S.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,x=b.length;C<x;++C){let T=b[C],R=T.start,B=T.count;for(let N=R,W=R+B;N<W;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Yt(d,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zh=new St,ji=new Cs,Fa=new sr,Vh=new k,La=new k,Na=new k,Ua=new k,yc=new k,Oa=new k,Gh=new k,Ba=new k,wn=class extends Oi{constructor(e=new pn,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(yc.fromBufferAttribute(h,e),a?Oa.addScaledVector(yc,u):Oa.addScaledVector(yc.sub(t),u))}t.add(Oa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Fa.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Fa,Vh)===null||ji.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(zh.copy(s).invert(),ji.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,M=E;S<M;S+=3){let w=o.getX(S),A=o.getX(S+1),C=o.getX(S+2);i=ka(this,p,e,n,c,u,h,w,A,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let b=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);i=ka(this,a,e,n,c,u,h,b,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,M=E;S<M;S+=3){let w=S,A=S+1,C=S+2;i=ka(this,p,e,n,c,u,h,w,A,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let b=m,E=m+1,S=m+2;i=ka(this,a,e,n,c,u,h,b,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Np(r,e,t,n,i,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===oi,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:r}}function ka(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,La),r.getVertexPosition(l,Na),r.getVertexPosition(c,Ua);let u=Np(r,e,t,n,La,Na,Ua,Gh);if(u){let h=new k;Ai.getBarycoord(Gh,La,Na,Ua,h),i&&(u.uv=Ai.getInterpolatedAttribute(i,o,l,c,h,new it)),s&&(u.uv1=Ai.getInterpolatedAttribute(s,o,l,c,h,new it)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Ai.getNormal(La,Na,Ua,d.normal),u.face=d,u.barycoord=h}return u}var Zr=class r extends pn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(h,2));function _(g,m,p,b,E,S,M,w,A,C,x){let T=S/A,R=M/C,B=S/2,N=M/2,W=w/2,H=A+1,V=C+1,O=0,Z=0,oe=new k;for(let te=0;te<V;te++){let ce=te*R-N;for(let Ie=0;Ie<H;Ie++){let Ne=Ie*T-B;oe[g]=Ne*b,oe[m]=ce*E,oe[p]=W,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ie/A),h.push(1-te/C),O+=1}}for(let te=0;te<C;te++)for(let ce=0;ce<A;ce++){let Ie=d+ce+H*te,Ne=d+ce+H*(te+1),qe=d+(ce+1)+H*(te+1),Ye=d+(ce+1)+H*te;l.push(Ie,Ne,Ye),l.push(Ne,qe,Ye),Z+=6}o.addGroup(f,Z,x),f+=Z,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ur(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){let e={};for(let t=0;t<r.length;t++){let n=ur(r[t]);for(let i in n)e[i]=n[i]}return e}function Up(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Cd={clone:ur,merge:Ht},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ls=class extends Oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new k,Hh=new it,Wh=new it,Gt=class extends Ls{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Wh),t.subVectors(Wh,Hh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gr=-90,Hr=1,eo=class extends Oi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gt(Gr,Hr,e,t);i.layers=this.layers,this.add(i);let s=new Gt(Gr,Hr,e,t);s.layers=this.layers,this.add(s);let a=new Gt(Gr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Gr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Gr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Gr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ns=class extends hi{constructor(e=[],t=Li,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Us=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ns(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Xn});s.uniforms.tEquirect.value=t;let a=new wn(i,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Ut),new eo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},tr=class extends Oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},kp={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Os=class extends Oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var to=class extends hi{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Nt,u=Nt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bc=new k,zp=new k,Vp=new Ue,Vn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=bc.subVectors(n,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vp.getNormalMatrix(e),i=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new sr,Gp=new it(.5,.5),za=new k,Bs=class{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,s=new Vn,a=new Vn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],b=s[12],E=s[13],S=s[14],M=s[15];if(i[0].setComponents(c-a,f-u,p-_,M-b).normalize(),i[1].setComponents(c+a,f+u,p+_,M+b).normalize(),i[2].setComponents(c+o,f+h,p+g,M+E).normalize(),i[3].setComponents(c-o,f-h,p-g,M-E).normalize(),n)i[4].setComponents(l,d,m,S).normalize(),i[5].setComponents(c-l,f-d,p-m,M-S).normalize();else if(i[4].setComponents(c-l,f-d,p-m,M-S).normalize(),t===Ln)i[5].setComponents(c+l,f+d,p+m,M+S).normalize();else if(t===ws)i[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=Gp.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(za.x=i.normal.x>0?e.max.x:e.min.x,za.y=i.normal.y>0?e.max.y:e.min.y,za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xh=new St,Dc=new Cs,Va=new sr,Ga=new k,ks=class extends Oi{constructor(e=new pn,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Xh.copy(i).invert(),Dc.copy(e.ray).applyMatrix4(Xh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Ga.fromBufferAttribute(h,m),qh(Ga,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Ga.fromBufferAttribute(h,_),qh(Ga,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function qh(r,e,t,n,i,s,a){let o=Dc.distanceSqToPoint(r);if(o<t){let l=new k;Dc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pi=class extends hi{constructor(e,t,n=Un,i,s,a,o=Nt,l=Nt,c,u=Hn,h=1){if(u!==Hn&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},no=class extends Pi{constructor(e,t=Un,n=Li,i,s,a=Nt,o=Nt,l,c=Hn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends hi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vs=class r extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let b=p*d-a;for(let E=0;E<c;E++){let S=E*h-s;_.push(S,-b,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let E=b+c*p,S=b+c*(p+1),M=b+1+c*(p+1),w=b+1+c*p;f.push(E,S,w),f.push(S,M,w)}this.setIndex(f),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var io=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ro=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ha(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var or=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends or{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:s=e,o=2*t-n;break;case Tc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case Tc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,b=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,E=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let M=0;M!==o;++M)s[M]=p*a[u+M]+b*a[c+M]+E*a[l+M]+S*a[h+M];return s}},oo=class extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},lo=class extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Ja:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&yp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ja;var Ii=class extends gn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Es;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};co.prototype.ValueTypeName="color";var uo=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="number";var ho=class extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)ci.slerpFlat(s,0,a,c-o,a,c,l);return s}},Gs=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends gn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Es;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};fo.prototype.ValueTypeName="vector";var Hs=class extends Ls{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var po=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qc="\\[\\]\\.:\\/",Hp=new RegExp("["+Qc+"]","g"),eu="[^"+Qc+"]",Wp="[^"+Qc.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",eu),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let n=Jp.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);$p.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=n.nodeName;Ce("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=Cc,r})();vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);function tu(r,e,t,n){let i=Kp(n);switch(t){case qc:return r*e;case Zc:return r*e/i.components*i.byteLength;case Do:return r*e/i.components*i.byteLength;case cr:return r*e*2/i.components*i.byteLength;case Co:return r*e*2/i.components*i.byteLength;case Yc:return r*e*3/i.components*i.byteLength;case An:return r*e*4/i.components*i.byteLength;case Ro:return r*e*4/i.components*i.byteLength;case Ys:case Zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Io:case Lo:return Math.max(r,16)*Math.max(e,8)/4;case Po:case Fo:return Math.max(r,8)*Math.max(e,8)/2;case No:case Uo:case Bo:case ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oo:case zo:case Vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case rl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sl:case al:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ol:case ll:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(r){switch(r){case _n:case Gc:return{byteLength:1,components:1};case jr:case Hc:case qn:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case Un:case To:case On:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function jd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qp(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){let _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){let g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,pm=`#ifdef USE_BUMPMAP
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,p0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,m0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,x0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,v0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,M0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,S0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,E0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,T0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,A0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,D0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,P0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,I0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Be={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:rm,alphatest_pars_fragment:sm,aomap_fragment:am,aomap_pars_fragment:om,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:um,beginnormal_vertex:hm,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:ym,color_pars_vertex:bm,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:wm,displacementmap_vertex:Am,emissivemap_fragment:Dm,emissivemap_pars_fragment:Cm,colorspace_fragment:Rm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Lm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:qm,envmap_vertex:Um,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:km,fog_pars_fragment:zm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:Jm,lights_phong_pars_fragment:$m,lights_physical_fragment:Km,lights_physical_pars_fragment:jm,lights_fragment_begin:Qm,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:sg,map_fragment:ag,map_pars_fragment:og,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:yg,normal_vertex:bg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:wg,opaque_fragment:Ag,packing:Dg,premultiplied_alpha_fragment:Cg,project_vertex:Rg,dithering_fragment:Pg,dithering_pars_fragment:Ig,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Og,shadowmask_pars_fragment:Bg,skinbase_vertex:kg,skinning_pars_vertex:zg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Hg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Jg,uv_pars_vertex:$g,uv_vertex:Kg,worldpos_vertex:jg,background_vert:Qg,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:r0,depth_vert:s0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:u0,linedashed_vert:h0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:x0,meshnormal_vert:v0,meshnormal_frag:y0,meshphong_vert:b0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:w0,points_vert:A0,points_frag:D0,shadow_vert:C0,shadow_frag:R0,sprite_vert:P0,sprite_frag:I0},le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Zn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:Ht([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var hl={r:0,b:0,g:0},hr=new ar,F0=new St;function L0(r,e,t,n,i,s,a){let o=new Ke(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function g(E){let S=!1,M=_(E);M===null?p(o,l):M&&M.isColor&&(p(M,1),S=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,S){let M=_(S);M&&(M.isCubeTexture||M.mapping===Xs)?(u===void 0&&(u=new wn(new Zr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ur(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hr.copy(S.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(hr)),u.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Qe,(h!==M||d!==M.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wn(new Vs(2,2),new mn({name:"BackgroundMaterial",uniforms:ur(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(hl,jc(r)),n.buffers.color.setClear(hl.r,hl.g,hl.b,S,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:g,addToRenderList:m,dispose:b}}function N0(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(T,R,B,N,W){let H=!1,V=h(N,B,R);s!==V&&(s=V,c(s.object)),H=f(T,N,B,W),H&&_(T,N,B,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(T,R,B,N),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,R,B){let N=B.wireframe===!0,W=n[T.id];W===void 0&&(W={},n[T.id]=W);let H=W[R.id];H===void 0&&(H={},W[R.id]=H);let V=H[N];return V===void 0&&(V=d(l()),H[N]=V),V}function d(T){let R=[],B=[],N=[];for(let W=0;W<t;W++)R[W]=0,B[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:N,object:T,attributes:{},index:null}}function f(T,R,B,N){let W=s.attributes,H=R.attributes,V=0,O=B.getAttributes();for(let Z in O)if(O[Z].location>=0){let te=W[Z],ce=H[Z];if(ce===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function _(T,R,B,N){let W={},H=R.attributes,V=0,O=B.getAttributes();for(let Z in O)if(O[Z].location>=0){let te=H[Z];te===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));let ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),W[Z]=ce,V++}s.attributes=W,s.attributesNum=V,s.index=N}function g(){let T=s.newAttributes;for(let R=0,B=T.length;R<B;R++)T[R]=0}function m(T){p(T,0)}function p(T,R){let B=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;B[T]=1,N[T]===0&&(r.enableVertexAttribArray(T),N[T]=1),W[T]!==R&&(r.vertexAttribDivisor(T,R),W[T]=R)}function b(){let T=s.newAttributes,R=s.enabledAttributes;for(let B=0,N=R.length;B<N;B++)R[B]!==T[B]&&(r.disableVertexAttribArray(B),R[B]=0)}function E(T,R,B,N,W,H,V){V===!0?r.vertexAttribIPointer(T,R,B,W,H):r.vertexAttribPointer(T,R,B,N,W,H)}function S(T,R,B,N){g();let W=N.attributes,H=B.getAttributes(),V=R.defaultAttributeValues;for(let O in H){let Z=H[O];if(Z.location>=0){let oe=W[O];if(oe===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),oe!==void 0){let te=oe.normalized,ce=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;let Ne=Ie.buffer,qe=Ie.type,Ye=Ie.bytesPerElement,Y=qe===r.INT||qe===r.UNSIGNED_INT||oe.gpuType===To;if(oe.isInterleavedBufferAttribute){let K=oe.data,pe=K.stride,Oe=oe.offset;if(K.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)p(Z.location+ve,K.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<Z.locationSize;ve++)m(Z.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ve=0;ve<Z.locationSize;ve++)E(Z.location+ve,ce/Z.locationSize,qe,te,pe*Ye,(Oe+ce/Z.locationSize*ve)*Ye,Y)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<Z.locationSize;K++)p(Z.location+K,oe.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<Z.locationSize;K++)m(Z.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let K=0;K<Z.locationSize;K++)E(Z.location+K,ce/Z.locationSize,qe,te,ce*Ye,ce/Z.locationSize*K*Ye,Y)}}else if(V!==void 0){let te=V[O];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Z.location,te);break;case 3:r.vertexAttrib3fv(Z.location,te);break;case 4:r.vertexAttrib4fv(Z.location,te);break;default:r.vertexAttrib1fv(Z.location,te)}}}}b()}function M(){C();for(let T in n){let R=n[T];for(let B in R){let N=R[B];for(let W in N)u(N[W].object),delete N[W];delete R[B]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let R=n[T.id];for(let B in R){let N=R[B];for(let W in N)u(N[W].object),delete N[W];delete R[B]}delete n[T.id]}function A(T){for(let R in n){let B=n[R];if(B[T.id]===void 0)continue;let N=B[T.id];for(let W in N)u(N[W].object),delete N[W];delete B[T.id]}}function C(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function U0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function O0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==An&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,maxSamples:M,samples:w}}function B0(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Vn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{let b=s?0:n,E=b*4,S=p.clippingState||null;l.value=S,S=u(_,d,E,f);for(let M=0;M!==E;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==g;++E,S+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function k0(r){let e=new WeakMap;function t(a,o){return o===Mo?a.mapping=Li:o===So&&(a.mapping=lr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mo||o===So)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Us(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Bi=4,Rd=[.125,.215,.35,.446,.526,.582],fr=20,z0=256,js=new Hs,Pd=new Ke,nu=null,iu=0,ru=0,su=!1,V0=new k,fl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=V0}=s;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,ru),this._renderer.xr.enabled=su,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:qn,format:An,colorSpace:rr,depthBuffer:!1},i=Id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G0(s)),this._blurMaterial=W0(s,e,t),this._ggxMaterial=H0(s,e,t)}return i}_compileMaterial(e){let t=new wn(new pn,e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,i,s){let l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pd),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Zr,new Ps({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Pd),p=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));let M=this._cubeSize;es(i,S*M,E>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Li||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,js)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Bi?n-_+Bi:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,es(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,es(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,js)}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[i];h.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):fr;m>fr&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let p=[],b=0;for(let A=0;A<fr;++A){let C=A/g,x=Math.exp(-C*C/2);p.push(x),A===0?b+=x:A<m&&(b+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;let S=this._sizeLods[i],M=3*S*(i>E-Bi?i-E+Bi:0),w=4*(this._cubeSize-S);es(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(h,js)}};function G0(r){let e=[],t=[],n=[],i=r,s=r-Bi+1+Rd.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Bi?l=Rd[a-r+Bi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*f),E=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,C=w>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(x,g*_*w),E.set(d,m*_*w);let T=[w,w,w,w,w,w];S.set(T,p*_*w)}let M=new pn;M.setAttribute("position",new Yt(b,g)),M.setAttribute("uv",new Yt(E,m)),M.setAttribute("faceIndex",new Yt(S,p)),n.push(new wn(M,null)),i>Bi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Id(r,e,t){let n=new fn(r,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function H0(r,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function W0(r,e,t){let n=new Float32Array(fr),i=new k(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Fd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ld(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function X0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Mo||l===So,u=l===Li||l===lr;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new fl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new fl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function q0(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&qr("WebGLRenderer: "+n+" extension not supported."),i}}}function Y0(r,e,t,n){let i={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,_=h.attributes.position,g=0;if(f!==null){let b=f.array;g=f.version;for(let E=0,S=b.length;E<S;E+=3){let M=b[E+0],w=b[E+1],A=b[E+2];d.push(M,w,w,A,A,M)}}else if(_!==void 0){let b=_.array;g=_.version;for(let E=0,S=b.length/3-1;E<S;E+=3){let M=E+0,w=E+1,A=E+2;d.push(M,w,w,A,A,M)}}else return;let m=new($c(d)?Fs:Is)(d,1);m.version=g;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Z0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=f[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function J0(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $0(r,e,t){let n=new WeakMap,i=new yt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let M=o.attributes.position.count*S,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*w*4*h),C=new Ds(A,M,w,h);C.type=On,C.needsUpdate=!0;let x=S*4;for(let R=0;R<h;R++){let B=p[R],N=b[R],W=E[R],H=M*w*4*R;for(let V=0;V<B.count;V++){let O=V*x;_===!0&&(i.fromBufferAttribute(B,V),A[H+O+0]=i.x,A[H+O+1]=i.y,A[H+O+2]=i.z,A[H+O+3]=0),g===!0&&(i.fromBufferAttribute(N,V),A[H+O+4]=i.x,A[H+O+5]=i.y,A[H+O+6]=i.z,A[H+O+7]=0),m===!0&&(i.fromBufferAttribute(W,V),A[H+O+8]=i.x,A[H+O+9]=i.y,A[H+O+10]=i.z,A[H+O+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new it(M,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function K0(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var j0={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function Q0(r,e,t,n,i){let s=new fn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new fn(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new pn;o.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let l=new io({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wn(o,l),u=new Hs(-1,1,1,-1,0,1),h=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(b,E){s.setSize(b,E),a.setSize(b,E);for(let S=0;S<m.length;S++){let M=m[S];M.setSize&&M.setSize(b,E)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;let E=s.width,S=s.height;for(let M=0;M<m.length;M++){let w=m[M];w.setSize&&w.setSize(E,S)}},this.begin=function(b,E){if(f||b.toneMapping===Nn&&m.length===0)return!1;if(g=E,E!==null){let S=E.width,M=E.height;(s.width!==S||s.height!==M)&&this.setSize(S,M)}return p===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=Nn,!0},this.hasRenderPass=function(){return p},this.end=function(b,E){b.toneMapping=_,f=!0;let S=s,M=a;for(let w=0;w<m.length;w++){let A=m[w];if(A.enabled!==!1&&(A.render(b,M,S,E),A.needsSwap!==!1)){let C=S;S=M,M=C}}if(h!==b.outputColorSpace||d!==b.toneMapping){h=b.outputColorSpace,d=b.toneMapping,l.defines={},Xe.getTransfer(h)===Qe&&(l.defines.SRGB_TRANSFER="");let w=j0[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Qd=new hi,lu=new Pi(1,1),ef=new Ds,tf=new Qa,nf=new Ns,Nd=[],Ud=[],Od=new Float32Array(16),Bd=new Float32Array(9),kd=new Float32Array(4);function ns(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Nd[i];if(s===void 0&&(s=new Float32Array(i),Nd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gl(r,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function e_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function t_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function n_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function i_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function r_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;kd.set(n),r.uniformMatrix2fv(this.addr,!1,kd),Rt(t,n)}}function s_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Bd.set(n),r.uniformMatrix3fv(this.addr,!1,Bd),Rt(t,n)}}function a_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Od.set(n),r.uniformMatrix4fv(this.addr,!1,Od),Rt(t,n)}}function o_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function l_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function c_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function u_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function h_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function d_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function f_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function p_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function m_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(lu.compareFunction=t.isReversedDepthBuffer()?ul:cl,s=lu):s=Qd,t.setTexture2D(e||s,i)}function g_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tf,i)}function __(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nf,i)}function x_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ef,i)}function v_(r){switch(r){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return r_;case 35675:return s_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(r,e){r.uniform1fv(this.addr,e)}function b_(r,e){let t=ns(e,this.size,2);r.uniform2fv(this.addr,t)}function M_(r,e){let t=ns(e,this.size,3);r.uniform3fv(this.addr,t)}function S_(r,e){let t=ns(e,this.size,4);r.uniform4fv(this.addr,t)}function E_(r,e){let t=ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T_(r,e){let t=ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function w_(r,e){let t=ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function A_(r,e){r.uniform1iv(this.addr,e)}function D_(r,e){r.uniform2iv(this.addr,e)}function C_(r,e){r.uniform3iv(this.addr,e)}function R_(r,e){r.uniform4iv(this.addr,e)}function P_(r,e){r.uniform1uiv(this.addr,e)}function I_(r,e){r.uniform2uiv(this.addr,e)}function F_(r,e){r.uniform3uiv(this.addr,e)}function L_(r,e){r.uniform4uiv(this.addr,e)}function N_(r,e,t){let n=this.cache,i=e.length,s=gl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lu:a=Qd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function U_(r,e,t){let n=this.cache,i=e.length,s=gl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tf,s[a])}function O_(r,e,t){let n=this.cache,i=e.length,s=gl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||nf,s[a])}function B_(r,e,t){let n=this.cache,i=e.length,s=gl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ef,s[a])}function k_(r){switch(r){case 5126:return y_;case 35664:return b_;case 35665:return M_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return w_;case 5124:case 35670:return A_;case 35667:case 35671:return D_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return I_;case 36295:return F_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},au=/(\w+)(\])?(\[|\.)?/g;function zd(r,e){r.seq.push(e),r.map[e.id]=e}function z_(r,e,t){let n=r.name,i=n.length;for(au.lastIndex=0;;){let s=au.exec(n),a=au.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zd(t,c===void 0?new cu(o,r,e):new uu(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new hu(o),zd(t,h)),t=h}}}var ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);z_(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Vd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var V_=37297,G_=0;function H_(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gd=new Ue;function W_(r){Xe._getMatrix(Gd,Xe.workingColorSpace,r);let e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Ts:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+H_(r.getShaderSource(e),o)}else return s}function X_(r,e){let t=W_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var q_={[Nc]:"Linear",[Uc]:"Reinhard",[Oc]:"Cineon",[Bc]:"ACESFilmic",[zc]:"AgX",[Vc]:"Neutral",[kc]:"Custom"};function Y_(r,e){let t=q_[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dl=new k;function Z_(){Xe.getLuminanceCoefficients(dl);let r=dl.x.toFixed(4),e=dl.y.toFixed(4),t=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function $_(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ea(r){return r!==""}function Wd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(r){return r.replace(j_,ex)}var Q_=new Map;function ex(r,e){let t=Be[e];if(t===void 0){let n=Q_.get(e);if(n!==void 0)t=Be[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}var tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(r){return r.replace(tx,nx)}function nx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ix={[Ws]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function rx(r){return ix[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sx={[Li]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE_UV"};function ax(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":sx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var ox={[lr]:"ENVMAP_MODE_REFRACTION"};function lx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cx={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function ux(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cx[r.combine]||"ENVMAP_BLENDING_NONE"}function hx(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dx(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rx(t),c=ax(t),u=lx(t),h=ux(t),d=hx(t),f=J_(t),_=$_(s),g=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=du(a),a=Wd(a,t),a=Xd(a,t),o=du(o),o=Wd(o,t),o=Xd(o,t),a=qd(a),o=qd(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=b+m+a,S=b+p+o,M=Vd(i,i.VERTEX_SHADER,E),w=Vd(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(R){if(r.debug.checkShaderErrors){let B=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(M)||"",W=i.getShaderInfoLog(w)||"",H=B.trim(),V=N.trim(),O=W.trim(),Z=!0,oe=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,w);else{let te=Hd(i,M,"vertex"),ce=Hd(i,w,"fragment");Ce("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+te+`
`+ce)}else H!==""?Pe("WebGLProgram: Program Info Log:",H):(V===""||O==="")&&(oe=!1);oe&&(R.diagnostics={runnable:Z,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(M),i.deleteShader(w),C=new ts(i,g),x=K_(i,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,V_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}var fx=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}};function px(r,e,t,n,i,s,a){let o=new Rs,l=new fu,c=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,R,B,N){let W=B.fog,H=N.geometry,V=x.isMeshStandardMaterial?B.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Z=O&&O.mapping===Xs?O.image.height:null,oe=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=te!==void 0?te.length:0,Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let Ne,qe,Ye,Y;if(oe){let tt=Zn[oe];Ne=tt.vertexShader,qe=tt.fragmentShader}else Ne=x.vertexShader,qe=x.fragmentShader,l.update(x),Ye=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);let K=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,Je=!!x.map,It=!!x.matcap,Ze=!!O,et=!!x.aoMap,st=!!x.lightMap,ke=!!x.bumpMap,Tt=!!x.normalMap,P=!!x.displacementMap,wt=!!x.emissiveMap,je=!!x.metalnessMap,ut=!!x.roughnessMap,be=x.anisotropy>0,D=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,X=be&&!!x.anisotropyMap,Se=D&&!!x.clearcoatMap,ie=D&&!!x.clearcoatNormalMap,ye=D&&!!x.clearcoatRoughnessMap,Re=F&&!!x.iridescenceMap,Q=F&&!!x.iridescenceThicknessMap,se=q&&!!x.sheenColorMap,ge=q&&!!x.sheenRoughnessMap,Me=!!x.specularMap,re=!!x.specularColorMap,ze=!!x.specularIntensityMap,I=$&&!!x.transmissionMap,he=$&&!!x.thicknessMap,ee=!!x.gradientMap,de=!!x.alphaMap,j=x.alphaTest>0,J=!!x.alphaHash,ne=!!x.extensions,Fe=Nn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Fe=r.toneMapping);let ht={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:qe,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:rr,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:It,envMap:Ze,envMapMode:Ze&&O.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:st,bumpMap:ke,normalMap:Tt,displacementMap:P,emissiveMap:wt,normalMapObjectSpace:Tt&&x.normalMapType===vd,normalMapTangentSpace:Tt&&x.normalMapType===xd,metalnessMap:je,roughnessMap:ut,anisotropy:be,anisotropyMap:X,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ye,dispersion:v,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:se,sheenRoughnessMap:ge,specularMap:Me,specularColorMap:re,specularIntensityMap:ze,transmission:$,transmissionMap:I,thicknessMap:he,gradientMap:ee,opaque:x.transparent===!1&&x.blending===nr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:J,combine:x.combine,mapUv:Je&&g(x.map.channel),aoMapUv:et&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:ke&&g(x.bumpMap.channel),normalMapUv:Tt&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:wt&&g(x.emissiveMap.channel),metalnessMapUv:je&&g(x.metalnessMap.channel),roughnessMapUv:ut&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:re&&g(x.specularColorMap.channel),specularIntensityMapUv:ze&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:he&&g(x.thicknessMap.channel),alphaMapUv:de&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Tt||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Je||de),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:wt&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(b(T,x),E(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function b(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let T=_[x.type],R;if(T){let B=Zn[T];R=Cd.clone(B.uniforms)}else R=x.uniforms;return R}function M(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new dx(r,T,x,s),u.push(R),h.set(T,R)),R}function w(x){if(--x.usedTimes===0){let T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function mx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function gx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jd(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){let p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){let p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||gx),n.length>1&&n.sort(d||Zd),i.length>1&&i.sort(d||Zd)}function u(){for(let h=e,d=r.length;h<d;h++){let f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function _x(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Jd,r.set(n,[a])):i>=s.length?(a=new Jd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function xx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ke};break;case"SpotLight":t={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function vx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var yx=0;function bx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Mx(r){let e=new xx,t=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new St,a=new St;function o(c){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,b=0,E=0,S=0,M=0,w=0,A=0;c.sort(bx);for(let x=0,T=c.length;x<T;x++){let R=c[x],B=R.color,N=R.intensity,W=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cr?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*N,h+=B.g*N,d+=B.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);A++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,Z=t.get(R);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=V,f++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(B).multiplyScalar(N),V.distance=W,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;let O=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,O.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=O.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=H,S++}g++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(B).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let O=R.shadow,Z=t.get(R);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=V,_++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==S||C.numSpotMaps!==M||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=S,C.numSpotMaps=M,C.numLightProbes=A,n.version=yx++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let E=c[p];if(E.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(E.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function $d(r){let e=new Mx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Sx(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new $d(r),e.set(i,[o])):s>=a.length?(o=new $d(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ax=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Kd=new St,Qs=new k,ou=new k;function Dx(r,e,t){let n=new Bs,i=new it,s=new it,a=new yt,o=new ro,l=new so,c={},u=t.maxTextureSize,h={[oi]:Zt,[Zt]:oi,[Wn]:Wn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new pn;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new wn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Jh&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ws);let x=r.getRenderTarget(),T=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Xn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=p!==this.type;N&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=w.length;W<H;W++){let V=w[W],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Z=O.getFrameExtents();if(i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y)),O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Kr){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new fn(i.x,i.y,{format:cr,type:qn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new Pi(i.x,i.y,On),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Hn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt}else{V.isPointLight?(O.map=new Us(i.x),O.map.depthTexture=new no(i.x,Un)):(O.map=new fn(i.x,i.y),O.map.depthTexture=new Pi(i.x,i.y,Un)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Hn;let te=r.state.buffers.depth.getReversed();this.type===Ws?(O.map.depthTexture.compareFunction=te?ul:cl,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt)}O.camera.updateProjectionMatrix()}let oe=O.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<oe;te++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,te),r.clear();else{te===0&&(r.setRenderTarget(O.map),r.clear());let ce=O.getViewport(te);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),B.viewport(a)}if(V.isPointLight){let ce=O.camera,Ie=O.matrix,Ne=V.distance||ce.far;Ne!==ce.far&&(ce.far=Ne,ce.updateProjectionMatrix()),Qs.setFromMatrixPosition(V.matrixWorld),ce.position.copy(Qs),ou.copy(ce.position),ou.add(wx[te]),ce.up.copy(Ax[te]),ce.lookAt(ou),ce.updateMatrixWorld(),Ie.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Kd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Kd,ce.coordinateSystem,ce.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),S(A,C,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Kr&&b(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,T,R)};function b(w,A){let C=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fn(i.x,i.y,{format:cr,type:qn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,C,f,g,null)}function E(w,A,C,x){let T=null,R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)T=R;else if(T=C.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=T.uuid,N=A.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let H=W[N];H===void 0&&(H=T.clone(),W[N]=H,A.addEventListener("dispose",M)),T=H}if(T.visible=A.visible,T.wireframe=A.wireframe,x===Kr?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let B=r.properties.get(T);B.light=C}return T}function S(w,A,C,x,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Kr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let N=e.update(w),W=w.material;if(Array.isArray(W)){let H=N.groups;for(let V=0,O=H.length;V<O;V++){let Z=H[V],oe=W[Z.materialIndex];if(oe&&oe.visible){let te=E(w,oe,x,T);w.onBeforeShadow(r,w,A,C,N,te,Z),r.renderBufferDirect(C,null,N,te,w,Z),w.onAfterShadow(r,w,A,C,N,te,Z)}}}else if(W.visible){let H=E(w,W,x,T);w.onBeforeShadow(r,w,A,C,N,H,null),r.renderBufferDirect(C,null,N,H,w,null),w.onAfterShadow(r,w,A,C,N,H,null)}}let B=w.children;for(let N=0,W=B.length;N<W;N++)S(B[N],A,C,x,T)}function M(w){w.target.removeEventListener("dispose",M);for(let C in c){let x=c[C],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}var Cx={[mo]:go,[_o]:yo,[xo]:bo,[ir]:vo,[go]:mo,[yo]:_o,[bo]:xo,[vo]:ir};function Rx(r,e){function t(){let I=!1,he=new yt,ee=null,de=new yt(0,0,0,0);return{setMask:function(j){ee!==j&&!I&&(r.colorMask(j,j,j,j),ee=j)},setLocked:function(j){I=j},setClear:function(j,J,ne,Fe,ht){ht===!0&&(j*=Fe,J*=Fe,ne*=Fe),he.set(j,J,ne,Fe),de.equals(he)===!1&&(r.clearColor(j,J,ne,Fe),de.copy(he))},reset:function(){I=!1,ee=null,de.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ee=null,de=null,j=null;return{setReversed:function(J){if(he!==J){let ne=e.get("EXT_clip_control");J?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),he=J;let Fe=j;j=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(J){J?K(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(J){ee!==J&&!I&&(r.depthMask(J),ee=J)},setFunc:function(J){if(he&&(J=Cx[J]),de!==J){switch(J){case mo:r.depthFunc(r.NEVER);break;case go:r.depthFunc(r.ALWAYS);break;case _o:r.depthFunc(r.LESS);break;case ir:r.depthFunc(r.LEQUAL);break;case xo:r.depthFunc(r.EQUAL);break;case vo:r.depthFunc(r.GEQUAL);break;case yo:r.depthFunc(r.GREATER);break;case bo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=J}},setLocked:function(J){I=J},setClear:function(J){j!==J&&(he&&(J=1-J),r.clearDepth(J),j=J)},reset:function(){I=!1,ee=null,de=null,j=null,he=!1}}}function i(){let I=!1,he=null,ee=null,de=null,j=null,J=null,ne=null,Fe=null,ht=null;return{setTest:function(tt){I||(tt?K(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(tt){he!==tt&&!I&&(r.stencilMask(tt),he=tt)},setFunc:function(tt,kn,Qn){(ee!==tt||de!==kn||j!==Qn)&&(r.stencilFunc(tt,kn,Qn),ee=tt,de=kn,j=Qn)},setOp:function(tt,kn,Qn){(J!==tt||ne!==kn||Fe!==Qn)&&(r.stencilOp(tt,kn,Qn),J=tt,ne=kn,Fe=Qn)},setLocked:function(tt){I=tt},setClear:function(tt){ht!==tt&&(r.clearStencil(tt),ht=tt)},reset:function(){I=!1,he=null,ee=null,de=null,j=null,J=null,ne=null,Fe=null,ht=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,b=null,E=null,S=null,M=null,w=null,A=new Ke(0,0,0),C=0,x=!1,T=null,R=null,B=null,N=null,W=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,O=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=O>=2);let oe=null,te={},ce=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Ne=new yt().fromArray(ce),qe=new yt().fromArray(Ie);function Ye(I,he,ee,de){let j=new Uint8Array(4),J=r.createTexture();r.bindTexture(I,J),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<ee;ne++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(he+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return J}let Y={};Y[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(ir),ke(!1),Tt(Rc),K(r.CULL_FACE),et(Xn);function K(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function pe(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Oe(I,he){return h[I]!==he?(r.bindFramebuffer(I,he),h[I]=he,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(I,he){let ee=f,de=!1;if(I){ee=d.get(he),ee===void 0&&(ee=[],d.set(he,ee));let j=I.textures;if(ee.length!==j.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let J=0,ne=j.length;J<ne;J++)ee[J]=r.COLOR_ATTACHMENT0+J;ee.length=j.length,de=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,de=!0);de&&r.drawBuffers(ee)}function Je(I){return _!==I?(r.useProgram(I),_=I,!0):!1}let It={[Di]:r.FUNC_ADD,[Kh]:r.FUNC_SUBTRACT,[jh]:r.FUNC_REVERSE_SUBTRACT};It[Qh]=r.MIN,It[ed]=r.MAX;let Ze={[td]:r.ZERO,[nd]:r.ONE,[id]:r.SRC_COLOR,[Xa]:r.SRC_ALPHA,[cd]:r.SRC_ALPHA_SATURATE,[od]:r.DST_COLOR,[sd]:r.DST_ALPHA,[rd]:r.ONE_MINUS_SRC_COLOR,[qa]:r.ONE_MINUS_SRC_ALPHA,[ld]:r.ONE_MINUS_DST_COLOR,[ad]:r.ONE_MINUS_DST_ALPHA,[ud]:r.CONSTANT_COLOR,[hd]:r.ONE_MINUS_CONSTANT_COLOR,[dd]:r.CONSTANT_ALPHA,[fd]:r.ONE_MINUS_CONSTANT_ALPHA};function et(I,he,ee,de,j,J,ne,Fe,ht,tt){if(I===Xn){g===!0&&(pe(r.BLEND),g=!1);return}if(g===!1&&(K(r.BLEND),g=!0),I!==$h){if(I!==m||tt!==x){if((p!==Di||S!==Di)&&(r.blendEquation(r.FUNC_ADD),p=Di,S=Di),tt)switch(I){case nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",I);break}else switch(I){case nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ic:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",I);break}b=null,E=null,M=null,w=null,A.set(0,0,0),C=0,m=I,x=tt}return}j=j||he,J=J||ee,ne=ne||de,(he!==p||j!==S)&&(r.blendEquationSeparate(It[he],It[j]),p=he,S=j),(ee!==b||de!==E||J!==M||ne!==w)&&(r.blendFuncSeparate(Ze[ee],Ze[de],Ze[J],Ze[ne]),b=ee,E=de,M=J,w=ne),(Fe.equals(A)===!1||ht!==C)&&(r.blendColor(Fe.r,Fe.g,Fe.b,ht),A.copy(Fe),C=ht),m=I,x=!1}function st(I,he){I.side===Wn?pe(r.CULL_FACE):K(r.CULL_FACE);let ee=I.side===Zt;he&&(ee=!ee),ke(ee),I.blending===nr&&I.transparent===!1?et(Xn):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function Tt(I){I!==Yh?(K(r.CULL_FACE),I!==R&&(I===Rc?r.cullFace(r.BACK):I===Zh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),R=I}function P(I){I!==B&&(V&&r.lineWidth(I),B=I)}function wt(I,he,ee){I?(K(r.POLYGON_OFFSET_FILL),(N!==he||W!==ee)&&(r.polygonOffset(he,ee),N=he,W=ee)):pe(r.POLYGON_OFFSET_FILL)}function je(I){I?K(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function ut(I){I===void 0&&(I=r.TEXTURE0+H-1),oe!==I&&(r.activeTexture(I),oe=I)}function be(I,he,ee){ee===void 0&&(oe===null?ee=r.TEXTURE0+H-1:ee=oe);let de=te[ee];de===void 0&&(de={type:void 0,texture:void 0},te[ee]=de),(de.type!==I||de.texture!==he)&&(oe!==ee&&(r.activeTexture(ee),oe=ee),r.bindTexture(I,he||Y[I]),de.type=I,de.texture=he)}function D(){let I=te[oe];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function q(){try{r.texSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function $(){try{r.texSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function ie(){try{r.texStorage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function ye(){try{r.texStorage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Re(){try{r.texImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function se(I){Ne.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function ge(I){qe.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),qe.copy(I))}function Me(I,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let de=ee.get(I);de===void 0&&(de=r.getUniformBlockIndex(he,I.name),ee.set(I,de))}function re(I,he){let de=c.get(he).get(I);l.get(he)!==de&&(r.uniformBlockBinding(he,de,I.__bindingPointIndex),l.set(he,de))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},oe=null,te={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,b=null,E=null,S=null,M=null,w=null,A=new Ke(0,0,0),C=0,x=!1,T=null,R=null,B=null,N=null,W=null,Ne.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:pe,bindFramebuffer:Oe,drawBuffers:ve,useProgram:Je,setBlending:et,setMaterial:st,setFlipSided:ke,setCullFace:Tt,setLineWidth:P,setPolygonOffset:wt,setScissorTest:je,activeTexture:ut,bindTexture:be,unbindTexture:D,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Re,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:re,texStorage2D:ie,texStorage3D:ye,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:se,viewport:ge,reset:ze}}function Px(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,v){return f?new OffscreenCanvas(D,v):As("canvas")}function g(D,v,F){let q=1,$=be(D);if(($.width>F||$.height>F)&&(q=F/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let X=Math.floor(q*$.width),Se=Math.floor(q*$.height);h===void 0&&(h=_(X,Se));let ie=v?_(X,Se):h;return ie.width=X,ie.height=Se,ie.getContext("2d").drawImage(D,0,0,X,Se),Pe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+Se+")."),ie}else return"data"in D&&Pe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(D,v,F,q,$=!1){if(D!==null){if(r[D]!==void 0)return r[D];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let X=v;if(v===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),v===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),v===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),v===r.RGBA){let Se=$?Ts:Xe.getTransfer(q);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=Se===Qe?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(D,v){let F;return D?v===null||v===Un||v===Qr?F=r.DEPTH24_STENCIL8:v===On?F=r.DEPTH32F_STENCIL8:v===jr&&(F=r.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===Qr?F=r.DEPTH_COMPONENT24:v===On?F=r.DEPTH_COMPONENT32F:v===jr&&(F=r.DEPTH_COMPONENT16),F}function M(D,v){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nt&&D.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function w(D){let v=D.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&u.delete(v)}function A(D){let v=D.target;v.removeEventListener("dispose",A),T(v)}function C(D){let v=n.get(D);if(v.__webglInit===void 0)return;let F=D.source,q=d.get(F);if(q){let $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(D),Object.keys(q).length===0&&d.delete(F)}n.remove(D)}function x(D){let v=n.get(D);r.deleteTexture(v.__webglTexture);let F=D.source,q=d.get(F);delete q[v.__cacheKey],a.memory.textures--}function T(D){let v=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[q][$]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=D.textures;for(let q=0,$=F.length;q<$;q++){let X=n.get(F[q]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(D)}let R=0;function B(){R=0}function N(){let D=R;return D>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),R+=1,D}function W(D){let v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function H(D,v){let F=n.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&F.__version!==D.version){let q=D.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,D,v);return}}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function V(D,v){let F=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){Y(F,D,v);return}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function O(D,v){let F=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){Y(F,D,v);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function Z(D,v){let F=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&F.__version!==D.version){K(F,D,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}let oe={[Ya]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[Za]:r.MIRRORED_REPEAT},te={[Nt]:r.NEAREST,[gd]:r.NEAREST_MIPMAP_NEAREST,[qs]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Eo]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},ce={[yd]:r.NEVER,[Td]:r.ALWAYS,[bd]:r.LESS,[cl]:r.LEQUAL,[Md]:r.EQUAL,[ul]:r.GEQUAL,[Sd]:r.GREATER,[Ed]:r.NOTEQUAL};function Ie(D,v){if(v.type===On&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===Eo||v.magFilter===qs||v.magFilter===Ni||v.minFilter===Ut||v.minFilter===Eo||v.minFilter===qs||v.minFilter===Ni)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,oe[v.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,oe[v.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,oe[v.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,te[v.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==qs&&v.minFilter!==Ni||v.type===On&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ne(D,v){let F=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",w));let q=v.source,$=d.get(q);$===void 0&&($={},d.set(q,$));let X=W(v);if(X!==D.__cacheKey){$[X]===void 0&&($[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[X].usedTimes++;let Se=$[D.__cacheKey];Se!==void 0&&($[D.__cacheKey].usedTimes--,Se.usedTimes===0&&x(v)),D.__cacheKey=X,D.__webglTexture=$[X].texture}return F}function qe(D,v,F){return Math.floor(Math.floor(D/F)/v)}function Ye(D,v,F,q){let X=D.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{X.sort((Q,se)=>Q.start-se.start);let Se=0;for(let Q=1;Q<X.length;Q++){let se=X[Se],ge=X[Q],Me=se.start+se.count,re=qe(ge.start,v.width,4),ze=qe(se.start,v.width,4);ge.start<=Me+1&&re===ze&&qe(ge.start+ge.count-1,v.width,4)===re?se.count=Math.max(se.count,ge.start+ge.count-se.start):(++Se,X[Se]=ge)}X.length=Se+1;let ie=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Q=0,se=X.length;Q<se;Q++){let ge=X[Q],Me=Math.floor(ge.start/4),re=Math.ceil(ge.count/4),ze=Me%v.width,I=Math.floor(Me/v.width),he=re,ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,ze,I,he,ee,F,q,v.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function Y(D,v,F){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);let $=Ne(D,v),X=v.source;t.bindTexture(q,D.__webglTexture,r.TEXTURE0+F);let Se=n.get(X);if(X.version!==Se.__version||$===!0){t.activeTexture(r.TEXTURE0+F);let ie=Xe.getPrimaries(Xe.workingColorSpace),ye=v.colorSpace===ui?null:Xe.getPrimaries(v.colorSpace),Re=v.colorSpace===ui||ie===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Q=g(v.image,!1,i.maxTextureSize);Q=ut(v,Q);let se=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),Me=E(v.internalFormat,se,ge,v.colorSpace,v.isVideoTexture);Ie(q,v);let re,ze=v.mipmaps,I=v.isVideoTexture!==!0,he=Se.__version===void 0||$===!0,ee=X.dataReady,de=M(v,Q);if(v.isDepthTexture)Me=S(v.format===Ui,v.type),he&&(I?t.texStorage2D(r.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Me,Q.width,Q.height,0,se,ge,null));else if(v.isDataTexture)if(ze.length>0){I&&he&&t.texStorage2D(r.TEXTURE_2D,de,Me,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)re=ze[j],I?ee&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,re.width,re.height,se,ge,re.data):t.texImage2D(r.TEXTURE_2D,j,Me,re.width,re.height,0,se,ge,re.data);v.generateMipmaps=!1}else I?(he&&t.texStorage2D(r.TEXTURE_2D,de,Me,Q.width,Q.height),ee&&Ye(v,Q,se,ge)):t.texImage2D(r.TEXTURE_2D,0,Me,Q.width,Q.height,0,se,ge,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Me,ze[0].width,ze[0].height,Q.depth);for(let j=0,J=ze.length;j<J;j++)if(re=ze[j],v.format!==An)if(se!==null)if(I){if(ee)if(v.layerUpdates.size>0){let ne=tu(re.width,re.height,v.format,v.type);for(let Fe of v.layerUpdates){let ht=re.data.subarray(Fe*ne/re.data.BYTES_PER_ELEMENT,(Fe+1)*ne/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Fe,re.width,re.height,1,se,ht)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,se,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Me,re.width,re.height,Q.depth,0,re.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,se,ge,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Me,re.width,re.height,Q.depth,0,se,ge,re.data)}else{I&&he&&t.texStorage2D(r.TEXTURE_2D,de,Me,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)re=ze[j],v.format!==An?se!==null?I?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Me,re.width,re.height,0,re.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ee&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,re.width,re.height,se,ge,re.data):t.texImage2D(r.TEXTURE_2D,j,Me,re.width,re.height,0,se,ge,re.data)}else if(v.isDataArrayTexture)if(I){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Me,Q.width,Q.height,Q.depth),ee)if(v.layerUpdates.size>0){let j=tu(Q.width,Q.height,v.format,v.type);for(let J of v.layerUpdates){let ne=Q.data.subarray(J*j/Q.data.BYTES_PER_ELEMENT,(J+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,se,ge,ne)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,ge,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,se,ge,Q.data);else if(v.isData3DTexture)I?(he&&t.texStorage3D(r.TEXTURE_3D,de,Me,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,ge,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,se,ge,Q.data);else if(v.isFramebufferTexture){if(he)if(I)t.texStorage2D(r.TEXTURE_2D,de,Me,Q.width,Q.height);else{let j=Q.width,J=Q.height;for(let ne=0;ne<de;ne++)t.texImage2D(r.TEXTURE_2D,ne,Me,j,J,0,se,ge,null),j>>=1,J>>=1}}else if(ze.length>0){if(I&&he){let j=be(ze[0]);t.texStorage2D(r.TEXTURE_2D,de,Me,j.width,j.height)}for(let j=0,J=ze.length;j<J;j++)re=ze[j],I?ee&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,se,ge,re):t.texImage2D(r.TEXTURE_2D,j,Me,se,ge,re);v.generateMipmaps=!1}else if(I){if(he){let j=be(Q);t.texStorage2D(r.TEXTURE_2D,de,Me,j.width,j.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,ge,Q)}else t.texImage2D(r.TEXTURE_2D,0,Me,se,ge,Q);m(v)&&p(q),Se.__version=X.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function K(D,v,F){if(v.image.length!==6)return;let q=Ne(D,v),$=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+F);let X=n.get($);if($.version!==X.__version||q===!0){t.activeTexture(r.TEXTURE0+F);let Se=Xe.getPrimaries(Xe.workingColorSpace),ie=v.colorSpace===ui?null:Xe.getPrimaries(v.colorSpace),ye=v.colorSpace===ui||Se===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!Re&&!Q?se[J]=g(v.image[J],!0,i.maxCubemapSize):se[J]=Q?v.image[J].image:v.image[J],se[J]=ut(v,se[J]);let ge=se[0],Me=s.convert(v.format,v.colorSpace),re=s.convert(v.type),ze=E(v.internalFormat,Me,re,v.colorSpace),I=v.isVideoTexture!==!0,he=X.__version===void 0||q===!0,ee=$.dataReady,de=M(v,ge);Ie(r.TEXTURE_CUBE_MAP,v);let j;if(Re){I&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,ze,ge.width,ge.height);for(let J=0;J<6;J++){j=se[J].mipmaps;for(let ne=0;ne<j.length;ne++){let Fe=j[ne];v.format!==An?Me!==null?I?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,Fe.width,Fe.height,Me,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,ze,Fe.width,Fe.height,0,Fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,Fe.width,Fe.height,Me,re,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,ze,Fe.width,Fe.height,0,Me,re,Fe.data)}}}else{if(j=v.mipmaps,I&&he){j.length>0&&de++;let J=be(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,ze,J.width,J.height)}for(let J=0;J<6;J++)if(Q){I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Me,re,se[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,se[J].width,se[J].height,0,Me,re,se[J].data);for(let ne=0;ne<j.length;ne++){let ht=j[ne].image[J].image;I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,ht.width,ht.height,Me,re,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,ze,ht.width,ht.height,0,Me,re,ht.data)}}else{I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,re,se[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Me,re,se[J]);for(let ne=0;ne<j.length;ne++){let Fe=j[ne];I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,Me,re,Fe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,ze,Me,re,Fe.image[J])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function pe(D,v,F,q,$,X){let Se=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),ye=E(F.internalFormat,Se,ie,F.colorSpace),Re=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!Re.__hasExternalTextures){let se=Math.max(1,v.width>>X),ge=Math.max(1,v.height>>X);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,X,ye,se,ge,v.depth,0,Se,ie,null):t.texImage2D($,X,ye,se,ge,0,Se,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),wt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,$,Q.__webglTexture,0,P(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,$,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(D,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,D),v.depthBuffer){let q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=S(v.stencilBuffer,$),Se=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;wt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(v),X,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(v),X,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,X,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,D)}else{let q=v.textures;for(let $=0;$<q.length;$++){let X=q[$],Se=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),ye=E(X.internalFormat,Se,ie,X.colorSpace);wt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(v),ye,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(v),ye,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ye,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(D,v,F){let q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,v.depthTexture);let Re=s.convert(v.depthTexture.format),Q=s.convert(v.depthTexture.type),se;v.depthTexture.format===Hn?se=r.DEPTH_COMPONENT24:v.depthTexture.format===Ui&&(se=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,se,v.width,v.height,0,Re,Q,null)}}else H(v.depthTexture,0);let X=$.__webglTexture,Se=P(v),ie=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,ye=v.depthTexture.format===Ui?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Hn)wt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ie,X,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ie,X,0);else if(v.depthTexture.format===Ui)wt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ie,X,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ie,X,0);else throw new Error("Unknown depthTexture format")}function Je(D){let v=n.get(D),F=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){let q=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(D.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)ve(v.__webglFramebuffer[q],D,q);else{let q=D.texture.mipmaps;q&&q.length>0?ve(v.__webglFramebuffer[0],D,0):ve(v.__webglFramebuffer,D,0)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),Oe(v.__webglDepthbuffer[q],D,!1);else{let $=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}else{let q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Oe(v.__webglDepthbuffer,D,!1);else{let $=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function It(D,v,F){let q=n.get(D);v!==void 0&&pe(q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Je(D)}function Ze(D){let v=D.texture,F=n.get(D),q=n.get(v);D.addEventListener("dispose",A);let $=D.textures,X=D.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let ye=0;ye<v.mipmaps.length;ye++)F.__webglFramebuffer[ie][ye]=r.createFramebuffer()}else F.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)F.__webglFramebuffer[ie]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ie=0,ye=$.length;ie<ye;ie++){let Re=n.get($[ie]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&wt(D)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){let ye=$[ie];F.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);let Re=s.convert(ye.format,ye.colorSpace),Q=s.convert(ye.type),se=E(ye.internalFormat,Re,Q,ye.colorSpace,D.isXRRenderTarget===!0),ge=P(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,se,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)pe(F.__webglFramebuffer[ie][ye],D,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye);else pe(F.__webglFramebuffer[ie],D,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,ye=$.length;ie<ye;ie++){let Re=$[ie],Q=n.get(Re),se=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),Ie(se,Re),pe(F.__webglFramebuffer,D,Re,r.COLOR_ATTACHMENT0+ie,se,0),m(Re)&&p(se)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ie=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ie(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)pe(F.__webglFramebuffer[ye],D,v,r.COLOR_ATTACHMENT0,ie,ye);else pe(F.__webglFramebuffer,D,v,r.COLOR_ATTACHMENT0,ie,0);m(v)&&p(ie),t.unbindTexture()}D.depthBuffer&&Je(D)}function et(D){let v=D.textures;for(let F=0,q=v.length;F<q;F++){let $=v[F];if(m($)){let X=b(D),Se=n.get($).__webglTexture;t.bindTexture(X,Se),p(X),t.unbindTexture()}}}let st=[],ke=[];function Tt(D){if(D.samples>0){if(wt(D)===!1){let v=D.textures,F=D.width,q=D.height,$=r.COLOR_BUFFER_BIT,X=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(D),ie=v.length>1;if(ie)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ye=D.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);let Q=n.get(v[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,F,q,0,0,F,q,$,r.NEAREST),l===!0&&(st.length=0,ke.length=0,st.push(r.COLOR_ATTACHMENT0+Re),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(X),ke.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);let Q=n.get(v[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let v=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function P(D){return Math.min(i.maxSamples,D.samples)}function wt(D){let v=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(D){let v=a.render.frame;u.get(D)!==v&&(u.set(D,v),D.update())}function ut(D,v){let F=D.colorSpace,q=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||F!==rr&&F!==ui&&(Xe.getTransfer(F)===Qe?(q!==An||$!==_n)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",F)),v}function be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=It,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ix(r,e){function t(n,i=ui){let s,a=Xe.getTransfer(i);if(n===_n)return r.UNSIGNED_BYTE;if(n===wo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return r.BYTE;if(n===Hc)return r.SHORT;if(n===jr)return r.UNSIGNED_SHORT;if(n===To)return r.INT;if(n===Un)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===qn)return r.HALF_FLOAT;if(n===qc)return r.ALPHA;if(n===Yc)return r.RGB;if(n===An)return r.RGBA;if(n===Hn)return r.DEPTH_COMPONENT;if(n===Ui)return r.DEPTH_STENCIL;if(n===Zc)return r.RED;if(n===Do)return r.RED_INTEGER;if(n===cr)return r.RG;if(n===Co)return r.RG_INTEGER;if(n===Ro)return r.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Io||n===Fo||n===Lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Uo||n===Oo||n===Bo||n===ko||n===zo||n===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===No||n===Uo)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return s.COMPRESSED_R11_EAC;if(n===ko)return s.COMPRESSED_SIGNED_R11_EAC;if(n===zo)return s.COMPRESSED_RG11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Go)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===al||n===ol||n===ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:Fx,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends li{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new mu,p={},b=t.getContextAttributes(),E=null,S=null,M=[],w=[],A=new it,C=null,x=new Gt;x.viewport=new yt;let T=new Gt;T.viewport=new yt;let R=[x,T],B=new po,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=M[Y];return K===void 0&&(K=new Jr,M[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=M[Y];return K===void 0&&(K=new Jr,M[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=M[Y];return K===void 0&&(K=new Jr,M[Y]=K),K.getHandSpace()};function H(Y){let K=w.indexOf(Y.inputSource);if(K===-1)return;let pe=M[K];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let Y=0;Y<M.length;Y++){let K=w[Y];K!==null&&(w[Y]=null,M[Y].disconnect(K))}N=null,W=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(E),f=null,d=null,h=null,i=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Oe=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Ui:Hn,Oe=b.stencil?Qr:Un);let Je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new fn(d.textureWidth,d.textureHeight,{format:An,type:_n,depthTexture:new Pi(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fn(f.framebufferWidth,f.framebufferHeight,{format:An,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Y){for(let K=0;K<Y.removed.length;K++){let pe=Y.removed[K],Oe=w.indexOf(pe);Oe>=0&&(w[Oe]=null,M[Oe].disconnect(pe))}for(let K=0;K<Y.added.length;K++){let pe=Y.added[K],Oe=w.indexOf(pe);if(Oe===-1){for(let Je=0;Je<M.length;Je++)if(Je>=w.length){w.push(pe),Oe=Je;break}else if(w[Je]===null){w[Je]=pe,Oe=Je;break}if(Oe===-1)break}let ve=M[Oe];ve&&ve.connect(pe)}}let Z=new k,oe=new k;function te(Y,K,pe){Z.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);let Oe=Z.distanceTo(oe),ve=K.projectionMatrix.elements,Je=pe.projectionMatrix.elements,It=ve[14]/(ve[10]-1),Ze=ve[14]/(ve[10]+1),et=(ve[9]+1)/ve[5],st=(ve[9]-1)/ve[5],ke=(ve[8]-1)/ve[0],Tt=(Je[8]+1)/Je[0],P=It*ke,wt=It*Tt,je=Oe/(-ke+Tt),ut=je*-ke;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ut),Y.translateZ(je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let be=It+je,D=Ze+je,v=P-ut,F=wt+(Oe-ut),q=et*Ze/D*be,$=st*Ze/D*be;Y.projectionMatrix.makePerspective(v,F,q,$,be,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),B.near=T.near=x.near=K,B.far=T.far=x.far=pe,(N!==B.near||W!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,W=B.far),B.layers.mask=Y.layers.mask|6,x.layers.mask=B.layers.mask&3,T.layers.mask=B.layers.mask&5;let Oe=Y.parent,ve=B.cameras;ce(B,Oe);for(let Je=0;Je<ve.length;Je++)ce(ve[Je],Oe);ve.length===2?te(B,x,T):B.projectionMatrix.copy(x.projectionMatrix),Ie(Y,B,Oe)};function Ie(Y,K,pe){pe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$a*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let Ne=null;function qe(Y,K){if(u=K.getViewerPose(c||a),_=K,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Oe=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let Ze=0;Ze<pe.length;Ze++){let et=pe[Ze],st=null;if(f!==null)st=f.getViewport(et);else{let Tt=h.getViewSubImage(d,et);st=Tt.viewport,Ze===0&&(e.setRenderTargetTextures(S,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(S))}let ke=R[Ze];ke===void 0&&(ke=new Gt,ke.layers.enable(Ze),ke.viewport=new yt,R[Ze]=ke),ke.matrix.fromArray(et.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(et.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),Ze===0&&(B.matrix.copy(ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(ke)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let Ze=h.getDepthInformation(pe[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,i.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<pe.length;Ze++){let et=pe[Ze].camera;if(et){let st=p[et];st||(st=new zs,p[et]=st);let ke=h.getCameraImage(et);st.sourceTexture=ke}}}}for(let pe=0;pe<M.length;pe++){let Oe=w[pe],ve=M[pe];Oe!==null&&ve!==void 0&&ve.update(Oe,K,c||a)}Ne&&Ne(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Ye=new jd;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(Y){Ne=Y},this.dispose=function(){}}},dr=new ar,Nx=new St;function Ux(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),E=b.envMap,S=b.envMapRotation;E&&(m.envMap.value=E,dr.copy(S),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(dr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ox(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let S=E.program;n.uniformBlockBinding(b,S)}function c(b,E){let S=i[b.id];S===void 0&&(_(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",m));let M=E.program;n.updateUBOMapping(b,M);let w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function u(b){let E=h();b.__bindingPointIndex=E;let S=r.createBuffer(),M=b.__size,w=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let E=i[b.id],S=b.uniforms,M=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,A=S.length;w<A;w++){let C=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,T=C.length;x<T;x++){let R=C[x];if(f(R,w,x,M)===!0){let B=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],W=0;for(let H=0;H<N.length;H++){let V=N[H],O=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,B+W,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,E,S,M){let w=b.value,A=E+"_"+S;if(M[A]===void 0)return typeof w=="number"||typeof w=="boolean"?M[A]=w:M[A]=w.clone(),!0;{let C=M[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return M[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(b){let E=b.uniforms,S=0,M=16;for(let A=0,C=E.length;A<C;A++){let x=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,R=x.length;T<R;T++){let B=x[T],N=Array.isArray(B.value)?B.value:[B.value];for(let W=0,H=N.length;W<H;W++){let V=N[W],O=g(V),Z=S%M,oe=Z%O.boundary,te=Z+oe;S+=oe,te!==0&&M-te<O.storage&&(S+=M-te),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=O.storage}}}let w=S%M;return w>0&&(S+=M-w),b.__size=S,b.__cache={},this}function g(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){let E=b.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(let b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function kx(){return Yn===null&&(Yn=new to(Bx,16,16,cr,qn),Yn.name="DFG_LUT",Yn.minFilter=Ut,Yn.magFilter=Ut,Yn.wrapS=Gn,Yn.wrapT=Gn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var pl=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=f,m=new Set([Ro,Co,Do]),p=new Set([_n,Un,jr,Qr,wo,Ao]),b=new Uint32Array(4),E=new Int32Array(4),S=null,M=null,w=[],A=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=dn;let R=0,B=0,N=null,W=-1,H=null,V=new yt,O=new yt,Z=null,oe=new Ke(0),te=0,ce=t.width,Ie=t.height,Ne=1,qe=null,Ye=null,Y=new yt(0,0,ce,Ie),K=new yt(0,0,ce,Ie),pe=!1,Oe=new Bs,ve=!1,Je=!1,It=new St,Ze=new k,et=new yt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Tt(){return N===null?Ne:1}let P=n;function wt(y,L){return t.getContext(y,L)}try{let y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",tt,!1),P===null){let L="webgl2";if(P=wt(L,y),P===null)throw wt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ce("WebGLRenderer: "+y.message),y}let je,ut,be,D,v,F,q,$,X,Se,ie,ye,Re,Q,se,ge,Me,re,ze,I,he,ee,de,j;function J(){je=new q0(P),je.init(),ee=new Ix(P,je),ut=new O0(P,je,e,ee),be=new Rx(P,je),ut.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),D=new J0(P),v=new mx,F=new Px(P,je,be,v,ut,ee,D),q=new k0(x),$=new X0(x),X=new Qp(P),de=new N0(P,X),Se=new Y0(P,X,D,de),ie=new K0(P,Se,X,D),ze=new $0(P,ut,F),ge=new B0(v),ye=new px(x,q,$,je,ut,de,ge),Re=new Ux(x,v),Q=new _x,se=new Sx(je),re=new L0(x,q,$,be,ie,_,l),Me=new Dx(x,ie,ut),j=new Ox(P,D,ut,be),I=new U0(P,je,D),he=new Z0(P,je,D),D.programs=ye.programs,x.capabilities=ut,x.extensions=je,x.properties=v,x.renderLists=Q,x.shadowMap=Me,x.state=be,x.info=D}J(),g!==_n&&(C=new Q0(g,t.width,t.height,i,s));let ne=new gu(x,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(y){y!==void 0&&(Ne=y,this.setSize(ce,Ie,!1))},this.getSize=function(y){return y.set(ce,Ie)},this.setSize=function(y,L,G=!0){if(ne.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=y,Ie=L,t.width=Math.floor(y*Ne),t.height=Math.floor(L*Ne),G===!0&&(t.style.width=y+"px",t.style.height=L+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(ce*Ne,Ie*Ne).floor()},this.setDrawingBufferSize=function(y,L,G){ce=y,Ie=L,Ne=G,t.width=Math.floor(y*G),t.height=Math.floor(L*G),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(g===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,L,G,z){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,L,G,z),be.viewport(V.copy(Y).multiplyScalar(Ne).round())},this.getScissor=function(y){return y.copy(K)},this.setScissor=function(y,L,G,z){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,L,G,z),be.scissor(O.copy(K).multiplyScalar(Ne).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){be.setScissorTest(pe=y)},this.setOpaqueSort=function(y){qe=y},this.setTransparentSort=function(y){Ye=y},this.getClearColor=function(y){return y.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,G=!0){let z=0;if(y){let U=!1;if(N!==null){let ae=N.texture.format;U=m.has(ae)}if(U){let ae=N.texture.type,fe=p.has(ae),ue=re.getClearColor(),me=re.getClearAlpha(),Ee=ue.r,De=ue.g,Te=ue.b;fe?(b[0]=Ee,b[1]=De,b[2]=Te,b[3]=me,P.clearBufferuiv(P.COLOR,0,b)):(E[0]=Ee,E[1]=De,E[2]=Te,E[3]=me,P.clearBufferiv(P.COLOR,0,E))}else z|=P.COLOR_BUFFER_BIT}L&&(z|=P.DEPTH_BUFFER_BIT),G&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),re.dispose(),Q.dispose(),se.dispose(),v.dispose(),q.dispose(),$.dispose(),ie.dispose(),de.dispose(),j.dispose(),ye.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",dh),ne.removeEventListener("sessionend",fh),Zi.stop()};function Fe(y){y.preventDefault(),Kc("WebGLRenderer: Context Lost."),T=!0}function ht(){Kc("WebGLRenderer: Context Restored."),T=!1;let y=D.autoReset,L=Me.enabled,G=Me.autoUpdate,z=Me.needsUpdate,U=Me.type;J(),D.autoReset=y,Me.enabled=L,Me.autoUpdate=G,Me.needsUpdate=z,Me.type=U}function tt(y){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function kn(y){let L=y.target;L.removeEventListener("dispose",kn),Qn(L)}function Qn(y){dp(y),v.remove(y)}function dp(y){let L=v.get(y).programs;L!==void 0&&(L.forEach(function(G){ye.releaseProgram(G)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,G,z,U,ae){L===null&&(L=st);let fe=U.isMesh&&U.matrixWorld.determinant()<0,ue=pp(y,L,G,z,U);be.setMaterial(z,fe);let me=G.index,Ee=1;if(z.wireframe===!0){if(me=Se.getWireframeAttribute(G),me===void 0)return;Ee=2}let De=G.drawRange,Te=G.attributes.position,Ve=De.start*Ee,rt=(De.start+De.count)*Ee;ae!==null&&(Ve=Math.max(Ve,ae.start*Ee),rt=Math.min(rt,(ae.start+ae.count)*Ee)),me!==null?(Ve=Math.max(Ve,0),rt=Math.min(rt,me.count)):Te!=null&&(Ve=Math.max(Ve,0),rt=Math.min(rt,Te.count));let _t=rt-Ve;if(_t<0||_t===1/0)return;de.setup(U,z,ue,G,me);let xt,at=I;if(me!==null&&(xt=X.get(me),at=he,at.setIndex(xt)),U.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Tt()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(U.isLine){let we=z.linewidth;we===void 0&&(we=1),be.setLineWidth(we*Tt()),U.isLineSegments?at.setMode(P.LINES):U.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else U.isPoints?at.setMode(P.POINTS):U.isSprite&&at.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))at.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let we=U._multiDrawStarts,nt=U._multiDrawCounts,$e=U._multiDrawCount,on=me?X.get(me).bytesPerElement:1,Er=v.get(z).currentProgram.getUniforms();for(let ln=0;ln<$e;ln++)Er.setValue(P,"_gl_DrawID",ln),at.render(we[ln]/on,nt[ln])}else if(U.isInstancedMesh)at.renderInstances(Ve,_t,U.count);else if(G.isInstancedBufferGeometry){let we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,nt=Math.min(G.instanceCount,we);at.renderInstances(Ve,_t,nt)}else at.render(Ve,_t)};function hh(y,L,G){y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,_a(y,L,G),y.side=oi,y.needsUpdate=!0,_a(y,L,G),y.side=Wn):_a(y,L,G)}this.compile=function(y,L,G=null){G===null&&(G=y),M=se.get(G),M.init(L),A.push(M),G.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),y!==G&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),M.setupLights();let z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ae=U.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){let ue=ae[fe];hh(ue,G,U),z.add(ue)}else hh(ae,G,U),z.add(ae)}),M=A.pop(),z},this.compileAsync=function(y,L,G=null){let z=this.compile(y,L,G);return new Promise(U=>{function ae(){if(z.forEach(function(fe){v.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(y);return}setTimeout(ae,10)}je.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Zl=null;function fp(y){Zl&&Zl(y)}function dh(){Zi.stop()}function fh(){Zi.start()}let Zi=new jd;Zi.setAnimationLoop(fp),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){Zl=y,ne.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},ne.addEventListener("sessionstart",dh),ne.addEventListener("sessionend",fh),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let G=ne.enabled===!0&&ne.isPresenting===!0,z=C!==null&&(N===null||G)&&C.begin(x,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(L),L=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,N),M=se.get(y,A.length),M.init(L),A.push(M),It.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Oe.setFromProjectionMatrix(It,Ln,L.reversedDepth),Je=this.localClippingEnabled,ve=ge.init(this.clippingPlanes,Je),S=Q.get(y,w.length),S.init(),w.push(S),ne.enabled===!0&&ne.isPresenting===!0){let fe=x.xr.getDepthSensingMesh();fe!==null&&Jl(fe,L,-1/0,x.sortObjects)}Jl(y,L,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(qe,Ye),ke=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ke&&re.addToRenderList(S,y),this.info.render.frame++,ve===!0&&ge.beginShadows();let U=M.state.shadowsArray;if(Me.render(U,y,L),ve===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&C.hasRenderPass())===!1){let fe=S.opaque,ue=S.transmissive;if(M.setupLights(),L.isArrayCamera){let me=L.cameras;if(ue.length>0)for(let Ee=0,De=me.length;Ee<De;Ee++){let Te=me[Ee];mh(fe,ue,y,Te)}ke&&re.render(y);for(let Ee=0,De=me.length;Ee<De;Ee++){let Te=me[Ee];ph(S,y,Te,Te.viewport)}}else ue.length>0&&mh(fe,ue,y,L),ke&&re.render(y),ph(S,y,L)}N!==null&&B===0&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),z&&C.end(x),y.isScene===!0&&y.onAfterRender(x,y,L),de.resetDefaultState(),W=-1,H=null,A.pop(),A.length>0?(M=A[A.length-1],ve===!0&&ge.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Jl(y,L,G,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Oe.intersectsSprite(y)){z&&et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);let fe=ie.update(y),ue=y.material;ue.visible&&S.push(y,fe,ue,G,et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Oe.intersectsObject(y))){let fe=ie.update(y),ue=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),et.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),et.copy(fe.boundingSphere.center)),et.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(ue)){let me=fe.groups;for(let Ee=0,De=me.length;Ee<De;Ee++){let Te=me[Ee],Ve=ue[Te.materialIndex];Ve&&Ve.visible&&S.push(y,fe,Ve,G,et.z,Te)}}else ue.visible&&S.push(y,fe,ue,G,et.z,null)}}let ae=y.children;for(let fe=0,ue=ae.length;fe<ue;fe++)Jl(ae[fe],L,G,z)}function ph(y,L,G,z){let{opaque:U,transmissive:ae,transparent:fe}=y;M.setupLightsView(G),ve===!0&&ge.setGlobalState(x.clippingPlanes,G),z&&be.viewport(V.copy(z)),U.length>0&&ga(U,L,G),ae.length>0&&ga(ae,L,G),fe.length>0&&ga(fe,L,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function mh(y,L,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[z.id]===void 0){let Ve=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[z.id]=new fn(1,1,{generateMipmaps:!0,type:Ve?qn:_n,minFilter:Ni,samples:ut.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let ae=M.state.transmissionRenderTarget[z.id],fe=z.viewport||V;ae.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);let ue=x.getRenderTarget(),me=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(ae),x.getClearColor(oe),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear(),ke&&re.render(G);let De=x.toneMapping;x.toneMapping=Nn;let Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),M.setupLightsView(z),ve===!0&&ge.setGlobalState(x.clippingPlanes,z),ga(y,G,z),F.updateMultisampleRenderTarget(ae),F.updateRenderTargetMipmap(ae),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let rt=0,_t=L.length;rt<_t;rt++){let xt=L[rt],{object:at,geometry:we,material:nt,group:$e}=xt;if(nt.side===Wn&&at.layers.test(z.layers)){let on=nt.side;nt.side=Zt,nt.needsUpdate=!0,gh(at,G,z,we,nt,$e),nt.side=on,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(F.updateMultisampleRenderTarget(ae),F.updateRenderTargetMipmap(ae))}x.setRenderTarget(ue,me,Ee),x.setClearColor(oe,te),Te!==void 0&&(z.viewport=Te),x.toneMapping=De}function ga(y,L,G){let z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ae=y.length;U<ae;U++){let fe=y[U],{object:ue,geometry:me,group:Ee}=fe,De=fe.material;De.allowOverride===!0&&z!==null&&(De=z),ue.layers.test(G.layers)&&gh(ue,L,G,me,De,Ee)}}function gh(y,L,G,z,U,ae){y.onBeforeRender(x,L,G,z,U,ae),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,L,G,z,y,ae),U.transparent===!0&&U.side===Wn&&U.forceSinglePass===!1?(U.side=Zt,U.needsUpdate=!0,x.renderBufferDirect(G,L,z,U,y,ae),U.side=oi,U.needsUpdate=!0,x.renderBufferDirect(G,L,z,U,y,ae),U.side=Wn):x.renderBufferDirect(G,L,z,U,y,ae),y.onAfterRender(x,L,G,z,U,ae)}function _a(y,L,G){L.isScene!==!0&&(L=st);let z=v.get(y),U=M.state.lights,ae=M.state.shadowsArray,fe=U.state.version,ue=ye.getParameters(y,U.state,ae,L,G),me=ye.getProgramCacheKey(ue),Ee=z.programs;z.environment=y.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(y.isMeshStandardMaterial?$:q).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",kn),Ee=new Map,z.programs=Ee);let De=Ee.get(me);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===fe)return xh(y,ue),De}else ue.uniforms=ye.getUniforms(y),y.onBeforeCompile(ue,x),De=ye.acquireProgram(ue,me),Ee.set(me,De),z.uniforms=ue.uniforms;let Te=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ge.uniform),xh(y,ue),z.needsLights=gp(y),z.lightsStateVersion=fe,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function _h(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=ts.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function xh(y,L){let G=v.get(y);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function pp(y,L,G,z,U){L.isScene!==!0&&(L=st),F.resetTextureUnits();let ae=L.fog,fe=z.isMeshStandardMaterial?L.environment:null,ue=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:rr,me=(z.isMeshStandardMaterial?$:q).get(z.envMap||fe),Ee=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!G.morphAttributes.position,Ve=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color,_t=Nn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_t=x.toneMapping);let xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=xt!==void 0?xt.length:0,we=v.get(z),nt=M.state.lights;if(ve===!0&&(Je===!0||y!==H)){let qt=y===H&&z.id===W;ge.setState(z,y,qt)}let $e=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==nt.state.version||we.outputColorSpace!==ue||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==me||z.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ge.numPlanes||we.numIntersection!==ge.numIntersection)||we.vertexAlphas!==Ee||we.vertexTangents!==De||we.morphTargets!==Te||we.morphNormals!==Ve||we.morphColors!==rt||we.toneMapping!==_t||we.morphTargetsCount!==at)&&($e=!0):($e=!0,we.__version=z.version);let on=we.currentProgram;$e===!0&&(on=_a(z,L,U));let Er=!1,ln=!1,gs=!1,dt=on.getUniforms(),Kt=we.uniforms;if(be.useProgram(on.program)&&(Er=!0,ln=!0,gs=!0),z.id!==W&&(W=z.id,ln=!0),Er||H!==y){be.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",y.projectionMatrix),dt.setValue(P,"viewMatrix",y.matrixWorldInverse);let jt=dt.map.cameraPosition;jt!==void 0&&jt.setValue(P,Ze.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),H!==y&&(H=y,ln=!0,gs=!0)}if(we.needsLights&&(nt.state.directionalShadowMap.length>0&&dt.setValue(P,"directionalShadowMap",nt.state.directionalShadowMap,F),nt.state.spotShadowMap.length>0&&dt.setValue(P,"spotShadowMap",nt.state.spotShadowMap,F),nt.state.pointShadowMap.length>0&&dt.setValue(P,"pointShadowMap",nt.state.pointShadowMap,F)),U.isSkinnedMesh){dt.setOptional(P,U,"bindMatrix"),dt.setOptional(P,U,"bindMatrixInverse");let qt=U.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(P,"boneTexture",qt.boneTexture,F))}U.isBatchedMesh&&(dt.setOptional(P,U,"batchingTexture"),dt.setValue(P,"batchingTexture",U._matricesTexture,F),dt.setOptional(P,U,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",U._indirectTexture,F),dt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",U._colorsTexture,F));let Mn=G.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&ze.update(U,G,on),(ln||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,dt.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Kt.envMap.value=me,Kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Kt.envMapIntensity.value=L.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=kx()),ln&&(dt.setValue(P,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&mp(Kt,gs),ae&&z.fog===!0&&Re.refreshFogUniforms(Kt,ae),Re.refreshMaterialUniforms(Kt,z,Ne,Ie,M.state.transmissionRenderTarget[y.id]),ts.upload(P,_h(we),Kt,F)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ts.upload(P,_h(we),Kt,F),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(P,"center",U.center),dt.setValue(P,"modelViewMatrix",U.modelViewMatrix),dt.setValue(P,"normalMatrix",U.normalMatrix),dt.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let qt=z.uniformsGroups;for(let jt=0,$l=qt.length;jt<$l;jt++){let Ji=qt[jt];j.update(Ji,on),j.bind(Ji,on)}}return on}function mp(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function gp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,L,G){let z=v.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),v.get(y.texture).__webglTexture=L,v.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let G=v.get(y);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0};let _p=P.createFramebuffer();this.setRenderTarget=function(y,L=0,G=0){N=y,R=L,B=G;let z=null,U=!1,ae=!1;if(y){let ue=v.get(y);if(ue.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),V.copy(y.viewport),O.copy(y.scissor),Z=y.scissorTest,be.viewport(V),be.scissor(O),be.setScissorTest(Z),W=-1;return}else if(ue.__webglFramebuffer===void 0)F.setupRenderTarget(y);else if(ue.__hasExternalTextures)F.rebindTextures(y,v.get(y.texture).__webglTexture,v.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let De=y.depthTexture;if(ue.__boundDepthTexture!==De){if(De!==null&&v.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(y)}}let me=y.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(ae=!0);let Ee=v.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?z=Ee[L][G]:z=Ee[L],U=!0):y.samples>0&&F.useMultisampledRTT(y)===!1?z=v.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[G]:z=Ee,V.copy(y.viewport),O.copy(y.scissor),Z=y.scissorTest}else V.copy(Y).multiplyScalar(Ne).floor(),O.copy(K).multiplyScalar(Ne).floor(),Z=pe;if(G!==0&&(z=_p),be.bindFramebuffer(P.FRAMEBUFFER,z)&&be.drawBuffers(y,z),be.viewport(V),be.scissor(O),be.setScissorTest(Z),U){let ue=v.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,G)}else if(ae){let ue=L;for(let me=0;me<y.textures.length;me++){let Ee=v.get(y.textures[me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+me,Ee.__webglTexture,G,ue)}}else if(y!==null&&G!==0){let ue=v.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(y,L,G,z,U,ae,fe,ue=0){if(!(y&&y.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){be.bindFramebuffer(P.FRAMEBUFFER,me);try{let Ee=y.textures[ue],De=Ee.format,Te=Ee.type;if(!ut.textureFormatReadable(De)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&G>=0&&G<=y.height-U&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(L,G,z,U,ee.convert(De),ee.convert(Te),ae))}finally{let Ee=N!==null?v.get(N).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,L,G,z,U,ae,fe,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(L>=0&&L<=y.width-z&&G>=0&&G<=y.height-U){be.bindFramebuffer(P.FRAMEBUFFER,me);let Ee=y.textures[ue],De=Ee.format,Te=Ee.type;if(!ut.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(L,G,z,U,ee.convert(De),ee.convert(Te),0);let rt=N!==null?v.get(N).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,rt);let _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ad(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Ve),P.deleteSync(_t),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,G=0){let z=Math.pow(2,-G),U=Math.floor(y.image.width*z),ae=Math.floor(y.image.height*z),fe=L!==null?L.x:0,ue=L!==null?L.y:0;F.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,ue,U,ae),be.unbindTexture()};let xp=P.createFramebuffer(),vp=P.createFramebuffer();this.copyTextureToTexture=function(y,L,G=null,z=null,U=0,ae=null){ae===null&&(U!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let fe,ue,me,Ee,De,Te,Ve,rt,_t,xt=y.isCompressedTexture?y.mipmaps[ae]:y.image;if(G!==null)fe=G.max.x-G.min.x,ue=G.max.y-G.min.y,me=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,De=G.min.y,Te=G.isBox3?G.min.z:0;else{let Mn=Math.pow(2,-U);fe=Math.floor(xt.width*Mn),ue=Math.floor(xt.height*Mn),y.isDataArrayTexture?me=xt.depth:y.isData3DTexture?me=Math.floor(xt.depth*Mn):me=1,Ee=0,De=0,Te=0}z!==null?(Ve=z.x,rt=z.y,_t=z.z):(Ve=0,rt=0,_t=0);let at=ee.convert(L.format),we=ee.convert(L.type),nt;L.isData3DTexture?(F.setTexture3D(L,0),nt=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(F.setTexture2DArray(L,0),nt=P.TEXTURE_2D_ARRAY):(F.setTexture2D(L,0),nt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let $e=P.getParameter(P.UNPACK_ROW_LENGTH),on=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Er=P.getParameter(P.UNPACK_SKIP_PIXELS),ln=P.getParameter(P.UNPACK_SKIP_ROWS),gs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let dt=y.isDataArrayTexture||y.isData3DTexture,Kt=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let Mn=v.get(y),qt=v.get(L),jt=v.get(Mn.__renderTarget),$l=v.get(qt.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,jt.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,$l.__webglFramebuffer);for(let Ji=0;Ji<me;Ji++)dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(y).__webglTexture,U,Te+Ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(L).__webglTexture,ae,_t+Ji)),P.blitFramebuffer(Ee,De,fe,ue,Ve,rt,fe,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||v.has(y)){let Mn=v.get(y),qt=v.get(L);be.bindFramebuffer(P.READ_FRAMEBUFFER,xp),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,vp);for(let jt=0;jt<me;jt++)dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mn.__webglTexture,U,Te+jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mn.__webglTexture,U),Kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,ae,_t+jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,ae),U!==0?P.blitFramebuffer(Ee,De,fe,ue,Ve,rt,fe,ue,P.COLOR_BUFFER_BIT,P.NEAREST):Kt?P.copyTexSubImage3D(nt,ae,Ve,rt,_t+jt,Ee,De,fe,ue):P.copyTexSubImage2D(nt,ae,Ve,rt,Ee,De,fe,ue);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(nt,ae,Ve,rt,_t,fe,ue,me,at,we,xt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(nt,ae,Ve,rt,_t,fe,ue,me,at,xt.data):P.texSubImage3D(nt,ae,Ve,rt,_t,fe,ue,me,at,we,xt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,Ve,rt,fe,ue,at,we,xt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,Ve,rt,xt.width,xt.height,at,xt.data):P.texSubImage2D(P.TEXTURE_2D,ae,Ve,rt,fe,ue,at,we,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,on),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Er),P.pixelStorei(P.UNPACK_SKIP_ROWS,ln),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gs),ae===0&&L.generateMipmaps&&P.generateMipmap(nt),be.unbindTexture()},this.initRenderTarget=function(y){v.get(y).__webglFramebuffer===void 0&&F.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?F.setTextureCube(y,0):y.isData3DTexture?F.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?F.setTexture2DArray(y,0):F.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){R=0,B=0,N=null,be.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var Vx=["canvas"],_l=class r{constructor(e,t){this.platformId=e;this.ngZone=t}canvasRef;renderer;scene;camera;particlesMesh;animationId=0;mouseX=0;mouseY=0;targetX=0;targetY=0;windowHalfX=0;windowHalfY=0;ngAfterViewInit(){zn(this.platformId)&&(this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.ngZone.runOutsideAngular(()=>{this.initThree(),this.animate()}),window.addEventListener("resize",this.onWindowResize.bind(this)),document.addEventListener("mousemove",this.onDocumentMouseMove.bind(this)))}ngOnDestroy(){zn(this.platformId)&&(cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.onWindowResize.bind(this)),document.removeEventListener("mousemove",this.onDocumentMouseMove.bind(this)))}initThree(){let e=this.canvasRef.nativeElement;this.scene=new Os,this.camera=new Gt(75,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=2,this.camera.position.y=0,this.renderer=new pl({canvas:e,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));let t=new pn,n=2e3,i=new Float32Array(n*3);for(let a=0;a<n*3;a++){let o=2*Math.cbrt(Math.random()),l=Math.random()*2*Math.PI,c=Math.acos(2*Math.random()-1),u=o*Math.sin(c)*Math.cos(l),h=o*Math.sin(c)*Math.sin(l),d=o*Math.cos(c);i[a*3]=u,i[a*3+1]=h,i[a*3+2]=d}t.setAttribute("position",new Yt(i,3));let s=new $r({size:.005,color:65345,transparent:!0,opacity:.8});this.particlesMesh=new ks(t,s),this.scene.add(this.particlesMesh)}onDocumentMouseMove(e){this.mouseX=e.clientX-this.windowHalfX,this.mouseY=e.clientY-this.windowHalfY}onWindowResize(){this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){this.animationId=requestAnimationFrame(this.animate.bind(this)),this.targetX=this.mouseX*.001,this.targetY=this.mouseY*.001,this.particlesMesh.rotation.y+=.002,this.particlesMesh.rotation.x+=.001,this.particlesMesh.rotation.y+=.05*(this.targetX-this.particlesMesh.rotation.y),this.particlesMesh.rotation.x+=.05*(this.targetY-this.particlesMesh.rotation.x),this.renderer.render(this.scene,this.camera)}static \u0275fac=function(t){return new(t||r)(Sn(xi),Sn(Mh))};static \u0275cmp=At({type:r,selectors:[["app-three-scene"]],viewQuery:function(t,n){if(t&1&&Ma(Vx,5),t&2){let i;Cr(i=Rr())&&(n.canvasRef=i.first)}},decls:2,vars:0,consts:[["canvas",""],[1,"webgl","fixed","top-0","left-0","w-full","h-full","-z-10","outline-none"]],template:function(t,n){t&1&&ba(0,"canvas",1,0)},encapsulation:2})};var Gx=["*"];function Hx(r,e){if(r&1&&Ge(0,"i"),r&2){let t=wr();ei(t.icon+" mr-1.5 text-xs "+t.color+"-400")}}var xl=class r{label="";icon;color="blue";hoverable=!0;static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-tech-badge"]],inputs:{label:"label",icon:"icon",color:"color",hoverable:"hoverable"},ngContentSelectors:Gx,decls:4,vars:5,consts:[[3,"class",4,"ngIf"]],template:function(t,n){t&1&&(Ar(),xe(0,"span"),Qt(1,Hx,1,2,"i",0),Dr(2),Ae(3),_e()),t&2&&(ei("group px-3 py-1.5 border rounded-full text-xs font-mono-custom uppercase tracking-wider transition-all cursor-default backdrop-blur-sm bg-"+n.color+"-500/10 border-"+n.color+"-400/30 text-"+n.color+"-300 hover:bg-"+n.color+"-500/20 hover:border-"+n.color+"-400/60 "+(n.hoverable?"hover:scale-105":"")),Tr("aria-label","Technology: "+n.label),Le(),ot("ngIf",n.icon),Le(2),cn("",n.label," "))},dependencies:[Ft,Sa],encapsulation:2})};var Wx=["*"],vl=class r{value="0";colorStart="blue";colorEnd="cyan";alignment="text-center lg:text-left";static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-stat-card"]],inputs:{value:"value",colorStart:"colorStart",colorEnd:"colorEnd",alignment:"alignment"},ngContentSelectors:Wx,decls:5,vars:5,consts:[[1,"text-center","lg:text-left","group",3,"ngClass"],[1,"text-3xl","md:text-4xl","lg:text-5xl","font-bold","text-transparent","bg-clip-text","mb-1","group-hover:scale-110","transition-transform"],[1,"text-[10px]","md:text-xs","lg:text-sm","text-gray-400","font-mono-custom","uppercase","tracking-wider","leading-tight"]],template:function(t,n){t&1&&(Ar(),xe(0,"div",0)(1,"div",1),Ae(2),_e(),xe(3,"div",2),Dr(4),_e()()),t&2&&(ot("ngClass",n.alignment),Le(),ei("bg-gradient-to-r from-"+n.colorStart+"-400 to-"+n.colorEnd+"-400"),Tr("aria-label",n.value),Le(),cn(" ",n.value," "))},dependencies:[Ft,Pr],encapsulation:2,changeDetection:0})};var yl=class r{href="";icon="";label="";color="blue";external=!0;ariaLabel;static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-social-link"]],inputs:{href:"href",icon:"icon",label:"label",color:"color",external:"external",ariaLabel:"ariaLabel"},decls:5,vars:11,consts:[[1,"group","relative","w-10","h-10","flex","items-center","justify-center","rounded-full","border","transition-all","hover:scale-125","hover:rotate-12","backdrop-blur-sm",3,"href","target","rel"],[1,"absolute","-bottom-8","left-1/2","-translate-x-1/2","opacity-0","group-hover:opacity-100","transition-opacity","pointer-events-none"]],template:function(t,n){t&1&&(xs(0,"a",0),ba(1,"i"),xs(2,"div",1)(3,"span"),Ae(4),ya()()()),t&2&&(ei("border-"+n.color+"-400/30 hover:border-"+n.color+"-400 text-gray-400 hover:text-"+n.color+"-400 bg-"+n.color+"-500/5 hover:bg-"+n.color+"-500/20"),Th("href",n.href,_s)("target",n.external?"_blank":"_self")("rel",n.external?"noopener noreferrer":""),Tr("aria-label",n.ariaLabel||n.label),Le(),ei(n.icon+" text-lg"),Le(2),ei("text-xs font-mono-custom text-"+n.color+"-400 whitespace-nowrap"),Le(),vi(n.label))},dependencies:[Ft],encapsulation:2,changeDetection:0})};var is=class r{constructor(e,t,n){this.el=e;this.renderer=t;this.isBrowser=zn(n)}parallaxRatio=.5;isBrowser;ngOnInit(){this.isBrowser&&(this.renderer.setStyle(this.el.nativeElement,"transition","transform 0.1s ease-out"),this.renderer.setStyle(this.el.nativeElement,"will-change","transform"),this.updateParallax())}onWindowScroll(){this.isBrowser&&this.updateParallax()}updateParallax(){if(!this.isBrowser)return;let e=window.scrollY,t=this.el.nativeElement.getBoundingClientRect().top+e,n=-(e*this.parallaxRatio);this.renderer.setStyle(this.el.nativeElement,"transform",`translate3d(0, ${n}px, 0)`)}ngOnDestroy(){this.isBrowser&&(this.renderer.removeStyle(this.el.nativeElement,"transform"),this.renderer.removeStyle(this.el.nativeElement,"will-change"))}static \u0275fac=function(t){return new(t||r)(Sn(xa),Sn(Eh),Sn(xi))};static \u0275dir=va({type:r,selectors:[["","appParallax",""]],hostBindings:function(t,n){t&1&&wh("scroll",function(){return n.onWindowScroll()},Sh)},inputs:{parallaxRatio:"parallaxRatio"}})};function fi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function df(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},Lu,Bt,ft,Cn=1e8,ct=1/Cn,Eu=Math.PI*2,Xx=Eu/4,qx=0,ff=Math.sqrt,Yx=Math.cos,Zx=Math.sin,Pt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},Rl=function(e){return typeof e>"u"},Kn=function(e){return typeof e=="object"},rn=function(e){return e!==!1},Nu=function(){return typeof window<"u"},bl=function(e){return bt(e)||Pt(e)},pf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Jx=/random\([^)]+\)/g,$x=/,\s*/g,rf=/(?:-?\.?\d|\.)+/gi,Uu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ou=/[+-]=-?[.\d]+/,Kx=/[^,'"\[\]\s]+/gi,jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Jn,Tu,Bu,vn={},Tl={},mf,gf=function(e){return(Tl=as(e,vn))&&Xt},Pl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oa=function(e,t){return!t&&console.warn(e)},_f=function(e,t){return e&&(vn[e]=t)&&Tl&&(Tl[e]=t)||vn},la=function(){return 0},Qx={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},ev={suppressEvents:!0},ku={},zi=[],wu={},xf,tn={},xu={},sf=30,Sl=[],zu="",Vu=function(e){var t=e[0],n,i;if(Kn(t)||bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sl.length;i--&&!Sl[i].targetTest(t););n=Sl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xu(e[i],n)))||e.splice(i,1);return e},Vi=function(e){return e._gsap||Vu(Rn(e))[0]._gsap},Gu=function(e,t,n){return(n=e[t])&&bt(n)?e[t]():Rl(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},xr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wl=function(){var e=zi.length,t=zi.slice(0),n,i;for(wu={},zi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(e){return!!(e._initted||e._startAt||e.add)},vf=function(e,t,n,i){zi.length&&!Bt&&wl(),e.render(t,n,i||!!(Bt&&t<0&&Hu(e))),zi.length&&!Bt&&wl()},yf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kx).length<2?t:Pt(e)?e.trim():e},bf=function(e){return e},yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},as=function(e,t){for(var n in t)e[n]=t[n];return e},af=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Kn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ra=function(e){var t=e.parent||mt,n=e.keyframes?nv(Wt(e.keyframes)):yn;if(rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Au=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},sv=function r(e){return!e||e._ts&&r(e.parent)},of=function(e){return e._repeat?os(e._tTime,e=e.duration()+e._rDelay)*e:0},os=function(e,t){var n=Math.floor(e=pt(e/t));return e&&n===e?n-1:n},Dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fl=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fl(e),n._dirty||pr(n,e)),e},Sf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Dl(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},$n=function(e,t,n,i){return t.parent&&Gi(t),t._start=pt((mi(n)?n:n||e!==mt?Dn(e,n,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mf(e,t,"_first","_last",e._sort?"_start":0),Du(t)||(e._recent=t),i||Sf(e,t),e._ts<0&&Ll(e,e._tTime),e},Ef=function(e,t){return(vn.ScrollTrigger||Pl("scrollTrigger",t))&&vn.ScrollTrigger.create(t,e)},Tf=function(e,t,n,i,s){if(Zu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xf!==nn.frame)return zi.push(e),e._lazy=[s,i],1},av=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Du=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ov=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&av(e)&&!(!e._initted&&Du(e))||(e._ts<0||e._dp._ts<0)&&!Du(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ha(0,e._tDur,t),u=os(l,o),e._yoyo&&u&1&&(a=1-a),u!==os(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Tf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Au(e,t,n,!0),e._onUpdate&&!n&&xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Gi(e,1),!n&&!Bt&&(xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ls=function(e,t,n,i){var s=e._repeat,a=pt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:pt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ll(e,e._tTime=e._tDur*o),e.parent&&Fl(e),n||pr(e.parent,e),e},lf=function(e){return e instanceof Ot?pr(e):ls(e,e._dur)},cv={_start:0,endTime:la,totalDuration:la},Dn=function r(e,t,n){var i=e.labels,s=e._recent||cv,a=e.duration()>=Cn?s.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},sa=function(e,t,n){var i=mi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;a.immediateRender=rn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Et(t[0],a,t[s+1])},Hi=function(e,t){return e||e===0?t(e):t},ha=function(e,t,n){return n<e?e:n>t?t:n},kt=function(e,t){return!Pt(e)||!(t=jx.exec(e))?"":t[1]},uv=function(e,t,n){return Hi(n,function(i){return ha(e,t,i)})},Cu=[].slice,wf=function(e,t){return e&&Kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Kn(e[0]))&&!e.nodeType&&e!==Jn},hv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Pt(i)&&!t||wf(i,1)?(s=n).push.apply(s,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):Pt(e)&&!n&&(Tu||!cs())?Cu.call((t||Bu).querySelectorAll(e),0):Wt(e)?hv(e,n):wf(e)?Cu.call(e,0):e?[e]:[]},Ru=function(e){return e=Rn(e)[0]||oa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?oa("Invalid scope")||Bu.createElement("div"):e)}},Af=function(e){return e.sort(function(){return .5-Math.random()})},Df=function(e){if(bt(e))return e;var t=Kn(e)?e:{each:e},n=mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Pt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,b,E,S,M,w,A,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Cn])[1],!x){for(A=-Cn;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*u-.5:i%x,b=x===Cn?0:l?g*h/x-.5:i/x|0,A=0,C=Cn,w=0;w<g;w++)E=w%x-p,S=b-(w/x|0),m[w]=M=c?Math.abs(c==="y"?S:E):ff(E*E+S*S),M>A&&(A=M),M<C&&(C=M);i==="random"&&Af(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=kt(t.amount||t.each)||0,n=n&&g<0?Of(n):n}return g=(m[d]-m.min)/m.max||0,pt(m.b+(n?n(g):g)*m.v)+m.u}},Pu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mi(n)?0:kt(n))}},Cf=function(e,t){var n=Wt(e),i,s;return!n&&Kn(e)&&(i=n=e.radius||Cn,e.values?(e=Rn(e.values),(s=!mi(e[0]))&&(i*=i)):e=Pu(e.increment)),Hi(t,n?bt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Cn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||mi(a)?u:u+kt(a)}:Pu(e))},Rf=function(e,t,n,i){return Hi(Wt(e)?!t:n===!0?!!(n=0):!i,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},dv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},fv=function(e,t){return function(n){return e(parseFloat(n))+(t||kt(n))}},pv=function(e,t,n){return If(e,t,0,1,n)},Pf=function(e,t,n){return Hi(n,function(i){return e[~~t(i)]})},mv=function r(e,t,n){var i=t-e;return Wt(e)?Pf(e,r(0,e.length),t):Hi(n,function(s){return(i+(s-e)%i)%i+e})},gv=function r(e,t,n){var i=t-e,s=i*2;return Wt(e)?Pf(e,r(0,e.length-1),t):Hi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},us=function(e){return e.replace(Jx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($x);return Rf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},If=function(e,t,n,i,s){var a=t-e,o=i-n;return Hi(s,function(l){return n+((l-e)/a*o||0)})},_v=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Pt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=as(Wt(e)?[]:{},e));if(!u){for(l in t)qu.call(o,e,l,"get",t[l]);s=function(_){return Ku(_,o)||(a?e.p:e)}}}return Hi(n,s)},cf=function(e,t,n){var i=e.labels,s=Cn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xn=function(e,t,n){var i=e.vars,s=i[t],a=ft,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&zi.length&&wl(),o&&(ft=o),u=l?s.apply(c,l):s.call(c),ft=a,u},na=function(e){return Gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&xn(e,"onInterrupt"),e},rs,Ff=[],Lf=function(e){if(e)if(e=!e.name&&e.default||e,Nu()||e.headless){var t=e.name,n=bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:la,render:Ku,add:qu,kill:Fv,modifier:Iv,rawVars:0},a={targetTest:0,get:0,getSetter:Nl,aliases:{},register:0};if(cs(),e!==i){if(tn[t])return;yn(i,yn(Al(e,s),a)),as(i.prototype,as(s,Al(e,a))),tn[i.prop=t]=i,e.targetTest&&(Sl.push(i),ku[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_f(t,i),e.register&&e.register(Xt,i,$t)}else Ff.push(e)},lt=255,ia={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},vu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Nf=function(e,t,n){var i=e?mi(e)?[e>>16,e>>8&lt,e&lt]:0:ia.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(rf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=vu(l+1/3,s,a),i[1]=vu(l,s,a),i[2]=vu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Uu),n&&i.length<4&&(i[3]=1),i}else i=e.match(rf)||ia.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/lt,a=i[1]/lt,o=i[2]/lt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Uf=function(e){var t=[],n=[],i=-1;return e.split(pi).forEach(function(s){var a=s.match(_r)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},uf=function(e,t,n){var i="",s=(e+i).match(pi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Nf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Uf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(pi,"1").split(_r),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(pi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},pi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),xv=/hsl[a]?\(/,Wu=function(e){var t=e.join(" "),n;if(pi.lastIndex=0,pi.test(t))return n=xv.test(t),e[1]=uf(e[1],n),e[0]=uf(e[0],n,Uf(e[1])),!0},ca,nn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,b=m===!0,E,S,M,w;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,E=M-a,(E>0||b)&&(w=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=E+(E>=s?4:s-E),S=1),b||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](M,d,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){mf&&(!Tu&&Nu()&&(Jn=Tu=window,Bu=Jn.document||{},vn.gsap=Xt,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(Xt.version),gf(Tl||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),Ff.forEach(Lf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ca=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=la},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,b){var E=p?function(S,M,w,A){m(S,M,w,A),h.remove(E)}:m;return h.remove(m),o[b?"unshift":"push"](E),cs(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),cs=function(){return!ca&&nn.wake()},We={},vv=/^[\d.\-M][\d.\-,\s]/,yv=/["']/g,bv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(yv,"").trim():+c,i=l.substr(o+1).trim();return t},Mv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Sv=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bv(t[1])]:Mv(e).split(",").map(yf)):We._CE&&vv.test(e)?We._CE("",e):n},Of=function(e){return function(t){return 1-e(1-t)}},Bf=function r(e,t){for(var n=e._first,i;n;)n instanceof Ot?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(bt(e)?e:We[e]||Sv(e))||t},vr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){We[o]=vn[o]=s,We[a=o.toLowerCase()]=n;for(var l in s)We[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=s[l]}),s},kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Eu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kf(o);return s=Eu/s,l.config=function(c,u){return r(e,c,u)},l},bu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kf(n);return i.config=function(s){return r(e,s)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;vr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;vr("Elastic",yu("in"),yu("out"),yu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};vr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});vr("Circ",function(r){return-(ff(1-r*r)-1)});vr("Sine",function(r){return r===1?1:-Yx(r*Xx)+1});vr("Back",bu("in"),bu("out"),bu());We.SteppedEase=We.steps=vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((i*ha(0,a,o)|0)+s)*n}}};ss.ease=We["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return zu+=r+","+r+"Params,"});var Xu=function(e,t){this.id=qx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gu,this.set=t?t.getSetter:Nl},ua=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ls(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),ca||nn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||Sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?os(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fl(this),rv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$n(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ev);var i=Bt;return Bt=n,Hu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Dn(this,n),rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i)),this._dur||(this._zTime=-ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=bt(n)?n:bf,l=function(){var u=i.then;i.then=null,s&&s(),bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){na(this)},r})();yn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var Ot=(function(r){df(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=rn(n.sortChildren),mt&&$n(n.parent||mt,fi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ef(fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return sa(0,arguments,this),this},t.from=function(i,s,a){return sa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return sa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,Dn(this,a),1),this},t.call=function(i,s,a){return $n(this,Et.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(i,a,Dn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ra(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ra(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:pt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,b,E,S,M,w,A;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,E=this._ts,p=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=pt(u%m),u===l?(g=this._repeat,d=c):(M=pt(u/m),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=os(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(d=c-d,A=1),g!==M&&!this._lock){var C=w&&M&1,x=C===(w&&g&1);if(g<M&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(A?0:pt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Bf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=lv(this,pt(o),pt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!M&&(xn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-ct);break}}f=_}else{f=this._last;for(var T=i<0?i:d;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,a||Bt&&Hu(f)),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=T?-ct:ct);break}}f=_}}if(b&&!s&&(this.pause(),b.render(d>=o?0:-ct)._zTime=d>=o?1:-1,this._ts))return this._start=S,Fl(this),this.render(i,s,a);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Gi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(mi(s)||(s=Dn(this,s,i)),!(i instanceof ua)){if(Wt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Pt(i))return this.addLabel(i,s);if(bt(i))i=Et.delayedCall(0,i);else return this}return this!==i?$n(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Cn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(i.parent===this&&Il(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Dn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Et.delayedCall(0,s||la,a);return o.data="isPause",this._hasPause=1,$n(this,o,Dn(this,i))},t.removePause=function(i){var s=this._first;for(i=Dn(this,i);s;)s._start===i&&s.data==="isPause"&&Gi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ki!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Rn(i),l=this._first,c=mi(s),u;l;)l instanceof Et?tv(l._targets,o)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Dn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Et.to(a,yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ls(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,yn({startAt:{time:Dn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cf(this,Dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cf(this,Dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=pt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Cn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$n(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=pt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ls(a,a===mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(vf(mt,Dl(i,mt)),xf=nn.frame),nn.frame>=sf){sf+=sn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&sn.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},e})(ua);yn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ev=function(e,t,n,i,s,a,o){var l=new $t(this._pt,e,t,0,1,$u,null,s),c=0,u=0,h,d,f,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=us(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(_u)||[];h=_u.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?xr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=_u.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ou.test(i)||p)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,s,a,o,l,c,u){bt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:bt(h)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=bt(h)?c?Cv:Gf:Ju,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=us(i)),i.charAt(1)==="="&&(_=xr(d,i)+(kt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Iu)return!isNaN(d*i)&&i!==""?(_=new $t(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Pv:Hf,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Pl(t,i),Ev.call(this,e,t,d,i,f,l||sn.stringFilter,c))},Tv=function(e,t,n,i,s){if(bt(e)&&(e=aa(e,s,t,n,i)),!Kn(e)||e.style&&e.nodeType||Wt(e)||pf(e))return Pt(e)?aa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=aa(e[o],s,t,n,i);return a},Yu=function(e,t,n,i,s,a){var o,l,c,u;if(tn[e]&&(o=new tn[e]).init(s,o.rawVars?t[e]:Tv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new $t(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ki,Iu,Zu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!Lu,S=e.timeline,M,w,A,C,x,T,R,B,N,W,H,V,O;if(S&&(!d||!s)&&(s="none"),e._ease=mr(s,ss.ease),e._yEase=h?Of(mr(h===!0?s:h,ss.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(B=m[0]?Vi(m[0]).harness:0,V=B&&i[B.prop],M=Al(i,ku),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?Ml:Qx),g._lazy=0),a){if(Gi(e._startAt=Et.set(m,yn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return xn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!f)&&e._startAt.revert(Ml),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),A=yn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&rn(l),immediateRender:o,stagger:0,parent:p},M),V&&(A[B.prop]=V),Gi(e._startAt=Et.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&rn(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],R=x._gsap||Vu(m)[w]._gsap,e._ptLookup[w]=W={},wu[R.id]&&zi.length&&wl(),H=b===m?w:b.indexOf(x),B&&(N=new B).init(x,V||M,e,H,b)!==!1&&(e._pt=C=new $t(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Z){W[Z]=C}),N.priority&&(T=1)),!B||V)for(A in M)tn[A]&&(N=Yu(A,M,e,H,x,b))?N.priority&&(T=1):W[A]=C=qu.call(e,x,A,"get",M[A],H,b,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),E&&e._pt&&(ki=e,mt.killTweensOf(x,W,e.globalTime(t)),O=!e.parent,ki=0),e._pt&&l&&(wu[R.id]=1)}T&&ju(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,d&&t<=0&&S.render(Cn,!0,!0)},wv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Iu=1,e.vars[t]="+=0",Zu(e,o),Iu=0,l?oa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Mt(n)+kt(h.e)),h.b&&(h.b=u.s+kt(h.b))},Av=function(e,t){var n=e[0]?Vi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=as({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Dv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Wt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},aa=function(e,t,n,i,s){return bt(e)?e.call(t,n,i,s):Pt(e)&&~e.indexOf("random(")?us(e):e},zf=zu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vf={};Jt(zf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vf[r]=1});var Et=(function(r){df(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ra(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||mt,E=(Wt(n)||pf(n)?mi(n[0]):"length"in i)?[n]:Rn(n),S,M,w,A,C,x,T,R;if(o._targets=E.length?Vu(E):oa("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||bl(c)||bl(u)){if(i=o.vars,S=o.timeline=new Ot({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:E}),S.kill(),S.parent=S._dp=fi(o),S._start=0,d||bl(c)||bl(u)){if(A=E.length,T=d&&Df(d),Kn(d))for(C in d)~zf.indexOf(C)&&(R||(R={}),R[C]=d[C]);for(M=0;M<A;M++)w=Al(i,Vf),w.stagger=0,p&&(w.yoyoEase=p),R&&as(w,R),x=E[M],w.duration=+aa(c,fi(o),M,x,E),w.delay=(+aa(u,fi(o),M,x,E)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(x,w,T?T(M,x,E):0),S._ease=We.none;S.duration()?c=u=0:o.timeline=0}else if(_){ra(yn(S.vars.defaults,{ease:"none"})),S._ease=mr(_.ease||i.ease||"none");var B=0,N,W,H;if(Wt(_))_.forEach(function(V){return S.to(E,V,">")}),S.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||Dv(C,_[C],w,_.easeEach);for(C in w)for(N=w[C].sort(function(V,O){return V.t-O.t}),B=0,M=0;M<N.length;M++)W=N[M],H={ease:W.e,duration:(W.t-(M?N[M-1].t:0))/100*c},H[C]=W.v,S.to(E,H,B),B+=H.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!Lu&&(ki=fi(o),mt.killTweensOf(E),ki=0),$n(b,fi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===pt(b._time)&&rn(h)&&sv(fi(o))&&b.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),m&&Ef(fi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ct&&!u?l:i<ct?0:i,d,f,_,g,m,p,b,E,S;if(!c)ov(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=pt(h%g),h===l?(_=this._repeat,d=c):(m=pt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,d=c-d),m=os(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(E&&this._yEase&&Bf(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(pt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Tf(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(S||this._ease)(d/c),this._from&&(this.ratio=b=1-b),!o&&h&&!s&&!m&&(xn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Au(this,i,s,a),xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Au(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Gi(this,1),!s&&!(u&&!o)&&(h||o||p)&&(xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ca||nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zu(this,c),u=this._ease(c/this._dur),wv(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Ll(this,0),this.parent||Mf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ki&&ki.vars.overwrite!==!0)._first||na(this),this.parent&&a!==this.timeline.totalDuration()&&ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Rn(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&iv(o,l))return s==="all"&&(this._pt=0),na(this);for(h=this._op=this._op||[],s!=="all"&&(Pt(s)&&(g={},Jt(s,function(b){return g[b]=1}),s=g),s=Av(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Il(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return sa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return mt.killTweensOf(i,s,a)},e})(ua);yn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new Ot,t=Cu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ju=function(e,t,n){return e[t]=n},Gf=function(e,t,n){return e[t](n)},Cv=function(e,t,n,i){return e[t](i.fp,n)},Rv=function(e,t,n){return e.setAttribute(t,n)},Nl=function(e,t){return bt(e[t])?Gf:Rl(e[t])&&e.setAttribute?Rv:Ju},Hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Pv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$u=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Iv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Fv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Lv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ju=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},$t=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Hf,this.d=l||this,this.set=c||Ju,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Lv,this.m=n,this.mt=s,this.tween=i},r})();Jt(zu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ku[r]=1});vn.TweenMax=vn.TweenLite=Et;vn.TimelineLite=vn.TimelineMax=Ot;mt=new Ot({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Wu;var gr=[],El={},Nv=[],hf=0,Uv=0,Mu=function(e){return(El[e]||Nv).map(function(t){return t()})},Fu=function(){var e=Date.now(),t=[];e-hf>2&&(Mu("matchMediaInit"),gr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Jn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Mu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hf=e,Mu("matchMedia"))},Wf=(function(){function r(t,n){this.selector=n&&Ru(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Uv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){bt(n)&&(s=i,i=n,n=bt);var a=this,o=function(){var c=ft,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ru(s)),ft=a,h=i.apply(a,arguments),bt(h)&&a._r.push(h),ft=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Ov=(function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Kn(n)||(n={matches:n});var a=new Wf(0,s||this.scope),o=a.conditions={},l,c,u;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Jn.matchMedia(n[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fu):l.addEventListener("change",Fu)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Lf(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=Rn(e)[0]);var s=Vi(e||{}).get,a=n?bf:yf;return n==="native"&&(n=""),e&&(t?a((tn[t]&&tn[t].get||s)(e,t,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(u){return Xt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=tn[t],o=Vi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;rs._pt=0,h.init(e,n?u+n:u,rs,0,[e]),h.render(1,h),rs._pt&&Ku(1,rs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Xt.to(e,yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,ss.ease)),af(ss,e||{})},config:function(e){return af(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!vn[o]&&oa(t+" effect requires "+o+" plugin.")}),xu[t]=function(o,l,c){return n(Rn(o),yn(l||{},s),c)},a&&(Ot.prototype[t]=function(o,l,c){return this.add(xu[t](o,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):We},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,s;for(n.smoothChildTiming=rn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&$n(n,i,i._start-i._delay),i=s;return $n(mt,n,0),n},context:function(e,t){return e?new Wf(e,t):ft},matchMedia:function(e){return new Ov(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fu()},addEventListener:function(e,t){var n=El[e]||(El[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=El[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mv,wrapYoyo:gv,distribute:Df,random:Rf,snap:Cf,normalize:pv,getUnit:kt,clamp:uv,splitColor:Nf,toArray:Rn,selector:Ru,mapRange:If,pipe:dv,unitize:fv,interpolate:_v,shuffle:Af},install:gf,effects:xu,ticker:nn,updateRoot:Ot.updateRoot,plugins:tn,globalTimeline:mt,core:{PropTween:$t,globals:_f,Tween:Et,Timeline:Ot,Animation:ua,getCache:Vi,_removeLinkedListItem:Il,reverting:function(){return Bt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Lu=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Cl[r]=Et[r]});nn.add(Ot.updateRoot);rs=Cl.to({},{duration:0});var Bv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},kv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Bv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Su=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Pt(s)&&(l={},Jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}kv(o,s)}}}},Xt=Cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Su("roundProps",Pu),Su("modifiers"),Su("snap",Cf))||Cl;Et.version=Ot.version=Xt.version="3.14.2";mf=1;Nu()&&cs();var zv=We.Power0,Vv=We.Power1,Gv=We.Power2,Hv=We.Power3,Wv=We.Power4,Xv=We.Linear,qv=We.Quad,Yv=We.Cubic,Zv=We.Quart,Jv=We.Quint,$v=We.Strong,Kv=We.Elastic,jv=We.Back,Qv=We.SteppedEase,ey=We.Bounce,ty=We.Sine,ny=We.Expo,iy=We.Circ;var Xf,Wi,ds,rh,Sr,ry,qf,sh,sy=function(){return typeof window<"u"},_i={},Mr=180/Math.PI,fs=Math.PI/180,hs=Math.atan2,Yf=1e8,ah=/([A-Z])/g,ay=/(left|right|width|margin|padding|x)/i,oy=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ly=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},np=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dy=function(e,t,n){return e.style[t]=n},fy=function(e,t,n){return e.style.setProperty(t,n)},py=function(e,t,n){return e._gsap[t]=n},my=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gy=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_y=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},gt="transform",an=gt+"Origin",xy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in _i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(i,o)}):this.tfm[e]=a.x?a[e]:gi(i,e),e===an&&(this.tfm.zOrigin=a.zOrigin);else return jn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},ip=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sh(),(!s||!s.isStart)&&!n[gt]&&(ip(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rp=function(e,t){var n={target:e,props:[],revert:vy,save:xy};return e._gsap||Xt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sp,th=function(e,t){var n=Wi.createElementNS?Wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wi.createElement(e);return n&&n.style?n:Wi.createElement(e)},bn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ah,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ps(t)||t,1)||""},Zf="O,Moz,ms,Ms,Webkit".split(","),ps=function(e,t,n){var i=t||Sr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Zf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Zf[a]:"")+e},nh=function(){sy()&&window.document&&(Xf=window,Wi=Xf.document,ds=Wi.documentElement,Sr=th("div")||{style:{}},ry=th("div"),gt=ps(gt),an=gt+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sp=!!ps("perspective"),sh=Xt.core.reverting,rh=1)},Jf=function(e){var t=e.ownerSVGElement,n=th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ds.removeChild(n),s},$f=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ap=function(e){var t,n;try{t=e.getBBox()}catch{t=Jf(e),n=1}return t&&(t.width||t.height)||n||(t=Jf(e)),t&&!t.width&&!t.x&&!t.y?{x:+$f(e,["x","cx","x1"])||0,y:+$f(e,["y","cy","y1"])||0,width:0,height:0}:t},op=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ap(e))},qi=function(e,t){if(t){var n=e.style,i;t in _i&&t!==an&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ah,"-$1").toLowerCase())):n.removeAttribute(t)}},Xi=function(e,t,n,i,s,a){var o=new $t(e._pt,t,n,0,1,a?np:tp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Kf={deg:1,rad:1,turn:1},yy={grid:1,flex:1},Yi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Sr.style,l=ay.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||Kf[i]||Kf[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&op(e),(f||a==="%")&&(_i[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Mt(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Wi||!g.appendChild)&&(g=Wi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===nn.time&&!m.uncache)return Mt(s/m.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,_=e[u],b?e.style[t]=b:qi(e,t)}else(f||a==="%")&&!yy[bn(g,"display")]&&(o.position=bn(e,"position")),g===e&&(o.position="static"),g.appendChild(Sr),_=Sr[u],g.removeChild(Sr),o.position="absolute";return l&&f&&(m=Vi(g),m.time=nn.time,m.width=g[u]),Mt(d?_*s/h:_&&s?h/_*s:0)},gi=function(e,t,n,i){var s;return rh||nh(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),_i[t]&&t!=="transform"?(s=pa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ol(bn(e,an))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ul[t]&&Ul[t](e,t,n)||bn(e,t)||Gu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,n)+n:s},by=function(e,t,n,i){if(!n||n==="none"){var s=ps(t,e,1),a=s&&bn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=bn(e,"borderTopColor"))}var o=new $t(this._pt,e.style,t,0,1,$u),l=0,c=0,u,h,d,f,_,g,m,p,b,E,S,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=bn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=bn(e,t)||i,g?e.style[t]=g:qi(e,t)),u=[n,i],Wu(u),n=u[0],i=u[1],d=n.match(_r)||[],M=i.match(_r)||[],M.length){for(;h=_r.exec(i);)m=h[0],b=i.substring(l,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=xr(f,m)+S),p=parseFloat(m),E=m.substr((p+"").length),l=_r.lastIndex-E.length,E||(E=E||sn.units[t]||S,l===i.length&&(i+=E,o.e+=E)),S!==E&&(f=Yi(e,t,g,E)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?np:tp;return Ou.test(i)&&(o.e=0),this._pt=o,o},jf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},My=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jf[n]||n,t[1]=jf[i]||i,t.join(" ")},Sy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_i[o]&&(l=1,o=o==="transformOrigin"?an:gt),qi(n,o);l&&(qi(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",pa(n,1),a.uncache=1,ip(i)))}},Ul={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new $t(e._pt,t,n,0,0,Sy);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},fa=[1,0,0,1,0,0],lp={},cp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qf=function(e){var t=bn(e,gt);return cp(t)?fa:t.substr(7).match(Uu).map(Mt)},oh=function(e,t){var n=e._gsap||Vi(e),i=e.style,s=Qf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fa:s):(s===fa&&!e.offsetParent&&e!==ds&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ds.appendChild(e)),s=Qf(e),l?i.display=l:qi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(e,t,n,i,s,a){var o=e._gsap,l=s||oh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],E=t.split(" "),S=parseFloat(E[0])||0,M=parseFloat(E[1])||0,w,A,C,x;n?l!==fa&&(A=f*m-_*g)&&(C=S*(m/A)+M*(-g/A)+(g*b-m*p)/A,x=S*(-_/A)+M*(f/A)-(f*b-_*p)/A,S=C,M=x):(w=ap(e),S=w.x+(~E[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(E[1]||E[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&o.smooth?(p=S-c,b=M-u,o.xOffset=h+(p*f+b*g)-p,o.yOffset=d+(p*_+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[an]="0px 0px",a&&(Xi(a,o,"xOrigin",c,S),Xi(a,o,"yOrigin",u,M),Xi(a,o,"xOffset",h,o.xOffset),Xi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},pa=function(e,t){var n=e._gsap||new Xu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=bn(e,an)||"0",u,h,d,f,_,g,m,p,b,E,S,M,w,A,C,x,T,R,B,N,W,H,V,O,Z,oe,te,ce,Ie,Ne,qe,Ye;return u=h=d=g=m=p=b=E=S=0,f=_=1,n.svg=!!(e.getCTM&&op(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),A=oh(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),ih(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==fa&&(R=A[0],B=A[1],N=A[2],W=A[3],u=H=A[4],h=V=A[5],A.length===6?(f=Math.sqrt(R*R+B*B),_=Math.sqrt(W*W+N*N),g=R||B?hs(B,R)*Mr:0,b=N||W?hs(N,W)*Mr+g:0,b&&(_*=Math.abs(Math.cos(b*fs))),n.svg&&(u-=M-(M*R+w*N),h-=w-(M*B+w*W))):(Ye=A[6],Ne=A[7],te=A[8],ce=A[9],Ie=A[10],qe=A[11],u=A[12],h=A[13],d=A[14],C=hs(Ye,Ie),m=C*Mr,C&&(x=Math.cos(-C),T=Math.sin(-C),O=H*x+te*T,Z=V*x+ce*T,oe=Ye*x+Ie*T,te=H*-T+te*x,ce=V*-T+ce*x,Ie=Ye*-T+Ie*x,qe=Ne*-T+qe*x,H=O,V=Z,Ye=oe),C=hs(-N,Ie),p=C*Mr,C&&(x=Math.cos(-C),T=Math.sin(-C),O=R*x-te*T,Z=B*x-ce*T,oe=N*x-Ie*T,qe=W*T+qe*x,R=O,B=Z,N=oe),C=hs(B,R),g=C*Mr,C&&(x=Math.cos(C),T=Math.sin(C),O=R*x+B*T,Z=H*x+V*T,B=B*x-R*T,V=V*x-H*T,R=O,H=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Mt(Math.sqrt(R*R+B*B+N*N)),_=Mt(Math.sqrt(V*V+Ye*Ye)),C=hs(H,V),b=Math.abs(C)>2e-4?C*Mr:0,S=qe?1/(qe<0?-qe:qe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cp(bn(e,gt)),O&&e.setAttribute("transform",O))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Mt(f),n.scaleY=Mt(_),n.rotation=Mt(g)+o,n.rotationX=Mt(m)+o,n.rotationY=Mt(p)+o,n.skewX=b+o,n.skewY=E+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[an]=Ol(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?Ty:sp?up:Ey,n.uncache=0,n},Ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qu=function(e,t,n){var i=kt(t);return Mt(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},Ey=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,up(e,t)},yr="0deg",da="0px",br=") ",up=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,E=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(E&&(h!==yr||u!==yr)){var w=parseFloat(u)*fs,A=Math.sin(w),C=Math.cos(w),x;w=parseFloat(h)*fs,x=Math.cos(w),a=Qu(b,a,A*x*-E),o=Qu(b,o,-Math.sin(w)*-E),l=Qu(b,l,C*x*-E+E)}m!==da&&(S+="perspective("+m+br),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||a!==da||o!==da||l!==da)&&(S+=l!==da||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==yr&&(S+="rotate("+c+br),u!==yr&&(S+="rotateY("+u+br),h!==yr&&(S+="rotateX("+h+br),(d!==yr||f!==yr)&&(S+="skew("+d+", "+f+br),(_!==1||g!==1)&&(S+="scale("+_+", "+g+br),b.style[gt]=S||"translate(0, 0)"},Ty=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,E=parseFloat(a),S=parseFloat(o),M,w,A,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fs,c*=fs,M=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=fs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,w*=x)),M=Mt(M),w=Mt(w),A=Mt(A),C=Mt(C)):(M=h,C=d,w=A=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=Yi(f,"x",a,"px"),S=Yi(f,"y",o,"px")),(_||g||m||p)&&(E=Mt(E+_-(_*M+g*A)+m),S=Mt(S+g-(_*w+g*C)+p)),(i||s)&&(x=f.getBBox(),E=Mt(E+i/100*x.width),S=Mt(S+s/100*x.height)),x="matrix("+M+","+w+","+A+","+C+","+E+","+S+")",f.setAttribute("transform",x),b&&(f.style[gt]=x)},wy=function(e,t,n,i,s){var a=360,o=Pt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Mr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Yf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Yf)%a-~~(c/a)*a)),e._pt=d=new $t(e._pt,t,n,i,c,ly),d.e=u,d.u="deg",e._props.push(n),d},ep=function(e,t){for(var n in t)e[n]=t[n];return e},Ay=function(e,t,n){var i=ep({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=pa(n,1),qi(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=pa(n,1),a[gt]=c);for(l in _i)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=kt(c),_=kt(u),h=f!==_?Yi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new $t(e._pt,o,l,h,d-h,eh),e._pt.u=_||0,e._props.push(l));ep(o,i)};Jt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ul[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return gi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var lh={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,b,E,S,M,w,A,C,x;rh||nh(),this.styles=this.styles||rp(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(tn[g]&&Yu(g,t,n,i,e,s)))){if(f=typeof u,_=Ul[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=us(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",pi.lastIndex=0,pi.test(c)||(m=kt(c),p=kt(u),p?m!==p&&(c=Yi(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Pt(c)&&~c.indexOf("random(")&&(c=us(c)),kt(c+"")||c==="auto"||(c+=sn.units[g]||kt(gi(e,g))||""),(c+"").charAt(1)==="="&&(c=gi(e,g))):c=gi(e,g),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in jn&&(g==="autoAlpha"&&(d===1&&gi(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),Xi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=jn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in _i,E){if(this.styles.save(g),x=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=bn(e,"perspective"),T?e.style.perspective=T:qi(e,"perspective")}h=parseFloat(u)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||pa(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new $t(this._pt,o,gt,0,1,M.renderTransform,M,0,-1),S.dep=1),g==="scale")this._pt=new $t(this._pt,M,"scaleY",M.scaleY,(b?xr(M.scaleY,b+h):h)-M.scaleY||0,eh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(an,0,o[an]),u=My(u),M.svg?ih(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Xi(this,M,"zOrigin",M.zOrigin,p),Xi(this,o,g,Ol(c),Ol(u)));continue}else if(g==="svgOrigin"){ih(e,u,1,w,0,this);continue}else if(g in lp){wy(this,M,g,d,b?xr(d,b+u):u);continue}else if(g==="smoothOrigin"){Xi(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){Ay(this,u,e);continue}}else g in o||(g=ps(g)||g);if(E||(h||h===0)&&(d||d===0)&&!oy.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=kt(u)||(g in sn.units?sn.units[g]:m),m!==p&&(d=Yi(e,g,c,p)),this._pt=new $t(this._pt,E?M:o,g,d,(b?xr(d,b+h):h)-d,!E&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?hy:eh),this._pt.u=p||0,E&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=uy):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=cy);else if(g in o)by.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Pl(g,u);continue}E||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}A&&ju(this)},render:function(e,t){if(t.tween._time||!sh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in _i&&t!==an&&(e._gsap.x||gi(e,"x"))?n&&qf===n?t==="scale"?my:py:(qf=n||{})&&(t==="scale"?gy:_y):e.style&&!Rl(e.style[t])?dy:~t.indexOf("-")?fy:Nl(e,t)},core:{_removeProperty:qi,_getMatrix:oh}};Xt.utils.checkPrefix=ps;Xt.core.getStyleSaver=rp;(function(r,e,t,n){var i=Jt(r+","+e+","+t,function(s){_i[s]=1});Jt(e,function(s){sn.units[s]="deg",lp[s]=1}),jn[i[13]]=r+","+e,Jt(n,function(s){var a=s.split(":");jn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){sn.units[r]="px"});Xt.registerPlugin(lh);var Bl=Xt.registerPlugin(lh)||Xt,pE=Bl.core.Tween;var Dy=/(?:^\s+|\s+$)/g,Cy=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function ch(r){var e=r.nodeType,t="";if(e===1||e===9||e===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)t+=ch(r)}else if(e===3||e===4)return r.nodeValue;return t}function kl(r,e,t,n,i){for(var s=r.firstChild,a=[],o;s;)s.nodeType===3?(o=(s.nodeValue+"").replace(/^\n+/g,""),n||(o=o.replace(/\s+/g," ")),a.push.apply(a,uh(o,e,t,n,i))):(s.nodeName+"").toLowerCase()==="br"?a[a.length-1]+="<br>":a.push(s.outerHTML),s=s.nextSibling;if(!i)for(o=a.length;o--;)a[o]==="&"&&a.splice(o,1,"&amp;");return a}function uh(r,e,t,n,i){if(r+="",t&&(r=r.trim?r.trim():r.replace(Dy,"")),e&&e!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var s=[],a=r.length,o=0,l,c;o<a;o++)c=r.charAt(o),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||r.charCodeAt(o+1)>=65024&&r.charCodeAt(o+1)<=65039)&&(l=((r.substr(o,12).split(Cy)||[])[1]||"").length||2,c=r.substr(o,l),s.emoji=1,o+=l-1),s.push(i?c:c===">"?"&gt;":c==="<"?"&lt;":n&&c===" "&&(r.charAt(o-1)===" "||r.charAt(o+1)===" ")?"&nbsp;":c);return s}var ma,zl,Ry=function(){return ma||typeof window<"u"&&(ma=window.gsap)&&ma.registerPlugin&&ma},ms={version:"3.14.2",name:"text",init:function(e,t,n){typeof t!="object"&&(t={value:t});var i=e.nodeName.toUpperCase(),s=this,a=t,o=a.newClass,l=a.oldClass,c=a.preserveSpaces,u=a.rtl,h=s.delimiter=t.delimiter||"",d=s.fillChar=t.fillChar||(t.padSpace?"&nbsp;":""),f,_,g,m,p,b,E,S;if(s.svg=e.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in e)&&!s.svg)return!1;if(s.target=e,!("value"in t)){s.text=s.original=[""];return}for(g=kl(e,h,!1,c,s.svg),zl||(zl=document.createElement("div")),zl.innerHTML=t.value,_=kl(zl,h,!1,c,s.svg),s.from=n._from,(s.from||u)&&!(u&&s.from)&&(i=g,g=_,_=i),s.hasClass=!!(o||l),s.newClass=u?l:o,s.oldClass=u?o:l,i=g.length-_.length,f=i<0?g:_,i<0&&(i=-i);--i>-1;)f.push(d);if(t.type==="diff"){for(m=0,p=[],b=[],E="",i=0;i<_.length;i++)S=_[i],S===g[i]?E+=S:(p[m]=E+S,b[m++]=E+g[i],E="");_=p,g=b,E&&(_.push(E),g.push(E))}t.speed&&n.duration(Math.min(.05/t.speed*f.length,t.maxDuration||9999)),s.rtl=u,s.original=g,s.text=_,s._props.push("text")},render:function(e,t){e>1?e=1:e<0&&(e=0),t.from&&(e=1-e);var n=t.text,i=t.hasClass,s=t.newClass,a=t.oldClass,o=t.delimiter,l=t.target,c=t.fillChar,u=t.original,h=t.rtl,d=n.length,f=(h?1-e:e)*d+.5|0,_,g,m;i&&e?(_=s&&f,g=a&&f!==d,m=(_?"<span class='"+s+"'>":"")+n.slice(0,f).join(o)+(_?"</span>":"")+(g?"<span class='"+a+"'>":"")+o+u.slice(f).join(o)+(g?"</span>":"")):m=n.slice(0,f).join(o)+o+u.slice(f).join(o),t.svg?l.textContent=m:l.innerHTML=c==="&nbsp;"&&~m.indexOf("  ")?m.split("  ").join("&nbsp;&nbsp;"):m}};ms.splitInnerHTML=kl;ms.emojiSafeSplit=uh;ms.getText=ch;Ry()&&ma.registerPlugin(ms);var Py=["heroTitle"],Iy=["heroSubtitle"],Fy=["ctaButton"];function Ly(r,e){if(r&1&&Ge(0,"app-social-link",60),r&2){let t=e.$implicit;ot("href",t.href)("icon",t.icon)("label",t.label)("color",t.color)}}Bl.registerPlugin(ms);var Vl=class r{constructor(e){this.platformId=e}heroTitle;heroSubtitle;ctaButton;stats=[{value:"2+",label:`Years of
Experience`,color:"blue"},{value:"15+",label:`Projects
Completed`,color:"purple"},{value:"10+",label:`Technologies
Learned`,color:"cyan"}];socialLinks=[{href:"https://github.com/prabanjan127",icon:"fab fa-github",label:"GitHub",color:"blue"},{href:"https://linkedin.com/in/prabanjan-s/",icon:"fab fa-linkedin",label:"LinkedIn",color:"cyan"},{href:"mailto:prabanjansakthibabu@gmail.com",icon:"fas fa-envelope",label:"Email",color:"purple"}];ngAfterViewInit(){zn(this.platformId)&&this.initAnimations()}initAnimations(){Bl.timeline({defaults:{ease:"power3.out"}}).from(this.heroTitle.nativeElement,{y:50,opacity:0,duration:1,delay:.5}).to(this.heroSubtitle.nativeElement,{duration:2,text:"Frontend Engineering: Where Art Meets Code",delimiter:""},"-=0.5").from(this.ctaButton.nativeElement,{y:20,opacity:0,duration:.8},"-=1")}trackBySocialLink(e,t){return t.href}trackByStat(e,t){return t.label}static \u0275fac=function(t){return new(t||r)(Sn(xi))};static \u0275cmp=At({type:r,selectors:[["app-hero"]],viewQuery:function(t,n){if(t&1&&Ma(Py,5)(Iy,5)(Fy,5),t&2){let i;Cr(i=Rr())&&(n.heroTitle=i.first),Cr(i=Rr())&&(n.heroSubtitle=i.first),Cr(i=Rr())&&(n.ctaButton=i.first)}},decls:77,vars:5,consts:[["heroTitle",""],["heroSubtitle",""],["ctaButton",""],[1,"relative","w-full","min-h-screen","flex","items-center","justify-center","overflow-hidden","py-20","px-4"],["appParallax","",1,"absolute","inset-0","z-0",3,"parallaxRatio"],["appParallax","",1,"absolute","inset-0","z-[1]","opacity-30",3,"parallaxRatio"],[1,"absolute","top-1/4","left-1/4","w-2","h-2","bg-blue-400","rounded-full","animate-ping"],[1,"absolute","top-1/2","right-1/3","w-1","h-1","bg-cyan-400","rounded-full","animate-pulse",2,"animation-delay","1s"],[1,"absolute","bottom-1/3","left-1/2","w-3","h-3","bg-purple-400","rounded-full","animate-bounce",2,"animation-delay","0.5s"],[1,"absolute","top-2/3","right-1/4","w-2","h-2","bg-pink-400","rounded-full","animate-ping",2,"animation-delay","1.5s"],["appParallax","",1,"absolute","inset-0","z-[1]","bg-gradient-to-br","from-blue-600/10","via-transparent","to-purple-600/10","animate-gradient",2,"background-size","400% 400%",3,"parallaxRatio"],[1,"relative","z-10","w-full","max-w-7xl","mx-auto"],[1,"flex","flex-col","lg:flex-row","items-center","justify-between","gap-8","lg:gap-12"],[1,"flex-1","text-center","lg:text-left","w-full"],[1,"inline-block","mb-6","animate-float"],[1,"px-4","py-2","bg-emerald-500/10","border","border-emerald-400/40","rounded-full","text-xs","font-mono-custom","text-emerald-400","tracking-wider","uppercase","backdrop-blur-md","animate-pulse-glow","inline-flex","items-center","gap-2"],[1,"relative","flex","h-2","w-2"],[1,"animate-ping","absolute","inline-flex","h-full","w-full","rounded-full","bg-emerald-400","opacity-75"],[1,"relative","inline-flex","rounded-full","h-2","w-2","bg-emerald-500"],[1,"text-5xl","sm:text-6xl","md:text-7xl","lg:text-8xl","font-bold","leading-tight","mb-4","tracking-tight"],[1,"block","text-white","mb-2"],[1,"block","text-transparent","bg-clip-text","bg-gradient-to-r","from-blue-400","via-cyan-300","to-purple-400","animate-gradient","glow-text","break-words"],[1,"h-10","mb-6","flex","justify-center","lg:justify-start","items-center"],[1,"text-blue-400/60","font-mono-custom","text-sm","mr-2"],[1,"text-base","md:text-lg","lg:text-xl","font-mono-custom","text-gray-300"],[1,"w-[2px]","h-6","bg-blue-400","ml-1","animate-blink","shadow-[0_0_10px_rgba(59,130,246,0.8)]"],[1,"flex","flex-wrap","justify-center","lg:justify-start","gap-2","mb-6"],["label","Angular","icon","fas fa-code","color","blue"],["label","Node.js","icon","fab fa-node","color","cyan"],["label","Security","icon","fas fa-shield-alt","color","purple"],["label","Flutter","icon","fas fa-mobile-alt","color","pink"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-center","lg:justify-start","items-center","mb-8"],["href","#projects",1,"group","relative","px-8","py-3","bg-gradient-to-r","from-blue-500","to-blue-600","text-white","font-bold","text-sm","tracking-wide","hover:from-blue-600","hover:to-blue-700","transition-all","duration-300","rounded-xl","overflow-hidden","shadow-lg","shadow-blue-500/50","hover:shadow-blue-500/70","hover:scale-105","w-full","sm:w-auto","text-center"],[1,"relative","z-10","flex","items-center","justify-center","gap-2"],[1,"fas","fa-rocket"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","group-hover:translate-x-1","transition-transform"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17 8l4 4m0 0l-4 4m4-4H3"],["href","mailto:prabanjansakthibabu@gmail.com",1,"group","px-8","py-3","border-2","border-blue-400/40","hover:border-blue-400","text-white","font-mono-custom","text-sm","hover:bg-blue-500/10","rounded-xl","transition-all","duration-300","hover:scale-105","backdrop-blur-sm","w-full","sm:w-auto","text-center"],[1,"far","fa-envelope","mr-2"],[1,"grid","grid-cols-3","gap-4","lg:gap-6","mt-8","pt-8","border-t","border-blue-500/20"],["value","2+","colorStart","blue","colorEnd","cyan","alignment","text-center lg:text-left"],["value","15+","colorStart","purple","colorEnd","pink","alignment","text-center"],["value","10+","colorStart","cyan","colorEnd","emerald","alignment","text-center lg:text-right"],[1,"flex","justify-center","lg:justify-start","gap-4","mt-6"],[3,"href","icon","label","color",4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex-shrink-0","animate-float","mt-8","lg:mt-0"],[1,"relative","group"],[1,"absolute","-inset-1","rounded-full","bg-gradient-to-r","from-blue-500","via-cyan-400","to-purple-500","animate-spin-slow","opacity-75","blur-sm","group-hover:blur-md","transition-all",2,"animation-duration","8s"],[1,"absolute","-inset-2","rounded-full","bg-gradient-to-r","from-purple-500","via-pink-400","to-blue-500","animate-spin-slow","opacity-50","blur-md",2,"animation-duration","12s","animation-direction","reverse"],[1,"relative","w-48","h-48","sm:w-56","sm:h-56","md:w-64","md:h-64","lg:w-72","lg:h-72","rounded-full","overflow-hidden","border-4","border-blue-400/30","shadow-[0_0_50px_rgba(59,130,246,0.5)]","group-hover:shadow-[0_0_80px_rgba(59,130,246,0.8)]","transition-all","duration-500"],["src","assets/images/profile.jpg","alt","Prabanjanakthibabu",1,"w-full","h-full","object-cover","transform","group-hover:scale-110","transition-transform","duration-500"],[1,"absolute","inset-0","bg-gradient-to-t","from-blue-900/50","via-transparent","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-500"],[1,"absolute","-top-2","-left-2","w-5","h-5","border-t-2","border-l-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-top-2","-right-2","w-5","h-5","border-t-2","border-r-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-bottom-2","-left-2","w-5","h-5","border-b-2","border-l-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-bottom-2","-right-2","w-5","h-5","border-b-2","border-r-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","bottom-8","left-1/2","transform","-translate-x-1/2","flex","flex-col","items-center","gap-2","opacity-70","hover:opacity-100","transition-all"],[1,"text-[10px]","font-mono-custom","uppercase","tracking-widest","text-blue-400","animate-pulse"],[1,"w-[2px]","h-16","bg-gradient-to-b","from-blue-400","via-cyan-400","to-transparent","animate-pulse"],[1,"fas","fa-chevron-down","text-blue-400","animate-bounce","text-sm"],[3,"href","icon","label","color"]],template:function(t,n){t&1&&(xe(0,"section",3),Ge(1,"app-three-scene",4),xe(2,"div",5),Ge(3,"div",6)(4,"div",7)(5,"div",8)(6,"div",9),_e(),Ge(7,"div",10),xe(8,"div",11)(9,"div",12)(10,"div",13)(11,"div",14)(12,"span",15)(13,"span",16),Ge(14,"span",17)(15,"span",18),_e(),Ae(16," Crafting Digital Experiences "),_e()(),xe(17,"h1",19,0)(19,"span",20),Ae(20,"Hi! I'm"),_e(),xe(21,"span",21),Ae(22,"Prabanjan"),_e()(),xe(23,"div",22)(24,"span",23),Ae(25,">"),_e(),Ge(26,"p",24,1)(28,"span",25),_e(),xe(29,"div",26),Ge(30,"app-tech-badge",27)(31,"app-tech-badge",28)(32,"app-tech-badge",29)(33,"app-tech-badge",30),_e(),xe(34,"div",31,2)(36,"a",32)(37,"span",33),Ge(38,"i",34),xe(39,"span"),Ae(40,"View Projects"),_e(),yh(),xe(41,"svg",35),Ge(42,"path",36),_e()()(),bh(),xe(43,"a",37),Ge(44,"i",38),Ae(45,"Contact_Me "),_e()(),xe(46,"div",39)(47,"app-stat-card",40),Ae(48," Years of"),Ge(49,"br"),Ae(50,"Experience "),_e(),xe(51,"app-stat-card",41),Ae(52," Projects"),Ge(53,"br"),Ae(54,"Completed "),_e(),xe(55,"app-stat-card",42),Ae(56," Technologies"),Ge(57,"br"),Ae(58,"Learned "),_e()(),xe(59,"div",43),Qt(60,Ly,1,4,"app-social-link",44),_e()(),xe(61,"div",45)(62,"div",46),Ge(63,"div",47)(64,"div",48),xe(65,"div",49),Ge(66,"img",50)(67,"div",51),_e(),Ge(68,"div",52)(69,"div",53)(70,"div",54)(71,"div",55),_e()()()(),xe(72,"div",56)(73,"span",57),Ae(74,"Explore"),_e(),Ge(75,"div",58)(76,"i",59),_e()()),t&2&&(Le(),ot("parallaxRatio",.1),Le(),ot("parallaxRatio",.2),Le(5),ot("parallaxRatio",.15),Le(53),ot("ngForOf",n.socialLinks)("ngForTrackBy",n.trackBySocialLink))},dependencies:[Ft,yi,_l,xl,vl,yl,is],encapsulation:2,changeDetection:0})};var Ny=["*"],Gl=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-glass-card"]],ngContentSelectors:Ny,decls:2,vars:0,consts:[[1,"glass-panel","p-8","h-full"]],template:function(t,n){t&1&&(Ar(),xs(0,"div",0),Dr(1),ya())},dependencies:[Ft],encapsulation:2})};var Uy=(r,e)=>({"md:text-right md:order-1":r,"md:order-3 md:text-left":e}),Oy=(r,e)=>({"md:order-3":r,"md:order-1":e});function By(r,e){if(r&1&&(xe(0,"div",9,0)(2,"div",10)(3,"span",11),Ae(4),_e()(),xe(5,"div",12),Ge(6,"div",13),_e(),xe(7,"div",14)(8,"app-glass-card")(9,"span",15),Ae(10),_e(),xe(11,"h3",16),Ae(12),_e(),xe(13,"p",17),Ae(14),_e(),xe(15,"p",18),Ae(16),_e()()()()),r&2){let t=e.$implicit,n=e.index;Le(2),ot("ngClass",jl(7,Uy,n%2===0,n%2!==0)),Le(2),vi(t.period),Le(3),ot("ngClass",jl(10,Oy,n%2===0,n%2!==0)),Le(3),vi(t.period),Le(2),vi(t.role),Le(2),vi(t.company),Le(2),vi(t.description)}}var Hl=class r{experiences=[{role:"Trainee Programmer",company:"Kumaran Systems",period:"Oct 2024 - Present",description:"Full-time role in Chennai. Specializing in Angular and Angular Material development."},{role:"Intern",company:"Kumaran Systems",period:"Mar 2024 - Sep 2024",description:"6-month internship focusing on ASP.NET and Shell Scripting."},{role:"Website Developer",company:"HackOverSecurity",period:"Nov 2022",description:"Transitioned to a freelance role delivering front-end solutions and CSS enhancements."},{role:"Frontend Developer Intern",company:"HackOverSecurity",period:"Oct 2022 - Nov 2022",description:"Completed a one-month internship working on client projects for a security firm."},{role:"Freelance Web Developer",company:"Self-Employed",period:"Oct 2022 - Nov 2022",description:"Remote contract work delivering Javascript-based frontend applications."}];static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-timeline"]],decls:12,vars:1,consts:[["timelineItem",""],[1,"py-32","relative","overflow-hidden"],[1,"absolute","top-0","right-0","w-1/3","h-full","bg-gradient-to-l","from-primary/5","to-transparent","pointer-events-none"],[1,"container-custom"],[1,"text-4xl","md:text-5xl","font-bold","mb-20","text-center"],[1,"text-neon"],[1,"relative","max-w-5xl","mx-auto"],[1,"absolute","left-0","md:left-1/2","transform","md:-translate-x-1/2","h-full","w-[1px]","bg-gradient-to-b","from-transparent","via-primary/30","to-transparent"],["class","mb-24 flex flex-col md:flex-row justify-between items-center w-full group reveal-child",4,"ngFor","ngForOf"],[1,"mb-24","flex","flex-col","md:flex-row","justify-between","items-center","w-full","group","reveal-child"],[1,"w-full","md:w-5/12","mb-8","md:mb-0",3,"ngClass"],[1,"hidden","md:block","text-neon","font-mono-custom","text-xl"],[1,"z-10","order-first","md:order-2","flex","items-center","justify-center","w-4","h-4","bg-black","border","border-primary","rounded-full","group-hover:bg-primary","group-hover:shadow-[0_0_20px_var(--primary)]","transition-all","duration-300","relative","mb-8","md:mb-0"],[1,"absolute","w-full","h-full","rounded-full","bg-primary","opacity-0","group-hover:animate-ping"],[1,"w-full","md:w-5/12","relative",3,"ngClass"],[1,"md:hidden","text-neon","font-mono-custom","text-xs","mb-2","block"],[1,"text-2xl","font-bold","text-white","mb-1"],[1,"text-primary/80","font-mono-custom","text-sm","mb-4"],[1,"text-gray-400","text-base","leading-relaxed"]],template:function(t,n){t&1&&(xe(0,"section",1),Ge(1,"div",2),xe(2,"div",3)(3,"h2",4)(4,"span",5),Ae(5,"<"),_e(),Ae(6,"Experience"),xe(7,"span",5),Ae(8,"/>"),_e()(),xe(9,"div",6),Ge(10,"div",7),Qt(11,By,17,13,"div",8),_e()()()),t&2&&(Le(11),ot("ngForOf",n.experiences))},dependencies:[Ft,Pr,yi,Gl],styles:[".reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:opacity .8s ease-out,transform .8s ease-out}.in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view   [_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}app-glass-card[_ngcontent-%COMP%]{display:block;transition:transform .3s ease}app-glass-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}"]})};function ky(r,e){if(r&1&&(xe(0,"span",11),Ae(1),_e()),r&2){let t=e.$implicit;Le(),cn(" ",t," ")}}function zy(r,e){if(r&1&&(xe(0,"div",6)(1,"h3",7),Ge(2,"i",8),Ae(3),_e(),xe(4,"div",9),Qt(5,ky,2,1,"span",10),_e()()),r&2){let t=e.$implicit;Le(3),cn(" ",t.title," "),Le(2),ot("ngForOf",t.skills)}}var Wl=class r{skillCategories=[{title:"Frontend & UI",skills:["HTML","CSS","JavaScript","Bootstrap","UI/UX"]},{title:"Backend & App Dev",skills:["Node.js","Java","Python","Flutter","MySQL"]},{title:"Security & Tools",skills:["Kali Linux","CCNA","Git","GitHub","VS Code"]}];static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-skills-matrix"]],decls:10,vars:1,consts:[[1,"py-32","bg-black/20"],[1,"container-custom"],[1,"text-4xl","md:text-5xl","font-bold","mb-20","text-center"],[1,"text-neon"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8"],["class","glass-panel p-8 hover:bg-white/5 transition-all duration-300 reveal-child",4,"ngFor","ngForOf"],[1,"glass-panel","p-8","hover:bg-white/5","transition-all","duration-300","reveal-child"],[1,"text-2xl","font-bold","text-white","mb-8","pb-4","border-b","border-white/10","flex","items-center","gap-3"],[1,"fas","fa-terminal","text-primary","text-sm"],[1,"flex","flex-wrap","gap-3"],["class","px-4 py-2 bg-white/5 text-gray-300 text-sm font-mono-custom rounded border border-white/10 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all cursor-default",4,"ngFor","ngForOf"],[1,"px-4","py-2","bg-white/5","text-gray-300","text-sm","font-mono-custom","rounded","border","border-white/10","hover:border-primary/50","hover:text-white","hover:bg-primary/10","transition-all","cursor-default"]],template:function(t,n){t&1&&(xe(0,"section",0)(1,"div",1)(2,"h2",2)(3,"span",3),Ae(4,"<"),_e(),Ae(5,"Skills_Matrix"),xe(6,"span",3),Ae(7,"/>"),_e()(),xe(8,"div",4),Qt(9,zy,6,2,"div",5),_e()()()),t&2&&(Le(9),ot("ngForOf",n.skillCategories))},dependencies:[Ft,yi],styles:[".reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1);transition:opacity .6s ease-out,transform .6s cubic-bezier(.34,1.56,.64,1)}.in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view   [_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1)}"]})};var Xl=class{static formatNumber(e,t=2){return e.toString().padStart(t,"0")}};var Vy=(r,e,t)=>({"bg-gradient-to-br from-blue-500/20 via-transparent to-transparent":r,"bg-gradient-to-br from-purple-500/20 via-transparent to-transparent":e,"bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent":t});function Gy(r,e){if(r&1&&(xe(0,"span",35),Ae(1),_e()),r&2){let t=e.$implicit;Le(),cn(" ",t," ")}}function Hy(r,e){if(r&1&&(xe(0,"div",36)(1,"span",37),Ge(2,"i",38),Ae(3),_e()()),r&2){let t=wr().$implicit;Le(3),cn("",t.metrics," ")}}function Wy(r,e){if(r&1&&(xe(0,"a",39),Ge(1,"i",40),xe(2,"span"),Ae(3,"Demo"),_e()()),r&2){let t=wr().$implicit;ot("href",t.demo,_s)}}function Xy(r,e){if(r&1&&(xe(0,"div",14)(1,"div",15)(2,"div",16)(3,"span",17),Ae(4),_e()()(),xe(5,"div",18),Ge(6,"div",19),_e(),xe(7,"div",20)(8,"div",21),Qt(9,Gy,2,1,"span",22),_e(),Qt(10,Hy,4,1,"div",23),Ge(11,"div",24),xe(12,"div",25)(13,"h3",26),Ae(14),_e(),xe(15,"p",27),Ae(16),_e(),xe(17,"div",28)(18,"a",29),Ge(19,"i",30),xe(20,"span"),Ae(21,"Code"),_e(),Ge(22,"i",31),_e(),Qt(23,Wy,4,1,"a",32),_e()()(),Ge(24,"div",33)(25,"div",34),_e()),r&2){let t=e.$implicit,n=e.index,i=wr();Le(4),cn("_",i.formatNumber(n+1)),Le(2),ot("ngClass",Ah(8,Vy,n%3===0,n%3===1,n%3===2)),Le(3),ot("ngForOf",t.tags.slice(0,3)),Le(),ot("ngIf",t.metrics),Le(4),cn(" ",t.title," "),Le(2),cn(" ",t.description," "),Le(2),ot("href",t.link,_s),Le(5),ot("ngIf",t.demo)}}var ql=class r{projects=[{title:"Bus Ticket Booking System",description:"A comprehensive Java-based system for managing bus routes, bookings, and passenger reservations. Features include real-time seat availability, payment processing, and route management.",tags:["Java","MySQL","JDBC","Swing"],link:"https://github.com/prabanjan127/bus_ticket_booking_system",image:"assets/images/projects/bus-booking.jpg",metrics:"Complete CRUD operations, 5+ database tables",technologies:["Java","MySQL","JDBC","Swing UI"]},{title:"In-Out Calculator",description:"A Flutter mobile application designed for efficient time tracking and in/out operation calculations. Features a clean, intuitive interface with data persistence and analytics.",tags:["Flutter","Dart","SQLite","Mobile"],link:"https://github.com/prabanjan127/in_out_calculator",image:"assets/images/projects/calculator-app.jpg",metrics:"Cross-platform mobile app with offline support",technologies:["Flutter","Dart","SQLite","Provider"]},{title:"To-Do App",description:"A modern task management web application built with React, featuring drag-and-drop functionality, category organization, and local storage persistence for seamless task tracking.",tags:["React","JavaScript","CSS3","LocalStorage"],link:"https://github.com/prabanjan127/to-do-app",demo:"https://prabanjan127.github.io/to-do-app",image:"assets/images/projects/todo-app.jpg",metrics:"Responsive design, real-time updates",technologies:["React","JavaScript","CSS3","HTML5"]},{title:"Web Development Projects Collection",description:"A comprehensive collection of full-stack web applications demonstrating proficiency in PHP, MySQL, and Firebase. Includes e-commerce demos, authentication systems, and database-driven applications.",tags:["Full Stack","PHP","Firebase","MySQL"],link:"https://github.com/prabanjan127/web_development_projects",image:"assets/images/projects/web-projects.jpg",metrics:"10+ projects, RESTful APIs, Firebase integration",technologies:["PHP","MySQL","Firebase","JavaScript","HTML/CSS"]},{title:"Python Automation Suite",description:"A repository of Python scripts for automation, data analysis, and algorithm practice. Includes web scraping tools, data visualization scripts, and various algorithmic solutions.",tags:["Python","Algorithms","Automation","Data Science"],link:"https://github.com/prabanjan127/python_codes",image:"assets/images/projects/python-suite.jpg",metrics:"50+ scripts, automation workflows",technologies:["Python","Pandas","NumPy","Matplotlib","BeautifulSoup"]},{title:"Car Fun Interactive Experience",description:"An interactive web-based automotive visualization project featuring animated car models, dynamic interactions, and creative web technologies.",tags:["Web","Creative","Animation","JavaScript"],link:"https://github.com/prabanjan127/car_fun",image:"assets/images/projects/car-fun.jpg",metrics:"Interactive animations, responsive design",technologies:["JavaScript","CSS3","HTML5","Canvas API"]}];formatNumber(e){return Xl.formatNumber(e)}trackByProject(e,t){return t.link}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-project-list"]],decls:23,vars:4,consts:[["id","projects",1,"py-32","relative"],["appParallax","",1,"absolute","top-20","right-10","w-64","h-64","bg-primary/5","rounded-full","blur-3xl",3,"parallaxRatio"],["appParallax","",1,"absolute","bottom-20","left-10","w-96","h-96","bg-secondary/5","rounded-full","blur-3xl",3,"parallaxRatio"],[1,"container-custom","relative","z-10"],[1,"text-center","mb-16"],[1,"text-5xl","md:text-6xl","font-bold","mb-6"],[1,"text-neon","font-mono-custom"],[1,"text-neon"],[1,"text-gray-400","text-lg","font-mono-custom"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-8"],["class","group relative rounded-2xl overflow-hidden glass-panel reveal-child flex flex-col",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-center","mt-16"],["href","https://github.com/prabanjan127?tab=repositories","target","_blank",1,"inline-flex","items-center","gap-3","px-8","py-4","border-2","border-white/20","hover:border-primary","text-white","hover:text-primary","font-mono-custom","text-sm","rounded-lg","transition-all","duration-300","hover-lift","group"],[1,"fab","fa-github","text-xl","group-hover:rotate-12","transition-transform"],[1,"group","relative","rounded-2xl","overflow-hidden","glass-panel","reveal-child","flex","flex-col"],[1,"absolute","top-4","left-4","z-30"],[1,"px-3","py-1.5","bg-black/70","backdrop-blur-sm","border","border-white/10","rounded-lg"],[1,"text-primary","font-mono-custom","font-bold","text-xs"],[1,"absolute","inset-0","bg-gradient-to-br","from-gray-900","via-black","to-gray-800","opacity-90","group-hover:opacity-75","transition-opacity","duration-700"],[1,"absolute","inset-0","opacity-0","group-hover:opacity-100","transition-opacity","duration-500",3,"ngClass"],[1,"relative","pb-6","px-6","pt-12","flex","flex-col","h-full","z-20"],[1,"flex","flex-wrap","gap-2","mb-3","mt-3"],["class","text-xs font-mono-custom uppercase tracking-wider px-2.5 py-1 border border-white/20 rounded-full bg-black/60 backdrop-blur-sm text-gray-300 hover:border-primary/50 hover:text-primary transition-all",4,"ngFor","ngForOf"],["class","mb-4",4,"ngIf"],[1,"flex-grow","min-h-[120px]"],[1,"space-y-3"],[1,"text-2xl","md:text-3xl","font-bold","text-white","group-hover:text-primary","transition-colors","leading-tight"],[1,"text-gray-400","text-sm","leading-relaxed","line-clamp-3","group-hover:text-gray-300","transition-colors"],[1,"flex","items-center","gap-3","pt-2"],["target","_blank",1,"flex","items-center","gap-2","px-4","py-2","bg-white/5","hover:bg-white/10","border","border-white/10","hover:border-primary/50","rounded-lg","text-white","text-xs","font-mono-custom","transition-all","group/btn",3,"href"],[1,"fab","fa-github"],[1,"fas","fa-arrow-right","text-[10px]","transform","group-hover/btn:translate-x-1","transition-transform"],["target","_blank","class","flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/60 rounded-lg text-primary text-xs font-mono-custom transition-all group/btn",3,"href",4,"ngIf"],[1,"absolute","inset-0","border-2","border-transparent","group-hover:border-primary/40","rounded-2xl","transition-all","duration-500","pointer-events-none"],[1,"absolute","top-0","right-0","w-32","h-32","bg-primary/5","blur-3xl","group-hover:bg-primary/10","transition-all","duration-700"],[1,"text-xs","font-mono-custom","uppercase","tracking-wider","px-2.5","py-1","border","border-white/20","rounded-full","bg-black/60","backdrop-blur-sm","text-gray-300","hover:border-primary/50","hover:text-primary","transition-all"],[1,"mb-4"],[1,"text-xs","font-mono-custom","px-2.5","py-1","bg-emerald-500/10","border","border-emerald-400/30","rounded-full","text-emerald-400","inline-flex","items-center"],[1,"fas","fa-check-circle","mr-1"],["target","_blank",1,"flex","items-center","gap-2","px-4","py-2","bg-primary/10","hover:bg-primary/20","border","border-primary/30","hover:border-primary/60","rounded-lg","text-primary","text-xs","font-mono-custom","transition-all","group/btn",3,"href"],[1,"fas","fa-external-link-alt"]],template:function(t,n){t&1&&(xe(0,"section",0),Ge(1,"div",1)(2,"div",2),xe(3,"div",3)(4,"div",4)(5,"h2",5)(6,"span",6),Ae(7,"<"),_e(),Ae(8,"Featured"),xe(9,"span",7),Ae(10,"_"),_e(),Ae(11,"Projects"),xe(12,"span",6),Ae(13,"/>"),_e()(),xe(14,"p",8),Ae(15,"Building the future, one commit at a time"),_e()(),xe(16,"div",9),Qt(17,Xy,26,12,"div",10),_e(),xe(18,"div",11)(19,"a",12)(20,"span"),Ae(21,"View All on GitHub"),_e(),Ge(22,"i",13),_e()()()()),t&2&&(Le(),ot("parallaxRatio",.08),Le(),ot("parallaxRatio",.12),Le(15),ot("ngForOf",n.projects)("ngForTrackBy",n.trackByProject))},dependencies:[Ft,Pr,yi,Sa,is],styles:[".reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:opacity .7s ease-out,transform .7s cubic-bezier(.2,.8,.2,1)}.in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view   [_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}"],changeDetection:0})};var Yl=class r{constructor(e,t){this.el=e;this.platformId=t}staggerDelay=100;threshold=.1;ngOnInit(){zn(this.platformId)&&this.el.nativeElement.classList.add("reveal-container")}ngAfterViewInit(){zn(this.platformId)&&this.setupObserver()}setupObserver(){let e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(this.el.nativeElement.classList.add("in-view"),this.el.nativeElement.querySelectorAll(".reveal-child").forEach((s,a)=>{s.style.animationDelay||(s.style.animationDelay=`${a*this.staggerDelay}ms`)}),e.unobserve(this.el.nativeElement))})},{threshold:this.threshold,rootMargin:"0px 0px -50px 0px"});e.observe(this.el.nativeElement)}static \u0275fac=function(t){return new(t||r)(Sn(xa),Sn(xi))};static \u0275dir=va({type:r,selectors:[["","appScrollReveal",""]],inputs:{staggerDelay:"staggerDelay",threshold:"threshold"}})};var hp=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=At({type:r,selectors:[["app-home"]],decls:4,vars:0,consts:[["id","experience","appScrollReveal",""],["id","skills","appScrollReveal",""],["id","projects","appScrollReveal",""]],template:function(t,n){t&1&&Ge(0,"app-hero")(1,"app-timeline",0)(2,"app-skills-matrix",1)(3,"app-project-list",2)},dependencies:[Ft,Vl,Hl,Wl,ql,Yl],styles:["section[_ngcontent-%COMP%]{position:relative}"]})};export{hp as HomeComponent};
