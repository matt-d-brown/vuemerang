<template lang="html">
  <div class="centerx">
    <vm-input-number v-model="number"/>
    <vm-input-number :disabled="true" v-model="number1"/>
    <vm-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48,
      number2:50
    }
  }
}
</script>

<style lang="css">
</style>
