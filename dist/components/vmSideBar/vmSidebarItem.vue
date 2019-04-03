<template>
  <div
    :class="{'vm-sidebar-item-active':getActive}"
    class="vm-sidebar--item"
    @click="setIndexActive">
    <router-link
      v-if="to"
      :to="to">
      <vm-icon
        :icon-pack="iconPack"
        :icon="icon">
      </vm-icon>
      <slot></slot>
    </router-link>
    <a
      v-else
      :href="href">
      <vm-icon
        :icon-pack="iconPack"
        :icon="icon">
      </vm-icon>
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name:'VmSidebarItem',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'eva',
      type: String
    },
    href: {
      default:'#',
      type: String
    },
    to: {
      default:null,
      type: [String, Object]
    },
    index: {
      default: null,
      type: [String, Number]
    },
  },
  computed:{
    getActive () {
      return this.$parent.getActive() == this.index
    }
  },
  methods:{
    setIndexActive () {
      this.$parent.setIndexActive(this.index)
      this.$emit('click')
    }
  }
}
</script>
