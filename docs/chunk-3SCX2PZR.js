import{B as v,D as Y,E as J,F as f,G as p,H as K,J as w,M as _,N as ye,O as ve,P as k,R as _e,S as Ce,T as Ve,W as Q,Z as De,_ as j,a as d,b as g,c as ce,d as he,e as fe,g as x,ga as ee,h as P,i as pe,j as c,k as y,l as z,m as M,n as me,o as h,p as u,q as Z,t as ge,u as A,v as E,x as F,y as a,z as X}from"./chunk-RBNB2MWR.js";var Ne=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(X),a(A))},e.\u0275dir=u({type:e});let t=e;return t})(),lt=(()=>{let e=class e extends Ne{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ge(e)))(o||e)}})(),e.\u0275dir=u({type:e,features:[v]});let t=e;return t})(),Oe=new y("");var ut={provide:Oe,useExisting:P(()=>W),multi:!0};function dt(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ct=new y(""),W=(()=>{let e=class e extends Ne{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(X),a(A),a(ct,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&w("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[k([ut]),v]});let t=e;return t})();function m(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function xe(t){return t!=null&&typeof t.length=="number"}var Pe=new y(""),ke=new y(""),ht=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,V=class{static min(e){return ft(e)}static max(e){return pt(e)}static required(e){return mt(e)}static requiredTrue(e){return gt(e)}static email(e){return yt(e)}static minLength(e){return vt(e)}static maxLength(e){return _t(e)}static pattern(e){return Ct(e)}static nullValidator(e){return je(e)}static compose(e){return He(e)}static composeAsync(e){return $e(e)}};function ft(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function pt(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function mt(t){return m(t.value)?{required:!0}:null}function gt(t){return t.value===!0?null:{required:!0}}function yt(t){return m(t.value)||ht.test(t.value)?null:{email:!0}}function vt(t){return e=>m(e.value)||!xe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function _t(t){return e=>xe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ct(t){if(!t)return je;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function je(t){return null}function Ge(t){return t!=null}function Te(t){return Ve(t)?ce(t):t}function Be(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ue(t,e){return e.map(n=>n(t))}function Vt(t){return!t.validate}function Re(t){return t.map(e=>Vt(e)?e:n=>e.validate(n))}function He(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(n){return Be(Ue(n,e))}}function Le(t){return t!=null?He(Re(t)):null}function $e(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(n){let i=Ue(n,e).map(Te);return fe(i).pipe(he(Be))}}function We(t){return t!=null?$e(Re(t)):null}function be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function qe(t){return t._rawValidators}function ze(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Me(t,e){let n=te(e);return te(t).forEach(r=>{B(n,r)||n.push(r)}),n}function Ae(t,e){return te(e).filter(n=>!B(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=We(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},D=class extends U{get formDirective(){return null}get path(){return null}},N=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},di=g(d({},Dt),{"[class.ng-submitted]":"isSubmitted"}),Ze=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(N,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),Xe=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(D,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var I="VALID",G="INVALID",C="PENDING",S="DISABLED";function re(t){return(q(t)?t.validators:t)||null}function bt(t){return Array.isArray(t)?Le(t):t||null}function oe(t,e){return(q(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?We(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ye(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new x(1e3,"");if(!i[n])throw new x(1001,"")}function Je(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new x(1002,"")})}var b=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===G}get pending(){return this.status==C}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let n=Te(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(G)?G:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},H=class extends b{constructor(e,n,i){super(re(n),oe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Je(this,!0,e),Object.keys(e).forEach(i=>{Ye(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=class extends H{};var Ke=new y("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function At(t,e){return[...e.path,t]}function Ee(t,e,n=se){ae(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ft(t,e),It(t,e),wt(t,e),Et(t,e)}function Fe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Et(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ae(t,e){let n=qe(t);e.validator!==null?t.setValidators(be(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=ze(t);e.asyncValidator!==null?t.setAsyncValidators(be(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=qe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=ze(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return L(e._rawValidators,i),L(e._rawAsyncValidators,i),n}function Ft(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Qe(t,e)})}function wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Qe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Qe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function It(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function St(t,e){t==null,ae(t,e)}function Nt(t,e){return $(t,e)}function Ot(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function xt(t){return Object.getPrototypeOf(t.constructor)===lt}function Pt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function kt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===W?n=o:xt(o)?i=o:r=o}),r||i||n||null}function jt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function we(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var T=class extends b{constructor(e=null,n,i){super(re(n),oe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Gt=t=>t instanceof T;var et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var tt=new y("");var Tt={provide:D,useExisting:P(()=>le)},le=(()=>{let e=class e extends D{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new E,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Ee(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Fe(i.control||null,i,!1),jt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Pt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Fe(r||null,i),Gt(o)&&(Ee(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);St(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Nt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Pe,10),a(ke,10),a(Ke,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&w("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:[M.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k([Tt]),v,Z]});let t=e;return t})();var Bt={provide:N,useExisting:P(()=>ue)},ue=(()=>{let e=class e extends N{set isDisabled(i){}constructor(i,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new E,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=kt(this,s)}ngOnChanges(i){this._added||this._setUpControl(),Ot(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(D,13),a(Pe,10),a(ke,10),a(Oe,10),a(tt,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[M.None,"formControlName","name"],isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[k([Bt]),v,Z]});let t=e;return t})();var Ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({});let t=e;return t})(),ne=class extends b{constructor(e,n,i){super(re(n),oe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Je(this,!1,e),e.forEach((i,r)=>{Ye(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Se(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var it=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),s={};return Se(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new H(o,s)}record(i,r=null){let o=this._reduceControls(i);return new ie(o,r)}control(i,r,o){let s={};return this.useNonNullable?(Se(r)?s=r:(s.validators=r,s.asyncValidators=o),new T(i,g(d({},s),{nonNullable:!0}))):new T(i,r,o)}array(i,r,o){let s=i.map(l=>this._createControl(l));return new ne(s,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof T)return i;if(i instanceof b)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,o,s)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=pe({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var nt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:tt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Ke,useValue:i.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[Ut]});let t=e;return t})();var rt=(()=>{let e=class e{set color(i){this._color=i,this.setStyle()}set errors(i){this._errors=i,this.setErrorMessage()}set value(i){this._value=i}constructor(i){this.element=i,this._color="red",this.htmlElement=i}ngOnInit(){this.setStyle()}setStyle(){this.htmlElement&&(this.htmlElement.nativeElement.style.color=this._color)}setErrorMessage(){if(!this.htmlElement)return;if(!this._errors){this.htmlElement.nativeElement.innerText="No hay errores";return}let i=Object.keys(this._errors);if(console.log(i),i.includes("required")){this.htmlElement.nativeElement.innerText="Este campo es requerido";return}if(i.includes("minlength")){let r=this._errors.minlength.requiredLength,o=this._errors.minlength.actualLength;this.htmlElement.nativeElement.innerText=`M\xEDnimo ${o}/${r} caracteres`;return}if(i.includes("email")){this.htmlElement.nativeElement.innerText="No tiene formato de email";return}}};e.\u0275fac=function(r){return new(r||e)(a(A))},e.\u0275dir=u({type:e,selectors:[["","customLabel",""]],inputs:{color:"color",errors:"errors",value:"value"}});let t=e;return t})();var ot=(()=>{let e=class e{constructor(){this.formBuilder=z(it),this.color="green",this.myForm=this.formBuilder.group({name:["",[V.required,V.minLength(6),V.email]]})}changeColor(){this.color="#xxxxxx".replace(/x/g,i=>(Math.random()*16|0).toString(16))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=me({type:e,selectors:[["ng-component"]],decls:22,vars:8,consts:[[3,"formGroup"],[1,"row","g-3","align-items-center","mb-3"],[1,"col-auto"],["formControlName","name","type","text",1,"form-control"],["customLabel","",3,"color","value","errors"],[1,"row"],[1,"col"],[1,"btn","btn-primary",3,"click"],[1,"mt-5"]],template:function(r,o){if(r&1&&(f(0,"h1"),_(1,"Agregar Producto"),p(),K(2,"hr"),f(3,"form",0)(4,"div",1)(5,"div",2)(6,"label"),_(7,"Nombre:"),p()(),f(8,"div",2),K(9,"input",3),p(),f(10,"div",2)(11,"span",4),_(12,"Temporal"),p()()(),f(13,"div",5)(14,"div",6)(15,"button",7),w("click",function(){return o.changeColor()}),_(16," Cambiar color "),p()()()(),f(17,"pre",8),_(18),_e(19,"json"),p(),f(20,"p"),_(21),p()),r&2){let s,l,de;F(3),Y("formGroup",o.myForm),F(8),Y("color",o.color)("value",(s=o.myForm.get("name"))==null?null:s.value)("errors",(l=o.myForm.get("name"))==null?null:l.errors),F(7),ye(Ce(19,6,(de=o.myForm.get("name"))==null?null:de.errors)),F(3),ve("Color: ",o.color,"")}},dependencies:[et,W,Ze,Xe,le,ue,rt,De]});let t=e;return t})();var Lt=[{path:"",children:[{path:"product",component:ot},{path:"**",redirectTo:"product"}]}],st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[ee.forChild(Lt),ee]});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[j]});let t=e;return t})();var Ni=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[j,st,nt,at]});let t=e;return t})();export{Ni as ProductsModule};