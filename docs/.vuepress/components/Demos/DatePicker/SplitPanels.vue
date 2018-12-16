<template lang="html">
  <div>
    <vm-date-picker type="daterange" split-panels placeholder="Select a date" v-model="date"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: []
    }
  }
}
</script>

<style lang="stylus">
</style>
