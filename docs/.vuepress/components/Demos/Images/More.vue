<template lang="html">
  <div class="con-example-images">
    <vm-images alternating not-border-radius not-margin >
      <vm-image :key="index" :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" />
      <vm-image :key="`index-${index}`" :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" />
    </vm-images>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
