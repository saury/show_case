(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156);t.default=function(){return r.a.createElement(i.a,{seo:{title:"旅游-厦门",description:"旅游-厦门",keywords:"旅游 厦门"},nav:{title:"飞行须知",back:"/xiamen/"}},r.a.createElement("div",{className:"content"},r.a.createElement("ol",{style:{margin:"0 24px"}},r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"保险起见提前一个半小时到机场，不要忘了开闹钟。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"上飞机前最好先上好厕所。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"上飞机不能带刀具、包括水的一切液体。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"带个杯子，飞机上干燥，可以问空姐要热水喝。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"飞机上冷，记得拿件长袖衣服披着/盖着大腿和膝盖，如果没带可以问空姐要条毯子。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"飞机起落时会有点难受，记得频繁咽口水，可以解决耳朵难受的问题。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"恐高就不要坐窗口啦！"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"最后不要紧张，就算出事也一飞机人陪葬呢！",r.a.createElement("span",{role:"img","aria-label":"haha"},"😆")))))}},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(50),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(162),s=a.n(c),u=a(7),p=a.n(u),m=a(153),d=a.n(m),f=a(169),h=a(164),y=a.n(h),g=a(165),x=a.n(g),b=a(159),E=a.n(b),v=a(166),w=a.n(v),k=a(167),q=a.n(k),N=a(168),R=a.n(N),B=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.title,n=e.back;return i.a.createElement("div",{className:t.root},i.a.createElement(y.a,{position:"fixed"},i.a.createElement(x.a,null,n?i.a.createElement(d.a,{to:n,style:{color:"white",textDecoration:"none"}},i.a.createElement(w.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(q.a,null))):i.a.createElement(w.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(R.a,null)),i.a.createElement(E.a,{variant:"h6",color:"inherit",className:t.flex},a))))},t}(i.a.Component);B.propTypes={classes:l.a.object.isRequired,title:l.a.string,back:l.a.string};var G=Object(f.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},leftButton:{marginLeft:-12,marginRight:20}})(B),j=a(456),C=a(457),P=j.a.Content,T={root:"top-nav"},S=function(e){var t=e.className,a=e.children,n=e.seo,r=void 0===n?{title:"Jin's Github Page",description:"Build with Blazing fast modern site generator for React —— Gatsby",keywords:"jin github page gatsby life"}:n,o=e.nav;return i.a.createElement(j.a,{className:t},r&&i.a.createElement(s.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:r.keywords}]}),o&&i.a.createElement(G,{classes:T,title:o.title,back:o.back}),i.a.createElement(P,{className:"main",id:"main"},i.a.createElement(C.a,{target:function(){return document.getElementById("main")}}),a))};S.propTypes={children:l.a.any};var L=S,I=Object(n.a)(L).withConfig({displayName:"styled__Layout",componentId:"pznffm-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;> .top-nav{position:absolute;top:0;left:0;right:0;width:100%;+ .main{top:56px;@media screen and (min-width:600px){top:64px;}}}> .main{position:absolute;top:0;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y:auto;}"]);t.a=I},163:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(153),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(154),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var p=a(34);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}}]);
//# sourceMappingURL=component---src-pages-xiamen-flight-js-0da8fd4f2f2f842ee864.js.map