<template lang="html">
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`vm-input-${color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':success,
      'input-icon-validate-danger':danger,
      'input-icon-validate-warning':warning,
      'is-label-placeholder':labelPlaceholder
    }]"
    class="vm-component vm-con-input-label vm-input">
    <label
      v-if="labelPlaceholder?false:label"
      class="vm-input--label"
      for=""
      @click="focusInput">{{ label }}
      <span
        v-if="optional"
        class="vm-input--label-span"> - Optional</span>
    </label>
    <div class="vm-con-input">
      <input
        v-format-with-comma
        ref="vminput"
        :data-position="position"
        :data-prev-value="prevValue"
        :data-type="type"
        :style="style"
        :autofocus="autofocus"
        :class="[size,{
          'hasValue':value !== '',
          'hasIcon':icon,
          'icon-after-input':iconAfter
        }]"
        :placeholder="null"
        :value="formatedValue"
        v-bind="$attrs"
        :type="type"
        class="vm-inputx vm-input--input"
        @change="onInput"
        v-on="listeners">
      <transition name="placeholderx">
        <span
          v-if="isValue&&(labelPlaceholder||$attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
            labelPlaceholder&&(size),
            size,
            {
              'vm-placeholder-label': labelPlaceholder,
          }]"
          class="input-span-placeholder vm-input--placeholder"
          @click="focusInput">
          {{ $attrs.placeholder || labelPlaceholder }}
        </span>
      </transition>

      <vm-icon
        v-if="icon || pass"
        :class="{'icon-after':iconAfter, 'icon-no-border':iconNoBorder}"
        :icon-pack="iconPack"
        :icon="pass ? getIconPass : icon"
        class="icon-inputx notranslate vm-input--icon"
        @on-icon-click="handleIconClick">
      </vm-icon>

      <transition name="icon-validate" >
        <span
          v-if="success || danger || warning"
          :class="{'icon-before':iconAfter}"
          class="input-icon-validate vm-input--icon-validate">
          <vm-icon
            :class="{'icon-before':iconAfter}"
            :icon-pack="iconPack"
            :icon="getIcon"
          ></vm-icon>
        </span>
      </transition>
    </div>

    <div 
      v-if="showStrengthMeter" 
      :class="[strengthMeterClass]">
      <div 
        :class="[strengthMeterFillClass]" 
        :data-score="passwordStrength"></div>
    </div>
    <p 
      v-if="showStrengthMeter && showPasswordLabel" 
      class="Password__strength-meter--label">{{ passwordLabels[passwordStrength] }}</p>

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
import zxcvbn from 'zxcvbn'
import formatNumber from 'accounting-js/lib/formatNumber'
import unformat from 'accounting-js/lib/unformat'
import _color from '../../utils/color.js'

export default {
  name:'VmInput',
  directives: {
    formatWithComma: {
      update(e) {
        if (e.dataset.type === 'currency') {
          let positionDiff = 0;
          if (e.dataset.prevValue.length === (e.value.length - 1)) {
            positionDiff = 1
          }
          if (e.dataset.prevValue.length === (e.value.length + 1)) {
            positionDiff = -1
          }
          if (e.selectionEnd !== e.dataset.position) {
            e.selectionEnd = Number(e.dataset.position) + positionDiff
          }
        }
      }
    }
  },
  inheritAttrs: false,
  props:{
    value:{
      default:'',
      type:[String,Number]
    },
    pass: {
      default:false,
      type:Boolean
    },
    labelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    label:{
      default:null,
      type:[String,Number]
    },
    optional:{
      default:false,
      type:Boolean
    },
    autofocus:{
      default:false,
      type:[Boolean,String]
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
    showStrengthMeter: {
      type: Boolean,
      default: false
    },
    showPasswordLabel: {
      type: Boolean,
      default: false
    },
    passwordLabels: {
      type: Array,
      default: () => [
        'Very weak',
        'Weak',
        'Good',
        'Strong',
        'Very strong'
      ]
    },
    strengthMeterClass: {
      type: String,
      default: 'Password__strength-meter'
    },
    strengthMeterFillClass: {
      type: String,
      default: 'Password__strength-meter--fill'
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
    formatedValue: '',
    prevValue: '',
    position: 0,
    isFocus:false,
    type: ''
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?_color.getColor(this.color,1):'rgba(0, 0, 0,0)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?_color.getColor(this.color,1):null,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.changeData(evt)
          let newValue = this.type === 'currency' ? unformat(evt.target.value) : evt.target.value
          this.$emit('input', newValue)
        },
        focus: (evt) => {
          this.$emit('focus',evt)
          this.changeFocus(true)
        },
        change: (evt) => {
          this.$emit('input-change', evt);
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.labelPlaceholder?true:!this.value
    },
    getIcon(){
      return this.danger  ? this.valIconDanger
           : this.warning ? this.valIconWarning
           : this.success ? this.valIconSuccess
           : ''
    },
    getIconPass(){
      return this.type !== 'password' ? 'eye-outline' : 'eye-off-outline'
    },
    passwordStrength () {
      return this.formatedValue ? zxcvbn(this.formatedValue).score : null
    }
  },
  watch: {
    value() {
      this.formatedValue = this.processFormatting(this.value)
    }
  },
  mounted () {
    this.formatedValue = this.processFormatting(this.value)
    this.type = this.$attrs.type ? this.$attrs.type : 'text'
  },
  methods:{
    // animation
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
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
    focusInput(){
      this.$refs.vminput.focus()
    },
    handleIconClick (event) {
      this.pass && (this.type == 'password' ? this.type = 'text' : this.type = 'password')
      this.$emit('on-icon-click', event);
    },
    onInput() {
      this.$emit('update:val', this.value)
    },
    changeData(evt) {
      this.prevValue = evt.target.value
      this.position = evt.target.selectionStart
      this.formatedValue = this.processFormatting(evt.target.value)
    },
    processFormatting(value) {
      if (this.type !== 'currency') {
        return value
      }
      let targetValue = unformat(value)
      if (!targetValue) {
        return 0
      }
      if (typeof targetValue === "string" && targetValue.indexOf(',') >= 0) {
        return targetValue
      }
      return formatNumber(targetValue, {thousand: ',', precision: 2})
    }
  },
}
</script>
