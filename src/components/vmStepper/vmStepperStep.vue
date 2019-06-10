<template lang="html">
  <div
    v-bind="$attrs"
    @click="click"
    class="vm-component vm-stepper__step"
    :class="[`vm-stepper__step--${color}`, {'vm-stepper__step--active': isActive, 'vm-stepper__step--editable': editable, 'vm-stepper__step--inactive': isInactive, 'vm-stepper__step--error': danger, 'vm-stepper__step--complete': complete, 'error--text': danger }]"
    v-on="$listeners">
    <span class="vm-stepper__step__step">
      <vm-icon
        v-if="danger || (editable && complete) || complete"
        :icon-pack="iconPack"
        :icon="getIcon"
      ></vm-icon>
      <span v-else>{{step}}</span>
    </span>
    <div class="vm-stepper__label">
      <slot/>
      <small>{{ descriptionText }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "VmStepperStep",
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    complete: Boolean,
    editable: Boolean,
    danger: Boolean,
    iconPack:{
      default:'eva',
      type:String
    },
    completeIcon: {
      type: String,
      default: 'checkmark-outline'
    },
    editIcon: {
      type: String,
      default: 'edit-outline'
    },
    errorIcon: {
      type: String,
      default: 'alert-circle-outline'
    },
    descriptionText:{
      default: null,
      type:String
    },
    step: [Number, String]
  },
  data:()=>({
    id: null,
    isActive: false,
    isInactive: true
  }),
  mounted () {
    this.id = this.$parent.$parent.steps.length
    this.$parent.$parent.steps.push({
      id: this.$parent.$parent.steps.length,
      listeners: this.$listeners,
      toggle: this.toggle,
      attrs: this.$attrs
    })
  },
  methods: {
    click (e) {
      e.stopPropagation()

      this.$emit('click', e)

      if (this.editable) {
        this.$parent.$parent.stepClick(this.step)
      }
    },
    toggle (step) {
      this.isActive = step.toString() === this.step.toString()
      this.isInactive = Number(step) < Number(this.step)
    }
  },
  computed: {
    getIcon(){
      return this.editable && !this.danger ? this.editIcon
           : this.complete ? this.completeIcon
           : this.danger ? this.errorIcon
           : ''
    }
  }
}
</script>
