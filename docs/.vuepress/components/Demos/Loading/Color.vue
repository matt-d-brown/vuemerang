<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorLoading" name="" value="">
    <vm-button @click="openLoadingColor" type="gradient" color="danger">Danger</vm-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorLoading:'#7d0c3f',
    }
  },
  methods:{
    openLoadingColor(){
      this.$vm.loading({color:this.colorLoading})
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 2000);
    },
  }
}
</script>

<style lang="css">
</style>
