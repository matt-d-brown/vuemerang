<template lang="html">
  <li
    :class="{'marginIcon':vmCollapse, 'no-cascading':!vmCollapse, 'group-rightx':rightx}"
    class="vm-component vm-dropdown--group"
    @mouseout="toggleGroup($event)"
    @mouseover="toggleGroup($event)">
    <span
      v-if="vmCollapse"
      class="span vm-dropdown--group-label">{{ vmLabel }}</span>
    <h3 v-else>{{ vmLabel }}</h3>
    <vm-icon
      v-if="vmCollapse"
      class="icon-group notranslate vm-dropdown--group-icon"
      :icon-pack="iconPack"
      :icon="vmIcon"
    ></vm-icon>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="activeGroup||!vmCollapse"
        ref="ulx"
        :class="{'con-dropdown-group-no-cascading':!vmCollapse}"
        class="con-dropdown--group-con-ul">
        <ul class="con-dropdown--group-ul">
          <slot/>
        </ul>
      </div>
    </transition>
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
  }),
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.ulx.scrollHeight
      this.$refs.ulx.style.height = h + 'px'
      el.style.opacity = 1
      parents(this)
      function parents(_this){
        if(_this.$parent.$el.className.search('vm-dropdown--group')!=-1){
          // this.$parent.$el
          let hp = _this.$parent.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + h + 'px'
          parents(_this.$parent)
        }
      }

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
    toggleGroup(){
      this.activeGroup = !this.activeGroup
    }
  },
}
</script>
