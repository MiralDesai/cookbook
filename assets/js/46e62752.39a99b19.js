"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[681],{5541:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>x,contentTitle:()=>b,default:()=>j,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var n=t(5893),o=t(3905),i=(t(7294),t(9521)),c=t(9960);const a=i.ZP.div`
  background-color: var(--card-bg);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 12px;
  border: 1px solid var(--card-border);
  overflow: hidden;
  

  &:hover {
    box-shadow: var(--card-shadow);
  }
`,s=i.ZP.div`
  padding: 1rem;
`,l=i.ZP.header`
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
`,d=i.ZP.div`
  grid-area: body;
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.75rem;
`,p=(0,i.ZP)(c.Z)`
  color: inherit;
  &:hover { 
    color: inherit;
    text-decoration: none;
  };
`,u=e=>(0,n.jsx)(a,{children:(0,n.jsx)(p,{to:e.href,children:(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{children:e.title}),(0,n.jsx)(d,{children:e.description})]})})}),f=i.ZP.div`
  display: grid;
  grid-gap: 1.35rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`,h=e=>(0,n.jsx)(f,{children:e.children}),m={title:"Introduction",pagination_next:null,pagination_previous:null},b="Introduction",g={id:"intro",title:"Introduction",description:"All recipes are vegeterian but some may contain eggs. I have found with most recipes you can replace each egg required",source:"@site/recipes/intro.md",sourceDirName:".",slug:"/intro",permalink:"/cookbook/recipes/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introduction",pagination_next:null,pagination_previous:null},sidebar:"docs"},x={},v=[];function y(e){const r={h1:"h1",p:"p",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(r.p,{children:"All recipes are vegeterian but some may contain eggs. I have found with most recipes you can replace each egg required\nwith 1 tablespoons of oil and 2 tablespoon of water."}),"\n","\n","\n",(0,n.jsxs)(h,{children:[(0,n.jsx)(u,{href:"/recipes/main/mushroom_bourguigon",title:"Main dishes",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}),(0,n.jsx)(u,{href:"/recipes/desserts/cherry_pie",title:"Desserts",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]})]})}function j(e={}){const{wrapper:r}={...(0,o.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>l});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(h,c(c({ref:r},p),{},{components:t})):n.createElement(h,c({ref:r},p))}));p.displayName="MDXCreateElement"}}]);