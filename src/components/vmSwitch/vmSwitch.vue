<template lang="html">
  <button
    :class="[
      `vm-switch-${color}`,
      {
        'vm-switch-active':isChecked || $attrs.checked
      }
    ]"
    :style="style"
    v-bind="$attrs"
    class="vm-component vm-switch"
    type="button"
    name="button"
    @click="toggleCheckbox($event)">
    <input
      ref="inputCheckbox"
      :disabled="$attrs.disabled"
      class="input-switch vm-switch--input"
      type="checkbox"
      name=""
      value=""
      v-on="listeners">

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch vm-switch--text">
      <slot name="on"/>

      <vm-icon
        :icon-pack="iconPack"
        :icon="vmIconOn || vmIcon"
        class="icons-switch vm-switch--icon"
      ></vm-icon>
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch vm-switch--text">
      <!-- gato con botas -->
      <slot name="off"/>
      <vm-icon
        :icon-pack="iconPack"
        :icon="vmIconOff || vmIcon"
        class="icons-switch vm-switch--icon"
      ></vm-icon>
    </span>
    <span class="vm-circle-switch vm-switch--circle"/>
  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmSwitch',
  inheritAttrs:false,
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    vmIcon:{
      default:null,
      type:String
    },
    vmIconOn:{
      default:null,
      type:String
    },
    vmIconOff:{
      default:null,
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
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.value?_color.getColor(this.color,1):null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.toggleValue(evt)
        }
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  mounted(){
  },
  methods:{
    toggleCheckbox() {
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        this.$refs.inputCheckbox.checked = !this.$refs.inputCheckbox.checked;
        this.$emit('input', this.$refs.inputCheckbox.checked);
      }
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
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vmValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', value)
      } else {
        value.push(this.vmValue) // add value new
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
  },
}
</script>
