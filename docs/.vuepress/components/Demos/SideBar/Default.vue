<template lang="html">

  <div id="parentx">

    <vm-button @click="toggleSidebar" color="primary" type="filled">Open Sidebar</vm-button>
    <vm-sidebar @closeSide="toggleSidebar" parent="body" default-index="1"  color="primary" class="sidebarx" spacer :value=active>

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>

      <vm-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vm-sidebar-item>

      <vm-sidebar-item index="2" icon="gavel">
        History
      </vm-sidebar-item>

      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="3" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="4" icon="account_box">
        Perfile
      </vm-sidebar-item>
      <vm-sidebar-item index="5" >
        Card
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:() => ({
    active: false,
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
