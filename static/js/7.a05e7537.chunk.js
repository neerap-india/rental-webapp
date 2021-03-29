(this["webpackJsonprental-webapp"]=this["webpackJsonprental-webapp"]||[]).push([[7,1],{157:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(157);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},167:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.left,r=t.right,i=t.up,o=t.down,c=t.top,a=t.bottom,d=t.big,l=t.mirror,b=t.opposite,j=(n?1:0)|(r?2:0)|(c||o?4:0)|(a||i?8:0)|(l?16:0)|(b?32:0)|(e?64:0)|(d?128:0);if(u.hasOwnProperty(j))return u[j];var p=n||r||i||o||c||a,f=void 0,h=void 0;if(p){if(!l!=!(e&&b)){var m=[r,n,a,c,o,i];n=m[0],r=m[1],c=m[2],a=m[3],i=m[4],o=m[5]}var x=d?"2000px":"100%";f=n?"-"+x:r?x:"0",h=o||c?"-"+x:i||a?x:"0"}return u[j]=(0,s.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+f+", "+h+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),u[j]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,c=e.duration,a=void 0===c?s.defaults.duration:c,d=e.delay,b=void 0===d?s.defaults.delay:d,u=e.count,j=void 0===u?s.defaults.count:u,p=r(e,["children","out","forever","timeout","duration","delay","count"]),f={make:i,duration:void 0===o?a:o,delay:b,forever:n,count:j,style:{animationFillMode:"both"},reverse:p.left};return(0,l.default)(p,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var c,a=n(37),d=n(121),l=(c=d)&&c.__esModule?c:{default:c},s=n(101),b={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},u={};o.propTypes=b,t.default=o,e.exports=t.default},168:function(e,t,n){"use strict";n.r(t);var r,i=n(14),o=n(15).b.button(r||(r=Object(i.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n  }\n"])),(function(e){return e.color||"#0F2453"}),(function(e){return e.color?"#0F2453":"#fff"}),(function(e){return e.color?"1px solid #0F2453":"0px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"140px":"100%"}),(function(e){return e.width?"130px":"100%"})),c=n(4);t.default=function(e){var t=e.color,n=e.width,r=e.children,i=e.onClick;return Object(c.jsx)(o,{color:t,width:n,onClick:i,children:r})}},194:function(e,t,n){"use strict";n.r(t);var r,i,o,c,a,d,l,s,b,u,j,p=n(158),f=n(64),h=n(34),m=n(154),x=n(167),O=n.n(x),w=n(73),g=n(14),y=n(15),v=y.b.section(r||(r=Object(g.a)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 0rem;\n  }\n"]))),k=y.b.p(i||(i=Object(g.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),P=y.b.div(o||(o=Object(g.a)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),M=y.b.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),S=y.b.h6(a||(a=Object(g.a)(["\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n"]))),_=y.b.p(d||(d=Object(g.a)(["\n  font-size: 0.75rem;\n"]))),D=(Object(y.b)(h.a)(l||(l=Object(g.a)(["\n  margin: 2rem 0;\n  position: relative;\n"]))),n(4)),E=Object(m.a)()((function(e){var t=e.icon,n=e.title,r=e.content,i=e.section,o=e.t,c=e.id;return Object(D.jsx)(v,{children:Object(D.jsxs)(f.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(D.jsx)(h.a,{lg:11,md:11,sm:12,xs:24,children:Object(D.jsx)(O.a,{left:!0,children:Object(D.jsx)(w.default,{src:t,className:"about-block-image",width:"100%",height:"100%"})})}),Object(D.jsx)(h.a,{lg:11,md:11,sm:11,xs:24,children:Object(D.jsx)(O.a,{right:!0,children:Object(D.jsxs)(P,{children:[Object(D.jsx)("h6",{children:o(n)}),Object(D.jsx)(k,{children:o(r)}),Object(D.jsx)(M,{children:Object(D.jsx)(f.a,{type:"flex",justify:"space-between",children:i&&"object"===typeof i&&i.map((function(e,t){return Object(D.jsxs)(h.a,{span:11,children:[Object(D.jsx)(w.default,{src:e.icon,width:"60px",height:"60px"}),Object(D.jsx)(S,{children:o(e.title)}),Object(D.jsx)(_,{children:o(e.content)})]},t)}))})})]})})})]})})})),F=n(151),z=n(168),B=y.b.section(s||(s=Object(g.a)(["\n  position: relative;\n  padding: 16rem 0 8rem;\n  \n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 0rem;\n  }\n"]))),C=y.b.p(b||(b=Object(g.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),I=y.b.div(u||(u=Object(g.a)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),A=y.b.div(j||(j=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n"]))),J=Object(m.a)()((function(e){var t=e.title,n=e.content,r=e.button,i=e.icon,o=e.t,c=e.id;return Object(D.jsx)(B,{children:Object(D.jsxs)(f.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(D.jsx)(h.a,{lg:11,md:11,sm:11,xs:24,children:Object(D.jsx)(O.a,{left:!0,children:Object(D.jsxs)(I,{children:[Object(D.jsx)("h6",{children:o(t)}),Object(D.jsx)(C,{children:o(n)}),Object(D.jsx)(A,{children:r&&"object"===typeof r&&r.map((function(e,t){return Object(D.jsx)(z.default,{color:e.color,width:"true",onClick:function(){return"Services"===e.title?function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}("about"):void F.a.success({content:Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{children:"Make a call to +91 84893 86058 for hassle free booking. "}),Object(D.jsx)("p",{children:"Stay in touch with us, online booking is coming soon"})]}),onOk:function(){/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.open("tel:918489386058","_blank")}})},children:o(e.title)},t)}))})]})})}),Object(D.jsx)(h.a,{lg:11,md:11,sm:12,xs:24,children:Object(D.jsx)(O.a,{right:!0,children:Object(D.jsx)(w.default,{src:i,className:"about-block-image",width:"100%",height:"100%"})})})]})})}));t.default=function(e){return"left"===e.type?Object(D.jsx)(E,Object(p.a)({},e)):"right"===e.type?Object(D.jsx)(J,Object(p.a)({},e)):null}}}]);
//# sourceMappingURL=7.a05e7537.chunk.js.map