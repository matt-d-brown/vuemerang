<template lang="html">
  <div class="centerx">
    <vm-button id="button-with-loading" class="vm-con-loading__container" @click="openLoadingContained" type="relief" color="primary">Button with Loading</vm-button>
    <vm-button @click="openLoadingInDiv" type="relief" color="primary">Div with Loading</vm-button>
    <div class="fill-row">
      <div id="div-with-loading" class="vm-con-loading__container">Load Me!</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vm.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-with-loading',
        scale: 0.45
      })
      setTimeout( ()=> {
        this.$vm.loading.close('#button-with-loading > .con-vm-loading')
      }, 3000);
    },
    openLoadingInDiv(){
      this.$vm.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vm.loading.close('#div-with-loading > .con-vm-loading')
      }, 3000);
    },
  }
}
</script>

<style lang="stylus">
.fill-row
  flex: 0 0 100%;
  margin-top: 20px;
  margin-bottom: 20px;

#div-with-loading
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
</style>
