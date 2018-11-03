<template lang="html">
  <div class="centerx">
    <vm-input-number v-model="number0"/>
    <vm-input-number size="medium" v-model="number1"/>
    <vm-input-number size="small" v-model="number2"/>
    <vm-input-number size="mini" v-model="number3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:95,
      number1:21,
      number2:67,
      number3:2
    }
  }
}
</script>

<style lang="css">
</style>
