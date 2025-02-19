<template lang="html">
  <div
    :class="[`vm-select-${color}`,{
      'autocompletex':autocomplete,
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}]"
    :style="getWidth"
    class="con-select">
    <label
      v-if="label"
      ref="inputSelectLabel"
      class="vm-select--label"
      for="">{{ label }}
      <span
        v-if="optional"
        class="vm-select--label-span"> - Optional</span>
    </label>
    <div class="input-select-con">
      <!-- v-model="valueFilter" -->
      <input
        ref="inputselect"
        v-bind="$attrs"
        :readonly="!autocomplete"
        class="input-select vm-select--input"
        type="text"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">

      <vm-icon
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-select vm-select--icon"
      ></vm-icon>

      <transition name="fadeselect">
        <div
          v-show="active"
          ref="vmSelectOptions"
          :style="cords"
          :class="[`vm-select-${color}`,{'scrollx':scrollx}]"
          class="vm-select--options">
          <ul ref="ulx">
            <slot/>
          </ul>
          <ul v-show="clear">
            <vm-select-data
              v-if="createObject"
              :text="createText"
              :value="inputText"
              @click="createAction"></vm-select-data>
            <li
              v-if="!createObject"
              @click="filterItems(''),changeValue()" >
              {{ noData }}
            </li>
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
  name:'VmSelect',
  props:{
    value:{
      default:'',
      type:[String,Number]
    },
    noData:{
      default:'data no available',
      type:String
    },
    maxSelected:{
      default:null,
      type:[Number,String]
    },
    autocomplete:{
      default:false,
      type:Boolean
    },
    createObject:{
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
    multiple:{
      default:false,
      type:Boolean
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
    iconPack:{
      default: 'eva',
      type:String
    },
    icon:{
      default: 'arrow-ios-downward-outline',
      type:String
    },
    width:{
      default: null,
      type: String,
    },
    serializer: {
      type: Function,
      default: (d) => d.id,
      validator: d => d instanceof Function
    }
  },
  data:()=>({
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
          if(this.autocomplete && event.relatedTarget?!event.relatedTarget.closest('.vm-select--options'):false ){
            this.closeOptions()
          }
          this.$emit('blur',event)
        },
        focus: (event) => {
          this.$emit('focus',event)
          // document.removeEventListener('click',this.clickBlur)
          this.debouncedGetData(event)
          // this.focus(event)
        },
        input: (event) => {
          if (this.autocomplete) {
            this.$emit('input-change', event)
          }
        },
        keyup: (event) => {
          if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
            event.preventDefault()
            let childrens = this.$children.filter((item)=>{
              return item.visible
            })
            childrens[0].$el.querySelector('.vm-select--item').focus()
          } else {
            if(this.autocomplete){
              this.filterItems(event.target.value)
            }
          }

          this.$children.map((item)=>{
            item.valueInputx = this.$refs.inputselect.value
          })
        }
      }
    },
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
          parentNode ? utils.insertParent(this.$refs.vmSelectOptions, parentNode) : utils.insertBody(this.$refs.vmSelectOptions)
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
    this.debouncedGetData = debounce(100, this.focus)
    this.changeValue()
    if (this.active) {
      let parentNode = this.$el.closest('.con-vm-dialog') ? this.$el.closest('.con-vm-dialog') : this.$el.closest('.con-vm-dropdown--menu')
      parentNode ? utils.insertParent(this.$refs.vmSelectOptions, parentNode) : utils.insertBody(this.$refs.vmSelectOptions)
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
    addMultiple(value){
      let currentValues = this.value ? this.value : [];
      if(currentValues.includes(value)){
        currentValues.splice(currentValues.indexOf(value),1)
        this.$emit('input', currentValues);
        this.changeValue()
        if(this.autocomplete) {
          this.$refs.inputselect.focus()
        }
      } else {
        if(this.autocomplete){
          currentValues.push(value)
          this.$emit('input', currentValues);
          this.filterItems('')
          this.changeValue()
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus()
        } else {
          currentValues.push(value)
          this.$emit('input', currentValues);
          this.changeValue()
        }
      }

    },
    filterItems(value){
      this.inputText = value
      if(value){
        this.filterx = true
      } else {
        this.filterx = false
      }
      let items = this.$children

      items.forEach((item)=>{
        if(item.$children.length > 0) {
          items = [...items,...item.$children]
        }
      })

      items.map((item)=>{

        if (!('text' in item)) return

        let text = item.text

        if(this.multiple){
          let valuesx = value.split(',')
          valuesx.forEach((value_multi)=>{
            if(text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1){
              item.visible = false
            } else {
              item.visible = true
            }
          })

        } else {
          if(text.toUpperCase().indexOf(value.toUpperCase()) == -1){
            item.visible = false
          } else {
            item.visible = true
          }
        }

      })

      let lengthx = items.filter((item)=>{
        return item.visible
      })

      if(lengthx.length == 0){
        this.clear = true
      } else {
        this.clear = false
      }

      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })
    },
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
      let inputx = this.$refs.inputselect
      setTimeout( ()=> {
        document.addEventListener('click',this.clickBlur)
      }, 100);
      if(this.autocomplete && this.multiple){
        setTimeout( ()=> {
          if(inputx.value){
            this.$refs.inputselect.value = inputx.value += ','
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);

      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select()
      }

      if (!this.autocomplete) {
        if(this.multiple?this.value.length == 0:!this.value || this.multiple){
          setTimeout( () => {
            const el = this.$children[0].$el.querySelector('.vm-select--item')
            if (el) el.focus()
          }, 50);
        }
      }
      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })

    },
    clickBlur(event){
      let closestx = event.target.closest('.vm-select--options')
      if(!closestx){
        this.closeOptions()
        if(this.autocomplete){
          this.filterItems('')
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
      let parentNode = this.$el.closest('.con-vm-dialog')
      let elx = this.$refs.inputselect
      let content = this.$refs.vmSelectOptions
      let conditional = this.autocomplete
      let topx = 0
      let leftx = 0
      let widthx = 0
      let scrollTopx = parentNode ? 0 : window.pageYOffset || document.documentElement.scrollTop
      if (!elx) return
      if(elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = this.$el.closest('.con-vm-dropdown--menu') ? elx.getBoundingClientRect().top - this.$el.closest('.con-vm-dropdown--menu').getBoundingClientRect().top : (elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx - content.scrollHeight
        if(conditional){
          topx = topx - elx.clientHeight - 2
        }
      } else {
        topx = this.$el.closest('.con-vm-dropdown--menu') ? elx.getBoundingClientRect().top - this.$el.closest('.con-vm-dropdown--menu').getBoundingClientRect().top :  (elx.getBoundingClientRect().top) + scrollTopx
        if(conditional){
          topx = topx + elx.clientHeight + 5
        }
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
    },
    createAction: function(event) {
      this.closeOptions()
      this.$emit('create-object', event);
    }
  }
}
</script>
