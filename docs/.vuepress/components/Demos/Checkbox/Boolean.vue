<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">{{checkBox1}}</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox2">{{checkBox2}}</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
    }
  }
}
</script>

<style lang="css">
</style>
