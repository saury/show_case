(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(156),o=n(426),s=n.n(o),l=n(159),c=n.n(l),u=n(453);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{container:!0,alignItems:"center",justify:"center",style:{height:"100%"}},r.a.createElement(s.a,{item:!0,align:"center"},r.a.createElement("div",{className:"error-icon"},r.a.createElement(u.a,{type:"warning",style:{fontSize:60},theme:"twoTone",twoToneColor:"#f00"})),r.a.createElement(c.a,{variant:"h3",color:"inherit"},"404"),r.a.createElement(c.a,{variant:"body2",color:"inherit"},"NOT FOUND"))))}},154:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},155:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(50),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){"use strict";var a=n(161),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(162),c=n.n(l),u=n(7),d=n.n(u),f=n(153),p=n.n(f),m=n(169),g=n(164),x=n.n(g),h=n(165),y=n.n(h),v=n(159),w=n.n(v),b=n(166),E=n.n(b),j=n(167),C=n.n(j),S=n(168),k=n.n(S),P=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.title,a=e.back;return i.a.createElement("div",{className:t.root},i.a.createElement(x.a,{position:"fixed"},i.a.createElement(y.a,null,a?i.a.createElement(p.a,{to:a,style:{color:"white",textDecoration:"none"}},i.a.createElement(E.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(C.a,null))):i.a.createElement(E.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(k.a,null)),i.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.flex},n))))},t}(i.a.Component);P.propTypes={classes:s.a.object.isRequired,title:s.a.string,back:s.a.string};var N=Object(m.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},leftButton:{marginLeft:-12,marginRight:20}})(P),G=n(456),I=n(457),W=G.a.Content,q={root:"top-nav"},B=function(e){var t=e.className,n=e.children,a=e.seo,r=void 0===a?{title:"Jin's Github Page",description:"Build with Blazing fast modern site generator for React —— Gatsby",keywords:"jin github page gatsby life"}:a,o=e.nav;return i.a.createElement(G.a,{className:t},r&&i.a.createElement(c.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:r.keywords}]}),o&&i.a.createElement(N,{classes:q,title:o.title,back:o.back}),i.a.createElement(W,{className:"main",id:"main"},i.a.createElement(I.a,{target:function(){return document.getElementById("main")}}),n))};B.propTypes={children:s.a.any};var z=B,M=Object(a.a)(z).withConfig({displayName:"styled__Layout",componentId:"pznffm-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;> .top-nav{position:absolute;top:0;left:0;right:0;width:100%;+ .main{top:56px;@media screen and (min-width:600px){top:64px;}}}> .main{position:absolute;top:0;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y:auto;}"]);t.a=M},163:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(153),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(154),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},426:function(e,t,n){"use strict";var a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(427))},427:function(e,t,n){"use strict";var a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(49)),i=a(n(158)),o=a(n(157)),s=a(n(0)),l=(a(n(4)),a(n(170))),c=a(n(171)),u=n(245),d=(a(n(428)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,p=e.direction,g=e.item,x=e.justify,h=e.lg,y=e.md,v=e.sm,w=e.spacing,b=e.wrap,E=e.xl,j=e.xs,C=e.zeroMinWidth,S=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),k=(0,l.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,g),(0,r.default)(t,c.zeroMinWidth,C),(0,r.default)(t,c["spacing-xs-".concat(String(w))],f&&0!==w),(0,r.default)(t,c["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(b))],b!==m.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(x))],x!==m.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(j))],!1!==j),(0,r.default)(t,c["grid-sm-".concat(String(v))],!1!==v),(0,r.default)(t,c["grid-md-".concat(String(y))],!1!==y),(0,r.default)(t,c["grid-lg-".concat(String(h))],!1!==h),(0,r.default)(t,c["grid-xl-".concat(String(E))],!1!==E),t),u);return s.default.createElement(d,(0,o.default)({className:k},S))}t.styles=p,m.propTypes={},m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,c.default)(p,{name:"MuiGrid"})(m);t.default=g},428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a}}]);
//# sourceMappingURL=component---src-pages-404-js-8ab1c1f1dbd8cfd06345.js.map