---
API:
 - name: color
   type: String
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Component color
   default: primary
 - name: closable
   type: Boolean
   parameters: null
   description: With closable button
   default: false
 - name: icon
   type: String
   parameters: null
   description: With custom icon
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: close-icon
   type: String
   parameters: null
   description: provides an icon for the button to close chip.
   default: clear
 - name: placeholder
   type: String
   parameters: null
   description: Placeholder text (only in vm-chips)
   default: null
 - name: remove-icon
   type: String
   parameters: null
   description: provides an icon for the button to remove chips (only in vm-chips)
   default: close

contributors:
  - fergardi
---

 # Chip

<box header>

  Chips are compact elements that represent an input, attribute, or action.

</box>

<box>

## Default

Helps you represent simple data with colorful options.

<vuecode md center>
<div slot="demo">
  <vm-chip>
    Basic Chip
  </vm-chip>
  <vm-chip>
    <vm-avatar text="LD"/>
    Avatar Text
  </vm-chip>
  <vm-chip>
    <vm-avatar />
    Avatar Icon
  </vm-chip>
  <vm-chip>
    <vm-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
    Avatar Image
  </vm-chip>
  <vm-chip closable close-icon='clear'>
    Closable chip
  </vm-chip>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-chip>
        Basic Chip
      </vm-chip>
      <vm-chip>
        <vm-avatar text="LD"/>
        Avatar Text
      </vm-chip>
      <vm-chip>
        <vm-avatar />
        Avatar Icon
      </vm-chip>
      <vm-chip>
        <vm-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
        Avatar Image
      </vm-chip>
      <vm-chip closable>
        Closable chip
      </vm-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Color

Change the background color of the chip.

<vuecode md center>
<div slot="demo">
  <vm-chip color="primary">
    Basic Chip
  </vm-chip>
  <vm-chip color="success">
    <vm-avatar text="LD"/>
    Avatar Text
  </vm-chip>
  <vm-chip color="danger">
    <vm-avatar />
    Avatar Icon
  </vm-chip>
  <vm-chip color="warning">
    <vm-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
    Avatar Image
  </vm-chip >
  <vm-chip closable color="dark">
    Closable chip
  </vm-chip>
  <vm-chip closable color="#24c1a0" close-icon="close">
    <vm-avatar src="https://randomuser.me/api/portraits/men/16.jpg"/>
    Closable chip
  </vm-chip>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
      <vm-chip color="primary">
        Basic Chip
      </vm-chip>
      <vm-chip color="success">
        <vm-avatar text="LD"/>
        Avatar Text
      </vm-chip>
      <vm-chip color="danger">
        <vm-avatar />
        Avatar Icon
      </vm-chip>
      <vm-chip color="warning">
        <vm-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
        Avatar Image
      </vm-chip >
      <vm-chip closable color="dark">
        Closable chip
      </vm-chip>
      <vm-chip closable color="#24c1a0" close-icon="close">
        <vm-avatar src="https://randomuser.me/api/portraits/men/16.jpg"/>
        Closable chip
      </vm-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Icon

Add a nice icon to the chip.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md center>
<div slot="demo">
  <vm-chip>
    <vm-avatar />
    Icon Default
  </vm-chip>
  <vm-chip color="primary">
    <vm-avatar icon="send" />
    Icon send
  </vm-chip>
  <vm-chip color="success">
    <vm-avatar icon="markunread" />
    Icon markunread
  </vm-chip>
  <vm-chip color="danger">
    <vm-avatar icon="link_off" />
    Icon link_off
  </vm-chip>
  <vm-chip color="warning">
    <vm-avatar icon="battery_alert" />
    Icon battery_alert
  </vm-chip>
  <vm-chip color="dark">
    <vm-avatar icon="edit" />
    Icon edit
  </vm-chip>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-chip>
      <vm-avatar />
      Icon Default
    </vm-chip>
    <vm-chip color="primary">
      <vm-avatar icon="send" />
      Icon send
    </vm-chip>
    <vm-chip color="success">
      <vm-avatar icon="markunread" />
      Icon markunread
    </vm-chip>
    <vm-chip color="danger">
      <vm-avatar icon="link_off" />
      Icon link_off
    </vm-chip>
    <vm-chip color="warning">
      <vm-avatar icon="battery_alert" />
      Icon battery_alert
    </vm-chip>
    <vm-chip color="dark">
      <vm-avatar icon="edit" />
      Icon edit
    </vm-chip>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Closable

For making a chip closable.

<vuecode md>
<div slot="demo">
  <Demos-Chips-Closable />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vm-button>
    <vm-chip @click="remove(chip)" v-for="chip in chips" closable>
      {{ chip }}
    </vm-chip>

  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        'Dribbble',
        'GitHub',
        'Behance',
        'Vuejs',
        'Vuesax',
      ],
    }
  },
  methods: {
    reset () {
      this.chips = [
        'Dribbble',
        'GitHub',
        'Behance',
        'Vuejs',
        'Vuesax',
      ]
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
```

</div>
</vuecode>

</box>


<box>

## Add and Remove Items

You can add and remove chips with the `vm-chips` component. For the main parameter, pass the `items` property, which is an array representing each chip.

<vuecode md>
<div slot="demo">
  <Demos-Chips-Addremove />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vm-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">
      <vm-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable>
        {{ chip }}
      </vm-chip>
    </vm-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "Vuejs",
        "Node",
        "Vuesax"
      ]
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
```

</div>
</vuecode>

</box>

<box>

## Customize Close and Clear Chips Icons

You can change the icons used for the close button and the clear button when using multiple chips with the `vm-chips` component. For the main parameter, pass the `close-icon` property, which is the close icon that appears on each chip. You can change the Clear Chips button with the `remove-icon` property.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">
  <Demos-Chips-Changecloseclearicons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vm-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" remove-icon="delete_forever">
      <vm-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable close-icon="delete">
        {{ chip }}
      </vm-chip>
    </vm-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "Vuejs",
        "Node",
        "Vuesax"
      ]
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
```

</div>
</vuecode>

</box>
