<template lang="html">
  <div
    :class="[`vm-order-by-${color}`,{
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}]"
    :style="getWidth"
    class="con-select">
    <label
      v-if="label"
      ref="inputSelectLabel"
      class="vm-order-by--label"
      for="">{{ label }}
    </label>
    <div
      class="input-select-con">
      <span ref="inputLabel">{{ sortByText }}</span>
      <!-- v-model="valueFilter" -->
      <input
        ref="inputselect"
        :style="getPaddingLeft"
        v-bind="$attrs"
        readonly
        class="input-select vm-order-by--input"
        type="text"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">
      <vm-icon
        :icon-pack="iconPack"
        :icon="direction === 'up' ? iconUp : iconDown"
        :class="direction === 'up' ? 'direction--up' : 'direction--down'"

        class="icon-select vm-order-by--order"
      ></vm-icon>
      <vm-icon
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-select vm-order-by--icon"
      ></vm-icon>

      <transition name="fadeselect">
        <div
          v-show="active"
          ref="vmOrderByOptions"
          :style="cords"
          :class="[`vm-order-by-${color}`,{'scrollx':scrollx}]"
          class="vm-order-by--options">
          <ul ref="ulx">
            <slot :data="formattedData">
              <vm-order-by-item
                v-for="(item,index) in formattedData"
                :key="index"
                :value="item.value"
                :text="item.text"
                :direction="item.direction"/>
            </slot>
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
import utils from '../../utils'
export default {
  name:'VmOrderBy',
  props:{
    value:{
      default:'',
      type:[String,Number]
    },
    data: {
      type: Array,
      required: true,
      validator: d => d instanceof Array
    },
    serializer: {
      type: Function,
      default: (d) => d,
      validator: d => d instanceof Function
    },
    sortByText: {
      default:'Sort by',
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
    icon:{
      default: 'arrow-ios-downward-outline',
      type:String
    },
    iconDown:{
      default: 'bar-chart-2-outline',
      type:String
    },
    iconUp:{
      default: 'bar-chart-2-outline',
      type:String
    },
    width:{
      default: null,
      type: String,
    }
  },
  data:()=>({
    getPaddingLeft: 'padding-left:0px',
    direction: 'up',
    inputText: '',
    valueFilter:'',
    active:false,
    valuex:'',
    clear:false,
    scrollx:false,
    cords:{},
    filterx:false
  }),
  computed:{
    parent() {
      return this
    },
    getWidth() {
      return this.width ? `width:${this.width};` : 'width:100%'
    },
    listeners(){
      return {
        ...this.$listeners,
        blur: (event) => {
          this.$emit('blur',event)
        },
        focus: (event) => {
          this.$emit('focus',event)
          // document.removeEventListener('click',this.clickBlur)
          this.debouncedGetData(event)
          // this.focus(event)
        },
        keyup: (event) => {
          if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
            event.preventDefault()
            let childrens = this.$children.filter((item)=>{
              return item.visible
            })
            childrens[0].$el.querySelector('.vm-order-by--item').focus()
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

      // if (this.inputText.length === 0) {
      //   return []
      // }

      let arr = []
      this.data.map((d, i) => {
        arr.push({
          id: i,
          data: d,
          value: `${d},asc`,
          direction: 'down',
          text: this.serializer(d,1)
        },{
          id: i,
          data: d,
          value: `${d},dsc`,
          direction: 'up',
          text: this.serializer(d,2)
        })
      })
      return arr
    }
  },
  watch:{
    value(event){
      this.valuex = this.value
      this.$emit('change',event)
    },
    active(){
      this.$nextTick(() => {
        if(this.active){
          let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
          parentNode ? utils.insertParent(this.$refs.vmOrderByOptions, parentNode) : utils.insertBody(this.$refs.vmOrderByOptions)
          setTimeout( () => {
            this.$children.forEach((item)=>{
              if (item.focusValue) {
                item.focusValue()
              }
            })
            if(this.$refs.ulx.scrollHeight >= 260) this.scrollx = true
          }, 100);
        } else {
          let [parent] = document.getElementsByTagName('body')
          let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
          if (parent && this.$refs.vsSelectOptions && this.$refs.vsSelectOptions.parentNode === parent) {
            parent.removeChild(this.$refs.vsSelectOptions)
          } else if(parentNode && this.$refs.vsSelectOptions){
            parentNode.removeChild(this.$refs.vsSelectOptions)
          }
        }
      })
    },
  },
  mounted(){
    this.getPaddingLeft = `padding-left:${this.$refs.inputLabel.clientWidth + 12}px;`
    this.debouncedGetData = debounce(100, this.focus)
    this.changeValue()
    if (this.active) {
      let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
      parentNode ? utils.insertParent(this.$refs.vmOrderByOptions, parentNode) : utils.insertBody(this.$refs.vmOrderByOptions)
    }
  },
  beforeDestroy() {
    let [parent] = document.getElementsByTagName('body')
    let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
    if (parent && this.$refs.vsSelectOptions && this.$refs.vsSelectOptions.parentNode === parent) {
      parent.removeChild(this.$refs.vsSelectOptions)
    } else if(parentNode && this.$refs.vsSelectOptions){
      parentNode.removeChild(this.$refs.vsSelectOptions)
    }
  },
  updated(){
    if(!this.active){
      this.changeValue()
    }
  },
  methods:{
    changeValue(){
      if(this.multiple){
        let values = this.value ? this.value : [];
        let options = this.$children

        options.forEach((item)=>{
          if(item.$children.length > 0) {
            options = [...options,...item.$children]
          }
        })

        let optionsValues = []
        values.forEach((item)=>{
          if (typeof item === 'object' && item !== null) {
            options.forEach((item_option)=>{
              if(this.serializer(item_option.value) === this.serializer(item)) {
                let text = item_option.text
                text = text.replace('check_circle','')
                optionsValues.push(text.trim())
              }
            })
          } else {
            options.forEach((item_option)=>{
              if(item_option.value == item) {
                let text = item_option.text
                text = text.replace('check_circle','')
                optionsValues.push(text.trim())
              }
            })
          }

        })
        this.$refs.inputselect.value = optionsValues.toString()
      } else {
        if(this.$refs.inputselect) {
          this.$refs.inputselect.value = this.valuex
        }
      }
    },
    focus(){
      this.active = true
      this.setLabelClass(this.$refs.inputSelectLabel, true)
      setTimeout( ()=> {
        document.addEventListener('click',this.clickBlur)
      }, 100);
      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })

    },
    clickBlur(event){
      let closestx = event.target.closest('.vm-order-by--options')
      if(!closestx){
        this.closeOptions()
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
      let parentNode = this.$el.closest('.con-vm-dialog')
      let elx = this.$refs.inputselect
      let content = this.$refs.vmOrderByOptions
      let topx = 0
      let leftx = 0
      let widthx = 0
      let scrollTopx = parentNode ? 0 : window.pageYOffset || document.documentElement.scrollTop
      if (!elx) return
      if(elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = this.$el.closest('.con-vm-dropdown--menu') ? elx.getBoundingClientRect().top - this.$el.closest('.con-vm-dropdown--menu').getBoundingClientRect().top : (elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx - content.scrollHeight
      } else {
        topx = this.$el.closest('.con-vm-dropdown--menu') ? elx.getBoundingClientRect().top - this.$el.closest('.con-vm-dropdown--menu').getBoundingClientRect().top :  (elx.getBoundingClientRect().top) + scrollTopx
      }

      leftx = this.$el.closest('.con-vm-dropdown--menu') ? elx.getBoundingClientRect().left - this.$el.closest('.con-vm-dropdown--menu').getBoundingClientRect().left : elx.getBoundingClientRect().left
      widthx = elx.offsetWidth

      let cords = {
        left: `${leftx}px`,
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
    }
  }
}
</script>
