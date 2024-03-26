import{j as g}from"./jsx-runtime-CKrituN3.js";import{u as pt}from"./index-DOHT0qqe.js";import{u as dt,a as mt,b as ft}from"./index-aAHx1-lZ.js";import{r as i}from"./index-CBqU2yxZ.js";import{u as gt,f as W,g as ht}from"./form-control-Dbo-pJGm.js";import{f as Z,D as bt,d as vt,C as yt,v as L,Q as U,y as Pt,h as q,r as St,u as h,c as tt}from"./factory-D1MzC1Q2.js";import{r as et,c as b}from"./number-49BHn0Cl.js";import{h as Ct,o as xt}from"./theme-provider-LCtE2tbw.js";import{f as kt}from"./forward-ref-DuAegr0M.js";import{a as wt}from"./use-component-style-i7T2CPTB.js";const _t=c=>{let p=[([u])=>({bg:`hsl(${u}, 100%, 50%)`,bgImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, transparent)"})];return c&&(p=[...p,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),p},It=({focusThumbOnChange:c=!0,...p})=>{c||(p.isReadOnly=!0);let{id:u,name:_,value:I,defaultValue:D=[0,0,1],onChange:E,onChangeStart:N,onChangeEnd:A,step:d=.01,thumbColor:R,required:j,disabled:v,readOnly:y,withShadow:T=!0,overlays:F=_t(T),...o}=gt(p);const V=Z(N),P=Z(A),[m,S]=pt({value:I,defaultValue:D,onChange:E}),[Q,X]=i.useState(!1),B=!(v||y);let[f,r,s]=m;r=b(r,0,1),s=b(s,0,1);const Y=i.useRef(null),O=i.useRef(null),K=i.useRef(null),a=dt({value:m,step:d,isInteractive:B,eventSource:null,focusThumbOnChange:c}),$=mt(K),rt=i.useMemo(()=>F.map(t=>bt(t,[f,r,s])),[F,f,r,s]),nt=i.useCallback(t=>{var J;if(!O.current)return[];const{step:e}=a.current;a.current.eventSource="pointer";const{bottom:n,left:l,height:x,width:k}=O.current.getBoundingClientRect(),{clientX:w,clientY:ct}=((J=t.touches)==null?void 0:J[0])??t;let M=b((w-l)/k,0,1),z=b((n-ct)/x,0,1);return e&&(M=parseFloat(et(M,0,e)),z=parseFloat(et(z,0,e))),[M,z]},[a]),G=t=>{const{value:e}=a.current,[n,l]=nt(t);if(n==null||l==null)return;const[,x,k]=e;(n!==x||l!==k)&&S(([w])=>[w,n,l])},st=i.useCallback(()=>{const{focusThumbOnChange:t}=a.current;t&&setTimeout(()=>{var e;return(e=K.current)==null?void 0:e.focus()})},[a]),C=i.useCallback(([t,e])=>{const{isInteractive:n}=a.current;n&&(t=b(t,0,1),e=b(e,0,1),S(([l])=>[l,t,e]))},[a,S]),H=i.useCallback(t=>{const n={ArrowRight:()=>C([r+d,s]),ArrowUp:()=>C([r,s+d]),ArrowLeft:()=>C([r-d,s]),ArrowDown:()=>C([r,s-d])}[t.key];n&&(t.preventDefault(),t.stopPropagation(),n(t),a.current.eventSource="keyboard")},[a,C,r,s,d]);ft(Y,{onSessionStart:t=>{const{isInteractive:e,value:n}=a.current;e&&(X(!0),st(),G(t),V(n))},onSessionEnd:()=>{const{isInteractive:t,value:e}=a.current;t&&(X(!1),P(e))},onMove:t=>{const{isInteractive:e}=a.current;e&&G(t)}}),vt(()=>{const{eventSource:t,value:e}=a.current;t==="keyboard"&&P(e)},[m,P]);const ot=i.useCallback((t={},e=null)=>({...t,...yt(o,["aria-readonly"]),ref:L(e,Y),tabIndex:-1}),[o]),at=i.useCallback((t={},e=null)=>{const{width:n}=$??{width:0},l={...t.style,...o.style,padding:`${n/2}px`};return{...t,ref:e,style:l}},[o,$]),it=i.useCallback((t={},e=null)=>({...U(o,W),...t,id:u,ref:e,type:"hidden",name:_,value:[f,r,s].toString(),required:j,disabled:v,readOnly:y}),[v,u,_,y,j,o,f,r,s]),lt=i.useCallback((t={},e=null)=>({...U(o,ht({omit:["aria-readonly"]})),...t,ref:L(e,O)}),[o]),ut=i.useCallback((t={},e=null)=>{const{width:n,height:l}=$??{width:0,height:0},x=r*100,k=s*100,w={...t.style,position:"absolute",userSelect:"none",touchAction:"none",left:`calc(${x}% - ${n/2}px)`,bottom:`calc(${k}% - ${l/2}px)`};return{"aria-label":"Saturation and brightness thumb",bg:R??Ct([f,r,s])(),...U(o,W),...t,ref:L(e,K),tabIndex:B&&c?0:void 0,role:"slider","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`saturation ${r}, brightness ${s}`,"data-active":Pt(Q&&c),onKeyDown:q(t.onKeyDown,H),onFocus:q(t.onFocus,o.onFocus),onBlur:q(t.onBlur,o.onBlur),style:w}},[f,r,s,R,c,Q,B,H,o,$]);return{value:m,overlays:rt,getContainerProps:ot,getInnerProps:at,getTrackProps:lt,getInputProps:it,getThumbProps:ut}},Bt=kt((c,p)=>{const[u,_]=wt("SaturationSlider",c),{className:I,ratio:D=16/9,innerProps:E,inputProps:N,trackProps:A,thumbProps:d,__css:R,...j}=xt(_),{overlays:v,getContainerProps:y,getInnerProps:T,getTrackProps:F,getInputProps:o,getThumbProps:V}=It(j),P={position:"relative",_before:{content:'""',display:"block",h:0,pb:St(D,m=>`${1/m*100}%`)},"& > *":{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},...u.container,...R};return g.jsx(h.div,{className:tt("ui-saturation-slider",I),__css:P,...y(),children:g.jsxs(h.div,{className:tt("ui-saturation-slider__inner",I),__css:{...u.inner},...T(E),children:[g.jsx(h.input,{...o(N,p)}),v.map((m,S)=>g.jsx(h.div,{className:"ui-saturation-slider__overlay",__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...u.overlay},...m},S)),g.jsx(h.div,{className:"ui-saturation-slider__track",__css:{position:"relative",w:"100%",h:"100%",...u.track},...F(A),children:g.jsx(h.div,{className:"ui-saturation-slider__thumb",__css:{...u.thumb},...V(d)})})]})})});export{Bt as S};