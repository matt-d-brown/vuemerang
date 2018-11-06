<template lang="html">
  <div class="examplex">

    <input type="color" v-model="colorx">

    <vm-dropdown :color="colorx">
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'#c80948'
  }),
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="color"]
    border: 0px;
    width: 30px;
    height: 30px;
    display: block;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
