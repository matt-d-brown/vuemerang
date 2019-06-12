<template lang="html">
  <div>
    <vm-date-picker week-start="0" type="date" placeholder="Select a date"/>
    <vm-date-picker week-start="0" type="daterange" placeholder="Select a date" v-model="date"/>
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
