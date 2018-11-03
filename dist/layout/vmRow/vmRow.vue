<template lang="html">
  <div
    :style="{
      'align-items':vmAlign,
      'justify-content':vmJustify,
      'display':vmType,
      'overflow': vmType === 'block' ? 'hidden' : null,
      'width':vmW*100/12+'%'}"
    class="vm-row">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'VmRow',
    props: {
      vmType: {
        default: 'flex',
        type: String,
      },
      vmW: {
        type: [Number, String],
        default: 12,
      },
      vmJustify: {
        type: String,
        default: null,
      },
      vmAlign: {
        type: String,
        default: null,
      },
    }
  }
</script>

<style lang="css">
  .vm-row {
    clear: both;
    flex-flow: wrap;
  }
</style>
