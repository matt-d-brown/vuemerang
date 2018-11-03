<template lang="html">
  <div>
    <vm-textarea label="Label in Textarea" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
  })
}
</script>
