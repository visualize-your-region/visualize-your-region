(self.webpackChunkvyr=self.webpackChunkvyr||[]).push([[592],{7217:(e,t,i)=>{"use strict";i.d(t,{k:()=>h,g:()=>p});var s=i(7064),n=i(7388),o=i(9861),a=i(6136),r=i(5366);let l=0;class c{}const d=(0,s.Id)(c);let h=(()=>{class e extends d{constructor(e,t,i,s,n){super(),this._ngZone=e,this._elementRef=t,this._ariaDescriber=i,this._renderer=s,this._animationMode=n,this._hasContent=!1,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=l++}get color(){return this._color}set color(e){this._setColor(e),this._color=e}get overlap(){return this._overlap}set overlap(e){this._overlap=(0,o.Ig)(e)}get description(){return this._description}set description(e){if(e!==this._description){const t=this._badgeElement;this._updateHostAriaDescription(e,this._description),this._description=e,t&&(e?t.setAttribute("aria-label",e):t.removeAttribute("aria-label"))}}get hidden(){return this._hidden}set hidden(e){this._hidden=(0,o.Ig)(e)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}ngOnChanges(e){const t=e.content;if(t){const e=t.currentValue;this._hasContent=null!=e&&`${e}`.trim().length>0,this._updateTextContent()}}ngOnDestroy(){const e=this._badgeElement;e&&(this.description&&this._ariaDescriber.removeDescription(e,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(e))}getBadgeElement(){return this._badgeElement}_updateTextContent(){return this._badgeElement?this._badgeElement.textContent=this._stringifyContent():this._badgeElement=this._createBadgeElement(),this._badgeElement}_createBadgeElement(){const e=this._renderer.createElement("span"),t="mat-badge-active",i="mat-badge-content";return this._clearExistingBadges(i),e.setAttribute("id",`mat-badge-content-${this._id}`),e.classList.add(i),e.textContent=this._stringifyContent(),"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this.description&&e.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateHostAriaDescription(e,t){const i=this._updateTextContent();t&&this._ariaDescriber.removeDescription(i,t),e&&this._ariaDescriber.describe(i,e)}_setColor(e){if(e!==this._color){const t=this._elementRef.nativeElement.classList;this._color&&t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}}_clearExistingBadges(e){const t=this._elementRef.nativeElement;let i=t.children.length;for(;i--;){const s=t.children[i];s.classList.contains(e)&&t.removeChild(s)}}_stringifyContent(){const e=this.content;return null==e?"":`${e}`}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.R0b),r.Y36(r.SBq),r.Y36(n.$s),r.Y36(r.Qsj),r.Y36(a.Qb,8))},e.\u0275dir=r.lG2({type:e,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,t){2&e&&r.ekj("mat-badge-overlap",t.overlap)("mat-badge-above",t.isAbove())("mat-badge-below",!t.isAbove())("mat-badge-before",!t.isAfter())("mat-badge-after",t.isAfter())("mat-badge-small","small"===t.size)("mat-badge-medium","medium"===t.size)("mat-badge-large","large"===t.size)("mat-badge-hidden",t.hidden||!t._hasContent)("mat-badge-disabled",t.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[r.qOj,r.TTD]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.rt,s.BQ],s.BQ]}),e})()},7997:(e,t,i)=>{"use strict";i.d(t,{T:()=>w});var s=i(173),n=i(529),o=i(9103),a=i(1723),r=i(1840),l=i(7701),c=i(1041),d=i(4884),h=i(3837),p=i(5366),u=i(9348),g=i(2693),m=i(3070),f=i(1116),b=i(3841),v=i(9550),_=i(9961),A=i(7064),x=i(649);const C=["input"];function y(e,t){if(1&e&&(p.TgZ(0,"mat-option",11),p._uU(1),p.ALo(2,"translate"),p.qZA()),2&e){const e=t.$implicit;p.Q6J("value",e),p.xp6(1),p.hij(" ",p.lcZ(2,2,e.label)," ")}}function Z(e,t){if(1&e&&(p.TgZ(0,"mat-option",11),p._uU(1),p.qZA()),2&e){const e=t.$implicit;p.Q6J("value",e),p.xp6(1),p.hij(" ",e.nome," ")}}function D(e,t){1&e&&(p.TgZ(0,"mat-hint"),p._uU(1),p.ALo(2,"translate"),p.qZA()),2&e&&(p.xp6(1),p.Oqu(p.lcZ(2,1,"components.region-selector.select-level")))}const B=function(e){return{selected:e}};let w=(()=>{class e{constructor(e,t,i){this.pubsub=e,this.http=t,this.cdr=i,this.considerProjectState=!0,this.onSelect=new p.vpe,this.filterCriterion=new c.NI,this.fetchedData=[],this.filteredData=[],this.options=[{label:"model-constants.state",value:"state",classRef:d.Z},{label:"model-constants.mesoregion",value:"mesoregions",classRef:r.y},{label:"model-constants.microregion",value:"microregions",classRef:a.d},{label:"model-constants.municipy",value:"municipalities",classRef:o.m}],this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.pubsub.getAsBehaviorSubject(h.Y.GLOBAL_STATE_CHANGE).subscribe(e=>this.state=e)),this.subscriptions.push(this.filterCriterion.valueChanges.pipe((0,l.b)(400)).subscribe(this.filterRegion.bind(this)))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}onLevelChange(e){if(this.region=null,this.fetchedData=[],this.flagSelected=!0,this.filterCriterion.setValue(null),"state"===e.value){const e=this.http.get("/assets/configurations/payloads/br/states.json").subscribe(t=>{var i,s;t=t.filter(({sigla:e})=>n.N.constants.states.supported.indexOf(e)>=0),this.considerProjectState&&(t=t.filter(({sigla:e})=>e===this.state.initials)),this.fetchedData=t,this.filteredData=this.fetchedData.slice(0,10),null===(s=null===(i=this.input)||void 0===i?void 0:i.nativeElement)||void 0===s||s.focus(),e.unsubscribe()})}else{const t=this.http.get(`assets/configurations/payloads/br/${e.value}-of-${this.state.initials.toLowerCase()}.json`).subscribe(e=>{var i,s;this.fetchedData=e,this.filteredData=this.fetchedData.slice(0,10),null===(s=null===(i=this.input)||void 0===i?void 0:i.nativeElement)||void 0===s||s.focus(),t.unsubscribe()})}}filterRegion(e){this.flagSelected?this.flagSelected=!1:(this.filteredData=this.fetchedData.filter(t=>`${t.id}`===e||s.x.contains(t.nome,e)),this.cdr.detectChanges())}onRegionSelection(e){this.flagSelected=!0,this.region=this.level.classRef.build(e),this.filterCriterion.setValue(e.nome),this.onSelect.emit(this.region)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.A),p.Y36(g.eN),p.Y36(p.sBO))},e.\u0275cmp=p.Xpm({type:e,selectors:[["region-selector"]],viewQuery:function(e,t){if(1&e&&p.Gf(C,7),2&e){let e;p.iGM(e=p.CRH())&&(t.input=e.first)}},inputs:{considerProjectState:"considerProjectState"},outputs:{onSelect:"onSelect"},decls:17,vars:16,consts:[[1,"region-selector"],[1,"level",3,"ngClass"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"autocomplete-wrapper"],["matInput","",3,"formControl","matAutocomplete"],["input",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"disabled"],[4,"ngIf"],[3,"value"]],template:function(e,t){if(1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"mat-form-field",1),p.TgZ(2,"mat-label"),p._uU(3),p.ALo(4,"translate"),p.qZA(),p.TgZ(5,"mat-select",2),p.NdJ("ngModelChange",function(e){return t.onLevelChange(e)})("ngModelChange",function(e){return t.level=e}),p.YNc(6,y,3,4,"mat-option",3),p.qZA(),p.qZA(),p.TgZ(7,"mat-form-field",4),p._UZ(8,"input",5,6),p.TgZ(10,"mat-autocomplete",7,8),p.NdJ("optionSelected",function(e){return t.onRegionSelection(e.option.value)}),p.TgZ(12,"mat-option",9),p._uU(13),p.ALo(14,"translate"),p.qZA(),p.YNc(15,Z,2,2,"mat-option",3),p.qZA(),p.YNc(16,D,3,3,"mat-hint",10),p.qZA(),p.qZA()),2&e){const e=p.MAs(11);p.xp6(1),p.Q6J("ngClass",p.VKq(14,B,t.level)),p.xp6(2),p.hij(" ",p.lcZ(4,10,"components.region-selector.level")," "),p.xp6(2),p.Q6J("ngModel",t.level),p.xp6(1),p.Q6J("ngForOf",t.options),p.xp6(2),p.Q6J("formControl",t.filterCriterion)("matAutocomplete",e),p.xp6(4),p.Q6J("disabled",!0),p.xp6(1),p.Oqu(p.lcZ(14,12,"components.region-selector.input-name")),p.xp6(2),p.Q6J("ngForOf",t.filteredData),p.xp6(1),p.Q6J("ngIf",!t.region)}},directives:[m.KE,f.mk,m.hX,b.gD,c.JJ,c.On,f.sg,v.Nt,c.Fj,_.ZL,c.oH,_.XC,A.ey,f.O5,m.bx],pipes:[x.X$],styles:["[_ngcontent-%COMP%]:root{--pallete-primary:#000;--pallete-accent:#000;--sidenav-width:200px}  .region-selector{display:flex}  .region-selector{align-items:center;justify-content:flex-start}  .region-selector{border:1px solid #e8e8e8;border-radius:4px}  .region-selector .level{max-width:120px;padding:16px 0 10px 10px;background:#e8e8e8;font-size:12px}  .region-selector .level.selected{background:var(--pallete-primary)}  .region-selector .level.selected *{color:#fff}  .region-selector .autocomplete-wrapper{width:calc(100% - 120px)}  .region-selector .autocomplete-wrapper input{padding-left:10px;height:38px}  .region-selector .autocomplete-wrapper .mat-form-field-infix{background:#fff}  .region-selector .mat-form-field-underline{display:none}  .region-selector .mat-form-field-wrapper{padding-bottom:0!important}  .region-selector .mat-form-field-infix{border-top:none}  .region-selector .mat-form-field .mat-hint{margin-top:16px}"]}),e})()},1346:(e,t,i)=>{"use strict";i.d(t,{C:()=>h});var s=i(9550),n=i(3070),o=i(1041),a=i(649),r=i(1116),l=i(9961),c=i(3841),d=i(5366);let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.ez,c.LD,a.aw,n.lN,l.Bb,o.u5,o.UX,s.c]]}),e})()},4660:(e,t,i)=>{"use strict";i.d(t,{C:()=>s});class s{get label(){return this.key}static build(e,t){const i=new s;return i.key=e,i.value=t,i}}}}]);