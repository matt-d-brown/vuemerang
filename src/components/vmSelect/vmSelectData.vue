<template lang="html">
  <li
    class="vm-component">
    <button
      ref="add"
      v-bind="$attrs"
      class="vm-select--item activex con-icon"
      type="button"
      name="button"
      v-on="listeners">
      <i class="eva eva-plus-circle-outline icon-item vm-select--item-icon">
      </i>
      <span>{{ text }} {{ value }}</span>
    </button>
  </li>
</template>

<script>
export default {
  name:'VmSelectData',
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
          if(event.relatedTarget?!event.relatedTarget.closest('.vm-select--options'):true) {
            this.$parent.parent.closeOptions()
          }
        },
        click: () => {
          this.$emit('click', this.value);
        }
      }
    }
  }
}
</script>
