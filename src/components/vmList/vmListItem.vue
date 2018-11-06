<template lang="html">
  <div class="vm-list--item">
    <div class="vm-list--avatar">
      <slot name="avatar"/>
    </div>
    <div
      v-if="icon"
      class="vm-list--icon">
      <vm-icon
        :icon-pack="iconPack"
        :icon="icon"></vm-icon>
    </div>
    <div class="list-titles">
      <div
        v-if="title"
        class="vm-list--title">{{ title }}</div>
      <div
        v-if="subtitle"
        class="vm-list--subtitle">{{ subtitle }}</div>
    </div>
    <div class="vm-list--slot">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name:'VmListItem',
  props: {
    vmAvatar:{
      type:[Boolean,String],
      default:false,
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'eva',
    },
  }
}
</script>
