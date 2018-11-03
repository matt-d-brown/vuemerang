<template lang="html">
  <div class="">
    <vm-slider icon="volume_up" max=10 v-model="value1"/>
    <vm-slider icon="group_add" ticks step=25 v-model="value2"/>
    <vm-slider icon="star" ticks max=5 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:6,
      value2:25,
      value3:[2,4]
    }
  }
}
</script>

<style lang="css">
</style>
