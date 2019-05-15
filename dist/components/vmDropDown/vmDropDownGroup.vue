<template lang="html">
  <li
    ref="group"
    :class="{'marginIcon':vmCollapse, 'no-cascading':!vmCollapse, 'group-rightx':rightx}"
    class="vm-component vm-dropdown--group"
    @click="clickGroup">
    <!-- @mouseout="toggleGroup($event)" -->
    <span
      v-if="vmCollapse"
      class="span vm-dropdown--group-label">{{ vmLabel }}</span>
    <h3 v-else>{{ vmLabel }}</h3>
    <vm-icon
      v-if="vmCollapse"
      :icon-pack="iconPack"
      :icon="vmIcon"
      class="icon-group notranslate vm-dropdown--group-icon"
    ></vm-icon>
    <!-- <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    > -->
    <!-- v-if="activeGroup||!vmCollapse" -->
    <div
      ref="ulx"
      :style="styleItems"
      :class="{'con-dropdown-group-no-cascading':!vmCollapse}"
      class="con-dropdown--group-con-ul">
      <ul class="con-dropdown--group-ul">
        <slot/>
      </ul>
    </div>
    <!-- </transition> -->
  </li>
</template>

<script>
export default {
  name:'VmDropdownGroup',
  props:{
    vmLabel:{
      default:'Options',
      type:String
    },
    vmCollapse:{
      default:false,
      type:Boolean
    },
    vmIcon: {
      default: 'keyboard_arrow_right',
      type:String
    },
    iconPack:{
      default:'eva',
      type:String
    }
  },
  data:()=>({
    activeGroup:false,
    rightx:false,
    widthx:0,
    maxHeight: '0px',
  }),
  computed:{
    styleItems() {
      return {
        maxHeight: this.vmCollapse?this.maxHeight:'auto'
      }
    }
  },
  methods:{
    clickGroup(evt) {
      if(evt.target != this.$refs.group) return
      if(!this.openHover) {
        let scrollHeight = this.$refs.ulx.scrollHeight
        if(this.maxHeight == '0px') {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = 'none'
          },300)
        } else {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = `${0}px`
          }, 50)
        }
      }
    },
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      // let h = this.$refs.ulx.scrollHeight
      // this.$refs.ulx.style.height = h + 'px'
      // el.style.opacity = 1
      // parents(this)
      // function parents(_this){
      //   if(_this.$parent.$el.className.search('vm-dropdown--group')!=-1){
      //     // this.$parent.$el
      //     let hp = _this.$parent.$refs.ulx.scrollHeight
      //     _this.$parent.$refs.ulx.style.height = hp + h + 'px'
      //     parents(_this.$parent)
      //   }
      // }
      done()
    },
    leave: function (el) {
      let __this = this
      addParents(this)
      function addParents(_this){
        if(_this.$parent.$refs.ulx){
          let hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + 'px'
          addParents(_this.$parent)
        }
      }
      if(!this.$parent.$refs.ulx){
        this.$refs.ulx.style.height = 0 + 'px'
      }
      this.$refs.ulx.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    toggleGroup(evt){
      if (evt.target == this.$refs.group) {
        this.activeGroup = !this.activeGroup
      }
    }
  },
}
</script>
