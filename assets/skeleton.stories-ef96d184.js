import{a as e,j as u,F as m}from"./jsx-runtime-b08f8875.js";import{r as E}from"./index-8ee6c85d.js";import{u as P}from"./index-8b904657.js";import{u as he}from"./index-eb92a01e.js";import{u as A}from"./index-a8e328c0.js";import{f as z}from"./forward-ref-cf7188bd.js";import{u as Se}from"./use-component-style-b6002d28.js";import{o as ke}from"./theme-provider-78d359c6.js";import{Q as Ce,p as de,d as F,e as H}from"./factory-2d442159.js";import{H as ge}from"./heading-e87eb660.js";import{A as Le}from"./avatar-97e86635.js";import{T as xe}from"./text-c7eceae7.js";import"./_commonjsHelpers-de833af9.js";import"./index-c3db8104.js";import"./index-98029261.js";import"./index-0e02ae64.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./use-image-9c7f5b4b.js";const t=z((o,r)=>{const[f,a]=Se("Skeleton",o);let{className:d,startColor:h,endColor:n,fadeDuration:i=.4,speed:S=.8,isLoaded:g,isFitContent:k,children:N,...c}=ke(a);const O=Ce(),L=de(N),l=he(g),C=A(h),x=A(n),le=!!L.length;k??(k=le);const ue=P({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),me=P({keyframes:{"0%":{borderColor:C,background:C},"100%":{borderColor:x,background:x}},duration:typeof S=="string"?S:`${S}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),pe={w:k?"fit-content":"full",maxW:"full",h:k?"fit-content":"4",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...f};if(g){const fe=!O.current||l?"none":ue;return e(F.div,{ref:r,className:H("ui-skeleton","ui-skeleton--loaded",d),...c,animation:fe,children:L})}else return e(F.div,{ref:r,className:H("ui-skeleton",d),__css:pe,...c,animation:me,children:L})}),p=z(({className:o,boxSize:r="12",children:f,isFitContent:a,...d},h)=>{const n=de(f),i=!!n.length;return a??(a=i),e(t,{ref:h,className:H("ui-skeleton__circle",o),rounded:"full",isFitContent:a,...a?{}:{boxSize:r},...d,children:n})}),s=z(({className:o,noOfLines:r=3,startColor:f,endColor:a,fadeDuration:d,speed:h,isLoaded:n,gap:i="2",textHeight:S="2",children:g,...k},N)=>{const c=A(r),O={w:"full"};return e(F.div,{ref:N,className:H("ui-skeleton__text",o),__css:O,...k,children:Array(c).fill(0).map((L,l)=>{if(n&&l>0)return null;const C=l+1===c,x=n?{}:{mb:C?void 0:i,w:c>1&&C?"80%":"100%",h:S};return e(t,{startColor:f,endColor:a,fadeDuration:d,speed:h,isLoaded:n,...x,children:l===0?g:void 0},l)})})}),Ye={title:"Components / Feedback / Skeleton",component:t},ce=o=>new Promise(r=>{setTimeout(r,o)}),w=()=>u(m,{children:[e(t,{}),e(p,{}),e(s,{})]}),T=()=>u(m,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(p,{startColor:"pink.500",endColor:"orange.500"}),e(s,{startColor:"pink.500",endColor:"orange.500"})]}),b=()=>u(m,{children:[e(t,{h:16}),e(p,{boxSize:16}),e(s,{textHeight:4})]}),v=()=>u(m,{children:[e(t,{speed:2}),e(p,{speed:2}),e(s,{speed:2})]}),I=()=>e(s,{gap:8}),_=()=>e(s,{noOfLines:5}),y=()=>{const[o,r]=E.useState(!1);return E.useEffect(()=>{ce(3e3).then(()=>{r(!0)})},[]),u(m,{children:[e(t,{isLoaded:o}),e(p,{isLoaded:o}),e(s,{isLoaded:o})]})},D=()=>{const[o,r]=E.useState(!1);return E.useEffect(()=>{ce(3e3).then(()=>{r(!0)})},[]),u(m,{children:[e(t,{h:12,isLoaded:o,fadeDuration:2,children:e(ge,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(p,{isLoaded:o,fadeDuration:2,children:e(Le,{name:"Hirotomo Yamada"})}),e(s,{isLoaded:o,fadeDuration:2,children:e(xe,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var j,G,M;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(M=(G=w.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,Y,$;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...($=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,R,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,B,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(J=(B=v.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,U,X;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(X=(U=I.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,oe;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <SkeletonText noOfLines={5} />;
}`,...(oe=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,te,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return <>
      <Skeleton isLoaded={isLoaded} />

      <SkeletonCircle isLoaded={isLoaded} />

      <SkeletonText isLoaded={isLoaded} />
    </>;
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ae,ie;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return <>
      <Skeleton h={12} isLoaded={isLoaded} fadeDuration={2}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle isLoaded={isLoaded} fadeDuration={2}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText isLoaded={isLoaded} fadeDuration={2}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(ie=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const $e=["basic","withColor","withSize","withSpeed","withGap","withNoOfLines","withIsLoaded","withFadeDuration"];export{$e as __namedExportsOrder,w as basic,Ye as default,T as withColor,D as withFadeDuration,I as withGap,y as withIsLoaded,_ as withNoOfLines,b as withSize,v as withSpeed};
//# sourceMappingURL=skeleton.stories-ef96d184.js.map