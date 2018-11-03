
<template>
  <div class="centerx">
    <input class="input-color" v-model="colorx" type="color" name="" value="">
    <vm-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">

      <vm-navbar-title>
        Navbar Color
      </vm-navbar-title>

      <vm-navbar-item index="0" >
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>

      <vm-spacer></vm-spacer>

      <vm-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vm-button>
    </vm-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952',
    indexActive: 0
  })
}
</script>

<style lang="stylus">
.input-color
  margin-bottom 10px
  position relative
  display block
.myNavbar
  color rgb(255,255,255)
</style>
