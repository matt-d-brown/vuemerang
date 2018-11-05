---
API:
 - name: text
   type: String
   parameters: null
   description: Determine the text inside the tooltip.
   default: null
 - name: color
   type: String
   parameters: null
   description: Change the color of the tooltip.
   default: null
 - name: delay
   type: String
   parameters: null
   description: Change the time the tooltip appears.
   default: null
 - name: position
   type: String
   parameters: top, left, bottom, right
   description: Change the position where the tooltip will appear.
   default: null
 - name: title
   type: String
   parameters: null
   description: Add a title to the tooltip.
   default: null
---

# Tooltip

<box header>

  Very easy to implement and in any element of the DOM.

</box>


<box>

## Default

To add a tooltip we have the component `vm-tooltip`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-tooltip text="Tooltip Default">
       <vm-switch v-model="switch1"/>
    </vm-tooltip>
    <vm-tooltip text="Tooltip Default">
      <vm-input-number v-model="number1"/>
    </vm-tooltip>
    <vm-tooltip text="Tooltip Default">
      <vm-button color="primary" type="border">Button</vm-button>
    </vm-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      number1:10,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Position

You can change the position at which the tooltip appears with the property `position`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Position />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-tooltip text="Tooltip position Left" position="left" >
      <vm-button type="gradient">Left</vm-button>
    </vm-tooltip>
    <vm-tooltip text="Tooltip position Top" position="top" >
      <vm-button type="gradient">Top</vm-button>
    </vm-tooltip>
    <vm-tooltip text="Tooltip position Bottom" position="bottom" >
      <vm-button type="gradient">Bottom</vm-button>
    </vm-tooltip>
    <vm-tooltip text="Tooltip position Right" position="right" >
      <vm-button type="gradient">Right</vm-button>
    </vm-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Delay

You can change the delay in appearing the tooltip with the property `delay`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Delay />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
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
```

</div>
</vuecode>
</box>

<box>

## Color

To change the color of the tooltip, use the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
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
```

</div>
</vuecode>
</box>

<box>

## Title

If necessary, you can add a title to the tooltip with the property `title`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Title />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-tooltip
      title="Are you sure?"
      color="warning"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">
       <vm-button color="warning" type="flat">Title Tooltip</vm-button>
    </vm-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>
