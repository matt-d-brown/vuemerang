<template lang="html">
  <div class="con-select-icons">
    <div class="con-btn-icon">
      <vm-button :class="{
        'visiblex':visible
        }"
        @click="clickIcons"
        vm-type="filled" >
        change icon
       </vm-button>
       <i class="eva icon-final" :class="'eva-'+iconx"></i>
    </div>

    <transition name="fade-icons">
    <div
    class="ul-icons"
    v-show="visible"
    :style="{
      'left':lefx+'px',
      'top':topx+'px',
      }"
     ref="ulx">
    <ul
    class="ulx"
     >
      <li @click="iconx=li,visible=false,removeEventListenerx()" v-for="li in icons">
        <i class="eva" :class="'eva-'+li"></i>
      </li>
    </ul>
    <div class="con-btns">
      <vm-row>
        <vm-col vm-type="flex" vm-justify="flex-end" vm-align="center" vm-w="12">
          <vm-button @click="visible=false,removeEventListenerx()"  vm-type="filled" color="rgb(230, 230, 230)" color-text="rgba(0, 0, 0, 0.8)" >Cancel</vm-button>
        </vm-col>
      </vm-row>
    </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  props:{
    vmIcon:{
      type:String,
      default:null,
    }
  },
  watch:{
    iconx(){

      this.$emit('update:vmIcon',this.iconx)
    }
  },
  data(){
    return {
      iconx:this.vmIcon,
      visible:false,
      topx:0,
      lefx:0,
      icons:[
        "activity-outline",
        "alert-circle-outline",
        "alert-triangle-outline",
        "archive-outline",
        "arrow-circle-down-outline",
        "arrow-circle-up-outline",
        "arrow-down-outline",
        "arrow-up-outline",
        "arrow-downward-outline",
        "arrow-upward-outline",
        "arrowhead-down-outline",
        "arrowhead-up-outline",
        "at-outline",
        "attach-2-outline",
        "award-outline",
        "bar-chart-2-outline",
        "bar-chart-outline",
        "battery-outline",
        "behance-outline",
        "keypad-outline",
        "cloud-upload-outline",
        "download",
      ]

    }
  },
  beforeDestroy(){
    this.visible = false
    let ulx = this.$refs.ulx
    ulx.remove();
  },
  mounted(){
    let ulx = this.$refs.ulx
    document.body.insertBefore(ulx, document.body.firstChild);
  },
  methods:{
    clickIcons(evt){
      this.lefx = evt.target.getBoundingClientRect().left - 5
      this.topx = evt.target.getBoundingClientRect().top - 5
      this.visible = true
      setTimeout(()=> {
        window.addEventListener('click',this.cerrar)
      }, 1);
        window.addEventListener('mousewheel',this.cerrar)
        window.addEventListener('touchmove',this.cerrar)
    },
    cerrar(e){
      if(e.target.closest('.ul-icons')==null){
        this.visible = false
        this.removeEventListenerx()
      }
    },
    removeEventListenerx(){
      window.removeEventListener('click',this.cerrar)
      window.removeEventListener('mousewheel',this.cerrar)
      window.removeEventListener('touchmove',this.cerrar)
    }
  }
}
</script>

<style lang="css">
.fade-icons-enter-active, .fade-icons-leave-active {
  transition: all .2s;

}
.fade-icons-enter, .fade-icons-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  transform: scale(0);
  opacity: 0;
}
.visiblex {
  /* transform: scale(1.2); */
  /* opacity: 0; */
}
.con-btns {
  position: relative;
  width: 100%;
}
.con-select-icons {
  position: relative;
}
.ul-icons {
  position: fixed;
  top: 0px;
  z-index: 20000;
  width: 305px;
  height: 300px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.050);
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform-origin: top left;

}
.ul-icons ul{
  height: 100%;
  position: relative;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
}
.ul-icons li {
  float: left;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border-radius: 5px;
  transition: all .2s ease;
}
.ul-icons li:hover {
  background: rgb(var(--morado));
  color: rgb(255, 255, 255);
}
.con-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-final {
  position: relative;
  background: rgb(var(--morado),.1);
  color: rgb(var(--morado),1);
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 0px 10px 10px 0px;
  cursor: default;
}
</style>
