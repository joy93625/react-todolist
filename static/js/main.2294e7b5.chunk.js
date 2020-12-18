(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),i=e(12),c=e.n(i),u=(e(22),e(10)),a=e(16),d=e(7),f=e(3),l=e(2);function b(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n"]);return b=function(){return n},n}function s(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  & + & {\n    margin-left: 10px;\n  }\n"]);return s=function(){return n},n}function h(){var n=Object(f.a)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n"]);return h=function(){return n},n}function j(){var n=Object(f.a)(["\n  ","\n"]);return j=function(){return n},n}function p(){var n=Object(f.a)(["\n  display: flex;\n  position: relative;\n  padding: 10px;\n  border-bottom: 0.5px solid ",";\n  &:hover {\n    color: ",";\n  }\n  & button {\n    opacity: 0;\n  }\n  &:hover button {\n    opacity: 1;\n  }\n"]);return p=function(){return n},n}var x=l.b.div(p(),(function(n){return n.theme.colors.offWhite02}),(function(n){return n.theme.colors.brown})),O=l.b.div(j(),(function(n){return n.$isDone&&"\n      text-decoration: line-through;\n      opacity: 0.5;\n    "})),m=l.b.div(h()),v=l.b.button(s(),(function(n){return n.theme.colors.offWhite03}),(function(n){return n.theme.colors.brown})),g=Object(l.b)(v)(b(),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.offWhite02}));function k(n){var t=n.todo,e=n.handleDeleteTodo,o=n.handleToggleIsDone;return Object(r.jsxs)(x,{"data-todo-id":t.id,children:[Object(r.jsx)(O,{$isDone:t.isDone,children:t.content}),Object(r.jsxs)(m,{children:[Object(r.jsx)(v,{onClick:function(){o(t.id)},children:t.isDone?"\u5df2\u5b8c\u6210":"\u672a\u5b8c\u6210"}),Object(r.jsx)(g,{onClick:function(){e(t.id)},children:"\u522a\u9664"})]})]})}function w(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n"]);return w=function(){return n},n}function D(){var n=Object(f.a)(["\n  display: flex;\n  margin-top: 24px;\n"]);return D=function(){return n},n}function y(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  & + & {\n    margin-left: 10px;\n  }\n"]);return y=function(){return n},n}var C=l.b.button(y(),(function(n){return n.theme.colors.offWhite03}),(function(n){return n.theme.colors.brown})),W=l.b.div(D()),T=Object(l.b)(C)(w(),(function(n){return n.theme.colors.brown}),(function(n){return n.theme.colors.offWhite02}));function A(n){var t=n.handleFilterClick,e=n.handleClearAll;return Object(r.jsxs)(W,{children:[Object(r.jsx)(C,{onClick:function(){t("all")},children:"\u5168\u90e8"}),Object(r.jsx)(C,{onClick:function(){t("done")},children:"\u5df2\u5b8c\u6210"}),Object(r.jsx)(C,{onClick:function(){t("undone")},children:"\u672a\u5b8c\u6210"}),Object(r.jsx)(T,{onClick:e,children:"\u6e05\u7a7a"})]})}function I(){var n=Object(f.a)(["\n  margin-top: 10px;\n"]);return I=function(){return n},n}function S(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  & + & {\n    margin-left: 10px;\n  }\n"]);return S=function(){return n},n}function E(){var n=Object(f.a)(["\n  background: ",";\n  border: transparent;\n  border-radius: 8px;\n  flex: 1;\n"]);return E=function(){return n},n}function F(){var n=Object(f.a)(["\n  margin-top: 10px;\n  display: flex;\n"]);return F=function(){return n},n}function J(){var n=Object(f.a)(["\n  color: ",";\n  font-size: 36px;\n  text-align: center;\n"]);return J=function(){return n},n}function $(){var n=Object(f.a)(["\n  background: ",";\n  margin: 20px auto;\n  border-radius: 5px;\n  padding: 10px;\n  "," {\n    width: 300px;\n  }\n  "," {\n    width: 400px;\n  }\n  "," {\n    width: 500px;\n  }\n"]);return $=function(){return n},n}var z=l.b.div($(),(function(n){return n.theme.colors.offWhite01}),"@media screen and (max-width: 767px)","@media screen and (min-width: 768px)","@media screen and (min-width: 1000px)"),B=l.b.div(J(),(function(n){return n.theme.colors.brown})),K=l.b.div(F()),L=l.b.input(E(),(function(n){return n.theme.colors.offWhite02})),N=l.b.button(S(),(function(n){return n.theme.colors.offWhite03}),(function(n){return n.theme.colors.brown})),R=l.b.div(I());function q(){var n=Object(o.useState)([{id:1,content:"aaa",isDone:!0}]),t=Object(d.a)(n,2),e=t[0],i=t[1],c=Object(o.useState)(""),f=Object(d.a)(c,2),l=f[0],b=f[1],s=Object(o.useState)("all"),h=Object(d.a)(s,2),j=h[0],p=h[1],x=Object(o.useRef)(2),O=function(n){0!==l.length&&(i([{id:x.current,content:l,isDone:!1}].concat(Object(a.a)(e))),b(""),x.current++)},m=function(n){i(e.filter((function(t){return t.id!==n})))},v=function(n){i(e.map((function(t){return t.id!==n?t:Object(u.a)(Object(u.a)({},t),{},{isDone:!t.isDone})})))};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(z,{children:[Object(r.jsx)(B,{children:"Todo List"}),Object(r.jsxs)(K,{children:[Object(r.jsx)(L,{type:"text",placeholder:"Add item...",value:l,onChange:function(n){b(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&O()}}),Object(r.jsx)(N,{onClick:O,children:"\u65b0\u589e"})]}),Object(r.jsx)(A,{handleFilterClick:function(n){p(n)},handleClearAll:function(){i([])}}),Object(r.jsx)(R,{children:e.filter((function(n){return"all"===j||("done"===j?!0===n.isDone:"undone"===j?!1===n.isDone:void 0)})).map((function(n){return Object(r.jsx)(k,{todo:n,handleDeleteTodo:m,handleToggleIsDone:v},n.id)}))})]})})}c.a.render(Object(r.jsx)(l.a,{theme:{colors:{offWhite01:"#fffdf6",offWhite02:"#faf6e9",offWhite03:"#ece8d9",brown:"#494949"}},children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2294e7b5.chunk.js.map