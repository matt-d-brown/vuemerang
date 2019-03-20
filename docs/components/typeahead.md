---
API:
 - name: url
   type: String
   parameters: null
   description: Url from Api Endpoint
   default: null
 - name: filter
   type: Function
   parameters: function(f){ ... }, (f)=>{ ... }
   description: Function used to add some filter to url
   default: null
 - name: serializer
   type: Function
   parameters: function(d){ ... }, (d)=>{ ... }
   description: Function used to convert the entries in the data array into a text string.
   default: (d) => d.name
 - name: serializerResponse
   type: Function
   parameters: function(r){ ... }, (r)=>{ ... }
   description: Function used to convert the response a data array
   default: (r) => r.data
 - name: loadingType
   type: String
   parameters: null
   description: Change the loading style
   default: default
 - name: color
   type: String
   parameters: null
   description: Change the color of the component
   default: primary
 - name: createObject
   type: Boolean
   parameters:
   description: Enables the use of creating options in the selection.
   default: false
 - name: label
   type: String
   parameters: null
   description: Label for the input element.
 - name: success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
 - name: create-text
   type: String
   parameters: null
   description: Add a text to the create button.
   default: Add
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: width
   type: String
   parameters: null
   description: Set the width of the select
   default: null
---

# Typeahead **- new**

<box header>

  Typeaheads with a clean and smooth animation, that are very easy to implement.

</box>

<box>

## Default
To add a typeahead to the application we have the component `vm-typeahead`. You can customize the loading icon by passing a name to `loading-type`.

<vuecode md>
<div slot="demo">
  <Demos-Typeahead-Default />
</div>
<div slot="code">

```html
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
```

</div>
</vuecode>
</box>

## Customize
You can use a scoped slot to define custom content for the list-item's. You can use bound variables data, which holds the data from the input array, and htmlText, which is the highlighted text that is used for the suggestion.

<vuecode md>
<div slot="demo">
  <Demos-Typeahead-Customize />
</div>
<div slot="code">

```html
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
```

</div>
</vuecode>
</box>

<box>

## Validators

You can add a state for example of in affirmative response to a validation with `success` and if it is necessary to add a description or help to the user you can do it with the property `description`

:::tip
  Each of the states you can change the text, for example in the case of `danger-text` for the state of danger.
:::

<vuecode md>
<div slot="demo">
  <Demos-Typeahead-Validation />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="vm-dialog">
    <vm-typeahead
      class="selectExample"
      placeholder="Select"
      label="Countries"
      v-model="select1"
      required
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
      required
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
      required
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
      required
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
```

</div>
</vuecode>
</box>
