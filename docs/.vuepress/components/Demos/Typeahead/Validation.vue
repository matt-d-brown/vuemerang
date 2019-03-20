<template lang="html">
  <div class="vm-dialog">
    <vm-typeahead 
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select1"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      success
      success-text="This field is valid"
      >
    </vm-typeahead>
    <vm-typeahead 
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select2"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
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
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      warning
      warning-text="This field is invalid"
      >
    </vm-typeahead>
    <vm-typeahead 
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select4"
      url="https://api.github.com/search/users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      :serializerResponse="data => data.items"
      description-text="Simple info for multiple select"
      >
    </vm-typeahead>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:1,
      select2:1,
      select3:1,
      select4:1
    }
  }
}
</script>

<style lang="stylus">
</style>
