<template lang="html">
  <div class="centerx labelx">
    <vm-input label="Name" placeholder="Placeholder" v-model="value1"/>
    <vm-input type="password" label="Password" placeholder="Disabled" v-model="value2"/>
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
  .labelx
    .vm-input
      margin 10px;
</style>
