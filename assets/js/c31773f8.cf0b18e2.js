"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"typescript",title:"Using TypeScript or Flow",sidebar_label:"TypeScript / Flow"},p=void 0,s={unversionedId:"typescript",id:"typescript",title:"Using TypeScript or Flow",description:"<div",source:"@site/docs/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/immer/typescript",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/typescript.mdx",tags:[],version:"current",frontMatter:{id:"typescript",title:"Using TypeScript or Flow",sidebar_label:"TypeScript / Flow"},sidebar:"Immer",previous:{title:"Async produce / createDraft",permalink:"/immer/async"},next:{title:"Immer performance",permalink:"/immer/performance"}},d={},c=[{value:"Best practices",id:"best-practices",level:2},{value:"Tips for curried producers",id:"tips-for-curried-producers",level:2},{value:"Cast utilities",id:"cast-utilities",level:2},{value:"Compatibility",id:"compatibility",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("center",null,(0,o.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",(0,o.kt)("details",null,(0,o.kt)("summary",{className:"egghead-summary"},"egghead.io lesson 12: Immer + TypeScript"),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-type-immutable-immer-data-with-typescript/embed"})),(0,o.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-type-immutable-immer-data-with-typescript"},"Hosted on egghead.io")),(0,o.kt)("p",null,"The Immer package ships with type definitions inside the package, which should be picked up by TypeScript and Flow out of the box and without further configuration."),(0,o.kt)("p",null,"The TypeScript typings automatically remove ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," modifiers from your draft types and return a value that matches your original type. See this practical example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import produce from "immer"\n\ninterface State {\n    readonly x: number\n}\n\n// `x` cannot be modified here\nconst state: State = {\n    x: 0\n}\n\nconst newState = produce(state, draft => {\n    // `x` can be modified here\n    draft.x++\n})\n\n// `newState.x` cannot be modified here\n')),(0,o.kt)("p",null,"This ensures that the only place you can modify your state is in your produce callbacks. It even works recursively and with ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Always define your states as ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly")," as much as possible. This best reflects the mental model and reality, since Immer will freeze all its returned values."),(0,o.kt)("li",{parentName:"ol"},"You can use the utility type ",(0,o.kt)("inlineCode",{parentName:"li"},"Immutable")," to recursively make an entire type tree read-only, e.g.: ",(0,o.kt)("inlineCode",{parentName:"li"},"type ReadonlyState = Immutable<State>"),"."),(0,o.kt)("li",{parentName:"ol"},"Immer won't automatically wrap all returned types in ",(0,o.kt)("inlineCode",{parentName:"li"},"Immutable")," if the original type of the input state wasn't immutable. This is to make sure it doesn't break code bases that don't use immutable types.")),(0,o.kt)("h2",{id:"tips-for-curried-producers"},"Tips for curried producers"),(0,o.kt)("p",null,"We try to inference as much as possible. So if a curried producer is created and directly passed to another function, we can infer the type from there. This works well with for example React:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Immutable, produce} from "immer"\n\ntype Todo = Immutable<{\n    title: string\n    done: boolean\n}>\n\n// later...\n\nconst [todo, setTodo] = useState<Todo>({\n    title: "test",\n    done: true\n})\n\n// later...\n\nsetTodo(\n    produce(draft => {\n        // draft will be strongly typed and mutable!\n        draft.done = !draft.done\n    })\n)\n')),(0,o.kt)("p",null,"When a curried producer isn't passed directly somewhere else, Immer can infer the state type from the draft argument. For example when doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// See below for a better solution!\n\nconst toggler = produce((draft: Draft<Todo>) => {\n    draft.done = !draft.done\n})\n\n// typeof toggler = (state: Immutable<Todo>) => Writable<Todo>\n")),(0,o.kt)("p",null,"Note that we did wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"draft")," argument with ",(0,o.kt)("inlineCode",{parentName:"p"},"Draft"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," is a readonly type. For non-readonly types this isn't needed."),(0,o.kt)("p",null,"For the returned curried function, ",(0,o.kt)("inlineCode",{parentName:"p"},"toggler"),", We will ",(0,o.kt)("em",{parentName:"p"},"narrow")," the ",(0,o.kt)("em",{parentName:"p"},"input")," type to ",(0,o.kt)("inlineCode",{parentName:"p"},"Immutable<Todo>"),", so that even though ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," is a mutable type, we will still accept an immutable todo as input argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"toggler"),"."),(0,o.kt)("p",null,"In contrast, Immer will ",(0,o.kt)("em",{parentName:"p"},"widen")," the ",(0,o.kt)("em",{parentName:"p"},"output")," type of the curried function to ",(0,o.kt)("inlineCode",{parentName:"p"},"Writable<Todo>"),", to make sure it's output state is also assignable to variables that are not explictly typed to be immutable."),(0,o.kt)("p",null,"This type narrowing / widening behavior might be unwelcome, maybe even for the simple reason that it results in quite noisy types. So we recommend to specify the generic state type for curried producers instead, in cases where it cannot be inferred directly, like ",(0,o.kt)("inlineCode",{parentName:"p"},"toggler")," above. By doing so the automatic output widening / input narrowing will be skipped. However, the ",(0,o.kt)("inlineCode",{parentName:"p"},"draft")," argument itself will still be inferred to be a writable ",(0,o.kt)("inlineCode",{parentName:"p"},"Draft<Todo>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const toggler = produce<Todo>(draft => {\n    draft.done = !draft.done\n})\n\n// typeof toggler = (state: Todo) => Todo\n")),(0,o.kt)("p",null,"However, in case the curried producer is defined with an initial state, Immer can infer the state type from the initial state, so in that case the generic doesn't need to be specified either:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const state0: Todo = {\n    title: "test",\n    done: false\n}\n\n// No type annotations needed, since we can infer from state0.\nconst toggler = produce(draft => {\n    draft.done = !draft.done\n}, state0)\n\n// typeof toggler = (state: Todo) => Todo\n')),(0,o.kt)("p",null,"In case the toggler has no initial state, and it has curried arguments, and you set the state generic explicitly, then type of any additional arguments should be defined explicitly as a tuple type as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const toggler = produce<Todo, [boolean]>((draft, newState) => {\n    draft.done = newState\n})\n\n// typeof toggler = (state: Todo, newState: boolean) => Todo\n")),(0,o.kt)("h2",{id:"cast-utilities"},"Cast utilities"),(0,o.kt)("p",null,"The types inside and outside a ",(0,o.kt)("inlineCode",{parentName:"p"},"produce")," can be conceptually the same, but from a practical perspective different. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," in the examples above should be considered immutable outside ",(0,o.kt)("inlineCode",{parentName:"p"},"produce"),", but mutable inside ",(0,o.kt)("inlineCode",{parentName:"p"},"produce"),"."),(0,o.kt)("p",null,"Sometimes this leads to practical conflicts. Take the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Todo = {readonly done: boolean}\n\ntype State = {\n    readonly finishedTodos: readonly Todo[]\n    readonly unfinishedTodos: readonly Todo[]\n}\n\nfunction markAllFinished(state: State) {\n    produce(state, draft => {\n        draft.finishedTodos = state.unfinishedTodos\n    })\n}\n")),(0,o.kt)("p",null,"This will generate the error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The type 'readonly Todo[]' is 'readonly' and cannot be assigned to the mutable type '{ done: boolean; }[]'\n")),(0,o.kt)("p",null,"The reason for this error is that we assign our read only, immutable array to our draft, which expects a mutable type, with methods like ",(0,o.kt)("inlineCode",{parentName:"p"},".push")," etc etc. As far as TS is concerned, those are not exposed from our original ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),". To hint TypeScript that we want to upcast the collection here to a mutable array for draft purposes, we can use the utility ",(0,o.kt)("inlineCode",{parentName:"p"},"castDraft"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"draft.finishedTodos = castDraft(state.unfinishedTodos)")," will make the error disappear."),(0,o.kt)("p",null,"There is also the utility ",(0,o.kt)("inlineCode",{parentName:"p"},"castImmutable"),", in case you ever need to achieve the opposite. Note that these utilities are for all practical purposes no-ops, they will just return their original value."),(0,o.kt)("p",null,"Tip: You can combine ",(0,o.kt)("inlineCode",{parentName:"p"},"castImmutable")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"produce")," to type the return type of ",(0,o.kt)("inlineCode",{parentName:"p"},"produce")," as something immutable, even when the original state was mutable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// a mutable data structure\nconst baseState = {\n    todos: [{\n        done: false\n    }]\n}\n\nconst nextState = castImmutable(produce(baseState, _draft => {}))\n\n// inferred type of nextState is now:\n{\n    readonly todos: ReadonlyArray<{\n        readonly done: boolean\n    }>\n})\n")),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Immer v5.3+ supports TypeScript v3.7+ only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Immer v3.0+ supports TypeScript v3.4+ only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Immer v1.9+ supports TypeScript v3.1+ only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Flow support might be removed in future versions and we recommend TypeScript"))}u.isMDXComponent=!0}}]);