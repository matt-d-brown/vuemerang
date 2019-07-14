<template lang="html">

  <div id="parentx">

    <vm-button @click="toggleSidebar, notExpand = false" color="success" type="filled">Open Sidebar Reduce-expand</vm-button>
    <vm-button @click="toggleSidebar, notExpand = true" color="success" type="filled">Open Sidebar Reduce-only</vm-button>
    <vm-sidebar @closeSide="toggleSidebar" :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1"  color="success" class="sidebarx" spacer :value=active>

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
      </div>
      <vm-sidebar-group open title="Application">
        <vm-sidebar-item index="1" icon="menu" @click="reduce=!reduce">
         Toggle Sidebar
        </vm-sidebar-item>
        <vm-sidebar-item index="5" icon="verified_user">
          Configurations
        </vm-sidebar-item>
        <vm-sidebar-group title="Store">
          <vm-sidebar-item index="2.1" icon="store">
            Store
          </vm-sidebar-item>
          <vm-sidebar-item index="2.2" icon="nature_people">
            Nature
          </vm-sidebar-item>
          <vm-sidebar-item index="2.3" icon="style">
            Style
          </vm-sidebar-item>
        </vm-sidebar-group>
        <vm-sidebar-item index="2" icon="gavel">
          History
        </vm-sidebar-item>
        <vm-sidebar-item index="3" icon="https">
          Security
        </vm-sidebar-item>
        <vm-sidebar-item index="4" icon="help">
          Help
        </vm-sidebar-item>
      </vm-sidebar-group>


      <vm-divider icon="person" position="left">
        User
      </vm-divider>


      <vm-sidebar-item index="6" icon="account_box">
        Profile
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
    notExpand: false,
    reduce: true
  }),
  methods: {
    toggleSidebar (value) {
      if (value) {
        this.active = value
      } else {
        this.active = !this.active
      }
    }
  }
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
