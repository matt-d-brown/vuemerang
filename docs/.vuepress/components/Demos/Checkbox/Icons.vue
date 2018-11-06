<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="message-square-outline" color="success" v-model="checkBox2">sms</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="close" color="danger" v-model="checkBox3">Cancel</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="attach-2-outline" color="warning" v-model="checkBox4">File</vm-checkbox>
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
