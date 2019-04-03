<template lang="html">
  <div class="vm-dialog">
    <vm-typeahead
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select1"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      success
      success-text="This field is valid"
      >
    </vm-typeahead>
    <vm-typeahead
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select2"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      :serializerResponse="data => data.items"
      danger
      danger-text="This field is invalid"
      >
    </vm-typeahead>
    <vm-typeahead
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select3"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      warning
      warning-text="This field is invalid"
      >
    </vm-typeahead>
    <vm-typeahead
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select4"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      description-text="Simple info for multiple select"
      >
    </vm-typeahead>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      select1:1,
      select2:1,
      select3:1,
      select4:1,
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
