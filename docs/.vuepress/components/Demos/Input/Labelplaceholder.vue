<template lang="html">
  <div class="centerx labelPlaceholder">
    <vm-input label-placeholder="Label-placeholder" v-model="value1"/>
    <vm-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
  .labelPlaceholder
    .vm-input
      margin 10px
</style>
