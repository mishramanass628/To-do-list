(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1690:function(e,t,l){Promise.resolve().then(l.bind(l,2241))},2241:function(e,t,l){"use strict";l.r(t);var s=l(7437),n=l(2265);l(4887),t.default=()=>{let[e,t]=(0,n.useState)(""),[l,r]=(0,n.useState)(""),[a,c]=(0,n.useState)([]),i=e=>{let t=[...a];t.splice(e,1),c(t)},o=(0,s.jsx)("h2",{children:"No Task Available"});return a.length>0&&(o=a.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center justify-between mb-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-5 w-2/3",children:[(0,s.jsx)("h5",{className:"text-2xl font-semibold",children:e.title}),(0,s.jsx)("h6",{className:"text-lg font-medium ",children:e.desc})]}),(0,s.jsx)("button",{onClick:()=>{i(t)},className:"bg-red-400 text-white px-4 py-2 rounded font-bold",children:"Delete"})]},t))),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"bg-black text-white p-5 text-5xl font-bold text-center",children:"My TodoList"}),(0,s.jsxs)("form",{onSubmit:s=>{s.preventDefault(),c([...a,{title:e,desc:l}]),console.log(e),console.log(l),t(""),r("")},children:[(0,s.jsx)("input",{type:"text",className:"text-2xl border-zinc-800 border-4 m-8 px-4 py-2",placeholder:"Enter Title Here",value:e,onChange:e=>{t(e.target.value)}}),(0,s.jsx)("input",{type:"text",className:"text-2xl border-zinc-800 border-4 m-8 px-4 py-2",placeholder:"Enter Task's Description  Here",value:l,onChange:e=>{r(e.target.value)}}),(0,s.jsx)("button",{className:"bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5",children:"ADD TASK"})]}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"p-8 bg-slate-200",children:(0,s.jsx)("ul",{children:o})})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=1690)}),_N_E=e.O()}]);