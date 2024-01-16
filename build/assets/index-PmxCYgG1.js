(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ft={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vn=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,h=i>>2,m=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(t[h],t[m],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($t(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vn(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||m==null)throw new An;const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),m!==64){const H=l<<6&192|m;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class An extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pn=function(n){const e=$t(n);return Ut.encodeByteArray(e,!0)},_e=function(n){return Pn(n).replace(/\./g,"")},Vn=function(n){try{return Ut.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=()=>Sn().__FIREBASE_DEFAULTS__,Dn=()=>{if(typeof process>"u"||typeof ft>"u")return;const n=ft.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kn=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vn(n[1]);return e&&JSON.parse(e)},jt=()=>{try{return Rn()||Dn()||kn()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cn=n=>{var e,t;return(t=(e=jt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nn=n=>{const e=Cn(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zt=()=>{var n;return(n=jt())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_e(JSON.stringify(t)),_e(JSON.stringify(o)),""].join(".")}function Mn(){try{return typeof indexedDB=="object"}catch{return!1}}function xn(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirebaseError";class X extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ln,Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bn(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new X(s,a,r)}}function Bn(n,e){return n.replace($n,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $n=/\{\$([^}]+)}/g;function je(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(pt(i)&&pt(o)){if(!je(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pt(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n){return n&&n._delegate?n._delegate:n}class re{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new On;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zn(e))try{this.getOrInitializeService({instanceIdentifier:L})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=L){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=L){return this.instances.has(e)}getOptions(e=L){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jn(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=L){return this.component?this.component.multipleInstances?e:L:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jn(n){return n===L?void 0:n}function zn(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Un(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(g||(g={}));const qn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Gn=g.INFO,Kn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Wn=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Kn[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qt{constructor(e){this.name=e,this._logLevel=Gn,this._logHandler=Wn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Qn=(n,e)=>e.some(t=>n instanceof t);let mt,gt;function Yn(){return mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jn(){return gt||(gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gt=new WeakMap,ze=new WeakMap,Kt=new WeakMap,xe=new WeakMap,Ze=new WeakMap;function Xn(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(N(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gt.set(t,n)}).catch(()=>{}),Ze.set(e,n),e}function Zn(n){if(ze.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ze.set(n,e)}let He={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ze.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kt.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return N(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function er(n){He=n(He)}function tr(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Le(this),e,...t);return Kt.set(r,e.sort?e.sort():[e]),N(r)}:Jn().includes(n)?function(...e){return n.apply(Le(this),e),N(Gt.get(this))}:function(...e){return N(n.apply(Le(this),e))}}function nr(n){return typeof n=="function"?tr(n):(n instanceof IDBTransaction&&Zn(n),Qn(n,Yn())?new Proxy(n,He):n)}function N(n){if(n instanceof IDBRequest)return Xn(n);if(xe.has(n))return xe.get(n);const e=nr(n);return e!==n&&(xe.set(n,e),Ze.set(e,n)),e}const Le=n=>Ze.get(n);function rr(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=N(o);return r&&o.addEventListener("upgradeneeded",c=>{r(N(o.result),c.oldVersion,c.newVersion,N(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const sr=["get","getKey","getAll","getAllKeys","count"],ir=["put","add","delete","clear"],Be=new Map;function _t(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Be.get(e))return Be.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ir.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sr.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Be.set(e,i),i}er(n=>({...n,get:(e,t,r)=>_t(e,t)||n.get(e,t,r),has:(e,t)=>!!_t(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ar(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ar(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qe="@firebase/app",yt="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new qt("@firebase/app"),cr="@firebase/app-compat",lr="@firebase/analytics-compat",ur="@firebase/analytics",hr="@firebase/app-check-compat",dr="@firebase/app-check",fr="@firebase/auth",pr="@firebase/auth-compat",mr="@firebase/database",gr="@firebase/database-compat",_r="@firebase/functions",yr="@firebase/functions-compat",Er="@firebase/installations",br="@firebase/installations-compat",Ir="@firebase/messaging",Tr="@firebase/messaging-compat",wr="@firebase/performance",vr="@firebase/performance-compat",Ar="@firebase/remote-config",Pr="@firebase/remote-config-compat",Vr="@firebase/storage",Sr="@firebase/storage-compat",Rr="@firebase/firestore",Dr="@firebase/firestore-compat",kr="firebase",Cr="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]",Nr={[qe]:"fire-core",[cr]:"fire-core-compat",[ur]:"fire-analytics",[lr]:"fire-analytics-compat",[dr]:"fire-app-check",[hr]:"fire-app-check-compat",[fr]:"fire-auth",[pr]:"fire-auth-compat",[mr]:"fire-rtdb",[gr]:"fire-rtdb-compat",[_r]:"fire-fn",[yr]:"fire-fn-compat",[Er]:"fire-iid",[br]:"fire-iid-compat",[Ir]:"fire-fcm",[Tr]:"fire-fcm-compat",[wr]:"fire-perf",[vr]:"fire-perf-compat",[Ar]:"fire-rc",[Pr]:"fire-rc-compat",[Vr]:"fire-gcs",[Sr]:"fire-gcs-compat",[Rr]:"fire-fst",[Dr]:"fire-fst-compat","fire-js":"fire-js",[kr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Map,Ke=new Map;function Or(n,e){try{n.container.addComponent(e)}catch(t){$.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ee(n){const e=n.name;if(Ke.has(e))return $.debug(`There were multiple attempts to register component ${e}.`),!1;Ke.set(e,n);for(const t of ye.values())Or(t,n);return!0}function Fr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},O=new Ht("app","Firebase",Mr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=Cr;function Wt(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ge,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw O.create("bad-app-name",{appName:String(s)});if(t||(t=zt()),!t)throw O.create("no-options");const i=ye.get(s);if(i){if(je(t,i.options)&&je(r,i.config))return i;throw O.create("duplicate-app",{appName:s})}const o=new Hn(s);for(const c of Ke.values())o.addComponent(c);const a=new xr(t,r,o);return ye.set(s,a),a}function Br(n=Ge){const e=ye.get(n);if(!e&&n===Ge&&zt())return Wt();if(!e)throw O.create("no-app",{appName:n});return e}function K(n,e,t){var r;let s=(r=Nr[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$.warn(a.join(" "));return}Ee(new re(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="firebase-heartbeat-database",Ur=1,se="firebase-heartbeat-store";let $e=null;function Qt(){return $e||($e=rr($r,Ur,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(se)}}}).catch(n=>{throw O.create("idb-open",{originalErrorMessage:n.message})})),$e}async function jr(n){try{return await(await Qt()).transaction(se).objectStore(se).get(Yt(n))}catch(e){if(e instanceof X)$.warn(e.message);else{const t=O.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$.warn(t.message)}}}async function Et(n,e){try{const r=(await Qt()).transaction(se,"readwrite");await r.objectStore(se).put(e,Yt(n)),await r.done}catch(t){if(t instanceof X)$.warn(t.message);else{const r=O.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$.warn(r.message)}}}function Yt(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=1024,Hr=30*24*60*60*1e3;class qr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kr(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bt(),{heartbeatsToSend:r,unsentEntries:s}=Gr(this._heartbeatsCache.heartbeats),i=_e(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bt(){return new Date().toISOString().substring(0,10)}function Gr(n,e=zr){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),It(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),It(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mn()?xn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jr(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Et(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Et(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function It(n){return _e(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){Ee(new re("platform-logger",e=>new or(e),"PRIVATE")),Ee(new re("heartbeat",e=>new qr(e),"PRIVATE")),K(qe,yt,n),K(qe,yt,"esm2017"),K("fire-js","")}Wr("");var Qr="firebase",Yr="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K(Qr,Yr,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}A.UNAUTHENTICATED=new A(null),A.GOOGLE_CREDENTIALS=new A("google-credentials-uid"),A.FIRST_PARTY=new A("first-party-uid"),A.MOCK_USER=new A("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new qt("@firebase/firestore");function be(n,...e){if(W.logLevel<=g.DEBUG){const t=e.map(tt);W.debug(`Firestore (${Z}): ${n}`,...t)}}function et(n,...e){if(W.logLevel<=g.ERROR){const t=e.map(tt);W.error(`Firestore (${Z}): ${n}`,...t)}}function Jt(n,...e){if(W.logLevel<=g.WARN){const t=e.map(tt);W.warn(`Firestore (${Z}): ${n}`,...t)}}function tt(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(n="Unexpected state"){const e=`FIRESTORE (${Z}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function x(n,e){n||_()}function Pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="ok",Jr="cancelled",ee="unknown",f="invalid-argument",Xr="deadline-exceeded",Zr="not-found",es="permission-denied",We="unauthenticated",ts="resource-exhausted",Q="failed-precondition",ns="aborted",rs="out-of-range",Xt="unimplemented",ss="internal",is="unavailable";class u extends X{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class os{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(A.UNAUTHENTICATED))}shutdown(){}}class as{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cs{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(x(typeof e.accessToken=="string"),new Zt(e.accessToken,new A(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ls{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=A.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class us{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ls(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(A.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ds{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(x(typeof e.token=="string"),new hs(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ie{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ie("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ie&&e.projectId===this.projectId&&e.database===this.database}}class oe{constructor(e,t,r){t===void 0?t=0:t>e.length&&_(),r===void 0?r=e.length-t:r>e.length-t&&_(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return oe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class I extends oe{construct(e,t,r){return new I(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(f,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new I(t)}static emptyPath(){return new I([])}}const ps=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends oe{construct(e,t,r){return new P(e,t,r)}static isValidIdentifier(e){return ps.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new P(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new u(f,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new u(f,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new u(f,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new u(f,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(I.fromString(e))}static fromName(e){return new v(I.fromString(e).popFirst(5))}static empty(){return new v(I.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&I.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return I.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new I(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e,t){if(!t)throw new u(f,`Function ${n}() cannot be called with an empty ${e}.`)}function wt(n){if(!v.isDocumentKey(n))throw new u(f,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vt(n){if(v.isDocumentKey(n))throw new u(f,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_()}function he(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(f,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nt(n);throw new u(f,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fe=null;function ms(){return fe===null?fe=function(){return 268435456+Math.round(2147483648*Math.random())}():fe++,"0x"+fe.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){return n==null}function Ie(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,d;function Pt(n){if(n===void 0)return et("RPC_ERROR","HTTP error has no status"),ee;switch(n){case 200:return Tt;case 400:return Q;case 401:return We;case 403:return es;case 404:return Zr;case 409:return ns;case 416:return rs;case 429:return ts;case 499:return Jr;case 500:return ee;case 501:return Xt;case 503:return is;case 504:return Xr;default:return n>=200&&n<300?Tt:n>=400&&n<500?Q:n>=500&&n<600?ss:ee}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(d=At||(At={}))[d.OK=0]="OK",d[d.CANCELLED=1]="CANCELLED",d[d.UNKNOWN=2]="UNKNOWN",d[d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d[d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d[d.NOT_FOUND=5]="NOT_FOUND",d[d.ALREADY_EXISTS=6]="ALREADY_EXISTS",d[d.PERMISSION_DENIED=7]="PERMISSION_DENIED",d[d.UNAUTHENTICATED=16]="UNAUTHENTICATED",d[d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d[d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d[d.ABORTED=10]="ABORTED",d[d.OUT_OF_RANGE=11]="OUT_OF_RANGE",d[d.UNIMPLEMENTED=12]="UNIMPLEMENTED",d[d.INTERNAL=13]="INTERNAL",d[d.UNAVAILABLE=14]="UNAVAILABLE",d[d.DATA_LOSS=15]="DATA_LOSS";class ys extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(t,r,s,i,o){const a=ms(),c=this.I(t,r);be("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(l,i,o),this.p(t,c,l,s).then(h=>(be("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Jt("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}g(t,r,s,i,o,a){return this.R(t,r,s,i,o)}V(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Z}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}I(t,r){const s=_s[t];return`${this.m}/v1/${r}:${s}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new u(Pt(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new u(Pt(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Es(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function b(n,e){return n<e?-1:n>e?1:0}function nn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function de(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Is("Invalid base64 string: "+i):i}}(e);return new k(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new k(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return b(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}k.EMPTY_BYTE_STRING=new k("");const Ts=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function U(n){if(x(!!n),typeof n=="string"){let e=0;const t=Ts.exec(n);if(x(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:E(n.seconds),nanos:E(n.nanos)}}function E(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ae(n){return typeof n=="string"?k.fromBase64String(n):k.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(f,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(f,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(f,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(f,"Timestamp seconds out of range: "+e)}static now(){return S.fromMillis(Date.now())}static fromDate(e){return S.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new S(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?b(this.nanoseconds,e.nanoseconds):b(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function sn(n){const e=n.mapValue.fields.__previous_value__;return rn(e)?sn(e):e}function ce(n){const e=U(n.mapValue.fields.__local_write_time__.timestampValue);return new S(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={fields:{__type__:{stringValue:"__max__"}}};function j(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rn(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:_()}function Te(n,e){if(n===e)return!0;const t=j(n);if(t!==j(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ce(n).isEqual(ce(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=U(s.timestampValue),a=U(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ae(s.bytesValue).isEqual(ae(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return E(s.geoPointValue.latitude)===E(i.geoPointValue.latitude)&&E(s.geoPointValue.longitude)===E(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return E(s.integerValue)===E(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=E(s.doubleValue),a=E(i.doubleValue);return o===a?Ie(o)===Ie(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return nn(n.arrayValue.values||[],e.arrayValue.values||[],Te);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Vt(o)!==Vt(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Te(o[c],a[c])))return!1;return!0}(n,e);default:return _()}}function le(n,e){return(n.values||[]).find(t=>Te(t,e))!==void 0}function we(n,e){if(n===e)return 0;const t=j(n),r=j(e);if(t!==r)return b(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return b(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=E(i.integerValue||i.doubleValue),c=E(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return St(n.timestampValue,e.timestampValue);case 4:return St(ce(n),ce(e));case 5:return b(n.stringValue,e.stringValue);case 6:return function(i,o){const a=ae(i),c=ae(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=b(a[l],c[l]);if(h!==0)return h}return b(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=b(E(i.latitude),E(o.latitude));return a!==0?a:b(E(i.longitude),E(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const h=we(a[l],c[l]);if(h)return h}return b(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===pe&&o===pe)return 0;if(i===pe)return 1;if(o===pe)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let m=0;m<c.length&&m<h.length;++m){const p=b(c[m],h[m]);if(p!==0)return p;const y=we(a[c[m]],l[h[m]]);if(y!==0)return y}return b(c.length,h.length)}(n.mapValue,e.mapValue);default:throw _()}}function St(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return b(n,e);const t=U(n),r=U(e),s=b(t.seconds,r.seconds);return s!==0?s:b(t.nanos,r.nanos)}function on(n){return!!n&&"arrayValue"in n}function Rt(n){return!!n&&"nullValue"in n}function Dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ue(n){return!!n&&"mapValue"in n}function te(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return de(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=te(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=te(n.arrayValue.values[t]);return e}return Object.assign({},n)}class kt{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{}class D extends an{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ws(e,t,r):t==="array-contains"?new Ps(e,r):t==="in"?new Vs(e,r):t==="not-in"?new Ss(e,r):t==="array-contains-any"?new Rs(e,r):new D(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vs(e,r):new As(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(we(t,this.value)):t!==null&&j(this.value)===j(t)&&this.matchesComparison(we(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ve extends an{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new Ve(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class ws extends D{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class vs extends D{constructor(e,t){super(e,"in",t),this.keys=cn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class As extends D{constructor(e,t){super(e,"not-in",t),this.keys=cn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cn(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>v.fromName(r.referenceValue))}class Ps extends D{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return on(t)&&le(t.arrayValue,this.value)}}class Vs extends D{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&le(this.value.arrayValue,t)}}class Ss extends D{constructor(e,t){super(e,"not-in",t)}matches(e){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!le(this.value.arrayValue,t)}}class Rs extends D{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!on(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>le(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.timestamp=e}static fromTimestamp(e){return new w(e)}static min(){return new w(new S(0,0))}static max(){return new w(new S(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||T.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,T.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,T.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new me(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new me(this.root,e,this.comparator,!1)}getReverseIterator(){return new me(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new me(this.root,e,this.comparator,!0)}}class me{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class T{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??T.RED,this.left=s??T.EMPTY,this.right=i??T.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new T(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return T.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return T.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,T.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,T.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}T.EMPTY=null,T.RED=!0,T.BLACK=!1;T.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,r,s,i){return this}insert(e,t,r){return new T(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ct(this.data.getIterator())}getIteratorFrom(e){return new Ct(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class Ct{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new z([])}unionWith(e){let t=new ue(P.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new z(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.value=e}static empty(){return new R({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ue(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=te(t)}setAll(e){let t=P.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=te(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ue(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Te(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ue(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){de(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new R(te(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new C(e,0,w.min(),w.min(),w.min(),R.empty(),0)}static newFoundDocument(e,t,r,s){return new C(e,1,t,w.min(),r,s,0)}static newNoDocument(e,t){return new C(e,2,t,w.min(),w.min(),R.empty(),0)}static newUnknownDocument(e,t){return new C(e,3,t,w.min(),w.min(),R.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=R.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=R.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof C&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new C(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function Nt(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Ds(n,e,t,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Cs(n){const e=Pe(n);if(e.S===null){e.S=[];const t=new Set;for(const i of e.explicitOrderBy)e.S.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(P.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.S.push(new Qe(i,r))}),t.has(P.keyField().canonicalString())||e.S.push(new Qe(P.keyField(),r))}return e.S}function Ns(n){const e=Pe(n);return e.N||(e.N=Os(e,Cs(n))),e.N}function Os(n,e){if(n.limitType==="F")return Nt(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qe(s.field,i)});const t=n.endAt?new kt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new kt(n.startAt.position,n.startAt.inclusive):null;return Nt(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ie(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ie(s)?"-0":s}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this._=void 0}}class Ms extends Se{}class xs extends Se{constructor(e){super(),this.elements=e}}class Ls extends Se{constructor(e){super(),this.elements=e}}class Bs extends Se{constructor(e,t){super(),this.serializer=e,this.q=t}}class B{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new B}static exists(e){return new B(void 0,e)}static updateTime(e){return new B(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Re{}class ln extends Re{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rt extends Re{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class un extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $s extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={asc:"ASCENDING",desc:"DESCENDING"},js={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zs={and:"AND",or:"OR"};class Hs{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ye(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qs(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Gs(n,e){return Ye(n,e.toTimestamp())}function Ot(n){return x(!!n),w.fromTimestamp(function(t){const r=U(t);return new S(r.seconds,r.nanos)}(n))}function st(n,e){return function(r){return new I(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Je(n,e){return st(n.databaseId,e.path)}function Ks(n,e){const t=function(s){const i=I.fromString(s);return x(dn(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(f,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(f,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(function(s){return x(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(t))}function Ft(n,e){return st(n.databaseId,e)}function Ws(n){return new I(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mt(n,e,t){return{name:Je(n,e),fields:t.value.mapValue.fields}}function Qs(n,e){let t;if(e instanceof ln)t={update:Mt(n,e.key,e.value)};else if(e instanceof un)t={delete:Je(n,e.key)};else if(e instanceof rt)t={update:Mt(n,e.key,e.data),updateMask:ei(e.fieldMask)};else{if(!(e instanceof $s))return _();t={verify:Je(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ls)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),increment:a.q};throw _()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gs(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(n,e.precondition)),t}function Ys(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ft(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ft(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return hn(Ve.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(m){return{field:G(m.field),direction:Js(m.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||gs(l)?l:{value:l}}(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Js(n){return Us[n]}function Xs(n){return js[n]}function Zs(n){return zs[n]}function G(n){return{fieldPath:n.canonicalString()}}function hn(n){return n instanceof D?function(t){if(t.op==="=="){if(Dt(t.value))return{unaryFilter:{field:G(t.field),op:"IS_NAN"}};if(Rt(t.value))return{unaryFilter:{field:G(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dt(t.value))return{unaryFilter:{field:G(t.field),op:"IS_NOT_NAN"}};if(Rt(t.value))return{unaryFilter:{field:G(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:G(t.field),op:Xs(t.op),value:t.value}}}(n):n instanceof Ve?function(t){const r=t.getFilters().map(s=>hn(s));return r.length===1?r[0]:{compositeFilter:{op:Zs(t.op),filters:r}}}(n):_()}function ei(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return new Hs(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J=!1}Y(){if(this.J)throw new u(Q,"The client has already been terminated.")}R(e,t,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===We&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(ee,s.toString())})}g(e,t,r,s){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.g(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===We&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(ee,i.toString())})}terminate(){this.J=!0}}async function ot(n,e){const t=Pe(n),r=Ws(t.serializer)+"/documents",s={writes:e.map(i=>Qs(t.serializer,i))};await t.R("Commit",r,s)}async function ni(n,e){const t=Pe(n),r=Ys(t.serializer,Ns(e));return(await t.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(o,a,c){const l=Ks(o,a.name),h=Ot(a.updateTime),m=a.createTime?Ot(a.createTime):w.min(),p=new R({mapValue:{fields:a.fields}}),y=C.newFoundDocument(l,h,m,p);return c&&y.setHasCommittedMutations(),c?y.setHasCommittedMutations():y}(t.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Map;function De(n){if(n._terminated)throw new u(Q,"The client has already been terminated.");if(!ne.has(n)){be("ComponentProvider","Initializing Datastore");const e=function(i){return new ys(i,fetch.bind(null))}(function(i,o,a,c){return new fs(i,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tn(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=it(n._databaseId),r=function(i,o,a,c){return new ti(i,o,a,c)}(n._authCredentials,n._appCheckCredentials,e,t);ne.set(n,r)}return ne.get(n)}class xt{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new u(f,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(f,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,c){if(o===!0&&c===!0)throw new u(f,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tn((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new u(f,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new u(f,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new u(f,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ke{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new u(Q,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(Q,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xt(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new os;switch(r.type){case"firstParty":return new us(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new u(f,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ne.get(t);r&&(be("ComponentProvider","Removing Datastore"),ne.delete(t),r.terminate())}(this),Promise.resolve()}}function ri(n,e){const t=typeof n=="object"?n:Br(),r=typeof n=="string"?n:e||"(default)",s=Fr(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Nn("firestore");i&&si(s,...i)}return s}function si(n,e,t,r={}){var s;const i=(n=he(n,ke))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=A.MOCK_USER;else{a=Fn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new u(f,"mockUserToken must contain 'sub' or 'user_id' field!");c=new A(l)}n._authCredentials=new as(new Zt(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ce(this.firestore,e,this._query)}}class V{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new F(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new V(this.firestore,e,this._key)}}class F extends Ce{constructor(e,t,r){super(e,t,function(i){return new ks(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new V(this.firestore,null,new v(e))}withConverter(e){return new F(this.firestore,e,this._path)}}function fn(n,e,...t){if(n=M(n),en("collection","path",e),n instanceof ke){const r=I.fromString(e,...t);return vt(r),new F(n,null,r)}{if(!(n instanceof V||n instanceof F))throw new u(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(I.fromString(e,...t));return vt(r),new F(n.firestore,null,r)}}function Ne(n,e,...t){if(n=M(n),arguments.length===1&&(e=bs.newId()),en("doc","path",e),n instanceof ke){const r=I.fromString(e,...t);return wt(r),new V(n,null,new v(r))}{if(!(n instanceof V||n instanceof F))throw new u(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(I.fromString(e,...t));return wt(r),new V(n.firestore,n instanceof F?n.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Y(k.fromBase64String(e))}catch(t){throw new u(f,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Y(k.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(f,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(f,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(f,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return b(this._lat,e._lat)||b(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=/^__.*__$/;class oi{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ln(e,this.data,t,this.fieldTransforms)}}class pn{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class lt{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.X(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new lt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,nt:!1});return s.it(e),s}st(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,nt:!1});return s.X(),s}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return Ae(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(mn(this.tt)&&ii.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class ai{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||it(e)}lt(e,t,r,s=!1){return new lt({tt:e,methodName:t,ct:r,path:P.emptyPath(),nt:!1,_t:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gn(n){const e=n._freezeSettings(),t=it(n._databaseId);return new ai(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ci(n,e,t,r,s,i={}){const o=n.lt(i.merge||i.mergeFields?2:0,e,t,s);ut("Data must be an object, but it was:",o,r);const a=_n(r,o);let c,l;if(i.merge)c=new z(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const p=Xe(e,m,t);if(!o.contains(p))throw new u(f,`Field '${p}' is specified in your field mask but missing from your input data.`);En(h,p)||h.push(p)}c=new z(h),l=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,l=o.fieldTransforms;return new oi(new R(a),c,l)}class Fe extends at{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fe}}function li(n,e,t,r){const s=n.lt(1,e,t);ut("Data must be an object, but it was:",s,r);const i=[],o=R.empty();de(r,(c,l)=>{const h=ht(e,c,t);l=M(l);const m=s.st(h);if(l instanceof Fe)i.push(h);else{const p=Me(l,m);p!=null&&(i.push(h),o.set(h,p))}});const a=new z(i);return new pn(o,a,s.fieldTransforms)}function ui(n,e,t,r,s,i){const o=n.lt(1,e,t),a=[Xe(e,r,t)],c=[s];if(i.length%2!=0)throw new u(f,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Xe(e,i[p])),c.push(i[p+1]);const l=[],h=R.empty();for(let p=a.length-1;p>=0;--p)if(!En(l,a[p])){const y=a[p];let H=c[p];H=M(H);const wn=o.st(y);if(H instanceof Fe)l.push(y);else{const dt=Me(H,wn);dt!=null&&(l.push(y),h.set(y,dt))}}const m=new z(l);return new pn(h,m,o.fieldTransforms)}function Me(n,e){if(yn(n=M(n)))return ut("Unsupported field value:",e,n),_n(n,e);if(n instanceof at)return function(r,s){if(!mn(s.tt))throw s.ut(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ut(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.nt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Me(a,s.ot(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=M(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fs(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=S.fromDate(r);return{timestampValue:Ye(s.serializer,i)}}if(r instanceof S){const i=new S(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ye(s.serializer,i)}}if(r instanceof ct)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Y)return{bytesValue:qs(s.serializer,r._byteString)};if(r instanceof V){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.ut(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:st(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.ut(`Unsupported field value: ${nt(r)}`)}(n,e)}function _n(n,e){const t={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):de(n,(r,s)=>{const i=Me(s,e.rt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function yn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof S||n instanceof ct||n instanceof Y||n instanceof V||n instanceof at)}function ut(n,e,t){if(!yn(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=nt(t);throw r==="an object"?e.ut(n+" a custom object"):e.ut(n+" "+r)}}function Xe(n,e,t){if((e=M(e))instanceof Oe)return e._internalPath;if(typeof e=="string")return ht(n,e);throw Ae("Field path arguments must be of type string or ",n,!1,void 0,t)}const hi=new RegExp("[~\\*/\\[\\]]");function ht(n,e,t){if(e.search(hi)>=0)throw Ae(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Oe(...e.split("."))._internalPath}catch{throw Ae(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ae(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new u(f,a+n+c)}function En(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new V(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bn extends di{data(){return super.data()}}class fi{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function pi(n,e){return typeof e=="string"?ht(n,e):e instanceof Oe?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gi extends class{convertValue(t,r="none"){switch(j(t)){case 0:return null;case 1:return t.booleanValue;case 2:return E(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw _()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const s={};return de(t,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertGeoPoint(t){return new ct(E(t.latitude),E(t.longitude))}convertArray(t,r){return(t.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(t,r){switch(r){case"previous":const s=sn(t);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(ce(t));default:return null}}convertTimestamp(t){const r=U(t);return new S(r.seconds,r.nanos)}convertDocumentKey(t,r){const s=I.fromString(t);x(dn(s));const i=new ie(s.get(1),s.get(3)),o=new v(s.popFirst(5));return i.isEqual(r)||et(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Y(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new V(this.firestore,null,t)}}function In(n){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new u(Xt,"limitToLast() queries require specifying at least one orderBy() clause")})((n=he(n,Ce))._query);const e=De(n.firestore),t=new gi(n.firestore);return ni(e,n._query).then(r=>{const s=r.map(i=>new bn(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new fi(n,s)})}function _i(n,e,t){const r=mi((n=he(n,V)).converter,e,t),s=ci(gn(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return ot(De(n.firestore),[s.toMutation(n._key,B.none())])}function yi(n,e,t,...r){const s=gn((n=he(n,V)).firestore);let i;return i=typeof(e=M(e))=="string"||e instanceof Oe?ui(s,"updateDoc",n._key,e,t,r):li(s,"updateDoc",n._key,e),ot(De(n.firestore),[i.toMutation(n._key,B.exists(!0))])}function Tn(n){return ot(De((n=he(n,V)).firestore),[new un(n._key,B.none())])}(function(){(function(t){Z=t})(`${Lr}_lite`),Ee(new re("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new ke(new cs(e.getProvider("auth-internal")),new ds(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new u(f,'"projectId" not provided in firebase.initializeApp.');return new ie(a.options.projectId,c)}(s,t),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),K("firestore-lite","4.4.0",""),K("firestore-lite","4.4.0","esm2017")})();const Ei={apiKey:"AIzaSyDzY8uWN8tw0lKcnaTG0N96NeGpDn2AIh4",authDomain:"maps-test-e438a.firebaseapp.com",projectId:"maps-test-e438a",storageBucket:"maps-test-e438a.appspot.com",messagingSenderId:"44156980471",appId:"1:44156980471:web:a5a55c8c4786a1d34fd7f2"},bi=Wt(Ei),J=ri(bi),Ii=async()=>{const n=fn(J,"markers");return(await In(n)).docs.map(r=>({...r.data(),id:r.id}))},Ti=async(n,e)=>{const t=Ne(J,"markers",e);await _i(t,n)},wi=async()=>{const n=fn(J,"markers");(await In(n)).forEach(async t=>{await Tn(Ne(J,"markers",t.id))})},Lt=async n=>{const e=Ne(J,"markers",n);await Tn(e)},Bt=async(n,e)=>{const t=Ne(J,"markers",e);await yi(t,{...n})};let ge=[],q=0;async function vi(){var i;const{Map:n}=await google.maps.importLibrary("maps"),{Marker:e}=await google.maps.importLibrary("marker"),t=await Ii(),r=new n(document.getElementById("map"),{center:{lat:37.39094933041195,lng:-122.02503913145092},zoom:14,mapId:"4504f8b37365c3d0"});t.sort((o,a)=>o.next-a.next).forEach(o=>{const a=new e({position:o.location,draggable:!0,label:o.id,map:r});a.addListener("dragend",()=>{var l,h;let c={location:{lat:(l=a.getPosition())==null?void 0:l.lat(),lng:(h=a.getPosition())==null?void 0:h.lng()}};Bt(c,o.id.toString())}),a.addListener("dblclick",()=>{a.setMap(null),Lt(o.id.toString())}),q=Number(o.next),ge.push(a)});function s(o,a){const c=new e({position:o,draggable:!0,label:q.toString(),map:a});c.addListener("dblclick",()=>{c.setMap(null),Lt(l.id.toString())}),c.addListener("dragend",h=>{var p,y;let m={location:{lat:(p=c.getPosition())==null?void 0:p.lat(),lng:(y=c.getPosition())==null?void 0:y.lng()}};Bt(m,l.id.toString())});const l={location:{lat:o.lat(),lng:o.lng()},timestamp:new Date,next:q+1,id:q};Ti(l,l.id.toString()),q++,ge.push(c)}google.maps.event.addListener(r,"click",o=>{s(o.latLng,r)}),(i=document.getElementById("deleteButton"))==null||i.addEventListener("click",async()=>{ge.forEach(o=>o.setMap(null)),ge=[],q=0,wi()})}window.initMap=vi;
