<template lang="html">
  <div class="centerx">
    <vm-button @click="myFunction()" color="primary" type="flat">Run Example</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    myFunction(){
      this.$vm.notify({
        title:'Function click',
        text:'Click on me',
        color:'primary',
        fixed:true,
        click:()=>{
          // secondary function
          this.$vm.notify({
            title:'Secondary function',
            text:'Executed the function when clicking',
            color:'success',
            icon:'check_box'
          })
        },
      })
    },
  }
}
</script>

<style lang="css">
</style>
