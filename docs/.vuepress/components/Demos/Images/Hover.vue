<template lang="html">
  <div>
    <vm-select
      class="selectExample"
      label="Figuras"
      v-model="hover"
      >
      <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in hovers" />
    </vm-select>
    <div class="con-example-images">
      <vm-images :hover="hover">
        <vm-image :key="index" :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" />
        <vm-image :key="`index-${index}`" :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" />
      </vm-images>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hover: 'blur',
    hovers:[
      {text:'Default',value:'default'},
      {text:'Blur',value:'blur'},
      {text:'Zoom',value:'zoom'},
      {text:'Dark',value:'dark'},
      {text:'Scale',value:'scale'},
      {text:'Curtain',value:'curtain'},
    ],
  })
}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
.selectExample
  margin-bottom 10px
</style>
