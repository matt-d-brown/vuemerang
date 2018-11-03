<template lang="html">
  <div class="centerx examplex">
    <vm-tooltip text="Tooltip default delay">
      <vm-button>Delay default</vm-button>
    </vm-tooltip>
    <vm-tooltip delay=".5s" text="Tooltip delay 0.5s">
      <vm-button>Delay 0.5s</vm-button>
    </vm-tooltip>
    <vm-tooltip delay="2s" text="Tooltip delay 2s">
      <vm-button>Delay 2s</vm-button>
    </vm-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
