<template lang="html">
  <div class="centex examplex">
    <vm-switch v-model="switch1">
      <span slot="on">On</span>
      <span slot="off">Off</span>
    </vm-switch>
    <vm-switch color="success" v-model="switch2">
      <span slot="on">Accept</span>
      <span slot="off">Cancel</span>
    </vm-switch>
    <vm-switch color="danger" vm-icon-off="close" v-model="switch3">
      <span slot="on">Remove</span>
    </vm-switch>
    <vm-switch color="warning" vm-icon-on="error_outline" v-model="switch4">
      <span slot="off">Prevent</span>
    </vm-switch>
    <vm-switch color="dark" vm-icon-on="check_box" vm-icon-off="block" v-model="switch5">
      <span slot="on">YES</span>
      <span slot="off">NO</span>
    </vm-switch>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
    }
  }
}
</script>

<style lang="css">
</style>
