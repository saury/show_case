(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(e,t,n){"use strict";n.r(t);n(352);var i,a=n(9),s=n.n(a),r=n(0),o=n.n(r),c=n(288),l=("undefined"!=typeof window&&window).localStorage,m={backListVersion:1,backList:[{name:"身份证",finished:!1},{name:"银行卡",finished:!1},{name:"充电器",finished:!1},{name:"充电宝(容量小于等于10000毫安)",finished:!1},{name:"杯子",finished:!1},{name:"雨伞",finished:!1},{name:"毛巾",finished:!1},{name:"牙刷",finished:!1},{name:"防晒霜",finished:!1},{name:"面膜",finished:!1},{name:"护肤品",finished:!1},{name:"卸妆水",finished:!1},{name:"纸巾",finished:!1},{name:"姨妈巾",finished:!1},{name:"隐形眼镜",finished:!1},{name:"太阳镜",finished:!1},{name:"睡衣",finished:!1},{name:"内衣",finished:!1},{name:"长袖",finished:!1},{name:"长裤",finished:!1},{name:"短袖",finished:!1},{name:"中裤or裙子",finished:!1},{name:"长袜子",finished:!1},{name:"短袜子",finished:!1},{name:"帽子",finished:!1},{name:"拖鞋",finished:!1},{name:"运动鞋",finished:!1}]},d=l&&l.getItem&&l.getItem("backlist"),f=l&&l.getItem&&l.getItem("backlistVersion");d&&parseInt(f)===parseInt(m.backListVersion)?i=JSON.parse(d).backList:(i=m.backList,l&&l.setItem&&l.setItem("backlist",JSON.stringify(m)),l&&l.setItem&&l.setItem("backlistVersion",m.backListVersion));var h=function(e){function t(t){var n;return(n=e.call(this,t)||this).changeHandler=function(e){var t=[].concat(i);t[e].finished=!t[e].finished,n.setState({backList:t}),l&&l.setItem&&l.setItem("backlist",JSON.stringify({backList:t}))},n.state={backList:i},n}return s()(t,e),t.prototype.render=function(){var e=this,t=i.map(function(t,n){return o.a.createElement("li",{key:n,onClick:function(){return e.changeHandler(n)},style:{textDecoration:t.finished?"line-through":"none",color:t.finished?"#ccc":"#333",margin:0,lineHeight:2.5}},o.a.createElement("input",{style:{marginRight:"12px"},type:"checkbox",checked:t.finished,readOnly:!0}),t.name)});return o.a.createElement(c.a,{seo:{title:"旅游-厦门",description:"旅游-厦门",keywords:"旅游 厦门"},nav:{title:"回程清单",back:"/xiamen/"}},o.a.createElement("div",{className:"content"},o.a.createElement("p",{style:{marginBottom:"8px"}},"出行清单的副本，检查一下有无遗漏在客房吧："),o.a.createElement("ul",{style:{margin:0,listStyle:"none"}},t)))},t}(r.Component);t.default=h},288:function(e,t,n){"use strict";var i=n(296),a=n(0),s=n.n(a),r=n(1),o=n.n(r),c=n(297),l=n.n(c),m=n(9),d=n.n(m),f=n(55),h=n.n(f),p=n(83),u=n(298),b=n.n(u),g=n(299),y=n.n(g),k=n(294),w=n.n(k),v=n(300),E=n.n(v),x=n(301),I=n.n(x),N=n(302),L=n.n(N),B=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.title,i=e.back;return s.a.createElement("div",{className:t.root},s.a.createElement(b.a,{position:"fixed"},s.a.createElement(y.a,null,i?s.a.createElement(h.a,{to:i,style:{color:"white",textDecoration:"none"}},s.a.createElement(E.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},s.a.createElement(I.a,null))):s.a.createElement(E.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},s.a.createElement(L.a,null)),s.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.flex},n))))},t}(s.a.Component);B.propTypes={classes:o.a.object.isRequired,title:o.a.string,back:o.a.string};var S=Object(p.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},leftButton:{marginLeft:-12,marginRight:20}})(B),J=n(537),O=n(533),C=(n(303),n(304),J.a.Content),V={root:"top-nav"},j=function(e){var t=e.className,n=e.children,i=e.seo,a=void 0===i?{title:"Jin's Github Page",description:"Build with Blazing fast modern site generator for React —— Gatsby",keywords:"jin github page gatsby life"}:i,r=e.nav;return s.a.createElement(J.a,{className:t},a&&s.a.createElement(l.a,{title:a.title,meta:[{name:"description",content:a.description},{name:"keywords",content:a.keywords}]}),r&&s.a.createElement(S,{classes:V,title:r.title,back:r.back}),s.a.createElement(C,{className:"main",id:"main"},s.a.createElement(O.a,{target:function(){return document.getElementById("main")}}),n))};j.propTypes={children:o.a.any};var G=j,R=Object(i.a)(G).withConfig({displayName:"styled__Layout",componentId:"pznffm-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;> .top-nav{position:absolute;top:0;left:0;right:0;width:100%;+ .main{top:56px;@media screen and (min-width:600px){top:64px;}}}> .main{position:absolute;top:0;bottom:0;left:0;right:0;padding:0 5%;overflow-x:hidden;overflow-y:auto;}"]);t.a=R},352:function(e,t,n){var i=n(39).f,a=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in a||n(25)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-xiamen-checklist-back-js-1a671f6ffa8cec231cc7.js.map