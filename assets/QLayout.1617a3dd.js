import{c as f,x as $,h as m,g as T,a3 as oe,a4 as j,r as p,a5 as Y,o as P,D as W,a6 as _,B as N,G as H,i as ie,$ as B,a7 as G,y as le,a1 as Z,a8 as re,w as D,a9 as R,a as ae,aa as se}from"./index.f1b83b7a.js";const ce={dark:{type:Boolean,default:null}};function ue(e,l){return f(()=>e.dark===null?l.dark.isActive:e.dark)}const de={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Q={xs:2,sm:4,md:8,lg:16,xl:24};var xe=$({name:"QSeparator",props:{...ce,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=T(),n=ue(e,l.proxy.$q),t=f(()=>e.vertical===!0?"vertical":"horizontal"),a=f(()=>` q-separator--${t.value}`),s=f(()=>e.inset!==!1?`${a.value}-${de[e.inset]}`:""),u=f(()=>`q-separator${a.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),h=f(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const o=e.spaced===!0?`${Q.md}px`:e.spaced in Q?`${Q[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${v[0]}`]=r[`margin${v[1]}`]=o}return r});return()=>m("hr",{class:u.value,style:h.value,"aria-orientation":t.value})}});let w=[],S=[];function J(e){S=S.filter(l=>l!==e)}function ze(e){J(e),S.push(e)}function Se(e){J(e),S.length===0&&w.length!==0&&(w[w.length-1](),w=[])}function $e(e){S.length===0?e():w.push(e)}function Te(e){w=w.filter(l=>l!==e)}const fe=[null,document,document.body,document.scrollingElement,document.documentElement];function ve(e,l){let n=oe(l);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return fe.includes(n)?window:n}function he(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ge(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let E;function O(){if(E!==void 0)return E;const e=document.createElement("p"),l=document.createElement("div");j(e,{width:"100%",height:"200px"}),j(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const n=e.offsetWidth;l.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=l.clientWidth),l.remove(),E=n-t,E}let k,F=0;const c=new Array(256);for(let e=0;e<256;e++)c[e]=(e+256).toString(16).substring(1);const me=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return l=>{const n=new Uint8Array(l);return e.getRandomValues(n),n}}return l=>{const n=[];for(let t=l;t>0;t--)n.push(Math.floor(Math.random()*256));return n}})(),U=4096;function Ce(){(k===void 0||F+16>U)&&(F=0,k=me(U));const e=Array.prototype.slice.call(k,F,F+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,c[e[0]]+c[e[1]]+c[e[2]]+c[e[3]]+"-"+c[e[4]]+c[e[5]]+"-"+c[e[6]]+c[e[7]]+"-"+c[e[8]]+c[e[9]]+"-"+c[e[10]]+c[e[11]]+c[e[12]]+c[e[13]]+c[e[14]]+c[e[15]]}function ye(){const e=p(!Y.value);return e.value===!1&&P(()=>{e.value=!0}),e}const ee=typeof ResizeObserver!="undefined",I=ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var K=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,a={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:o}=t;(r!==a.width||o!==a.height)&&(a={width:r,height:o},l("resize",a))}}const{proxy:h}=T();if(ee===!0){let r;const o=v=>{t=h.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):v!==!0&&N(()=>{o(!0)})};return P(()=>{o()}),W(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),_}else{let v=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,H.passive),o=void 0)},y=function(){v(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",s,H.passive),u())};const r=ye();let o;return P(()=>{N(()=>{t=h.$el,t&&y()})}),W(v),h.trigger=s,()=>{if(r.value===!0)return m("object",{style:I.style,tabindex:-1,type:"text/html",data:I.url,"aria-hidden":"true",onLoad:y})}}}}),Le=$({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=T(),t=ie(Z,B);if(t===B)return console.error("QPageContainer needs to be child of QLayout"),B;G(re,!0);const a=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>m("div",{class:"q-page-container",style:a.value},le(l.default))}});const{passive:X}=H,be=["both","horizontal","vertical"];var pe=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>be.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,s;D(()=>e.scrollTarget,()=>{r(),h()});function u(){t!==null&&t();const y=Math.max(0,he(a)),x=ge(a),g={top:y-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const C=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:y,left:x},n.directionChanged=n.direction!==C,n.delta=g,n.directionChanged===!0&&(n.direction=C,n.inflectionPoint=n.position),l("scroll",{...n})}function h(){a=ve(s,e.scrollTarget),a.addEventListener("scroll",o,X),o(!0)}function r(){a!==void 0&&(a.removeEventListener("scroll",o,X),a=void 0)}function o(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[x,g]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{g(x),t=null}}}const{proxy:v}=T();return D(()=>v.$q.lang.rtl,u),P(()=>{s=v.$el.parentNode,h()}),W(()=>{t!==null&&t(),r()}),Object.assign(v,{trigger:o,getPosition:()=>n}),_}}),Re=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=T(),a=p(null),s=p(t.screen.height),u=p(e.container===!0?0:t.screen.width),h=p({position:0,direction:"down",inflectionPoint:0}),r=p(0),o=p(Y.value===!0?0:O()),v=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=f(()=>o.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),g=f(()=>o.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function C(i){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};h.value=d,e.onScroll!==void 0&&n("scroll",d)}}function te(i){const{height:d,width:b}=i;let z=!1;s.value!==d&&(z=!0,s.value=d,e.onScrollHeight!==void 0&&n("scrollHeight",d),M()),u.value!==b&&(z=!0,u.value=b),z===!0&&e.onResize!==void 0&&n("resize",i)}function ne({height:i}){r.value!==i&&(r.value=i,M())}function M(){if(e.container===!0){const i=s.value>r.value?O():0;o.value!==i&&(o.value=i)}}let L=null;const A={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:a,height:s,containerHeight:r,scrollbarWidth:o,totalWidth:f(()=>u.value+o.value),rows:f(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:h,animate(){L!==null?clearTimeout(L):document.body.classList.add("q-body--layout-animate"),L=setTimeout(()=>{L=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,d,b){A[i][d]=b}};if(G(Z,A),O()>0){let b=function(){i=null,d.classList.remove("hide-scrollbar")},z=function(){if(i===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(b,300)},q=function(V){i!==null&&V==="remove"&&(clearTimeout(i),b()),window[`${V}EventListener`]("resize",z)},i=null;const d=document.body;D(()=>e.container!==!0?"add":"remove",q),e.container!==!0&&q("add"),ae(()=>{q("remove")})}return()=>{const i=se(l.default,[m(pe,{onScroll:C}),m(K,{onResize:te})]),d=m("div",{class:v.value,style:y.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:a},[m(K,{onResize:ne}),m("div",{class:"absolute-full",style:x.value},[m("div",{class:"scroll",style:g.value},[d])])]):d}}});export{Re as Q,xe as a,Le as b,ze as c,ue as d,ve as e,$e as f,O as g,Ce as h,K as i,Te as j,Se as r,ce as u};
