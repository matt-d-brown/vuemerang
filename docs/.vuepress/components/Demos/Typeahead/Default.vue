<template lang="html">
  <div class="con-typeahead-example">
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      required
      :data.sync="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="point"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="radius"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="sound"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="material"
      >
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

<style lang="css">
.box {
  overflow: inherit !important;
}
.typeaheadExample {
  margin-bottom: 10px;
}
</style>
