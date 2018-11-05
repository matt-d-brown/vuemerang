<template lang="html">
  <div class="">
    <ul class="leftx">
      <li class="modelx">
        {{radios2}}
      </li>
      <li>
        <vm-radio v-model="radios2" vm-value="primary">Primary</vm-radio>
      </li>
      <li>
        <vm-radio color="success" v-model="radios2" vm-value="Success">Success</vm-radio>
      </li>
      <li>
        <vm-radio color="danger" v-model="radios2" vm-value="Danger">Danger</vm-radio>
      </li>
      <li>
        <vm-radio color="warning" v-model="radios2" vm-value="Warning">Warning</vm-radio>
      </li>
      <li>
        <vm-radio color="dark" v-model="radios2" vm-value="Dark">Dark</vm-radio>
      </li>
      <li>
        <vm-radio color="rgb(87, 251, 187)" v-model="radios2" vm-value="RGB">RGB</vm-radio>
      </li>
      <li>
        <vm-radio color="#e48346" v-model="radios2" vm-value="HEX">HEX</vm-radio>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      radios2:'primary',
    }
  }
}
</script>

<style lang="css">
</style>
