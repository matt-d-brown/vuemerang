(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{403:function(n,t,i){},490:function(n,t,i){"use strict";var a=i(403);i.n(a).a},555:function(n,t,i){"use strict";i.r(t);i(5);var a={data:function(){return{types:["default","point","radius","corners","border","sound","material"],activeLoading:!1}},mounted:function(){var n=this;this.types.forEach(function(t){n.$vm.loading({container:"#loading-".concat(t),type:t,text:t})})},methods:{openLoading:function(n){var t=this;this.activeLoading=!0,this.$vm.loading({type:n}),setTimeout(function(){t.activeLoading=!1,t.$vm.loading.close()},3e3)}}},o=(i(490),i(1)),e=Object(o.a)(a,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"centerx example-loading"},[i("div",{staticClass:"fill-row-loading"},n._l(n.types,function(t){return i("div",{staticClass:"vm-con-loading__container loading-example",class:{activeLoading:n.activeLoading},attrs:{id:["loading-"+t]},on:{click:function(i){return n.openLoading(t)}}})}),0)])},[],!1,null,null,null);t.default=e.exports}}]);