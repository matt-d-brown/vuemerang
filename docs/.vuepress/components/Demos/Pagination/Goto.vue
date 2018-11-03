<template>
  <div>
    <vm-pagination :total="20" v-model="currentx" goto ></vm-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 8
  })
}
</script>
