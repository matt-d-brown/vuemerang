(window.webpackJsonp=window.webpackJsonp||[]).push([[3,83],{368:function(e,t,i){},371:function(e,t,i){"use strict";var n=i(368);i.n(n).a},456:function(e,t,i){"use strict";i.r(t);var n={props:{vmIcon:{type:String,default:null}},watch:{iconx:function(){this.$emit("update:vmIcon",this.iconx)}},data:function(){return{iconx:this.vmIcon,visible:!1,topx:0,lefx:0,icons:["activity-outline","alert-circle-outline","alert-triangle-outline","archive-outline","arrow-circle-down-outline","arrow-circle-up-outline","arrow-down-outline","arrow-up-outline","arrow-downward-outline","arrow-upward-outline","arrowhead-down-outline","arrowhead-up-outline","at-outline","attach-2-outline","award-outline","bar-chart-2-outline","bar-chart-outline","battery-outline","behance-outline","keypad-outline","cloud-upload-outline","download"]}},beforeDestroy:function(){this.visible=!1,this.$refs.ulx.remove()},mounted:function(){var e=this.$refs.ulx;document.body.insertBefore(e,document.body.firstChild)},methods:{clickIcons:function(e){var t=this;this.lefx=e.target.getBoundingClientRect().left-5,this.topx=e.target.getBoundingClientRect().top-5,this.visible=!0,setTimeout(function(){window.addEventListener("click",t.cerrar)},1),window.addEventListener("mousewheel",this.cerrar),window.addEventListener("touchmove",this.cerrar)},cerrar:function(e){null==e.target.closest(".ul-icons")&&(this.visible=!1,this.removeEventListenerx())},removeEventListenerx:function(){window.removeEventListener("click",this.cerrar),window.removeEventListener("mousewheel",this.cerrar),window.removeEventListener("touchmove",this.cerrar)}}},o=(i(371),i(1)),c=Object(o.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"con-select-icons"},[i("div",{staticClass:"con-btn-icon"},[i("vm-button",{class:{visiblex:e.visible},attrs:{"vm-type":"filled"},on:{click:e.clickIcons}},[e._v("\n      change icon\n     ")]),e._v(" "),i("i",{staticClass:"eva icon-final",class:"eva-"+e.iconx})],1),e._v(" "),i("transition",{attrs:{name:"fade-icons"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"ulx",staticClass:"ul-icons",style:{left:e.lefx+"px",top:e.topx+"px"}},[i("ul",{staticClass:"ulx"},e._l(e.icons,function(t){return i("li",{on:{click:function(i){e.iconx=t,e.visible=!1,e.removeEventListenerx()}}},[i("i",{staticClass:"eva",class:"eva-"+t})])}),0),e._v(" "),i("div",{staticClass:"con-btns"},[i("vm-row",[i("vm-col",{attrs:{"vm-type":"flex","vm-justify":"flex-end","vm-align":"center","vm-w":"12"}},[i("vm-button",{attrs:{"vm-type":"filled",color:"rgb(230, 230, 230)","color-text":"rgba(0, 0, 0, 0.8)"},on:{click:function(t){e.visible=!1,e.removeEventListenerx()}}},[e._v("Cancel")])],1)],1)],1)])])],1)},[],!1,null,null,null);t.default=c.exports},669:function(e,t,i){"use strict";i.r(t);var n={components:{selectedIcons:i(456).default},data:function(){return{icon1:"alert-circle-outline"}}},o=i(1),c=Object(o.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"centerx"},[i("selected-icons",{attrs:{"vm-icon":e.icon1},on:{"update:vmIcon":function(t){e.icon1=t},"update:vm-icon":function(t){e.icon1=t}}}),e._v(" "),i("vm-alert",{attrs:{active:"true",color:"rgb(111, 38, 224)",icon:e.icon1}},[e._v("\n   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n ")])],1)},[],!1,null,null,null);t.default=c.exports}}]);