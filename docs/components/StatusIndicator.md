---
API:
 - name: color
   type: String
   parameters: null
   description: Change the color of the indicator.
   default: gray
 - name: pulse
   type: Boolean
   parameters: null
   description: Enable or disable the pulse effect.
   default: false
 - name: type
   type: String
   parameters: normal, flat
   description: Change the style of the indicator.
   default: normal
---

# Status Indicator **- new**

<box header>

  A Vue component to show a status indicator as colored dots.

</box>

<box>

## Default

<vuecode md>
<div slot="demo">
  <Demos-StatusIndicator-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-status-indicator>
      Default
    </vm-status-indicator>
    <vm-status-indicator color="primary">
      Primary
    </vm-status-indicator>
    <vm-status-indicator color="secondary">
      Secondary
    </vm-status-indicator>
    <vm-status-indicator color="success">
      Success
    </vm-status-indicator>
    <vm-status-indicator color="warning">
      Warning
    </vm-status-indicator>
    <vm-status-indicator color="danger">
      Danger
    </vm-status-indicator>
    <vm-status-indicator color="#00fb9c">
      Hexadecimal
    </vm-status-indicator>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Pulse

<vuecode md>
<div slot="demo">
  <Demos-StatusIndicator-Pulse />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-status-indicator pulse>
      Default
    </vm-status-indicator>
    <vm-status-indicator pulse color="primary">
      Primary
    </vm-status-indicator>
    <vm-status-indicator pulse color="secondary">
      Secondary
    </vm-status-indicator>
    <vm-status-indicator pulse color="success">
      Success
    </vm-status-indicator>
    <vm-status-indicator pulse color="warning">
      Warning
    </vm-status-indicator>
    <vm-status-indicator pulse color="danger">
      Danger
    </vm-status-indicator>
    <vm-status-indicator pulse color="#00fb9c">
      Hexadecimal
    </vm-status-indicator>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Flat

<vuecode md>
<div slot="demo">
  <Demos-StatusIndicator-Flat />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-status-indicator type="flat">
      Default
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="primary">
      Primary
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="secondary">
      Secondary
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="success">
      Success
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="warning">
      Warning
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="danger">
      Danger
    </vm-status-indicator>
    <vm-status-indicator type="flat" color="#00fb9c">
      Hexadecimal
    </vm-status-indicator>
  </div>
</template>
```

</div>
</vuecode>
</box>
