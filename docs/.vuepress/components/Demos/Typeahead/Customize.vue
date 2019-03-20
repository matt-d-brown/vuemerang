<template lang="html">
  <div>
    <vm-typeahead 
      label="Github Users"
      placeholder="Select a User"
      v-model="selectedUser"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      >
      <template slot-scope="{data}">
        <div class="d-flex align-items-center">
         <img
           class="rounded-circle"
           :src="data.avatar_url"
           style="width: 40px; height: 40px;" />
         <span class="ml-4" v-html="data.login"></span>
         <i class="ml-auto fab fa-github-square fa-2x"></i> 
        </div>
      </template>
    </vm-typeahead>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selectedUser: {}
    }
  }
}
</script>

<style lang="stylus">
</style>
