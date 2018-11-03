<template lang="html">
  <ul class="leftx">
    <li class="modelx">
      {{radios1}}
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="luis">Luis</vm-radio>
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="carols">Carols</vm-radio>
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="summer">summer</vm-radio>
    </li>
    <li>
      <vm-radio disabled="true" v-model="radios1" vm-value="lyon">Lyon - disabled</vm-radio>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      radios1:'summer',
    }
  }
}
</script>
