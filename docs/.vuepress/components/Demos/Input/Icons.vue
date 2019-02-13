<template lang="html">
  <div class="centerx icons-example">
    <vm-input icon="search" placeholder="Search" v-model="value1"/>
    <vm-input icon-after="true" label-placeholder="icon-after" icon="edit-outline" vm-placeholder="Nombre" v-model="value2"/>
    <vm-input icon="plus" label-placeholder="Label-placeholder" v-model="value3"/>
    <vm-input icon-after="true"  icon="shopping-cart-outline" label-placeholder="Label-placeholder" v-model="value4"/>
    <vm-input disabled="true" icon="alert-circle-outline" label-placeholder="icon-disabled" v-model="value5"/>
    <vm-input icon-after="true" disabled="true" icon="email-outline" label-placeholder="icon-disabled" v-model="value6"/>
    <vm-input icon-no-border icon="alert-circle-outline" label-placeholder="icon-no-border" v-model="value7"/>
    <vm-input icon-after pass label-placeholder="icon-password" v-model="value8" type="password"/>
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
      value7:'',
      value8: ''
    }
  }
}
</script>

<style lang="stylus">
.icons-example
  .vm-input
    margin 15px;
</style>
