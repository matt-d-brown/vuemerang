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
        title:'Info',
        text:'Anyone with access can view your invited visitors.',
        color:'primary',
        icon:'checkmark-circle-outline',
        fixed:true,
        click:()=>{
          // secondary function
          this.$vm.notify({
            title:'Secondary function',
            text:'Executed the function when clicking',
            color:'success',
            icon:'checkmark-circle-outline'
          })
        },
      })
    },
  }
}
</script>

<style lang="css">
</style>
