<template>
  <div
    :class="{'open-item': maxHeight != '0px', 'disabledx': disabled}"
    class="vm-collapse-item"
    @mouseover="mouseover"
    @mouseout="mouseout">
    <header
      class="vm-collapse-item--header"
      @click="toggleContent">
      <slot name="header"></slot>

      <span
        v-if="!notArrow"
        class="icon-header vm-collapse-item--icon-header">
        <vm-icon 
          :icon-pack="iconPack" 
          :icon="iconArrow" >
        </vm-icon>
      </span>
    </header>
    <div
      ref="content"
      :style="styleContent"
      class="vm-collapse-item--content">
      <div class="con-content--item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>

import vmicon from '../vmIcon';

export default {
  name:'VmCollapseItem',
  components:{
    vmicon
  },
  props:{
    disabled:{
      default:false,
      type: Boolean
    },
    notArrow:{
      default: false,
      type: Boolean
    },
    iconArrow:{
      default: 'chevron-down',
      type: String
    },
    iconPack:{
      default: 'eva',
      type: String
    },
  },
  data:() => ({
    maxHeight: '0px'
  }),
  computed:{
    accordion() {
      return this.$parent.accordion
    },
    openHover() {
      return this.$parent.openHover
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch:{
    maxHeight() {
      this.$parent.emitChange()
    }
  },
  mounted () {
    window.addEventListener('resize', this.changeHeight)
  },
  methods:{
    changeHeight () {
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight != '0px') {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    toggleContent() {
      if(this.openHover || this.disabled) {
        return
      }

      if(this.accordion) {
        this.$parent.closeAllItems(this.$el)
      }

      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight == '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }
    },
    mouseover() {
      if(this.disabled) {
        return
      }
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.openHover) {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        this.maxHeight = `0px`
      }
    }
  }
}
</script>
