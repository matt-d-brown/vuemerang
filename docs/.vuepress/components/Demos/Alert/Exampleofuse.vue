<template lang="html">
  <div class="centerx">
    <vm-input vm-label="Enter only numbers" placeholder="0123456789" v-model="value"/>

    <vm-alert :active="inputValid" color="danger" icon="new_releases">
      <span>the value is <b>invalid</b> you can only enter numbers</span>
    </vm-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:''
    }
  },
  computed:{
    inputValid(){
      return !/^\d+$/.test(this.value)
    }
  }
}
</script>
