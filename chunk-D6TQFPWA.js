import{$a as Li,Ca as dt,Db as Jr,Ea as Yr,Eb as Hn,Fb as $r,Ga as St,Gb as kl,Hb as _t,La as Gt,Lb as jt,Ma as Ze,Na as K,Oa as Q,Pa as Ae,Qa as an,Ra as kn,S as sn,Sa as hi,T as Tn,Ua as Ol,Va as Bl,Xa as An,Ya as Ii,Z as Nl,Za as Di,ab as Vn,bb as Gn,db as zl,fb as Cn,ga as qr,gb as le,hb as Bt,ib as wt,ka as mn,nb as Zr,oa as Pi,ob as so,qa as Fl,ra as Me,xa as Ul,ya as Ot}from"./chunk-Z7HBEZD4.js";import{a as ro,b as Ll}from"./chunk-7CGTOI24.js";var ac=0,Bo=1,oc=2;var Dr=1,lc=2,Qi=3,Fn=0,Nt=1,vn=2,yn=0,xi=1,zo=2,ko=3,Vo=4,cc=5,Kn=100,hc=101,uc=102,dc=103,fc=104,pc=200,mc=201,gc=202,xc=203,_s=204,vs=205,_c=206,vc=207,yc=208,bc=209,Mc=210,Sc=211,wc=212,Ec=213,Tc=214,Vs=0,Gs=1,Hs=2,_i=3,Ws=4,Xs=5,qs=6,Ys=7,Go=0,Ac=1,Cc=2,un=0,Ho=1,Wo=2,Xo=3,qo=4,Yo=5,Zo=6,Jo=7;var Po=300,ii=301,Si=302,Zs=303,Js=304,Lr=306,ys=1e3,xn=1001,bs=1002,Tt=1003,Rc=1004;var Nr=1005;var At=1006,$s=1007;var ri=1008;var $t=1009,$o=1010,Ko=1011,er=1012,Ks=1013,dn=1014,fn=1015,bn=1016,js=1017,Qs=1018,tr=1020,jo=35902,Qo=35899,el=1021,tl=1022,nn=1023,_n=1026,si=1027,nl=1028,ea=1029,wi=1030,ta=1031;var na=1033,Fr=33776,Ur=33777,Or=33778,Br=33779,ia=35840,ra=35841,sa=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37488,ua=37489,da=37490,fa=37491,pa=37808,ma=37809,ga=37810,xa=37811,_a=37812,va=37813,ya=37814,ba=37815,Ma=37816,Sa=37817,wa=37818,Ea=37819,Ta=37820,Aa=37821,Ca=36492,Ra=36494,Pa=36495,Ia=36283,Da=36284,La=36285,Na=36286;var dr=2300,Ms=2301,xs=2302,Io=2400,Do=2401,Lo=2402;var Pc=3200;var Ic=0,Dc=1,Bn="",Xt="srgb",vi="srgb-linear",fr="linear",Ke="srgb";var mi=7680;var No=519,Lc=512,Nc=513,Fc=514,Fa=515,Uc=516,Oc=517,Ua=518,Bc=519,Fo=35044;var il="300 es",hn=2e3,pr=2001;function rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Eh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){let i=mr("canvas");return i.style.display="block",i}var Vl={},Yi=null;function sl(...i){let e="THREE."+i.shift();Yi?Yi("log",e,...i):console.log(e,...i)}function Le(...i){let e="THREE."+i.shift();Yi?Yi("warn",e,...i):console.warn(e,...i)}function Ie(...i){let e="THREE."+i.shift();Yi?Yi("error",e,...i):console.error(e,...i)}function Zi(...i){let e=i.join(" ");e in Vl||(Vl[e]=!0,Le(...i))}function kc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ao=Math.PI/180,Ss=180/Math.PI;function zr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Th(i,e){return(i%e+e)%e}function oo(i,e,t){return(1-t)*i+t*e}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[a+0],g=s[a+1],x=s[a+2],y=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=y;return}if(u!==y||l!==f||c!==g||h!==x){let p=l*f+c*g+h*x+u*y;p<0&&(f=-f,g=-g,x=-x,y=-y,p=-p);let d=1-o;if(p<.9995){let w=Math.acos(p),E=Math.sin(w);d=Math.sin(d*w)/E,o=Math.sin(o*w)/E,l=l*d+f*o,c=c*d+g*o,h=h*d+x*o,u=u*d+y*o}else{l=l*d+f*o,c=c*d+g*o,h=h*d+x*o,u=u*d+y*o;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+h*u+l*g-c*f,e[t+1]=l*x+h*f+c*u-o*g,e[t+2]=c*x+h*g+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"YXZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"ZXY":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"ZYX":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"YZX":this._x=f*h*u+c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u-f*g*x;break;case"XZY":this._x=f*h*u-c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u+f*g*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new F,Gl=new On,Fe=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],x=n[8],y=r[0],p=r[3],d=r[6],w=r[1],E=r[4],S=r[7],T=r[2],C=r[5],R=r[8];return s[0]=a*y+o*w+l*T,s[3]=a*p+o*E+l*C,s[6]=a*d+o*S+l*R,s[1]=c*y+h*w+u*T,s[4]=c*p+h*E+u*C,s[7]=c*d+h*S+u*R,s[2]=f*y+g*w+x*T,s[5]=f*p+g*E+x*C,s[8]=f*d+g*S+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,g=c*s-a*l,x=t*u+n*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=g*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},co=new Fe,Hl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){let i={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ke&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?fr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vi]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var We=Ah();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,ws=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=mr("canvas")),Ni.width=e.width,Ni.height=e.height;let r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ch=0,Ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ho(r[a].image)):s.push(ho(r[a]))}else s=ho(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Rh=0,uo=new F,zn=(()=>{class i extends Un{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=xn,s=xn,a=At,o=ri,l=nn,c=$t,h=i.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=zr(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Po,i.DEFAULT_ANISOTROPY=1,i})(),pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],x=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(g+1)/2,T=(d+1)/2,C=(h+f)/4,R=(u+y)/4,O=(x+p)/4;return E>S&&E>T?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=R/n):S>T?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=O/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=O/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-x)*(p-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(u-y)/w,this.z=(f-h)/w,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Es=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new zn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ji(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Es{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gr=class extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ts=class extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),jr.subVectors(this.max,lr),Fi.subVectors(e.a,lr),Ui.subVectors(e.b,lr),Oi.subVectors(e.c,lr),Wn.subVectors(Ui,Fi),Xn.subVectors(Oi,Ui),ui.subVectors(Fi,Oi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ui.z,ui.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ui.z,0,-ui.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ui.y,ui.x,0];return!fo(t,Fi,Ui,Oi,jr)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,Fi,Ui,Oi,jr))?!1:(Qr.crossVectors(Wn,Xn),t=[Qr.x,Qr.y,Qr.z],fo(t,Fi,Ui,Oi,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rn=[new F,new F,new F,new F,new F,new F,new F,new F],on=new F,Kr=new jn,Fi=new F,Ui=new F,Oi=new F,Wn=new F,Xn=new F,ui=new F,lr=new F,jr=new F,Qr=new F,di=new F;function fo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);let o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ph=new jn,cr=new F,po=new F,yi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ph.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(po)),this.expandByPoint(cr.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pn=new F,mo=new F,es=new F,qn=new F,go=new F,ts=new F,xo=new F,xr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mo.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(mo);let s=e.distanceTo(t)*.5,a=-this.direction.dot(es),o=qn.dot(this.direction),l=-qn.dot(es),c=qn.lengthSq(),h=Math.abs(1-a*a),u,f,g,x;if(h>0)if(u=a*l-o,f=a*o-l,x=s*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,g=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mo).addScaledVector(es,f),g}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,r,s){go.subVectors(t,e),ts.subVectors(n,e),xo.crossVectors(go,ts);let a=this.direction.dot(xo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let l=o*this.direction.dot(ts.crossVectors(qn,ts));if(l<0)return null;let c=o*this.direction.dot(go.cross(qn));if(c<0||l+c>a)return null;let h=-o*qn.dot(xo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,f,g,x,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,g,x,y,p)}set(e,t,n,r,s,a,o,l,c,h,u,f,g,x,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=x,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,g=a*u,x=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=g+x*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=x+g*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,g=l*u,x=c*h,y=c*u;t[0]=f+y*o,t[4]=x*o-g,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=g*o-x,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,g=l*u,x=c*h,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,g=a*u,x=o*h,y=o*u;t[0]=l*h,t[4]=x*c-g,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,g=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=y-f*u,t[8]=x*u+g,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*u+x,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*l,g=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=a*h,t[9]=g*u-x,t[2]=x*u-g,t[6]=o*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,Dh)}lookAt(e,t,n){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Yn.crossVectors(n,Ht),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Yn.crossVectors(n,Ht)),Yn.normalize(),ns.crossVectors(Ht,Yn),r[0]=Yn.x,r[4]=ns.x,r[8]=Ht.x,r[1]=Yn.y,r[5]=ns.y,r[9]=Ht.y,r[2]=Yn.z,r[6]=ns.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],x=n[2],y=n[6],p=n[10],d=n[14],w=n[3],E=n[7],S=n[11],T=n[15],C=r[0],R=r[4],O=r[8],v=r[12],b=r[1],I=r[5],V=r[9],k=r[13],Y=r[2],X=r[6],H=r[10],z=r[14],$=r[3],fe=r[7],ce=r[11],pe=r[15];return s[0]=a*C+o*b+l*Y+c*$,s[4]=a*R+o*I+l*X+c*fe,s[8]=a*O+o*V+l*H+c*ce,s[12]=a*v+o*k+l*z+c*pe,s[1]=h*C+u*b+f*Y+g*$,s[5]=h*R+u*I+f*X+g*fe,s[9]=h*O+u*V+f*H+g*ce,s[13]=h*v+u*k+f*z+g*pe,s[2]=x*C+y*b+p*Y+d*$,s[6]=x*R+y*I+p*X+d*fe,s[10]=x*O+y*V+p*H+d*ce,s[14]=x*v+y*k+p*z+d*pe,s[3]=w*C+E*b+S*Y+T*$,s[7]=w*R+E*I+S*X+T*fe,s[11]=w*O+E*V+S*H+T*ce,s[15]=w*v+E*k+S*z+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],g=e[14],x=e[3],y=e[7],p=e[11],d=e[15],w=l*g-c*f,E=o*g-c*u,S=o*f-l*u,T=a*g-c*h,C=a*f-l*h,R=a*u-o*h;return t*(y*w-p*E+d*S)-n*(x*w-p*T+d*C)+r*(x*E-y*T+d*R)-s*(x*S-y*C+p*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],g=e[11],x=e[12],y=e[13],p=e[14],d=e[15],w=u*p*c-y*f*c+y*l*g-o*p*g-u*l*d+o*f*d,E=x*f*c-h*p*c-x*l*g+a*p*g+h*l*d-a*f*d,S=h*y*c-x*u*c+x*o*g-a*y*g-h*o*d+a*u*d,T=x*u*l-h*y*l-x*o*f+a*y*f+h*o*p-a*u*p,C=t*w+n*E+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=w*R,e[1]=(y*f*s-u*p*s-y*r*g+n*p*g+u*r*d-n*f*d)*R,e[2]=(o*p*s-y*l*s+y*r*c-n*p*c-o*r*d+n*l*d)*R,e[3]=(u*l*s-o*f*s-u*r*c+n*f*c+o*r*g-n*l*g)*R,e[4]=E*R,e[5]=(h*p*s-x*f*s+x*r*g-t*p*g-h*r*d+t*f*d)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*d-t*l*d)*R,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*g+t*l*g)*R,e[8]=S*R,e[9]=(x*u*s-h*y*s-x*n*g+t*y*g+h*n*d-t*u*d)*R,e[10]=(a*y*s-x*o*s+x*n*c-t*y*c-a*n*d+t*o*d)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*g-t*o*g)*R,e[12]=T*R,e[13]=(h*y*r-x*u*r+x*n*f-t*y*f-h*n*p+t*u*p)*R,e[14]=(x*o*r-a*y*r-x*n*l+t*y*l+a*n*p-t*o*p)*R,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,g=s*h,x=s*u,y=a*h,p=a*u,d=o*u,w=l*c,E=l*h,S=l*u,T=n.x,C=n.y,R=n.z;return r[0]=(1-(y+d))*T,r[1]=(g+S)*T,r[2]=(x-E)*T,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+d))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(x+E)*R,r[9]=(p-w)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Bi.set(r[0],r[1],r[2]).length(),a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ln.copy(this);let c=1/s,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=hn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),g=(n+r)/(n-r),x,y;if(l)x=s/(a-s),y=a*s/(a-s);else if(o===hn)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===pr)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=hn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),g=-(n+r)/(n-r),x,y;if(l)x=1/(a-s),y=a/(a-s);else if(o===hn)x=-2/(a-s),y=-(a+s)/(a-s);else if(o===pr)x=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bi=new F,ln=new mt,Ih=new F(0,0,0),Dh=new F(1,1,1),Yn=new F,ns=new F,Ht=new F,Xl=new mt,ql=new On,bi=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],u=s[9],f=s[2],g=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,x),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(He(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,x),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),_r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lh=0,Yl=new F,zi=new On,In=new mt,is=new F,hr=new F,Nh=new F,Fh=new On,Zl=new F(1,0,0),Jl=new F(0,1,0),$l=new F(0,0,1),Kl={type:"added"},Uh={type:"removed"},ki={type:"childadded",child:null},_o={type:"childremoved",child:null},ai=(()=>{class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,n=new bi,r=new On,s=new F(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zi.setFromAxisAngle(t,n),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,n){return zi.setFromAxisAngle(t,n),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,n){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?is.copy(t):is.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(hr,is,this.up):In.lookAt(is,hr,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(In),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),ki.child=t,this.dispatchEvent(ki),ki.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Uh),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let o=this.children[r].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Ll(ro({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>ro({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(t.animations,c))}}if(n){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),g=o(t.skeletons),x=o(t.animations),y=o(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),y.length>0&&(r.nodes=y)}return r.object=s,r;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new F(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),cn=new F,Dn=new F,vo=new F,Ln=new F,Vi=new F,Gi=new F,jl=new F,yo=new F,bo=new F,Mo=new F,So=new pt,wo=new pt,Eo=new pt,$n=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),Dn.subVectors(n,t),vo.subVectors(e,t);let a=cn.dot(cn),o=cn.dot(Dn),l=cn.dot(vo),c=Dn.dot(Dn),h=Dn.dot(vo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,g=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return So.setScalar(0),wo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,n),Eo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(wo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),Dn.subVectors(e,t),cn.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),cn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Vi.subVectors(r,n),Gi.subVectors(s,n),yo.subVectors(e,n);let l=Vi.dot(yo),c=Gi.dot(yo);if(l<=0&&c<=0)return t.copy(n);bo.subVectors(e,r);let h=Vi.dot(bo),u=Gi.dot(bo);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vi,a);Mo.subVectors(e,s);let g=Vi.dot(Mo),x=Gi.dot(Mo);if(x>=0&&g<=x)return t.copy(s);let y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Gi,o);let p=h*x-g*u;if(p<=0&&u-h>=0&&g-x>=0)return jl.subVectors(s,r),o=(u-h)/(u-h+(g-x)),t.copy(r).addScaledVector(jl,o);let d=1/(p+y+f);return a=y*d,o=f*d,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function To(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=Th(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return We.workingToColorSpace(Rt.copy(this),e),Math.round(He(Rt.r*255,0,255))*65536+Math.round(He(Rt.g*255,0,255))*256+Math.round(He(Rt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Rt.copy(this),t);let n=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Xt){We.workingToColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,r=Rt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(rs);let n=oo(Zn.h,rs.h,t),r=oo(Zn.s,rs.s,t),s=oo(Zn.l,rs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new Je;Je.NAMES=Vc;var Oh=0,Qn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_s&&(n.blendSrc=this.blendSrc),this.blendDst!==vs&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vr=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new F,ss=new tt,Bh=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var yr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var br=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var en=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},zh=0,Qt=new mt,Ao=new ai,Hi=new F,Wt=new jn,ur=new jn,Et=new F,Yt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rl(e)?br:yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Wt.min,ur.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,ur.max),Wt.expandByPoint(Et)):(Wt.expandByPoint(ur.min),Wt.expandByPoint(ur.max))}Wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Et.add(Hi)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new F,l[O]=new F;let c=new F,h=new F,u=new F,f=new tt,g=new tt,x=new tt,y=new F,p=new F;function d(O,v,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(s,O),g.fromBufferAttribute(s,v),x.fromBufferAttribute(s,b),h.sub(c),u.sub(c),g.sub(f),x.sub(f);let I=1/(g.x*x.y-x.x*g.y);isFinite(I)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(I),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(I),o[O].add(y),o[v].add(y),o[b].add(y),l[O].add(p),l[v].add(p),l[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,v=w.length;O<v;++O){let b=w[O],I=b.start,V=b.count;for(let k=I,Y=I+V;k<Y;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new F,S=new F,T=new F,C=new F;function R(O){T.fromBufferAttribute(r,O),C.copy(T);let v=o[O];E.copy(v),E.sub(T.multiplyScalar(T.dot(v))).normalize(),S.crossVectors(C,v);let I=S.dot(l[O])<0?-1:1;a.setXYZW(O,E.x,E.y,E.z,I)}for(let O=0,v=w.length;O<v;++O){let b=w[O],I=b.start,V=b.count;for(let k=I,Y=I+V;k<Y;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){let x=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),g=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[g++]}return new Lt(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],g=e(f,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ql=new mt,fi=new xr,as=new yi,ec=new F,os=new F,ls=new F,cs=new F,Co=new F,hs=new F,tc=new F,us=new F,tn=class extends ai{constructor(e=new Yt,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Co.fromBufferAttribute(u,e),a?hs.addScaledVector(Co,h):hs.addScaledVector(Co.sub(t),h))}t.add(hs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(as.containsPoint(fi.origin)===!1&&(fi.intersectSphere(as,ec)===null||fi.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(s).invert(),fi.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let p=f[x],d=a[p.materialIndex],w=Math.max(p.start,g.start),E=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,T=E;S<T;S+=3){let C=o.getX(S),R=o.getX(S+1),O=o.getX(S+2);r=ds(this,d,e,n,c,h,u,C,R,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let x=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=x,d=y;p<d;p+=3){let w=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);r=ds(this,a,e,n,c,h,u,w,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let p=f[x],d=a[p.materialIndex],w=Math.max(p.start,g.start),E=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,T=E;S<T;S+=3){let C=S,R=S+1,O=S+2;r=ds(this,d,e,n,c,h,u,C,R,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=x,d=y;p<d;p+=3){let w=p,E=p+1,S=p+2;r=ds(this,a,e,n,c,h,u,w,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function kh(i,e,t,n,r,s,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Fn,o),l===null)return null;us.copy(o),us.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:i}}function ds(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,os),i.getVertexPosition(l,ls),i.getVertexPosition(c,cs);let h=kh(i,e,t,n,os,ls,cs,tc);if(h){let u=new F;$n.getBarycoord(tc,os,ls,cs,u),r&&(h.uv=$n.getInterpolatedAttribute(r,o,l,c,u,new tt)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,l,c,u,new tt)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};$n.getNormal(os,ls,cs,f.normal),h.face=f,h.barycoord=u}return h}var $i=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function x(y,p,d,w,E,S,T,C,R,O,v){let b=S/R,I=T/O,V=S/2,k=T/2,Y=C/2,X=R+1,H=O+1,z=0,$=0,fe=new F;for(let ce=0;ce<H;ce++){let pe=ce*I-k;for(let Ve=0;Ve<X;Ve++){let Be=Ve*b-V;fe[y]=Be*w,fe[p]=pe*E,fe[d]=Y,c.push(fe.x,fe.y,fe.z),fe[y]=0,fe[p]=0,fe[d]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ve/R),u.push(1-ce/O),z+=1}}for(let ce=0;ce<O;ce++)for(let pe=0;pe<R;pe++){let Ve=f+pe+X*ce,Be=f+pe+X*(ce+1),ct=f+(pe+1)+X*(ce+1),lt=f+(pe+1)+X*ce;l.push(Ve,Be,lt),l.push(Be,ct,lt),$+=6}o.addGroup(g,$,v),g+=$,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ei(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=Ei(i[t]);for(let r in n)e[r]=n[r]}return e}function Vh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function al(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Gc={clone:Ei,merge:It},Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mr=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jn=new F,nc=new tt,ic=new tt,Pt=class extends Mr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wi=-90,Xi=1,As=class extends ai{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Pt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);let s=new Pt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);let a=new Pt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Sr=class extends zn{constructor(e=[],t=ii,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wr=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:yn});s.uniforms.tEquirect.value=t;let a=new tn(r,s),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=At),new As(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},gi=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wh={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Er=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Cs=class extends zn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Tt,h=Tt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=new F,Xh=new F,qh=new Fe,gn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ro.subVectors(n,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ro),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qh.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new yi,Yh=new tt(.5,.5),fs=new F,Tr=class{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,a=new gn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],g=s[7],x=s[8],y=s[9],p=s[10],d=s[11],w=s[12],E=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,g-h,d-x,T-w).normalize(),r[1].setComponents(c+a,g+h,d+x,T+w).normalize(),r[2].setComponents(c+o,g+u,d+y,T+E).normalize(),r[3].setComponents(c-o,g-u,d-y,T-E).normalize(),n)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,g-f,d-p,T-S).normalize();else if(r[4].setComponents(c-l,g-f,d-p,T-S).normalize(),t===hn)r[5].setComponents(c+l,g+f,d+p,T+S).normalize();else if(t===pr)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);let t=Yh.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ji=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rc=new mt,Uo=new xr,ps=new yi,ms=new F,Ar=class extends ai{constructor(e=new Yt,t=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;rc.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(rc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=f,y=g;x<y;x++){let p=c.getX(x);ms.fromBufferAttribute(u,p),sc(ms,p,l,r,e,t,this)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,y=g;x<y;x++)ms.fromBufferAttribute(u,x),sc(ms,x,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function sc(i,e,t,n,r,s,a){let o=Uo.distanceSqToPoint(i);if(o<t){let l=new F;Uo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ei=class extends zn{constructor(e,t,n=dn,r,s,a,o=Tt,l=Tt,c,h=_n,u=1){if(h!==_n&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends ei{constructor(e,t=dn,n=ii,r,s,a=Tt,o=Tt,l,c=_n){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cr=class extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Rr=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,g=[],x=[],y=[],p=[];for(let d=0;d<h;d++){let w=d*f-a;for(let E=0;E<c;E++){let S=E*u-s;x.push(S,-w,0),y.push(0,0,1),p.push(E/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let E=w+c*d,S=w+c*(d+1),T=w+1+c*(d+1),C=w+1+c*d;g.push(E,S,C),g.push(S,T,C)}this.setIndex(g),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ps=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Is=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ds=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Mi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ls=class extends Mi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Do:s=e,o=2*t-n;break;case Lo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:a=e,l=2*n-t;break;case Lo:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,x=(n-t)/(r-t),y=x*x,p=y*x,d=-f*p+2*f*y-f*x,w=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*x+1,E=(-1-g)*p+(1.5+g)*y+.5*x,S=g*p-g*y;for(let T=0;T!==o;++T)s[T]=d*a[h+T]+w*a[c+T]+E*a[l+T]+S*a[u+T];return s}},Ns=class extends Mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},Fs=class extends Mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ns(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ls(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case xs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Eh(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xs,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*n,f=u-n,g=u+n;for(let x=0;x!==n;++x){let y=t[u+x];if(y!==t[f+x]||y!==t[g+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let g=0;g!==n;++g)t[f+g]=t[u+g]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Ms;var ti=class extends Jt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=dr;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Jt{constructor(e,t,n,r){super(e,t,n,r)}};Us.prototype.ValueTypeName="color";var Os=class extends Jt{constructor(e,t,n,r){super(e,t,n,r)}};Os.prototype.ValueTypeName="number";var Bs=class extends Mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(s,0,a,c-o,a,c,l);return s}},Pr=class extends Jt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bs(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends Jt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=dr;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Jt{constructor(e,t,n,r){super(e,t,n,r)}};zs.prototype.ValueTypeName="vector";var Ir=class extends Mr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ks=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ol="\\[\\]\\.:\\/",Zh=new RegExp("["+ol+"]","g"),ll="[^"+ol+"]",Jh="[^"+ol.replace("\\.","")+"]",$h=/((?:WC+[\/:])*)/.source.replace("WC",ll),Kh=/(WCOD+)?/.source.replace("WCOD",Jh),jh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Qh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),eu=new RegExp("^"+$h+Kh+jh+Qh+"$"),tu=["material","materials","bones","map"],Oo=class{constructor(e,t,n){let r=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zh,"")}static parseTrackName(t){let n=eu.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=r.nodeName.substring(s+1);tu.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=n.nodeName;Ie("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Oo,i})();ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v0=new Float32Array(1);function cl(i,e,t,n){let r=nu(n);switch(t){case el:return i*e;case nl:return i*e/r.components*r.byteLength;case ea:return i*e/r.components*r.byteLength;case wi:return i*e*2/r.components*r.byteLength;case ta:return i*e*2/r.components*r.byteLength;case tl:return i*e*3/r.components*r.byteLength;case nn:return i*e*4/r.components*r.byteLength;case na:return i*e*4/r.components*r.byteLength;case Fr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case sa:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ia:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case La:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nu(i){switch(i){case $t:case $o:return{byteLength:1,components:1};case er:case Ko:case bn:return{byteLength:2,components:1};case js:case Qs:return{byteLength:2,components:4};case dn:case Ks:case fn:return{byteLength:4,components:1};case jo:case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function uh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ru(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,x)=>g.start-x.start);let f=0;for(let g=1;g<u.length;g++){let x=u[f],y=u[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let g=0,x=u.length;g<x;g++){let y=u[g];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
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
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
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
#endif`,pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,vu=`#ifdef USE_BUMPMAP
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cu=`#define PI 3.141592653589793
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
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pu=`vec3 transformedNormal = objectNormal;
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
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
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
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
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`uniform sampler2D dfgLUT;
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
}`,rd=`
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
#endif`,sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hd=`float getShadowMask() {
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
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,ff=`#define DISTANCE
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
}`,pf=`#define DISTANCE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,yf=`uniform vec3 diffuse;
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
}`,bf=`#define LAMBERT
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
}`,Mf=`#define LAMBERT
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
}`,Sf=`#define MATCAP
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
}`,wf=`#define MATCAP
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
}`,Ef=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,Af=`#define PHONG
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
}`,Cf=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Pf=`#define STANDARD
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
}`,If=`#define TOON
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
}`,Df=`#define TOON
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
}`,Lf=`uniform float size;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#include <common>
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
}`,Uf=`uniform vec3 color;
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
}`,Of=`uniform float rotation;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:su,alphahash_pars_fragment:au,alphamap_fragment:ou,alphamap_pars_fragment:lu,alphatest_fragment:cu,alphatest_pars_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:fu,batching_vertex:pu,begin_vertex:mu,beginnormal_vertex:gu,bsdfs:xu,iridescence_fragment:_u,bumpmap_pars_fragment:vu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:Su,color_fragment:wu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:Au,common:Cu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Pu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Du,emissivemap_fragment:Lu,emissivemap_pars_fragment:Nu,colorspace_fragment:Fu,colorspace_pars_fragment:Uu,envmap_fragment:Ou,envmap_common_pars_fragment:Bu,envmap_pars_fragment:zu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Ku,envmap_vertex:Vu,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:Wu,fog_pars_fragment:Xu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:$u,lights_toon_fragment:ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:ed,lights_phong_pars_fragment:td,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:rd,lights_fragment_maps:sd,lights_fragment_end:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:xd,morphcolor_vertex:_d,morphnormal_vertex:vd,morphtarget_pars_vertex:yd,morphtarget_vertex:bd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:wd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Id,opaque_fragment:Dd,packing:Ld,premultiplied_alpha_fragment:Nd,project_vertex:Fd,dithering_fragment:Ud,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Hd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Kd,transmission_fragment:jd,transmission_pars_fragment:Qd,uv_pars_fragment:ef,uv_pars_vertex:tf,uv_vertex:nf,worldpos_vertex:rf,background_vert:sf,background_frag:af,backgroundCube_vert:of,backgroundCube_frag:lf,cube_vert:cf,cube_frag:hf,depth_vert:uf,depth_frag:df,distance_vert:ff,distance_frag:pf,equirect_vert:mf,equirect_frag:gf,linedashed_vert:xf,linedashed_frag:_f,meshbasic_vert:vf,meshbasic_frag:yf,meshlambert_vert:bf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:wf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:Cf,meshphysical_vert:Rf,meshphysical_frag:Pf,meshtoon_vert:If,meshtoon_frag:Df,points_vert:Lf,points_frag:Nf,shadow_vert:Ff,shadow_frag:Uf,sprite_vert:Of,sprite_frag:Bf},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Sn={basic:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:It([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:It([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:It([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Oa={r:0,b:0,g:0},Ti=new bi,zf=new mt;function kf(i,e,t,n,r,s,a){let o=new Je(0),l=s===!0?0:1,c,h,u=null,f=0,g=null;function x(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function y(E){let S=!1,T=x(E);T===null?d(o,l):T&&T.isColor&&(d(T,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,S){let T=x(S);T&&(T.isCubeTexture||T.mapping===Lr)?(h===void 0&&(h=new tn(new $i(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Ei(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ti.copy(S.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(Ti)),h.material.toneMapped=We.getTransfer(T.colorSpace)!==Ke,(u!==T||f!==T.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,g=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new tn(new Rr(2,2),new Zt({name:"BackgroundMaterial",uniforms:Ei(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=We.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,g=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(Oa,al(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:y,addToRenderList:p,dispose:w}}function Vf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(b,I,V,k,Y){let X=!1,H=u(k,V,I);s!==H&&(s=H,c(s.object)),X=g(b,k,V,Y),X&&x(b,k,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(b,I,V,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,I,V){let k=V.wireframe===!0,Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let X=Y[I.id];X===void 0&&(X={},Y[I.id]=X);let H=X[k];return H===void 0&&(H=f(l()),X[k]=H),H}function f(b){let I=[],V=[],k=[];for(let Y=0;Y<t;Y++)I[Y]=0,V[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:k,object:b,attributes:{},index:null}}function g(b,I,V,k){let Y=s.attributes,X=I.attributes,H=0,z=V.getAttributes();for(let $ in z)if(z[$].location>=0){let ce=Y[$],pe=X[$];if(pe===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function x(b,I,V,k){let Y={},X=I.attributes,H=0,z=V.getAttributes();for(let $ in z)if(z[$].location>=0){let ce=X[$];ce===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),Y[$]=pe,H++}s.attributes=Y,s.attributesNum=H,s.index=k}function y(){let b=s.newAttributes;for(let I=0,V=b.length;I<V;I++)b[I]=0}function p(b){d(b,0)}function d(b,I){let V=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;V[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),Y[b]!==I&&(i.vertexAttribDivisor(b,I),Y[b]=I)}function w(){let b=s.newAttributes,I=s.enabledAttributes;for(let V=0,k=I.length;V<k;V++)I[V]!==b[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function E(b,I,V,k,Y,X,H){H===!0?i.vertexAttribIPointer(b,I,V,Y,X):i.vertexAttribPointer(b,I,V,k,Y,X)}function S(b,I,V,k){y();let Y=k.attributes,X=V.getAttributes(),H=I.defaultAttributeValues;for(let z in X){let $=X[z];if($.location>=0){let fe=Y[z];if(fe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){let ce=fe.normalized,pe=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;let Be=Ve.buffer,ct=Ve.type,lt=Ve.bytesPerElement,q=ct===i.INT||ct===i.UNSIGNED_INT||fe.gpuType===Ks;if(fe.isInterleavedBufferAttribute){let j=fe.data,xe=j.stride,Ue=fe.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<$.locationSize;ye++)d($.location+ye,j.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<$.locationSize;ye++)p($.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ye=0;ye<$.locationSize;ye++)E($.location+ye,pe/$.locationSize,ct,ce,xe*lt,(Ue+pe/$.locationSize*ye)*lt,q)}else{if(fe.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)d($.location+j,fe.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let j=0;j<$.locationSize;j++)p($.location+j);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let j=0;j<$.locationSize;j++)E($.location+j,pe/$.locationSize,ct,ce,pe*lt,pe/$.locationSize*j*lt,q)}}else if(H!==void 0){let ce=H[z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv($.location,ce);break;case 3:i.vertexAttrib3fv($.location,ce);break;case 4:i.vertexAttrib4fv($.location,ce);break;default:i.vertexAttrib1fv($.location,ce)}}}}w()}function T(){O();for(let b in n){let I=n[b];for(let V in I){let k=I[V];for(let Y in k)h(k[Y].object),delete k[Y];delete I[V]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let V in I){let k=I[V];for(let Y in k)h(k[Y].object),delete k[Y];delete I[V]}delete n[b.id]}function R(b){for(let I in n){let V=n[I];if(V[b.id]===void 0)continue;let k=V[b.id];for(let Y in k)h(k[Y].object),delete k[Y];delete V[b.id]}}function O(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:w}}function Gf(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];t.update(g,n,1)}function l(c,h,u,f){if(u===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*f[y];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let O=R===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$t&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!O)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:C}}function Wf(i){let e=this,t=null,n=0,r=!1,s=!1,a=new gn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let g=u.length!==0||f||n!==0||r;return r=f,n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,g){let x=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{let w=s?0:n,E=w*4,S=d.clippingState||null;l.value=S,S=h(x,f,E,g);for(let T=0;T!==E;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,g,x){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let d=g+y*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,S=g;E!==y;++E,S+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Xf(i){let e=new WeakMap;function t(a,o){return o===Zs?a.mapping=ii:o===Js&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zs||o===Js)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new wr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var oi=4,Hc=[.125,.215,.35,.446,.526,.582],Ci=20,qf=256,kr=new Ir,Wc=new Je,hl=null,ul=0,dl=0,fl=!1,Yf=new F,za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Yf}=s;hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:bn,format:nn,colorSpace:vi,depthBuffer:!1},r=Xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zf(s)),this._blurMaterial=$f(s,e,t),this._ggxMaterial=Jf(s,e,t)}return r}_compileMaterial(e){let t=new tn(new Yt,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,r,s){let l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,g=u.toneMapping;u.getClearColor(Wc),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new $i,new vr({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,d=!1,w=e.background;w?w.isColor&&(p.color.copy(w),e.background=null,d=!0):(p.color.copy(Wc),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let T=this._cubeSize;nr(r,S*T,E>2?T:0,T,T),u.setRenderTarget(r),d&&u.render(y,l),u.render(e,l)}u.toneMapping=g,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ii||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,g=u*f,{_lodMax:x}=this,y=this._sizeLods[n],p=3*y*(n>x-oi?n-x+oi:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=x-t,nr(s,p,d,3*y,2*y),r.setRenderTarget(s),r.render(o,kr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,nr(e,p,d,3*y,2*y),r.setRenderTarget(e),r.render(o,kr)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[r];u.material=c;let f=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ci-1),y=s/x,p=isFinite(s)?1+Math.floor(h*y):Ci;p>Ci&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ci}`);let d=[],w=0;for(let R=0;R<Ci;++R){let O=R/y,v=Math.exp(-O*O/2);d.push(v),R===0?w+=v:R<p&&(w+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;let S=this._sizeLods[r],T=3*S*(r>E-oi?r-E+oi:0),C=4*(this._cubeSize-S);nr(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(u,kr)}};function Zf(i){let e=[],t=[],n=[],r=i,s=i-oi+1+Hc.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>i-oi?l=Hc[a-i+oi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,x=6,y=3,p=2,d=1,w=new Float32Array(y*x*g),E=new Float32Array(p*x*g),S=new Float32Array(d*x*g);for(let C=0;C<g;C++){let R=C%3*2/3-1,O=C>2?0:-1,v=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];w.set(v,y*x*C),E.set(f,p*x*C);let b=[C,C,C,C,C,C];S.set(b,d*x*C)}let T=new Yt;T.setAttribute("position",new Lt(w,y)),T.setAttribute("uv",new Lt(E,p)),T.setAttribute("faceIndex",new Lt(S,d)),n.push(new tn(T,null)),r>oi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xc(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jf(i,e,t){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function $f(i,e,t){let n=new Float32Array(Ci),r=new F(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function qc(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Yc(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Kf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zs||l===Js,h=l===ii||l===Si;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new za(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new za(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Zi("WebGLRenderer: "+n+" extension not supported."),r}}}function Qf(i,e,t,n){let r={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];let g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER)}function c(u){let f=[],g=u.index,x=u.attributes.position,y=0;if(g!==null){let w=g.array;y=g.version;for(let E=0,S=w.length;E<S;E+=3){let T=w[E+0],C=w[E+1],R=w[E+2];f.push(T,C,C,R,R,T)}}else if(x!==void 0){let w=x.array;y=x.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let T=E+0,C=E+1,R=E+2;f.push(T,C,C,R,R,T)}}else return;let p=new(rl(f)?br:yr)(f,1);p.version=y;let d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){let f=s.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ep(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,g){i.drawElements(n,g,s,f*a),t.update(g,n,1)}function c(f,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,f*a,x),t.update(g,n,x))}function h(f,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,x);let p=0;for(let d=0;d<x;d++)p+=g[d];t.update(p,n,1)}function u(f,g,x,y){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,g[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,y,0,x);let d=0;for(let w=0;w<x;w++)d+=g[w]*y[w];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function np(i,e,t){let n=new WeakMap,r=new pt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var g=b;f!==void 0&&f.texture.dispose();let x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;x===!0&&(S=1),y===!0&&(S=2),p===!0&&(S=3);let T=o.attributes.position.count*S,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let R=new Float32Array(T*C*4*u),O=new gr(R,T,C,u);O.type=fn,O.needsUpdate=!0;let v=S*4;for(let I=0;I<u;I++){let V=d[I],k=w[I],Y=E[I],X=T*C*4*I;for(let H=0;H<V.count;H++){let z=H*v;x===!0&&(r.fromBufferAttribute(V,H),R[X+z+0]=r.x,R[X+z+1]=r.y,R[X+z+2]=r.z,R[X+z+3]=0),y===!0&&(r.fromBufferAttribute(k,H),R[X+z+4]=r.x,R[X+z+5]=r.y,R[X+z+6]=r.z,R[X+z+7]=0),p===!0&&(r.fromBufferAttribute(Y,H),R[X+z+8]=r.x,R[X+z+9]=r.y,R[X+z+10]=r.z,R[X+z+11]=Y.itemSize===4?r.w:1)}}f={count:u,texture:O,size:new tt(T,C)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];let y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ip(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var rp={[Ho]:"LINEAR_TONE_MAPPING",[Wo]:"REINHARD_TONE_MAPPING",[Xo]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[Zo]:"AGX_TONE_MAPPING",[Jo]:"NEUTRAL_TONE_MAPPING",[Yo]:"CUSTOM_TONE_MAPPING"};function sp(i,e,t,n,r){let s=new qt(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new qt(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),o=new Yt;o.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new en([0,2,0,0,2,0],2));let l=new Ps({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new tn(o,l),h=new Ir(-1,1,1,-1,0,1),u=null,f=null,g=!1,x,y=null,p=[],d=!1;this.setSize=function(w,E){s.setSize(w,E),a.setSize(w,E);for(let S=0;S<p.length;S++){let T=p[S];T.setSize&&T.setSize(w,E)}},this.setEffects=function(w){p=w,d=p.length>0&&p[0].isRenderPass===!0;let E=s.width,S=s.height;for(let T=0;T<p.length;T++){let C=p[T];C.setSize&&C.setSize(E,S)}},this.begin=function(w,E){if(g||w.toneMapping===un&&p.length===0)return!1;if(y=E,E!==null){let S=E.width,T=E.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&w.setRenderTarget(s),x=w.toneMapping,w.toneMapping=un,!0},this.hasRenderPass=function(){return d},this.end=function(w,E){w.toneMapping=x,g=!0;let S=s,T=a;for(let C=0;C<p.length;C++){let R=p[C];if(R.enabled!==!1&&(R.render(w,T,S,E),R.needsSwap!==!1)){let O=S;S=T,T=O}}if(u!==w.outputColorSpace||f!==w.toneMapping){u=w.outputColorSpace,f=w.toneMapping,l.defines={},We.getTransfer(u)===Ke&&(l.defines.SRGB_TRANSFER="");let C=rp[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,w.setRenderTarget(y),w.render(c,h),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var dh=new zn,gl=new ei(1,1),fh=new gr,ph=new Ts,mh=new Sr,Zc=[],Jc=[],$c=new Float32Array(16),Kc=new Float32Array(9),jc=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ap(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function hp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),bt(t,n)}}function up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),bt(t,n)}}function dp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),bt(t,n)}}function fp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function xp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function bp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?Ua:Fa,s=gl):s=dh,t.setTexture2D(e||s,r)}function Mp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ph,r)}function Sp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mh,r)}function wp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fh,r)}function Ep(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return xp;case 36294:return _p;case 36295:return vp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return wp}}function Tp(i,e){i.uniform1fv(this.addr,e)}function Ap(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rp(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function Pp(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ip(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dp(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lp(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Fp(i,e){i.uniform3iv(this.addr,e)}function Up(i,e){i.uniform4iv(this.addr,e)}function Op(i,e){i.uniform1uiv(this.addr,e)}function Bp(i,e){i.uniform2uiv(this.addr,e)}function zp(i,e){i.uniform3uiv(this.addr,e)}function kp(i,e){i.uniform4uiv(this.addr,e)}function Vp(i,e,t){let n=this.cache,r=e.length,s=Ga(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=gl:a=dh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Gp(i,e,t){let n=this.cache,r=e.length,s=Ga(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ph,s[a])}function Hp(i,e,t){let n=this.cache,r=e.length,s=Ga(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mh,s[a])}function Wp(i,e,t){let n=this.cache,r=e.length,s=Ga(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fh,s[a])}function Xp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Pp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Up;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Wp}}var xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ep(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xp(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function Qc(i,e){i.seq.push(e),i.map[e.id]=e}function qp(i,e,t){let n=i.name,r=n.length;for(pl.lastIndex=0;;){let s=pl.exec(n),a=pl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Qc(t,c===void 0?new xl(o,i,e):new _l(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new vl(o),Qc(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qp(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function eh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yp=37297,Zp=0;function Jp(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var th=new Fe;function $p(i){We._getMatrix(th,We.workingColorSpace,i);let e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case fr:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jp(i.getShaderSource(e),o)}else return s}function Kp(i,e){let t=$p(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jp={[Ho]:"Linear",[Wo]:"Reinhard",[Xo]:"Cineon",[qo]:"ACESFilmic",[Zo]:"AgX",[Jo]:"Neutral",[Yo]:"Custom"};function Qp(i,e){let t=jp[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ba=new F;function em(){We.getLuminanceCoefficients(Ba);let i=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function nm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function im(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gr(i){return i!==""}function ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(rm,am)}var sm=new Map;function am(i,e){let t=Oe[e];if(t===void 0){let n=sm.get(e);if(n!==void 0)t=Oe[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(om,lm)}function lm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ah(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cm={[Dr]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function hm(i){return cm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var um={[ii]:"ENVMAP_TYPE_CUBE",[Si]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function dm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":um[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fm={[Si]:"ENVMAP_MODE_REFRACTION"};function pm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mm={[Go]:"ENVMAP_BLENDING_MULTIPLY",[Ac]:"ENVMAP_BLENDING_MIX",[Cc]:"ENVMAP_BLENDING_ADD"};function gm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mm[i.combine]||"ENVMAP_BLENDING_NONE"}function xm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _m(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=hm(t),c=dm(t),h=pm(t),u=gm(t),f=xm(t),g=tm(t),x=nm(s),y=r.createProgram(),p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gr).join(`
`),d.length>0&&(d+=`
`)):(p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),d=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Oe.tonemapping_pars_fragment:"",t.toneMapping!==un?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=yl(a),a=ih(a,t),a=rh(a,t),o=yl(o),o=ih(o,t),o=rh(o,t),a=sh(a),o=sh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=w+p+a,S=w+d+o,T=eh(r,r.VERTEX_SHADER,E),C=eh(r,r.FRAGMENT_SHADER,S);r.attachShader(y,T),r.attachShader(y,C),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(C)||"",X=V.trim(),H=k.trim(),z=Y.trim(),$=!0,fe=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,T,C);else{let ce=nh(r,T,"vertex"),pe=nh(r,C,"fragment");Ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ce+`
`+pe)}else X!==""?Le("WebGLProgram: Program Info Log:",X):(H===""||z==="")&&(fe=!1);fe&&(I.diagnostics={runnable:$,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:z,prefix:d}})}r.deleteShader(T),r.deleteShader(C),O=new ir(r,y),v=im(r,y)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,Yp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=C,this}var vm=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}};function ym(i,e,t,n,r,s,a){let o=new _r,l=new bl,c=new Set,h=[],u=new Map,f=r.logarithmicDepthBuffer,g=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,I,V,k){let Y=V.fog,X=k.geometry,H=v.isMeshStandardMaterial?V.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),$=z&&z.mapping===Lr?z.image.height:null,fe=x[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=ce!==void 0?ce.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let Be,ct,lt,q;if(fe){let Qe=Sn[fe];Be=Qe.vertexShader,ct=Qe.fragmentShader}else Be=v.vertexShader,ct=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,qe=!!v.map,Mt=!!v.matcap,Xe=!!z,je=!!v.aoMap,it=!!v.lightMap,ze=!!v.bumpMap,gt=!!v.normalMap,A=!!v.displacementMap,xt=!!v.emissiveMap,$e=!!v.metalnessMap,st=!!v.roughnessMap,Se=v.anisotropy>0,M=v.clearcoat>0,m=v.dispersion>0,D=v.iridescence>0,W=v.sheen>0,J=v.transmission>0,G=Se&&!!v.anisotropyMap,Ee=M&&!!v.clearcoatMap,re=M&&!!v.clearcoatNormalMap,be=M&&!!v.clearcoatRoughnessMap,De=D&&!!v.iridescenceMap,te=D&&!!v.iridescenceThicknessMap,ae=W&&!!v.sheenColorMap,ve=W&&!!v.sheenRoughnessMap,we=!!v.specularMap,se=!!v.specularColorMap,ke=!!v.specularIntensityMap,P=J&&!!v.transmissionMap,de=J&&!!v.thicknessMap,ne=!!v.gradientMap,me=!!v.alphaMap,ee=v.alphaTest>0,Z=!!v.alphaHash,ie=!!v.extensions,Ne=un;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let at={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:ct,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vi,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:Mt,envMap:Xe,envMapMode:Xe&&z.mapping,envMapCubeUVHeight:$,aoMap:je,lightMap:it,bumpMap:ze,normalMap:gt,displacementMap:A,emissiveMap:xt,normalMapObjectSpace:gt&&v.normalMapType===Dc,normalMapTangentSpace:gt&&v.normalMapType===Ic,metalnessMap:$e,roughnessMap:st,anisotropy:Se,anisotropyMap:G,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:re,clearcoatRoughnessMap:be,dispersion:m,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:te,sheen:W,sheenColorMap:ae,sheenRoughnessMap:ve,specularMap:we,specularColorMap:se,specularIntensityMap:ke,transmission:J,transmissionMap:P,thicknessMap:de,gradientMap:ne,opaque:v.transparent===!1&&v.blending===xi&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:Z,combine:v.combine,mapUv:qe&&y(v.map.channel),aoMapUv:je&&y(v.aoMap.channel),lightMapUv:it&&y(v.lightMap.channel),bumpMapUv:ze&&y(v.bumpMap.channel),normalMapUv:gt&&y(v.normalMap.channel),displacementMapUv:A&&y(v.displacementMap.channel),emissiveMapUv:xt&&y(v.emissiveMap.channel),metalnessMapUv:$e&&y(v.metalnessMap.channel),roughnessMapUv:st&&y(v.roughnessMap.channel),anisotropyMapUv:G&&y(v.anisotropyMap.channel),clearcoatMapUv:Ee&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(v.sheenRoughnessMap.channel),specularMapUv:we&&y(v.specularMap.channel),specularColorMapUv:se&&y(v.specularColorMap.channel),specularIntensityMapUv:ke&&y(v.specularIntensityMap.channel),transmissionMapUv:P&&y(v.transmissionMap.channel),thicknessMapUv:de&&y(v.thicknessMap.channel),alphaMapUv:me&&y(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(gt||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(qe||me),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===Ke,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&We.getTransfer(v.emissiveMap.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===Nt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function d(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)b.push(I),b.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(w(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function w(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){let b=x[v.type],I;if(b){let V=Sn[b];I=Gc.clone(V.uniforms)}else I=v.uniforms;return I}function T(v,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new _m(i,b,v,s),h.push(I),u.set(b,I)),I}function C(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:O}}function bm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lh(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,g,x,y,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:x,renderOrder:u.renderOrder,z:y,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=y,d.group=p),e++,d}function o(u,f,g,x,y,p){let d=a(u,f,g,x,y,p);g.transmission>0?n.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(u,f,g,x,y,p){let d=a(u,f,g,x,y,p);g.transmission>0?n.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Mm),n.length>1&&n.sort(f||oh),r.length>1&&r.sort(f||oh)}function h(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Sm(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new lh,i.set(n,[a])):r>=s.length?(a=new lh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Em(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tm=0;function Am(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cm(i){let e=new wm,t=Em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let r=new F,s=new mt,a=new mt;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let g=0,x=0,y=0,p=0,d=0,w=0,E=0,S=0,T=0,C=0,R=0;c.sort(Am);for(let v=0,b=c.length;v<b;v++){let I=c[v],V=I.color,k=I.intensity,Y=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===wi?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*k,u+=V.g*k,f+=V.b*k;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],k);R++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,$=t.get(I);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=I.shadow.matrix,w++}n.directional[g]=H,g++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(V).multiplyScalar(k),H.distance=Y,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[y]=H;let z=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,z.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[y]=z.matrix,I.castShadow){let $=t.get(I);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=X,S++}y++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(V).multiplyScalar(k),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=H,p++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let z=I.shadow,$=t.get(I);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=I.shadow.matrix,E++}n.point[x]=H,x++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(k),H.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=H,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==g||O.pointLength!==x||O.spotLength!==y||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==w||O.numPointShadows!==E||O.numSpotShadows!==S||O.numSpotMaps!==T||O.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=p,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,O.directionalLength=g,O.pointLength=x,O.spotLength=y,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=w,O.numPointShadows=E,O.numSpotShadows=S,O.numSpotMaps=T,O.numLightProbes=R,n.version=Tm++)}function l(c,h){let u=0,f=0,g=0,x=0,y=0,p=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){let E=c[d];if(E.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(E.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function ch(i){let e=new Cm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Rm(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new ch(i),e.set(r,[o])):s>=a.length?(o=new ch(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
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
}`,Dm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Lm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],hh=new mt,Vr=new F,ml=new F;function Nm(i,e,t){let n=new Tr,r=new tt,s=new tt,a=new pt,o=new Is,l=new Ds,c={},h=t.maxTextureSize,u={[Fn]:Nt,[Nt]:Fn,[vn]:vn},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Pm,fragmentShader:Im}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let x=new Yt;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new tn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let d=this.type;this.render=function(C,R,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;C.type===lc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Dr);let v=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let k=d!==this.type;k&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(X=>X.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,X=C.length;Y<X;Y++){let H=C[Y],z=H.shadow;if(z===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Qi){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qt(r.x,r.y,{format:wi,type:bn,minFilter:At,magFilter:At,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new ei(r.x,r.y,fn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=_n,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt}else{H.isPointLight?(z.map=new wr(r.x),z.map.depthTexture=new Rs(r.x,dn)):(z.map=new qt(r.x,r.y),z.map.depthTexture=new ei(r.x,r.y,dn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=_n;let ce=i.state.buffers.depth.getReversed();this.type===Dr?(z.map.depthTexture.compareFunction=ce?Ua:Fa,z.map.depthTexture.minFilter=At,z.map.depthTexture.magFilter=At):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt)}z.camera.updateProjectionMatrix()}let fe=z.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<fe;ce++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(z.map),i.clear());let pe=z.getViewport(ce);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),V.viewport(a)}if(H.isPointLight){let pe=z.camera,Ve=z.matrix,Be=H.distance||pe.far;Be!==pe.far&&(pe.far=Be,pe.updateProjectionMatrix()),Vr.setFromMatrixPosition(H.matrixWorld),pe.position.copy(Vr),ml.copy(pe.position),ml.add(Dm[ce]),pe.up.copy(Lm[ce]),pe.lookAt(ml),pe.updateMatrixWorld(),Ve.makeTranslation(-Vr.x,-Vr.y,-Vr.z),hh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(hh,pe.coordinateSystem,pe.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),S(R,O,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Qi&&w(z,O),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(v,b,I)};function w(C,R){let O=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qt(r.x,r.y,{format:wi,type:bn})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,O,f,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,O,g,y,null)}function E(C,R,O,v){let b=null,I=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=O.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=b.uuid,k=R.uuid,Y=c[V];Y===void 0&&(Y={},c[V]=Y);let X=Y[k];X===void 0&&(X=b.clone(),Y[k]=X,R.addEventListener("dispose",T)),b=X}if(b.visible=R.visible,b.wireframe=R.wireframe,v===Qi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=i.properties.get(b);V.light=O}return b}function S(C,R,O,v,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Qi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let k=e.update(C),Y=C.material;if(Array.isArray(Y)){let X=k.groups;for(let H=0,z=X.length;H<z;H++){let $=X[H],fe=Y[$.materialIndex];if(fe&&fe.visible){let ce=E(C,fe,v,b);C.onBeforeShadow(i,C,R,O,k,ce,$),i.renderBufferDirect(O,null,k,ce,C,$),C.onAfterShadow(i,C,R,O,k,ce,$)}}}else if(Y.visible){let X=E(C,Y,v,b);C.onBeforeShadow(i,C,R,O,k,X,null),i.renderBufferDirect(O,null,k,X,C,null),C.onAfterShadow(i,C,R,O,k,X,null)}}let V=C.children;for(let k=0,Y=V.length;k<Y;k++)S(V[k],R,O,v,b)}function T(C){C.target.removeEventListener("dispose",T);for(let O in c){let v=c[O],b=C.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}var Fm={[Vs]:Gs,[Hs]:qs,[Ws]:Ys,[_i]:Xs,[Gs]:Vs,[qs]:Hs,[Ys]:Ws,[Xs]:_i};function Um(i,e){function t(){let P=!1,de=new pt,ne=null,me=new pt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!P&&(i.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){P=ee},setClear:function(ee,Z,ie,Ne,at){at===!0&&(ee*=Ne,Z*=Ne,ie*=Ne),de.set(ee,Z,ie,Ne),me.equals(de)===!1&&(i.clearColor(ee,Z,ie,Ne),me.copy(de))},reset:function(){P=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let P=!1,de=!1,ne=null,me=null,ee=null;return{setReversed:function(Z){if(de!==Z){let ie=e.get("EXT_clip_control");Z?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),de=Z;let Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return de},setTest:function(Z){Z?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){ne!==Z&&!P&&(i.depthMask(Z),ne=Z)},setFunc:function(Z){if(de&&(Z=Fm[Z]),me!==Z){switch(Z){case Vs:i.depthFunc(i.NEVER);break;case Gs:i.depthFunc(i.ALWAYS);break;case Hs:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case Ws:i.depthFunc(i.EQUAL);break;case Xs:i.depthFunc(i.GEQUAL);break;case qs:i.depthFunc(i.GREATER);break;case Ys:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Z}},setLocked:function(Z){P=Z},setClear:function(Z){ee!==Z&&(de&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){P=!1,ne=null,me=null,ee=null,de=!1}}}function r(){let P=!1,de=null,ne=null,me=null,ee=null,Z=null,ie=null,Ne=null,at=null;return{setTest:function(Qe){P||(Qe?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!P&&(i.stencilMask(Qe),de=Qe)},setFunc:function(Qe,pn,En){(ne!==Qe||me!==pn||ee!==En)&&(i.stencilFunc(Qe,pn,En),ne=Qe,me=pn,ee=En)},setOp:function(Qe,pn,En){(Z!==Qe||ie!==pn||Ne!==En)&&(i.stencilOp(Qe,pn,En),Z=Qe,ie=pn,Ne=En)},setLocked:function(Qe){P=Qe},setClear:function(Qe){at!==Qe&&(i.clearStencil(Qe),at=Qe)},reset:function(){P=!1,de=null,ne=null,me=null,ee=null,Z=null,ie=null,Ne=null,at=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,g=[],x=null,y=!1,p=null,d=null,w=null,E=null,S=null,T=null,C=null,R=new Je(0,0,0),O=0,v=!1,b=null,I=null,V=null,k=null,Y=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),H=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=z>=2);let fe=null,ce={},pe=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Be=new pt().fromArray(pe),ct=new pt().fromArray(Ve);function lt(P,de,ne,me){let ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ne;ie++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(de+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}let q={};q[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(_i),ze(!1),gt(Bo),j(i.CULL_FACE),je(yn);function j(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function xe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ue(P,de){return u[P]!==de?(i.bindFramebuffer(P,de),u[P]=de,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(P,de){let ne=g,me=!1;if(P){ne=f.get(de),ne===void 0&&(ne=[],f.set(de,ne));let ee=P.textures;if(ne.length!==ee.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ie=ee.length;Z<ie;Z++)ne[Z]=i.COLOR_ATTACHMENT0+Z;ne.length=ee.length,me=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,me=!0);me&&i.drawBuffers(ne)}function qe(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let Mt={[Kn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Mt[dc]=i.MIN,Mt[fc]=i.MAX;let Xe={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[vs]:i.ONE_MINUS_SRC_ALPHA,[bc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function je(P,de,ne,me,ee,Z,ie,Ne,at,Qe){if(P===yn){y===!0&&(xe(i.BLEND),y=!1);return}if(y===!1&&(j(i.BLEND),y=!0),P!==cc){if(P!==p||Qe!==v){if((d!==Kn||S!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,S=Kn),Qe)switch(P){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",P);break}else switch(P){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",P);break}w=null,E=null,T=null,C=null,R.set(0,0,0),O=0,p=P,v=Qe}return}ee=ee||de,Z=Z||ne,ie=ie||me,(de!==d||ee!==S)&&(i.blendEquationSeparate(Mt[de],Mt[ee]),d=de,S=ee),(ne!==w||me!==E||Z!==T||ie!==C)&&(i.blendFuncSeparate(Xe[ne],Xe[me],Xe[Z],Xe[ie]),w=ne,E=me,T=Z,C=ie),(Ne.equals(R)===!1||at!==O)&&(i.blendColor(Ne.r,Ne.g,Ne.b,at),R.copy(Ne),O=at),p=P,v=!1}function it(P,de){P.side===vn?xe(i.CULL_FACE):j(i.CULL_FACE);let ne=P.side===Nt;de&&(ne=!ne),ze(ne),P.blending===xi&&P.transparent===!1?je(yn):je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);let me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),xt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function gt(P){P!==ac?(j(i.CULL_FACE),P!==I&&(P===Bo?i.cullFace(i.BACK):P===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),I=P}function A(P){P!==V&&(H&&i.lineWidth(P),V=P)}function xt(P,de,ne){P?(j(i.POLYGON_OFFSET_FILL),(k!==de||Y!==ne)&&(i.polygonOffset(de,ne),k=de,Y=ne)):xe(i.POLYGON_OFFSET_FILL)}function $e(P){P?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function st(P){P===void 0&&(P=i.TEXTURE0+X-1),fe!==P&&(i.activeTexture(P),fe=P)}function Se(P,de,ne){ne===void 0&&(fe===null?ne=i.TEXTURE0+X-1:ne=fe);let me=ce[ne];me===void 0&&(me={type:void 0,texture:void 0},ce[ne]=me),(me.type!==P||me.texture!==de)&&(fe!==ne&&(i.activeTexture(ne),fe=ne),i.bindTexture(P,de||q[P]),me.type=P,me.texture=de)}function M(){let P=ce[fe];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function W(){try{i.texSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function re(){try{i.texStorage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function be(){try{i.texStorage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function De(){try{i.texImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function te(){try{i.texImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function ae(P){Be.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Be.copy(P))}function ve(P){ct.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ct.copy(P))}function we(P,de){let ne=c.get(de);ne===void 0&&(ne=new WeakMap,c.set(de,ne));let me=ne.get(P);me===void 0&&(me=i.getUniformBlockIndex(de,P.name),ne.set(P,me))}function se(P,de){let me=c.get(de).get(P);l.get(de)!==me&&(i.uniformBlockBinding(de,me,P.__bindingPointIndex),l.set(de,me))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,ce={},u={},f=new WeakMap,g=[],x=null,y=!1,p=null,d=null,w=null,E=null,S=null,T=null,C=null,R=new Je(0,0,0),O=0,v=!1,b=null,I=null,V=null,k=null,Y=null,Be.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:xe,bindFramebuffer:Ue,drawBuffers:ye,useProgram:qe,setBlending:je,setMaterial:it,setFlipSided:ze,setCullFace:gt,setLineWidth:A,setPolygonOffset:xt,setScissorTest:$e,activeTexture:st,bindTexture:Se,unbindTexture:M,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:De,texImage3D:te,updateUBOMapping:we,uniformBlockBinding:se,texStorage2D:re,texStorage3D:be,texSubImage2D:W,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:ae,viewport:ve,reset:ke}}function Om(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,m){return g?new OffscreenCanvas(M,m):mr("canvas")}function y(M,m,D){let W=1,J=Se(M);if((J.width>D||J.height>D)&&(W=D/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let G=Math.floor(W*J.width),Ee=Math.floor(W*J.height);u===void 0&&(u=x(G,Ee));let re=m?x(G,Ee):u;return re.width=G,re.height=Ee,re.getContext("2d").drawImage(M,0,0,G,Ee),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Ee+")."),re}else return"data"in M&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function p(M){return M.generateMipmaps}function d(M){i.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,m,D,W,J=!1){if(M!==null){if(i[M]!==void 0)return i[M];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=m;if(m===i.RED&&(D===i.FLOAT&&(G=i.R32F),D===i.HALF_FLOAT&&(G=i.R16F),D===i.UNSIGNED_BYTE&&(G=i.R8)),m===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.R8UI),D===i.UNSIGNED_SHORT&&(G=i.R16UI),D===i.UNSIGNED_INT&&(G=i.R32UI),D===i.BYTE&&(G=i.R8I),D===i.SHORT&&(G=i.R16I),D===i.INT&&(G=i.R32I)),m===i.RG&&(D===i.FLOAT&&(G=i.RG32F),D===i.HALF_FLOAT&&(G=i.RG16F),D===i.UNSIGNED_BYTE&&(G=i.RG8)),m===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RG8UI),D===i.UNSIGNED_SHORT&&(G=i.RG16UI),D===i.UNSIGNED_INT&&(G=i.RG32UI),D===i.BYTE&&(G=i.RG8I),D===i.SHORT&&(G=i.RG16I),D===i.INT&&(G=i.RG32I)),m===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGB8UI),D===i.UNSIGNED_SHORT&&(G=i.RGB16UI),D===i.UNSIGNED_INT&&(G=i.RGB32UI),D===i.BYTE&&(G=i.RGB8I),D===i.SHORT&&(G=i.RGB16I),D===i.INT&&(G=i.RGB32I)),m===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),D===i.UNSIGNED_INT&&(G=i.RGBA32UI),D===i.BYTE&&(G=i.RGBA8I),D===i.SHORT&&(G=i.RGBA16I),D===i.INT&&(G=i.RGBA32I)),m===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),m===i.RGBA){let Ee=J?fr:We.getTransfer(W);D===i.FLOAT&&(G=i.RGBA32F),D===i.HALF_FLOAT&&(G=i.RGBA16F),D===i.UNSIGNED_BYTE&&(G=Ee===Ke?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(M,m){let D;return M?m===null||m===dn||m===tr?D=i.DEPTH24_STENCIL8:m===fn?D=i.DEPTH32F_STENCIL8:m===er&&(D=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===dn||m===tr?D=i.DEPTH_COMPONENT24:m===fn?D=i.DEPTH_COMPONENT32F:m===er&&(D=i.DEPTH_COMPONENT16),D}function T(M,m){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Tt&&M.minFilter!==At?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function C(M){let m=M.target;m.removeEventListener("dispose",C),O(m),m.isVideoTexture&&h.delete(m)}function R(M){let m=M.target;m.removeEventListener("dispose",R),b(m)}function O(M){let m=n.get(M);if(m.__webglInit===void 0)return;let D=M.source,W=f.get(D);if(W){let J=W[m.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(M),Object.keys(W).length===0&&f.delete(D)}n.remove(M)}function v(M){let m=n.get(M);i.deleteTexture(m.__webglTexture);let D=M.source,W=f.get(D);delete W[m.__cacheKey],a.memory.textures--}function b(M){let m=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let J=0;J<m.__webglFramebuffer[W].length;J++)i.deleteFramebuffer(m.__webglFramebuffer[W][J]);else i.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)i.deleteFramebuffer(m.__webglFramebuffer[W]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let D=M.textures;for(let W=0,J=D.length;W<J;W++){let G=n.get(D[W]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(D[W])}n.remove(M)}let I=0;function V(){I=0}function k(){let M=I;return M>=r.maxTextures&&Le("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),I+=1,M}function Y(M){let m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function X(M,m){let D=n.get(M);if(M.isVideoTexture&&$e(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){let W=M.image;if(W===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,M,m);return}}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+m)}function H(M,m){let D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){q(D,M,m);return}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+m)}function z(M,m){let D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){q(D,M,m);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+m)}function $(M,m){let D=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){j(D,M,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+m)}let fe={[ys]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[bs]:i.MIRRORED_REPEAT},ce={[Tt]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},pe={[Lc]:i.NEVER,[Bc]:i.ALWAYS,[Nc]:i.LESS,[Fa]:i.LEQUAL,[Fc]:i.EQUAL,[Ua]:i.GEQUAL,[Uc]:i.GREATER,[Oc]:i.NOTEQUAL};function Ve(M,m){if(m.type===fn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===At||m.magFilter===$s||m.magFilter===Nr||m.magFilter===ri||m.minFilter===At||m.minFilter===$s||m.minFilter===Nr||m.minFilter===ri)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,fe[m.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,fe[m.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,fe[m.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ce[m.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ce[m.minFilter]),m.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,pe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==Nr&&m.minFilter!==ri||m.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Be(M,m){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",C));let W=m.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let G=Y(m);if(G!==M.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[G].usedTimes++;let Ee=J[M.__cacheKey];Ee!==void 0&&(J[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&v(m)),M.__cacheKey=G,M.__webglTexture=J[G].texture}return D}function ct(M,m,D){return Math.floor(Math.floor(M/D)/m)}function lt(M,m,D,W){let G=M.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,D,W,m.data);else{G.sort((te,ae)=>te.start-ae.start);let Ee=0;for(let te=1;te<G.length;te++){let ae=G[Ee],ve=G[te],we=ae.start+ae.count,se=ct(ve.start,m.width,4),ke=ct(ae.start,m.width,4);ve.start<=we+1&&se===ke&&ct(ve.start+ve.count-1,m.width,4)===se?ae.count=Math.max(ae.count,ve.start+ve.count-ae.start):(++Ee,G[Ee]=ve)}G.length=Ee+1;let re=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let te=0,ae=G.length;te<ae;te++){let ve=G[te],we=Math.floor(ve.start/4),se=Math.ceil(ve.count/4),ke=we%m.width,P=Math.floor(we/m.width),de=se,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,ke,P,de,ne,D,W,m.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function q(M,m,D){let W=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=i.TEXTURE_3D);let J=Be(M,m),G=m.source;t.bindTexture(W,M.__webglTexture,i.TEXTURE0+D);let Ee=n.get(G);if(G.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+D);let re=We.getPrimaries(We.workingColorSpace),be=m.colorSpace===Bn?null:We.getPrimaries(m.colorSpace),De=m.colorSpace===Bn||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let te=y(m.image,!1,r.maxTextureSize);te=st(m,te);let ae=s.convert(m.format,m.colorSpace),ve=s.convert(m.type),we=E(m.internalFormat,ae,ve,m.colorSpace,m.isVideoTexture);Ve(W,m);let se,ke=m.mipmaps,P=m.isVideoTexture!==!0,de=Ee.__version===void 0||J===!0,ne=G.dataReady,me=T(m,te);if(m.isDepthTexture)we=S(m.format===si,m.type),de&&(P?t.texStorage2D(i.TEXTURE_2D,1,we,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,we,te.width,te.height,0,ae,ve,null));else if(m.isDataTexture)if(ke.length>0){P&&de&&t.texStorage2D(i.TEXTURE_2D,me,we,ke[0].width,ke[0].height);for(let ee=0,Z=ke.length;ee<Z;ee++)se=ke[ee],P?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,ve,se.data):t.texImage2D(i.TEXTURE_2D,ee,we,se.width,se.height,0,ae,ve,se.data);m.generateMipmaps=!1}else P?(de&&t.texStorage2D(i.TEXTURE_2D,me,we,te.width,te.height),ne&&lt(m,te,ae,ve)):t.texImage2D(i.TEXTURE_2D,0,we,te.width,te.height,0,ae,ve,te.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){P&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,ke[0].width,ke[0].height,te.depth);for(let ee=0,Z=ke.length;ee<Z;ee++)if(se=ke[ee],m.format!==nn)if(ae!==null)if(P){if(ne)if(m.layerUpdates.size>0){let ie=cl(se.width,se.height,m.format,m.type);for(let Ne of m.layerUpdates){let at=se.data.subarray(Ne*ie/se.data.BYTES_PER_ELEMENT,(Ne+1)*ie/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ne,se.width,se.height,1,ae,at)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,te.depth,ae,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,we,se.width,se.height,te.depth,0,se.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,te.depth,ae,ve,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,we,se.width,se.height,te.depth,0,ae,ve,se.data)}else{P&&de&&t.texStorage2D(i.TEXTURE_2D,me,we,ke[0].width,ke[0].height);for(let ee=0,Z=ke.length;ee<Z;ee++)se=ke[ee],m.format!==nn?ae!==null?P?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,we,se.width,se.height,0,se.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,ve,se.data):t.texImage2D(i.TEXTURE_2D,ee,we,se.width,se.height,0,ae,ve,se.data)}else if(m.isDataArrayTexture)if(P){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,te.width,te.height,te.depth),ne)if(m.layerUpdates.size>0){let ee=cl(te.width,te.height,m.format,m.type);for(let Z of m.layerUpdates){let ie=te.data.subarray(Z*ee/te.data.BYTES_PER_ELEMENT,(Z+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,ae,ve,ie)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,ve,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,ae,ve,te.data);else if(m.isData3DTexture)P?(de&&t.texStorage3D(i.TEXTURE_3D,me,we,te.width,te.height,te.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,ve,te.data)):t.texImage3D(i.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,ae,ve,te.data);else if(m.isFramebufferTexture){if(de)if(P)t.texStorage2D(i.TEXTURE_2D,me,we,te.width,te.height);else{let ee=te.width,Z=te.height;for(let ie=0;ie<me;ie++)t.texImage2D(i.TEXTURE_2D,ie,we,ee,Z,0,ae,ve,null),ee>>=1,Z>>=1}}else if(ke.length>0){if(P&&de){let ee=Se(ke[0]);t.texStorage2D(i.TEXTURE_2D,me,we,ee.width,ee.height)}for(let ee=0,Z=ke.length;ee<Z;ee++)se=ke[ee],P?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae,ve,se):t.texImage2D(i.TEXTURE_2D,ee,we,ae,ve,se);m.generateMipmaps=!1}else if(P){if(de){let ee=Se(te);t.texStorage2D(i.TEXTURE_2D,me,we,ee.width,ee.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ve,te)}else t.texImage2D(i.TEXTURE_2D,0,we,ae,ve,te);p(m)&&d(W),Ee.__version=G.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function j(M,m,D){if(m.image.length!==6)return;let W=Be(M,m),J=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);let G=n.get(J);if(J.version!==G.__version||W===!0){t.activeTexture(i.TEXTURE0+D);let Ee=We.getPrimaries(We.workingColorSpace),re=m.colorSpace===Bn?null:We.getPrimaries(m.colorSpace),be=m.colorSpace===Bn||Ee===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let De=m.isCompressedTexture||m.image[0].isCompressedTexture,te=m.image[0]&&m.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!De&&!te?ae[Z]=y(m.image[Z],!0,r.maxCubemapSize):ae[Z]=te?m.image[Z].image:m.image[Z],ae[Z]=st(m,ae[Z]);let ve=ae[0],we=s.convert(m.format,m.colorSpace),se=s.convert(m.type),ke=E(m.internalFormat,we,se,m.colorSpace),P=m.isVideoTexture!==!0,de=G.__version===void 0||W===!0,ne=J.dataReady,me=T(m,ve);Ve(i.TEXTURE_CUBE_MAP,m);let ee;if(De){P&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,ve.width,ve.height);for(let Z=0;Z<6;Z++){ee=ae[Z].mipmaps;for(let ie=0;ie<ee.length;ie++){let Ne=ee[ie];m.format!==nn?we!==null?P?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,ke,Ne.width,Ne.height,0,Ne.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,0,0,Ne.width,Ne.height,we,se,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,ke,Ne.width,Ne.height,0,we,se,Ne.data)}}}else{if(ee=m.mipmaps,P&&de){ee.length>0&&me++;let Z=Se(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){P?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,we,se,ae[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,ae[Z].width,ae[Z].height,0,we,se,ae[Z].data);for(let ie=0;ie<ee.length;ie++){let at=ee[ie].image[Z].image;P?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,0,0,at.width,at.height,we,se,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,ke,at.width,at.height,0,we,se,at.data)}}else{P?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,se,ae[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,we,se,ae[Z]);for(let ie=0;ie<ee.length;ie++){let Ne=ee[ie];P?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,0,0,we,se,Ne.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,ke,we,se,Ne.image[Z])}}}p(m)&&d(i.TEXTURE_CUBE_MAP),G.__version=J.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function xe(M,m,D,W,J,G){let Ee=s.convert(D.format,D.colorSpace),re=s.convert(D.type),be=E(D.internalFormat,Ee,re,D.colorSpace),De=n.get(m),te=n.get(D);if(te.__renderTarget=m,!De.__hasExternalTextures){let ae=Math.max(1,m.width>>G),ve=Math.max(1,m.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,G,be,ae,ve,m.depth,0,Ee,re,null):t.texImage2D(J,G,be,ae,ve,0,Ee,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),xt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,J,te.__webglTexture,0,A(m)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,J,te.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(M,m,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),m.depthBuffer){let W=m.depthTexture,J=W&&W.isDepthTexture?W.type:null,G=S(m.stencilBuffer,J),Ee=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A(m),G,m.width,m.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,A(m),G,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,G,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,M)}else{let W=m.textures;for(let J=0;J<W.length;J++){let G=W[J],Ee=s.convert(G.format,G.colorSpace),re=s.convert(G.type),be=E(G.internalFormat,Ee,re,G.colorSpace);xt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A(m),be,m.width,m.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,A(m),be,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,be,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(M,m,D){let W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(m.depthTexture);if(J.__renderTarget=m,(!J.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,m.depthTexture);let De=s.convert(m.depthTexture.format),te=s.convert(m.depthTexture.type),ae;m.depthTexture.format===_n?ae=i.DEPTH_COMPONENT24:m.depthTexture.format===si&&(ae=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ae,m.width,m.height,0,De,te,null)}}else X(m.depthTexture,0);let G=J.__webglTexture,Ee=A(m),re=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,be=m.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===_n)xt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,G,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,G,0);else if(m.depthTexture.format===si)xt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,G,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,G,0);else throw new Error("Unknown depthTexture format")}function qe(M){let m=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){let J=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),m.__depthDisposeCallback=J}m.__boundDepthTexture=W}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)ye(m.__webglFramebuffer[W],M,W);else{let W=M.texture.mipmaps;W&&W.length>0?ye(m.__webglFramebuffer[0],M,0):ye(m.__webglFramebuffer,M,0)}else if(D){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=i.createRenderbuffer(),Ue(m.__webglDepthbuffer[W],M,!1);else{let J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else{let W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ue(m.__webglDepthbuffer,M,!1);else{let J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(M,m,D){let W=n.get(M);m!==void 0&&xe(W.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&qe(M)}function Xe(M){let m=M.texture,D=n.get(M),W=n.get(m);M.addEventListener("dispose",R);let J=M.textures,G=M.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=m.version,a.memory.textures++),G){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let be=0;be<m.mipmaps.length;be++)D.__webglFramebuffer[re][be]=i.createFramebuffer()}else D.__webglFramebuffer[re]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<m.mipmaps.length;re++)D.__webglFramebuffer[re]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let re=0,be=J.length;re<be;re++){let De=n.get(J[re]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&xt(M)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){let be=J[re];D.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[re]);let De=s.convert(be.format,be.colorSpace),te=s.convert(be.type),ae=E(be.internalFormat,De,te,be.colorSpace,M.isXRRenderTarget===!0),ve=A(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ae,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,D.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,m);for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)xe(D.__webglFramebuffer[re][be],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be);else xe(D.__webglFramebuffer[re],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(m)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let re=0,be=J.length;re<be;re++){let De=J[re],te=n.get(De),ae=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),Ve(ae,De),xe(D.__webglFramebuffer,M,De,i.COLOR_ATTACHMENT0+re,ae,0),p(De)&&d(ae)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(re=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,W.__webglTexture),Ve(re,m),m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)xe(D.__webglFramebuffer[be],M,m,i.COLOR_ATTACHMENT0,re,be);else xe(D.__webglFramebuffer,M,m,i.COLOR_ATTACHMENT0,re,0);p(m)&&d(re),t.unbindTexture()}M.depthBuffer&&qe(M)}function je(M){let m=M.textures;for(let D=0,W=m.length;D<W;D++){let J=m[D];if(p(J)){let G=w(M),Ee=n.get(J).__webglTexture;t.bindTexture(G,Ee),d(G),t.unbindTexture()}}}let it=[],ze=[];function gt(M){if(M.samples>0){if(xt(M)===!1){let m=M.textures,D=M.width,W=M.height,J=i.COLOR_BUFFER_BIT,G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(M),re=m.length>1;if(re)for(let De=0;De<m.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let be=M.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let De=0;De<m.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);let te=n.get(m[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,D,W,0,0,D,W,J,i.NEAREST),l===!0&&(it.length=0,ze.length=0,it.push(i.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(it.push(G),ze.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<m.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);let te=n.get(m[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let m=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function A(M){return Math.min(r.maxSamples,M.samples)}function xt(M){let m=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function $e(M){let m=a.render.frame;h.get(M)!==m&&(h.set(M,m),M.update())}function st(M,m){let D=M.colorSpace,W=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==vi&&D!==Bn&&(We.getTransfer(D)===Ke?(W!==nn||J!==$t)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",D)),m}function Se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bm(i,e){function t(n,r=Bn){let s,a=We.getTransfer(r);if(n===$t)return i.UNSIGNED_BYTE;if(n===js)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$o)return i.BYTE;if(n===Ko)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ks)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===tl)return i.RGB;if(n===nn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===Fr||n===Ur||n===Or||n===Br)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===ra||n===sa||n===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oa||n===la)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ca)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ha)return s.COMPRESSED_R11_EAC;if(n===ua)return s.COMPRESSED_SIGNED_R11_EAC;if(n===da)return s.COMPRESSED_RG11_EAC;if(n===fa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===ya||n===ba||n===Ma||n===Sa||n===wa||n===Ea||n===Ta||n===Aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Ra||n===Pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ca)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ia||n===Da||n===La||n===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
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

}`,Sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:zm,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends Un{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,x=null,y=typeof XRWebGLBinding<"u",p=new Sl,d={},w=t.getContextAttributes(),E=null,S=null,T=[],C=[],R=new tt,O=null,v=new Pt;v.viewport=new pt;let b=new Pt;b.viewport=new pt;let I=[v,b],V=new ks,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=T[q];return j===void 0&&(j=new Ki,T[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=T[q];return j===void 0&&(j=new Ki,T[q]=j),j.getGripSpace()},this.getHand=function(q){let j=T[q];return j===void 0&&(j=new Ki,T[q]=j),j.getHandSpace()};function X(q){let j=C.indexOf(q.inputSource);if(j===-1)return;let xe=T[j];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let q=0;q<T.length;q++){let j=C[q];j!==null&&(C[q]=null,T[q].disconnect(j))}k=null,Y=null,p.reset();for(let q in d)delete d[q];e.setRenderTarget(E),g=null,f=null,u=null,r=null,S=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,ye=null;w.depth&&(ye=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=w.stencil?si:_n,Ue=w.stencil?tr:dn);let qe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:nn,type:$t,depthTexture:new ei(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new qt(g.framebufferWidth,g.framebufferHeight,{format:nn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(q){for(let j=0;j<q.removed.length;j++){let xe=q.removed[j],Ue=C.indexOf(xe);Ue>=0&&(C[Ue]=null,T[Ue].disconnect(xe))}for(let j=0;j<q.added.length;j++){let xe=q.added[j],Ue=C.indexOf(xe);if(Ue===-1){for(let qe=0;qe<T.length;qe++)if(qe>=C.length){C.push(xe),Ue=qe;break}else if(C[qe]===null){C[qe]=xe,Ue=qe;break}if(Ue===-1)break}let ye=T[Ue];ye&&ye.connect(xe)}}let $=new F,fe=new F;function ce(q,j,xe){$.setFromMatrixPosition(j.matrixWorld),fe.setFromMatrixPosition(xe.matrixWorld);let Ue=$.distanceTo(fe),ye=j.projectionMatrix.elements,qe=xe.projectionMatrix.elements,Mt=ye[14]/(ye[10]-1),Xe=ye[14]/(ye[10]+1),je=(ye[9]+1)/ye[5],it=(ye[9]-1)/ye[5],ze=(ye[8]-1)/ye[0],gt=(qe[8]+1)/qe[0],A=Mt*ze,xt=Mt*gt,$e=Ue/(-ze+gt),st=$e*-ze;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Se=Mt+$e,M=Xe+$e,m=A-st,D=xt+(Ue-st),W=je*Xe/M*Se,J=it*Xe/M*Se;q.projectionMatrix.makePerspective(m,D,W,J,Se,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,xe=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),V.near=b.near=v.near=j,V.far=b.far=v.far=xe,(k!==V.near||Y!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,Y=V.far),V.layers.mask=q.layers.mask|6,v.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;let Ue=q.parent,ye=V.cameras;pe(V,Ue);for(let qe=0;qe<ye.length;qe++)pe(ye[qe],Ue);ye.length===2?ce(V,v,b):V.projectionMatrix.copy(v.projectionMatrix),Ve(q,V,Ue)};function Ve(q,j,xe){xe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(q){return d[q]};let Be=null;function ct(q,j){if(h=j.getViewerPose(c||a),x=j,h!==null){let xe=h.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Ue=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Ue=!0);for(let Xe=0;Xe<xe.length;Xe++){let je=xe[Xe],it=null;if(g!==null)it=g.getViewport(je);else{let gt=u.getViewSubImage(f,je);it=gt.viewport,Xe===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let ze=I[Xe];ze===void 0&&(ze=new Pt,ze.layers.enable(Xe),ze.viewport=new pt,I[Xe]=ze),ze.matrix.fromArray(je.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(je.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(it.x,it.y,it.width,it.height),Xe===0&&(V.matrix.copy(ze.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ue===!0&&V.cameras.push(ze)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Xe=u.getDepthInformation(xe[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,r.renderState)}if(ye&&ye.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<xe.length;Xe++){let je=xe[Xe].camera;if(je){let it=d[je];it||(it=new Cr,d[je]=it);let ze=u.getCameraImage(je);it.sourceTexture=ze}}}}for(let xe=0;xe<T.length;xe++){let Ue=C[xe],ye=T[xe];Ue!==null&&ye!==void 0&&ye.update(Ue,j,c||a)}Be&&Be(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let lt=new uh;lt.setAnimationLoop(ct),this.setAnimationLoop=function(q){Be=q},this.dispose=function(){}}},Ai=new bi,Vm=new mt;function Gm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,al(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Nt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Nt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let w=e.get(d),E=w.envMap,S=w.envMapRotation;E&&(p.envMap.value=E,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Ai)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hm(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let S=E.program;n.uniformBlockBinding(w,S)}function c(w,E){let S=r[w.id];S===void 0&&(x(w),S=h(w),r[w.id]=S,w.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(w,T);let C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function h(w){let E=u();w.__bindingPointIndex=E;let S=i.createBuffer(),T=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=r[w.id],S=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,R=S.length;C<R;C++){let O=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,b=O.length;v<b;v++){let I=O[v];if(g(I,C,v,T)===!0){let V=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],Y=0;for(let X=0;X<k.length;X++){let H=k[X],z=y(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,E,S,T){let C=w.value,R=E+"_"+S;if(T[R]===void 0)return typeof C=="number"||typeof C=="boolean"?T[R]=C:T[R]=C.clone(),!0;{let O=T[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return T[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function x(w){let E=w.uniforms,S=0,T=16;for(let R=0,O=E.length;R<O;R++){let v=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,I=v.length;b<I;b++){let V=v[b],k=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,X=k.length;Y<X;Y++){let H=k[Y],z=y(H),$=S%T,fe=$%z.boundary,ce=$+fe;S+=fe,ce!==0&&T-ce<z.storage&&(S+=T-ce),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=z.storage}}}let C=S%T;return C>0&&(S+=T-C),w.__size=S,w.__cache={},this}function y(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){let E=w.target;E.removeEventListener("dispose",p);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(let w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}var Wm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function Xm(){return Mn===null&&(Mn=new Cs(Wm,16,16,wi,bn),Mn.name="DFG_LUT",Mn.minFilter=At,Mn.magFilter=At,Mn.wrapS=xn,Mn.wrapT=xn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}var ka=class{constructor(e={}){let{canvas:t=zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:g=$t}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=g,p=new Set([na,ta,ea]),d=new Set([$t,dn,er,tr,js,Qs]),w=new Uint32Array(4),E=new Int32Array(4),S=null,T=null,C=[],R=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,b=!1;this._outputColorSpace=Xt;let I=0,V=0,k=null,Y=-1,X=null,H=new pt,z=new pt,$=null,fe=new Je(0),ce=0,pe=t.width,Ve=t.height,Be=1,ct=null,lt=null,q=new pt(0,0,pe,Ve),j=new pt(0,0,pe,Ve),xe=!1,Ue=new Tr,ye=!1,qe=!1,Mt=new mt,Xe=new F,je=new pt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function gt(){return k===null?Be:1}let A=n;function xt(_,L){return t.getContext(_,L)}try{let _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),A===null){let L="webgl2";if(A=xt(L,_),A===null)throw xt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Ie("WebGLRenderer: "+_.message),_}let $e,st,Se,M,m,D,W,J,G,Ee,re,be,De,te,ae,ve,we,se,ke,P,de,ne,me,ee;function Z(){$e=new jf(A),$e.init(),ne=new Bm(A,$e),st=new Hf(A,$e,e,ne),Se=new Um(A,$e),st.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),M=new tp(A),m=new bm,D=new Om(A,$e,Se,m,st,ne,M),W=new Xf(v),J=new Kf(v),G=new ru(A),me=new Vf(A,G),Ee=new Qf(A,G,M,me),re=new ip(A,Ee,G,M),ke=new np(A,st,D),ve=new Wf(m),be=new ym(v,W,J,$e,st,me,ve),De=new Gm(v,m),te=new Sm,ae=new Rm($e),se=new kf(v,W,J,Se,re,x,l),we=new Nm(v,re,st),ee=new Hm(A,M,st,Se),P=new Gf(A,$e,M),de=new ep(A,$e,M),M.programs=be.programs,v.capabilities=st,v.extensions=$e,v.properties=m,v.renderLists=te,v.shadowMap=we,v.state=Se,v.info=M}Z(),y!==$t&&(O=new sp(y,t.width,t.height,r,s));let ie=new wl(v,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=$e.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=$e.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(_){_!==void 0&&(Be=_,this.setSize(pe,Ve,!1))},this.getSize=function(_){return _.set(pe,Ve)},this.setSize=function(_,L,B=!0){if(ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=_,Ve=L,t.width=Math.floor(_*Be),t.height=Math.floor(L*Be),B===!0&&(t.style.width=_+"px",t.style.height=L+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(pe*Be,Ve*Be).floor()},this.setDrawingBufferSize=function(_,L,B){pe=_,Ve=L,Be=B,t.width=Math.floor(_*B),t.height=Math.floor(L*B),this.setViewport(0,0,_,L)},this.setEffects=function(_){if(y===$t){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let L=0;L<_.length;L++)if(_[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(H)},this.getViewport=function(_){return _.copy(q)},this.setViewport=function(_,L,B,U){_.isVector4?q.set(_.x,_.y,_.z,_.w):q.set(_,L,B,U),Se.viewport(H.copy(q).multiplyScalar(Be).round())},this.getScissor=function(_){return _.copy(j)},this.setScissor=function(_,L,B,U){_.isVector4?j.set(_.x,_.y,_.z,_.w):j.set(_,L,B,U),Se.scissor(z.copy(j).multiplyScalar(Be).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(_){Se.setScissorTest(xe=_)},this.setOpaqueSort=function(_){ct=_},this.setTransparentSort=function(_){lt=_},this.getClearColor=function(_){return _.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,B=!0){let U=0;if(_){let N=!1;if(k!==null){let oe=k.texture.format;N=p.has(oe)}if(N){let oe=k.texture.type,ge=d.has(oe),ue=se.getClearColor(),_e=se.getClearAlpha(),Te=ue.r,Pe=ue.g,Ce=ue.b;ge?(w[0]=Te,w[1]=Pe,w[2]=Ce,w[3]=_e,A.clearBufferuiv(A.COLOR,0,w)):(E[0]=Te,E[1]=Pe,E[2]=Ce,E[3]=_e,A.clearBufferiv(A.COLOR,0,E))}else U|=A.COLOR_BUFFER_BIT}L&&(U|=A.DEPTH_BUFFER_BIT),B&&(U|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),se.dispose(),te.dispose(),ae.dispose(),m.dispose(),W.dispose(),J.dispose(),re.dispose(),me.dispose(),ee.dispose(),be.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Tl),ie.removeEventListener("sessionend",Al),li.stop()};function Ne(_){_.preventDefault(),sl("WebGLRenderer: Context Lost."),b=!0}function at(){sl("WebGLRenderer: Context Restored."),b=!1;let _=M.autoReset,L=we.enabled,B=we.autoUpdate,U=we.needsUpdate,N=we.type;Z(),M.autoReset=_,we.enabled=L,we.autoUpdate=B,we.needsUpdate=U,we.type=N}function Qe(_){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function pn(_){let L=_.target;L.removeEventListener("dispose",pn),En(L)}function En(_){xh(_),m.remove(_)}function xh(_){let L=m.get(_).programs;L!==void 0&&(L.forEach(function(B){be.releaseProgram(B)}),_.isShaderMaterial&&be.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,B,U,N,oe){L===null&&(L=it);let ge=N.isMesh&&N.matrixWorld.determinant()<0,ue=vh(_,L,B,U,N);Se.setMaterial(U,ge);let _e=B.index,Te=1;if(U.wireframe===!0){if(_e=Ee.getWireframeAttribute(B),_e===void 0)return;Te=2}let Pe=B.drawRange,Ce=B.attributes.position,Ge=Pe.start*Te,nt=(Pe.start+Pe.count)*Te;oe!==null&&(Ge=Math.max(Ge,oe.start*Te),nt=Math.min(nt,(oe.start+oe.count)*Te)),_e!==null?(Ge=Math.max(Ge,0),nt=Math.min(nt,_e.count)):Ce!=null&&(Ge=Math.max(Ge,0),nt=Math.min(nt,Ce.count));let ht=nt-Ge;if(ht<0||ht===1/0)return;me.setup(N,U,ue,B,_e);let ut,rt=P;if(_e!==null&&(ut=G.get(_e),rt=de,rt.setIndex(ut)),N.isMesh)U.wireframe===!0?(Se.setLineWidth(U.wireframeLinewidth*gt()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(N.isLine){let Re=U.linewidth;Re===void 0&&(Re=1),Se.setLineWidth(Re*gt()),N.isLineSegments?rt.setMode(A.LINES):N.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else N.isPoints?rt.setMode(A.POINTS):N.isSprite&&rt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Re=N._multiDrawStarts,et=N._multiDrawCounts,Ye=N._multiDrawCount,kt=_e?G.get(_e).bytesPerElement:1,Ri=m.get(U).currentProgram.getUniforms();for(let Vt=0;Vt<Ye;Vt++)Ri.setValue(A,"_gl_DrawID",Vt),rt.render(Re[Vt]/kt,et[Vt])}else if(N.isInstancedMesh)rt.renderInstances(Ge,ht,N.count);else if(B.isInstancedBufferGeometry){let Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,et=Math.min(B.instanceCount,Re);rt.renderInstances(Ge,ht,et)}else rt.render(Ge,ht)};function El(_,L,B){_.transparent===!0&&_.side===vn&&_.forceSinglePass===!1?(_.side=Nt,_.needsUpdate=!0,Xr(_,L,B),_.side=Fn,_.needsUpdate=!0,Xr(_,L,B),_.side=vn):Xr(_,L,B)}this.compile=function(_,L,B=null){B===null&&(B=_),T=ae.get(B),T.init(L),R.push(T),B.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(T.pushLight(N),N.castShadow&&T.pushShadow(N))}),_!==B&&_.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(T.pushLight(N),N.castShadow&&T.pushShadow(N))}),T.setupLights();let U=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let oe=N.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let ue=oe[ge];El(ue,B,N),U.add(ue)}else El(oe,B,N),U.add(oe)}),T=R.pop(),U},this.compileAsync=function(_,L,B=null){let U=this.compile(_,L,B);return new Promise(N=>{function oe(){if(U.forEach(function(ge){m.get(ge).currentProgram.isReady()&&U.delete(ge)}),U.size===0){N(_);return}setTimeout(oe,10)}$e.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let to=null;function _h(_){to&&to(_)}function Tl(){li.stop()}function Al(){li.start()}let li=new uh;li.setAnimationLoop(_h),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(_){to=_,ie.setAnimationLoop(_),_===null?li.stop():li.start()},ie.addEventListener("sessionstart",Tl),ie.addEventListener("sessionend",Al),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let B=ie.enabled===!0&&ie.isPresenting===!0,U=O!==null&&(k===null||B)&&O.begin(v,k);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,L,k),T=ae.get(_,R.length),T.init(L),R.push(T),Mt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ue.setFromProjectionMatrix(Mt,hn,L.reversedDepth),qe=this.localClippingEnabled,ye=ve.init(this.clippingPlanes,qe),S=te.get(_,C.length),S.init(),C.push(S),ie.enabled===!0&&ie.isPresenting===!0){let ge=v.xr.getDepthSensingMesh();ge!==null&&no(ge,L,-1/0,v.sortObjects)}no(_,L,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(ct,lt),ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ze&&se.addToRenderList(S,_),this.info.render.frame++,ye===!0&&ve.beginShadows();let N=T.state.shadowsArray;if(we.render(N,_,L),ye===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&O.hasRenderPass())===!1){let ge=S.opaque,ue=S.transmissive;if(T.setupLights(),L.isArrayCamera){let _e=L.cameras;if(ue.length>0)for(let Te=0,Pe=_e.length;Te<Pe;Te++){let Ce=_e[Te];Rl(ge,ue,_,Ce)}ze&&se.render(_);for(let Te=0,Pe=_e.length;Te<Pe;Te++){let Ce=_e[Te];Cl(S,_,Ce,Ce.viewport)}}else ue.length>0&&Rl(ge,ue,_,L),ze&&se.render(_),Cl(S,_,L)}k!==null&&V===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),U&&O.end(v),_.isScene===!0&&_.onAfterRender(v,_,L),me.resetDefaultState(),Y=-1,X=null,R.pop(),R.length>0?(T=R[R.length-1],ye===!0&&ve.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function no(_,L,B,U){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ue.intersectsSprite(_)){U&&je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Mt);let ge=re.update(_),ue=_.material;ue.visible&&S.push(_,ge,ue,B,je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ue.intersectsObject(_))){let ge=re.update(_),ue=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),je.copy(_.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(_.matrixWorld).applyMatrix4(Mt)),Array.isArray(ue)){let _e=ge.groups;for(let Te=0,Pe=_e.length;Te<Pe;Te++){let Ce=_e[Te],Ge=ue[Ce.materialIndex];Ge&&Ge.visible&&S.push(_,ge,Ge,B,je.z,Ce)}}else ue.visible&&S.push(_,ge,ue,B,je.z,null)}}let oe=_.children;for(let ge=0,ue=oe.length;ge<ue;ge++)no(oe[ge],L,B,U)}function Cl(_,L,B,U){let{opaque:N,transmissive:oe,transparent:ge}=_;T.setupLightsView(B),ye===!0&&ve.setGlobalState(v.clippingPlanes,B),U&&Se.viewport(H.copy(U)),N.length>0&&Wr(N,L,B),oe.length>0&&Wr(oe,L,B),ge.length>0&&Wr(ge,L,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Rl(_,L,B,U){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[U.id]===void 0){let Ge=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[U.id]=new qt(1,1,{generateMipmaps:!0,type:Ge?bn:$t,minFilter:ri,samples:st.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}let oe=T.state.transmissionRenderTarget[U.id],ge=U.viewport||H;oe.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);let ue=v.getRenderTarget(),_e=v.getActiveCubeFace(),Te=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(fe),ce=v.getClearAlpha(),ce<1&&v.setClearColor(16777215,.5),v.clear(),ze&&se.render(B);let Pe=v.toneMapping;v.toneMapping=un;let Ce=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),T.setupLightsView(U),ye===!0&&ve.setGlobalState(v.clippingPlanes,U),Wr(_,B,U),D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let nt=0,ht=L.length;nt<ht;nt++){let ut=L[nt],{object:rt,geometry:Re,material:et,group:Ye}=ut;if(et.side===vn&&rt.layers.test(U.layers)){let kt=et.side;et.side=Nt,et.needsUpdate=!0,Pl(rt,B,U,Re,et,Ye),et.side=kt,et.needsUpdate=!0,Ge=!0}}Ge===!0&&(D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe))}v.setRenderTarget(ue,_e,Te),v.setClearColor(fe,ce),Ce!==void 0&&(U.viewport=Ce),v.toneMapping=Pe}function Wr(_,L,B){let U=L.isScene===!0?L.overrideMaterial:null;for(let N=0,oe=_.length;N<oe;N++){let ge=_[N],{object:ue,geometry:_e,group:Te}=ge,Pe=ge.material;Pe.allowOverride===!0&&U!==null&&(Pe=U),ue.layers.test(B.layers)&&Pl(ue,L,B,_e,Pe,Te)}}function Pl(_,L,B,U,N,oe){_.onBeforeRender(v,L,B,U,N,oe),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(v,L,B,U,_,oe),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,v.renderBufferDirect(B,L,U,N,_,oe),N.side=Fn,N.needsUpdate=!0,v.renderBufferDirect(B,L,U,N,_,oe),N.side=vn):v.renderBufferDirect(B,L,U,N,_,oe),_.onAfterRender(v,L,B,U,N,oe)}function Xr(_,L,B){L.isScene!==!0&&(L=it);let U=m.get(_),N=T.state.lights,oe=T.state.shadowsArray,ge=N.state.version,ue=be.getParameters(_,N.state,oe,L,B),_e=be.getProgramCacheKey(ue),Te=U.programs;U.environment=_.isMeshStandardMaterial?L.environment:null,U.fog=L.fog,U.envMap=(_.isMeshStandardMaterial?J:W).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",pn),Te=new Map,U.programs=Te);let Pe=Te.get(_e);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===ge)return Dl(_,ue),Pe}else ue.uniforms=be.getUniforms(_),_.onBeforeCompile(ue,v),Pe=be.acquireProgram(ue,_e),Te.set(_e,Pe),U.uniforms=ue.uniforms;let Ce=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=ve.uniform),Dl(_,ue),U.needsLights=bh(_),U.lightsStateVersion=ge,U.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function Il(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=ir.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Dl(_,L){let B=m.get(_);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function vh(_,L,B,U,N){L.isScene!==!0&&(L=it),D.resetTextureUnits();let oe=L.fog,ge=U.isMeshStandardMaterial?L.environment:null,ue=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:vi,_e=(U.isMeshStandardMaterial?J:W).get(U.envMap||ge),Te=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ce=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,nt=!!B.morphAttributes.color,ht=un;U.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ht=v.toneMapping);let ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=ut!==void 0?ut.length:0,Re=m.get(U),et=T.state.lights;if(ye===!0&&(qe===!0||_!==X)){let Dt=_===X&&U.id===Y;ve.setState(U,_,Dt)}let Ye=!1;U.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==et.state.version||Re.outputColorSpace!==ue||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==_e||U.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ve.numPlanes||Re.numIntersection!==ve.numIntersection)||Re.vertexAlphas!==Te||Re.vertexTangents!==Pe||Re.morphTargets!==Ce||Re.morphNormals!==Ge||Re.morphColors!==nt||Re.toneMapping!==ht||Re.morphTargetsCount!==rt)&&(Ye=!0):(Ye=!0,Re.__version=U.version);let kt=Re.currentProgram;Ye===!0&&(kt=Xr(U,L,N));let Ri=!1,Vt=!1,ar=!1,ot=kt.getUniforms(),Ft=Re.uniforms;if(Se.useProgram(kt.program)&&(Ri=!0,Vt=!0,ar=!0),U.id!==Y&&(Y=U.id,Vt=!0),Ri||X!==_){Se.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ot.setValue(A,"projectionMatrix",_.projectionMatrix),ot.setValue(A,"viewMatrix",_.matrixWorldInverse);let Ut=ot.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,Xe.setFromMatrixPosition(_.matrixWorld)),st.logarithmicDepthBuffer&&ot.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ot.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),X!==_&&(X=_,Vt=!0,ar=!0)}if(Re.needsLights&&(et.state.directionalShadowMap.length>0&&ot.setValue(A,"directionalShadowMap",et.state.directionalShadowMap,D),et.state.spotShadowMap.length>0&&ot.setValue(A,"spotShadowMap",et.state.spotShadowMap,D),et.state.pointShadowMap.length>0&&ot.setValue(A,"pointShadowMap",et.state.pointShadowMap,D)),N.isSkinnedMesh){ot.setOptional(A,N,"bindMatrix"),ot.setOptional(A,N,"bindMatrixInverse");let Dt=N.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ot.setValue(A,"boneTexture",Dt.boneTexture,D))}N.isBatchedMesh&&(ot.setOptional(A,N,"batchingTexture"),ot.setValue(A,"batchingTexture",N._matricesTexture,D),ot.setOptional(A,N,"batchingIdTexture"),ot.setValue(A,"batchingIdTexture",N._indirectTexture,D),ot.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(A,"batchingColorTexture",N._colorsTexture,D));let Kt=B.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&ke.update(N,B,kt),(Vt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,ot.setValue(A,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ft.envMap.value=_e,Ft.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&L.environment!==null&&(Ft.envMapIntensity.value=L.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Xm()),Vt&&(ot.setValue(A,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&yh(Ft,ar),oe&&U.fog===!0&&De.refreshFogUniforms(Ft,oe),De.refreshMaterialUniforms(Ft,U,Be,Ve,T.state.transmissionRenderTarget[_.id]),ir.upload(A,Il(Re),Ft,D)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ir.upload(A,Il(Re),Ft,D),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ot.setValue(A,"center",N.center),ot.setValue(A,"modelViewMatrix",N.modelViewMatrix),ot.setValue(A,"normalMatrix",N.normalMatrix),ot.setValue(A,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Dt=U.uniformsGroups;for(let Ut=0,io=Dt.length;Ut<io;Ut++){let ci=Dt[Ut];ee.update(ci,kt),ee.bind(ci,kt)}}return kt}function yh(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function bh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(_,L,B){let U=m.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),m.get(_.texture).__webglTexture=L,m.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:B,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){let B=m.get(_);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};let Mh=A.createFramebuffer();this.setRenderTarget=function(_,L=0,B=0){k=_,I=L,V=B;let U=null,N=!1,oe=!1;if(_){let ue=m.get(_);if(ue.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(A.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(_.viewport),z.copy(_.scissor),$=_.scissorTest,Se.viewport(H),Se.scissor(z),Se.setScissorTest($),Y=-1;return}else if(ue.__webglFramebuffer===void 0)D.setupRenderTarget(_);else if(ue.__hasExternalTextures)D.rebindTextures(_,m.get(_.texture).__webglTexture,m.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Pe=_.depthTexture;if(ue.__boundDepthTexture!==Pe){if(Pe!==null&&m.has(Pe)&&(_.width!==Pe.image.width||_.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(_)}}let _e=_.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);let Te=m.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?U=Te[L][B]:U=Te[L],N=!0):_.samples>0&&D.useMultisampledRTT(_)===!1?U=m.get(_).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[B]:U=Te,H.copy(_.viewport),z.copy(_.scissor),$=_.scissorTest}else H.copy(q).multiplyScalar(Be).floor(),z.copy(j).multiplyScalar(Be).floor(),$=xe;if(B!==0&&(U=Mh),Se.bindFramebuffer(A.FRAMEBUFFER,U)&&Se.drawBuffers(_,U),Se.viewport(H),Se.scissor(z),Se.setScissorTest($),N){let ue=m.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,B)}else if(oe){let ue=L;for(let _e=0;_e<_.textures.length;_e++){let Te=m.get(_.textures[_e]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+_e,Te.__webglTexture,B,ue)}}else if(_!==null&&B!==0){let ue=m.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,B)}Y=-1},this.readRenderTargetPixels=function(_,L,B,U,N,oe,ge,ue=0){if(!(_&&_.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=m.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){Se.bindFramebuffer(A.FRAMEBUFFER,_e);try{let Te=_.textures[ue],Pe=Te.format,Ce=Te.type;if(!st.textureFormatReadable(Pe)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ce)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-U&&B>=0&&B<=_.height-N&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ue),A.readPixels(L,B,U,N,ne.convert(Pe),ne.convert(Ce),oe))}finally{let Te=k!==null?m.get(k).__webglFramebuffer:null;Se.bindFramebuffer(A.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(_,L,B,U,N,oe,ge,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=m.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(L>=0&&L<=_.width-U&&B>=0&&B<=_.height-N){Se.bindFramebuffer(A.FRAMEBUFFER,_e);let Te=_.textures[ue],Pe=Te.format,Ce=Te.type;if(!st.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ge),A.bufferData(A.PIXEL_PACK_BUFFER,oe.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ue),A.readPixels(L,B,U,N,ne.convert(Pe),ne.convert(Ce),0);let nt=k!==null?m.get(k).__webglFramebuffer:null;Se.bindFramebuffer(A.FRAMEBUFFER,nt);let ht=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await kc(A,ht,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ge),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,oe),A.deleteBuffer(Ge),A.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,B=0){let U=Math.pow(2,-B),N=Math.floor(_.image.width*U),oe=Math.floor(_.image.height*U),ge=L!==null?L.x:0,ue=L!==null?L.y:0;D.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,ge,ue,N,oe),Se.unbindTexture()};let Sh=A.createFramebuffer(),wh=A.createFramebuffer();this.copyTextureToTexture=function(_,L,B=null,U=null,N=0,oe=null){oe===null&&(N!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let ge,ue,_e,Te,Pe,Ce,Ge,nt,ht,ut=_.isCompressedTexture?_.mipmaps[oe]:_.image;if(B!==null)ge=B.max.x-B.min.x,ue=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,Pe=B.min.y,Ce=B.isBox3?B.min.z:0;else{let Kt=Math.pow(2,-N);ge=Math.floor(ut.width*Kt),ue=Math.floor(ut.height*Kt),_.isDataArrayTexture?_e=ut.depth:_.isData3DTexture?_e=Math.floor(ut.depth*Kt):_e=1,Te=0,Pe=0,Ce=0}U!==null?(Ge=U.x,nt=U.y,ht=U.z):(Ge=0,nt=0,ht=0);let rt=ne.convert(L.format),Re=ne.convert(L.type),et;L.isData3DTexture?(D.setTexture3D(L,0),et=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(D.setTexture2DArray(L,0),et=A.TEXTURE_2D_ARRAY):(D.setTexture2D(L,0),et=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);let Ye=A.getParameter(A.UNPACK_ROW_LENGTH),kt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ri=A.getParameter(A.UNPACK_SKIP_PIXELS),Vt=A.getParameter(A.UNPACK_SKIP_ROWS),ar=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Te),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ce);let ot=_.isDataArrayTexture||_.isData3DTexture,Ft=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){let Kt=m.get(_),Dt=m.get(L),Ut=m.get(Kt.__renderTarget),io=m.get(Dt.__renderTarget);Se.bindFramebuffer(A.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let ci=0;ci<_e;ci++)ot&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,m.get(_).__webglTexture,N,Ce+ci),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,m.get(L).__webglTexture,oe,ht+ci)),A.blitFramebuffer(Te,Pe,ge,ue,Ge,nt,ge,ue,A.DEPTH_BUFFER_BIT,A.NEAREST);Se.bindFramebuffer(A.READ_FRAMEBUFFER,null),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||m.has(_)){let Kt=m.get(_),Dt=m.get(L);Se.bindFramebuffer(A.READ_FRAMEBUFFER,Sh),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,wh);for(let Ut=0;Ut<_e;Ut++)ot?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Kt.__webglTexture,N,Ce+Ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Kt.__webglTexture,N),Ft?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dt.__webglTexture,oe,ht+Ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dt.__webglTexture,oe),N!==0?A.blitFramebuffer(Te,Pe,ge,ue,Ge,nt,ge,ue,A.COLOR_BUFFER_BIT,A.NEAREST):Ft?A.copyTexSubImage3D(et,oe,Ge,nt,ht+Ut,Te,Pe,ge,ue):A.copyTexSubImage2D(et,oe,Ge,nt,Te,Pe,ge,ue);Se.bindFramebuffer(A.READ_FRAMEBUFFER,null),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ft?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(et,oe,Ge,nt,ht,ge,ue,_e,rt,Re,ut.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(et,oe,Ge,nt,ht,ge,ue,_e,rt,ut.data):A.texSubImage3D(et,oe,Ge,nt,ht,ge,ue,_e,rt,Re,ut):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,oe,Ge,nt,ge,ue,rt,Re,ut.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,oe,Ge,nt,ut.width,ut.height,rt,ut.data):A.texSubImage2D(A.TEXTURE_2D,oe,Ge,nt,ge,ue,rt,Re,ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ye),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,kt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ri),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ar),oe===0&&L.generateMipmaps&&A.generateMipmap(et),Se.unbindTexture()},this.initRenderTarget=function(_){m.get(_).__webglFramebuffer===void 0&&D.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?D.setTextureCube(_,0):_.isData3DTexture?D.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?D.setTexture2DArray(_,0):D.setTexture2D(_,0),Se.unbindTexture()},this.resetState=function(){I=0,V=0,k=null,Se.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Ym=["canvas"],Ha=class i{constructor(e,t){this.platformId=e;this.ngZone=t}canvasRef;renderer;scene;camera;particlesMesh;animationId=0;mouseX=0;mouseY=0;targetX=0;targetY=0;windowHalfX=0;windowHalfY=0;ngAfterViewInit(){jt(this.platformId)&&(this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.ngZone.runOutsideAngular(()=>{this.initThree(),this.animate()}),window.addEventListener("resize",this.onWindowResize.bind(this)),document.addEventListener("mousemove",this.onDocumentMouseMove.bind(this)))}ngOnDestroy(){jt(this.platformId)&&(cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.onWindowResize.bind(this)),document.removeEventListener("mousemove",this.onDocumentMouseMove.bind(this)))}initThree(){let e=this.canvasRef.nativeElement;this.scene=new Er,this.camera=new Pt(75,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=2,this.camera.position.y=0,this.renderer=new ka({canvas:e,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));let t=new Yt,n=2e3,r=new Float32Array(n*3);for(let a=0;a<n*3;a++){let o=2*Math.cbrt(Math.random()),l=Math.random()*2*Math.PI,c=Math.acos(2*Math.random()-1),h=o*Math.sin(c)*Math.cos(l),u=o*Math.sin(c)*Math.sin(l),f=o*Math.cos(c);r[a*3]=h,r[a*3+1]=u,r[a*3+2]=f}t.setAttribute("position",new Lt(r,3));let s=new ji({size:.005,color:65345,transparent:!0,opacity:.8});this.particlesMesh=new Ar(t,s),this.scene.add(this.particlesMesh)}onDocumentMouseMove(e){this.mouseX=e.clientX-this.windowHalfX,this.mouseY=e.clientY-this.windowHalfY}onWindowResize(){this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){this.animationId=requestAnimationFrame(this.animate.bind(this)),this.targetX=this.mouseX*.001,this.targetY=this.mouseY*.001,this.particlesMesh.rotation.y+=.002,this.particlesMesh.rotation.x+=.001,this.particlesMesh.rotation.y+=.05*(this.targetX-this.particlesMesh.rotation.y),this.particlesMesh.rotation.x+=.05*(this.targetY-this.particlesMesh.rotation.x),this.renderer.render(this.scene,this.camera)}static \u0275fac=function(t){return new(t||i)(Ot(mn),Ot(Nl))};static \u0275cmp=dt({type:i,selectors:[["app-three-scene"]],viewQuery:function(t,n){if(t&1&&Li(Ym,5),t&2){let r;Vn(r=Gn())&&(n.canvasRef=r.first)}},decls:2,vars:0,consts:[["canvas",""],[1,"webgl","fixed","top-0","left-0","w-full","h-full","-z-10","outline-none"]],template:function(t,n){t&1&&hi(0,"canvas",1,0)},encapsulation:2})};var Zm=["*"];function Jm(i,e){if(i&1&&Ae(0,"i"),i&2){let t=An();Cn(t.icon+" mr-1.5 text-xs "+t.color+"-400")}}var Wa=class i{label="";icon;color="blue";hoverable=!0;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-tech-badge"]],inputs:{label:"label",icon:"icon",color:"color",hoverable:"hoverable"},ngContentSelectors:Zm,decls:4,vars:5,consts:[[3,"class",4,"ngIf"]],template:function(t,n){t&1&&(Ii(),K(0,"span"),St(1,Jm,1,2,"i",0),Di(2),le(3),Q()),t&2&&(Cn("group px-3 py-1.5 border rounded-full text-xs font-mono-custom uppercase tracking-wider transition-all cursor-default backdrop-blur-sm bg-"+n.color+"-500/10 border-"+n.color+"-400/30 text-"+n.color+"-300 hover:bg-"+n.color+"-500/20 hover:border-"+n.color+"-400/60 "+(n.hoverable?"hover:scale-105":"")),Gt("aria-label","Technology: "+n.label),Me(),Ze("ngIf",n.icon),Me(2),wt("",n.label," "))},dependencies:[_t,$r],encapsulation:2})};var $m=["*"],Xa=class i{value="0";colorStart="blue";colorEnd="cyan";alignment="text-center lg:text-left";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-stat-card"]],inputs:{value:"value",colorStart:"colorStart",colorEnd:"colorEnd",alignment:"alignment"},ngContentSelectors:$m,decls:5,vars:5,consts:[[1,"text-center","lg:text-left","group",3,"ngClass"],[1,"text-xl","sm:text-2xl","md:text-3xl","lg:text-4xl","xl:text-5xl","font-bold","text-transparent","bg-clip-text","mb-1","group-hover:scale-110","transition-transform"],[1,"text-[8px]","sm:text-[10px]","md:text-xs","lg:text-sm","text-gray-400","font-mono-custom","uppercase","tracking-wider","leading-tight"]],template:function(t,n){t&1&&(Ii(),K(0,"div",0)(1,"div",1),le(2),Q(),K(3,"div",2),Di(4),Q()()),t&2&&(Ze("ngClass",n.alignment),Me(),Cn("bg-gradient-to-r from-"+n.colorStart+"-400 to-"+n.colorEnd+"-400"),Gt("aria-label",n.value),Me(),wt(" ",n.value," "))},dependencies:[_t,Jr],encapsulation:2,changeDetection:0})};var qa=class i{href="";icon="";label="";color="blue";external=!0;ariaLabel;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-social-link"]],inputs:{href:"href",icon:"icon",label:"label",color:"color",external:"external",ariaLabel:"ariaLabel"},decls:5,vars:11,consts:[[1,"group","relative","w-10","h-10","flex","items-center","justify-center","rounded-full","border","transition-all","hover:scale-125","hover:rotate-12","backdrop-blur-sm",3,"href","target","rel"],[1,"absolute","-bottom-8","left-1/2","-translate-x-1/2","opacity-0","group-hover:opacity-100","transition-opacity","pointer-events-none"]],template:function(t,n){t&1&&(an(0,"a",0),hi(1,"i"),an(2,"div",1)(3,"span"),le(4),kn()()()),t&2&&(Cn("border-"+n.color+"-400/30 hover:border-"+n.color+"-400 text-gray-400 hover:text-"+n.color+"-400 bg-"+n.color+"-500/5 hover:bg-"+n.color+"-500/20"),Ol("href",n.href,Pi)("target",n.external?"_blank":"_self")("rel",n.external?"noopener noreferrer":""),Gt("aria-label",n.ariaLabel||n.label),Me(),Cn(n.icon+" text-lg"),Me(2),Cn("text-xs font-mono-custom text-"+n.color+"-400 whitespace-nowrap"),Me(),Bt(n.label))},dependencies:[_t],encapsulation:2,changeDetection:0})};var Ya=class i{text="DEVELOPER \u2022 CYBER SECURITY ENTHUSIAST \u2022 ";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-circular-badge"]],inputs:{text:"text"},decls:11,vars:1,consts:[[1,"circular-badge-container"],[1,"rotating-text-wrapper"],["viewBox","0 0 100 100","width","100","height","100"],["id","circle","d","M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"],["font-size","10.5","font-weight","bold","fill","currentColor","letter-spacing","1.2"],[0,"xlink","href","#circle"],[1,"center-icon"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7 17L17 7M17 7H7M17 7V17","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"]],template:function(t,n){t&1&&(an(0,"div",0)(1,"div",1),sn(),an(2,"svg",2)(3,"defs"),hi(4,"path",3),kn(),an(5,"text",4)(6,"textPath",5),le(7),kn()()()(),Tn(),an(8,"div",6),sn(),an(9,"svg",7),hi(10,"path",8),kn()()()),t&2&&(Me(7),wt(" ",n.text," "))},dependencies:[_t],styles:["[_nghost-%COMP%]{display:inline-block}.circular-badge-container[_ngcontent-%COMP%]{position:relative;width:100px;height:100px;display:flex;align-items:center;justify-content:center;color:#fff}.rotating-text-wrapper[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;animation:_ngcontent-%COMP%_rotate 10s linear infinite}.rotating-text-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;overflow:visible}.center-icon[_ngcontent-%COMP%]{position:absolute;width:40px;height:40px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;z-index:2}.center-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})};var sr=class i{constructor(e,t,n){this.el=e;this.renderer=t;this.isBrowser=jt(n)}parallaxRatio=.5;isBrowser;ngOnInit(){this.isBrowser&&(this.renderer.setStyle(this.el.nativeElement,"transition","transform 0.1s ease-out"),this.renderer.setStyle(this.el.nativeElement,"will-change","transform"),this.updateParallax())}onWindowScroll(){this.isBrowser&&this.updateParallax()}updateParallax(){if(!this.isBrowser)return;let e=window.scrollY,t=this.el.nativeElement.getBoundingClientRect().top+e,n=-(e*this.parallaxRatio);this.renderer.setStyle(this.el.nativeElement,"transform",`translate3d(0, ${n}px, 0)`)}ngOnDestroy(){this.isBrowser&&(this.renderer.removeStyle(this.el.nativeElement,"transform"),this.renderer.removeStyle(this.el.nativeElement,"will-change"))}static \u0275fac=function(t){return new(t||i)(Ot(qr),Ot(Ul),Ot(mn))};static \u0275dir=Yr({type:i,selectors:[["","appParallax",""]],hostBindings:function(t,n){t&1&&Bl("scroll",function(){return n.onWindowScroll()},Fl)},inputs:{parallaxRatio:"parallaxRatio"}})};var Km=["heroTitle"],jm=["heroSubtitle"],Qm=["ctaButton"];function e0(i,e){if(i&1&&Ae(0,"app-social-link",57),i&2){let t=e.$implicit;Ze("href",t.href)("icon",t.icon)("label",t.label)("color",t.color)}}var Za=class i{constructor(e){this.platformId=e}heroTitle;heroSubtitle;ctaButton;stats=[{value:"2+",label:`Years of
Experience`,color:"blue"},{value:"15+",label:`Projects
Completed`,color:"purple"},{value:"10+",label:`Technologies
Learned`,color:"cyan"}];socialLinks=[{href:"https://github.com/prabanjan127",icon:"fab fa-github",label:"GitHub",color:"blue"},{href:"https://linkedin.com/in/prabanjan-s/",icon:"fab fa-linkedin",label:"LinkedIn",color:"cyan"},{href:"mailto:prabanjansakthibabu@gmail.com",icon:"fas fa-envelope",label:"Email",color:"purple"}];ngAfterViewInit(){jt(this.platformId)&&this.initAnimations()}async initAnimations(){let{gsap:e}=await import("./chunk-QGSZVICM.js"),{TextPlugin:t}=await import("./chunk-I2CIXI4V.js");e.registerPlugin(t),e.timeline({defaults:{ease:"power3.out"}}).from(this.heroTitle.nativeElement,{y:50,opacity:0,duration:1,delay:.5}).to(this.heroSubtitle.nativeElement,{duration:2,text:"Frontend Engineering: Where Art Meets Code",delimiter:""},"-=0.5").from(this.ctaButton.nativeElement,{y:20,opacity:0,duration:.8},"-=1")}trackBySocialLink(e,t){return t.href}trackByStat(e,t){return t.label}static \u0275fac=function(t){return new(t||i)(Ot(mn))};static \u0275cmp=dt({type:i,selectors:[["app-hero"]],viewQuery:function(t,n){if(t&1&&Li(Km,5)(jm,5)(Qm,5),t&2){let r;Vn(r=Gn())&&(n.heroTitle=r.first),Vn(r=Gn())&&(n.heroSubtitle=r.first),Vn(r=Gn())&&(n.ctaButton=r.first)}},decls:73,vars:5,consts:[["heroTitle",""],["heroSubtitle",""],["ctaButton",""],[1,"relative","w-full","min-h-screen","flex","items-center","justify-center","overflow-hidden","py-20","px-4"],["appParallax","",1,"absolute","inset-0","z-0",3,"parallaxRatio"],["appParallax","",1,"absolute","inset-0","z-[1]","opacity-30",3,"parallaxRatio"],[1,"absolute","top-1/4","left-1/4","w-2","h-2","bg-blue-400","rounded-full","animate-ping"],[1,"absolute","top-1/2","right-1/3","w-1","h-1","bg-cyan-400","rounded-full","animate-pulse",2,"animation-delay","1s"],[1,"absolute","bottom-1/3","left-1/2","w-3","h-3","bg-purple-400","rounded-full","animate-bounce",2,"animation-delay","0.5s"],[1,"absolute","top-2/3","right-1/4","w-2","h-2","bg-pink-400","rounded-full","animate-ping",2,"animation-delay","1.5s"],["appParallax","",1,"absolute","inset-0","z-[1]","bg-gradient-to-br","from-blue-600/10","via-transparent","to-purple-600/10","animate-gradient",2,"background-size","400% 400%",3,"parallaxRatio"],[1,"relative","z-10","w-full","max-w-7xl","mx-auto"],[1,"flex","flex-col","lg:flex-row","items-center","justify-between","gap-8","lg:gap-12"],[1,"flex-1","text-center","lg:text-left","w-full","pt-10","lg:pt-20","relative"],[1,"text-4xl","sm:text-5xl","md:text-6xl","lg:text-7xl","xl:text-8xl","font-bold","leading-tight","mb-4","tracking-tight"],[1,"block","text-white","mb-2"],[1,"block","text-transparent","bg-clip-text","bg-gradient-to-r","from-blue-400","via-cyan-300","to-purple-400","animate-gradient","glow-text"],[1,"h-10","mb-6","flex","justify-center","lg:justify-start","items-center"],[1,"text-blue-400/60","font-mono-custom","text-sm","mr-2"],[1,"text-base","md:text-lg","lg:text-xl","font-mono-custom","text-gray-300"],[1,"w-[2px]","h-6","bg-blue-400","ml-1","animate-blink","shadow-[0_0_10px_rgba(59,130,246,0.8)]"],[1,"flex","flex-wrap","justify-center","lg:justify-start","gap-2","mb-6"],["label","Angular","icon","fas fa-code","color","blue"],["label","Node.js","icon","fab fa-node","color","cyan"],["label","Security","icon","fas fa-shield-alt","color","purple"],["label","Flutter","icon","fas fa-mobile-alt","color","pink"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-center","lg:justify-start","items-center","mb-8"],["href","#projects",1,"group","relative","px-8","py-3","bg-gradient-to-r","from-blue-500","to-blue-600","text-white","font-bold","text-sm","tracking-wide","hover:from-blue-600","hover:to-blue-700","transition-all","duration-300","rounded-xl","overflow-hidden","shadow-lg","shadow-blue-500/50","hover:shadow-blue-500/70","hover:scale-105","w-full","sm:w-auto","text-center"],[1,"relative","z-10","flex","items-center","justify-center","gap-2"],[1,"fas","fa-rocket"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","group-hover:translate-x-1","transition-transform"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17 8l4 4m0 0l-4 4m4-4H3"],["href","mailto:prabanjansakthibabu@gmail.com",1,"group","px-8","py-3","border-2","border-blue-400/40","hover:border-blue-400","text-white","font-mono-custom","text-sm","hover:bg-blue-500/10","rounded-xl","transition-all","duration-300","hover:scale-105","backdrop-blur-sm","w-full","sm:w-auto","text-center"],[1,"far","fa-envelope","mr-2"],[1,"grid","grid-cols-3","gap-2","sm:gap-4","lg:gap-6","mt-6","sm:mt-8","pt-6","sm:pt-8","border-t","border-blue-500/20"],["value","2+","colorStart","blue","colorEnd","cyan","alignment","text-center"],["value","15+","colorStart","purple","colorEnd","pink","alignment","text-center"],["value","10+","colorStart","cyan","colorEnd","emerald","alignment","text-center"],[1,"flex","justify-center","lg:justify-start","gap-4","mt-6"],[3,"href","icon","label","color",4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex-shrink-0","animate-float","mt-8","lg:mt-0","relative"],[1,"relative","group"],[1,"absolute","-inset-1","rounded-full","bg-gradient-to-r","from-blue-500","via-cyan-400","to-purple-500","animate-spin-slow","opacity-75","blur-sm","group-hover:blur-md","transition-all",2,"animation-duration","8s"],[1,"absolute","-inset-2","rounded-full","bg-gradient-to-r","from-purple-500","via-pink-400","to-blue-500","animate-spin-slow","opacity-50","blur-md",2,"animation-duration","12s","animation-direction","reverse"],[1,"relative","w-48","h-48","sm:w-56","sm:h-56","md:w-64","md:h-64","lg:w-72","lg:h-72","rounded-full","overflow-hidden","border-4","border-blue-400/30","shadow-[0_0_50px_rgba(59,130,246,0.5)]","group-hover:shadow-[0_0_80px_rgba(59,130,246,0.8)]","transition-all","duration-500"],["src","assets/images/profile.jpg","alt","Prabanjanakthibabu",1,"w-full","h-full","object-cover","transform","group-hover:scale-110","transition-transform","duration-500"],[1,"absolute","inset-0","bg-gradient-to-t","from-blue-900/50","via-transparent","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-500"],[1,"absolute","-top-2","-left-2","w-5","h-5","border-t-2","border-l-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-top-2","-right-2","w-5","h-5","border-t-2","border-r-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-bottom-2","-left-2","w-5","h-5","border-b-2","border-l-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-bottom-2","-right-2","w-5","h-5","border-b-2","border-r-2","border-cyan-400","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"absolute","-bottom-16","right-0","md:-bottom-20","md:right-10","z-20","block","animate-fade-in-up","scale-75","md:scale-100",2,"animation-delay","1s"],["text","CYBER ENTHUSIAST \u2022 DEVELOPER \u2022 "],[1,"absolute","bottom-8","left-1/2","transform","-translate-x-1/2","flex","flex-col","items-center","gap-2","opacity-70","hover:opacity-100","transition-all"],[1,"text-[10px]","font-mono-custom","uppercase","tracking-widest","text-blue-400","animate-pulse"],[1,"w-[2px]","h-16","bg-gradient-to-b","from-blue-400","via-cyan-400","to-transparent","animate-pulse"],[1,"fas","fa-chevron-down","text-blue-400","animate-bounce","text-sm"],[3,"href","icon","label","color"]],template:function(t,n){t&1&&(K(0,"section",3),Ae(1,"app-three-scene",4),K(2,"div",5),Ae(3,"div",6)(4,"div",7)(5,"div",8)(6,"div",9),Q(),Ae(7,"div",10),K(8,"div",11)(9,"div",12)(10,"div",13)(11,"h1",14,0)(13,"span",15),le(14,"Hi! I'm"),Q(),K(15,"span",16),le(16,"Prabanjan"),Q()(),K(17,"div",17)(18,"span",18),le(19,">"),Q(),Ae(20,"p",19,1)(22,"span",20),Q(),K(23,"div",21),Ae(24,"app-tech-badge",22)(25,"app-tech-badge",23)(26,"app-tech-badge",24)(27,"app-tech-badge",25),Q(),K(28,"div",26,2)(30,"a",27)(31,"span",28),Ae(32,"i",29),K(33,"span"),le(34,"View Projects"),Q(),sn(),K(35,"svg",30),Ae(36,"path",31),Q()()(),Tn(),K(37,"a",32),Ae(38,"i",33),le(39,"Contact_Me "),Q()(),K(40,"div",34)(41,"app-stat-card",35),le(42," Years of"),Ae(43,"br"),le(44,"Experience "),Q(),K(45,"app-stat-card",36),le(46," Projects"),Ae(47,"br"),le(48,"Completed "),Q(),K(49,"app-stat-card",37),le(50," Technologies"),Ae(51,"br"),le(52,"Learned "),Q()(),K(53,"div",38),St(54,e0,1,4,"app-social-link",39),Q()(),K(55,"div",40)(56,"div",41),Ae(57,"div",42)(58,"div",43),K(59,"div",44),Ae(60,"img",45)(61,"div",46),Q(),Ae(62,"div",47)(63,"div",48)(64,"div",49)(65,"div",50),Q(),K(66,"div",51),Ae(67,"app-circular-badge",52),Q()()()(),K(68,"div",53)(69,"span",54),le(70,"Explore"),Q(),Ae(71,"div",55)(72,"i",56),Q()()),t&2&&(Me(),Ze("parallaxRatio",.1),Me(),Ze("parallaxRatio",.2),Me(5),Ze("parallaxRatio",.15),Me(47),Ze("ngForOf",n.socialLinks)("ngForTrackBy",n.trackBySocialLink))},dependencies:[_t,Hn,Ha,Wa,Xa,qa,Ya,sr],encapsulation:2,changeDetection:0})};var t0=["*"],Ja=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-glass-card"]],ngContentSelectors:t0,decls:2,vars:0,consts:[[1,"glass-panel","p-4","sm:p-6","md:p-8","h-full"]],template:function(t,n){t&1&&(Ii(),an(0,"div",0),Di(1),kn())},dependencies:[_t],encapsulation:2})};var n0=(i,e)=>({"md:text-right md:order-1":i,"md:order-3 md:text-left":e}),i0=(i,e)=>({"md:order-3":i,"md:order-1":e});function r0(i,e){if(i&1&&(K(0,"div",11,0)(2,"div",12)(3,"span",13),le(4),Q()(),K(5,"div",14),Ae(6,"div",15),Q(),K(7,"div",16)(8,"app-glass-card")(9,"span",17),le(10),Q(),K(11,"h3",18),le(12),Q(),K(13,"p",19),le(14),Q(),K(15,"p",20),le(16),Q()()()()),i&2){let t=e.$implicit,n=e.index;Me(2),Ze("ngClass",so(7,n0,n%2===0,n%2!==0)),Me(2),Bt(t.period),Me(3),Ze("ngClass",so(10,i0,n%2===0,n%2!==0)),Me(3),Bt(t.period),Me(2),Bt(t.role),Me(2),Bt(t.company),Me(2),Bt(t.description)}}function s0(i,e){if(i&1&&(K(0,"div",21),Ae(1,"div",22),K(2,"div",23)(3,"span",24),le(4),Q()(),K(5,"app-glass-card",25)(6,"h3",26),le(7),Q(),K(8,"p",27),Ae(9,"i",28),le(10),Q(),K(11,"p",29),le(12),Q()()()),i&2){let t=e.$implicit;Me(4),wt(" ",t.period," "),Me(3),Bt(t.role),Me(3),wt(" ",t.company," "),Me(2),Bt(t.description)}}var $a=class i{experiences=[{role:"Trainee Programmer",company:"Kumaran Systems",period:"Oct 2024 - Present",description:"Full-time role in Chennai. Specializing in Angular and Angular Material development."},{role:"Intern",company:"Kumaran Systems",period:"Mar 2024 - Sep 2024",description:"6-month internship focusing on ASP.NET and Shell Scripting."},{role:"Website Developer",company:"HackOverSecurity",period:"Nov 2022",description:"Transitioned to a freelance role delivering front-end solutions and CSS enhancements."},{role:"Frontend Developer Intern",company:"HackOverSecurity",period:"Oct 2022 - Nov 2022",description:"Completed a one-month internship working on client projects for a security firm."},{role:"Freelance Web Developer",company:"Self-Employed",period:"Oct 2022 - Nov 2022",description:"Remote contract work delivering Javascript-based frontend applications."}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-timeline"]],decls:14,vars:2,consts:[["timelineItem",""],[1,"py-16","sm:py-24","md:py-32","relative","overflow-hidden"],[1,"absolute","top-0","right-0","w-1/3","h-full","bg-gradient-to-l","from-primary/5","to-transparent","pointer-events-none"],[1,"container-custom"],[1,"text-3xl","sm:text-4xl","md:text-5xl","font-bold","mb-12","md:mb-20","text-center"],[1,"text-neon"],[1,"hidden","md:block","relative","max-w-5xl","mx-auto"],[1,"absolute","left-6","md:left-1/2","transform","md:-translate-x-1/2","h-full","w-[1px]","bg-gradient-to-b","from-transparent","via-primary/30","to-transparent"],["class","mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-center w-full group reveal-child pl-14 md:pl-0",4,"ngFor","ngForOf"],[1,"block","md:hidden","max-w-lg","mx-auto","px-4","space-y-8"],["class","relative pl-6 border-l border-primary/20",4,"ngFor","ngForOf"],[1,"mb-12","md:mb-24","flex","flex-col","md:flex-row","justify-between","items-start","md:items-center","w-full","group","reveal-child","pl-14","md:pl-0"],[1,"w-full","md:w-5/12","mb-4","md:mb-0",3,"ngClass"],[1,"hidden","md:block","text-neon","font-mono-custom","text-lg","md:text-xl"],[1,"z-10","order-first","md:order-2","flex","items-center","justify-center","w-3","h-3","md:w-4","md:h-4","bg-black","border","border-primary","rounded-full","group-hover:bg-primary","group-hover:shadow-[0_0_20px_var(--primary)]","transition-all","duration-300","absolute","left-4","md:relative","md:left-auto","mb-0"],[1,"absolute","w-full","h-full","rounded-full","bg-primary","opacity-0","group-hover:animate-ping"],[1,"w-full","md:w-5/12","relative",3,"ngClass"],[1,"md:hidden","text-neon","font-mono-custom","text-xs","mb-2","block"],[1,"text-xl","sm:text-2xl","font-bold","text-white","mb-1"],[1,"text-primary/80","font-mono-custom","text-xs","sm:text-sm","mb-3","md:mb-4"],[1,"text-gray-400","text-sm","md:text-base","leading-relaxed"],[1,"relative","pl-6","border-l","border-primary/20"],[1,"absolute","-left-[5px]","top-0","w-2.5","h-2.5","rounded-full","bg-primary","shadow-[0_0_10px_var(--primary)]"],[1,"mb-2"],[1,"inline-block","px-3","py-1","rounded-full","bg-primary/10","border","border-primary/20","text-primary","text-xs","font-mono-custom","mb-2"],[1,"block","transform","transition-transform","duration-300","active:scale-98"],[1,"text-xl","font-bold","text-white","mb-1"],[1,"text-primary/80","font-mono-custom","text-sm","mb-3","flex","items-center","gap-2"],[1,"fas","fa-building","text-xs"],[1,"text-gray-400","text-sm","leading-relaxed"]],template:function(t,n){t&1&&(K(0,"section",1),Ae(1,"div",2),K(2,"div",3)(3,"h2",4)(4,"span",5),le(5,"<"),Q(),le(6,"Experience"),K(7,"span",5),le(8,"/>"),Q()(),K(9,"div",6),Ae(10,"div",7),St(11,r0,17,13,"div",8),Q(),K(12,"div",9),St(13,s0,13,4,"div",10),Q()()()),t&2&&(Me(11),Ze("ngForOf",n.experiences),Me(2),Ze("ngForOf",n.experiences))},dependencies:[_t,Jr,Hn,Ja],styles:[".reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:opacity .8s ease-out,transform .8s ease-out}.in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view   [_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}app-glass-card[_ngcontent-%COMP%]{display:block;transition:transform .3s ease}app-glass-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}","[_nghost-%COMP%]{display:block;position:relative;background:var(--section-gradient-1);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}"]})};var Ka=class{static formatNumber(e,t=2){return e.toString().padStart(t,"0")}};function a0(i,e){if(i&1&&(K(0,"span",36),le(1),Q()),i&2){let t=e.$implicit;Me(),wt(" ",t," ")}}function o0(i,e){if(i&1&&(K(0,"div",37)(1,"span",38),Ae(2,"i",39),le(3),Q()()),i&2){let t=An().$implicit;Me(3),wt("",t.metrics," ")}}function l0(i,e){if(i&1&&(K(0,"a",40),Ae(1,"i",41),K(2,"span"),le(3,"Demo"),Q()()),i&2){let t=An().$implicit;Ze("href",t.demo,Pi)}}function c0(i,e){if(i&1&&(K(0,"div",14)(1,"div",15)(2,"div",16)(3,"span",17),le(4),Q()()(),K(5,"div",18),Ae(6,"img",19)(7,"div",20),Q(),K(8,"div",21)(9,"div",22),St(10,a0,2,1,"span",23),Q(),St(11,o0,4,1,"div",24),Ae(12,"div",25),K(13,"div",26)(14,"h3",27),le(15),Q(),K(16,"p",28),le(17),Q(),K(18,"div",29)(19,"a",30),Ae(20,"i",31),K(21,"span"),le(22,"Code"),Q(),Ae(23,"i",32),Q(),St(24,l0,4,1,"a",33),Q()()(),Ae(25,"div",34)(26,"div",35),Q()),i&2){let t=e.$implicit,n=e.index,r=An();Me(4),wt("_",r.formatNumber(n+1)),Me(2),Ze("src",t.image,Pi)("alt",t.title+" screenshot"),Me(4),Ze("ngForOf",t.tags.slice(0,3)),Me(),Ze("ngIf",t.metrics),Me(4),wt(" ",t.title," "),Me(2),wt(" ",t.description," "),Me(2),Ze("href",t.link,Pi),Me(5),Ze("ngIf",t.demo)}}var ja=class i{projects=[{title:"Bus Ticket Booking System",description:"A comprehensive Java-based system for managing bus routes, bookings, and passenger reservations. Features include real-time seat availability, payment processing, and route management.",tags:["Java","MySQL","JDBC","Swing"],link:"https://github.com/prabanjan127/bus_ticket_booking_system",image:"assets/images/projects/bus-booking.jpg",metrics:"Complete CRUD operations, 5+ database tables",technologies:["Java","MySQL","JDBC","Swing UI"]},{title:"In-Out Calculator",description:"A Flutter mobile application designed for efficient time tracking and in/out operation calculations. Features a clean, intuitive interface with data persistence and analytics.",tags:["Flutter","Dart","SQLite","Mobile"],link:"https://github.com/prabanjan127/in_out_calculator",image:"assets/images/projects/calculator-app.jpg",metrics:"Cross-platform mobile app with offline support",technologies:["Flutter","Dart","SQLite","Provider"]},{title:"To-Do App",description:"A modern task management web application built with React, featuring drag-and-drop functionality, category organization, and local storage persistence for seamless task tracking.",tags:["React","JavaScript","CSS3","LocalStorage"],link:"https://github.com/prabanjan127/to-do-app",demo:"https://prabanjan127.github.io/to-do-app",image:"assets/images/projects/todo-app.jpg",metrics:"Responsive design, real-time updates",technologies:["React","JavaScript","CSS3","HTML5"]},{title:"Web Development Projects Collection",description:"A comprehensive collection of full-stack web applications demonstrating proficiency in PHP, MySQL, and Firebase. Includes e-commerce demos, authentication systems, and database-driven applications.",tags:["Full Stack","PHP","Firebase","MySQL"],link:"https://github.com/prabanjan127/web_development_projects",image:"assets/images/projects/web-projects.jpg",metrics:"10+ projects, RESTful APIs, Firebase integration",technologies:["PHP","MySQL","Firebase","JavaScript","HTML/CSS"]},{title:"Python Automation Suite",description:"A repository of Python scripts for automation, data analysis, and algorithm practice. Includes web scraping tools, data visualization scripts, and various algorithmic solutions.",tags:["Python","Algorithms","Automation","Data Science"],link:"https://github.com/prabanjan127/python_codes",image:"assets/images/projects/python-suite.jpg",metrics:"50+ scripts, automation workflows",technologies:["Python","Pandas","NumPy","Matplotlib","BeautifulSoup"]},{title:"Car Fun Interactive Experience",description:"An interactive web-based automotive visualization project featuring animated car models, dynamic interactions, and creative web technologies.",tags:["Web","Creative","Animation","JavaScript"],link:"https://github.com/prabanjan127/car_fun",image:"assets/images/projects/car-fun.jpg",metrics:"Interactive animations, responsive design",technologies:["JavaScript","CSS3","HTML5","Canvas API"]}];formatNumber(e){return Ka.formatNumber(e)}trackByProject(e,t){return t.link}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-project-list"]],decls:23,vars:4,consts:[["id","projects",1,"py-16","sm:py-24","md:py-32","relative"],["appParallax","",1,"absolute","top-20","right-10","w-64","h-64","bg-primary/5","rounded-full","blur-3xl","hidden","sm:block",3,"parallaxRatio"],["appParallax","",1,"absolute","bottom-20","left-10","w-96","h-96","bg-secondary/5","rounded-full","blur-3xl","hidden","sm:block",3,"parallaxRatio"],[1,"container-custom","relative","z-10"],[1,"text-center","mb-10","md:mb-16"],[1,"text-3xl","sm:text-4xl","md:text-5xl","lg:text-6xl","font-bold","mb-4","md:mb-6"],[1,"text-neon","font-mono-custom"],[1,"text-neon"],[1,"text-gray-400","text-base","md:text-lg","font-mono-custom"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4","sm:gap-6","md:gap-8"],["class","group relative rounded-2xl overflow-hidden glass-panel reveal-child flex flex-col",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-center","mt-16"],["href","https://github.com/prabanjan127?tab=repositories","target","_blank",1,"inline-flex","items-center","gap-3","px-8","py-4","border-2","border-white/20","hover:border-primary","text-white","hover:text-primary","font-mono-custom","text-sm","rounded-lg","transition-all","duration-300","hover-lift","group"],[1,"fab","fa-github","text-xl","group-hover:rotate-12","transition-transform"],[1,"group","relative","rounded-2xl","overflow-hidden","glass-panel","reveal-child","flex","flex-col"],[1,"absolute","top-4","left-4","z-30"],[1,"px-3","py-1.5","bg-black/70","backdrop-blur-sm","border","border-white/10","rounded-lg"],[1,"text-primary","font-mono-custom","font-bold","text-xs"],[1,"absolute","inset-0","overflow-hidden"],["loading","lazy",1,"w-full","h-full","object-cover","opacity-40","group-hover:opacity-60","group-hover:scale-110","transition-all","duration-700",3,"src","alt"],[1,"absolute","inset-0","bg-gradient-to-t","from-black","via-black/80","to-black/40"],[1,"relative","pb-5","sm:pb-6","px-4","sm:px-6","pt-10","sm:pt-12","flex","flex-col","h-full","z-20"],[1,"flex","flex-wrap","gap-1.5","sm:gap-2","mb-3","mt-3"],["class","text-[10px] sm:text-xs font-mono-custom uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 border border-white/20 rounded-full bg-black/60 backdrop-blur-sm text-gray-300 hover:border-primary/50 hover:text-primary transition-all",4,"ngFor","ngForOf"],["class","mb-3 sm:mb-4",4,"ngIf"],[1,"flex-grow","min-h-[80px]","sm:min-h-[120px]"],[1,"space-y-2","sm:space-y-3"],[1,"text-xl","sm:text-2xl","md:text-3xl","font-bold","text-white","group-hover:text-primary","transition-colors","leading-tight"],[1,"text-gray-400","text-sm","leading-relaxed","line-clamp-3","group-hover:text-gray-300","transition-colors"],[1,"flex","items-center","gap-3","pt-2"],["target","_blank",1,"flex","items-center","gap-2","px-4","py-2","bg-white/5","hover:bg-white/10","border","border-white/10","hover:border-primary/50","rounded-lg","text-white","text-xs","font-mono-custom","transition-all","group/btn",3,"href"],[1,"fab","fa-github"],[1,"fas","fa-arrow-right","text-[10px]","transform","group-hover/btn:translate-x-1","transition-transform"],["target","_blank","class","flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/60 rounded-lg text-primary text-xs font-mono-custom transition-all group/btn",3,"href",4,"ngIf"],[1,"absolute","inset-0","border-2","border-transparent","group-hover:border-primary/40","rounded-2xl","transition-all","duration-500","pointer-events-none"],[1,"absolute","top-0","right-0","w-32","h-32","bg-primary/5","blur-3xl","group-hover:bg-primary/10","transition-all","duration-700"],[1,"text-[10px]","sm:text-xs","font-mono-custom","uppercase","tracking-wider","px-2","sm:px-2.5","py-0.5","sm:py-1","border","border-white/20","rounded-full","bg-black/60","backdrop-blur-sm","text-gray-300","hover:border-primary/50","hover:text-primary","transition-all"],[1,"mb-3","sm:mb-4"],[1,"text-[10px]","sm:text-xs","font-mono-custom","px-2","sm:px-2.5","py-0.5","sm:py-1","bg-emerald-500/10","border","border-emerald-400/30","rounded-full","text-emerald-400","inline-flex","items-center"],[1,"fas","fa-check-circle","mr-1"],["target","_blank",1,"flex","items-center","gap-2","px-4","py-2","bg-primary/10","hover:bg-primary/20","border","border-primary/30","hover:border-primary/60","rounded-lg","text-primary","text-xs","font-mono-custom","transition-all","group/btn",3,"href"],[1,"fas","fa-external-link-alt"]],template:function(t,n){t&1&&(K(0,"section",0),Ae(1,"div",1)(2,"div",2),K(3,"div",3)(4,"div",4)(5,"h2",5)(6,"span",6),le(7,"<"),Q(),le(8,"Featured"),K(9,"span",7),le(10,"_"),Q(),le(11,"Projects"),K(12,"span",6),le(13,"/>"),Q()(),K(14,"p",8),le(15,"Building the future, one commit at a time"),Q()(),K(16,"div",9),St(17,c0,27,9,"div",10),Q(),K(18,"div",11)(19,"a",12)(20,"span"),le(21,"View All on GitHub"),Q(),Ae(22,"i",13),Q()()()()),t&2&&(Me(),Ze("parallaxRatio",.08),Me(),Ze("parallaxRatio",.12),Me(15),Ze("ngForOf",n.projects)("ngForTrackBy",n.trackByProject))},dependencies:[_t,Hn,$r,sr],styles:[".reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:opacity .7s ease-out,transform .7s cubic-bezier(.2,.8,.2,1)}.in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view   [_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%], .in-view[_nghost-%COMP%]   .reveal-child[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}","[_nghost-%COMP%]{display:block;position:relative;background:var(--section-gradient-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);padding-bottom:4rem;border-top:1px solid rgba(255,255,255,.05)}"],changeDetection:0})};var h0=["galaxyCanvas"],u0=()=>[1,2,3,4,5,6,7,8],d0=()=>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],f0=()=>[1,2,3];function p0(i,e){i&1&&Ae(0,"span",60)}function m0(i,e){if(i&1&&(K(0,"div",51)(1,"div",52),Ae(2,"div",53),K(3,"div",54),sn(),K(4,"svg",55),Ae(5,"path",56),Q()(),Tn(),K(6,"div",57)(7,"span"),le(8),Q()(),K(9,"div",58),St(10,p0,1,0,"span",59),Q()()()),i&2){let t=e.$implicit,n=e.index,r=An();Ze("ngStyle",r.getOrbitStyle(t)),Gt("data-index",n)("data-tech",t.name),Me(4),Gt("viewBox","0 0 24 24"),Me(),Gt("d",t.svg),Me(3),Bt(t.name),Me(2),Ze("ngForOf",Zr(7,f0))}}function g0(i,e){if(i&1&&(sn(),Ae(0,"line",61)),i&2){let t=e.$implicit,n=An();Gt("x1",400+n.Math.cos(t*.785)*150)("y1",400+n.Math.sin(t*.785)*150)("x2",400+n.Math.cos(t*.785)*280)("y2",400+n.Math.sin(t*.785)*280)}}function x0(i,e){if(i&1&&Ae(0,"div",62),i&2){let t=e.$implicit;zl("--particle-delay",t*.3+"s")("--particle-duration",10+t%5+"s")}}function _0(i,e){if(i&1&&(K(0,"div",63)(1,"div",64),le(2,"const item ="),Q(),K(3,"div",65),le(4),Q(),Ae(5,"div",66),K(6,"div",67)(7,"div",68)(8,"span",69),le(9),Q(),K(10,"div",70),sn(),K(11,"svg",71),Ae(12,"path",56),Q()(),Tn(),K(13,"span",69),le(14),Q()(),K(15,"div",72)(16,"span",73),le(17,"name:"),Q(),le(18),K(19,"span",74),le(20,"_"),Q()()(),Ae(21,"div",75)(22,"div",76),Q()),i&2){let t=e.$implicit,n=e.index;Me(4),wt(" [",n,"]"),Me(5),Bt("{"),Me(2),Gt("viewBox","0 0 24 24"),Me(),Gt("d",t.svg),Me(2),Bt("}"),Me(4),wt("'",t.name,"'")}}var Qa=class i{constructor(e){this.platformId=e;this.isBrowser=jt(e)}canvasRef;isBrowser;mouseX=0;mouseY=0;Math=Math;animationFrame;techStack=[{name:"Angular",svg:"M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 16.95c-3.61-.9-6.45-4.53-6.95-8.95h13.9c-.5 4.42-3.34 8.05-6.95 8.95zM12 4.5l6 2.67v.83H6v-.83L12 4.5z",color:"#DD0031",gradient:"linear-gradient(135deg, #DD0031, #C3002F)",orbitRadius:140,orbitDuration:25,delay:0,size:70},{name:"TypeScript",svg:"M3 3h18v18H3V3zm16.5 13.5c-.3.9-1.2 1.5-2.1 1.5-1.2 0-1.95-.6-2.25-1.35l-1.65.9c.6 1.35 1.95 2.25 3.9 2.25 2.25 0 3.75-1.2 3.75-3 0-1.65-.9-2.55-2.7-3.3l-.45-.15c-.9-.3-1.2-.6-1.2-1.05 0-.45.3-.75.9-.75.6 0 .9.3 1.2.75l1.5-.9c-.6-1.05-1.5-1.5-2.7-1.5-1.8 0-2.85 1.05-2.85 2.4 0 1.5.9 2.4 2.55 3.15l.45.15c.9.3 1.35.6 1.35 1.2 0 .6-.6 1.05-1.35 1.05z",color:"#3178C6",gradient:"linear-gradient(135deg, #3178C6, #235A97)",orbitRadius:140,orbitDuration:25,delay:6,size:65},{name:"JavaScript",svg:"M3 3h18v18H3V3zm16.5 13.5c0 1.95-1.05 3-3 3-1.8 0-2.85-1.05-3.45-2.25l1.65-.9c.3.6.75 1.05 1.8 1.05.75 0 1.2-.45 1.2-1.05v-5.4h2.1v5.55h-.3zM9 16.5c-1.8 0-2.85-1.05-3.45-2.25l1.65-.9c.3.6.75 1.05 1.8 1.05.75 0 1.2-.3 1.2-.75 0-.6-.45-.9-1.35-1.35l-.45-.15c-1.35-.6-2.25-1.2-2.25-2.7 0-1.35 1.05-2.4 2.7-2.4 1.2 0 2.1.45 2.7 1.5l-1.5.9c-.3-.6-.6-.9-1.2-.9-.6 0-.9.3-.9.75 0 .6.3.75 1.2 1.2l.45.15c1.5.6 2.4 1.35 2.4 2.85 0 1.65-1.35 2.85-3 2.85z",color:"#F7DF1E",gradient:"linear-gradient(135deg, #F7DF1E, #E8C500)",orbitRadius:140,orbitDuration:25,delay:12,size:65},{name:"React",svg:"M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51",color:"#61DAFB",gradient:"linear-gradient(135deg, #61DAFB, #21A1C4)",orbitRadius:140,orbitDuration:25,delay:18,size:60},{name:"HTML5",svg:"M12 17.56l-5.33-1.48-.38-4.3h2.62l.19 2.1 2.9.79.01-.01 2.91-.79.31-3.42H7.5l-.25-2.73h7.59l.21-2.42H4.95l.74 8.13L12 17.56m9.45-14.5L20.3 21.94 12 24l-8.3-2.06L2.55 3.06h18.9",color:"#E34F26",gradient:"linear-gradient(135deg, #E34F26, #F16529)",orbitRadius:220,orbitDuration:35,delay:0,size:52},{name:"CSS3",svg:"M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z",color:"#1572B6",gradient:"linear-gradient(135deg, #1572B6, #33A9DC)",orbitRadius:220,orbitDuration:35,delay:7,size:52},{name:"Bootstrap",svg:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.172 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-4.118 2.34c0-2.052-1.668-3.386-4.22-3.386H7.3v8.512h4.362c2.641 0 4.22-1.334 4.22-3.503 0-1.235-.63-2.255-1.661-2.748.801-.493 1.336-1.334 1.336-2.255z",color:"#7952B3",gradient:"linear-gradient(135deg, #7952B3, #563D7C)",orbitRadius:220,orbitDuration:35,delay:14,size:50},{name:"Git",svg:"M21.62 11.108l-8.731-8.729c-.494-.494-1.296-.494-1.79 0l-1.807 1.807 2.298 2.298c.528-.177 1.135-.064 1.554.355.422.423.533 1.034.354 1.565l2.214 2.214c.531-.18 1.143-.068 1.565.354.59.59.59 1.546 0 2.136-.59.59-1.544.59-2.135 0-.445-.444-.555-1.07-.332-1.604l-2.066-2.063v5.427c.141.07.275.156.398.279.59.59.59 1.544 0 2.135s-1.544.59-2.135 0-.59-1.544 0-2.135c.146-.146.319-.259.501-.346v-5.49c-.182-.087-.355-.2-.501-.346-.447-.447-.555-1.07-.329-1.605L8.43 6.627 2.38 12.68c-.494.494-.494 1.296 0 1.79l8.732 8.729c.494.494 1.296.494 1.79 0l8.698-8.698c.494-.494.494-1.296.02-1.393",color:"#F05032",gradient:"linear-gradient(135deg, #F05032, #DD4C35)",orbitRadius:220,orbitDuration:35,delay:21,size:50},{name:"GitHub",svg:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z",color:"#181717",gradient:"linear-gradient(135deg, #181717, #4A4A4A)",orbitRadius:220,orbitDuration:35,delay:28,size:50},{name:"Python",svg:"M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 3 7.647 3l-.006 2.347h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.863zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.863h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.574 0 4.289 0 4.289 0l.006-2.347h-4.363v-.617h6.084s2.927.332 2.927-4.282-2.555-4.45-2.555-4.45zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z",color:"#3776AB",gradient:"linear-gradient(135deg, #3776AB, #FFD43B)",orbitRadius:300,orbitDuration:45,delay:0,size:55},{name:"Java",svg:"M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639",color:"#007396",gradient:"linear-gradient(135deg, #007396, #EA2D2E)",orbitRadius:300,orbitDuration:45,delay:9,size:55},{name:"Node.js",svg:"M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58a.26.26 0 0 1-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10.6 20.3c-.07-.03-.14-.03-.2-.01-.63.35-1.85.42-2.6.15l-2.13-1.23c-.69-.39-1.12-1.12-1.12-1.91V8.72c0-.79.43-1.52 1.12-1.91l7.44-4.3c.67-.39 1.57-.39 2.24 0l7.44 4.3c.69.39 1.12 1.12 1.12 1.91v8.58c0 .79-.43 1.52-1.12 1.91l-7.44 4.3c-.34.19-.74.29-1.12.29",color:"#339933",gradient:"linear-gradient(135deg, #339933, #68A063)",orbitRadius:300,orbitDuration:45,delay:18,size:52},{name:"MySQL",svg:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.105.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z",color:"#00758F",gradient:"linear-gradient(135deg, #00758F, #F29111)",orbitRadius:300,orbitDuration:45,delay:27,size:52},{name:"Flutter",svg:"M14.314 12.658l-3.106 3.106-6.36-6.36L13.214 1h7.678l-9.536 9.536 2.958 2.122m.014 1.412l4.238 4.238-4.238 4.238H7.95l4.238-4.238-4.238-4.238z",color:"#02569B",gradient:"linear-gradient(135deg, #02569B, #13B9FD)",orbitRadius:300,orbitDuration:45,delay:36,size:52},{name:"Kali Linux",svg:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",color:"#557C94",gradient:"linear-gradient(135deg, #557C94, #2C3E50)",orbitRadius:380,orbitDuration:55,delay:0,size:48},{name:"VS Code",svg:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",color:"#007ACC",gradient:"linear-gradient(135deg, #007ACC, #005A9E)",orbitRadius:380,orbitDuration:55,delay:13,size:48},{name:"ASP.NET",svg:"M12 2.5l10 5.77v11.46L12 25.5 2 19.73V8.27L12 2.5zm0 2.31L4.62 9.23v9.54L12 23.19l7.38-4.42V9.23L12 4.81z",color:"#512BD4",gradient:"linear-gradient(135deg, #512BD4, #8344D7)",orbitRadius:380,orbitDuration:55,delay:26,size:48},{name:"C#",svg:"M12 2l10 5.77v11.46L12 25l-10-5.77V7.77L12 2m0 2.31l-7.5 4.32v8.64L12 21.59l7.5-4.32V8.63L12 4.31z",color:"#239120",gradient:"linear-gradient(135deg, #239120, #68217A)",orbitRadius:380,orbitDuration:55,delay:39,size:48},{name:"Go",svg:"M20,19V7H4V19H20M20,3A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5C2,3.89 2.9,3 4,3H20M13,17V15H18V17H13M9.58,13L5.57,9L6.96,7.61L12.37,13.03L6.96,18.41L5.57,17L9.58,13Z",color:"#00ADD8",gradient:"linear-gradient(135deg, #00ADD8, #007D9C)",orbitRadius:380,orbitDuration:55,delay:52,size:50}];ngOnInit(){this.isBrowser&&document.addEventListener("mousemove",this.handleMouseMove.bind(this))}ngOnDestroy(){this.isBrowser&&(document.removeEventListener("mousemove",this.handleMouseMove.bind(this)),this.animationFrame&&cancelAnimationFrame(this.animationFrame))}handleMouseMove(e){this.mouseX=e.clientX,this.mouseY=e.clientY}getOrbitStyle(e){return{"--orbit-radius":`${e.orbitRadius}px`,"--orbit-duration":`${e.orbitDuration}s`,"--orbit-delay":`-${e.delay}s`,"--tech-color":e.color,"--tech-gradient":e.gradient,"--icon-size":`${e.size}px`}}static \u0275fac=function(t){return new(t||i)(Ot(mn))};static \u0275cmp=dt({type:i,selectors:[["app-tech-showcase"]],viewQuery:function(t,n){if(t&1&&Li(h0,5),t&2){let r;Vn(r=Gn())&&(n.canvasRef=r.first)}},decls:80,vars:6,consts:[["galaxyCanvas",""],[1,"tech-showcase-section"],[1,"container-custom"],[1,"text-center","mb-12","md:mb-20","reveal-fade","px-4"],[1,"text-3xl","sm:text-4xl","md:text-5xl","lg:text-6xl","font-bold","mb-4","md:mb-6","bg-gradient-to-r","from-primary","via-accent","to-secondary","bg-clip-text","text-transparent"],[1,"text-neon"],[1,"text-gray-300","text-base","sm:text-lg","md:text-xl","max-w-3xl","mx-auto","font-light","px-2"],[1,"tech-galaxy-wrapper"],[1,"hidden","md:block","tech-orbit-container"],[1,"central-core"],[1,"core-rings"],[1,"core-ring","ring-1"],[1,"core-ring","ring-2"],[1,"core-ring","ring-3"],[1,"core-content"],[1,"core-icon"],["viewBox","0 0 24 24",1,"icon-svg"],["fill","currentColor","d","M12 2L2 7V17L12 22L22 17V7L12 2M12 4.03L19.5 8.26V15.74L12 19.97L4.5 15.74V8.26L12 4.03M12 6C9.79 6 8 7.79 8 10S9.79 14 12 14 16 12.21 16 10 14.21 6 12 6M12 8C13.1 8 14 8.9 14 10S13.1 12 12 12 10 11.1 10 10 10.9 8 12 8Z"],[1,"core-text"],[1,"core-title"],[1,"core-subtitle"],[1,"core-glow"],["viewBox","0 0 800 800",1,"orbit-svg"],["id","orbitGradient1","x1","0%","y1","0%","x2","100%","y2","100%"],["offset","0%",2,"stop-color","rgba(59,130,246,0.4)","stop-opacity","1"],["offset","50%",2,"stop-color","rgba(139,92,246,0.2)","stop-opacity","1"],["offset","100%",2,"stop-color","rgba(236,72,153,0.4)","stop-opacity","1"],["id","glow"],["stdDeviation","4","result","coloredBlur"],["in","coloredBlur"],["in","SourceGraphic"],["cx","400","cy","400","r","140","fill","none","stroke","url(#orbitGradient1)","stroke-width","1","opacity","0.3",1,"orbit-path","orbit-1"],["cx","400","cy","400","r","220","fill","none","stroke","url(#orbitGradient1)","stroke-width","1","opacity","0.3","stroke-dasharray","5,5",1,"orbit-path","orbit-2"],["cx","400","cy","400","r","300","fill","none","stroke","url(#orbitGradient1)","stroke-width","1","opacity","0.3","stroke-dasharray","10,5",1,"orbit-path","orbit-3"],["class","orbit-item",3,"ngStyle",4,"ngFor","ngForOf"],["viewBox","0 0 800 800",1,"constellation-svg"],["class","constellation-line","stroke","rgba(139,92,246,0.1)","stroke-width","1",4,"ngFor","ngForOf"],[1,"cosmic-particles"],["class","cosmic-particle",3,"--particle-delay","--particle-duration",4,"ngFor","ngForOf"],[1,"block","md:hidden","relative","z-10","px-2"],[1,"grid","grid-cols-2","gap-4"],["class","constellation-card group relative p-4 rounded-xl border border-white/10 bg-[#0a0e27]/80 backdrop-blur-md overflow-hidden hover:bg-white/5 transition-all duration-300",4,"ngFor","ngForOf"],[1,"absolute","-z-10","w-full","h-full","inset-0","overflow-hidden","pointer-events-none","opacity-20"],[1,"absolute","top-10","left-0","text-xs","font-mono-custom","text-primary","animate-float"],[1,"absolute","top-1/2","right-0","text-xs","font-mono-custom","text-accent","animate-float",2,"animation-delay","2s"],[1,"absolute","bottom-20","left-10","text-xs","font-mono-custom","text-secondary","animate-float",2,"animation-delay","1.5s"],[1,"tech-stats-grid","reveal-slide"],[1,"stat-card"],[1,"stat-icon"],[1,"stat-number"],[1,"stat-text"],[1,"orbit-item",3,"ngStyle"],[1,"tech-bubble"],[1,"bubble-glow"],[1,"bubble-content"],[1,"tech-icon-svg"],["fill","currentColor"],[1,"bubble-label"],[1,"bubble-particles"],["class","particle",4,"ngFor","ngForOf"],[1,"particle"],["stroke","rgba(139,92,246,0.1)","stroke-width","1",1,"constellation-line"],[1,"cosmic-particle"],[1,"constellation-card","group","relative","p-4","rounded-xl","border","border-white/10","bg-[#0a0e27]/80","backdrop-blur-md","overflow-hidden","hover:bg-white/5","transition-all","duration-300"],[1,"absolute","top-2","left-3","text-[10px]","font-mono-custom","text-purple-400","opacity-70"],[1,"absolute","top-2","right-3","text-[10px]","font-mono-custom","text-blue-400","opacity-70"],[1,"absolute","inset-0","bg-gradient-to-br","from-primary/10","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-500"],[1,"relative","z-10","flex","flex-col","items-center","justify-center","gap-2","mt-4"],[1,"flex","items-center","gap-2"],[1,"text-blue-500","font-mono-custom","text-lg","opacity-80","group-hover:text-neon","transition-colors"],[1,"w-10","h-10","rounded-lg","bg-white/5","flex","items-center","justify-center","border","border-white/10","group-hover:border-primary/50","group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]","transition-all","duration-300"],[1,"w-5","h-5","text-gray-300","group-hover:text-primary","transition-colors","duration-300"],[1,"text-sm","font-medium","text-gray-300","group-hover:text-white","transition-colors","font-mono-custom"],[1,"text-green-400","mr-1"],[1,"animate-blink","text-neon"],[1,"absolute","bottom-0","left-0","w-2","h-2","border-b","border-l","border-white/20","group-hover:border-primary/50","transition-colors"],[1,"absolute","bottom-0","right-0","w-2","h-2","border-b","border-r","border-white/20","group-hover:border-primary/50","transition-colors"]],template:function(t,n){t&1&&(K(0,"section",1)(1,"div",2)(2,"div",3)(3,"h2",4)(4,"span",5),le(5,"<"),Q(),le(6,"Skills & Technologies"),K(7,"span",5),le(8,"/>"),Q()(),K(9,"p",6),le(10," Mastering the full spectrum of modern development - from frontend frameworks to backend systems, databases to mobile platforms "),Q()(),K(11,"div",7)(12,"div",8,0)(14,"div",9)(15,"div",10),Ae(16,"div",11)(17,"div",12)(18,"div",13),Q(),K(19,"div",14)(20,"div",15),sn(),K(21,"svg",16),Ae(22,"path",17),Q()(),Tn(),K(23,"div",18)(24,"div",19),le(25,"Full Stack"),Q(),K(26,"div",20),le(27,"Developer"),Q()()(),Ae(28,"div",21),Q(),sn(),K(29,"svg",22)(30,"defs")(31,"linearGradient",23),Ae(32,"stop",24)(33,"stop",25)(34,"stop",26),Q(),K(35,"filter",27),Ae(36,"feGaussianBlur",28),K(37,"feMerge"),Ae(38,"feMergeNode",29)(39,"feMergeNode",30),Q()()(),Ae(40,"circle",31)(41,"circle",32)(42,"circle",33),Q(),St(43,m0,11,8,"div",34),K(44,"svg",35),St(45,g0,1,4,"line",36),Q(),Tn(),K(46,"div",37),St(47,x0,1,4,"div",38),Q()(),K(48,"div",39)(49,"div",40),St(50,_0,23,6,"div",41),Q(),K(51,"div",42)(52,"div",43),le(53,' printf("Hello")'),Q(),K(54,"div",44),le(55,"</>"),Q(),K(56,"div",45),le(57,"if(true)"),Q()()()(),K(58,"div",46)(59,"div",47)(60,"div",48),le(61,"\u26A1"),Q(),K(62,"div",49),le(63,"11+"),Q(),K(64,"div",50),le(65,"Technologies"),Q()(),K(66,"div",47)(67,"div",48),le(68,"\u{1F680}"),Q(),K(69,"div",49),le(70,"\u221E"),Q(),K(71,"div",50),le(72,"Possibilities"),Q()(),K(73,"div",47)(74,"div",48),le(75,"\u{1F4A1}"),Q(),K(76,"div",49),le(77,"100%"),Q(),K(78,"div",50),le(79,"Passion"),Q()()()()()),t&2&&(Me(43),Ze("ngForOf",n.techStack),Me(2),Ze("ngForOf",Zr(4,u0)),Me(2),Ze("ngForOf",Zr(5,d0)),Me(3),Ze("ngForOf",n.techStack))},dependencies:[_t,Hn,kl],styles:['.tech-showcase-section[_ngcontent-%COMP%]{position:relative;padding:10rem 0;overflow:hidden;background:linear-gradient(180deg,transparent 0%,rgba(5,8,22,.6) 30%,rgba(5,8,22,.8) 70%,transparent 100%)}.reveal-fade[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp 1s ease-out}.reveal-slide[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideUp 1s ease-out .3s backwards}.tech-galaxy-wrapper[_ngcontent-%COMP%]{position:relative;max-width:900px;margin:0 auto;padding:4rem 0;overflow:visible}.tech-orbit-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:800px;height:800px;margin:0 auto;perspective:1200px;overflow:visible}.central-core[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:20;animation:_ngcontent-%COMP%_coreFloat 8s ease-in-out infinite}.core-rings[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.core-ring[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;border:2px solid;animation:_ngcontent-%COMP%_ringPulse 4s ease-in-out infinite}.ring-1[_ngcontent-%COMP%]{width:200px;height:200px;border-color:#3b82f666;animation-delay:0s}.ring-2[_ngcontent-%COMP%]{width:240px;height:240px;border-color:#8b5cf64d;animation-delay:1.3s}.ring-3[_ngcontent-%COMP%]{width:280px;height:280px;border-color:#ec489933;animation-delay:2.6s}.core-content[_ngcontent-%COMP%]{position:relative;width:200px;height:200px;background:radial-gradient(circle at 30% 30%,#3b82f640,#050816f2);border:3px solid rgba(59,130,246,.5);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 0 40px #3b82f666,inset 0 0 40px #3b82f61a}.core-icon[_ngcontent-%COMP%]{width:60px;height:60px;margin-bottom:.5rem;color:var(--primary);filter:drop-shadow(0 0 15px rgba(59,130,246,.8));animation:_ngcontent-%COMP%_iconRotate 30s linear infinite}.icon-svg[_ngcontent-%COMP%]{width:100%;height:100%}.core-text[_ngcontent-%COMP%]{text-align:center}.core-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--primary);text-shadow:0 0 20px rgba(59,130,246,.8);margin-bottom:.25rem}.core-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:#ffffffb3;font-weight:300}.core-glow[_ngcontent-%COMP%]{position:absolute;width:300px;height:300px;left:50%;top:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(59,130,246,.3),transparent 60%);animation:_ngcontent-%COMP%_glowExpand 6s ease-in-out infinite;pointer-events:none}.orbit-svg[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;height:100%;pointer-events:none;z-index:1}.orbit-path[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotateOrbit 60s linear infinite;filter:drop-shadow(0 0 4px rgba(139,92,246,.4))}.orbit-1[_ngcontent-%COMP%]{animation-duration:40s}.orbit-2[_ngcontent-%COMP%]{animation-duration:60s;animation-direction:reverse}.orbit-3[_ngcontent-%COMP%]{animation-duration:80s}.orbit-4[_ngcontent-%COMP%]{animation-duration:100s;animation-direction:reverse}.orbit-item[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;margin-left:calc(var(--icon-size) / -2);margin-top:calc(var(--icon-size) / -2);animation:_ngcontent-%COMP%_orbit var(--orbit-duration) linear infinite;animation-delay:var(--orbit-delay);transform-origin:0 0;z-index:10;transition:z-index .3s}.orbit-item[_ngcontent-%COMP%]:hover{z-index:30;animation-play-state:paused}.tech-bubble[_ngcontent-%COMP%]{position:relative;width:var(--icon-size);height:var(--icon-size);cursor:pointer;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}.tech-bubble[_ngcontent-%COMP%]:hover{transform:scale(1.4) translateZ(50px)}.bubble-glow[_ngcontent-%COMP%]{position:absolute;inset:-20%;background:radial-gradient(circle,var(--tech-color),transparent 70%);border-radius:50%;opacity:0;transition:opacity .5s ease;animation:_ngcontent-%COMP%_subtleGlow 3s ease-in-out infinite;filter:blur(15px)}.tech-bubble[_ngcontent-%COMP%]:hover   .bubble-glow[_ngcontent-%COMP%]{opacity:.6;animation:_ngcontent-%COMP%_intensePulse 1.5s ease-in-out infinite}.bubble-content[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--tech-gradient);border:2px solid var(--tech-color);border-radius:50%;display:flex;align-items:center;justify-content:center;padding:20%;box-shadow:0 8px 32px #0006,inset 0 0 20px #ffffff1a,0 0 0 2px #ffffff0d;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:all .5s cubic-bezier(.34,1.56,.64,1);overflow:hidden}.bubble-content[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,.1),transparent);transform:rotate(45deg);animation:_ngcontent-%COMP%_shimmer 3s linear infinite}.tech-bubble[_ngcontent-%COMP%]:hover   .bubble-content[_ngcontent-%COMP%]{border-width:3px;box-shadow:0 16px 48px var(--tech-color),inset 0 0 30px #fff3,0 0 0 3px var(--tech-color);transform:rotateY(360deg)}.tech-icon-svg[_ngcontent-%COMP%]{width:100%;height:100%;color:#fff;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));transition:all .5s ease}.tech-bubble[_ngcontent-%COMP%]:hover   .tech-icon-svg[_ngcontent-%COMP%]{filter:drop-shadow(0 0 20px var(--tech-color));transform:scale(1.1)}.bubble-label[_ngcontent-%COMP%]{position:absolute;bottom:-35px;left:50%;transform:translate(-50%);white-space:nowrap;padding:.4rem .8rem;background:#000000e6;border:1px solid var(--tech-color);border-radius:6px;font-size:.75rem;font-weight:600;color:#fff;opacity:0;pointer-events:none;transition:all .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 4px 12px #00000080}.tech-bubble[_ngcontent-%COMP%]:hover   .bubble-label[_ngcontent-%COMP%]{opacity:1;bottom:-40px}.bubble-particles[_ngcontent-%COMP%]{position:absolute;inset:0;opacity:0;transition:opacity .5s}.tech-bubble[_ngcontent-%COMP%]:hover   .bubble-particles[_ngcontent-%COMP%]{opacity:1}.particle[_ngcontent-%COMP%]{position:absolute;width:4px;height:4px;background:var(--tech-color);border-radius:50%;animation:_ngcontent-%COMP%_particleBurst 1s ease-out infinite}.particle[_ngcontent-%COMP%]:nth-child(1){top:50%;left:50%;animation-delay:0s}.particle[_ngcontent-%COMP%]:nth-child(2){top:50%;left:50%;animation-delay:.3s}.particle[_ngcontent-%COMP%]:nth-child(3){top:50%;left:50%;animation-delay:.6s}.constellation-svg[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;height:100%;pointer-events:none;z-index:0;opacity:.3}.constellation-line[_ngcontent-%COMP%]{stroke-dasharray:5,10;animation:_ngcontent-%COMP%_dashFlow 4s linear infinite}.cosmic-particles[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;overflow:hidden}.cosmic-particle[_ngcontent-%COMP%]{position:absolute;width:3px;height:3px;background:var(--primary);border-radius:50%;box-shadow:0 0 6px var(--primary);animation:_ngcontent-%COMP%_cosmicFloat var(--particle-duration) linear infinite;animation-delay:var(--particle-delay);opacity:0}.cosmic-particle[_ngcontent-%COMP%]:nth-child(odd){left:calc(10% + (var(--particle-delay, 0) * 5));top:10%}.cosmic-particle[_ngcontent-%COMP%]:nth-child(2n){left:calc(80% - (var(--particle-delay, 0) * 3));top:80%}.tech-stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;max-width:800px;margin:6rem auto 0;padding:0 2rem}.stat-card[_ngcontent-%COMP%]{position:relative;padding:2rem;background:#ffffff05;border:1px solid rgba(139,92,246,.2);border-radius:1rem;text-align:center;transition:all .4s cubic-bezier(.34,1.56,.64,1);overflow:hidden}.stat-card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#3b82f61a,#8b5cf61a);opacity:0;transition:opacity .4s}.stat-card[_ngcontent-%COMP%]:hover{border-color:#8b5cf699;transform:translateY(-10px);box-shadow:0 20px 40px #8b5cf64d}.stat-card[_ngcontent-%COMP%]:hover:before{opacity:1}.stat-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem;filter:grayscale(.3);transition:all .4s}.stat-card[_ngcontent-%COMP%]:hover   .stat-icon[_ngcontent-%COMP%]{transform:scale(1.2) rotateY(360deg);filter:grayscale(0)}.stat-number[_ngcontent-%COMP%]{font-size:3rem;font-weight:800;background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.5rem;transition:all .4s}.stat-card[_ngcontent-%COMP%]:hover   .stat-number[_ngcontent-%COMP%]{transform:scale(1.1)}.stat-text[_ngcontent-%COMP%]{color:#fff9;font-size:.875rem;text-transform:uppercase;letter-spacing:2px;font-weight:500}@keyframes _ngcontent-%COMP%_orbit{0%{transform:rotate(0) translate(var(--orbit-radius)) rotate(0)}to{transform:rotate(360deg) translate(var(--orbit-radius)) rotate(-360deg)}}@keyframes _ngcontent-%COMP%_coreFloat{0%,to{transform:translate(-50%,-50%) translateY(0)}50%{transform:translate(-50%,-50%) translateY(-20px)}}@keyframes _ngcontent-%COMP%_ringPulse{0%,to{transform:translate(-50%,-50%) scale(1);opacity:1}50%{transform:translate(-50%,-50%) scale(1.1);opacity:.5}}@keyframes _ngcontent-%COMP%_iconRotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_glowExpand{0%,to{transform:translate(-50%,-50%) scale(1);opacity:.3}50%{transform:translate(-50%,-50%) scale(1.2);opacity:.6}}@keyframes _ngcontent-%COMP%_rotateOrbit{to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes _ngcontent-%COMP%_subtleGlow{0%,to{opacity:0}50%{opacity:.3}}@keyframes _ngcontent-%COMP%_intensePulse{0%,to{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:.9}}@keyframes _ngcontent-%COMP%_shimmer{to{transform:rotate(45deg) translateY(200%)}}@keyframes _ngcontent-%COMP%_particleBurst{0%{transform:translate(0) scale(0);opacity:1}to{transform:translate(calc(var(--random-x, 30px)),calc(var(--random-y, -30px))) scale(1);opacity:0}}@keyframes _ngcontent-%COMP%_dashFlow{to{stroke-dashoffset:100}}@keyframes _ngcontent-%COMP%_cosmicFloat{0%{transform:translateY(0) translate(0);opacity:0}10%,90%{opacity:.5}to{transform:translateY(-800px) translate(100px);opacity:0}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}.constellation-card[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.05);background:#0a0e2799;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.constellation-card[_ngcontent-%COMP%]:active{transform:scale(.98)}@media(max-width:1024px){.tech-showcase-section[_ngcontent-%COMP%]{padding:8rem 0}.tech-orbit-container[_ngcontent-%COMP%]{height:700px;max-width:700px}.orbit-item[_ngcontent-%COMP%]{--icon-size: calc(var(--icon-size) * .9) !important}}@media(max-width:768px){.tech-showcase-section[_ngcontent-%COMP%]{padding:5rem 0}.tech-galaxy-wrapper[_ngcontent-%COMP%]{padding:2rem 0}.tech-orbit-container[_ngcontent-%COMP%]{height:500px;max-width:500px}.central-core[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.7)}.core-content[_ngcontent-%COMP%]{width:140px;height:140px}.core-rings[_ngcontent-%COMP%]   .ring-1[_ngcontent-%COMP%]{width:160px;height:160px}.core-rings[_ngcontent-%COMP%]   .ring-2[_ngcontent-%COMP%]{width:190px;height:190px}.core-rings[_ngcontent-%COMP%]   .ring-3[_ngcontent-%COMP%]{width:220px;height:220px}.core-glow[_ngcontent-%COMP%]{width:200px;height:200px}.orbit-item[_ngcontent-%COMP%]{--orbit-radius: calc(var(--orbit-radius) * .6) !important;--icon-size: calc(var(--icon-size) * .65) !important}.tech-stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem;margin-top:3rem;padding:0 1rem}.stat-card[_ngcontent-%COMP%]{padding:1.5rem}.stat-number[_ngcontent-%COMP%]{font-size:2.5rem}}@media(max-width:480px){.tech-showcase-section[_ngcontent-%COMP%]{padding:4rem 0;overflow:hidden}.tech-galaxy-wrapper[_ngcontent-%COMP%]{padding:1rem 0;overflow:visible;margin-top:1rem}.tech-orbit-container[_ngcontent-%COMP%]{height:400px;max-width:100%;width:100%;overflow:visible}.central-core[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.6)}.core-content[_ngcontent-%COMP%]{width:110px;height:110px}.core-icon[_ngcontent-%COMP%]{width:36px;height:36px}.core-title[_ngcontent-%COMP%]{font-size:.9rem}.core-subtitle[_ngcontent-%COMP%]{font-size:.65rem}.core-rings[_ngcontent-%COMP%]   .ring-1[_ngcontent-%COMP%]{width:130px;height:130px}.core-rings[_ngcontent-%COMP%]   .ring-2[_ngcontent-%COMP%]{width:155px;height:155px}.core-rings[_ngcontent-%COMP%]   .ring-3[_ngcontent-%COMP%]{width:180px;height:180px}.core-glow[_ngcontent-%COMP%]{width:150px;height:150px}.orbit-item[_ngcontent-%COMP%]{--orbit-radius: calc(var(--orbit-radius) * .42) !important;--icon-size: calc(var(--icon-size) * .5) !important}.bubble-label[_ngcontent-%COMP%]{font-size:.6rem;padding:.25rem .4rem;bottom:-24px;display:none}.tech-bubble[_ngcontent-%COMP%]:hover   .bubble-label[_ngcontent-%COMP%]{bottom:-28px}.stat-card[_ngcontent-%COMP%]{padding:1.25rem}.stat-number[_ngcontent-%COMP%]{font-size:2rem}.stat-text[_ngcontent-%COMP%]{font-size:.75rem}}@media(max-width:450px){.tech-orbit-container[_ngcontent-%COMP%]{height:380px;max-width:100%;width:100%}.central-core[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.55)}.core-content[_ngcontent-%COMP%]{width:95px;height:95px}.orbit-item[_ngcontent-%COMP%]{--orbit-radius: calc(var(--orbit-radius) * .35) !important;--icon-size: calc(var(--icon-size) * .45) !important}.bubble-label[_ngcontent-%COMP%]{display:none!important}}@media(max-width:375px){.tech-showcase-section[_ngcontent-%COMP%]{padding:3rem 0}.tech-orbit-container[_ngcontent-%COMP%]{height:350px;max-width:100%;width:100%}.central-core[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.5)}.core-content[_ngcontent-%COMP%]{width:90px;height:90px}.core-icon[_ngcontent-%COMP%]{width:28px;height:28px}.core-title[_ngcontent-%COMP%]{font-size:.8rem}.core-subtitle[_ngcontent-%COMP%]{font-size:.6rem}.orbit-item[_ngcontent-%COMP%]{--orbit-radius: calc(var(--orbit-radius) * .3) !important;--icon-size: calc(var(--icon-size) * .4) !important}.bubble-label[_ngcontent-%COMP%]{display:none!important}.tech-stats-grid[_ngcontent-%COMP%]{margin-top:1rem}.stat-number[_ngcontent-%COMP%]{font-size:1.75rem}}@media(max-width:320px){.tech-orbit-container[_ngcontent-%COMP%]{height:300px;max-width:100%;width:100%}.central-core[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.4)}.orbit-item[_ngcontent-%COMP%]{--orbit-radius: calc(var(--orbit-radius) * .25) !important;--icon-size: calc(var(--icon-size) * .35) !important}.bubble-label[_ngcontent-%COMP%]{display:none!important}}']})};var eo=class i{constructor(e,t){this.el=e;this.platformId=t}staggerDelay=100;threshold=.1;ngOnInit(){jt(this.platformId)&&this.el.nativeElement.classList.add("reveal-container")}ngAfterViewInit(){jt(this.platformId)&&this.setupObserver()}setupObserver(){let e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(this.el.nativeElement.classList.add("in-view"),this.el.nativeElement.querySelectorAll(".reveal-child").forEach((s,a)=>{s.style.animationDelay||(s.style.animationDelay=`${a*this.staggerDelay}ms`)}),e.unobserve(this.el.nativeElement))})},{threshold:this.threshold,rootMargin:"0px 0px -50px 0px"});e.observe(this.el.nativeElement)}static \u0275fac=function(t){return new(t||i)(Ot(qr),Ot(mn))};static \u0275dir=Yr({type:i,selectors:[["","appScrollReveal",""]],inputs:{staggerDelay:"staggerDelay",threshold:"threshold"}})};var gh=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=dt({type:i,selectors:[["app-home"]],decls:4,vars:0,consts:[["id","experience","appScrollReveal",""],["id","skills","appScrollReveal",""],["id","projects","appScrollReveal",""]],template:function(t,n){t&1&&Ae(0,"app-hero")(1,"app-timeline",0)(2,"app-tech-showcase",1)(3,"app-project-list",2)},dependencies:[_t,Za,$a,Qa,ja,eo],styles:["section[_ngcontent-%COMP%]{position:relative}"]})};export{gh as HomeComponent};
