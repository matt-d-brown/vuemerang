<template lang="html">
  <div>
    <vm-date-picker type="date" :options="options3" placeholder="Select a date"/>
    <vm-date-picker type="daterange" :options="options4" placeholder="Select a date" v-model="date"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      options3: {
        disabledDate (date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      options4: {
        disabledDate (date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        }
      }
    }
  }
}
</script>
