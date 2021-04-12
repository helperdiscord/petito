(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(118)),a={id:"petitiorequest",title:"Module: PetitioRequest",sidebar_label:"PetitioRequest",custom_edit_url:null,hide_title:!0},c={unversionedId:"pkg/modules/petitiorequest",id:"pkg/modules/petitiorequest",isDocsHomePage:!1,title:"Module: PetitioRequest",description:"Module: PetitioRequest",source:"@site/i18n/en-gb/docusaurus-plugin-content-docs/current/pkg/modules/petitiorequest.md",slug:"/pkg/modules/petitiorequest",permalink:"/petitio/docs/next/pkg/modules/petitiorequest",editUrl:null,version:"current",lastUpdatedAt:1618253580,formattedLastUpdatedAt:"12/04/2021",sidebar_label:"PetitioRequest",sidebar:"docs",previous:{title:"Module: Petitio",permalink:"/petitio/docs/next/pkg/modules/petitio"},next:{title:"Module: PetitioResponse",permalink:"/petitio/docs/next/pkg/modules/petitioresponse"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"HTTPMethod",id:"httpmethod",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-petitiorequest"},"Module: PetitioRequest"),Object(o.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(o.b)("h3",{id:"classes"},"Classes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/petitio/docs/next/pkg/classes/petitiorequest.petitiorequest-1"},"PetitioRequest"))),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/petitio/docs/next/pkg/interfaces/petitiorequest.timeoutoptions"},"TimeoutOptions"))),Object(o.b)("h2",{id:"type-aliases"},"Type aliases"),Object(o.b)("h3",{id:"httpmethod"},"HTTPMethod"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"HTTPMethod"),": ",Object(o.b)("em",{parentName:"p"},"GET")," ","|"," ",Object(o.b)("em",{parentName:"p"},"POST")," ","|"," ",Object(o.b)("em",{parentName:"p"},"PATCH")," ","|"," ",Object(o.b)("em",{parentName:"p"},"DELETE")," ","|"," ",Object(o.b)("em",{parentName:"p"},"PUT")),Object(o.b)("p",null,"Accepted HTTP methods (currently only supports up to HTTP/1.1)."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/helperdiscord/petitio/blob/eff2aca/src/lib/PetitioRequest.ts#L19"},"lib/PetitioRequest.ts:19")))}p.isMDXComponent=!0}}]);