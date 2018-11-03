<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{form.regions}}
    </div>
    <vm-col v-for="(region, index) in regions" :key="index">
      <vm-checkbox v-model="form.regions" :vm-value="region" >{{ region.name }}</vm-checkbox>
    </vm-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
    regions: []
  },
  regions: [
    { id: 1, name: 'Queensland' },
    { id: 2, name: 'South Australia' },
    { id: 3, name: 'New South Wales' },
  ]
})
}
</script>

<style lang="css">
</style>
