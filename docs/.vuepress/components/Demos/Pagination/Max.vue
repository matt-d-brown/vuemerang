<template>
  <div>
    <vm-pagination :total="30" v-model="currentx" :max="13"></vm-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 17
  })
}
</script>
