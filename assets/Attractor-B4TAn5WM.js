import{C as v}from"./Ranges-BoIJmN8R.js";import{W as M,L as b,X as E,O as g,q as x,t as O,S as d}from"./index-C4xz0zvy.js";import{Attract as A}from"./index-DswGIvGO.js";import{E as C}from"./ExternalInteractorBase-CIi3zRdK.js";const q=1,D=1,y=0;function h(s,i,t,a,c){const e=s.actualOptions.interactivity.modes.attract;if(!e)return;const o=s.particles.quadTree.query(a,c);for(const r of o){const{dx:f,dy:n,distance:l}=M(r.position,i),m=e.speed*e.factor,p=b(E(e.easing)(D-l/t)*m,q,e.maxSpeed),k=g.create(l?f/l*p:m,l?n/l*p:m);r.position.subFrom(k)}}function P(s,i){s.attract||(s.attract={particles:[]});const{attract:t}=s;if(t.finish||(t.count||(t.count=0),t.count++,t.count===s.particles.count&&(t.finish=!0)),t.clicking){const a=s.interactivity.mouse.clickPosition,c=s.retina.attractModeDistance;if(!c||c<y||!a)return;h(s,a,c,new v(a.x,a.y,c),e=>i(e))}else t.clicking===!1&&(t.particles=[])}function R(s,i){const t=s.interactivity.mouse.position,a=s.retina.attractModeDistance;!a||a<y||!t||h(s,t,a,new v(t.x,t.y,a),c=>i(c))}const u="attract";class H extends C{constructor(i,t){super(t),this._engine=i,t.attract||(t.attract={particles:[]}),this.handleClickMode=a=>{const c=this.container.actualOptions,e=c.interactivity.modes.attract;if(!(!e||a!==u)){t.attract||(t.attract={particles:[]}),t.attract.clicking=!0,t.attract.count=0;for(const o of t.attract.particles)this.isEnabled(o)&&o.velocity.setTo(o.initialVelocity);t.attract.particles=[],t.attract.finish=!1,setTimeout(()=>{t.destroyed||(t.attract||(t.attract={particles:[]}),t.attract.clicking=!1)},e.duration*x)}}}clear(){}init(){const i=this.container,t=i.actualOptions.interactivity.modes.attract;t&&(i.retina.attractModeDistance=t.distance*i.retina.pixelRatio)}interact(){const i=this.container,t=i.actualOptions,a=i.interactivity.status===O,c=t.interactivity.events,{enable:e,mode:o}=c.onHover,{enable:r,mode:f}=c.onClick;a&&e&&d(u,o)?R(this.container,n=>this.isEnabled(n)):r&&d(u,f)&&P(this.container,n=>this.isEnabled(n))}isEnabled(i){const t=this.container,a=t.actualOptions,c=t.interactivity.mouse,e=((i==null?void 0:i.interactivity)??a.interactivity).events;if((!c.position||!e.onHover.enable)&&(!c.clickPosition||!e.onClick.enable))return!1;const o=e.onHover.mode,r=e.onClick.mode;return d(u,o)||d(u,r)}loadModeOptions(i,...t){i.attract||(i.attract=new A);for(const a of t)i.attract.load(a==null?void 0:a.attract)}reset(){}}export{H as Attractor};
