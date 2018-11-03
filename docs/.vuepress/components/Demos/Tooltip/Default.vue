<template lang="html">
  <div class="centerx examplex">
    <vm-tooltip text="Tooltip Default">
       <vm-switch v-model="switch1"/>
    </vm-tooltip>
    <vm-tooltip text="Tooltip Default">
      <vm-input-number v-model="number1"/>
    </vm-tooltip>
    <vm-tooltip text="Tooltip Default">
      <vm-button color="primary" type="border">Button</vm-button>
    </vm-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      number1:10,
    }
  }
}
</script>

<style lang="css">
</style>
