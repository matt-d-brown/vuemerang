<template lang="html">
  <div class="centerx icons-example">
    <vm-input icon="search" placeholder="Search" v-model="value1"/>
    <vm-input icon-after="true" label-placeholder="icon-after" icon="mode_edit" vm-placeholder="Nombre" v-model="value2"/>
    <vm-input icon="add" label-placeholder="Label-placeholder" v-model="value3"/>
    <vm-input icon-after="true"  icon="shopping_cart" label-placeholder="Label-placeholder" v-model="value4"/>
    <vm-input disabled="true" icon="error_outline" label-placeholder="icon-disabled" v-model="value5"/>
    <vm-input icon-after="true" disabled="true" icon="email" label-placeholder="icon-disabled" v-model="value6"/>
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
    margin 6px;
</style>
