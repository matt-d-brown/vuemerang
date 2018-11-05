<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="sms" color="success" v-model="checkBox2">sms</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="close" color="danger" v-model="checkBox3">Cancel</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="attach_file" color="warning" v-model="checkBox4">File</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="format_bold" color="dark" v-model="checkBox5">Bold</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="location_searching" color="rgb(38, 187, 174)" v-model="checkBox6">location</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="camera_alt" color="#720ea8" v-model="checkBox7">Camera</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
}
</script>

<style lang="css">
</style>
