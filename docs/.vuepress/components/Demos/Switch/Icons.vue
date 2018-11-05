<template lang="html">
  <ul class="con-s examplex">
    <li>
      <label for="">Primary</label>
      <vm-switch v-model="switch1" vm-icon-off="notifications_none" vm-icon-on="done"/>
    </li>
    <li>
      <label for="">success</label>
      <vm-switch color="success" v-model="switch2" vm-icon="done"/>
    </li>
    <li>
      <label for="">danger</label>
      <vm-switch color="danger" v-model="switch3" vm-icon="close"/>
    </li>
    <li>
      <label for="">warning</label>
      <vm-switch color="warning" v-model="switch4" vm-icon="error_outline"/>
    </li>
    <li>
      <label for="">dark</label>
      <vm-switch color="dark" v-model="switch5" vm-icon="volume_off"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vm-switch color="rgb(51, 53, 83)" v-model="switch6" vm-icon="photo_camera"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false
    }
  }
}
</script>

<style lang="css">
</style>
