<template lang="html">
  <div>
    <vm-typeahead
      label="Github Users"
      placeholder="Select a User"
      v-model="selectedUser"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
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
import axios from 'axios'
export default {
  data(){
    return {
      selectedUser: {},
      users: []
    }
  },
  methods: {
    query (newQuery) {
      axios.get(`https://api.github.com/search/users?${newQuery}`)
        .then((res) => {
          this.users = res.data.items
        })
        .catch(error => {
          this.users = []
        })
    }
  }
}
</script>

<style lang="stylus">
</style>
