<template lang="html">
  <div class="">
    <vm-slider v-model="value1"/>
    <vm-slider disabled="true" v-model="value2"/>
    <vm-slider max=200 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:67,
      value2:34,
      value3:60
    }
  }
}
</script>

<style lang="css">
</style>
