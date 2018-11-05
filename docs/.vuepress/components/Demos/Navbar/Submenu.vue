<template>
  <div>
    <vm-navbar v-model="activeItem" class="nabarx">
      <vm-button type="flat" icon="menu"></vm-button>

      <vm-navbar-title>
        Hello world
      </vm-navbar-title>



      <vm-navbar-item index="0">
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>
      <vm-navbar-item dropdown index="2">
        <a href="#">Group items</a>

        <div slot="submenu">
          <vm-navbar-item index="2.1">
            <a href="#">Home</a>
          </vm-navbar-item>
          <vm-navbar-item index="2.2">
            <a href="#">News</a>
          </vm-navbar-item>
          <vm-navbar-item index="2.3">
            <a href="#">Update</a>
          </vm-navbar-item>
        </div>
      </vm-navbar-item>

      <vm-spacer></vm-spacer>
    </vm-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
