<template lang="html">
  <transition :name="invert?vertical?'fade-tab-vertical-invert':'fade-tab-invert':vertical?'fade-tab-vertical':'fade-tab'">
    <div
      v-if="active"
      class="con-tab vm-tabs--content">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name:'VmTab',
  inheritAttrs: false,
  props:{
    vmLabel:{
      default:'Label',
      type:String
    },
    vmIcon:{
      default:'',
      type:String
    }	    
    }
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false
  }),
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.vmLabel,
      icon: this.vmIcon,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    })
  }
}
</script>
