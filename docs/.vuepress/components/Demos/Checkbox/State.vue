<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox @change="logx" v-model="checkBox1">Primary - active</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox2">Primary - inactive</vm-checkbox>
      </li>
      <li>
        <vm-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vm-checkbox>
      </li>
      <li>
        <vm-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vm-checkbox>
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
      checkBox3:true,
      checkBox4:false,
    }
  },
  methods:{
    logx(value){
      console.log("hola check",value);
    }
  }
}
</script>

<style lang="css">
</style>
