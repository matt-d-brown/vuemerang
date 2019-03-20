<template>
  <transition name="fade">
    <div
      v-if="active"
      class="vm-typeahead--loading">
      <div
        :style="{
          transform:`scale(${scale})`
        }"
        :class="[`vm-typeahead--loading-${color}`, `${type}`]"
        class="vm-loading">


        <div
          v-if="type!='material'"
          :style="styleEffect1"
          class="effect-1 effects"></div>
        <div
          v-if="type!='material'"
          :style="styleEffect2"
          class="effect-2 effects"></div>
        <div
          v-if="type!='material'"
          :style="styleEffect3"
          class="effect-3 effects"></div>
        <svg
          v-if="type=='material'"
          class="spinner"
          width="50px"
          height="50px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            class="path"
            fill="none"
            stroke-width="5"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"></circle>
        </svg>

      </div>


    </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmTypeaheadLoading',
  inheritAttrs:false,
  props: {
    active: {
      default: false,
      type: Boolean
    },
    scale: {
      default: 0.4,
      type: Number
    },
    type: {
      default: 'default',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    }
  },
  computed: {
    styleEffect1(){
      let style = {
        borderLeft: `3px solid ${_color.getColor(this.color,1)}`
      }

      if(this.type == 'border'){
        style = {
          borderLeft: `1px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'point'){
        style = {
          background: _color.getColor(this.color,.4)
        }
      }

      if(this.type == 'radius'){
        style = {
          border: `3px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'corners'){
        style = {
          border: `3px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'sound'){
        style = {
          background: _color.getColor(this.color,1)
        }
      }
      return style
    },
    styleEffect2(){
      let style = {
        borderLeft: `3px solid ${_color.getColor(this.color,1)}`
      }

      if(this.type == 'border'){
        style = {
          borderLeft: `1px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'point'){
        style = {
          background: _color.getColor(this.color,.4)
        }
      }

      if(this.type == 'radius'){
        style = {
          border: `3px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'corners'){
        style = {}
      }

      if(this.type == 'sound'){
        style = {
          background: _color.getColor(this.color,1)
        }
      }

      return style
    },
    styleEffect3(){
      let style = {
        borderLeft: `3px solid ${_color.getColor(this.color,1)}`
      }

      if(this.type == 'border'){
        style = {
          borderLeft: `1px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'point'){
        style = {
          background: _color.getColor(this.color,.4)
        }
      }

      if(this.type == 'radius'){
        style = {
          border: `3px solid ${_color.getColor(this.color,1)}`
        }
      }

      if(this.type == 'corners'){
        style = {}
      }

      if(this.type == 'sound'){
        style = {
          background: _color.getColor(this.color,1)
        }
      }

      return style
    }
  }
}
</script>
