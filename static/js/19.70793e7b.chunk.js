"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{7019:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(9439),a=r(2791),u=r(9434),s=r(5861),c=r(4687),o=r.n(c),i=r(1243),p=r(6382);i.Z.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(e){i.Z.defaults.headers.common.Authorization="Bearer ".concat(e)},h=function(){i.Z.defaults.headers.common.Authorization=""},f=(0,p.hg)("auth/register",function(){var e=(0,s.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.post("/users/signup",t);case 3:return r=e.sent,n=r.data,l(n.token),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),m=(0,p.hg)("auth/login",function(){var e=(0,s.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.post("/users/login",t);case 3:return r=e.sent,n=r.data,l(n.token),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),v=(0,p.hg)("auth/logout",(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.post("/users/logout");case 3:h(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),d=(0,p.hg)("auth/refresh",function(){var e=(0,s.Z)(o().mark((function e(t,r){var n,a,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.getState(),null!==(a=n.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",r.rejectWithValue());case 5:return l(a),e.prev=6,e.next=9,i.Z.get("/users/current");case 9:return u=e.sent,s=u.data,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,r){return e.apply(this,arguments)}}()),g={register:f,logOut:v,logIn:m,fetchCurrentUser:d},x=r(184),w=function(){var e=(0,u.I0)(),t=(0,a.useState)(""),r=(0,n.Z)(t,2),s=r[0],c=r[1],o=(0,a.useState)(""),i=(0,n.Z)(o,2),p=i[0],l=i[1],h=(0,a.useState)(""),f=(0,n.Z)(h,2),m=f[0],v=f[1],d=function(e){var t=e.target,r=t.name,n=t.value;switch(r){case"name":return c(n);case"email":return l(n);case"password":return v(n);default:return}};return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(g.register({name:s,email:p,password:m})),c(""),l(""),v("")},autoComplete:"off",children:[(0,x.jsxs)("label",{children:["\u0418\u043c\u044f",(0,x.jsx)("input",{type:"text",name:"name",value:s,onChange:d})]}),(0,x.jsxs)("label",{children:["\u041f\u043e\u0447\u0442\u0430",(0,x.jsx)("input",{type:"email",name:"email",value:p,onChange:d})]}),(0,x.jsxs)("label",{children:["\u041f\u0430\u0440\u043e\u043b\u044c",(0,x.jsx)("input",{type:"password",name:"password",value:m,onChange:d})]}),(0,x.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}}]);
//# sourceMappingURL=19.70793e7b.chunk.js.map