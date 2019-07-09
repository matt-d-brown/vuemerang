<template lang="html">
  <div class="centerx">
    <vm-button @click="openViewer()" color="primary" type="flat">Open Viewer</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    openViewer(){
      this.$vm.viewer({
        urlFile: 'https://cdn.dribbble.com/users/228320/screenshots/6696074/attachments/1430562/new_campaign_-_step_1-1.png'
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
