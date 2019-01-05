<template lang="html">
  <transition name="dropdownx">
    <div
      v-if="dropdownVisible"
      ref="options"
      :class="{'rightx':rightx,'notHeight':notHeight}"
      :style="{
        'left':leftx+'px',
        'top':topx+'px' 
      }"
      v-click-outside:mousedown.capture="handleClose"
      v-click-outside.capture="handleClose"
      class="con-vm-dropdown--menu vm-dropdown-menu"
      @mouseover="toggleMenu($event)"
      @mouseout="toggleMenu($event)">
      <ul
        v-if="!vmCustomContent"
        class="vm-component vm-dropdown--menu" >
        <slot/>
      </ul>
      <div
        v-else
        class="vm-dropdown--custom vm-dropdown--menu">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import {directive as clickOutside} from 'v-click-outside-x'
export default {
  name: "VmDropdownMenu",
  directives: { clickOutside },
  data:()=>({
    dropdownVisible:false,
    leftAfter:20,
    leftx:0,
    topx:0,
    rightx:true,
    vmTriggerClick:false,
    widthx:0,
    notHeight:false,
    vmCustomContent:false
  }),
  watch:{
    dropdownVisible(){
      let dropdownGroup = this.$children.filter((item)=>{
        return item.hasOwnProperty('activeGroup')
      })
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
    }
  },
  mounted(){
    this.insertBody()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vmTriggerClick){
        this.dropdownVisible = true
      } else if (!this.vmTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    handleClose(event){
      if(event.type == 'mousedown' && this.vmTriggerClick){
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      document.body.insertBefore(elp, document.body.firstChild)
    },
  }

}
</script>
