<template lang="html">
  <div class="centerx">
    <vm-input-number min="13" max="21" v-model="number1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:21,
    }
  }
}
</script>

<style lang="css">
</style>
