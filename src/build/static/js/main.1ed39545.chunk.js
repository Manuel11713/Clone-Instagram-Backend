(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,a){e.exports=a(331)},175:function(e,t,a){},197:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(175),a(41)),s=a.n(o),i=a(57),u=a(46),m=a.n(u),p=a(47),E=a(40),d=a(33),g=a(79),f=a(56),b=a(334),y=(a(196),a(197),a(21)),h=a(333),j=a(337),v=a(53),O=a(339),D=a(332),w=a(146),x=a(336),S=function(e){var t=e.setUserData,a=Object(n.useState)(!1),c=Object(y.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(!1),p=Object(y.a)(u,2),E=p[0],g=p[1],f=Object(n.useState)(""),b=Object(y.a)(f,2),h=b[0],j=b[1],v=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,c,l,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),n=a.tokenId,e.next=4,m.a.post("".concat("","/loggin-google"),null,{headers:{idtoken:n}});case 4:r=e.sent,c=r.data,l=c.user,i=c.message,u=c.token,l?(localStorage.setItem("token_access",u),t(l),o(!0)):(j(i),g(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(w.GoogleLogin,{clientId:"519455576665-tsag8jth2r67l6fvd114nmut5fhi0btn.apps.googleusercontent.com",buttonText:"Ingresar con google",onSuccess:v,onFailure:v,cookiePolicy:"single_host_origin"}),r.a.createElement(x.a,{visible:E,onOk:function(){g(!1)}},r.a.createElement("p",null,h)))},k=function(e){var t=e.setUserData,a=Object(n.useState)(!1),c=Object(y.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(!1),p=Object(y.a)(u,2),g=p[0],f=p[1],w=Object(n.useState)(""),x=Object(y.a)(w,2),k=x[0],C=x[1],T=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat("","/loggin"),a);case 2:n=e.sent,r=n.data,c=r.user,l=r.token,i=r.message,c?(localStorage.setItem("token_access",l),t(c),o(!0)):(C(i),f(!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement(d.a,{to:"/"}):r.a.createElement(b.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{src:"images/clonogram.png",style:{width:"50%"},alt:"logo clonogram"})),r.a.createElement(h.a,{onFinish:T},r.a.createElement(h.a.Item,{name:"email",rules:[{required:!0,message:"Debe instroducir el correo electronico"}]},r.a.createElement(j.a,{placeholder:"Usuario o correo electronico"})),r.a.createElement(h.a.Item,{name:"password",rules:[{required:!0,message:"Debe instroducir la contrase\xf1a"}]},r.a.createElement(j.a.Password,{placeholder:"Contrase\xf1a"})),r.a.createElement(v.a,{type:"primary",htmlType:"submit",block:!0},"Iniciar Sesi\xf3n")),g?r.a.createElement(O.a,{style:{marginTop:10},message:k,type:"error",showIcon:!0}):null,r.a.createElement(D.a,null,"o"),r.a.createElement(S,{setUserData:t}),r.a.createElement(E.b,{style:{display:"flex",justifyContent:"center",marginTop:20},to:"accounts/reset-password"},"\xbfOlvidaste tu contrase\xf1a?"))},C=a(340),T=a(343),U=a(344),_=a(345),I=a(346),P=a(341),z=a(342),A=function(){var e=function(){console.log("click")};return"/"===Object(d.g)().pathname?r.a.createElement(P.a,{style:{fontSize:25},onClick:e}):r.a.createElement(z.a,{style:{fontSize:25},onClick:e})},R=a(167),F=a(338),q=function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(y.a)(l,2),s=o[0],i=o[1],u=r.a.createElement("div",null,r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){c(!0),i("/profile")}},"Perfil"),r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){localStorage.removeItem("token_access"),"/"===window.location.pathname&&window.location.reload(),window.location.replace("/")}},"Salir"));return a?r.a.createElement(d.a,{to:s}):r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"}},r.a.createElement(E.b,{to:"/",style:{color:"inherit"}},r.a.createElement(A,null)),r.a.createElement(T.a,{style:{fontSize:25}}),r.a.createElement(U.a,{style:{fontSize:25}}),r.a.createElement(_.a,{style:{fontSize:25}}),r.a.createElement(R.a,{content:u},r.a.createElement(F.a,{size:25,icon:r.a.createElement(I.a,null)})))},N=(a(312),function(){return r.a.createElement("header",{id:"header_container",style:{background:"#fff",borderBottom:"1px solid #b0bec5"}},r.a.createElement(C.a,{offsetTop:0},r.a.createElement(g.a,null,r.a.createElement(f.a,{xs:6},r.a.createElement("div",{style:{justifyContent:"center"}},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{style:{width:"60%"},src:"images/clonogram.png",alt:"logo"})))),r.a.createElement(f.a,{xs:12,style:{height:50}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement(j.a.Search,{placeholder:"Buscar",onSearch:function(e){console.log(e)},style:{width:200,height:"50%"}}))),r.a.createElement(f.a,{xs:6},r.a.createElement(q,null)))))}),L=(a(313),a(347)),B=function(){return r.a.createElement(b.a,{style:{marginTop:20,border:"1px solid #b0bec5"}},r.a.createElement(F.a,{style:{marginRight:10,border:"1px dashed blue"},size:64,icon:r.a.createElement(L.a,null)}),["uno","dos","tres","cuatro","cinco"].map((function(e){return r.a.createElement(F.a,{style:{marginRight:10},size:64,icon:r.a.createElement(I.a,null)})})))},J=Object(p.b)((function(e){return{userData:e.userData}}))((function(e){var t=e.userData;return r.a.createElement("div",{style:{marginTop:20,paddingLeft:20,paddingTop:20}},r.a.createElement(g.a,null,r.a.createElement(f.a,{xs:6},r.a.createElement(E.b,{to:"/profile"},r.a.createElement(F.a,{size:64,icon:r.a.createElement(I.a,null)}))),r.a.createElement(f.a,{xs:18},t.name===t.username?null:r.a.createElement("p",{style:{width:"100%",margin:0}},t.username),r.a.createElement("p",{style:{width:"100%",margin:0}},t.name))))})),V=a(348),W=a(335),G=(a(314),Object(p.b)((function(e){return{userData:e.userData}}),(function(e){return{updatePosts:function(t){e({posts:t,type:"UPDATE_POSTS"})}}}))((function(e){var t=e.setVisible,a=e.userData,c=e.updatePosts,l=Object(n.useState)(""),o=Object(y.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(null),p=Object(y.a)(u,2),E=p[0],d=p[1],g=Object(n.useState)(!1),f=Object(y.a)(g,2),b=f[0],O=f[1];return r.a.createElement(h.a,null,r.a.createElement(h.a.Item,{name:"description"},r.a.createElement(j.a.TextArea,{autoSize:{minRows:4,maxRows:4},placeholder:"Cuantanos de que trata tu foto",onChange:function(e){i(e.target.value)}})),r.a.createElement(W.a,{style:{cursor:"pointer"},beforeUpload:function(e,t){d(e)},onRemove:function(){d(null)}},r.a.createElement(v.a,{block:!0},r.a.createElement(V.a,null),"Upload")),r.a.createElement(h.a.Item,{style:{width:"100%",marginTop:10}},r.a.createElement(v.a,{type:"primary",onClick:function(){if(!E||0===s.length)return console.log("no se puede enviar");O(!0);var e=new FormData;e.append("newPost",E),e.append("description",s),e.append("email",a.email),m.a.put("".concat("","/upload-post"),e).then((function(e){c(e.data.posts),localStorage.setItem("token_access",e.data.token),t(!1)})).catch((function(e){console.log(e),O(!1)}))},loading:b,block:!0},"Enviar")))}))),M=(a(327),function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{title:"Publica algo",onCancel:function(){c(!1)},visible:a,footer:null},r.a.createElement(G,{setVisible:c})),r.a.createElement(b.a,{style:{marginTop:10,border:"1px solid #b0bec5",display:"flex",justifyContent:"center",cursor:"pointer"},onClick:function(){c(!0)}},r.a.createElement(L.a,null),"Add Post"))}),$=(a(328),function(){return r.a.createElement("main",{id:"main_container"},r.a.createElement(g.a,null,r.a.createElement(f.a,{xs:24,lg:16},r.a.createElement(B,null),r.a.createElement(M,null)),r.a.createElement(f.a,{xs:0,lg:8},r.a.createElement(J,null))))}),H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement($,null),r.a.createElement("div",{style:{padding:"0 300px"}}))},K=Object(p.b)((function(e){return{userData:e.userData}}),(function(e){return{setUserData:function(t){e({type:"UPDATE_USER",userData:t})}}}))((function(e){var t=e.userData,a=e.setUserData;return t?r.a.createElement(H,null):r.a.createElement(g.a,{justify:"center",style:{marginTop:50}},r.a.createElement(f.a,{xs:24,sm:20,lg:12},r.a.createElement(g.a,null,r.a.createElement(f.a,{xs:0,lg:10,style:{marginTop:50}},r.a.createElement("img",{style:{width:"100%"},src:"images/loggin.jpg",alt:"loggin"})),r.a.createElement(f.a,{xs:24,lg:14,style:{marginTop:50,paddingLeft:30}},r.a.createElement(k,{setUserData:a}),r.a.createElement(b.a,{style:{display:"flex",justifyContent:"center",marginTop:20}},"\xbfNo tienes cuenta? ",r.a.createElement(E.b,{to:"accounts/emailsignup"},"Registrate")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:10}},"Descargar App"),r.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"space-around"}},r.a.createElement("a",{href:"https://apps.apple.com/app/instagram/id389801252?vt=lo",style:{width:"45%"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:{width:"100%"},src:"images/appstore.png",alt:"appstore"})),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9E06A507-6240-4C66-8389-287323EA0DEA%26utm_content%3Dlo%26utm_medium%3Dbadge",style:{width:"45%"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:{width:"100%"},src:"images/playstore.png",alt:"playstore"})))))))})),Q=(a(329),function(e){var t=e.setUserData,a=Object(n.useState)(!1),c=Object(y.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),p=Object(y.a)(u,2),E=p[0],g=p[1],f=Object(n.useState)(!1),b=Object(y.a)(f,2),O=b[0],D=b[1],w=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat("","/signup-users"),a);case 2:n=e.sent,r=n.data,c=r.user,l=r.message,i=r.token,console.log(n),c?(localStorage.setItem("token_access",i),t(c),D(!0)):(g(l),o(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O?r.a.createElement(d.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{onFinish:w},r.a.createElement(h.a.Item,{name:"email",rules:[{required:!0,message:"Correo electronico necesario"}]},r.a.createElement(j.a,{placeholder:"Correo electr\xf3nico"})),r.a.createElement(h.a.Item,{name:"name",rules:[{required:!0,message:"Nombre necesario"}]},r.a.createElement(j.a,{placeholder:"Nombre completo"})),r.a.createElement(h.a.Item,{name:"username",rules:[{required:!0,message:"Usuario necesario"}]},r.a.createElement(j.a,{placeholder:"Nombre de usuario"})),r.a.createElement(h.a.Item,{name:"password",rules:[{required:!0,message:"Contrase\xf1a necesaria"}]},r.a.createElement(j.a.Password,{placeholder:"contrase\xf1a"})),r.a.createElement(h.a.Item,null,r.a.createElement(v.a,{style:{width:"100%"},type:"primary",htmlType:"submit"},"Registrarse"))),r.a.createElement(x.a,{visible:l,onOk:function(){o(!1)}},r.a.createElement("p",null,E)))}),X=function(e){var t=e.setUserData;return r.a.createElement(g.a,{justify:"center"},r.a.createElement(f.a,{xs:12,lg:6},r.a.createElement(b.a,{style:{marginTop:20}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{style:{width:"60%"},src:"/images/clonogram.png",alt:"clonogram_img"})),r.a.createElement("h2",{style:{textAlign:"center",color:"rgb(142,142,142)",fontSize:17}},"Reg\xedstrate para ver fotos y videos de tus amigos."),r.a.createElement(S,{setUserData:t}),r.a.createElement(D.a,null,"O"),r.a.createElement(Q,{setUserData:t}))))},Y=(a(330),Object(p.b)((function(e){return{userData:e.userData}}))((function(e){var t=e.userData,a=null===t||void 0===t?void 0:t.posts,c=Object(n.useState)([]),l=Object(y.a)(c,2),o=l[0],u=l[1],p=Object(n.useState)(!1),E=Object(y.a)(p,2),d=E[0],b=E[1],h=Object(n.useState)(""),j=Object(y.a)(h,2),v=j[0],O=j[1];if(Object(n.useEffect)((function(){a&&function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m.a.post("".concat("","/posts"),{postsID:a});case 4:t=e.sent,u(t.data.posts);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),!a)return r.a.createElement("div",null,"no hay posts");return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{visible:d,onCancel:function(){b(!1)},footer:null},r.a.createElement("img",{src:v,alt:"modalpost",style:{width:"100%",height:"100%"}})),r.a.createElement(N,null),r.a.createElement("div",{style:{padding:"0 200px"}},r.a.createElement(g.a,null,o.map((function(e){return r.a.createElement(f.a,{xs:8,key:e.id},r.a.createElement("div",{className:"img_container",style:{width:"90%",height:"70%"},onClick:function(){b(!0),O(e.fileLink)}},r.a.createElement("img",{style:{width:"100%",height:"100%"},src:e.fileLink,alt:"posts"}),r.a.createElement("div",{className:"img_description"},r.a.createElement("span",null,e.description))))})))))}))),Z=localStorage.getItem("token_access"),ee=Object(p.b)((function(e){return{userData:e.userData}}),(function(e){return{setUserData:function(t){e({type:"UPDATE_USER",userData:t})}}}))((function(e){var t=e.userData,a=e.setUserData;return Object(n.useEffect)((function(){Z&&function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("","/verify-token"),{headers:{authorization:Z}});case 2:t=e.sent,(n=t.data.user)?a(n):localStorage.removeItem("token_access");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),r.a.createElement(E.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(K,{userData:t,setUserData:a})}}),r.a.createElement(d.b,{exact:!0,path:"/accounts/emailsignup",render:function(){return r.a.createElement(X,{setUserData:a})}}),r.a.createElement(d.b,{exact:!0,path:"/profile",component:Y})))})),te=a(80),ae=a(93),ne={userData:null},re=Object(ae.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;if("UPDATE_USER"===t.type)return Object(te.a)(Object(te.a)({},e),{},{userData:t.userData});if("UPDATE_POSTS"===t.type){var a=Object(te.a)({},e),n=a.userData;return n.posts=t.posts,Object(te.a)(Object(te.a)({},e),{},{userData:n})}return e})),ce=function(){return r.a.createElement(p.a,{store:re},r.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.1ed39545.chunk.js.map