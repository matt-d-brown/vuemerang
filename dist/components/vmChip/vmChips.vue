<template lang="html">
  <div class="">
    <label
      v-if="label"
      ref="inputSelectLabel"
      :class="[`vm-chips--label-${color}`]"
      class="vm-chips--label"
      for="">{{ label }}
      <span
        v-if="optional"
        class="vm-chips--label-span"> - Optional</span>
    </label>
    <div
      :class="{'no-items':value.length==0, 'input-success': success, 'input-warning': warning, 'input-danger': danger}"
      class="con-chips">
      <slot>
      </slot>

      <input
        :placeholder="value.length>0?null:placeholder"
        v-model="newChip"
        type="text"
        class="con-chips--input"
        @focus="focus"
        @blur="blur"
        @keypress.enter="addItem">
      <div
        class="x-global con-chips--remove-all"
        @click="removeTotalItems">
        <vm-icon
          :icon-pack="iconPack"
          :icon="removeIcon"
        ></vm-icon>
      </div>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
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
import vmChip from './vmChip.vue'
export default {
  name:'VmChips',
  components:{
    vmChip
  },
  props:{
    value:{},
    vmColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    },
    iconPack:{
      type:String,
      default:'eva'
    },
    removeIcon:{
      type:String,
      default:'close',
    },
    color:{
      default:'primary',
      type:String
    },
    label:{
      default:null,
      type:[String]
    },
    optional:{
      default:false,
      type:Boolean
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
  data(){
    return {
      newChip:'',
      chip1:true,
      itemsx:this.items
    }
  },
  methods:{
    addItem(){
      // this.itemsx.push(this.newChip)
      let valueOld = this.value
      valueOld.push(this.newChip)
      this.$emit('input', valueOld)
      this.newChip = ''
    },
    removeTotalItems(){
      let valueOld = this.value
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld)
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
    focus() {
      this.setLabelClass(this.$refs.inputSelectLabel, true)
      this.focusx = true
      this.$emit('focus')
    },
    blur() {
      this.setLabelClass(this.$refs.inputSelectLabel, false)
      this.focusx = false
      this.$emit('blur')
    },
    setLabelClass (label, focusing) {
      if (!label) {
        return
      }
      if (focusing) {
        label.classList.add('input-select-label-' + this.color + '--active')
        return
      }

      label.classList.remove('input-select-label-' + this.color + '--active')
    }
  }
}
</script>
