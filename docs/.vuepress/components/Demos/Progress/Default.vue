<template>
  <div>
    <button @click="valuex += 10">ahola</button>
    {{valuex}}
    <vm-progress :vm-percent="valuex" vm-color="primary">primary</vm-progress>
  </div>
</template>
<script>
export default {
  data:()=>({
    valuex:20
  })
}
</script>
