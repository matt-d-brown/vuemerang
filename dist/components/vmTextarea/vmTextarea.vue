<template lang="html">
  <div
    :class="{'textarea-danger': counter ? value.length > counter : false, 'focusx': focusx}"
    class="vm-component vm-con-textarea">

    <h4 v-if="label">
      {{ label }}
    </h4>

    <textarea
      :value="value"
      v-bind="$attrs"
      class="vm-textarea"
      v-on="listeners">
    </textarea>

    <div
      v-if="counter"
      class="count vm-textarea--count">
      {{ value.length }} / {{ counter }}
    </div>

  </div>
</template>

<script>
export default {
  name: "VmTextarea",
  inheritAttrs:false,
  props:{
    value:{},
    label:{
      default:null,
      type: String
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({
    focusx: false
  }),
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        input:(evt) => {
          this.$emit('input', evt.target.value)
        },
        focus:() => {
          this.focus()
        },
        blur:() => {
          this.blur()
        }
      }
    }
  },
  watch:{
    value() {
      if(this.value.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    focus() {
      this.focusx = true
    },
    blur() {
      this.focusx = false
    }
  }
}
</script>
