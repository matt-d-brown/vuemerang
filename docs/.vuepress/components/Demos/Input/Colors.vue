<template lang="html">
  <div class="centerx colors-example">
    <vm-input label-placeholder="Default" v-model="value1"/>
    <vm-input color="success" label-placeholder="Success" v-model="value2"/>
    <vm-input color="danger" label-placeholder="Danger" v-model="value3"/>
    <vm-input color="warning" label-placeholder="Warning" v-model="value4"/>
    <vm-input color="dark" label-placeholder="Dark" v-model="value5"/>
    <vm-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vm-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:''
    }
  }
}
</script>

<style lang="stylus">
.colors-example
  .vm-input
    margin 5px
    margin-top 20px;
</style>
