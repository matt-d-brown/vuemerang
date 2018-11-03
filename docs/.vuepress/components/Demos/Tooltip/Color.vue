<template lang="html">
  <div class="centerx examplex">
    <vm-tooltip text="Tooltip default delay">
      <vm-button type="gradient">Default Color</vm-button>
    </vm-tooltip>
    <vm-tooltip color="primary" text="Tooltip default delay">
      <vm-button type="border">Color primary</vm-button>
    </vm-tooltip>
    <vm-tooltip color="success" text="Tooltip default delay">
      <vm-button color="success" type="border">Color success</vm-button>
    </vm-tooltip>
    <vm-tooltip color="danger" text="Tooltip default delay">
      <vm-button color="danger" type="border">Color danger</vm-button>
    </vm-tooltip>
    <vm-tooltip color="warning" text="Tooltip default delay">
      <vm-button color="warning" type="border">Color warning</vm-button>
    </vm-tooltip>
    <vm-tooltip color="dark" text="Tooltip default delay">
      <vm-button color="dark" type="border">Color dark</vm-button>
    </vm-tooltip>
    <vm-tooltip color="rgb(42, 207, 133)" text="Tooltip default delay">
      <vm-button color="rgb(42, 207, 133)" type="border">Color RGB</vm-button>
    </vm-tooltip>
    <vm-tooltip color="#4a0d6b" text="Tooltip default delay">
      <vm-button color="#4a0d6b" type="border">Color HEX</vm-button>
    </vm-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
