<template lang="html">
  <div class="con-typeahead-example">
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      required
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      v-model="selectedUser"
      >
    </vm-typeahead>
    <vm-typeahead 
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      v-model="selectedUser"
      loadingType="point"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      v-model="selectedUser"
      loadingType="radius"
      >
    </vm-typeahead>
    <vm-typeahead 
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      v-model="selectedUser"
      loadingType="sound"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      v-model="selectedUser"
      loadingType="material"
      >
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

<style lang="css">
.typeaheadExample {
  margin-bottom: 10px;
}
</style>
