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
      class="vm-select--label"
      for="">{{ label }}</label>
    <div class="input-select-con">
      <!-- v-model="valueFilter" -->
      <input
        ref="inputselect"
        v-bind="$attrs"
        class="input-select vm-select--input"
        type="text"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">

      <div id="div-with-loading" class="vm-typeahead--loading"></div>

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
import utils from '../../utils'
export default {
  name: "VmTypeahead",
  inheritAttrs:false,
  props:{
    value:{},
    noData:{
      default:'data no available',
      type:String
    },
    maxSelected:{
      default:null,
      type:[Number,String]
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
    }
  },
  data:()=>({
    active:false
  }),
  mounted(){
    this.$vm.loading({
      container: '#div-with-loading',
      scale: 0.4,
      type: this.loadingType
    })
  },
}
</script>
