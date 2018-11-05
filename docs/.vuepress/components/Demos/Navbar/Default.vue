<template>
  <div>
    <vm-navbar v-model="activeItem" class="nabarx">
      <vm-button type="flat" icon="menu" icon-pack='material-icons'></vm-button>

      <vm-navbar-title>
        Hello world
      </vm-navbar-title>

      <vm-spacer></vm-spacer>

      <vm-navbar-item index="0">
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>
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
