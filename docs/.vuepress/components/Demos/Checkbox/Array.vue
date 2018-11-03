<template lang="html">
  <div class="">
    <ul class="centerx">
      <li class="modelx">
        {{checkBox1}}
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="luis">Luis</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="carols">carols</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="summer">summer</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="lyon">Lyon</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:['luis']
    }
  }
}
</script>

<style lang="css">
  .modelx {
    padding: 10px;
    background: rgb(245, 245, 245);
  }
</style>
