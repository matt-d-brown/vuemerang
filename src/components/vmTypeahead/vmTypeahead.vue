<template lang="html">
  <div
    :class="{
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}"
    :style="getWidth"
    class="vm-component vm-typeahead"
  >
    <label
      v-if="label"
      ref="inputSelectLabel"
      :class="[`vm-typeahead--label-${color}`]"
      class="vm-typeahead--label"
      for="">{{ label }}
      <span
        v-if="required"
        class="vm-typeahead--label-span">*</span>
    </label>
    <div class="input-select-con">
      <!-- v-model="valueFilter" -->
      <input
        ref="inputselect"
        v-bind="$attrs"
        class="input-select vm-typeahead--input"
        type="text"
        autocomplete="off"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">

      <vm-typeahead-loading
        :active="activeLoading"
        :color="color"
        :type="loadingType"></vm-typeahead-loading>
      <transition name="fadeselect">
        <div
          v-show="(!createObject && active && matchedItems.length > 0) || (createObject && !activeLoading && inputText.length > 0 && matchedItems.length === 0)"
          ref="vmSelectOptions"
          :style="cords"
          :class="[`vm-typeahead-${color}`,{'scrollx':scrollx}]"
          class="vm-typeahead--options">
          <ul
            v-show="matchedItems.length > 0"
            ref="ulx">
            <slot :data="matchedItems">
              <vm-typeahead-item
                is="vm-typeahead-item"
                v-for="(item,index) in matchedItems"
                :key="index"
                :value="item.id"
                :text="item.text">
                <template slot="html">
                  <slot
                    :data="item.data"
                    :text="item.text"
                    name="html"></slot>
                </template>
              </vm-typeahead-item>
            </slot>
          </ul>
          <ul v-show="!activeLoading && inputText.length > 0 && data.length === 0">
            <vm-typeahead-data
              v-if="createObject"
              :text="createText"
              :value="inputText"
              @click="createAction"></vm-typeahead-data>
          </ul>
        </div>
      </transition>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation">
        <span class="span-text-validation span-text-validation-success">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger">
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning">
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation">
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
import { debounce } from 'throttle-debounce'
//import utils from '../../utils'
function sanitize(text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default {
  name: "VmTypeahead",
  inheritAttrs:false,
  props:{
    value:{},
    data: {
      type: Array,
      required: true,
      validator: d => d instanceof Array
    },
    filter: {
      type: Function,
      default: (f) => f,
      validator: f => f instanceof Function
    },
    serializer: {
      type: Function,
      default: (d) => d.name,
      validator: d => d instanceof Function
    },
    url:{
      default: null,
      type:String
    },
    createObject:{
      default:false,
      type:Boolean
    },
    required:{
      default:false,
      type:Boolean
    },
    createText:{
      default:'Add',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    label:{
      default:null,
      type:[String]
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
    iconPack:{
      default: 'eva',
      type:String
    },
    width:{
      default: null,
      type: String
    },
    loadingType:{
      default: 'default',
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    minMatchingChars: {
      type: Number,
      default: 3
    },
    maxMatches: {
      type: Number,
      default: 20
    }
  },
  data:()=>({
    inputText: '',
    valueFilter:'',
    active:false,
    valuex:'',
    scrollx:false,
    cords:{},
    activeLoading: false
  }),
  computed:{
    parent() {
      return this
    },
    getWidth() {
      return this.width ? `width:${this.width};` : 'width:100%'
    },
    escapedQuery() {
      return escapeRegExp(sanitize(this.inputText))
    },
    listeners(){
      return {
        ...this.$listeners,
        blur: (event) => {
          // if(this.autocomplete && event.relatedTarget?!event.relatedTarget.closest('.vm-typeahead--options'):false ){
          //   this.closeOptions()
          // }
          this.$emit('blur',event)
        },
        focus: (event) => {
          this.$emit('focus',event)
          // document.removeEventListener('click',this.clickBlur)
          this.focus(event)
        },
        input: (event) => {
          if (event.target.value.length > 1) {
            let t = this
            t.activeLoading = true
            t.inputText = event.target.value
            t.debouncedGetData(event.target.value)
          }
        },
        keyup: (event) => {
          if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
            event.preventDefault()
            let childrens = this.$children.filter((item)=>{
              return item.visible
            })
            childrens[0].$el.querySelector('.vm-typeahead--item').focus()
          } else {
              // this.filterItems(event.target.value)
          }

          this.$children.map((item)=>{
            item.valueInputx = this.$refs.inputselect.value
          })
        }
      }
    },
    formattedData () {
      if (!(this.data instanceof Array)) {
        return []
      }

      // if (this.inputText.length === 0 || this.inputText.length < this.minMatchingChars) {
      //   return []
      // }

      return this.data.map((d, i) => {
        return {
          id: i,
          data: d,
          text: this.serializer(d)
        }
      })
    },
    matchedItems () {
      const re = new RegExp(this.escapedQuery, 'gi')
      // Filter, sort, and concat
      return this.formattedData
        .filter(i => i.text.match(re) !== null)
        .sort((a, b) => {
          const aIndex = a.text.indexOf(a.text.match(re)[0])
          const bIndex = b.text.indexOf(b.text.match(re)[0])
          if (aIndex < bIndex) { return -1 }
          if (aIndex > bIndex) { return 1 }
          return 0
        }).slice(0, this.maxMatches)
    }
  },
  watch: {
    value (event) {
      this.valuex = this.value
      this.$emit('change',event)
    },
    data () {
      this.activeLoading = false
    },
    active(){
      this.$nextTick(() => {
        if(this.active){
          //eslint-disable-next-line
          let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
          // parentNode ? utils.insertParent(this.$refs.vmSelectOptions, parentNode) : utils.insertBody(this.$refs.vmSelectOptions)
          setTimeout( () => {
            // this.$children.forEach((item)=>{
            //   if (item.focusValue) {
            //     // item.focusValue()
            //   }
            // })
            if(this.$refs.ulx.scrollHeight >= 260) this.scrollx = true
          }, 100);
        } else {
          //eslint-disable-next-line
          let [parent] = document.getElementsByTagName('body')
          //eslint-disable-next-line
          let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
          // if (parent && this.$refs.vmSelectOptions && this.$refs.vmSelectOptions.parentNode === parent) {
          //   parent.removeChild(this.$refs.vmSelectOptions)
          // } else if(parentNode && this.$refs.vmSelectOptions){
          //   parentNode.removeChild(this.$refs.vmSelectOptions)
          // }
        }
      })
    },
  },
  mounted(){
    this.debouncedGetData = debounce(this.debounce, this.inputChange)
    this.changeValue()
    if (this.active) {
      // let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
      // parentNode ? utils.insertParent(this.$refs.vmSelectOptions, parentNode) : utils.insertBody(this.$refs.vmSelectOptions)
    }
  },
  beforeDestroy() {
    // let [parent] = document.getElementsByTagName('body')
    // let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
    // if (parent && this.$refs.vmSelectOptions && this.$refs.vmSelectOptions.parentNode === parent) {
    //   parent.removeChild(this.$refs.vmSelectOptions)
    // } else if(parentNode && this.$refs.vmSelectOptions){
    //   parentNode.removeChild(this.$refs.vmSelectOptions)
    // }
  },
  updated(){
    if(!this.active){
      this.changeValue()
    }
  },
  methods: {
    inputChange (value) {
      this.$emit('input-change', this.filter(value), this.url)
    },
    changeValue(){
      if(this.$refs.inputselect) {
        this.$refs.inputselect.value = this.valuex
      }
    },
    focus(){
      this.active = true
      this.setLabelClass(this.$refs.inputSelectLabel, true)
      //let inputx = this.$refs.inputselect
      setTimeout( ()=> {
        document.addEventListener('click',this.clickBlur)
      }, 100);
      // this.$refs.inputselect.select()

      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })

    },
    clickBlur(event){
      let closestx = event.target.closest('.vm-typeahead--options')
      if(!closestx){
        this.closeOptions()
        if(this.autocomplete){
          // this.filterItems('')
        }
        this.changeValue()
      }
    },
    closeOptions(){
      // this.$refs.inputselect.blur()
      this.active = false
      this.setLabelClass(this.$refs.inputSelectLabel, false)
      document.removeEventListener('click',this.clickBlur)
    },
    changePosition(){
      //let parentNode = this.$el.closest('.con-vm-dialog')
      let elx = this.$refs.inputselect
      //let content = this.$refs.vmSelectOptions
      //let conditional = this.autocomplete
      let topx = 0
      let widthx = 0
      //let scrollTopx = parentNode ? 0 : window.pageYOffset || document.documentElement.scrollTop
      if (!elx) return
      // if((elx.getBoundingClientRect().top + content.scrollHeight + 20) >= ((window.innerHeight/2)+scrollTopx)) {
        // topx = -275
      // } else {
      // }
      topx = 38

      widthx = elx.offsetWidth

      let cords = {
        top: `${topx}px`,
        width: `${widthx}px`
      }

      return cords
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
    setLabelClass: function(label, focusing) {
      if (!label) {
        return
      }

      if (focusing) {
        label.classList.add('input-select-label-' + this.color + '--active')
        return
      }

      label.classList.remove('input-select-label-' + this.color + '--active')
    },
    createAction: function(event) {
      this.$emit('create-object', event);
    }
  }
}
</script>
