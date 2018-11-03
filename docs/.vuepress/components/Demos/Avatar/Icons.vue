<template lang="html">
  <div class="con-icons-avatar">
    <vm-avatar />
    <vm-avatar color="primary" icon="date_range" />
    <vm-avatar color="success" icon="whatshot" />
    <vm-avatar color="danger" icon="photo_camera" />
    <vm-avatar color="warning" icon="filter_vintage" />
    <vm-avatar color="dark" icon="watch" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .con-icons-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
