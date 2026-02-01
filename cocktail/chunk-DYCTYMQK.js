import{A as Co,B as Eo,C as Hn,F as Ro,I as Io,J as To,M as Vn,N as Do,Q as Mo,R as wt,T as qn,U as st,W as Qt,X as W,Y as O,Z as Ao,a as ao,b as Ve,d as lo,e as co,f as uo,g as yt,h as fo,i as le,j as mo,l as $n,m as vo,n as Gt,o as yo,p as wo,t as So,y as zn}from"./chunk-QOZVNCKA.js";import{a as go,b as bo}from"./chunk-YLKXIVY6.js";import{a as ae,b as io,c as so,e as ho,f as po}from"./chunk-F43BPZOQ.js";import{$ as An,$a as Fe,A as bt,Aa as Wr,B as Tn,Ba as Nn,Bb as jn,C as xr,Ca as H,D as ut,Da as rt,Db as to,E as Ne,Ea as ot,F as Y,Fa as zt,Fb as eo,G as E,Ga as P,H as Nr,Ha as Tt,Hb as K,I as m,Ia as Gr,J as et,Ja as Qr,Jb as Fn,K as Pr,L as S,La as Yr,Lb as no,M as w,Ma as Zr,Mb as D,N as h,Na as V,Nb as ro,O as kr,P as Or,Pb as oo,Q as mt,R as $,Ta as I,U as Pe,Ua as Pn,V as Dn,Va as kn,W as z,Wa as Dt,X as Mn,Xa as On,Y as Lr,Ya as Ln,Z as nt,Za as Un,_ as jt,_a as je,a as p,aa as ke,ab as Kr,b as k,ba as dt,cb as Xr,d as C,da as Oe,db as $e,e as Tr,ea as vt,eb as Z,f as Dr,fa as Le,fb as Ht,g as Mr,ga as R,gb as Vt,h as It,ha as Ur,hb as Bn,i as j,ia as Ue,j as F,ja as Br,jb as qt,k as tt,ka as _n,kb as Wt,l as v,la as jr,m as _e,ma as Ft,mb as Jr,n as En,na as xn,o as Ar,oa as Be,ob as q,p as M,pb as ze,q as Rn,qa as Fr,qb as He,r as gt,ra as N,s as _r,sa as se,t as xe,ta as $r,ua as zr,v as Lt,w as Ut,wa as Hr,x as In,xa as Vr,y as Bt,ya as $t,yb as it,z as ie,za as qr}from"./chunk-PMWCN7JN.js";var ce=class{_doc;constructor(r){this._doc=r}manager},qe=(()=>{class e extends ce{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o,i){return t.addEventListener(n,o,i),()=>this.removeEventListener(t,n,o,i)}removeEventListener(t,n,o,i){return t.removeEventListener(n,o,i)}static \u0275fac=function(n){return new(n||e)(w(z))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Qe=new S(""),Yn=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(s=>{s.manager=this});let o=t.filter(s=>!(s instanceof qe));this._plugins=o.slice().reverse();let i=t.find(s=>s instanceof qe);i&&this._plugins.push(i)}addEventListener(t,n,o,i){return this._findPluginFor(n).addEventListener(t,n,o,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new E(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(w(Qe),w(jt))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Wn="ng-app-id";function _o(e){for(let r of e)r.remove()}function xo(e,r){let t=r.createElement("style");return t.textContent=e,t}function is(e,r,t,n){let o=e.head?.querySelectorAll(`style[${Wn}="${r}"],link[${Wn}="${r}"]`);if(o)for(let i of o)i.removeAttribute(Wn),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function Qn(e,r){let t=r.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Zn=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,is(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let o of t)this.addUsage(o,this.inline,xo);n?.forEach(o=>this.addUsage(o,this.external,Qn))}removeStyles(t,n){for(let o of t)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,n,o){let i=n.get(t);i?i.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(t,this.doc)))})}removeUsage(t,n){let o=n.get(t);o&&(o.usage--,o.usage<=0&&(_o(o.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])_o(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(t,xo(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(t,Qn(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(w(z),w(_n),w(xn,8),w(Ft))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Gn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Kn=/%COMP%/g;var Po="%COMP%",ss=`_nghost-${Po}`,as=`_ngcontent-${Po}`,ls=!0,cs=new S("",{factory:()=>ls});function us(e){return as.replace(Kn,e)}function ds(e){return ss.replace(Kn,e)}function ko(e,r){return r.map(t=>t.replace(Kn,e))}var Xn=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,n,o,i,s,a,l=null,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ue(t,s,a,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,n);return o instanceof Ge?o.applyToHost(t):o instanceof de&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(n.encapsulation){case Be.Emulated:i=new Ge(l,c,n,this.appId,u,s,a,d);break;case Be.ShadowDom:return new We(l,t,n,s,a,this.nonce,d,c);case Be.ExperimentalIsolatedShadowDom:return new We(l,t,n,s,a,this.nonce,d);default:i=new de(l,c,n,u,s,a,d);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||e)(w(Yn),w(Zn),w(_n),w(cs),w(z),w(jt),w(xn),w(zr,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),ue=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,n,o){this.eventManager=r,this.doc=t,this.ngZone=n,this.tracingService=o}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(Gn[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(No(r)?r.content:r).appendChild(t)}insertBefore(r,t,n){r&&(No(r)?r.content:r).insertBefore(t,n)}removeChild(r,t){t.remove()}selectRootElement(r,t){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new E(-5104,!1);return t||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,n,o){if(o){t=o+":"+t;let i=Gn[o];i?r.setAttributeNS(i,t,n):r.setAttribute(t,n)}else r.setAttribute(t,n)}removeAttribute(r,t,n){if(n){let o=Gn[n];o?r.removeAttributeNS(o,t):r.removeAttribute(`${n}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,n,o){o&(se.DashCase|se.Important)?r.style.setProperty(t,n,o&se.Important?"important":""):r.style[t]=n}removeStyle(r,t,n){n&se.DashCase?r.style.removeProperty(t):r.style[t]=""}setProperty(r,t,n){r!=null&&(r[t]=n)}setValue(r,t){r.nodeValue=t}listen(r,t,n,o){if(typeof r=="string"&&(r=ae().getGlobalEventTarget(this.doc,r),!r))throw new E(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,t,i)),this.eventManager.addEventListener(r,t,i,o)}decoratePreventDefault(r){return t=>{if(t==="__ngUnwrap__")return r;r(t)===!1&&t.preventDefault()}}};function No(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var We=class extends ue{hostEl;sharedStylesHost;shadowRoot;constructor(r,t,n,o,i,s,a,l){super(r,o,i,a),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=n.styles;c=ko(n.id,c);for(let d of c){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=d,this.shadowRoot.appendChild(g)}let u=n.getExternalStyles?.();if(u)for(let d of u){let g=Qn(d,o);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,n){return super.insertBefore(this.nodeOrShadowRoot(r),t,n)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},de=class extends ue{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,n,o,i,s,a,l){super(r,i,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let c=n.styles;this.styles=l?ko(l,c):c,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&$r.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ge=class extends de{contentAttr;hostAttr;constructor(r,t,n,o,i,s,a,l){let c=o+"-"+n.id;super(r,t,n,i,s,a,l,c),this.contentAttr=us(c),this.hostAttr=ds(c)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,t){let n=super.createElement(r,t);return super.setAttribute(n,this.contentAttr,""),n}};var Ye=class e extends so{supportsDOMEvents=!0;static makeCurrent(){io(new e)}onAndCancel(r,t,n,o){return r.addEventListener(t,n,o),()=>{r.removeEventListener(t,n,o)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t==="window"?window:t==="document"?r:t==="body"?r.body:null}getBaseHref(r){let t=hs();return t==null?null:ps(t)}resetBaseElement(){he=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return ho(document.cookie,r)}},he=null;function hs(){return he=he||document.head.querySelector("base"),he?he.getAttribute("href"):null}function ps(e){return new URL(e,document.baseURI).pathname}var fs=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Oo=["alt","control","meta","shift"],gs={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bs={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Lo=(()=>{class e extends ce{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o,i){let s=e.parseEventName(n),a=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ae().onAndCancel(t,s.domEventName,a,i))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Oo.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(t,n){let o=gs[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Oo.forEach(s=>{if(s!==o){let a=bs[s];a(t)&&(i+=s+".")}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(w(z))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function ms(e,r,t){return C(this,null,function*(){let n=p({rootComponent:e},vs(r,t));return no(n)})}function vs(e,r){return{platformRef:r?.platformRef,appProviders:[...Es,...e?.providers??[]],platformProviders:Cs}}function ys(){Ye.makeCurrent()}function ws(){return new An}function Ss(){return Br(document),document}var Cs=[{provide:Ft,useValue:fo},{provide:jr,useValue:ys,multi:!0},{provide:z,useFactory:Ss}];var Es=[{provide:Or,useValue:"root"},{provide:An,useFactory:ws},{provide:Qe,useClass:qe,multi:!0},{provide:Qe,useClass:Lo,multi:!0},Xn,Zn,Yn,{provide:Hr,useExisting:Xn},{provide:po,useClass:fs},[]];var Uo=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(w(z))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var f="primary",Re=Symbol("RouteTitle"),rr=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t[0]:t}return null}getAll(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function _t(e){return new rr(e)}function Jn(e,r,t){for(let n=0;n<e.length;n++){let o=e[n],i=r[n];if(o[0]===":")t[o.substring(1)]=i;else if(o!==i.path)return!1}return!0}function Go(e,r,t){let n=t.path.split("/"),o=n.indexOf("**");if(o===-1){if(n.length>e.length||t.pathMatch==="full"&&(r.hasChildren()||n.length<e.length))return null;let l={},c=e.slice(0,n.length);return Jn(n,c,l)?{consumed:c,posParams:l}:null}if(o!==n.lastIndexOf("**"))return null;let i=n.slice(0,o),s=n.slice(o+1);if(i.length+s.length>e.length||t.pathMatch==="full"&&r.hasChildren()&&t.path!=="**")return null;let a={};return!Jn(i,e.slice(0,i.length),a)||!Jn(s,e.slice(e.length-s.length),a)?null:{consumed:e,posParams:a}}function en(e){return new Promise((r,t)=>{e.pipe(bt()).subscribe({next:n=>r(n),error:n=>t(n)})})}function Ds(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;++t)if(!at(e[t],r[t]))return!1;return!0}function at(e,r){let t=e?or(e):void 0,n=r?or(r):void 0;if(!t||!n||t.length!=n.length)return!1;let o;for(let i=0;i<t.length;i++)if(o=t[i],!Qo(e[o],r[o]))return!1;return!0}function or(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Qo(e,r){if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return!1;let t=[...e].sort(),n=[...r].sort();return t.every((o,i)=>n[i]===o)}else return e===r}function Ms(e){return e.length>0?e[e.length-1]:null}function Pt(e){return En(e)?e:Qr(e)?tt(Promise.resolve(e)):v(e)}function Yo(e){return En(e)?en(e):Promise.resolve(e)}var As={exact:Ko,subset:Xo},Zo={exact:_s,subset:xs,ignored:()=>!0};function Bo(e,r,t){return As[t.paths](e.root,r.root,t.matrixParams)&&Zo[t.queryParams](e.queryParams,r.queryParams)&&!(t.fragment==="exact"&&e.fragment!==r.fragment)}function _s(e,r){return at(e,r)}function Ko(e,r,t){if(!Mt(e.segments,r.segments)||!Xe(e.segments,r.segments,t)||e.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!e.children[n]||!Ko(e.children[n],r.children[n],t))return!1;return!0}function xs(e,r){return Object.keys(r).length<=Object.keys(e).length&&Object.keys(r).every(t=>Qo(e[t],r[t]))}function Xo(e,r,t){return Jo(e,r,r.segments,t)}function Jo(e,r,t,n){if(e.segments.length>t.length){let o=e.segments.slice(0,t.length);return!(!Mt(o,t)||r.hasChildren()||!Xe(o,t,n))}else if(e.segments.length===t.length){if(!Mt(e.segments,t)||!Xe(e.segments,t,n))return!1;for(let o in r.children)if(!e.children[o]||!Xo(e.children[o],r.children[o],n))return!1;return!0}else{let o=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!Mt(e.segments,o)||!Xe(e.segments,o,n)||!e.children[f]?!1:Jo(e.children[f],r,i,n)}}function Xe(e,r,t){return r.every((n,o)=>Zo[t](e[o].parameters,n.parameters))}var J=class{root;queryParams;fragment;_queryParamMap;constructor(r=new y([],{}),t={},n=null){this.root=r,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=_t(this.queryParams),this._queryParamMap}toString(){return ks.serialize(this)}},y=class{segments;children;parent=null;constructor(r,t){this.segments=r,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Je(this)}},St=class{path;parameters;_parameterMap;constructor(r,t){this.path=r,this.parameters=t}get parameterMap(){return this._parameterMap??=_t(this.parameters),this._parameterMap}toString(){return ei(this)}};function Ns(e,r){return Mt(e,r)&&e.every((t,n)=>at(t.parameters,r[n].parameters))}function Mt(e,r){return e.length!==r.length?!1:e.every((t,n)=>t.path===r[n].path)}function Ps(e,r){let t=[];return Object.entries(e.children).forEach(([n,o])=>{n===f&&(t=t.concat(r(o,n)))}),Object.entries(e.children).forEach(([n,o])=>{n!==f&&(t=t.concat(r(o,n)))}),t}var Ie=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>new Ct,providedIn:"root"})}return e})(),Ct=class{parse(r){let t=new sr(r);return new J(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(r){let t=`/${pe(r.root,!0)}`,n=Us(r.queryParams),o=typeof r.fragment=="string"?`#${Os(r.fragment)}`:"";return`${t}${n}${o}`}},ks=new Ct;function Je(e){return e.segments.map(r=>ei(r)).join("/")}function pe(e,r){if(!e.hasChildren())return Je(e);if(r){let t=e.children[f]?pe(e.children[f],!1):"",n=[];return Object.entries(e.children).forEach(([o,i])=>{o!==f&&n.push(`${o}:${pe(i,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Ps(e,(n,o)=>o===f?[pe(e.children[f],!1)]:[`${o}:${pe(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[f]!=null?`${Je(e)}/${t[0]}`:`${Je(e)}/(${t.join("//")})`}}function ti(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ze(e){return ti(e).replace(/%3B/gi,";")}function Os(e){return encodeURI(e)}function ir(e){return ti(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function tn(e){return decodeURIComponent(e)}function jo(e){return tn(e.replace(/\+/g,"%20"))}function ei(e){return`${ir(e.path)}${Ls(e.parameters)}`}function Ls(e){return Object.entries(e).map(([r,t])=>`;${ir(r)}=${ir(t)}`).join("")}function Us(e){let r=Object.entries(e).map(([t,n])=>Array.isArray(n)?n.map(o=>`${Ze(t)}=${Ze(o)}`).join("&"):`${Ze(t)}=${Ze(n)}`).filter(t=>t);return r.length?`?${r.join("&")}`:""}var Bs=/^[^\/()?;#]+/;function tr(e){let r=e.match(Bs);return r?r[0]:""}var js=/^[^\/()?;=#]+/;function Fs(e){let r=e.match(js);return r?r[0]:""}var $s=/^[^=?&#]+/;function zs(e){let r=e.match($s);return r?r[0]:""}var Hs=/^[^&#]+/;function Vs(e){let r=e.match(Hs);return r?r[0]:""}var sr=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new y([],{}):new y([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let r=[];for(this.peekStartsWith("(")||r.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),r.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(r.length>0||Object.keys(t).length>0)&&(n[f]=new y(r,t)),n}parseSegment(){let r=tr(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(r),new St(tn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let t=Fs(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=tr(this.remaining);o&&(n=o,this.capture(n))}r[tn(t)]=tn(n)}parseQueryParam(r){let t=zs(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let s=Vs(this.remaining);s&&(n=s,this.capture(n))}let o=jo(t),i=jo(n);if(r.hasOwnProperty(o)){let s=r[o];Array.isArray(s)||(s=[s],r[o]=s),s.push(i)}else r[o]=i}parseParens(r){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=tr(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let i;n.indexOf(":")>-1?(i=n.slice(0,n.indexOf(":")),this.capture(i),this.capture(":")):r&&(i=f);let s=this.parseChildren();t[i??f]=Object.keys(s).length===1&&s[f]?s[f]:new y([],s),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new E(4011,!1)}};function ni(e){return e.segments.length>0?new y([],{[f]:e}):e}function ri(e){let r={};for(let[n,o]of Object.entries(e.children)){let i=ri(o);if(n===f&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))r[s]=a;else(i.segments.length>0||i.hasChildren())&&(r[n]=i)}let t=new y(e.segments,r);return qs(t)}function qs(e){if(e.numberOfChildren===1&&e.children[f]){let r=e.children[f];return new y(e.segments.concat(r.segments),r.children)}return e}function Et(e){return e instanceof J}function oi(e,r,t=null,n=null,o=new Ct){let i=ii(e);return si(i,r,t,n,o)}function ii(e){let r;function t(i){let s={};for(let l of i.children){let c=t(l);s[l.outlet]=c}let a=new y(i.url,s);return i===e&&(r=a),a}let n=t(e.root),o=ni(n);return r??o}function si(e,r,t,n,o){let i=e;for(;i.parent;)i=i.parent;if(r.length===0)return er(i,i,i,t,n,o);let s=Ws(r);if(s.toRoot())return er(i,i,new y([],{}),t,n,o);let a=Gs(s,i,e),l=a.processChildren?ge(a.segmentGroup,a.index,s.commands):li(a.segmentGroup,a.index,s.commands);return er(i,a.segmentGroup,l,t,n,o)}function nn(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function ve(e){return typeof e=="object"&&e!=null&&e.outlets}function Fo(e,r,t){e||="\u0275";let n=new J;return n.queryParams={[e]:r},t.parse(t.serialize(n)).queryParams[e]}function er(e,r,t,n,o,i){let s={};for(let[c,u]of Object.entries(n??{}))s[c]=Array.isArray(u)?u.map(d=>Fo(c,d,i)):Fo(c,u,i);let a;e===r?a=t:a=ai(e,r,t);let l=ni(ri(a));return new J(l,s,o)}function ai(e,r,t){let n={};return Object.entries(e.children).forEach(([o,i])=>{i===r?n[o]=t:n[o]=ai(i,r,t)}),new y(e.segments,n)}var rn=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,t,n){if(this.isAbsolute=r,this.numberOfDoubleDots=t,this.commands=n,r&&n.length>0&&nn(n[0]))throw new E(4003,!1);let o=n.find(ve);if(o&&o!==Ms(n))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ws(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new rn(!0,0,e);let r=0,t=!1,n=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?r++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new rn(t,r,n)}var Zt=class{segmentGroup;processChildren;index;constructor(r,t,n){this.segmentGroup=r,this.processChildren=t,this.index=n}};function Gs(e,r,t){if(e.isAbsolute)return new Zt(r,!0,0);if(!t)return new Zt(r,!1,NaN);if(t.parent===null)return new Zt(t,!0,0);let n=nn(e.commands[0])?0:1,o=t.segments.length-1+n;return Qs(t,o,e.numberOfDoubleDots)}function Qs(e,r,t){let n=e,o=r,i=t;for(;i>o;){if(i-=o,n=n.parent,!n)throw new E(4005,!1);o=n.segments.length}return new Zt(n,!1,o-i)}function Ys(e){return ve(e[0])?e[0].outlets:{[f]:e}}function li(e,r,t){if(e??=new y([],{}),e.segments.length===0&&e.hasChildren())return ge(e,r,t);let n=Zs(e,r,t),o=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){let i=new y(e.segments.slice(0,n.pathIndex),{});return i.children[f]=new y(e.segments.slice(n.pathIndex),e.children),ge(i,0,o)}else return n.match&&o.length===0?new y(e.segments,{}):n.match&&!e.hasChildren()?ar(e,r,t):n.match?ge(e,0,o):ar(e,r,t)}function ge(e,r,t){if(t.length===0)return new y(e.segments,{});{let n=Ys(t),o={};if(Object.keys(n).some(i=>i!==f)&&e.children[f]&&e.numberOfChildren===1&&e.children[f].segments.length===0){let i=ge(e.children[f],r,t);return new y(e.segments,i.children)}return Object.entries(n).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=li(e.children[i],r,s))}),Object.entries(e.children).forEach(([i,s])=>{n[i]===void 0&&(o[i]=s)}),new y(e.segments,o)}}function Zs(e,r,t){let n=0,o=r,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(n>=t.length)return i;let s=e.segments[o],a=t[n];if(ve(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(o>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!zo(l,c,s))return i;n+=2}else{if(!zo(l,{},s))return i;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function ar(e,r,t){let n=e.segments.slice(0,r),o=0;for(;o<t.length;){let i=t[o];if(ve(i)){let l=Ks(i.outlets);return new y(n,l)}if(o===0&&nn(t[0])){let l=e.segments[r];n.push(new St(l.path,$o(t[0]))),o++;continue}let s=ve(i)?i.outlets[f]:`${i}`,a=o<t.length-1?t[o+1]:null;s&&a&&nn(a)?(n.push(new St(s,$o(a))),o+=2):(n.push(new St(s,{})),o++)}return new y(n,{})}function Ks(e){let r={};return Object.entries(e).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[t]=ar(new y([],{}),0,n))}),r}function $o(e){let r={};return Object.entries(e).forEach(([t,n])=>r[t]=`${n}`),r}function zo(e,r,t){return e==t.path&&at(r,t.parameters)}var be="imperative",A=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(A||{}),U=class{id;url;constructor(r,t){this.id=r,this.url=t}},xt=class extends U{type=A.NavigationStart;navigationTrigger;restoredState;constructor(r,t,n="imperative",o=null){super(r,t),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},lt=class extends U{urlAfterRedirects;type=A.NavigationEnd;constructor(r,t,n){super(r,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},x=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(x||{}),ye=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(ye||{}),Q=class extends U{reason;code;type=A.NavigationCancel;constructor(r,t,n,o){super(r,t),this.reason=n,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ci(e){return e instanceof Q&&(e.code===x.Redirect||e.code===x.SupersededByNewNavigation)}var pt=class extends U{reason;code;type=A.NavigationSkipped;constructor(r,t,n,o){super(r,t),this.reason=n,this.code=o}},Nt=class extends U{error;target;type=A.NavigationError;constructor(r,t,n,o){super(r,t),this.error=n,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Xt=class extends U{urlAfterRedirects;state;type=A.RoutesRecognized;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},on=class extends U{urlAfterRedirects;state;type=A.GuardsCheckStart;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sn=class extends U{urlAfterRedirects;state;shouldActivate;type=A.GuardsCheckEnd;constructor(r,t,n,o,i){super(r,t),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},an=class extends U{urlAfterRedirects;state;type=A.ResolveStart;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ln=class extends U{urlAfterRedirects;state;type=A.ResolveEnd;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cn=class{route;type=A.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},un=class{route;type=A.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},dn=class{snapshot;type=A.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hn=class{snapshot;type=A.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pn=class{snapshot;type=A.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fn=class{snapshot;type=A.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Jt=class{},te=class{url;navigationBehaviorOptions;constructor(r,t){this.url=r,this.navigationBehaviorOptions=t}};function Xs(e){return!(e instanceof Jt)&&!(e instanceof te)}var gn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new re(this.rootInjector)}},re=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let o=this.getOrCreateContext(t);o.outlet=n,this.contexts.set(t,o)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new gn(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||e)(w(mt))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),bn=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let t=this.pathFromRoot(r);return t.length>1?t[t.length-2]:null}children(r){let t=lr(r,this._root);return t?t.children.map(n=>n.value):[]}firstChild(r){let t=lr(r,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(r){let t=cr(r,this._root);return t.length<2?[]:t[t.length-2].children.map(o=>o.value).filter(o=>o!==r)}pathFromRoot(r){return cr(r,this._root).map(t=>t.value)}};function lr(e,r){if(e===r.value)return r;for(let t of r.children){let n=lr(e,t);if(n)return n}return null}function cr(e,r){if(e===r.value)return[r];for(let t of r.children){let n=cr(e,t);if(n.length)return n.unshift(r),n}return[]}var L=class{value;children;constructor(r,t){this.value=r,this.children=t}toString(){return`TreeNode(${this.value})`}};function Yt(e){let r={};return e&&e.children.forEach(t=>r[t.value.outlet]=t),r}var we=class extends bn{snapshot;constructor(r,t){super(r),this.snapshot=t,mr(this,r)}toString(){return this.snapshot.toString()}};function ui(e,r){let t=Js(e,r),n=new j([new St("",{})]),o=new j({}),i=new j({}),s=new j({}),a=new j(""),l=new ft(n,o,s,a,i,f,e,t.root);return l.snapshot=t.root,new we(new L(l,[]),t)}function Js(e,r){let t={},n={},o={},s=new At([],t,o,"",n,f,e,null,{},r);return new Se("",new L(s,[]))}var ft=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,t,n,o,i,s,a,l){this.urlSubject=r,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(M(c=>c[Re]))??v(void 0),this.url=r,this.params=t,this.queryParams=n,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(M(r=>_t(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(M(r=>_t(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function mn(e,r,t="emptyOnly"){let n,{routeConfig:o}=e;return r!==null&&(t==="always"||o?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:p(p({},r.params),e.params),data:p(p({},r.data),e.data),resolve:p(p(p(p({},e.data),r.data),o?.data),e._resolvedData)}:n={params:p({},e.params),data:p({},e.data),resolve:p(p({},e.data),e._resolvedData??{})},o&&hi(o)&&(n.resolve[Re]=o.title),n}var At=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Re]}constructor(r,t,n,o,i,s,a,l,c,u){this.url=r,this.params=t,this.queryParams=n,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_t(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_t(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${t}')`}},Se=class extends bn{url;constructor(r,t){super(t),this.url=r,mr(this,t)}toString(){return di(this._root)}};function mr(e,r){r.value._routerState=e,r.children.forEach(t=>mr(e,t))}function di(e){let r=e.children.length>0?` { ${e.children.map(di).join(", ")} } `:"";return`${e.value}${r}`}function nr(e){if(e.snapshot){let r=e.snapshot,t=e._futureSnapshot;e.snapshot=t,at(r.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),r.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),at(r.params,t.params)||e.paramsSubject.next(t.params),Ds(r.url,t.url)||e.urlSubject.next(t.url),at(r.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function ur(e,r){let t=at(e.params,r.params)&&Ns(e.url,r.url),n=!e.parent!=!r.parent;return t&&!n&&(!e.parent||ur(e.parent,r.parent))}function hi(e){return typeof e.title=="string"||e.title===null}var pi=new S(""),vr=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new nt;deactivateEvents=new nt;attachEvents=new nt;detachEvents=new nt;routerOutletData=K();parentContexts=h(re);location=h(qr);changeDetector=h(Fn);inputBinder=h(Te,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:o}=t.name;if(n)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=t;let o=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new dr(t,a,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ot({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Le]})}return e})(),dr=class{route;childContexts;parent;outletData;constructor(r,t,n,o){this.route=r,this.childContexts=t,this.parent=n,this.outletData=o}get(r,t){return r===ft?this.route:r===re?this.childContexts:r===pi?this.outletData:this.parent.get(r,t)}},Te=new S(""),yr=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,o=Rn([n.queryParams,n.params,n.data]).pipe(ut(([i,s,a],l)=>(a=p(p(p({},i),s),a),l===0?v(a):Promise.resolve(a)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let s=oo(n.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of s.inputs)t.activatedComponentRef.setInput(a,i[a])});this.outletDataSubscriptions.set(t,o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),wr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=H({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,o){n&1&&Dt(0,"router-outlet")},dependencies:[vr],encapsulation:2})}return e})();function Sr(e){let r=e.children&&e.children.map(Sr),t=r?k(p({},e),{children:r}):p({},e);return!t.component&&!t.loadComponent&&(r||t.loadChildren)&&t.outlet&&t.outlet!==f&&(t.component=wr),t}function ta(e,r,t){let n=Ce(e,r._root,t?t._root:void 0);return new we(n,r)}function Ce(e,r,t){if(t&&e.shouldReuseRoute(r.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=r.value;let o=ea(e,r,t);return new L(n,o)}else{if(e.shouldAttach(r.value)){let i=e.retrieve(r.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=r.value,s.children=r.children.map(a=>Ce(e,a)),s}}let n=na(r.value),o=r.children.map(i=>Ce(e,i));return new L(n,o)}}function ea(e,r,t){return r.children.map(n=>{for(let o of t.children)if(e.shouldReuseRoute(n.value,o.value.snapshot))return Ce(e,n,o);return Ce(e,n)})}function na(e){return new ft(new j(e.url),new j(e.params),new j(e.queryParams),new j(e.fragment),new j(e.data),e.outlet,e.component,e)}var ee=class{redirectTo;navigationBehaviorOptions;constructor(r,t){this.redirectTo=r,this.navigationBehaviorOptions=t}},fi="ngNavigationCancelingError";function vn(e,r){let{redirectTo:t,navigationBehaviorOptions:n}=Et(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,o=gi(!1,x.Redirect);return o.url=t,o.navigationBehaviorOptions=n,o}function gi(e,r){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[fi]=!0,t.cancellationCode=r,t}function ra(e){return bi(e)&&Et(e.url)}function bi(e){return!!e&&e[fi]}var hr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,t,n,o,i){this.routeReuseStrategy=r,this.futureState=t,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=i}activate(r){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,r),nr(this.futureState.root),this.activateChildRoutes(t,n,r)}deactivateChildRoutes(r,t,n){let o=Yt(t);r.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],n),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(r,t,n){let o=r.value,i=t?t.value:null;if(o===i)if(o.component){let s=n.getContext(o.outlet);s&&this.deactivateChildRoutes(r,t,s.children)}else this.deactivateChildRoutes(r,t,n);else i&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(r,t){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,t):this.deactivateRouteAndOutlet(r,t)}detachAndStoreRouteSubtree(r,t){let n=t.getContext(r.value.outlet),o=n&&r.value.component?n.children:t,i=Yt(r);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:s,route:r,contexts:a})}}deactivateRouteAndOutlet(r,t){let n=t.getContext(r.value.outlet),o=n&&r.value.component?n.children:t,i=Yt(r);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,t,n){let o=Yt(t);r.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],n),this.forwardEvent(new fn(i.value.snapshot))}),r.children.length&&this.forwardEvent(new hn(r.value.snapshot))}activateRoutes(r,t,n){let o=r.value,i=t?t.value:null;if(nr(o),o===i)if(o.component){let s=n.getOrCreateContext(o.outlet);this.activateChildRoutes(r,t,s.children)}else this.activateChildRoutes(r,t,n);else if(o.component){let s=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),nr(a.route.value),this.activateChildRoutes(r,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(r,null,s.children)}else this.activateChildRoutes(r,null,n)}},yn=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Kt=class{component;route;constructor(r,t){this.component=r,this.route=t}};function oa(e,r,t){let n=e._root,o=r?r._root:null;return fe(n,o,t,[n.value])}function ia(e){let r=e.routeConfig?e.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:e,guards:r}}function oe(e,r){let t=Symbol(),n=r.get(e,t);return n===t?typeof e=="function"&&!Pr(e)?e:r.get(e):n}function fe(e,r,t,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Yt(r);return e.children.forEach(s=>{sa(s,i[s.value.outlet],t,n.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>me(a,t.getContext(s),o)),o}function sa(e,r,t,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=r?r.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=aa(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new yn(n)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?fe(e,r,a?a.children:null,n,o):fe(e,r,t,n,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Kt(a.outlet.component,s))}else s&&me(r,a,o),o.canActivateChecks.push(new yn(n)),i.component?fe(e,null,a?a.children:null,n,o):fe(e,null,t,n,o);return o}function aa(e,r,t){if(typeof t=="function")return $(r._environmentInjector,()=>t(e,r));switch(t){case"pathParamsChange":return!Mt(e.url,r.url);case"pathParamsOrQueryParamsChange":return!Mt(e.url,r.url)||!at(e.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ur(e,r)||!at(e.queryParams,r.queryParams);default:return!ur(e,r)}}function me(e,r,t){let n=Yt(e),o=e.value;Object.entries(n).forEach(([i,s])=>{o.component?r?me(s,r.children.getContext(i),t):me(s,null,t):me(s,r,t)}),o.component?r&&r.outlet&&r.outlet.isActivated?t.canDeactivateChecks.push(new Kt(r.outlet.component,o)):t.canDeactivateChecks.push(new Kt(null,o)):t.canDeactivateChecks.push(new Kt(null,o))}function De(e){return typeof e=="function"}function la(e){return typeof e=="boolean"}function ca(e){return e&&De(e.canLoad)}function ua(e){return e&&De(e.canActivate)}function da(e){return e&&De(e.canActivateChild)}function ha(e){return e&&De(e.canDeactivate)}function pa(e){return e&&De(e.canMatch)}function mi(e){return e instanceof Ar||e?.name==="EmptyError"}var Ke=Symbol("INITIAL_VALUE");function ne(){return ut(e=>Rn(e.map(r=>r.pipe(Bt(1),xr(Ke)))).pipe(M(r=>{for(let t of r)if(t!==!0){if(t===Ke)return Ke;if(t===!1||fa(t))return t}return!0}),Lt(r=>r!==Ke),Bt(1)))}function fa(e){return Et(e)||e instanceof ee}function vi(e){return e.aborted?v(void 0).pipe(Bt(1)):new Mr(r=>{let t=()=>{r.next(),r.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function yi(e){return Ne(vi(e))}function ga(e){return gt(r=>{let{targetSnapshot:t,currentSnapshot:n,guards:{canActivateChecks:o,canDeactivateChecks:i}}=r;return i.length===0&&o.length===0?v(k(p({},r),{guardsResult:!0})):ba(i,t,n).pipe(gt(s=>s&&la(s)?ma(t,o,e):v(s)),M(s=>k(p({},r),{guardsResult:s})))})}function ba(e,r,t){return tt(e).pipe(gt(n=>Ca(n.component,n.route,t,r)),bt(n=>n!==!0,!0))}function ma(e,r,t){return tt(r).pipe(In(n=>_r(ya(n.route.parent,t),va(n.route,t),Sa(e,n.path),wa(e,n.route))),bt(n=>n!==!0,!0))}function va(e,r){return e!==null&&r&&r(new pn(e)),v(!0)}function ya(e,r){return e!==null&&r&&r(new dn(e)),v(!0)}function wa(e,r){let t=r.routeConfig?r.routeConfig.canActivate:null;if(!t||t.length===0)return v(!0);let n=t.map(o=>xe(()=>{let i=r._environmentInjector,s=oe(o,i),a=ua(s)?s.canActivate(r,e):$(i,()=>s(r,e));return Pt(a).pipe(bt())}));return v(n).pipe(ne())}function Sa(e,r){let t=r[r.length-1],o=r.slice(0,r.length-1).reverse().map(i=>ia(i)).filter(i=>i!==null).map(i=>xe(()=>{let s=i.guards.map(a=>{let l=i.node._environmentInjector,c=oe(a,l),u=da(c)?c.canActivateChild(t,e):$(l,()=>c(t,e));return Pt(u).pipe(bt())});return v(s).pipe(ne())}));return v(o).pipe(ne())}function Ca(e,r,t,n){let o=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!o||o.length===0)return v(!0);let i=o.map(s=>{let a=r._environmentInjector,l=oe(s,a),c=ha(l)?l.canDeactivate(e,r,t,n):$(a,()=>l(e,r,t,n));return Pt(c).pipe(bt())});return v(i).pipe(ne())}function Ea(e,r,t,n,o){let i=r.canLoad;if(i===void 0||i.length===0)return v(!0);let s=i.map(a=>{let l=oe(a,e),c=ca(l)?l.canLoad(r,t):$(e,()=>l(r,t)),u=Pt(c);return o?u.pipe(yi(o)):u});return v(s).pipe(ne(),wi(n))}function wi(e){return Dr(Y(r=>{if(typeof r!="boolean")throw vn(e,r)}),M(r=>r===!0))}function Ra(e,r,t,n,o){let i=r.canMatch;if(!i||i.length===0)return v(!0);let s=i.map(a=>{let l=oe(a,e),c=pa(l)?l.canMatch(r,t):$(e,()=>l(r,t));return Pt(c).pipe(yi(o))});return v(s).pipe(ne(),wi(n))}var ht=class e extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,e.prototype)}},Ee=class e extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,e.prototype)}};function Ia(e){throw new E(4e3,!1)}function Ta(e){throw gi(!1,x.GuardRejected)}var pr=class{urlSerializer;urlTree;constructor(r,t){this.urlSerializer=r,this.urlTree=t}lineralizeSegments(r,t){return C(this,null,function*(){let n=[],o=t.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return n;if(o.numberOfChildren>1||!o.children[f])throw Ia(`${r.redirectTo}`);o=o.children[f]}})}applyRedirectCommands(r,t,n,o,i){return C(this,null,function*(){let s=yield Da(t,o,i);if(s instanceof J)throw new Ee(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),r,n);if(s[0]==="/")throw new Ee(a);return a})}applyRedirectCreateUrlTree(r,t,n,o){let i=this.createSegmentGroup(r,t.root,n,o);return new J(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(r,t){let n={};return Object.entries(r).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);n[o]=t[a]}else n[o]=i}),n}createSegmentGroup(r,t,n,o){let i=this.createSegments(r,t.segments,n,o),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(r,l,n,o)}),new y(i,s)}createSegments(r,t,n,o){return t.map(i=>i.path[0]===":"?this.findPosParam(r,i,o):this.findOrReturn(i,n))}findPosParam(r,t,n){let o=n[t.path.substring(1)];if(!o)throw new E(4001,!1);return o}findOrReturn(r,t){let n=0;for(let o of t){if(o.path===r.path)return t.splice(n),o;n++}return r}};function Da(e,r,t){if(typeof e=="string")return Promise.resolve(e);let n=e,{queryParams:o,fragment:i,routeConfig:s,url:a,outlet:l,params:c,data:u,title:d,paramMap:g,queryParamMap:b}=r;return en(Pt($(t,()=>n({params:c,data:u,queryParams:o,fragment:i,routeConfig:s,url:a,outlet:l,title:d,paramMap:g,queryParamMap:b}))))}function Ma(e,r){return e.providers&&!e._injector&&(e._injector=Nn(e.providers,r,`Route: ${e.path}`)),e._injector??r}function X(e){return e.outlet||f}function Aa(e,r){let t=e.filter(n=>X(n)===r);return t.push(...e.filter(n=>X(n)!==r)),t}var fr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function _a(e,r,t,n,o,i){let s=Si(e,r,t);return s.matched?(n=Ma(r,n),Ra(n,r,t,o,i).pipe(M(a=>a===!0?s:p({},fr)))):v(s)}function Si(e,r,t){if(r.path==="")return r.pathMatch==="full"&&(e.hasChildren()||t.length>0)?p({},fr):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let o=(r.matcher||Go)(t,e,r);if(!o)return p({},fr);let i={};Object.entries(o.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=o.consumed.length>0?p(p({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:t.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function Ho(e,r,t,n){return t.length>0&&Pa(e,t,n)?{segmentGroup:new y(r,Na(n,new y(t,e.children))),slicedSegments:[]}:t.length===0&&ka(e,t,n)?{segmentGroup:new y(e.segments,xa(e,t,n,e.children)),slicedSegments:t}:{segmentGroup:new y(e.segments,e.children),slicedSegments:t}}function xa(e,r,t,n){let o={};for(let i of t)if(Sn(e,r,i)&&!n[X(i)]){let s=new y([],{});o[X(i)]=s}return p(p({},n),o)}function Na(e,r){let t={};t[f]=r;for(let n of e)if(n.path===""&&X(n)!==f){let o=new y([],{});t[X(n)]=o}return t}function Pa(e,r,t){return t.some(n=>Sn(e,r,n)&&X(n)!==f)}function ka(e,r,t){return t.some(n=>Sn(e,r,n))}function Sn(e,r,t){return(e.hasChildren()||r.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Oa(e,r,t){return r.length===0&&!e.children[t]}var gr=class{};function La(e,r,t,n,o,i,s="emptyOnly",a){return C(this,null,function*(){return new br(e,r,t,n,o,s,i,a).recognize()})}var Ua=31,br=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,t,n,o,i,s,a,l){this.injector=r,this.configLoader=t,this.rootComponentType=n,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new pr(this.urlSerializer,this.urlTree)}noMatchError(r){return new E(4002,`'${r.segmentGroup}'`)}recognize(){return C(this,null,function*(){let r=Ho(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:n}=yield this.match(r),o=new L(n,t),i=new Se("",o),s=oi(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}})}match(r){return C(this,null,function*(){let t=new At([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,r,f,t),rootSnapshot:t}}catch(n){if(n instanceof Ee)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof ht?this.noMatchError(n):n}})}processSegmentGroup(r,t,n,o,i){return C(this,null,function*(){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,t,n,i);let s=yield this.processSegment(r,t,n,n.segments,o,!0,i);return s instanceof L?[s]:[]})}processChildren(r,t,n,o){return C(this,null,function*(){let i=[];for(let l of Object.keys(n.children))l==="primary"?i.unshift(l):i.push(l);let s=[];for(let l of i){let c=n.children[l],u=Aa(t,l),d=yield this.processSegmentGroup(r,u,c,l,o);s.push(...d)}let a=Ci(s);return Ba(a),a})}processSegment(r,t,n,o,i,s,a){return C(this,null,function*(){for(let l of t)try{return yield this.processSegmentAgainstRoute(l._injector??r,t,l,n,o,i,s,a)}catch(c){if(c instanceof ht||mi(c))continue;throw c}if(Oa(n,o,i))return new gr;throw new ht(n)})}processSegmentAgainstRoute(r,t,n,o,i,s,a,l){return C(this,null,function*(){if(X(n)!==s&&(s===f||!Sn(o,i,n)))throw new ht(o);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,o,n,i,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(r,o,t,n,i,s,l);throw new ht(o)})}expandSegmentAgainstRouteUsingRedirect(r,t,n,o,i,s,a){return C(this,null,function*(){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:g}=Si(t,o,i);if(!l)throw new ht(t);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ua&&(this.allowRedirects=!1));let b=new At(i,c,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Vo(o),X(o),o.component??o._loadedComponent??null,o,qo(o),r),T=mn(b,a,this.paramsInheritanceStrategy);if(b.params=Object.freeze(T.params),b.data=Object.freeze(T.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=yield this.applyRedirects.applyRedirectCommands(u,o.redirectTo,d,b,r),B=yield this.applyRedirects.lineralizeSegments(o,_);return this.processSegment(r,n,t,B.concat(g),s,!1,a)})}matchSegmentAgainstRoute(r,t,n,o,i,s){return C(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=yield en(_a(t,n,o,r,this.urlSerializer,this.abortSignal));if(n.path==="**"&&(t.children={}),!a?.matched)throw new ht(t);r=n._injector??r;let{routes:l}=yield this.getChildConfig(r,n,o),c=n._loadedInjector??r,{parameters:u,consumedSegments:d,remainingSegments:g}=a,b=new At(d,u,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Vo(n),X(n),n.component??n._loadedComponent??null,n,qo(n),r),T=mn(b,s,this.paramsInheritanceStrategy);b.params=Object.freeze(T.params),b.data=Object.freeze(T.data);let{segmentGroup:_,slicedSegments:B}=Ho(t,d,g,l);if(B.length===0&&_.hasChildren()){let ct=yield this.processChildren(c,l,_,b);return new L(b,ct)}if(l.length===0&&B.length===0)return new L(b,[]);let Ot=X(n)===i,Rt=yield this.processSegment(c,l,_,B,Ot?f:i,!0,b);return new L(b,Rt instanceof L?[Rt]:[])})}getChildConfig(r,t,n){return C(this,null,function*(){if(t.children)return{routes:t.children,injector:r};if(t.loadChildren){if(t._loadedRoutes!==void 0){let i=t._loadedNgModuleFactory;return i&&!t._loadedInjector&&(t._loadedInjector=i.create(r).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield en(Ea(r,t,n,this.urlSerializer,this.abortSignal))){let i=yield this.configLoader.loadChildren(r,t);return t._loadedRoutes=i.routes,t._loadedInjector=i.injector,t._loadedNgModuleFactory=i.factory,i}throw Ta(t)}return{routes:[],injector:r}})}};function Ba(e){e.sort((r,t)=>r.value.outlet===f?-1:t.value.outlet===f?1:r.value.outlet.localeCompare(t.value.outlet))}function ja(e){let r=e.value.routeConfig;return r&&r.path===""}function Ci(e){let r=[],t=new Set;for(let n of e){if(!ja(n)){r.push(n);continue}let o=r.find(i=>n.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...n.children),t.add(o)):r.push(n)}for(let n of t){let o=Ci(n.children);r.push(new L(n.value,o))}return r.filter(n=>!t.has(n))}function Vo(e){return e.data||{}}function qo(e){return e.resolve||{}}function Fa(e,r,t,n,o,i,s){return gt(a=>C(null,null,function*(){let{state:l,tree:c}=yield La(e,r,t,n,a.extractedUrl,o,i,s);return k(p({},a),{targetSnapshot:l,urlAfterRedirects:c})}))}function $a(e){return gt(r=>{let{targetSnapshot:t,guards:{canActivateChecks:n}}=r;if(!n.length)return v(r);let o=new Set(n.map(a=>a.route)),i=new Set;for(let a of o)if(!i.has(a))for(let l of Ei(a))i.add(l);let s=0;return tt(i).pipe(In(a=>o.has(a)?za(a,t,e):(a.data=mn(a,a.parent,e).resolve,v(void 0))),Y(()=>s++),Tn(1),gt(a=>s===i.size?v(r):F))})}function Ei(e){let r=e.children.map(t=>Ei(t)).flat();return[e,...r]}function za(e,r,t){let n=e.routeConfig,o=e._resolve;return n?.title!==void 0&&!hi(n)&&(o[Re]=n.title),xe(()=>(e.data=mn(e,e.parent,t).resolve,Ha(o,e,r).pipe(M(i=>(e._resolvedData=i,e.data=p(p({},e.data),i),null)))))}function Ha(e,r,t){let n=or(e);if(n.length===0)return v({});let o={};return tt(n).pipe(gt(i=>Va(e[i],r,t).pipe(bt(),Y(s=>{if(s instanceof ee)throw vn(new Ct,s);o[i]=s}))),Tn(1),M(()=>o),Ut(i=>mi(i)?F:_e(i)))}function Va(e,r,t){let n=r._environmentInjector,o=oe(e,n),i=o.resolve?o.resolve(r,t):$(n,()=>o(r,t));return Pt(i)}function Wo(e){return ut(r=>{let t=e(r);return t?tt(t).pipe(M(()=>r)):v(r)})}var Cr=(()=>{class e{buildTitle(t){let n,o=t.root;for(;o!==void 0;)n=this.getResolvedTitleForRoute(o)??n,o=o.children.find(i=>i.outlet===f);return n}getResolvedTitleForRoute(t){return t.data[Re]}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>h(Ri),providedIn:"root"})}return e})(),Ri=(()=>{class e extends Cr{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||e)(w(Uo))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),kt=new S("",{factory:()=>({})}),Me=new S(""),Ii=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(to);loadComponent(t,n){return C(this,null,function*(){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let o=C(this,null,function*(){try{let i=yield Yo($(t,()=>n.loadComponent())),s=yield Mi(Di(i));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s,s}finally{this.componentLoaders.delete(n)}});return this.componentLoaders.set(n,o),o})}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=C(this,null,function*(){try{let i=yield Ti(n,this.compiler,t,this.onLoadEndListener);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(n)}});return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ti(e,r,t,n){return C(this,null,function*(){let o=yield Yo($(t,()=>e.loadChildren())),i=yield Mi(Di(o)),s;i instanceof Wr||Array.isArray(i)?s=i:s=yield r.compileModuleAsync(i),n&&n(e);let a,l,c=!1,u;return Array.isArray(s)?(l=s,c=!0):(a=s.create(t).injector,u=s,l=a.get(Me,[],{optional:!0,self:!0}).flat()),{routes:l.map(Sr),injector:a,factory:u}})}function qa(e){return e&&typeof e=="object"&&"default"in e}function Di(e){return qa(e)?e.default:e}function Mi(e){return C(this,null,function*(){return e})}var Cn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>h(Wa),providedIn:"root"})}return e})(),Wa=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ai=new S("");var Ga=()=>{},_i=new S(""),xi=(()=>{class e{currentNavigation=dt(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=dt(null);events=new It;transitionAbortWithErrorSubject=new It;configLoader=h(Ii);environmentInjector=h(mt);destroyRef=h(Mn);urlSerializer=h(Ie);rootContexts=h(re);location=h(Ve);inputBindingEnabled=h(Te,{optional:!0})!==null;titleStrategy=h(Cr);options=h(kt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Cn);createViewTransition=h(Ai,{optional:!0});navigationErrorHandler=h(_i,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>v(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=o=>this.events.next(new cn(o)),n=o=>this.events.next(new un(o));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;vt(()=>{this.transitions?.next(k(p({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))})}setupNavigations(t){return this.transitions=new j(null),this.transitions.pipe(Lt(n=>n!==null),ut(n=>{let o=!1,i=new AbortController,s=()=>!o&&this.currentTransition?.id===n.id;return v(n).pipe(ut(a=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",x.SupersededByNewNavigation),F;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?k(p({},l),{previousNavigation:null}):null,abort:()=>i.abort()});let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new pt(a.id,this.urlSerializer.serialize(a.rawUrl),"",ye.IgnoredSameUrlNavigation)),a.resolve(!1),F;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return v(a).pipe(ut(d=>(this.events.next(new xt(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?F:Promise.resolve(d))),Fa(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),Y(d=>{n.targetSnapshot=d.targetSnapshot,n.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(b=>(b.finalUrl=d.urlAfterRedirects,b));let g=new Xt(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(g)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:g,source:b,restoredState:T,extras:_}=a,B=new xt(d,this.urlSerializer.serialize(g),b,T);this.events.next(B);let Ot=ui(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=k(p({},a),{targetSnapshot:Ot,urlAfterRedirects:g,extras:k(p({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Rt=>(Rt.finalUrl=g,Rt)),v(n)}else return this.events.next(new pt(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ye.IgnoredByUrlHandlingStrategy)),a.resolve(!1),F}),M(a=>{let l=new on(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=n=k(p({},a),{guards:oa(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),n}),ga(a=>this.events.next(a)),ut(a=>{if(n.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw vn(this.urlSerializer,a.guardsResult);let l=new sn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return F;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",x.GuardRejected),F;if(a.guards.canActivateChecks.length===0)return v(a);let c=new an(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return F;let u=!1;return v(a).pipe($a(this.paramsInheritanceStrategy),Y({next:()=>{u=!0;let d=new ln(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)},complete:()=>{u||this.cancelNavigationTransition(a,"",x.NoDataFromResolver)}}))}),Wo(a=>{let l=u=>{let d=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let g=u._environmentInjector;d.push(this.configLoader.loadComponent(g,u.routeConfig).then(b=>{u.component=b}))}for(let g of u.children)d.push(...l(g));return d},c=l(a.targetSnapshot.root);return c.length===0?v(a):tt(Promise.all(c).then(()=>a))}),Wo(()=>this.afterPreactivation()),ut(()=>{let{currentSnapshot:a,targetSnapshot:l}=n,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?tt(c).pipe(M(()=>n)):v(n)}),Bt(1),M(a=>{let l=ta(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=n=a=k(p({},a),{targetRouterState:l}),this.currentNavigation.update(c=>(c.targetRouterState=l,c)),this.events.next(new Jt),s()&&(new hr(t.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(o=!0,this.currentNavigation.update(c=>(c.abort=Ga,c)),this.lastSuccessfulNavigation.set(vt(this.currentNavigation)),this.events.next(new lt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)))}),Ne(vi(i.signal).pipe(Lt(()=>!o&&!n.targetRouterState),Y(()=>{this.cancelNavigationTransition(n,i.signal.reason+"",x.Aborted)}))),Y({complete:()=>{o=!0}}),Ne(this.transitionAbortWithErrorSubject.pipe(Y(a=>{throw a}))),ie(()=>{i.abort(),o||this.cancelNavigationTransition(n,"",x.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ut(a=>{if(o=!0,this.destroyed)return n.resolve(!1),F;if(bi(a))this.events.next(new Q(n.id,this.urlSerializer.serialize(n.extractedUrl),a.message,a.cancellationCode)),ra(a)?this.events.next(new te(a.url,a.navigationBehaviorOptions)):n.resolve(!1);else{let l=new Nt(n.id,this.urlSerializer.serialize(n.extractedUrl),a,n.targetSnapshot??void 0);try{let c=$(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ee){let{message:u,cancellationCode:d}=vn(this.urlSerializer,c);this.events.next(new Q(n.id,this.urlSerializer.serialize(n.extractedUrl),u,d)),this.events.next(new te(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(c)}}return F}))}))}cancelNavigationTransition(t,n,o){let i=new Q(t.id,this.urlSerializer.serialize(t.extractedUrl),n,o);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=vt(this.currentNavigation),o=n?.targetBrowserUrl??n?.extractedUrl;return t.toString()!==o?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Qa(e){return e!==be}var Ni=new S("");var Pi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>h(Ya),providedIn:"root"})}return e})(),wn=class{shouldDetach(r){return!1}store(r,t){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,t){return r.routeConfig===t.routeConfig}shouldDestroyInjector(r){return!0}},Ya=(()=>{class e extends wn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Er=(()=>{class e{urlSerializer=h(Ie);options=h(kt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Ve);urlHandlingStrategy=h(Cn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new J;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:o}){let i=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,s=o??i;return s instanceof J?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:o}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,o),this.routerState=t):this.rawUrlTree=o}routerState=ui(null,h(mt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>h(Za),providedIn:"root"})}return e})(),Za=(()=>{class e extends Er{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof xt?this.updateStateMemento():t instanceof pt?this.commitTransition(n):t instanceof Xt?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Jt?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Q&&!ci(t)?this.restoreHistory(n):t instanceof Nt?this.restoreHistory(n,!0):t instanceof lt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:o}){let{replaceUrl:i,state:s}=n;if(this.location.isCurrentPathEqualTo(t)||i){let a=this.browserPageId,l=p(p({},s),this.generateNgRouterState(o,a));this.location.replaceState(t,"",l)}else{let a=p(p({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===t.finalUrl&&i===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Rr(e,r){e.events.pipe(Lt(t=>t instanceof lt||t instanceof Q||t instanceof Nt||t instanceof pt),M(t=>t instanceof lt||t instanceof pt?0:(t instanceof Q?t.code===x.Redirect||t.code===x.SupersededByNewNavigation:!1)?2:1),Lt(t=>t!==2),Bt(1)).subscribe(()=>{r()})}var ki={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Oi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ae=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(Gr);stateManager=h(Er);options=h(kt,{optional:!0})||{};pendingTasks=h(Lr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h(xi);urlSerializer=h(Ie);location=h(Ve);urlHandlingStrategy=h(Cn);injector=h(mt);_events=new It;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(Pi);injectorCleanup=h(Ni,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(Me,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(Te,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Tr;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let o=this.navigationTransitions.currentTransition,i=vt(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof Q&&n.code!==x.Redirect&&n.code!==x.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof lt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof te){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,o.currentRawUrl),l=p({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Qa(o.source)},s);this.scheduleNavigation(a,be,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Xs(n)&&this._events.next(n)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),be,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,o)=>{this.navigateToSyncWithBrowser(t,o,n)})}navigateToSyncWithBrowser(t,n,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=p({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,s,i).catch(l=>{this.disposed||this.injector.get(ke)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return vt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Sr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=p(p({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let g=o?o.snapshot:this.routerState.snapshot.root;d=ii(g)}catch(g){(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return si(d,t,u,c??null,this.urlSerializer)}navigateByUrl(t,n={skipLocationChange:!1}){let o=Et(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,be,null,n)}navigate(t,n={skipLocationChange:!1}){return Ka(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch(n){return this.console.warn(Nr(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,n){let o;if(n===!0?o=p({},ki):n===!1?o=p({},Oi):o=n,Et(t))return Bo(this.currentUrlTree,t,o);let i=this.parseUrl(t);return Bo(this.currentUrlTree,i,o)}removeEmptyProps(t){return Object.entries(t).reduce((n,[o,i])=>(i!=null&&(n[o]=i),n),{})}scheduleNavigation(t,n,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((d,g)=>{a=d,l=g});let u=this.pendingTasks.add();return Rr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ka(e){for(let r=0;r<e.length;r++)if(e[r]==null)throw new E(4008,!1)}var Li=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=dt(null);get href(){return vt(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new It;applicationErrorHandler=h(ke);options=h(kt,{optional:!0});constructor(t,n,o,i,s,a){this.router=t,this.route=n,this.tabIndexAttribute=o,this.renderer=i,this.el=s,this.locationStrategy=a,this.reactiveHref.set(h(new eo("href"),{optional:!0}));let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement&&(this.setTabIndexIfNotOnNativeEl("0"),this.subscribeToNavigationEventsIfNecessary())}subscribeToNavigationEventsIfNecessary(){this.subscription===void 0&&(this.subscription=this.router.events.subscribe(t=>{t instanceof lt&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Et(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,n,o,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||n||o||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.reactiveHref.set(t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null)}applyAttributeValue(t,n){let o=this.renderer,i=this.el.nativeElement;n!==null?o.setAttribute(i,t,n):o.removeAttribute(i,t)}get urlTree(){return this.routerLinkInput===null?null:Et(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||e)($t(Ae),$t(ft),Ur("tabindex"),$t(Vr),$t(Ue),$t(ao))};static \u0275dir=ot({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,o){n&1&&$e("click",function(s){return o.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&V("href",o.reactiveHref(),Fr)("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",D],skipLocationChange:[2,"skipLocationChange","skipLocationChange",D],replaceUrl:[2,"replaceUrl","replaceUrl",D],routerLink:"routerLink"},features:[Le]})}return e})();var el=new S("");function nl(e,...r){return kr([{provide:Me,multi:!0,useValue:e},[],{provide:ft,useFactory:rl},{provide:Yr,multi:!0,useFactory:ol},r.map(t=>t.\u0275providers)])}function rl(){return h(Ae).routerState.root}function Ui(e,r){return{\u0275kind:e,\u0275providers:r}}function ol(){let e=h(Dn);return r=>{let t=e.get(Zr);if(r!==t.components[0])return;let n=e.get(Ae),o=e.get(il);e.get(sl)===1&&n.initialNavigation(),e.get(al,null,{optional:!0})?.setUpPreloading(),e.get(el,null,{optional:!0})?.init(),n.resetRootComponentType(t.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var il=new S("",{factory:()=>new It}),sl=new S("",{factory:()=>1});var al=new S("");function ll(e){return Ui(5,[{provide:kt,useValue:e}])}function cl(){return Ui(8,[yr,{provide:Te,useExisting:yr}])}var Bi=class e{isLoading=dt(!1);foundDrinks=dt([]);randomDrink=dt(void 0);httpClient=h(bo);notify=h(Do);searchByName(r){if(!r.trim())return;let t="https://www.thecocktaildb.com/api/json/v1/1/search.php";this.isLoading.set(!0),this.httpClient.get(t,{params:{s:r}}).pipe(M(n=>n.drinks||[]),ie(()=>this.isLoading.set(!1)),Ut(n=>this.handleError(n))).subscribe(n=>this.foundDrinks.set(n))}loadRandom(){let r="https://www.thecocktaildb.com/api/json/v1/1/random.php";return this.isLoading.set(!0),this.httpClient.get(r).pipe(M(t=>(t.drinks||[]).at(0)),Y(t=>this.randomDrink.set(t)),ie(()=>this.isLoading.set(!1)),Ut(t=>this.handleError(t)))}clearSearchResults(){this.foundDrinks.set([]),this.randomDrink.set(void 0)}handleError(r){let t=r instanceof go?r.message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C.";return this.notify.add({severity:"error",detail:t}),_e(()=>r)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})};var ji=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==t)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<o.length;s++){if(o[s]==t)return i;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&i++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let i=ct=>{if(ct)return getComputedStyle(ct).getPropertyValue("position")==="relative"?ct:i(ct.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),b=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},T,_,B="top";l.top+a+s.height>d.height?(T=l.top-b.top-s.height,B="bottom",l.top+T<0&&(T=-1*l.top)):(T=a+l.top-b.top,B="top");let Ot=l.left+s.width-d.width,Rt=l.left-b.left;if(s.width>d.width?_=(l.left-b.left)*-1:Ot>0?_=Rt-Ot:_=l.left-b.left,t.style.top=T+"px",t.style.left=_+"px",t.style.transformOrigin=B,o){let ct=wo(/-anchor-gutter$/)?.value;t.style.marginTop=B==="bottom"?`calc(${ct??"2px"} * -1)`:ct??""}}static absolutePosition(t,n,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,a=i.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),b=this.getViewport(),T,_;u.top+l+s>b.height?(T=u.top+d-s,t.style.transformOrigin="bottom",T<0&&(T=d)):(T=l+u.top+d,t.style.transformOrigin="top"),u.left+a>b.width?_=Math.max(0,u.left+g+c-a):_=u.left+g,t.style.top=T+"px",t.style.left=_+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,d=t.scrollTop,g=t.clientHeight,b=this.getOuterHeight(n);u<0?t.scrollTop=d+u:u+b>g&&(t.scrollTop=d+u-g+b)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,i=50,s=n,a=i/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||i.clientWidth,a=t.innerHeight||o.clientHeight||i.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(t){}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),i=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?i=o.length-1:i=s-1:s!=-1&&s!==o.length-1&&(i=s+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(i,s)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(i,c):Object.entries(c).map(([g,b])=>i==="style"&&(b||b===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?g:void 0);l=d.length?l.concat(d.filter(g=>!!g)):l}}return l},a)};Object.entries(n).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(o("class",s))].join(" ").trim():i==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function ku(){vo({variableName:qn("scrollbar.width").name})}function Ou(){yo({variableName:qn("scrollbar.width").name})}var Fi=(()=>{class e extends W{autofocus=!1;focused=!1;platformId=h(Ft);document=h(z);host=h(Ue);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){le(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=ji.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275dir=ot({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[P]})}return e})();var $i=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ul=`
    ${$i}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,dl={root:({instance:e})=>{let r=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,o=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":To(r)&&String(r).length===1,"p-badge-dot":Io(r),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},zi=(()=>{class e extends st{name="badge";style=ul;classes=dl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Hi=new S("BADGE_INSTANCE");var Ir=(()=>{class e extends W{componentName="Badge";$pcBadge=h(Hi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(O,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=K();badgeSize=K();size=K();severity=K();value=K();badgeDisabled=K(!1,{transform:D});_componentStyle=h(zi);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(V("data-p",o.dataP),q(o.cn(o.cx("root"),o.styleClass())),Jr("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[it([zi,{provide:Hi,useExisting:e},{provide:Qt,useExisting:e}]),zt([O]),P],decls:1,vars:1,template:function(n,o){n&1&&ze(0),n&2&&He(o.value())},dependencies:[yt,wt,Ao],encapsulation:2,changeDetection:0})}return e})(),qi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=rt({type:e});static \u0275inj=et({imports:[Ir,wt,wt]})}return e})();var pl=["*"],fl={root:"p-fluid"},Wi=(()=>{class e extends st{name="fluid";classes=fl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Gi=new S("FLUID_INSTANCE"),Qi=(()=>{class e extends W{componentName="Fluid";$pcFluid=h(Gi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(O,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(Wi);static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&q(o.cx("root"))},features:[it([Wi,{provide:Gi,useExisting:e},{provide:Qt,useExisting:e}]),zt([O]),P],ngContentSelectors:pl,decls:1,vars:0,template:function(n,o){n&1&&(Ht(),Vt(0))},dependencies:[yt],encapsulation:2,changeDetection:0})}return e})();var gl=["*"],bl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Yi=(()=>{class e extends st{name="baseicon";css=bl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Zi=(()=>{class e extends W{spin=!1;_componentStyle=h(Yi);getClassNames(){return mo("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&q(o.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[it([Yi]),P],ngContentSelectors:gl,decls:1,vars:0,template:function(n,o){n&1&&(Ht(),Vt(0))},encapsulation:2,changeDetection:0})}return e})();var ml=["data-p-icon","spinner"],Ki=(()=>{class e extends Zi{pathId;onInit(){this.pathId="url(#"+Vn()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["","data-p-icon","spinner"]],features:[P],attrs:ml,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Pe(),On(0,"g"),Un(1,"path",0),Ln(),On(2,"defs")(3,"clipPath",1),Un(4,"rect",2),Ln()()),n&2&&(V("clip-path",o.pathId),N(3),Xr("id",o.pathId))},encapsulation:2})}return e})();var Xi=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var vl=`
    ${Xi}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,yl={root:"p-ink"},Ji=(()=>{class e extends st{name="ripple";style=vl;classes=yl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var ts=(()=>{class e extends W{componentName="Ripple";zone=h(jt);_componentStyle=h(Ji);animationListener;mouseDownListener;timeout;constructor(){super(),Oe(()=>{le(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&Gt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!zn(n)&&!Hn(n)){let a=Math.max(So(this.el.nativeElement),Eo(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Co(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-Hn(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-zn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),!this.$unstyled()&&$n(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&Gt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&Gt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Gt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ro(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ot({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[it([Ji]),P]})}return e})();var es=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var wl=["content"],Sl=["loadingicon"],Cl=["icon"],El=["*"],os=(e,r)=>({class:e,pt:r});function Rl(e,r){e&1&&Kr(0)}function Il(e,r){if(e&1&&Dt(0,"span",7),e&2){let t=Z(3);q(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),I("pBind",t.ptm("loadingIcon")),V("aria-hidden",!0)}}function Tl(e,r){if(e&1&&(Pe(),Dt(0,"svg",8)),e&2){let t=Z(3);q(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),I("pBind",t.ptm("loadingIcon"))("spin",!0),V("aria-hidden",!0)}}function Dl(e,r){if(e&1&&(je(0),Tt(1,Il,1,4,"span",3)(2,Tl,1,5,"svg",6),Fe()),e&2){let t=Z(2);N(),I("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),N(),I("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function Ml(e,r){}function Al(e,r){if(e&1&&Tt(0,Ml,0,0,"ng-template",9),e&2){let t=Z(2);I("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function _l(e,r){if(e&1&&(je(0),Tt(1,Dl,3,2,"ng-container",2)(2,Al,1,1,null,5),Fe()),e&2){let t=Z();N(),I("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),N(),I("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",jn(3,os,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function xl(e,r){if(e&1&&Dt(0,"span",7),e&2){let t=Z(2);q(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),I("pBind",t.ptm("icon")),V("data-p",t.dataIconP)}}function Nl(e,r){}function Pl(e,r){if(e&1&&Tt(0,Nl,0,0,"ng-template",9),e&2){let t=Z(2);I("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function kl(e,r){if(e&1&&(je(0),Tt(1,xl,1,4,"span",3)(2,Pl,1,1,null,5),Fe()),e&2){let t=Z();N(),I("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),N(),I("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",jn(3,os,t.cx("icon"),t.ptm("icon")))}}function Ol(e,r){if(e&1&&(Pn(0,"span",7),ze(1),kn()),e&2){let t=Z();q(t.cx("label")),I("pBind",t.ptm("label")),V("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),N(),He(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Ll(e,r){if(e&1&&Dt(0,"p-badge",10),e&2){let t=Z();I("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var Ul={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,r])=>!!r).reduce((r,[t])=>r+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},ns=(()=>{class e extends st{name="button";style=es;classes=Ul;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var rs=new S("BUTTON_INSTANCE");var Bl=(()=>{class e extends W{componentName="Button";hostName="";$pcButton=h(rs,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(O,{self:!0});_componentStyle=h(ns);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=K(void 0,{transform:D});onClick=new nt;onFocus=new nt;onBlur=new nt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(Qi,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&Bn(i,wl,5)(i,Sl,5)(i,Cl,5)(i,Mo,4),n&2){let s;qt(s=Wt())&&(o.contentTemplate=s.first),qt(s=Wt())&&(o.loadingIconTemplate=s.first),qt(s=Wt())&&(o.iconTemplate=s.first),qt(s=Wt())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",D],raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",ro],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",D],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[it([ns,{provide:rs,useExisting:e},{provide:Qt,useExisting:e}]),zt([O]),P],ngContentSelectors:El,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(Ht(),Pn(0,"button",0),$e("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Vt(1),Tt(2,Rl,1,0,"ng-container",1)(3,_l,3,6,"ng-container",2)(4,kl,3,6,"ng-container",2)(5,Ol,2,6,"span",3)(6,Ll,1,4,"p-badge",4),kn()),n&2&&(q(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),I("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),V("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),N(2),I("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),N(),I("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),N(),I("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),N(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),N(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[yt,lo,uo,co,ts,Fi,Ki,qi,Ir,wt,O],encapsulation:2,changeDetection:0})}return e})(),vh=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=rt({type:e});static \u0275inj=et({imports:[yt,Bl,wt,wt]})}return e})();export{ms as a,lt as b,ft as c,vr as d,Ae as e,Li as f,nl as g,ll as h,cl as i,Bi as j,Qi as k,ji as l,ku as m,Ou as n,Zi as o,Bl as p,vh as q};
