<template lang="html">
  <div
    :style="styleChip"
    :class="[
      `vm-status-indicator-${color}`
    ]"
    class="vm-component vm-status-indicator">
    <span 
      :style="styleIndicator" 
      :class="{ 'status-indicator-pulse' : pulse}" 
      class="status-indicator"></span>
    <span class="text-status vm-status-indicator--text">
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name: "VmStatusIndicator",
  inheritAttrs:false,
  props:{
    item:{
      type:Boolean,
    },
    value:{},
    color:{
      type:String,
      default:'216, 226, 233',
    },
    pulse: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    styleChip () {
      return {
        background: _color.getColor(this.color,.15),
        color: _color.getColor(this.color,1)
      }
    },
    styleIndicator () {
      return {
        background: _color.getColor(this.color,1),
        '--box-shadow-color': _color.getRGB(this.color)
      }
    }
  }
}
</script>
