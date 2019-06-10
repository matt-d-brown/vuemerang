<template lang="html">
  <transition :name="isReverse?'fade-content-invert':'fade-content'">
    <div
      v-if="isActive"
      class="vm-component vm-stepper__content"
      v-on="$listeners">
      <div 
        :style="styles" 
        class="vm-stepper__wrapper">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VmStepperContent",
  props: {
    step: {
      type: [Number, String],
      required: true
    }
  },
  data:()=>({
    id: null,
    height: 0,
    isVertical: null,
    isActive: null,
    isReverse: false
  }),
  computed: {
    styles () {
      if (!this.isVertical) return {}

      return {
        height: `${this.height}px`,
      }
    }
  },
  watch: {
    isActive (current, previous) {
      // If active and the previous state
      // was null, is just booting up
      if (current && previous == null) {
        this.height = 'auto'
        return
      }

      if (!this.isVertical) return

      if (this.isActive) this.enter()
      else this.leave()
    }
  },
  mounted () {this.isActive
    this.isVertical = this.$parent.$parent.vertical
    this.id = this.$parent.$parent.contents.length
    this.$parent.$parent.contents.push({
      id: this.$parent.$parent.contents.length,
      listeners: this.$listeners,
      toggle: this.toggle,
      attrs: this.$attrs
    })
  },
  methods: {
    enter () {
      let scrollHeight = 0

      // Render bug with height
      requestAnimationFrame(() => {
        scrollHeight = this.$refs.wrapper.scrollHeight
      })

      this.height = 0

      // Give the collapsing element time to collapse
      setTimeout(() => this.isActive && (this.height = (scrollHeight || 'auto')), 450)
    },
    leave () {
      this.height = this.$refs.wrapper.clientHeight
      setTimeout(() => (this.height = 0), 10)
    },
    toggle (step, reverse) {
      this.isActive = step.toString() === this.step.toString()
      this.isReverse = reverse
    }
  },
}
</script>
