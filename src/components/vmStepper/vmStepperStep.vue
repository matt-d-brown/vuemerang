<template lang="html">
  <div
    v-bind="$attrs"
    :class="[`vm-stepper__step--${color}`, {'vm-stepper__step--active': isActive, 'vm-stepper__step--editable': editable, 'vm-stepper__step--inactive': isInactive, 'vm-stepper__step--error': danger, 'vm-stepper__step--complete': complete, 'error--text': danger }]"
    class="vm-component vm-stepper__step"
    @click="click"
    v-on="$listeners">
    <span class="vm-stepper__step__step">
      <vm-icon
        v-if="danger || (editable && complete) || complete"
        :icon-pack="iconPack"
        :icon="getIcon"
      ></vm-icon>
      <span v-else>{{ step }}</span>
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
    validate: {
      default: true,
      type: Boolean
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
  computed: {
    getIcon(){
      return this.editable && !this.danger ? this.editIcon
           : this.complete  && !this.danger ? this.completeIcon
           : this.danger ? this.errorIcon
           : ''
    }
  },
  mounted () {
    let parent = this.$parent.vertical ? this.$parent : this.$parent.$parent
    this.id = parent.steps.length
    parent.steps.push({
      id: parent.steps.length,
      listeners: this.$listeners,
      toggle: this.toggle,
      validate: this.validate,
      step: Number(this.step),
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
}
</script>
