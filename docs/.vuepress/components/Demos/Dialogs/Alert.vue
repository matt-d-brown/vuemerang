<template lang="html">
  <div class="centerx">
    <vm-button @click="openAlert('primary')" color="primary" type="flat">Alert Primary</vm-button>
    <vm-button @click="openAlert('success')" color="success" type="flat">Alert success</vm-button>
    <vm-button @click="openAlert('danger')" color="danger" type="flat">Alert Danger</vm-button>
    <vm-button @click="openAlert('warning')" color="warning" type="flat">Alert Warning</vm-button>
    <vm-button @click="openAlert('dark')" color="dark" type="flat">Alert Dark</vm-button>
    <vm-button @click="openAlert(null)" color="primary" type="gradient">Alert Color RGB | HEX</vm-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorAlert:'primary',
    titleAlert:'Alert',
    activeAlert:false,
    valueInput:'',
  }),
  methods:{
    openAlert(color){
      this.colorAlert = color || this.getColorRandom()
      this.$vm.dialog({
        color:this.colorAlert,
        title: `Dialog - ${this.colorAlert}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    },
    acceptAlert(){
      this.$vm.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
  }
}
</script>

<style lang="css">
</style>
