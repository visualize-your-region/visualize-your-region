(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{dJXF:function(e,t,i){"use strict";i.r(t),i.d(t,"ComparisonModule",function(){return C});var o=i("STbY"),s=i("tyNb"),n=i("bTqV"),a=i("3Pt+"),r=i("1jcm"),c=i("7EHt"),l=i("mVQt"),d=i("sYmb"),h=i("ZF+F"),g=i("pLZG"),u=i("eIep"),m=i("f48q"),b=i("itXk"),v=i("95T3"),p=i("fXoL"),f=i("sVDV"),y=i("49/o"),E=i("ofXK"),w=i("FkH8"),R=i("2NtR");const A=["accordion"];function x(e,t){1&e&&p.Mb(0,"select-project-warning")}function M(e,t){1&e&&(p.Rb(0,"div",4),p.Dc(1),p.dc(2,"translate"),p.Qb()),2&e&&(p.Ab(1),p.Ec(p.ec(2,1,"comparison.subtitle")))}function S(e,t){if(1&e){const e=p.Sb();p.Rb(0,"div",15),p.Rb(1,"div",16),p.Rb(2,"mat-slide-toggle",17),p.Yb("change",function(t){p.sc(e);const i=p.cc().index,o=p.cc(2);return o.toggles.hierarchy[i]=t.checked,o.setupCharts(i)}),p.Dc(3),p.dc(4,"translate"),p.Qb(),p.Rb(5,"mat-slide-toggle",17),p.Yb("change",function(t){p.sc(e);const i=p.cc().index,o=p.cc(2);return o.toggles.averages[i]=t.checked,o.setupCharts(i,t.checked)}),p.Dc(6),p.dc(7,"translate"),p.Qb(),p.Qb(),p.Rb(8,"button",18),p.Dc(9," Outras Op\xe7\xf5es "),p.Qb(),p.Qb(),p.Rb(10,"mat-menu",19,20),p.Rb(12,"button",21),p.Yb("click",function(){p.sc(e);const t=p.cc(3);return t.viewDetails(t.selectedRegionA)}),p.Dc(13),p.dc(14,"translate"),p.dc(15,"translate"),p.Qb(),p.Rb(16,"button",21),p.Yb("click",function(){p.sc(e);const t=p.cc(3);return t.viewDetails(t.selectedRegionB)}),p.Dc(17),p.dc(18,"translate"),p.dc(19,"translate"),p.Qb(),p.Qb(),p.Mb(20,"div",22),p.Mb(21,"div",22),p.Mb(22,"div",22)}if(2&e){const e=p.pc(11),t=p.cc().index,i=p.cc(2);p.Ab(2),p.ic("checked",!0),p.Ab(1),p.Fc(" ",p.ec(4,15,"comparison.show-hierarchy")," "),p.Ab(2),p.ic("checked",!0),p.Ab(1),p.Fc(" ",p.ec(7,17,"comparison.show-averages")," "),p.Ab(2),p.ic("matMenuTriggerFor",e),p.Ab(2),p.ic("backdropClass","comparison-option-modal"),p.Ab(3),p.Hc(" ",p.ec(14,19,"comparison.view-details")," - ",p.ec(15,21,i.selectedRegionA.descriptor)," ",i.selectedRegionA.name," "),p.Ab(4),p.Hc(" ",p.ec(18,23,"comparison.view-details")," - ",p.ec(19,25,i.selectedRegionB.descriptor)," ",i.selectedRegionB.name," "),p.Ab(3),p.jc("id","element-chart-1-",t,""),p.Ab(1),p.jc("id","element-chart-2-",t,""),p.Ab(1),p.jc("id","element-chart-3-",t,"")}}function L(e,t){if(1&e){const e=p.Sb();p.Rb(0,"mat-expansion-panel",11),p.Yb("closed",function(){return p.sc(e),p.cc(2).featuredLabel=""})("opened",function(){p.sc(e);const i=t.index,o=p.cc(2);return o.initToggles(i),o.setupCharts(i)}),p.Rb(1,"mat-expansion-panel-header",12,13),p.Dc(3),p.Qb(),p.Bc(4,S,23,27,"ng-template",14),p.Qb()}if(2&e){const e=t.$implicit;p.Cb("numeric-value-descriptor descriptor-",t.index,""),p.Ab(3),p.Fc(" ",e," ")}}const P=function(e){return{"display-none":e}};function _(e,t){if(1&e){const e=p.Sb();p.Rb(0,"div",5),p.Rb(1,"div",6),p.Rb(2,"region-selector",7),p.Yb("onSelect",function(t){p.sc(e);const i=p.cc();return i.selectedRegionA=t,i.handleRegionChanges()}),p.Qb(),p.Rb(3,"region-selector",7),p.Yb("onSelect",function(t){p.sc(e);const i=p.cc();return i.selectedRegionB=t,i.handleRegionChanges()}),p.Qb(),p.Qb(),p.Rb(4,"mat-accordion",8,9),p.Bc(6,L,5,4,"mat-expansion-panel",10),p.Qb(),p.Qb()}if(2&e){const e=p.cc();p.Ab(4),p.ic("ngClass",p.lc(3,P,!e.filteredEvolutionData))("multi",!0),p.Ab(2),p.ic("ngForOf",null==e.evolutionPayload?null:e.evolutionPayload.dataFor)}}let k=(()=>{class e{constructor(e,t,i,o){this.pubsub=e,this.engineService=t,this.translateService=i,this.router=o,this.toggles={hierarchy:{},averages:{}},this.subscriptions=[],this.colors={selectedA:"#1E1EA9",selectedB:"#028a12",hierarchyMicro:"#665191",hierarchyMeso:"#a05195",hierarchyState:"#d45087",averageMicro:"#f95d6a",averageMeso:"#ff7c43",averageState:"#ffa600"},this.regionLabels={uf:"",mesoregion:"",microregion:"",municipalities:""}}ngOnInit(){this.subscriptions.push(this.pubsub.getAsBehaviorSubject(m.a.GLOBAL_STATE_CHANGE).pipe(Object(g.a)(e=>!!e),Object(u.a)(e=>this.engineService.getEngineEvolution(e))).subscribe(e=>{this.initiated=!0,this.evolutionPayload=e})),this.subscriptions.push(Object(b.b)([this.translateService.get("model-constants.state"),this.translateService.get("model-constants.mesoregion"),this.translateService.get("model-constants.microregion"),this.translateService.get("model-constants.municipy")]).subscribe(e=>{this.regionLabels.uf=e[0],this.regionLabels.mesoregion=e[1],this.regionLabels.microregion=e[2],this.regionLabels.municipalities=e[3]}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}viewDetails(e){localStorage.setItem("details-dataset",JSON.stringify(e)),this.router.navigate(["region-details"])}handleRegionChanges(){this.selectedRegionA&&this.selectedRegionB&&(this.filteredEvolutionData={a:Object.assign(Object.assign({},this.evolutionPayload[this.selectedRegionA.slug][this.selectedRegionA.id]),{descriptor:this.selectedRegionA.descriptor,slug:this.selectedRegionA.slug}),b:Object.assign(Object.assign({},this.evolutionPayload[this.selectedRegionB.slug][this.selectedRegionB.id]),{descriptor:this.selectedRegionB.descriptor,slug:this.selectedRegionB.slug})},this.buildOtherLevels(),this.accordion.closeAll())}initToggles(e){void 0===this.toggles.hierarchy[e]&&(this.toggles.hierarchy[e]=!0),void 0===this.toggles.averages[e]&&(this.toggles.averages[e]=!0)}setupCharts(e){setTimeout(()=>{const t={a:`${this.regionLabels[this.filteredEvolutionData.a.slug]} ${this.filteredEvolutionData.a.name}`,b:`${this.regionLabels[this.filteredEvolutionData.b.slug]} ${this.filteredEvolutionData.b.name}`},i={a:this.filteredEvolutionData.a.numericEvolution[e].value,b:this.filteredEvolutionData.b.numericEvolution[e].value},o=document.querySelector("#element-chart-1-"+e),s=document.querySelector("#element-chart-2-"+e);o&&(o.innerHTML="",v.newPlot(o,[{x:this.evolutionPayload.periods,y:i.a,name:t.a,type:"lines+markers",marker:{color:this.colors.selectedA,width:1}},...this.toggles.hierarchy[e]?this.getExtraCharts("a",e):[],{x:this.evolutionPayload.periods,y:i.b,name:t.b,type:"lines+markers",marker:{color:this.colors.selectedB,width:1}},...this.toggles.hierarchy[e]?this.getExtraCharts("b",e):[],...this.toggles.averages[e]?this.getExtraCharts("a",e,!1):[],...this.toggles.averages[e]?this.getExtraCharts("b",e,!1):[]],{title:"Incid\xeancia",xaxis:{type:"category",title:"Per\xedodo"},yaxis:{title:"Valor"},legend:{orientation:"h",y:-.25}},{responsive:!0})),s&&(s.innerHTML="",v.newPlot(s,[{y:i.a,name:t.a,type:"box",marker:{color:this.colors.selectedA}},{y:i.b,name:t.b,type:"box",marker:{color:this.colors.selectedB}}],{title:"Performance",legend:{orientation:"h",y:-.1}},{responsive:!0}))},0)}getExtraCharts(e,t,i=!0){return this[i?"hierarchy":"averages"].filter(({set:t})=>t===e).map(e=>({x:this.evolutionPayload.periods,y:e.numericEvolution[t].value,name:e.title,type:"lines+markers",marker:{color:e.color,width:1}}))}buildOtherLevels(){this.hierarchy=[],this.averages=[];const e=Object.values(this.evolutionPayload.municipalities),t=Object.values(this.evolutionPayload.microregion),i=Object.values(this.evolutionPayload.mesoregion);[this.selectedRegionA,this.selectedRegionB].forEach((o,s)=>{const n=0===s?"a":"b";if("municipalities"===o.slug){const i=this.evolutionPayload.microregion[this.evolutionPayload.municipalities[o.id].microregion_id];i.set=n,i.title=`${this.regionLabels.microregion} ${i.name}`,i.color=this.colors.hierarchyMicro;const s=e.filter(({microregion_id:e})=>e===i.id).length,a={set:n,id:"avg-"+i.id,title:"M\xe9dia da Microrregi\xe3o "+i.name,color:this.colors.averageMicro,numericEvolution:i.numericEvolution.map(e=>({meta_id:e.meta_id,value:e.value.map(e=>e/s)}))},r=this.evolutionPayload.mesoregion[i.mesoregion_id];r.set=n,r.title=`${this.regionLabels.mesoregion} ${r.name}`,r.color=this.colors.hierarchyMeso;const c=t.filter(({mesoregion_id:e})=>e===r.id).map(({id:e})=>e).reduce((t,i)=>t+e.filter(({microregion_id:e})=>e===i).length,0),l={set:n,id:"avg-"+r.id,title:"M\xe9dia da Mesorregi\xe3o "+r.name,color:this.colors.averageMeso,numericEvolution:r.numericEvolution.map(e=>({meta_id:e.meta_id,value:e.value.map(e=>e/c)}))},d=this.evolutionPayload.uf[r.uf_id];d.set=n,d.title=`${this.regionLabels.uf} ${d.name}`,d.color=this.colors.hierarchyState;const h={set:n,id:"avg-"+d.id,title:"M\xe9dia do Estado "+d.name,color:this.colors.averageState,numericEvolution:d.numericEvolution.map(t=>({meta_id:t.meta_id,value:t.value.map(t=>t/e.length)}))};[i,r,d].forEach(e=>{this.hierarchy.every(({id:t})=>e.id!==t)&&this.hierarchy.push(e)}),[a,l,h].forEach(e=>{this.averages.every(({id:t})=>e.id!==t)&&this.averages.push(e)})}else if("microregion"===o.slug){const e=this.evolutionPayload.mesoregion[this.evolutionPayload.microregion[o.id].mesoregion_id];e.title=`${this.regionLabels.mesoregion} ${e.name}`,e.color=this.colors.hierarchyMeso,e.set=n;const i=t.filter(({mesoregion_id:t})=>t===e.id).length,s={set:n,id:"avg-"+e.id,title:"M\xe9dia da Mesorregi\xe3o "+e.name,color:this.colors.averageMeso,numericEvolution:e.numericEvolution.map(e=>({meta_id:e.meta_id,value:e.value.map(e=>e/i)}))},a=this.evolutionPayload.uf[e.uf_id];a.set=n,a.title=`${this.regionLabels.uf} ${a.name}`,a.color=this.colors[n+"Sta"];const r={set:n,id:"avg-"+a.id,title:"M\xe9dia do Estado "+a.name,color:this.colors.averageState,numericEvolution:a.numericEvolution.map(e=>({meta_id:e.meta_id,value:e.value.map(e=>e/t.length)}))};[e,a].forEach(e=>{this.hierarchy.every(({id:t})=>e.id!==t)&&this.hierarchy.push(e)}),[s,r].forEach(e=>{this.hierarchy.every(({id:t})=>e.id!==t)&&this.hierarchy.push(e)})}else if("mesoregion"===o.slug){const e=this.evolutionPayload.uf[this.evolutionPayload.mesoregion[o.id].uf_id];e.set=n,e.title=`${this.regionLabels.uf} ${e.name}`,e.color=this.colors.hierarchyState;const t=i.filter(({uf_id:t})=>t===e.id).length,s={set:n,id:"avg-"+e.id,title:"M\xe9dia do Estado "+e.name,color:this.colors.averageState,numericEvolution:e.numericEvolution.map(e=>({meta_id:e.meta_id,value:e.value.map(e=>e/t)}))};this.hierarchy.every(({id:t})=>e.id!==t)&&this.hierarchy.push(e),this.averages.every(({id:e})=>s.id!==e)&&this.averages.push(s)}})}}return e.\u0275fac=function(t){return new(t||e)(p.Lb(f.a),p.Lb(y.a),p.Lb(d.d),p.Lb(s.b))},e.\u0275cmp=p.Fb({type:e,selectors:[["app-comparison"]],viewQuery:function(e,t){if(1&e&&p.Ic(A,!0),2&e){let e;p.oc(e=p.Zb())&&(t.accordion=e.first)}},decls:4,vars:3,consts:[[1,"view-comparison"],[4,"ngIf"],["class","toolbar",4,"ngIf"],["class","content",4,"ngIf"],[1,"toolbar"],[1,"content"],[1,"content-header"],[3,"onSelect"],[1,"accordion",3,"ngClass","multi"],["accordion","matAccordion"],[3,"class","closed","opened",4,"ngFor","ngForOf"],[3,"closed","opened"],["collapsedHeight","48px","expandedHeight","48px"],["itemLabel",""],["matExpansionPanelContent",""],[1,"options"],[1,"left"],[3,"checked","change"],["mat-raised-button","","color","accent",3,"matMenuTriggerFor"],[3,"backdropClass"],["menu","matMenu"],["mat-menu-item","",3,"click"],[3,"id"]],template:function(e,t){1&e&&(p.Rb(0,"div",0),p.Bc(1,x,1,0,"select-project-warning",1),p.Bc(2,M,3,3,"div",2),p.Bc(3,_,7,5,"div",3),p.Qb()),2&e&&(p.Ab(1),p.ic("ngIf",!t.initiated),p.Ab(1),p.ic("ngIf",t.initiated),p.Ab(1),p.ic("ngIf",t.initiated))},directives:[E.l,w.a,R.a,c.a,E.j,E.k,c.c,c.e,c.d,r.a,n.b,o.d,o.a,o.b],pipes:[d.c],styles:["[_ngcontent-%COMP%]:root{--pallete-primary:#000;--pallete-accent:#000;--sidenav-width:200px}  .view-comparison .content-header,   .view-comparison .content .options,   .view-comparison .content .options .left{display:flex}  .view-comparison .content .options .left{align-items:center;justify-content:flex-start}  .view-comparison .content-header,   .view-comparison .content .options{align-items:center;justify-content:space-between}  .view-comparison .content{padding:16px}  .view-comparison .content .options .left mat-slide-toggle{margin-right:16px}  .view-comparison .content-header{padding-bottom:16px}  .view-comparison .content-header region-selector{width:100%}  .view-comparison .content-header region-selector:first-child{margin-right:16px}  .is-mobile .view-comparison .content-header{flex-direction:column}  .is-mobile .view-comparison .content-header region-selector:first-child{margin-right:0;margin-bottom:24px}  .comparison-option-modal+div .mat-menu-panel{max-width:100%}"]}),e})(),j=(()=>{class e{}return e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({factory:function(t){return new(t||e)},imports:[[E.c,s.e.forChild([{path:"",component:k}])],s.e]}),e})(),C=(()=>{class e{}return e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({factory:function(t){return new(t||e)},imports:[[E.c,j,h.a,d.b,c.b,l.a,r.b,a.h,n.c,s.e,o.c]]}),e})()}}]);