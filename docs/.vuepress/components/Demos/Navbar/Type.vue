<template>
  <div class="con-type-example">

    <vm-select
      class="selectExample"
      label="Figuras"
      v-model="type"
      >
      <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />
    </vm-select>

    <vm-navbar :type="type" v-model="activeItem" class="nabarx">
      <vm-button type="flat" icon="menu"></vm-button>

      <vm-navbar-title>
        Type {{type}}
      </vm-navbar-title>

      <vm-spacer></vm-spacer>

      <vm-navbar-item index="0">
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>
    </vm-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    type: 'flat',
    types: [
      {
        value: null, text: 'Default'
      },
      {
        value: 'flat', text: 'Flat'
      },
      {
        value: 'fund', text: 'Fund'
      },
      {
        value: 'border', text: 'border'
      },
      {
        value: 'gradient', text: 'Gradient'
      },
      {
        value: 'shadow', text: 'Shadow'
      }
    ]
  })
}
</script>
<style lang="stylus">
.con-type-example
  .vm-navbar
    margin-top 10px
</style>
