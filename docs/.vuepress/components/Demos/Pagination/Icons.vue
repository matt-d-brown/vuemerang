<template>
  <div>
    <vm-pagination :total="100" v-model="currentx" prev-icon="arrow-back" next-icon="arrow-forward"></vm-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 64
  })
}
</script>
