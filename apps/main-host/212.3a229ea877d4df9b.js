/*! For license information please see 212.3a229ea877d4df9b.js.LICENSE.txt */
(self.webpackChunkmain_host=self.webpackChunkmain_host||[]).push([[212],{212:(e,t,r)=>{r.r(t);var s=r(619),n=r(29),o=r(287),a=r(665),l=r(322);const c=s.lazy((()=>r.e(716).then(r.t.bind(r,716,23)))),u=()=>((0,s.useRef)(null),(0,s.useEffect)((()=>{(0,a.bootstrapRemoteApp)()}),[]),(0,l.jsx)("div",{className:"a-module",children:(0,l.jsx)("angular-remote-root",{})})),i=function(){const[e,t]=(0,s.useState)(!1),[r,n]=(0,s.useState)(""),o=(0,s.useCallback)((()=>{t(!e)}),[e,t]),a=(0,s.useCallback)((e=>{const t=e.target.value;n(t)}),[n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.Suspense,{fallback:null,children:[(0,l.jsx)("h1",{children:"Основное host приложение"}),(0,l.jsx)(c,{})]}),(0,l.jsx)(u,{}),(0,l.jsxs)("button",{onClick:o,children:[e?"- Удалить":"+ Добавать"," remote приложение react"]}),(0,l.jsxs)("span",{style:{paddingLeft:"10px"},children:["Сообщение для remote: ",(0,l.jsx)("input",{type:"text",onChange:a})]}),e&&(0,l.jsx)(c,{message:r})]})};n.s(document.getElementById("root")).render((0,l.jsx)(s.StrictMode,{children:(0,l.jsx)(o.BrowserRouter,{children:(0,l.jsx)(i,{})})}))},29:(e,t,r)=>{var s=r(135);t.s=s.createRoot,s.hydrateRoot},837:(e,t,r)=>{var s=r(619),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var s,o={},u=null,i=null;for(s in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:u,ref:i,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},322:(e,t,r)=>{e.exports=r(837)}}]);