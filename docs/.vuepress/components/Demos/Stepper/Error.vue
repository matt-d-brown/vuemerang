<template lang="html">
  <div>
    <vm-stepper v-model="step">
      <vm-stepper-header>
        <vm-stepper-step step="1" :complete="step > 1">
          Name of step 1
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step step="2" :complete="step > 2" danger descriptionText="Alert message">
          Name of step 2
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step step="3" danger descriptionText="Alert message">
          Name of step 3
        </vm-stepper-step>
      </vm-stepper-header>
      <vm-stepper-items>
        <vm-stepper-content step="1">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="2">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="3">
          <div class="card" />
        </vm-stepper-content>
      </vm-stepper-items>
    </vm-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style>
  .card {
    background: #bdbdbd;
    height: 200px;
  }
</style>
