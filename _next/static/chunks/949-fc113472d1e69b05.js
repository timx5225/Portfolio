(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,a=r(7273).Z,l=o(r(7294)),u=r(2199),c=r(7389),i=r(1630),f=r(9541),s=r(6163),d=r(7215),p=r(5235),v=r(729),h=new Set;function y(e,t,r,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(function(e){})}}function b(e){return"string"==typeof e?e:c.formatUrl(e)}var m=l.default.forwardRef(function(e,t){var r,o,c=e.href,h=e.as,m=e.children,g=e.prefetch,C=e.passHref,O=e.replace,_=e.shallow,j=e.scroll,w=e.locale,E=e.onClick,M=e.onMouseEnter,k=e.onTouchStart,P=e.legacyBehavior,x=void 0!==P&&P,N=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,x&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var L=!1!==g,R=l.default.useContext(f.RouterContext),S=l.default.useContext(s.AppRouterContext),I=null!=R?R:S,T=!R,z=l.default.useMemo(function(){if(!R){var e=b(c);return{href:e,as:h?b(h):e}}var t=n(u.resolveHref(R,c,!0),2),r=t[0],o=t[1];return{href:r,as:h?u.resolveHref(R,h):o||r}},[R,c,h]),D=z.href,H=z.as,K=l.default.useRef(D),U=l.default.useRef(H);x&&(o=l.default.Children.only(r));var B=x?o&&"object"==typeof o&&o.ref:t,A=n(d.useIntersection({rootMargin:"200px"}),3),Z=A[0],q=A[1],W=A[2],F=l.default.useCallback(function(e){(U.current!==H||K.current!==D)&&(W(),U.current=H,K.current=D),Z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[H,B,D,W,Z]);l.default.useEffect(function(){I&&q&&L&&y(I,D,H,{locale:w})},[H,D,q,w,L,null==R?void 0:R.locale,I]);var G={ref:F,onClick:function(e){x||"function"!=typeof E||E(e),x&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,o,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(r)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,I,D,H,O,_,j,w,T,L)},onMouseEnter:function(e){x||"function"!=typeof M||M(e),x&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(L||!T)&&y(I,D,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof k||k(e),x&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(L||!T)&&y(I,D,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||C||"a"===o.type&&!("href"in o.props)){var J=void 0!==w?w:null==R?void 0:R.locale,Q=(null==R?void 0:R.isLocaleDomain)&&p.getDomainLocale(H,J,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=Q||v.addBasePath(i.addLocale(H,J,null==R?void 0:R.defaultLocale))}return x?l.default.cloneElement(o,G):l.default.createElement("a",Object.assign({},N,G),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!l,f=n(o.useState(!1),2),s=f[0],d=f[1],p=o.useRef(null),v=o.useCallback(function(e){p.current=e},[]);return o.useEffect(function(){if(l){if(!i&&!s){var e,n,o,f,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),u.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(f=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(f.delete(v),o.unobserve(v),0===f.size){o.disconnect(),u.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[i,r,t,s,p.current]),[v,s,o.useCallback(function(){d(!1)},[])]};var o=r(7294),a=r(8065),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(7913)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){return function(t){return n.createElement(i,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,i=u(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}}}]);