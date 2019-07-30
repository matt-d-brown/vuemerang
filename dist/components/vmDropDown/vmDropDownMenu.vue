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
      @mouseleave="mouseleavex"
      @mouseenter="mouseenterx"
    >
      <!-- @mouseout="toggleMenu($event)" -->
      <!-- @mouseover="toggleMenu($event)" -->
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
      <div
        ref="menuAfter"
        class="vm-dropdown--menu--after"></div>
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
    leftx:5,
    topx:0,
    rightx:true,
    vmPosition:null,
    vmTriggerClick:false,
    vmTriggerOutsideClick: false,
    widthx:0,
    notHeight:false,
    vmCustomContent:false,
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
    mouseenterx() {
      if (!this.vmTriggerClick && !this.vmTriggerOutsideClick) {
        this.dropdownVisible = true
        this.widthx = this.$el.clientWidth
      }
    },
    mouseleavex() {
      if (!this.vmTriggerClick && !this.vmTriggerOutsideClick) {
        this.dropdownVisible = false
        this.widthx = this.$el.clientWidth
      }
    },
    setDirection() {
      setTimeout(() => {
        const dropdown = this.parentNode
        const menuAfter = this.$refs.menuAfter
        if (!menuAfter) return
        if(dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          if (this.vmPosition === 'right') {
            menuAfter.style.bottom = dropdown.clientHeight + 'px';
            menuAfter.style.left = '5px';
            menuAfter.style.transform = 'rotate(316deg)'
            return
          }else if (this.vmPosition === 'left') {
            menuAfter.style.bottom = dropdown.clientHeight + 'px';
            menuAfter.style.right = '5px';
            menuAfter.style.transform = 'rotate(135deg)'
            return
          }
          //eslint-disable-next-line
          const hasGroup = this.$children.find(it=>it.hasOwnProperty('activeGroup'))
          menuAfter.style.bottom = '5px'
          menuAfter.style.transform = 'rotate(225deg)'
          return
        }else {
          if (this.vmPosition === 'right') {
            menuAfter.style.top = (dropdown.clientHeight) + 'px';
            menuAfter.style.left = '5px';
            menuAfter.style.transform = 'rotate(316deg)'
            return
          }else if (this.vmPosition === 'left') {
            menuAfter.style.top = dropdown.clientHeight + 'px';
            menuAfter.style.right = '5px';
            menuAfter.style.transform = 'rotate(135deg)'
            return
          }
        }
        menuAfter.style.top = '10px'
      }, 100)
    },
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vmTriggerClick && !this.vmTriggerOutsideClick){
        this.dropdownVisible = true
      } else if (!this.vmTriggerClick && !this.vmTriggerOutsideClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    handleClose(event){
      if(event.type == 'mousedown' && this.vmTriggerOutsideClick){
        // Checar
        this.dropdownVisible = false
        this.vmTriggerOutsideClick = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      // this.parentNode = this.$el.parentNode
      document.body.insertBefore(elp, document.body.firstChild)
    },
  }
}
</script>
