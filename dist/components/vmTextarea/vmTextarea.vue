<template lang="html">
  <div
    :class="[`vm-textarea-${color}`,{'focusx': focusx}]">
    <label
      v-if="label"
      class="vm-textarea--label"
      for=""
      @click="focus">{{ label }}
      <span
        v-if="optional"
        class="vm-textarea--label-span"> - Optional</span>
    </label>
    <div
      :class="{'focusx': focusx, 'textarea-success': success, 'textarea-warning': warning, 'textarea-danger': counter ? (value && value.length > counter) : danger ? danger:false}"
      :style="getStyle"
      class="vm-component vm-con-textarea">
      <textarea
        :value="value"
        v-bind="$attrs"
        :style="getStyle"
        class="vm-textarea"
        v-on="listeners">
      </textarea>

      <div
        v-if="counter"
        class="count vm-textarea--count">
        {{ value ? value.length : 0 }} / {{ counter }}
      </div>
    </div>
    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation vm-input--text-validation">
        <span class="span-text-validation span-text-validation-success vm-input--text-validation-span">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger vm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning vm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation vm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>
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
    optional:{
      default:false,
      type:Boolean
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    },
    height:{
      default:null,
      type: String
    },
    width:{
      default:null,
      type: String
    },
    icon:{
      default:null,
      type:String
    },
    iconAfter:{
      default:false,
      type:[Boolean,String]
    },
    iconNoBorder:{
      default:false,
      type:Boolean
    },
    iconPack:{
      default:'eva',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    success:{
      default:false,
      type:Boolean
    },
    danger:{
      default:false,
      type:Boolean
    },
    warning:{
      default:false,
      type:Boolean
    },
    successText:{
      default: null,
      type:String
    },
    dangerText:{
      default: null,
      type:String
    },
    warningText:{
      default: null,
      type:String
    },
    descriptionText:{
      default: null,
      type:String
    },
    size:{
      default:'normal',
      type:String
    },
    valIconSuccess:{
      default: 'checkmark-circle-outline',
      type:String
    },
    valIconDanger:{
      default: 'close',
      type:String
    },
    valIconWarning:{
      default: 'alert-triangle-outline',
      type:String
    }
  },
  data:()=>({
    focusx: false
  }),
  computed:{
    getStyle() {
      let style = ''
      if (this.height) {
        style = `height:${this.height};`
      }
      if (this.width) {
        style += `width:${this.width};`
      }
      return style
    },
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
      if(this.value && this.value.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focus() {
      this.focusx = true
      this.$emit('focus')
    },
    blur() {
      this.focusx = false
      this.$emit('blur')
    }
  }
}
</script>
