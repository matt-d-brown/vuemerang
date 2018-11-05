<template>
  <div>
    <vm-pagination :total="40" v-model="currentx"></vm-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 14
  })
}
</script>
