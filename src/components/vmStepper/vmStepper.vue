<template lang="html">
  <div
    :class="[{'vm-stepper--is-booted': isBooted, 'vm-stepper--vertical': vertical, 'vm-stepper--alt-labels': altLabels, 'vm-stepper--non-linear': nonLinear}]"
    class="vm-stepper">
    <slot/>
    <div
      v-if="!vertical && showFooter"
      class="vm-stepper--footer">
      <div class="">
        <vm-button
          v-show="inputValue !== 1 && allowedReverse"
          color="primary"
          type="default"
          @click="stepClick(inputValue - 1)">
          {{ previousText }}
        </vm-button>
      </div>
      <vm-button
        v-show="inputValue !== steps.length"
        @click="stepClick(inputValue + 1)">
        {{ saveNextText }}
      </vm-button>
      <vm-button
        v-show="inputValue === steps.length"
        @click="done()">
        {{ saveText }}
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
    showFooter: {
      default: true,
      type: Boolean
    },
    value: [Number, String],
    previousText: {
      default: 'Previous',
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
    allowReverse: {
      default: true,
      type: Boolean
    },
  },
  data:()=>({
    inputValue: null,
    isBooted: false,
    steps: [],
    contents: [],
    isReverse: false,
    validate: true,
  }),
  computed: {
    allowedReverse () {
      return this.steps[this.inputValue - 1].editable || this.allowReverse
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
  },
  mounted () {
    this.inputValue = this.value || this.steps[0].step || 1
  },
  methods: {
    done () {
      this.$emit('done')
    },
    stepClick (step) {
      this.$emit('step', this.inputValue)
      // let invalidate = this.steps.find(e => !e.validate && e.step === this.inputValue)
      // this.inputValue = Number(step)
      this.validate && this.$nextTick(() => (this.inputValue = Number(step)))
    }
  },
}
</script>
