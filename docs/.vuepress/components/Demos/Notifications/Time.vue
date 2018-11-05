<template lang="html">
  <div class="centex">
    <vm-button @click="$vm.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time default</vm-button>
    <vm-button @click="$vm.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time 4s (4000)</vm-button>
    <vm-button @click="$vm.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time 8s (8000)</vm-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
