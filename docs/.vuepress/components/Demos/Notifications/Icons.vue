<template lang="html">
  <div class="centerx">
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" color="primary" type="flat">Icon Mail</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" color="success" type="flat">Icon check_box</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" color="danger" type="flat">Icon favorite</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" color="warning" type="flat">Icon error</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" color="dark" type="flat">Icon chat</vm-button>
    <vm-button @click="randomIcon()" color="success" type="gradient">Icon Random Color</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    randomIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
      this.$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    }
  }
}
</script>

<style lang="css">
.centerx {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
