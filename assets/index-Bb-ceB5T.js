import{r as s}from"./index-CBqU2yxZ.js";import{f as Y,P as j,b as F,G as P}from"./factory-D1MzC1Q2.js";const H=(r,e)=>{const n=getComputedStyle(r);return["auto","scroll","overlay"].includes(n.overflow)?!0:e?["auto","scroll","overlay"].includes(n.overflowY):["auto","scroll","overlay"].includes(n.overflowX)},C=({root:r,isVertical:e,isReverse:n,behavior:m,position:f})=>{let a;const p=P(r)&&H(r,e)?r:document.body;e?a={top:f??(n?p.scrollHeight:0),behavior:m}:a={left:f??(n?p.scrollWidth:0),behavior:m},p===document.body?window.scrollTo(a):p.scrollTo(a)},q=(r,e)=>{const n=P(r)&&H(r,e)?r:document.body;return e?n.scrollHeight-n.scrollTop:n.scrollWidth-n.scrollLeft},B=({orientation:r="vertical",rootRef:e,rootMargin:n,threshold:m,initialLoad:f=!1,startIndex:a=f?0:1,onLoad:p,resetRef:M,indexRef:W,isDisabled:y=!1,isReverse:l=!1,behavior:T}={})=>{const w=s.useRef(null),b=s.useRef(a),v=s.useRef(!1),S=s.useRef(void 0),h=s.useRef(!1),k=s.useRef(0),[G,E]=s.useState(!1),d=Y(p),o=r==="vertical",I=s.useMemo(()=>({root:e==null?void 0:e.current,rootMargin:n,threshold:m}),[n,e,m]),U=s.useCallback((c=1,t=!0)=>{if(b.current=c,E(!1),t){const u=e==null?void 0:e.current;C({root:u,isVertical:o,isReverse:l,behavior:T})}y||setTimeout(()=>{const u=S.current,i=w.current;i&&(u==null||u.observe(i))})},[y,l,e,o,T]),g=s.useCallback(()=>{const c=S.current,t=w.current;t&&(c==null||c.unobserve(t)),E(!0)},[]),O=s.useCallback(()=>new IntersectionObserver(async([t])=>{if(!t.isIntersecting||v.current)return;const u={index:b.current,entry:t,finish:g};v.current=!0;const i=e==null?void 0:e.current;if(l&&(k.current=q(i,o)),await(d==null?void 0:d(u)),l){const x=k.current;C({root:i,isVertical:o,position:x})}b.current+=1,v.current=!1},I),[g,d,I,e,l,o]);return s.useEffect(()=>{(async()=>{const t=w.current,u=h.current,i=b.current;if(f&&!u&&(v.current=!0,await d({index:i,finish:g}),b.current+=1,v.current=!1),y)return;S.current=O();const x=S.current;if(l&&!u){const X=e==null?void 0:e.current;C({root:X,isVertical:o,isReverse:l}),h.current=!0}return setTimeout(()=>{t&&x.observe(t)}),()=>{t&&x.unobserve(t)}})()},[O,f,y,l,o,g,d,e]),j(()=>h.current=!1),F(M,U),F(W,c=>b.current=c),{ref:w,isFinish:G}};export{B as u};