<template lang="html">
  <div class="vm-dialog">
    <vm-typeahead 
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vm-typeahead-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vm-typeahead>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:1
    }
  },
  watch: {
    active(){
      this.$nextTick(() => {
        if(this.active){
          console.log(this.$el.closest('vm-dialog'))
          this.$parent.$el.className  === 'con-vm-dialog' ? utils.insertParent(this.$refs.vmSelectOptions, this.$parent.$el) : utils.insertBody(this.$refs.vmSelectOptions)            
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
          parent.removeChild(this.$refs.vmSelectOptions)
        }
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
