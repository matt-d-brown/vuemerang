<template lang="html">
  <div class="centerx">
    <vm-button @click="openLoading" type="filled" color="primary">Loading Default</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    openLoading(){
      this.$vm.loading()
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 2000);
    },
  }
}
</script>

<style lang="css">
</style>
