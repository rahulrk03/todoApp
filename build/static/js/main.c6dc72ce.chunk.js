(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(2),o=c.n(a),i=c(19),r=c.n(i),s=(c(54),c(43)),d=c(37),p=(c(55),c(83)),u=c(86),j=c(85),l=c(84),b=(c(56),c(80)),m=c(81),f=c(82),O=c(87);var h=function(e){return Object(n.jsx)(b.a,{className:"todo_list",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(f.a,{}),Object(n.jsx)(O.a,{primary:e.text,secondary:"Dummy Deadline"})]})})},x=c(34),g=x.a.initializeApp({apiKey:"AIzaSyB2lZ1D1G7At0rVYrS5l2lp6-lxOensPEs",authDomain:"todo-app-cp-815ac.firebaseapp.com",projectId:"todo-app-cp-815ac",storageBucket:"todo-app-cp-815ac.appspot.com",messagingSenderId:"662392912610",appId:"1:662392912610:web:0ee8c366fc1a2c17037cbb",measurementId:"G-5MZC7DZR4V"}).firestore();var v=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),b=r[0],m=r[1];return Object(a.useEffect)((function(){g.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return e.data().todo})))}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{children:[Object(n.jsxs)(p.a,{children:[Object(n.jsx)(u.a,{children:"Write a Todo"}),Object(n.jsx)(j.a,{value:b,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsx)(l.a,{disabled:!b,type:"submit",onClick:function(e){e.preventDefault(),g.collection("todos").add({todo:b,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),o([].concat(Object(s.a)(c),[b])),m("")},variant:"contained",color:"primary",children:"Add Todo"})]}),Object(n.jsx)("ul",{children:c.map((function(e){return Object(n.jsx)(h,{text:e})}))})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),y()}},[[64,1,2]]]);
//# sourceMappingURL=main.c6dc72ce.chunk.js.map