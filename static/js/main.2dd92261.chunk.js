(this["webpackJsonpmicro-blog"]=this["webpackJsonpmicro-blog"]||[]).push([[0],{33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(27),s=n.n(r),o=(n(33),n(8)),a=n(0),j=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"Micro Blog"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/create",children:"New Post"})]})]})},l=function(e){var t=e.posts;return Object(a.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(a.jsx)("div",{className:"blog-preview",children:Object(a.jsxs)(o.b,{to:"/post/".concat(e.id),children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("p",{children:["Autor: ",e.author]})]})},e.id)}))})},u=n(11),d=(n(15),n(9)),b=[{title:"This is my first ReactJS project!",body:"In this little project I did not use any DB, in order to make it simple and focused on my current study subject: React (Although it can easily be implemented if needed).A simulation of a real HTTP request was done with setTimeout",author:"Otto",id:2},{title:"What can you do in this Micro-blog?",body:"This little app allows you to list every post created, delete a post, read a post and create new posts.",author:"Also Otto",id:3}],h=function(){return new Promise((function(e,t){setTimeout((function(){e(b)}),1e3)}))},O=function(e){return new Promise((function(t,n){setTimeout((function(){t(b.push(Object(d.a)(Object(d.a)({},e),{},{id:4})))}),1e3)}))},x=function(e){return new Promise((function(t,n){setTimeout((function(){t(b=b.filter((function(t){return t.id!=e})))}),1e3)}))},f=function(e){return new Promise((function(t,n){var c=b.filter((function(t){return t.id==e}))[0];setTimeout((function(){t(c)}),1e3)}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(null),n=Object(u.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!0),o=Object(u.a)(s,2),a=o[0],j=o[1],l=Object(c.useState)(null),d=Object(u.a)(l,2),b=d[0],O=d[1],x=new AbortController,p=(x.signal,h);return""!=e&&(p=function(){return f(e)}),Object(c.useEffect)((function(){p().then((function(e){j(!1),r(e),O(null)}),(function(e){j(!1),O(e.message)}))}),[e]),{data:i,isPending:a,error:b}},m=function(){var e=p(),t=e.data,n=e.error,c=e.isPending;return Object(a.jsxs)("div",{className:"home",children:[n&&Object(a.jsx)("div",{children:n}),c&&Object(a.jsx)("div",{children:"Loading..."}),t&&Object(a.jsx)(l,{posts:t})]})},v=n(2),g=function(e){e.handleCreate;var t=Object(c.useState)({title:"",body:"",author:""}),n=Object(u.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),j=(o[0],o[1],Object(v.f)());return Object(a.jsx)("div",{className:"create",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(i).then((function(e){j.push("/")}))},children:[Object(a.jsx)("label",{children:"Title"}),Object(a.jsx)("input",{type:"text",required:!0,value:i.title,onChange:function(e){r(Object(d.a)(Object(d.a)({},i),{},{title:e.target.value}))}}),Object(a.jsx)("label",{children:"Text"}),Object(a.jsx)("textarea",{required:!0,value:i.body,onChange:function(e){r(Object(d.a)(Object(d.a)({},i),{},{body:e.target.value}))}}),Object(a.jsx)("label",{children:"Author"}),Object(a.jsx)("input",{type:"text",required:!0,value:i.author,onChange:function(e){r(Object(d.a)(Object(d.a)({},i),{},{author:e.target.value}))}}),Object(a.jsx)("button",{children:"Add Post"})]})})},y=function(){var e=Object(v.g)().id,t=Object(v.f)(),n=p(e),c=n.data,i=n.error,r=n.isPending;return Object(a.jsxs)("div",{className:"postdetails",children:[r&&Object(a.jsx)("div",{children:"Pending..."}),i&&Object(a.jsx)("div",{children:"error"}),c&&Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:c.title}),Object(a.jsxs)("p",{children:["Author: ",c.author]}),Object(a.jsx)("div",{children:c.body}),Object(a.jsx)("button",{onClick:function(){x(e),t.push("/")},children:"delete post"})]})]})};var w=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",children:Object(a.jsx)(m,{})}),Object(a.jsx)(v.a,{path:"/create",children:Object(a.jsx)(g,{})}),Object(a.jsx)(v.a,{path:"/post/:id",children:Object(a.jsx)(y,{})})]})})]})})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2dd92261.chunk.js.map