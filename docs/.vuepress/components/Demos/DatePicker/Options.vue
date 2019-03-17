<template lang="html">
  <div>
    <vm-date-picker type="date" :options="options1" placeholder="Select a date"/>
    <vm-date-picker type="daterange" :options="options2" placeholder="Select a date"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: {
          shortcuts: [
              {
                  text: 'Today',
                  value () {
                      return new Date();
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click today');
                  }
              },
              {
                  text: 'Yesterday',
                  value () {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      return date;
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click yesterday');
                  }
              },
              {
                  text: 'One week',
                  value () {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      return date;
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click a week ago');
                  }
              }
          ]
      },
      options2: {
          shortcuts: [
              {
                  text: '1 week',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      return [start, end];
                  }
              },
              {
                  text: '1 month',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      return [start, end];
                  }
              },
              {
                  text: '3 months',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      return [start, end];
                  }
              }
          ]
      }
    }
  }
}
</script>
