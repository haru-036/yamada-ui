import{j as v}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import{f as y}from"./forward-ref-DuAegr0M.js";import{u as S}from"./use-component-style-CM81S9bB.js";import{o as _}from"./theme-provider-6JRwGmsH.js";import{u as g,c as j}from"./factory-DKdOmnTE.js";const E=y((h,p)=>{const[{borderRightWidth:e,borderLeftWidth:s,borderTopWidth:i,borderBottomWidth:d,borderWidth:r,borderStyle:o,borderColor:t,...n},b]=S("Divider",h),{className:f,orientation:m="horizontal",__css:l,...u}=_(b),a=c.useMemo(()=>({vertical:{border:"0",borderStyle:o,borderColor:t,borderLeftWidth:s||e||r||"1px",height:"100%"},horizontal:{border:"0",borderStyle:o,borderColor:t,borderBottomWidth:d||i||r||"1px",width:"100%"}}),[d,t,s,e,o,i,r]),x=c.useMemo(()=>a[m],[a,m]),W={...n,...x,...l};return v.jsx(g.hr,{ref:p,className:j("ui-divider",f),__css:W,...u})});export{E as D};