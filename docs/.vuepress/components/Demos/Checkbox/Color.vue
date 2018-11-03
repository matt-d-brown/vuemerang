<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="success" v-model="checkBox2">Success</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="danger" v-model="checkBox3">Danger</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="warning" v-model="checkBox4">Warning</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="dark" v-model="checkBox5">Dark</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vm-checkbox>
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
