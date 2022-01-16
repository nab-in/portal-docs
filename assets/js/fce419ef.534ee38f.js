(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(90)),i=["components"],o={id:"metrics",title:"Job Portal Metrics"},s={unversionedId:"users/metrics",id:"users/metrics",isDocsHomePage:!1,title:"Job Portal Metrics",description:"Get Metrics for companies",source:"@site/docs/users/metrics.md",sourceDirName:"users",slug:"/users/metrics",permalink:"/portal-docs/docs/users/metrics",editUrl:"https://github.com/nab-in/portal-docs/edit/develop/docs/users/metrics.md",version:"current",frontMatter:{id:"metrics",title:"Job Portal Metrics"},sidebar:"portalSideBar",previous:{title:"Companies",permalink:"/portal-docs/docs/companies/companies"}},l=[{value:"Get Metrics for companies",id:"get-metrics-for-companies",children:[]},{value:"Get Admin Metrics",id:"get-admin-metrics",children:[]},{value:"Get metrics with date ranges",id:"get-metrics-with-date-ranges",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"get-metrics-for-companies"},"Get Metrics for companies"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Method: GET")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Requires authentication: ",Object(c.b)("inlineCode",{parentName:"li"},"YES"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JS"},"/api/companies/h0P9zvV0DD9Yh/metrics\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Where ",Object(c.b)("inlineCode",{parentName:"li"},"h0P9zvV0DD9Yh")," is the company ID")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Metrics for Blah",\n  "metrics": {\n    "applicants": 1,\n    "jobs": 1,\n    "interviews": 1\n  }\n}\n')),Object(c.b)("h2",{id:"get-admin-metrics"},"Get Admin Metrics"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Method: GET")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Requires authentication: ",Object(c.b)("inlineCode",{parentName:"li"},"YES"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JS"},"/api/metrics\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Job POrtal Admin Metrics",\n  "metrics": {\n    "users": 2,\n    "companies": 1,\n    "applications": 1,\n    "jobs": 1\n  }\n}\n')),Object(c.b)("h2",{id:"get-metrics-with-date-ranges"},"Get metrics with date ranges"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Method: GET")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Requires authentication: ",Object(c.b)("inlineCode",{parentName:"li"},"YES"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JS"},"/api/metrics?startDate=2020-10-28&endDate=2020-11-28\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "Job Portal Admin Metrics from 2020-10-28 to 2020-11-28",\n  "metrics": {\n    "users": 2,\n    "companies": 1,\n    "applications": 1,\n    "jobs": 1\n  }\n}\n')))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);