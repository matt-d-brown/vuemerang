<template lang="html">
  <div class="">
    <vm-tabs :color="colorx">
      <vm-tab @click="colorx = 'success'" vm-label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'danger'" vm-label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'warning'" vm-label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'dark'" vm-label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vm-tab>
        <vm-tab @click="colorx = 'rgb(16, 233, 179)'" vm-label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vm-tab>
    </vm-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success'
  }),
}
</script>

<style lang="css">
</style>
