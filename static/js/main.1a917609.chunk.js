(this.webpackJsonpprojectandportfoliov=this.webpackJsonpprojectandportfoliov||[]).push([[0],{10:function(e,t,s){e.exports={star:"styles_star__2i56v",griddisplay:"styles_griddisplay__1W03G",endding:"styles_endding__2UQCv",wrapper:"styles_wrapper__1vdJS",container:"styles_container__1A9ab",item:"styles_item__2su16",socials:"styles_socials__f-skR",message:"styles_message__2QBPq",welcome:"styles_welcome__Wj5V2"}},58:function(e,t,s){},59:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(5),r=s.n(c),i=s(39),a=s.n(i),n=(s(58),s(14)),l=(s(59),s(21)),o=s.n(l),d=s(30),j=s(29),b=s(44),h={signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(){return!0}},signInOptions:[{provider:"apple.com"},j.a.auth.GoogleAuthProvider.PROVIDER_ID,j.a.auth.FacebookAuthProvider.PROVIDER_ID,j.a.auth.GithubAuthProvider.PROVIDER_ID,b.auth.AnonymousAuthProvider.PROVIDER_ID]},p=function(){j.a.auth().currentUser.isAnonymous&&j.a.auth().currentUser.delete(),j.a.auth().signOut()};j.a.initializeApp({apiKey:"AIzaSyB-zeAyZvTsatuQKDqW8_wkDNOP_N17XOw",authDomain:"projectandportfoliov-api.firebaseapp.com",projectId:"projectandportfoliov-api",storageBucket:"projectandportfoliov-api.appspot.com",messagingSenderId:"301701598347",appId:"1:301701598347:web:066b1871d7080c8f52588e",measurementId:"G-MWEWF5L0SC"}),console.log("Uploading data to the database with the following config:\n"),console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");var f=j.a.firestore(),u=j.a.auth(),O=s(52),g=s.n(O),x=(s(70),s(13)),m=s(10),y=s.n(m),k=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/search/photos?page=2&query=product?orientation=squareish",{method:"GET",headers:{Authorization:"Client-ID nBAYk2vkWhWn_frzSCYPHRU5bwFjHjSCrsCDEEyJcbA",Accept:"application/json","Cache-Control":"no-cache"}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=s(4);function N(){var e=Object(c.useState)(),t=Object(n.a)(e,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){k().then((function(e){return console.log(e.results),r(e.results)}))}),[]),s?Object(v.jsxs)("div",{id:"wrapper",children:[Object(v.jsx)("div",{className:"item",children:s.map((function(e,t){return Object(v.jsxs)("article",{style:{backgroundImage:"url("+e.urls.small+")",backgroundSize:"cover"},children:[Object(v.jsxs)("header",{children:[Object(v.jsxs)("p",{style:{color:"black",backgroundColor:"white"},children:["#",e.id]}),Object(v.jsx)("p",{children:"Description:"}),Object(v.jsx)("p",{style:{color:"black",backgroundColor:"white"},children:e.alt_description?e.alt_description:e.description})]}),Object(v.jsx)("footer",{children:Object(v.jsxs)("p",{children:[Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star})]})})]})}))}),Object(v.jsx)("div",{className:"item",children:s.map((function(e,t){return Object(v.jsxs)("article",{style:{backgroundImage:"url("+e.urls.small+")",backgroundSize:"cover"},children:[Object(v.jsxs)("header",{children:[Object(v.jsxs)("p",{style:{color:"black",backgroundColor:"white"},children:["#",e.id]}),Object(v.jsx)("p",{children:"Description:"}),Object(v.jsx)("p",{style:{color:"black",backgroundColor:"white"},children:e.alt_description?e.alt_description:e.description})]}),Object(v.jsx)("footer",{children:Object(v.jsxs)("p",{children:[Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star})]})})]})}))}),Object(v.jsx)("div",{className:"item",children:s.map((function(e,t){return Object(v.jsxs)("article",{style:{backgroundImage:"url("+e.urls.small+")",backgroundSize:"cover"},children:[Object(v.jsxs)("header",{children:[Object(v.jsxs)("p",{style:{color:"black",backgroundColor:"white"},children:["#",e.id]}),Object(v.jsx)("p",{children:"Description:"}),Object(v.jsx)("p",{style:{color:"black",backgroundColor:"white"},children:e.alt_description?e.alt_description:e.description})]}),Object(v.jsx)("footer",{children:Object(v.jsxs)("p",{children:[Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star})]})})]})}))})]}):Object(v.jsx)("p",{children:"Loading..."})}var w=s(18);function C(e){return Object(v.jsx)(w.a,{pages:e.pages,className:"parallax",style:{top:"0",left:"0"},children:e.children})}var _=s.p+"static/media/rose.3a889b9f.svg",S=s.p+"static/media/roses.97aed43a.svg",F=s.p+"static/media/flower.abb5dbf2.svg",I=s.p+"static/media/forgetmenots.13ac54a3.svg",D=s.p+"static/media/leaves.15fe27a6.svg",L=function(){var e=Object(c.useRef)(0);return Object(v.jsx)("div",{children:Object(v.jsxs)(C,{ref:e,pages:3,children:[Object(v.jsx)(w.b,{offset:1,speed:1}),Object(v.jsx)(w.b,{offset:2,speed:1}),Object(v.jsx)(w.b,{offset:0,speed:0,factor:3}),Object(v.jsx)("p",{children:"Please Scroll Down."}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"20%",marginLeft:"60%"}}),Object(v.jsxs)(w.b,{offset:1.3,speed:-.3,style:{pointerEvents:"none"},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:F,style:{width:"15%",marginLeft:"70%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"20%",marginLeft:"55%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"10%",marginLeft:"15%"}})]}),Object(v.jsxs)(w.b,{offset:1,speed:.2,style:{opacity:.2},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"10%",marginLeft:"10%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"20%",marginLeft:"75%"}})]}),Object(v.jsxs)(w.b,{offset:2,speed:.8,style:{opacity:.2},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"20%",marginLeft:"55%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"10%",marginLeft:"15%"}})]}),Object(v.jsxs)(w.b,{offset:1.75,speed:.5,style:{opacity:.3},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"20%",marginLeft:"70%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"20%",marginLeft:"40%"}})]}),Object(v.jsxs)(w.b,{offset:.5,speed:-.1,style:{opacity:.3},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"20%",marginLeft:"60%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"25%",marginLeft:"30%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"10%",marginLeft:"80%"}})]}),Object(v.jsxs)(w.b,{offset:1.6,speed:-.1,style:{opacity:.3},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"20%",marginLeft:"60%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"25%",marginLeft:"30%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"10%",marginLeft:"80%"}})]}),Object(v.jsxs)(w.b,{offset:2.6,speed:.4,style:{opacity:.6},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{display:"block",width:"20%",marginLeft:"5%"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"15%",marginLeft:"75%"}})]}),Object(v.jsxs)(w.b,{offset:2,speed:.4,style:{opacity:.6},children:[Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:_,style:{display:"block",width:"50%",marginLeft:"45%",transform:"rotate(340deg)"}}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:D,style:{display:"block",width:"30%",marginLeft:"30%"}})]}),Object(v.jsx)(w.b,{offset:2.5,speed:-.4,style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:S,style:{width:"100%"}})}),Object(v.jsx)(w.b,{offset:2,speed:-.3,style:{backgroundSize:"80%",backgroundPosition:"center",margin:"1rem",backgroundImage:{leaves:D}}}),Object(v.jsxs)(w.b,{offset:0,speed:.1,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)("img",{id:"firstFlower",alt:"design by Nsaeoosh: floral pack",src:I,style:{width:"50%"}}),Object(v.jsx)("div",{className:"greetings",children:Object(v.jsxs)("div",{className:"text",children:[Object(v.jsx)("h4",{children:" Project and Portfolio"}),Object(v.jsx)("p",{children:"Learning and educational  purposes "}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),Object(v.jsx)(w.b,{offset:1,speed:.1,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(v.jsx)("img",{id:"secondFlower",alt:"design by Nsaeoosh: floral pack",src:_,style:{width:"70%"}})}),Object(v.jsx)(w.b,{offset:2,speed:-0,pantyle:{dianlay:"flex",alignItems:"center",justifyContent:"center"},children:Object(v.jsxs)("section",{children:[Object(v.jsx)("article",{children:Object(v.jsxs)("header",{style:{fontSize:"1rem",textAlign:"center"},children:[Object(v.jsx)("div",{className:"greetings",children:Object(v.jsxs)("div",{className:"text",children:[Object(v.jsx)("h4",{children:"Contact:"}),Object(v.jsx)(v.Fragment,{children:"Contact Information"}),Object(v.jsx)("p",{children:"email@mail.com"}),Object(v.jsx)("p",{children:"1(234)567-8910"}),Object(v.jsx)("p",{children:"Thanks for reading!"})]})}),Object(v.jsx)("img",{alt:"design by Nsaeoosh: floral pack",src:_,style:{width:"100%"}})]})}),Object(v.jsx)("article",{style:{padding:"1rem"},children:Object(v.jsxs)("header",{children:[Object(v.jsx)("h4",{style:{color:"#fff",fontSize:"18px"},children:"Signout as Guest:"}),Object(v.jsx)("button",{onClick:function(){return p()},children:"Sign-out"})]})})]})})]})})},A=s(28),E=[];var P=function(){var e=Object(c.useState)({items:[]}),t=Object(n.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(!1),l=Object(n.a)(a,1)[0],j=Object(c.useState)(!1),b=Object(n.a)(j,2),O=b[0],x=b[1],m=r.a.useRef();Object(c.useEffect)((function(){document.title=!1===O?"You are signed out! ":"You are signed in! "})),Object(c.useEffect)((function(){var e=u.onAuthStateChanged((function(e){x(!!e)}));return function(){return e()}}),[]),Object(c.useEffect)((function(){k()}),[]);var k=function(){f.collection("messages").get().then((function(e){e.empty?console.log("No such document!"):(console.log(e.docs.messages),e.forEach((function(e){var t=e.data();return E.push(t),console.log(E),i({items:[]}),i({items:E})})))}))};function w(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(o.a.mark((function e(t){var s,c,r,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=f.batch(),c=f.collection("messages"),r=u.currentUser.providerData[0],""===t){e.next=19;break}return console.log(r),i={user:r.displayName,email:r.email,provider:r.providerId,message:t,favs:["veggies","fruits"]},e.next=8,c.add(i);case 8:if(a=e.sent,console.log("loading...",a),alert("success:"+JSON.stringify(i)+" to firestore: "+JSON.stringify(a.firestore._delegate._app.options_.projectId)),l){e.next=16;break}return alert("success"),e.abrupt("return",s.commit());case 16:console.log("loading...");case 17:e.next=21;break;case 19:return alert("Please enter vaild post that isn't empty."),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(){return s.items.length>0?s.items.map((function(e){return Object(v.jsxs)("li",{className:y.a.message,children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("h5",{children:"Email:"})," ",Object(v.jsx)("hr",{}),e.email]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("h5",{children:"Provider:"}),Object(v.jsx)("hr",{})," ",e.provider]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("h5",{children:"Message:"}),Object(v.jsx)("hr",{})," ",e.message]}),Object(v.jsxs)("p",{children:[Object(v.jsx)(A.f,{onClick:function(e){e.preventDefault(),alert("404")}}),Object(v.jsx)(A.a,{onClick:function(e){e.preventDefault(),alert("404")}})]})]})})):Object(v.jsx)("span",{children:"There are no entries."})};return O?function(e){if(console.log(e.currentUser.isAnonymous),e.currentUser.isAnonymous)return Object(v.jsx)("div",{children:Object(v.jsx)(L,{})});if(!e.currentUser.isAnonymous&&"google.com"===e.currentUser.providerData[0].providerId){var t=e.currentUser;return console.log(e.currentUser),Object(v.jsxs)("div",{className:y.a.welcome,children:[Object(v.jsxs)("section",{children:[Object(v.jsx)("article",{children:Object(v.jsxs)("p",{children:["Welcome ",t.displayName,"!",Object(v.jsx)("br",{}),"You are now signed-in with email: ",t.email,"!",Object(v.jsx)("br",{})," As your sign-in provider: ",e.currentUser.providerData[0].providerId,Object(v.jsx)("button",{onClick:function(){return p()},children:"Sign-out"})]})}),Object(v.jsx)("article",{children:Object(v.jsxs)("form",{children:[Object(v.jsx)("h5",{children:"Post a Message:"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"message",children:"Message"}),Object(v.jsx)("textarea",{rows:"8",cols:"30",id:"message",ref:m})]}),Object(v.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),w(m.current.value)},children:"Submit"})]})})]}),Object(v.jsx)("h4",{children:" Feed: "}),Object(v.jsx)("ul",{className:y.a.messages,children:Object(v.jsx)(_,{})}),Object(v.jsx)("section",{id:"grid",children:Object(v.jsx)(N,{})})]})}if(!e.currentUser.isAnonymous){var s=e.currentUser.providerData[0];return Object(v.jsxs)("div",{className:y.a.welcome,children:[Object(v.jsxs)("section",{children:[Object(v.jsx)("article",{children:Object(v.jsxs)("p",{children:["Welcome ",s.displayName,"!",Object(v.jsx)("br",{}),"You are now signed-in with email: ",s.email,"!",Object(v.jsx)("br",{})," As your sign-in provider: ",s.providerId,Object(v.jsx)("button",{onClick:function(){return p()},children:"Sign-out"})]})}),Object(v.jsx)("article",{children:Object(v.jsxs)("form",{children:[Object(v.jsx)("h5",{children:"Post a Message:"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"message",children:"Message"}),Object(v.jsx)("textarea",{rows:"8",cols:"30",id:"message",ref:m})]}),Object(v.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),w(m.current.value)},children:"Submit"})]})})]}),Object(v.jsx)("h4",{children:" Feed: "}),Object(v.jsx)("ul",{className:y.a.messages,children:Object(v.jsx)(_,{})}),Object(v.jsx)("section",{id:"grid",children:Object(v.jsx)(N,{})})]})}console.log("catch any odd errors on load.")}(u):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"Please sign-in:"}),Object(v.jsx)(g.a,{uiConfig:h,firebaseAuth:u})]})},T=s(53);function U(){var e=[Object(v.jsx)(A.b,{}),Object(v.jsx)(A.g,{}),Object(v.jsx)(A.d,{}),Object(v.jsx)(A.h,{}),Object(v.jsx)(A.c,{})];return Object(v.jsxs)("footer",{className:y.a.socials,children:[Object(v.jsx)("p",{children:e.map((function(e,t){return Object(v.jsx)("span",{onClick:function(){alert("404: Under Construction")},children:e},t)}))}),Object(v.jsx)("p",{children:Object(v.jsx)("span",{onClick:function(){alert("404")},children:Object(v.jsx)(T.a,{})})})]})}var R=s(8),z=s(25),W=s(20),M=[{product:"Title",id:0,name:"Rare Wind",description:"#a8edea \u2192 #fed6e3",css:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",height:200},{product:"Title",id:1,name:"Saint Petersburg",description:"#f5f7fa \u2192 #c3cfe2",css:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",height:400},{product:"Title",id:2,name:"Deep Blue",description:"#e0c3fc \u2192 #8ec5fc",css:"linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",height:400},{product:"Title",id:3,name:"Ripe Malinka",description:"#f093fb \u2192 #f5576c",css:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",height:400},{product:"Title",id:4,name:"Perfect White",description:"#fdfbfb \u2192 #ebedee",css:"linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",height:400},{product:"Title",id:5,name:"Near Moon",description:"#5ee7df \u2192 #b490ca",css:"linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",height:400},{product:"Title",id:6,name:"Wild Apple",description:"#d299c2 \u2192 #fef9d7",css:"linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",height:200},{product:"Title",id:7,name:"Ladoga Bottom",description:"#ebc0fd \u2192 #d9ded8",css:"linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)",height:400},{product:"Title",id:8,name:"Sunny Morning",description:"#f6d365 \u2192 #fda085",css:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)",height:200},{product:"Title",id:9,name:"Lemon Gate",description:"#96fbc4 \u2192 #f9f586",css:"linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",height:400},{product:"Title",id:10,name:"Salt Mountain",description:" #FFFEFF \u2192 #D7FFFE",css:"linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)",height:200},{product:"Title",id:11,name:"New York",description:" #fff1eb \u2192 #ace0f9",css:"linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",height:400},{product:"Title",id:12,name:"Soft Grass",description:" #c1dfc4 \u2192 #deecdd",css:"linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",height:400},{product:"Title",id:13,name:"Japan Blush",description:" #ddd6f3 \u2192 #faaca8",css:"linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",height:200}];function G(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],r=t[1],i=Object(W.useSpringRef)(),a=Object(W.useSpring)({ref:i,config:W.config.stiff,from:{size:"20%",backgroundColor:"transparent"},to:{size:s?"100%":"20%",backgroundImage:s?"tranparent":"transparent"}}),l=a.size,o=Object(z.a)(a,["size"]),d=Object(W.useSpringRef)(),j=Object(W.useTransition)(s?M:[],{ref:d,trail:400/M.length,from:{opacity:0,scale:0},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0}});return Object(W.useChain)(s?[i,d]:[d,i],[0,s?.1:.6]),k(),Object(c.useEffect)((function(){return r((function(e){return!e})),function(){}}),[]),Object(v.jsx)("div",{className:y.a.wrapper,children:Object(v.jsx)(W.animated.div,{style:Object(R.a)(Object(R.a)({},o),{},{width:l,minWidth:"10rem",height:l}),className:y.a.container,children:j((function(e,t){return Object(v.jsx)(W.animated.div,{id:"cards",className:y.a.item,style:Object(R.a)(Object(R.a)({},e),{},{backgroundImage:t.css}),children:Object(v.jsxs)("article",{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("p",{children:[t.product," #",t.id]})}),Object(v.jsx)("p",{children:"Description:"}),Object(v.jsx)("p",{children:t.name}),Object(v.jsx)("footer",{children:Object(v.jsxs)("p",{children:[Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star}),Object(v.jsx)(x.c,{className:y.a.star})]})})]})})}))})})}var B=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],r=t[1],i=function(){r(!s)},a=function(e){e.preventDefault(),alert("Under Construction")},l=function(e){e.preventDefault(),alert("Under Construction")},o=function(){return s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsxs)("nav",{className:"navigation-left",children:[Object(v.jsx)("p",{children:Object(v.jsx)("button",{onClick:i,children:s?"Close":"Login"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{for:"site-search",children:"Search the site:"}),Object(v.jsx)("input",{type:"search",id:"site-search","aria-label":"Search through site content"}),Object(v.jsx)("button",{onClick:l,children:Object(v.jsx)(x.b,{})})]})}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{onClick:a,children:Object(v.jsx)(x.a,{})})})]})}),Object(v.jsxs)("p",{children:[Object(v.jsx)("svg",{width:"0",height:"0",children:Object(v.jsxs)("linearGradient",{id:"blue-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[Object(v.jsx)("stop",{stopColor:"#16bac5ff",offset:"0%"}),Object(v.jsx)("stop",{stopColor:"#5863f8ff",offset:"100%"})]})}),Object(v.jsx)("h1",{children:Object(v.jsx)(A.e,{style:{stroke:"url(#blue-gradient)"}})})]}),Object(v.jsx)(P,{}),Object(v.jsx)(U,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsxs)("nav",{className:"navigation-left",children:[Object(v.jsx)("p",{children:Object(v.jsx)("button",{onClick:i,children:"Login"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{for:"site-search",children:"Search the site:"}),Object(v.jsx)("input",{type:"search",id:"site-search","aria-label":"Search through site content"}),Object(v.jsx)("button",{onClick:l,children:Object(v.jsx)(x.b,{})})]})}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{onClick:a,children:Object(v.jsx)(x.a,{})})})]})}),Object(v.jsxs)("p",{children:[Object(v.jsx)("svg",{width:"0",height:"0",children:Object(v.jsxs)("linearGradient",{id:"blue-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[Object(v.jsx)("stop",{stopColor:"#16bac5ff",offset:"0%"}),Object(v.jsx)("stop",{stopColor:"#5863f8ff",offset:"100%"})]})}),Object(v.jsx)("h1",{children:Object(v.jsx)(A.e,{style:{stroke:"url(#blue-gradient)"}})})]}),Object(v.jsx)("h2",{children:"Favorites"}),Object(v.jsx)(G,{})]})};return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(o,{})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),J()}},[[72,1,2]]]);
//# sourceMappingURL=main.1a917609.chunk.js.map