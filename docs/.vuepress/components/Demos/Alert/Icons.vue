<template lang="html">
  <div class="centerx">
    <selected-icons :vm-icon.sync="icon1"/>
   <vm-alert active="true" color="rgb(111, 38, 224)" :icon="icon1" >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
   </vm-alert>
  </div>
</template>

<script>
import selectedIcons from '../../selectedIcons.vue'
export default {
  components:{
    selectedIcons
  },
  data(){
    return {
      icon1: 'sms',
    }
  }
}
</script>

<style lang="css">
</style>
