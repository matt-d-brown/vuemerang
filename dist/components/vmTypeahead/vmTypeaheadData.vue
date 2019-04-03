<template lang="html">
  <li
    class="vm-component">
    <button
      ref="add"
      v-bind="$attrs"
      class="vm-typeahead--item activex con-icon"
      type="button"
      name="button"
      v-on="listeners">
      <i class="eva eva-plus-circle-outline icon-item vm-typeahead--item-icon">
      </i>
      <span>{{ text }} {{ value }}</span>
    </button>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmTypeaheadData',
  inheritAttrs:false,
  props:{
    text:{
      default:null,
    },
    value:{
      default:null,
    }
  },
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        blur: (event) => {
          if(event.relatedTarget?!event.relatedTarget.closest('.vm-typeahead--options'):true) {
            this.$parent.parent.closeOptions()
          }
        },
        click: (event) => {
          this.$emit('click', this.value);
        }
      }
    }
  }
}
</script>
