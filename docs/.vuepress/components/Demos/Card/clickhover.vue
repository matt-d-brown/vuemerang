<template lang="html">
  <div class="">
    <vm-card vmColor="success">
      <vm-card-media vmMedia="https://placeimg.com/640/480/any"></vm-card-media>
      <vm-card-header vmBackgroundColor="success" vmTitle="A nice title" vmSubtitle="A nice subtitle" vmIcon="check"></vm-card-header>
      <vm-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vm-card-body>
    </vm-card>
    <vm-card vm-click="clickCard" vmColor="success">
      <vm-card-header vmBackgroundColor="success" vmTitle="A nice title" vmIcon="check"></vm-card-header>
      <vm-card-media vmMedia="https://placeimg.com/640/480/any"></vm-card-media>
      <vm-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vm-card-body>
    </vm-card>
  </div>
</template>

<script>
export default {
  methods:{
    clickCard(){
      this.$vm.notify({title:'Click in Card',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>

<style lang="css">
</style>
