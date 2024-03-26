import{j as d}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{f as y}from"./forward-ref-DuAegr0M.js";import{r as v,t as z,u as W,c as N,v as $}from"./factory-D1MzC1Q2.js";const L=y(({direction:s="column",justify:e,align:a,wrap:C,gap:o="fallback(md, 1rem)",divider:m,className:w,children:R,...E},_)=>{const f=t=>t==="column"||t==="column-reverse",H=n.useMemo(()=>({w:v(s,t=>f(t)?"100%":"fix-content"),h:v(s,t=>f(t)?"fix-content":"100%"),borderLeftWidth:v(s,t=>f(t)?0:"1px"),borderBottomWidth:v(s,t=>f(t)?"1px":0)}),[s]),j=z(R),M=m?j.map((t,k)=>{const c=typeof t.key<"u"?t.key:k,h=n.cloneElement(m,{__css:H});return d.jsxs(n.Fragment,{children:[k?h:null,t]},c)}):j,x=n.useMemo(()=>({display:"flex",flexDirection:s,justifyContent:e,alignItems:a,flexWrap:C,gap:o}),[a,s,C,o,e]);return d.jsx(W.div,{ref:_,className:N("ui-stack",w),__css:x,...E,children:M})}),O=y(({className:s,...e},a)=>d.jsx(L,{ref:a,className:N("ui-stack--horizontal",s),direction:"row",align:"center",...e})),P=y(({className:s,...e},a)=>d.jsx(L,{ref:a,className:N("ui-stack--vertical",s),direction:"column",align:"stretch",w:"100%",...e})),q=y(({className:s,direction:e="bottom",startIndex:a=0,gap:C="fallback(md, 1rem)",reverse:o=!1,fit:m=!0,children:w,...R},E)=>{const _=n.useRef(new Map),[f,H]=n.useState({width:0,height:0}),j={minWidth:`${f.width}px`,minHeight:`${f.height}px`},M={position:"relative",overflow:"hidden",var:[{__prefix:"ui",name:"space",token:"spaces",value:C}],...m?j:{}},x=n.useCallback(c=>e.includes("top")?{[o?"top":"bottom"]:c}:e.includes("bottom")?{[o?"bottom":"top"]:c}:{[o?"bottom":"top"]:0},[e,o]),t=n.useCallback(c=>e.includes("left")?{[o?"left":"right"]:c}:e.includes("right")?{[o?"right":"left"]:c}:{[o?"right":"left"]:0},[e,o]),k=n.useMemo(()=>z(w).map((l,i)=>{const g=n.createRef();_.current.set(i,g);const S=l.key??i,p=a+i,u=`calc(var(--ui-space) * ${i})`;let r={};r={...r,position:"absolute",zIndex:p},r={...r,...x(u)},r={...r,...t(u)};const b={...l.props,ref:$(l.ref,g),__css:r},V=n.cloneElement(l,b);return d.jsx(n.Fragment,{children:V},S)}),[w,a,x,t]);return n.useEffect(()=>{if(!m)return;let c=e.includes("left"),h=e.includes("top"),l=0,i=0;o&&(c=!c,h=!h);for(const g of _.current.values()){if(!g.current)continue;let{offsetParent:S,offsetWidth:p,offsetHeight:u,offsetTop:r,offsetLeft:b}=g.current;c&&(b=S.offsetWidth-b-p),h&&(r=S.offsetHeight-r-u),p+=b,u+=r,p>l&&(l=p),u>i&&(i=u)}H({width:l,height:i})},[k,e,o,m]),d.jsx(W.div,{ref:E,className:N("ui-stack--depth",s),__css:M,...R,children:k})});export{O as H,L as S,P as V,q as Z};