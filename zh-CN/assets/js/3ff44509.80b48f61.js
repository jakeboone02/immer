"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=o(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[u]="string"==typeof e?e:a,l[1]=m;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>m,metadata:()=>o,toc:()=>u});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],m={id:"installation",title:"\u5b89\u88c5"},p=void 0,o={unversionedId:"installation",id:"installation",title:"\u5b89\u88c5",description:"<div",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/immer/zh-CN/installation",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"Immer",previous:{title:"\u5165\u95e8",permalink:"/immer/zh-CN/"},next:{title:"\u4f7f\u7528 produce",permalink:"/immer/zh-CN/produce"}},c={},u=[{value:"\u9009\u62e9\u60a8\u7684 Immer \u7248\u672c",id:"\u9009\u62e9\u60a8\u7684-immer-\u7248\u672c",level:2},{value:"Immer \u4f7f\u7528\u5728\u65e7\u7684 JavaScript \u73af\u5883?",id:"immer-\u4f7f\u7528\u5728\u65e7\u7684-javascript-\u73af\u5883",level:2}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("center",null,(0,i.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),(0,i.kt)("p",null,"Immer \u53ef\u4ee5\u4f5c\u4e3a\u76f4\u63a5\u4f9d\u8d56\u9879\u5b89\u88c5\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u4efb\u4f55 ES5 \u73af\u5883\u4e2d\u5de5\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yarn: ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn add immer")),(0,i.kt)("li",{parentName:"ul"},"NPM: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install immer")),(0,i.kt)("li",{parentName:"ul"},"CDN: \u66b4\u9732\u7684\u5168\u5c40\u53d8\u91cf\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"immer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unpkg: ",(0,i.kt)("inlineCode",{parentName:"li"},'<script src="https://unpkg.com/immer"><\/script>')),(0,i.kt)("li",{parentName:"ul"},"JSDelivr: ",(0,i.kt)("inlineCode",{parentName:"li"},'<script src="https://cdn.jsdelivr.net/npm/immer"><\/script>')),(0,i.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u4f7f\u7528 CDN \u65f6\uff0c\u6700\u597d\u68c0\u67e5\u6d4f\u89c8\u5668\u4e2d\u7684 url \u5e76\u67e5\u770b\u5b83\u89e3\u6790\u4e3a\u54ea\u4e2a\u7248\u672c\uff0c\u8fd9\u6837\u5f53\u66f4\u65b0\u53d1\u5e03\u65f6\uff0c\u60a8\u7684\u7528\u6237\u4e0d\u4f1a\u610f\u5916\u5730\u83b7\u5f97\u66f4\u65b0\u7684\u7248\u672c\u3002\u56e0\u6b64\uff0c\u8bf7\u6539\u7528\u5982\u4e0b\u7f51\u5740\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/immer@6.0.3/dist/immer.umd.production.min.js"},"https://unpkg.com/immer@6.0.3/dist/immer.umd.production.min.js")," \u3002\u5728 URL \u4e2d\u5c06 production.min \u66ff\u6362\u4e3a development \u4ee5\u8fdb\u884c\u5f00\u53d1\u6784\u5efa\u3002")))),(0,i.kt)("h2",{id:"\u9009\u62e9\u60a8\u7684-immer-\u7248\u672c"},"\u9009\u62e9\u60a8\u7684 Immer \u7248\u672c"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u672c\u8282\u4ec5\u9002\u7528\u4e8e\u7248\u672c 6 \u53ca\u66f4\u9ad8\u7248\u672c")),(0,i.kt)("p",null,"\u4e3a\u786e\u4fdd Immer \u5c3d\u53ef\u80fd\u5c0f\uff0c\u5e76\u975e\u6bcf\u4e2a\u9879\u76ee\u90fd\u9700\u8981\u7684\u529f\u80fd\u5df2\u9009\u62e9\u52a0\u5165\uff0c\u5e76\u4e14\u5fc5\u987b\u660e\u786e\u542f\u7528\u3002\u8fd9\u53ef\u786e\u4fdd\u5728\u5c06\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6346\u7ed1\u7528\u4e8e\u751f\u4ea7\u65f6\uff0c\u672a\u4f7f\u7528\u7684\u529f\u80fd\u4e0d\u4f1a\u5360\u7528\u4efb\u4f55\u7a7a\u95f4\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u52a0\u5165\u4ee5\u4e0b\u529f\u80fd:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8c03\u7528\u65b9\u6cd5"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ES 5 \u652f\u6301"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u80fd\u591f\u5728\u8f83\u65e7\u7684 JavaScript \u73af\u5883\uff08\u4f8b\u5982 Internet Explorer \u6216 React Native\uff09\u4e0a\u8fd0\u884c\uff0c\u8bf7\u542f\u7528\u6b64\u529f\u80fd\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableES5()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/immer/zh-CN/complex-objects"},"ES2015 Map and Set \u652f\u6301")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u4f7f Immer \u80fd\u591f\u5bf9\u539f\u751f Map \u548c Set \u96c6\u5408\u8fdb\u884c\u64cd\u4f5c\uff0c\u8bf7\u542f\u7528\u6b64\u529f\u80fd"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableMapSet()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/immer/zh-CN/patches"},"JSON \u8865\u4e01 \u652f\u6301")),(0,i.kt)("td",{parentName:"tr",align:null},"Immer \u53ef\u4ee5\u8ddf\u8e2a\u60a8\u5bf9 draft \u5bf9\u8c61\u6240\u505a\u7684\u6240\u6709\u66f4\u6539\u3002\u8fd9\u5bf9\u4e8e\u4f7f\u7528 JSON \u8865\u4e01\u65f6\u4f20\u8fbe\u66f4\u6539\u5f88\u6709\u7528"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enablePatches()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"All of the above")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e0d\u786e\u5b9a\u60a8\u9700\u8981\u54ea\u4e9b\u529f\u80fd\uff1f\u6211\u4eec\u5efa\u8bae\u5728\u65b0\u9879\u76ee\u4e0a\u9ed8\u8ba4\u542f\u7528\u4e0a\u8ff0\u6240\u6709\u529f\u80fd\u3002\u51e0\u4e2a KB \u7684\u8fc7\u65e9\u4f18\u5316\u53ef\u80fd\u4e0d\u503c\u5f97\u4e00\u5f00\u59cb\u7684\u9ebb\u70e6\u3002\u6b64\u5916\uff0c\u542f\u7528\u6216\u7981\u7528\u529f\u80fd\u4e0d\u4f1a\u5f71\u54cd Immer \u672c\u8eab\u7684\u6027\u80fd"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableAllPlugins()"))))),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," \u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," \uff0c\u5219\u9700\u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u671f\u95f4\u542f\u7528\u6b64\u529f\u80fd\u4e00\u6b21\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5165\u53e3\u6587\u4ef6\nimport {enableMapSet} from "immer"\n\nenableMapSet()\n\n// ...\u7136\u540e\nimport produce from "immer"\n\nconst usersById_v1 = new Map([\n    ["michel", {name: "Michel Weststrate", country: "NL"}]\n])\n\nconst usersById_v2 = produce(usersById_v1, draft => {\n    draft.get("michel").country = "UK"\n})\n\nexpect(usersById_v1.get("michel").country).toBe("NL")\nexpect(usersById_v2.get("michel").country).toBe("UK")\n')),(0,i.kt)("p",null,"Immer \u4ee5\u5927\u7ea6 3KB \u7684 gzip \u538b\u7f29\u5f00\u59cb\u3002\u6bcf\u4e2a\u542f\u7528\u7684\u63d2\u4ef6\u90fd\u4f1a\u589e\u52a0 < 1 KB\u3002\u7ec6\u5206\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Import size report for immer:\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502        (index)        \u2502 just this \u2502 cumulative \u2502 increment \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 import * from 'immer' \u2502   5662    \u2502     0      \u2502     0     \u2502\n\u2502        produce        \u2502   3100    \u2502    3100    \u2502     0     \u2502\n\u2502       enableES5       \u2502   3761    \u2502    3770    \u2502    670    \u2502\n\u2502     enableMapSet      \u2502   3885    \u2502    4527    \u2502    757    \u2502\n\u2502     enablePatches     \u2502   3891    \u2502    5301    \u2502    774    \u2502\n\u2502   enableAllPlugins    \u2502   5297    \u2502    5348    \u2502    47     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n(this report was generated by npmjs.com/package/import-size)\n")),(0,i.kt)("h2",{id:"immer-\u4f7f\u7528\u5728\u65e7\u7684-javascript-\u73af\u5883"},"Immer \u4f7f\u7528\u5728\u65e7\u7684 JavaScript \u73af\u5883?"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," \u5c1d\u8bd5\u4f7f\u7528\u4ee3\u7406\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002\u4f46\u662f\uff0c\u5728\u8f83\u65e7\u7684 JavaScript \u5f15\u64ce\u4e0a\uff0c\u4ee3\u7406\u4e0d\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u5728 Android \u4e0a\u8fd0\u884c Microsoft Internet Explorer \u6216 React Native\uff08\u5982\u679c React Native < v0.59 \u6216\u5728 React Native < v0.64 \u4e0a\u4f7f\u7528 Hermes \u5f15\u64ce\uff09\u65f6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cImmer \u5c06\u56de\u9000\u5230\u4e0e ES5 \u517c\u5bb9\u7684\u5b9e\u73b0\uff0c\u5176\u5de5\u4f5c\u65b9\u5f0f\u76f8\u540c\uff0c\u4f46\u901f\u5ea6\u7a0d\u6162"),(0,i.kt)("p",null,"\u4ece\u7248\u672c 6 \u5f00\u59cb\uff0c\u5fc5\u987b\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"enableES5()")," \u663e\u5f0f\u542f\u7528\u5bf9\u56de\u9000\u5b9e\u73b0\u7684\u652f\u6301"))}s.isMDXComponent=!0}}]);