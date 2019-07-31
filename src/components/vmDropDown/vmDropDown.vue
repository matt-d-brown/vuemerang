<template lang="html">
  <!-- @contextmenu.capture.prevent -->
  <button
    ref="dropdown"
    v-bind="$attrs"
    class="vm-con-dropdown parent-dropdown"
    v-on="listeners">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "VmDropdown",
  inheritAttrs:false,
  props:{
    vmTriggerClick:{
      default:false,
      type:Boolean
    },
    vmTriggerOutsideClick:{
      default:false,
      type:Boolean
    },
    vmTriggerHiddenClick:{
      default:false,
      type:Boolean
    },
    vmTriggerContextmenu:{
      default:false,
      type:Boolean
    },
    color:{
      default:'primary',
      type:String
    },
    vmCustomContent:{
      default:false,
      type:Boolean
    },
    vmPosition:{
      default:null,
      type:String
    }
  },
  data:()=>({
    vmDropdownVisible:false,
    rightx:false
  }),
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        contextmenu: (evt) => this.vmTriggerContextmenu?this.clickToogleMenu(evt,true):{},
        click: (evt) => this.vmTriggerContextmenu?{}:this.clickToogleMenu(evt),
        mouseout: (evt) => this.toggleMenu('out',evt),
        mouseover: (evt) => this.toggleMenu('over',evt),
      }
    }
  },
  watch:{
    vmDropdownVisible(){
      this.changePositionMenu()
      if(this.vmDropdownVisible){
        this.$emit('focus')
        document.addEventListener('click', this.clickx)
      } else {
        this.$emit('blur')
      }
    }
  },
  mounted(){
    this.changeColor()
    document.addEventListener('click', this.clickx)
  },
  beforeDestroy(){
    document.removeEventListener('click', this.clickx)
  },
  methods:{
    clickx(evt) {
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      dropdownMenu.vmTriggerOutsideClick = this.vmTriggerOutsideClick
      dropdownMenu.vmCustomContent = this.vmCustomContent
      dropdownMenu.vmTriggerClick = this.vmTriggerClick
      dropdownMenu.vmPosition = this.vmPosition
      if ((this.vmTriggerClick || this.vmCustomContent) && this.vmDropdownVisible && !this.vmTriggerOutsideClick) {
        if ((evt.target !== this.$refs.dropdown &&
        evt.target.parentNode !== this.$refs.dropdown &&
        evt.target.parentNode.parentNode !== this.$refs.dropdown)) {
          if (!evt.target.closest('.vm-dropdown--menu')) {
            dropdownMenu.dropdownVisible = this.vmDropdownVisible = false
            document.removeEventListener('click', this.clickx)
          }
        }
      }
    },
    changeColor(){
      let child = this.$children
      child.forEach((item)=>{
        if(item.$vnode.tag.indexOf('dropdown')!=-1){
          item.color = this.color
        }
      })
    },
    changePositionMenu(){
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      dropdownMenu.vmPosition = this.vmPosition
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if(this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(() => {
          dropdownMenu.topx = this.vmPosition ? (this.$refs.dropdown.getBoundingClientRect().bottom - dropdownMenu.$el.clientHeight + 25) + scrollTopx : (this.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight) + scrollTopx
          // dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top - (this.vmPosition ? (dropdownMenu.$el.clientHeight - this.$refs.dropdown.clientHeight):dropdownMenu.$el.clientHeight)) + scrollTopx
          dropdownMenu.notHeight = true
        });
      } else {
        dropdownMenu.notHeight = false
        dropdownMenu.topx = this.vmPosition?(this.$refs.dropdown.getBoundingClientRect().top - 25) + scrollTopx:(this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight) + scrollTopx - 5
      }
      this.$nextTick(() => {
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        if(this.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25){
          this.rightx = true
        }
        dropdownMenu.leftx = this.vmPosition ? (this.vmPosition === 'left' ? this.$refs.dropdown.getBoundingClientRect().right - this.$refs.dropdown.clientWidth : this.$refs.dropdown.getBoundingClientRect().right + dropdownMenu.$el.clientWidth) : this.$refs.dropdown.getBoundingClientRect().left + this.$refs.dropdown.clientWidth + 10
      });
    },
    clickToogleMenu(evt){
      if(evt.type == 'contextmenu'){
        evt.preventDefault()
      }
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      dropdownMenu.vmPosition = this.vmPosition
      if(this.vmTriggerClick || this.vmTriggerContextmenu){
        if(this.vmDropdownVisible && !evt.target.closest('.vm-dropdown--menu')){
          dropdownMenu.dropdownVisible = this.vmDropdownVisible = false
        } else {
          dropdownMenu.dropdownVisible = this.vmDropdownVisible = true
          window.addEventListener('click',()=>{
            if(!evt.target.closest('.vm-con-dropdown') && !evt.target.closest('.vm-dropdown--menu')) {
              dropdownMenu.dropdownVisible = this.vmDropdownVisible = false
            }
          })
        }
      }
    },
    toggleMenu(typex, evt){
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      dropdownMenu.vmPosition = this.vmPosition
      dropdownMenu.parentNode = this.$el
      if(!this.vmTriggerClick && !this.vmTriggerContextmenu){
        if(typex == 'over'){
          dropdownMenu.dropdownVisible = this.vmDropdownVisible = true
        } else {
          if (!evt.relatedTarget.classList.contains('vm-dropdown-menu')) {
            dropdownMenu.dropdownVisible = this.vmDropdownVisible = false
          }
        }
      }
    }
  }
}
</script>
