<template lang="html">
  <div
    v-bind="$attrs"
    class="vm-component vm-Viewer"
    v-on="$listeners">
    Component vmViewer
  </div>
</template>

<script>
export default {
  name: "VmViewer",
  inheritAttrs:false,
  data:()=>({

  }),
}
</script>
