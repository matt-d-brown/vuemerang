<template lang="html">
  <div class="centerx">
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'email-outline'})" color="primary" type="flat">Icon Mail</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'checkmark-circle-outline'})" color="success" type="flat">Icon check_box</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'alert-circle-outline'})" color="danger" type="flat">Icon favorite</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'alert-triangle-outline'})" color="warning" type="flat">Icon error</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'people-outline'})" color="dark" type="flat">Icon chat</vm-button>
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
      this.$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'person-done-outline'})
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
