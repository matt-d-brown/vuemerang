<template lang="html">
  <div class="centerx">
    <input type="color" v-model="backgroundLoading" name="" value="">
    <vm-button @click="openLoadingBackground" type="gradient" color="success">Success</vm-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'#22c16b',
    }
  },
  methods:{
    openLoadingBackground(){
      this.$vm.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 3000);
    },
  }
}
</script>

<style lang="css">
</style>
