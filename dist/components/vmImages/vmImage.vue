<template>
  <li class="vm-image">
    <div class="con-vm-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="vm-image--img">
      </div>
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt="">
  </li>
</template>
<script>
export default {
  name: 'VmImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
