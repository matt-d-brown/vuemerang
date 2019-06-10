<template lang="html">
  <div class="vm-stepper" :class="[{'vm-stepper--is-booted': isBooted, 'vm-stepper--vertical': vertical, 'vm-stepper--alt-labels': altLabels, 'vm-stepper--non-linear': nonLinear}]">
    <slot/>
  <div class="vm-stepper--footer">
    <vm-button v-show="inputValue !== 1" color="primary" @click="inputValue--" type="default">
      {{previusText}}
    </vm-button>
    <vm-button v-show="inputValue !== steps.length" @click="inputValue++">
      {{saveNextText}}
    </vm-button>
    <vm-button v-show="inputValue === steps.length" @click="done()">
      {{saveText}}
    </vm-button>
  </div>
  </div>
</template>

<script>
export default {
  name: "VmStepper",
  props: {
    nonLinear: Boolean,
    altLabels: Boolean,
    vertical: Boolean,
    value: [Number, String],
    previusText: {
      default: 'Previus',
      type: String
    },
    saveNextText: {
      default: 'Save & Next',
      type: String
    },
    saveText: {
      default: 'Save',
      type: String
    },
  },
  data:()=>({
    inputValue: null,
    isBooted: false,
    steps: [],
    contents: [],
    isReverse: false
  }),
  mounted () {
    this.inputValue = this.value || this.steps[0].step || 1
  },
  methods: {
    done () {
      this.$emit('done')
    },
    stepClick (step) {
      // this.inputValue = Number(step)
      this.$nextTick(() => (this.inputValue = Number(step)))
    }
  },
  watch: {
    inputValue (val, prev) {
      this.isReverse = Number(val) < Number(prev)
      for (let index = this.steps.length; --index >= 0;) {
        this.steps[index].toggle(this.inputValue)
      }
      for (let index = this.contents.length; --index >= 0;) {
        this.contents[index].toggle(this.inputValue, this.isReverse)
      }

      this.$emit('input', this.inputValue)
      prev && (this.isBooted = true)
    },
    value () {
      this.$nextTick(() => (this.inputValue = this.value))
    }
  }
}
</script>
