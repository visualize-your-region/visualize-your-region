(self.webpackChunkvyr=self.webpackChunkvyr||[]).push([[550],{9550:(e,t,i)=>{"use strict";i.d(t,{Nt:()=>y,c:()=>b});var s=i(3169),n=i(5366),r=i(9861),a=i(653),l=i(5959);i(7254),i(810),i(5416),i(1116);const o=(0,s.i$)({passive:!0});let d=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return a.E;const t=(0,r.fI)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const s=new l.xQ,n="cdk-text-field-autofilled",d=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(n)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(n)&&(t.classList.remove(n),this._ngZone.run(()=>s.next({target:e.target,isAutofilled:!1}))):(t.classList.add(n),this._ngZone.run(()=>s.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",d,o),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:s,unlisten:()=>{t.removeEventListener("animationstart",d,o)}}),s}stopMonitoring(e){const t=(0,r.fI)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(s.t4),n.LFG(n.R0b))},e.\u0275prov=n.Yz7({factory:function(){return new e(n.LFG(s.t4),n.LFG(n.R0b))},token:e,providedIn:"root"}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ud]]}),e})();var h=i(7064),c=i(3070),m=i(1041);const _=new n.OlP("MAT_INPUT_VALUE_ACCESSOR"),p=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let f=0;class v{constructor(e,t,i,s){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=s}}const g=(0,h.FD)(v);let y=(()=>{class e extends g{constructor(e,t,i,n,r,a,o,d,u,h){super(a,n,r,i),this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=d,this._formField=h,this._uid="mat-input-"+f++,this.focused=!1,this.stateChanges=new l.xQ,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>(0,s.qK)().has(e));const c=this._elementRef.nativeElement,m=c.nodeName.toLowerCase();this._inputValueAccessor=o||c,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&u.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",e=>{const t=e.target;t.value||0!==t.selectionStart||0!==t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===m,this._isTextarea="textarea"===m,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,r.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=(0,r.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,s.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,r.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const i=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(i!==this._previousPlaceholder){const e=this._elementRef.nativeElement;this._previousPlaceholder=i,i?e.setAttribute("placeholder",i):e.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){p.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq),n.Y36(s.t4),n.Y36(m.a5,10),n.Y36(m.F,8),n.Y36(m.sg,8),n.Y36(h.rD),n.Y36(_,10),n.Y36(d),n.Y36(n.R0b),n.Y36(c.G_,8))},e.\u0275dir=n.lG2({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&n.NdJ("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(n.Ikx("disabled",t.disabled)("required",t.required),n.uIk("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required),n.ekj("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[n._Bn([{provide:c.Eo,useExisting:e}]),n.qOj,n.TTD]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[h.rD],imports:[[u,c.lN,h.BQ],u,c.lN]}),e})()}}]);