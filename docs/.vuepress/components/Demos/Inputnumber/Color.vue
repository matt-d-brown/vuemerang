<template lang="html">
  <div class="centerx">
    <vm-input-number color="danger" v-model="number1"/>
    <vm-input-number color="success" v-model="number2"/>
    <vm-input-number color="warning" v-model="number3"/>
    <vm-input-number color="dark" v-model="number4"/>
    <vm-input-number color="rgb(218, 24, 94)" v-model="number5"/>
    <vm-input-number color="#ad3af9" v-model="number6"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
    }
  }
}
</script>

<style lang="css">
</style>
