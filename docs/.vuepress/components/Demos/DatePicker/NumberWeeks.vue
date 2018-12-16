<template lang="html">
  <div>
    <vm-date-picker type="date" show-week-numbers placeholder="Select a date"/>
    <vm-date-picker type="daterange" show-week-numbers placeholder="Select a date" v-model="date"/>
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
