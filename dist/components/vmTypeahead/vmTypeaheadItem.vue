<template lang="html">
  <li
    v-show="visible"
    :data-text="text"
    class="vm-component">
    <button
      ref="item"
      :disabled="disabled"
      v-bind="$attrs"
      :style="styles"
      :class="{
        'activex':getValue == value,
        'disabledx':disabledx
      }"
      class="vm-typeahead--item"
      type="button"
      name="button"
      v-on="listeners"
      @keydown.backspace.prevent="backspace"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="clickOption()">
      <i
        v-if="!$scopedSlots.html"
        class="eva eva-checkmark-outline icon-item vm-select--item-icon">
      </i>
      <span v-if="!$scopedSlots.html" v-html="getText"></span>
      <slot  v-if="$scopedSlots.html" name="html">
        <span v-html="getText"></span>
      </slot>

    </button>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmTypeaheadItem',
  inheritAttrs:false,
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    value:{
      default:null,
    },
    text:{
      default:null,
    },
    htmlText: {
      type: String
    }
  },
  data:()=>({
    hoverx:false,
    visible:true,
    getText:null,
    valueInputx:''
  }),
  computed:{
    disabledx(){
      return false
    },
    isActive(){
      return this.getValue == this.value
    },
    listeners() {
      return {
        ...this.$listeners,
        blur: (event) => {
          if(event.relatedTarget?!event.relatedTarget.closest('.vm-typeahead--options'):true) {
            this.$parent.parent.closeOptions()
          }
        },
        click: (event) => this.clickOption(event),
        mouseover: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(true)
        },
        mouseout: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(false)
        }
      }
    },
    styles(){
      return {
        background: this.isActive?_color.getColor(this.$parent.parent.color,.1):null,
        color: this.isActive?_color.getColor(this.$parent.parent.color,1):null,
        fontWeight: this.isActive?'bold':null
      }
    },
    getValue(){
      return this.$parent.parent.value
    }
  },
  watch:{
    '$parent.parent.active': function () {
      this.$nextTick(() => {
        if(this.getValue == this.value ) {
          this.$emit('update:isSelected', true)
          this.getText = this.text
          this.putValue()
        } else {
          this.$emit('update:isSelected', false)
          this.getText = this.text
          this.putValue()
        }
      })
    },
    valueInputx(){
      if(this.visible){
        let valueInputx = this.valueInputx.split(',')
        if(valueInputx[valueInputx.length-1] == ''){
          this.getText = this.text
          return
        }
        let valuex = valueInputx[valueInputx.length-1]
        var re = new RegExp(valuex,"i");
        if(this.text.toUpperCase().indexOf(valuex.toUpperCase()) == 0){
          valuex = this.MaysPrimera(valuex)
        }
        let text = this.text.replace(re,`<span class="searchx">${valuex}</span>`)
        this.getText = this.text
      } else {
        this.getText = this.text
      }
    }
  },
  created(){
    this.putValue()
    this.$nextTick(() => {
      if(this.getValue == this.value ) {
        this.$emit('update:isSelected', true)
        this.getText = this.text
        this.putValue()
      } else {
        this.$emit('update:isSelected', false)
        this.getText = this.text
        this.putValue()
      }
    })
  },
  updated(){
    this.putValue()
  },
  methods:{
    changeHover(booleanx){
      this.hoverx = booleanx
    },
    MaysPrimera(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace(){
      if(this.$parent.parent.autocomplete){
        let valueInput = this.$parent.parent.$refs.inputselect.value
        this.$parent.parent.$refs.inputselect.value = valueInput.substr(0,valueInput.length-1)
        this.$parent.parent.$refs.inputselect.focus()
      }
    },
    navigateOptions(orientation){
      let
        orientationObject = 'nextSibling',
        lengthx = 0

      function getNextLi(li,orientationObject){
        if(li && li.localName == 'li'){
          let lix = li[orientationObject]
          if(li.style){
            if(li.style.display == 'none'){
              return getNextLi(lix,orientationObject)
            } else {
              return li
            }
          } else {
            return li
          }
        } else {
          return false
        }
      }

      var children = this.$parent.parent.$children

      children.forEach((item)=>{
        if(item.$children.length > 0) {
          children = [...children,...item.$children]
        }
      })

      children = children.filter((item) => {
        return item.$children.length == 0 && item.$el.localName != 'span'
      })

      if(orientation == 'prev'){
        orientationObject = 'previousSibling'
        lengthx = children.length
      }
      let nextElement = getNextLi(this.$el[orientationObject],orientationObject)

      if(nextElement){
        nextElement.querySelector('.vm-typeahead--item').focus()
      } else {
        if (lengthx === children.length) lengthx--
        // getNextLi(children[lengthx].$el,orientationObject).querySelector('.vm-typeahead--item').focus()
      }
    },
    focusValue(index){
      if(this.value == this.$parent.parent.value){
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      } else if (index === 0) {
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      }
    },
    putValue(){
      console.log(this.value)
      console.log(this.$parent.parent.value)
      if (typeof this.value === 'object' && typeof this.value !== 'undefined') {
        if(this.$parent.parent.serializer(this.value) == this.$parent.parent.serializer(this.$parent.parent.value)){
          this.$parent.parent.valuex = this.text
        }
      } else {
        if(this.value == this.$parent.parent.value){
          this.$parent.parent.valuex = this.text
        }
      }
    },
    clickOption(){
      if(this.disabledx){
        return
      }
      let text = this.text

      this.$parent.parent.active = false
      document.removeEventListener('click',this.$parent.parent.clickBlur)
      this.$parent.parent.valuex = text
      this.$parent.parent.$emit('input',this.value)
      this.$parent.parent.changeValue()
      this.$parent.parent.$children.map((item)=>{
        item.valueInputx = ''
      })
    },

    // methods colors
    isColor(){
      return _color.isColor(this.color)
    },
  }
}
</script>
