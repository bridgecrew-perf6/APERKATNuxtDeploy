(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{592:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(23),o=(r(69),r(1),r(47),r(50),r(5),r(4),r(2),r(6),r(3),r(7),r(46));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,t.next=3,Promise.all([r.dispatch("user/getuserID",n.id)]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},methods:f({},Object(o.b)("user",["getuserID"])),computed:f({},Object(o.d)("user",{userID:function(e){return e.userID}}))},O=r(44),component=Object(O.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 col-lg-12"},[r("div",{staticClass:"card shadow mb-4"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body"},[r("formUser")],1)])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[r("h6",{staticClass:"m-0 font-weight-bold text-primary"},[e._v("Form Ubah User")])])}],!1,null,null,null);t.default=component.exports}}]);