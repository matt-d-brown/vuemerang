<template lang="html">
  <label
    :class="[`vm-radio-${color}`]"
    class="vm-component con-vm-radio">
    <input
      v-bind="$attrs"
      :checked="isChecked"
      :value="value"
      type="radio"
      class="vm-radio--input"
      v-on="listeners">
    <span
      class="vm-radio">
      <span
        :style="styles"
        class="vm-radio--borde"/>
      <span
        :style="styleCircle"
        class="vm-radio--circle"/>
    </span>
    <span class="vm-radio--label">
      <slot/>
    </span>
  </label>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmRadio',
  inheritAttrs:false,
  props:{
    value:{},
    vmValue:{},
    color:{
      default:'primary',
      type:String
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        input: () => this.$emit('input', this.vmValue)
      }
    },
    attrs(){
      let attrsx = JSON.parse(JSON.stringify(this.$attrs))
      return {
        attrsx
      }
    },
    isChecked(){
      return this.vmValue == this.value
    },
    styles(){
      return {
        'border': `2px solid ${this.isChecked?_color.getColor(this.color,1):'rgb(200, 200, 200)'}`
      }
    },
    styleCircle(){
      return {
        'background': _color.getColor(this.color,1),
        'box-shadow': `0px 3px 12px 0px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  methods:{
    giveColor(color,opacity){
      return _color.rColor(color,opacity)
    },
  }
}
</script>
