<template lang="html">
  <div>
    <vm-stepper v-model="step" vertical>
      <vm-stepper-step step="1" :complete="step > 1" description-text="Optional">
        Name of step 1
      </vm-stepper-step>
      <vm-stepper-content step="1">
        <div class="card" />
        <vm-button @click="step = 2">
          Next
        </vm-button>
      </vm-stepper-content>
      <vm-stepper-step step="2" :complete="step > 2" description-text="Optional">
        Name of step 2
      </vm-stepper-step>
      <vm-stepper-content step="2">
        <div class="card" />
        <vm-button @click="step = 3">
          Next
        </vm-button>
      </vm-stepper-content>
      <vm-stepper-step step="3" description-text="Optional">
        Name of step 3
      </vm-stepper-step>
      <vm-stepper-content step="3">
        <div class="card" />
        <vm-button @click="step = 1">
          Next
        </vm-button>
      </vm-stepper-content>
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
    margin: 5px;
  }
</style>
