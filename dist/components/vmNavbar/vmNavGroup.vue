<template>
  <li class="vm-nav-item">
    <div class="vm-nav-item-slot">
      <slot></slot>
    </div>
    <ul class="vm-nav-submenu">
      <slot name="submenu"></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name:'VmNavbarGroup',
}
</script>
