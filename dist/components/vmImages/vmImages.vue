<template lang="html">
  <div
    :class="[`vm-images-hover-${hover}`, {'alternating': alternating, 'notBorderRadius': notBorderRadius, 'notMargin': notMargin}]"
    class="vm-component vm-images">
    <ul class="vm-ul-images vm-images--ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VmImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
}
</script>
