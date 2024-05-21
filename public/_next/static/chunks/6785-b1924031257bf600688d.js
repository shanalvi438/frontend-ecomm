"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6785],{81076:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"}},20710:function(e,t,n){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(63031))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},63031:function(e,t,n){var r=n(95318),o=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),s=r(n(81076)),i=r(n(92074)),l=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:s.default}))};l.displayName="StarFilled";var c=a.forwardRef(l);t.default=c},43927:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(93120),o=n.n(r),a=n(67294),s=n(4942),i=n(15671),l=n(43144),c=n(3925),u=n(82963),d=n(61120),h=n(34203),f=n(94184),p=n.n(f),v=n(15105);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.Z)(e);if(t){var o=(0,d.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var g=function(e){(0,c.Z)(n,e);var t=m(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,r=n.onClick,o=n.index;13===t.keyCode&&r(t,o)},e}return(0,l.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,r=e.value,o=e.allowHalf,a=e.focused,s=n+1,i=t;return 0===r&&0===n&&a?i+=" ".concat(t,"-focused"):o&&r+.5>=s&&r<s?(i+=" ".concat(t,"-half ").concat(t,"-active"),a&&(i+=" ".concat(t,"-focused"))):(i+=" ".concat(t,s<=r?"-full":"-zero"),s===r&&a&&(i+=" ".concat(t,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,r=this.props,o=r.disabled,s=r.prefixCls,i=r.character,l=r.characterRender,c=r.index,u=r.count,d=r.value,h="function"===typeof i?i(this.props):i,f=a.createElement("li",{className:this.getClassName()},a.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>c?"true":"false","aria-posinset":c+1,"aria-setsize":u,tabIndex:o?-1:0},a.createElement("div",{className:"".concat(s,"-first")},h),a.createElement("div",{className:"".concat(s,"-second")},h)));return l&&(f=l(f,this.props)),f}}]),n}(a.Component);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.Z)(e);if(t){var o=(0,d.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}function j(){}var w=function(e){(0,c.Z)(n,e);var t=b(n);function n(e){var r;(0,i.Z)(this,n),(r=t.call(this,e)).onHover=function(e,t){var n=r.props.onHoverChange,o=r.getStarValue(t,e.pageX);o!==r.state.cleanedValue&&r.setState({hoverValue:o,cleanedValue:null}),n(o)},r.onMouseLeave=function(){var e=r.props.onHoverChange;r.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},r.onClick=function(e,t){var n=r.props.allowClear,o=r.state.value,a=r.getStarValue(t,e.pageX),s=!1;n&&(s=a===o),r.onMouseLeave(),r.changeValue(s?0:a),r.setState({cleanedValue:s?a:null})},r.onFocus=function(){var e=r.props.onFocus;r.setState({focused:!0}),e&&e()},r.onBlur=function(){var e=r.props.onBlur;r.setState({focused:!1}),e&&e()},r.onKeyDown=function(e){var t=e.keyCode,n=r.props,o=n.count,a=n.allowHalf,s=n.onKeyDown,i="rtl"===n.direction,l=r.state.value;t===v.Z.RIGHT&&l<o&&!i?(l+=a?.5:1,r.changeValue(l),e.preventDefault()):t===v.Z.LEFT&&l>0&&!i||t===v.Z.RIGHT&&l>0&&i?(l-=a?.5:1,r.changeValue(l),e.preventDefault()):t===v.Z.LEFT&&l<o&&i&&(l+=a?.5:1,r.changeValue(l),e.preventDefault()),s&&s(e)},r.saveRef=function(e){return function(t){r.stars[e]=t}},r.saveRate=function(e){r.rate=e};var o=e.value;return void 0===o&&(o=e.defaultValue),r.stars={},r.state={value:o,focused:!1,cleanedValue:null},r}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,h.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,r=n.allowHalf,o="rtl"===n.direction,a=e+1;if(r){var s=this.getStarDOM(e),i=function(e){var t=function(e){var t,n,r=e.ownerDocument,o=r.body,a=r&&r.documentElement,s=e.getBoundingClientRect();return t=s.left,n=s.top,{left:t-=a.clientLeft||o.clientLeft||0,top:n-=a.clientTop||o.clientTop||0}}(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var r=e.document;"number"!==typeof(t=r.documentElement[n])&&(t=r.body[n])}return t}(r),t.left}(s),l=s.clientWidth;(o&&t-i>l/2||!o&&t-i<l/2)&&(a-=.5)}return a}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,r=e.style,o=e.prefixCls,i=e.disabled,l=e.className,c=e.character,u=e.characterRender,d=e.tabIndex,h=e.direction,f=this.state,v=f.value,m=f.hoverValue,x=f.focused,y=[],b=i?"".concat(o,"-disabled"):"",j=0;j<t;j+=1)y.push(a.createElement(g,{ref:this.saveRef(j),index:j,count:t,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:n,value:void 0===m?v:m,onClick:this.onClick,onHover:this.onHover,key:j,character:c,characterRender:u,focused:x}));var w=p()(o,b,l,(0,s.Z)({},"".concat(o,"-rtl"),"rtl"===h));return a.createElement("ul",{className:w,style:r,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},y)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?y(y({},t),{},{value:e.value}):t}}]),n}(a.Component);w.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:j,character:"\u2605",onHoverChange:j,tabIndex:0,direction:"ltr"};var k=w,S=n(20710),N=n.n(S),C=n(69713),Z=n(65632),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},R=a.forwardRef((function(e,t){var n=e.prefixCls,r=e.tooltips,s=O(e,["prefixCls","tooltips"]),i=a.useContext(Z.E_),l=i.getPrefixCls,c=i.direction,u=l("rate",n);return a.createElement(k,o()({ref:t,characterRender:function(e,t){var n=t.index;return r?a.createElement(C.Z,{title:r[n]},e):e}},s,{prefixCls:u,direction:c}))}));R.displayName="Rate",R.defaultProps={character:a.createElement(N(),null)};var D=R},3197:function(e,t,n){var r=n(85893);n(67294);t.Z=function(){return(0,r.jsxs)("div",{className:"ps-document",children:[(0,r.jsx)("h5",{children:"Embodying the Raw, Wayward Spirit of Rock 'N' Roll"}),(0,r.jsx)("p",{children:"Embodying the raw, wayward spirit of rock \u2018n\u2019 roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."}),(0,r.jsx)("p",{children:"Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."}),(0,r.jsx)("img",{className:"mb-30",src:"/static/img/products/description.jpg",alt:"martfury"}),(0,r.jsx)("h5",{children:"What do you get"}),(0,r.jsx)("p",{children:"Sound of Marshall, unplugs the chords, and takes the show on the road."}),(0,r.jsx)("p",{children:"Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."}),(0,r.jsx)("p",{children:"The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet. The IR blaster is another feature due for retirement \u2013 the S6 had it, then the Note5 didn\u2019t, and now with the S7 the trend is clear."}),(0,r.jsx)("h5",{children:"Perfectly Done"}),(0,r.jsx)("p",{children:"Meanwhile, the IP68 water resistance has improved from the S5, allowing submersion of up to five feet for 30 minutes, plus there\u2019s no annoying flap covering the charging port"}),(0,r.jsxs)("ul",{className:"pl-0",children:[(0,r.jsx)("li",{children:"No FM radio (except for T-Mobile units in the US, so far)"}),(0,r.jsx)("li",{children:"No IR blaster"}),(0,r.jsx)("li",{children:"No stereo speakers"})]}),(0,r.jsx)("p",{children:"If you\u2019ve taken the phone for a plunge in the bath, you\u2019ll need to dry the charging port before plugging in. Samsung hasn\u2019t reinvented the wheel with the design of the Galaxy S7, but it didn\u2019t need to. The Gala S6 was an excellently styled device, and the S7 has managed to improve on that."})]})}},93455:function(e,t,n){var r=n(85893);n(67294);t.Z=function(){return(0,r.jsx)("p",{children:"Sorry no more offers available"})}},58983:function(e,t,n){var r=n(85893);n(67294);t.Z=function(){return(0,r.jsx)("div",{className:"table-responsive",children:(0,r.jsx)("table",{className:"table table-bordered ps-table ps-table--specification",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Color"}),(0,r.jsx)("td",{children:"Black, Gray"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Style"}),(0,r.jsx)("td",{children:"Ear Hook"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Wireless"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Dimensions"}),(0,r.jsx)("td",{children:"5.5 x 5.5 x 9.5 inches"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Weight"}),(0,r.jsx)("td",{children:"6.61 pounds"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Battery Life"}),(0,r.jsx)("td",{children:"20 hours"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Bluetooth"}),(0,r.jsx)("td",{children:"Yes"})]})]})})})}},32484:function(e,t,n){var r=n(85893);n(67294);t.Z=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{children:"GoPro"}),(0,r.jsx)("p",{children:"Digiworld US, New York\u2019s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online"}),(0,r.jsx)("a",{href:"#",children:"More Products from Gopro"})]})}},68697:function(e,t,n){var r=n(85893),o=(n(67294),n(33860));t.Z=function(){return(0,r.jsxs)("div",{className:"ps-skeleton ps-skeleton--product",children:[(0,r.jsx)(o.Z.Input,{active:!0,size:350,style:{height:160}}),(0,r.jsx)(o.Z,{paragraph:{rows:4,title:!0}})]})}},80039:function(e,t,n){var r=n(85893);n(67294);t.Z=function(e){var t=e.layout;return(0,r.jsx)("section",{className:"ps-newsletter",children:(0,r.jsx)("div",{className:t&&"container"===t?" container":"ps-container",children:(0,r.jsx)("form",{className:"ps-form--newsletter",action:"do_action",method:"post",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ",children:(0,r.jsxs)("div",{className:"ps-form__left",children:[(0,r.jsx)("h3",{children:"Newsletter"}),(0,r.jsx)("p",{children:"Subcribe to get information about products and coupons"})]})}),(0,r.jsx)("div",{className:"col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ",children:(0,r.jsx)("div",{className:"ps-form__right",children:(0,r.jsxs)("div",{className:"form-group--nest",children:[(0,r.jsx)("input",{className:"form-control",type:"email",placeholder:"Email address"}),(0,r.jsx)("button",{className:"ps-btn",children:"Subscribe"})]})})})]})})})})}},83746:function(e,t,n){var r=n(809),o=n.n(r),a=n(85893),s=n(30266),i=n(67294),l=n(77113),c=n(31918),u=n(7864),d=n(68697);t.Z=function(e){var t,n=e.collectionSlug,r=(0,i.useState)(null),h=r[0],f=r[1],p=(0,i.useState)(!0),v=p[0],m=p[1];function g(){return(g=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,(0,l.l)(n);case 3:(t=e.sent)&&(f(t.items),setTimeout(function(){m(!1)}.bind(this),250));case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),t=v?(0,u.Z)(3).map((function(e){return(0,a.jsx)(d.Z,{},e)})):h&&h.length>0?h.map((function(e){return(0,a.jsx)(c.Z,{product:e},e.id)})):(0,a.jsx)("p",{children:"No product found."}),(0,a.jsxs)("aside",{className:"widget widget_same-brand",children:[(0,a.jsx)("h3",{children:"Same Brand"}),(0,a.jsx)("div",{className:"widget__content",children:t})]})}}}]);