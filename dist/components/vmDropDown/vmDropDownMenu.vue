<template lang="html">
  <transition name="dropdownx">
    <div
      v-click-outside:mousedown.capture="handleClose"
      v-if="dropdownVisible"
      ref="options"
      :class="{'rightx':rightx,'notHeight':notHeight}"
      :style="{
        'left':leftx+'px',
        'top':topx+'px' 
      }"
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
      <div class="vs-dropdown--menu--after" ref="menuAfter"></div>
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
    vmTriggerOutsideClick: false,
    widthx:0,
    notHeight:false,
    vsCustomContent:false,
    parentNode:null
  }),
  watch:{
    dropdownVisible(){
      let dropdownGroup = this.$children.filter((item)=>{
        return item.hasOwnProperty('activeGroup')
      })
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
      this.setDirection()
    }
  },
  mounted(){
    this.insertBody()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    setDirection() {
      setTimeout(() => {
        const dropdown = this.parentNode
        const menuAfter = this.$refs.menuAfter
        if (!menuAfter) return
        if(dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          const hasGroup = this.$children.find(it=>it.hasOwnProperty('activeGroup'))
          menuAfter.style.top = hasGroup?'97.58%':'96%'
          menuAfter.style.transform = 'rotate(225deg)'
          return
        }
        menuAfter.style.top = '10px'
      }, 100)
    },
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vmTriggerClick){
        this.dropdownVisible = true
      } else if (!this.vmTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    handleClose(event){
      if(event.type == 'mousedown' && this.vmTriggerOutsideClick){
        // Checar
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      this.parentNode = this.$el.parentNode
      document.body.insertBefore(elp, document.body.firstChild)
    },
  }

}
</script>
