<template>
  <i
    :style="iconStyle"
    :class="[iconPack, iconPack != 'eva' ? icon : iconEva,iconClass,getBg,getBgSize,{'round':round}]"
    class="vm-icon notranslate icon-scale">
    <span>
    </span>
  </i>
</template>
<script>
import _color from '../../utils/color.js'

export default {
  name:'VmIcon',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'eva',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    },
  },
  computed:{
    iconClass() {
      const classes = {}
      classes[this.size] = true
      if (_color.isColor(this.color)) {
        classes[`vm-icon-${this.color}`] = true
      }
      return classes
    },
    iconEva() {
      let evaicon = null
      if (this.iconPack == 'eva') {
        evaicon = `eva-${this.icon}`
      }
      return evaicon
    },
    iconStyle() {
      const style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      }
      return style
    },
    getBg() {
      const classes = {}

      if (_color.isColor(this.bg)) {
        classes[`con-vm-icon-bg-${this.bg}`] = true
      }

      return classes
    },
    getBgSize() {
      const classes = {}
      if(['small','medium','large'].includes(this.size))  {
        classes[`bg-${this.size}`] = true;
        classes['vm-icon-bg'] = true;
      }

      return classes
    },
    getColor() {
      return _color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor() {
      return _color.isColor(this.bg) ? this.bg : this.bg;
    },
  },
}
</script>
