<template>
  <transition name="vm-sidebar-animate">
    <div
      v-show="staticPosition || value"
      ref="sidebarbackground"
      class="vm-content-sidebar">
      <div
        v-if="!hiddenBackground"
        class="vm-sidebar--background"
        @click="emitToParent"></div>
      <div
        :class="[
          `vm-sidebar-${color}`,
          {
            'vm-sidebar-parent': parent != 'body',
            'vm-sidebar-staticPosition': staticPosition,
            'vm-sidebar-position-right': positionRight,
            'vm-sidebar-reduce': reduce,
            'vm-sidebar-reduceNotRebound': reduceNotRebound,
            'vm-sidebar-reduceNotHoverExpand': reduceNotHoverExpand
          }
        ]"
        class="vm-sidebar">
        <vm-button 
          v-if="!staticPosition" 
          id="closeButton" 
          radius 
          color="primary" 
          type="border" 
          icon="close" 
          @click="emitToParent"></vm-button>
        <header 
          v-if="$slots.header" 
          class="vm-sidebar--header">
          <slot name="header"></slot>
        </header>

        <div class="vm-sidebar--items">
          <slot></slot>
        </div>

        <vm-spacer v-if="spacer"></vm-spacer>

        <footer 
          v-if="$slots.footer" 
          class="vm-sidebar--footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'VmSidebar',
  props:{
    value:{
      default: false
    },
    defaultIndex:{
      default: null,
      type: [String, Number]
    },
    color: {
      default:'primary',
      type: String
    },
    parent:{
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type:Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound:{
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default:false,
      type: Boolean
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  watch: {
    value() {
      if(this.value && !this.clickNotClose) {
        this.addEventClick()
      }
    }
  },
  created () {
    this.currentIndex = this.defaultIndex
  },
  mounted () {
    this.insertBody()
  },
  methods:{
    emitToParent () {
      this.$emit('closeSide', false)
    },
    getActive () {
      return this.currentIndex
    },
    setIndexActive (index) {
      this.currentIndex = index
    },
    addEventClick () {
      window.addEventListener('click', this.closeSidebar)
    },
    closeSidebar (evt) {
      let parent = evt.target.closest('.vm-sidebar')
      if (!parent) {
        this.$emit('input', false)
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    insertBody () {
      if(this.parent) {
        let elx = this.$refs.sidebarbackground
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        parentx.insertBefore(elx, parentx.firstChild)
      }
    }
  }
}
</script>
