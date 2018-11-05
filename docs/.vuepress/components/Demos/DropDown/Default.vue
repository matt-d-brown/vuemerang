<template lang="html">
  <div class="examplex">

    <vm-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

    <vm-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item disabled>
          Option 2
        </vm-dropdown-item >
        <vm-dropdown-item disabled divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
