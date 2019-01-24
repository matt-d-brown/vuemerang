---
API:
 - name: vm-tabs
   type: Component
   parameters: null
   description: Component that contains the children vm-tab.
   default: null
 - name: v-model
   type: bind
   parameters: null
   description: Link active tab index.
   default: null
 - name: value
   type: Number, String
   parameters: null
   description: Index of active tab.
   default: 0
 - name: vm-position
   type: String
   parameters: top, left, bottom, right
   description: Tabs menu position.
   default: null
 - name: color
   type: String
   parameters: RGB, HEX
   description: Color of the tabs component.
   default: null
 - name: vm-alignment
   type: String
   parameters: top (default), left, bottom, right
   description: Change the alignment of the tabs buttons.
   default: top
 - name: vm-tab
   type: Component
   parameters: null
   description: component that wraps everything inside.
   default: null
 - name: vm-label
   type: String
   parameters: null
   description: Text on the tab button.
   default: null
 - name: vm-icon
   type: String
   parameters: Same as `vm-icon` component.
   description: Add a left icon inside the tabs component.
   default: null
---

# Tabs

<box header>

  Tabs are very easy to implement

</box>


<box>

## Default

To implement a tabs, use the `vm-tabs` component. It must include `vm-tab` child components that represent each tab.

:::tip
For the title of each tab the `vm-tab` property is implemented in the` vm-tab` component.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <vm-tabs>
      <vm-tab vm-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vm-tab>
      <vm-tab vm-label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vm-tab>
      <vm-tab vm-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vm-tab>
      <vm-tab disabled vm-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vm-tab>
      <vm-tab vm-label="Lorem ipsum dolor sit amet">
        <div class="con-tab-ejemplo">
          Lorem ipsum dolor sit amet
        </div>
      </vm-tab>
    </vm-tabs>
  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

## Color

You can change the color of the component with the property `color`, the parameter allows the main colors and HEX or RGB

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-tabs :color="colorx">
      <vm-tab @click="colorx = 'success'" vm-label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'danger'" vm-label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'warning'" vm-label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vm-tab>
      <vm-tab @click="colorx = 'dark'" vm-label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vm-tab>
        <vm-tab @click="colorx = 'rgb(16, 233, 179)'" vm-label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vm-tab>
    </vm-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success'
  }),
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Alignments

Change the alignment of the buttons with the property `vm-alignments`. The allowed values ​​are:

- center
- right
- fixed

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Alignments />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vm-tabs>
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>

    <h3>
      Center
    </h3>
    <vm-tabs vm-alignment="center">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>

    <h3>
      Right
    </h3>
    <vm-tabs vm-alignment="right">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>


    <h3>
      Fixed
    </h3>
    <vm-tabs vm-alignment="fixed">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>


  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

## Position

You can change the position of the menu with the property `vm-position` that as a value you can have: `top`, `right`,`bottom`, `left`.

<vuecode md>
<div slot="demo">
  <Demos-Tabs-Position />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vm-tabs>
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>

    <h3>
      Center
    </h3>
    <vm-tabs vm-alignment="center">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>

    <h3>
      Right
    </h3>
    <vm-tabs vm-alignment="right">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>


    <h3>
      Fixed
    </h3>
    <vm-tabs vm-alignment="fixed">
      <vm-tab vm-label="Home">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Documents">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Contributors">
        <div>

        </div>
      </vm-tab>
      <vm-tab vm-label="Ecosistem">
        <div>

        </div>
      </vm-tab>
    </vm-tabs>


  </div>
</template>
```

</div>
</vuecode>

</box>

<box>

 ## Icons

 You can add a left icon inside each tab with the property `vm-icon` that has the same values as the `vm-icon` component.

 <vuecode md>
<div slot="demo">
  <Demos-Tabs-Icons />
</div>
<div slot="code">

 ```html
<template lang="html">
  <div>
    <vm-tabs :color="colorx">
      <vm-tab vm-label="Pets" vm-icon="pets" @click="colorx = '#8B0000'">
      </vm-tab>
      <vm-tab vm-label="Bank" vm-icon="account_balance" @click="colorx = '#FFA500'">
      </vm-tab>
      <vm-tab vm-label="Dashboard" vm-icon="dashboard" @click="colorx = '#551A8B'">
      </vm-tab>
      <vm-tab vm-label="Profile" vm-icon="account_circle" @click="colorx = '#0000FF'">
      </vm-tab>
    </vm-tabs>
  </div>
</template>

 <script>
export default {
  data:()=>({
    colorx: '#8B0000'
  })
}
</script>
</template>
```

 </div>
</vuecode>

 </box>
