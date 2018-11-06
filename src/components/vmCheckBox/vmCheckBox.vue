<template lang="html">
  <div
    :class="[`vm-checkbox-${color}`, `vm-checkbox-${size}`]"
    class="vm-component con-vm-checkbox">
    <input
      v-bind="$attrs"
      :checked="isChecked || $attrs.checked"
      :value="value"
      type="checkbox"
      class="vm-checkbox--input"
      v-on="listeners">
    <span
      :style="style"
      class="checkbox_x vm-checkbox">
      <span
        :style="style_check"
        class="vm-checkbox--check">
        <vm-icon
          :icon="icon"
          :icon-pack="iconPack"
          class="vm-checkbox--icon " />
      </span>
    </span>
    <span class="con-slot-label">
      <slot/>
    </span>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmCheckbox',
  inheritAttrs: false,
  props:{
    color:{
      default:'primary',
      type:String,
    },
    value:{},
    icon:{
      default:'checkmark',
      type:String
    },
    iconPack:{
      default:'eva',
      type:String
    },
    vmValue:{
      type:[Boolean,Array,String,Number,Object],
      default:false
    },
    size:{
      default: 'default',
      type: String
    }
  },
  computed:{
    style_check(){
      return {
        background: this.isChecked?_color.getColor(this.color,1):null,
      }
    },
    style(){
      return {
        border: `2px solid ${this.isChecked?_color.getColor(this.color,1):'rgb(180, 180, 180)'}`,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        change: (evt) => {
          this.toggleValue(evt)
        }
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    toggleValue(evt){
      if(this.isArrayx()){
        this.setArray()
      } else if (typeof(this.vmValue) == 'string' ) {
        this.setValueString()
      }
      else {
        this.$emit('input',!this.value)
        this.$emit('change',evt)
      }
    },
    setArray(){
      // Copy Array
      const value = this.value.slice(0)
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vmValue),1)
        this.$emit('input', value)
        this.$emit('change', value)
      } else {
        value.push(this.vmValue)
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    setValueString(){
      if(this.value == this.vmValue){
        this.$emit('input', null)
        this.$emit('change', null)
      } else {
        this.$emit('input', this.vmValue)
        this.$emit('change', this.vmValue)
      }
    },
    isArrayIncludes(){
      let modelx = this.value
      let value = this.vmValue
      return modelx.includes(value)
    },
    isArrayx(){
      return Array.isArray(this.value)
    }
  }
}
</script>
