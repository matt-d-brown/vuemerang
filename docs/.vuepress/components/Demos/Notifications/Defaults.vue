<template lang="html">
  <div class="con-notifications">
    <vm-button @click="$vm.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" color="primary" type="border">Notification white</vm-button>
    <vm-button @click="$vm.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" color="primary" type="flat">Notification Primary</vm-button>
    <vm-button @click="$vm.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" color="success" type="flat">Notification Success</vm-button>
    <vm-button @click="$vm.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" color="danger" type="flat">Notification Danger</vm-button>
    <vm-button @click="$vm.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" color="warning" type="flat">Notification Warning</vm-button>
    <vm-button @click="$vm.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" color="dark" type="flat">Notification Dark</vm-button>
    <vm-button @click="random()" color="success" type="gradient">Notification Random Color</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    random(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vm.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
      })

    },
  }
}
</script>

<style lang="css">
  .con-notifications {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
