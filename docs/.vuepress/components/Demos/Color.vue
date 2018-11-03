<template lang="html">
  <div class="">
    <input type="color" v-model="colorx" name="" value="">
    <input type="color" v-model="colorx2" name="" value="">
    <vm-button :color="colorx" type="filled">Color</vm-button>
    <vm-button :color="colorx" type="border">Color</vm-button>
    <vm-button :color="colorx" type="flat">Color</vm-button>
    <vm-button :color="colorx" type="line">Color</vm-button>
    <vm-button :color="colorx" :gradient-color-secondary="colorx2" type="gradient">Color</vm-button>
    <vm-button :color="colorx"  type="relief">Color</vm-button>

  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#c72a75',
      colorx2:'#5252e8'
    }
  },
}
</script>
