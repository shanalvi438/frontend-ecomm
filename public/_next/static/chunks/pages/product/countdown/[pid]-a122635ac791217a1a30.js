(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5856],{3984:function(s,e,t){"use strict";var n=t(85893),r=t(68216),i=t(25997),c=t(40316),a=t(14744),l=t(92953),o=t(67294),u=t(30381),d=t.n(u);function p(s){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(s){return!1}}();return function(){var t,n=(0,l.Z)(s);if(e){var r=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,a.Z)(this,t)}}var h=function(s){(0,c.Z)(t,s);var e=p(t);function t(s){var n;return(0,r.Z)(this,t),(n=e.call(this,s)).state={seconds:null,minutes:null,hours:null,days:null},n}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var s=this;this.interval=setInterval((function(){var e=s.props,t=e.timeTillDate,n=e.timeFormat,r=d()(t,n),i=d()(),c=d()(r-i),a=c.format("D"),l=c.format("HH"),o=c.format("mm"),u=c.format("ss");s.setState({days:a,hours:l,minutes:o,seconds:u})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var s=this.state,e=s.days,t=s.hours,r=s.minutes,i=s.seconds;return(0,n.jsxs)("ul",{className:"ps-countdown",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"days",children:e}),(0,n.jsx)("p",{children:"Days"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"hours",children:t}),(0,n.jsx)("p",{children:"Hours"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"minutes",children:r}),(0,n.jsx)("p",{children:"Minutes"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"seconds",children:i}),(0,n.jsx)("p",{children:"Seconds"})]})]})}}]),t}(o.Component);e.Z=h},23972:function(s,e,t){"use strict";var n=t(85893),r=(t(67294),t(11133)),i=t(3197),c=t(58983),a=t(32484),l=t(56451),o=t(93455),u=r.Z.TabPane;e.Z=function(){return(0,n.jsx)("div",{className:"ps-product__content ps-tab-root",children:(0,n.jsxs)(r.Z,{defaultActiveKey:"1",children:[(0,n.jsx)(u,{tab:"Description",children:(0,n.jsx)(i.Z,{})},"1"),(0,n.jsx)(u,{tab:"Specification",children:(0,n.jsx)(c.Z,{})},"2"),(0,n.jsx)(u,{tab:"Vendor",children:(0,n.jsx)(a.Z,{})},"3"),(0,n.jsx)(u,{tab:"Reviews (1)",children:(0,n.jsx)(l.Z,{})},"4"),(0,n.jsx)(u,{tab:"Questions and Answers",children:"Content of Tab Pane 3"},"5"),(0,n.jsx)(u,{tab:"More Offers",children:(0,n.jsx)(o.Z,{})},"6")]})})}},53708:function(s,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(85893),r=(t(67294),function(){return(0,n.jsxs)("aside",{className:"widget widget_product widget_features",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{className:"icon-network"})," Shipping worldwide"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{className:"icon-3d-rotate"})," Free 7-day return if eligible, so easy"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{className:"icon-receipt"})," Supplier give bills for this product."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{className:"icon-credit-card"})," Pay online or when receiving goods"]})]})}),i=t(41664),c=function(){return(0,n.jsx)("aside",{className:"widget widget_sell-on-site",children:(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{className:"icon-store"})," Sell on?",(0,n.jsx)(i.default,{href:"/account/register",children:(0,n.jsx)("a",{children:" Register Now !"})})]})})},a=t(83746),l=function(){return(0,n.jsx)("aside",{className:"widget widget_ads",children:(0,n.jsx)(i.default,{href:"/shop",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/static/img/ads/product-ads.png",alt:"martfury"})})})})},o=function(){return(0,n.jsxs)("section",{children:[(0,n.jsx)(r,{}),(0,n.jsx)(c,{}),(0,n.jsx)(l,{}),(0,n.jsx)(a.Z,{collectionSlug:"shop-same-brand"})]})}},61414:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var n=t(809),r=t.n(n),i=t(85893),c=t(30266),a=t(67294),l=t(11163),o=t(21442),u=t(43465),d=t(32230),p=t(53708),h=t(55933),x=t(47058),j=t(25954),f=t(23972),m=t(60790),v=t(67655),g=t(62558),Z=t(30880),_=t(96453),N=t(1500),w=t(3984),y=function(){return(0,i.jsxs)("div",{className:"ps-product__countdown",children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:"Don't Miss Out! This promotion will expires in"}),(0,i.jsx)(w.Z,{timeTillDate:"12 31 2020, 6:00 am",timeFormat:"MM DD YYYY, h:mm a"})]}),(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:"Sold Items"}),(0,i.jsxs)("div",{className:"ps-product__progress-bar ps-progress","data-value":"13",children:[(0,i.jsx)("div",{className:"ps-progress__value",children:(0,i.jsx)("span",{})}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"20/85"})," Sold"]})]})]})]})},b=function(s){var e=s.product;return(0,i.jsxs)("div",{className:"ps-product--detail ps-product--fullwidth",children:[(0,i.jsxs)("div",{className:"ps-product__header",children:[(0,i.jsx)(j.Z,{product:e}),(0,i.jsxs)("div",{className:"ps-product__info",children:[(0,i.jsx)(N.Z,{product:e}),(0,i.jsx)(m.Z,{product:e}),(0,i.jsx)(y,{}),(0,i.jsx)(v.Z,{product:e}),(0,i.jsx)(g.Z,{}),(0,i.jsx)(Z.Z,{}),(0,i.jsx)(_.Z,{})]})]}),(0,i.jsx)(f.Z,{})]})},S=t(72538),D=t(80039),k=function(){var s=(0,l.useRouter)().query.pid,e=(0,a.useState)(null),t=e[0],n=e[1],j=(0,a.useState)(!1),f=j[0],m=j[1];function v(){return(v=(0,c.Z)(r().mark((function s(e){var t;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return m(!0),s.next=3,o.Z.getProductsById(e);case 3:(t=s.sent)&&(n(t),setTimeout(function(){m(!1)}.bind(this),250));case 5:case"end":return s.stop()}}),s,this)})))).apply(this,arguments)}(0,a.useEffect)((function(){!function(s){v.apply(this,arguments)}(s)}),[s]);var g,Z=[{text:"Home",url:"/"},{text:"Shop",url:"/shop"},{text:t?t.title:"Loading..."}];return f?g=(0,i.jsx)(u.Z,{}):t&&(g=(0,i.jsx)(b,{product:t})),(0,i.jsxs)(S.Z,{title:t?t.title:"Loading...",children:[(0,i.jsx)(d.Z,{breacrumb:Z,layout:"fullwidth"}),(0,i.jsx)("div",{className:"ps-page--product",children:(0,i.jsxs)("div",{className:"ps-container",children:[(0,i.jsxs)("div",{className:"ps-page__container",children:[(0,i.jsx)("div",{className:"ps-page__left",children:g}),(0,i.jsx)("div",{className:"ps-page__right",children:(0,i.jsx)(p.Z,{})})]}),(0,i.jsx)(h.Z,{layout:"fullwidth",collectionSlug:"deal-of-the-day"}),(0,i.jsx)(x.Z,{collectionSlug:"shop-recommend-items"})]})}),(0,i.jsx)(D.Z,{})]})}},67866:function(s,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/countdown/[pid]",function(){return t(61414)}])}},function(s){s.O(0,[4885,1382,6114,6066,2879,889,7069,5992,2658,8713,6785,9774,2888,179],(function(){return e=67866,s(s.s=e);var e}));var e=s.O();_N_E=e}]);