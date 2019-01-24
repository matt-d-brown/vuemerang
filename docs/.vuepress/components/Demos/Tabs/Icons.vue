<template lang="html">
  <div>
    <vm-tabs :color="colorx">
      <vm-tab vm-label="Pets" vm-icon="pets" @click="colorx = '#8B0000'">
      </vm-tab>
      <vm-tab vm-label="Bank" vm-icon="account_balance" @click="colorx = '#FFA500'">
      </vm-tab>
      <vm-tab vm-label="Dashboard" vm-icon="dashboard" @click="colorx = '#551A8B'">
      </vm-tab>
      <vm-tab vm-label="Profile" vm-icon="account_circle" @click="colorx = '#0000FF'">
      </vm-tab>
    </vm-tabs>
  </div>
</template>

 <script>
export default {
  data:()=>({
    colorx: '#8B0000'
  })
}
</script>

 <style lang="css">
</style>
