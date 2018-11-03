---
API:
  - name: color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Color of the topbar
    default:
  - name: text-color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Text color items
    default:
  - name: active-text-color
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Text color items active state
    default:
  - name: index
    type: String
    parameters: primary, success, danger, warning, dark, RGB, HEX
    description: Determines the value of each item that is reflected in it when selecting v-model
    default:
contributors:
  - fergardi
---

# Navbar

<box header>

  The top app bar displays information and actions relating to the current screen.

</box>


<box>

## Default

To add a navbar we have the component `vm-navbar`, there is a series of sub components to determine internal elements `vm-navbar-title`, `vm-spacer`.

:::tip
  By default the component has a relative position, if necessary it can be changed by means of css the position as for example: `fixed`
:::

<vuecode md>
<div slot="demo">
  <Demos-Navbar-Default />
</div>
<div slot="code">

```html
<template>
  <div>
    <vm-navbar v-model="activeItem" class="nabarx">
      <vm-button type="flat" radius="50%" icon="menu"></vm-button>

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
```

</div>
</vuecode>
</box>

<box>

## Input

You may need an entry in the menu to simply use the `vm-input` component, for example if you need a search engine.

<vuecode md>
<div slot="demo">
<Demos-Navbar-Input />

</div>
<div slot="code">

```html
<template>
  <div>
    <vm-navbar v-model="activeItem" class="nabarx">
      <vm-button type="flat" radius="50%" icon="menu"></vm-button>

      <vm-navbar-title>
        Hello world
      </vm-navbar-title>

      <vm-navbar-item index="0">
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>
      <vm-spacer></vm-spacer>
      <vm-input icon="search" placeholder="Search" v-model="search"/>
    </vm-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    search: ''
  })
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Type

If you want you can change the style of the buttons and the navbar by changing the property `type`

<vuecode md>
<div slot="demo">
<Demos-Navbar-Type />

</div>
<div slot="code">

```html
<template>
  <div class="con-type-example">

    <vm-select
    class="selectExample"
      label="Figuras"
      v-model="type"
      >
      <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />
    </vm-select>

    <vm-navbar :type="type" v-model="activeItem" class="nabarx">
      <vm-button type="flat" radius="50%" icon="menu"></vm-button>

      <vm-navbar-title>
        Type {{type}}
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
    activeItem: 0,
    type: 'flat',
    types: [
      {
        value: null, text: 'Default'
      },
      {
        value: 'flat', text: 'Flat'
      },
      {
        value: 'fund', text: 'Fund'
      },
      {
        value: 'border', text: 'border'
      },
      {
        value: 'gradient', text: 'Gradient'
      },
      {
        value: 'shadow', text: 'Shadow'
      }
    ]
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the **Topbar** with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<Demos-Navbar-Colors />

</div>
<div slot="code">

```html

<template>
  <div class="centerx">
    <input class="input-color" v-model="colorx" type="color" name="" value="">
    <vm-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">

      <vm-navbar-title>
        Navbar Color
      </vm-navbar-title>

      <vm-navbar-item index="0" >
        <a href="#">Home</a>
      </vm-navbar-item>
      <vm-navbar-item index="1">
        <a href="#">News</a>
      </vm-navbar-item>
      <vm-navbar-item index="2">
        <a href="#">Update</a>
      </vm-navbar-item>

      <vm-spacer></vm-spacer>

      <vm-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" radius="50%" icon="more_horiz"></vm-button>
    </vm-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952',
    indexActive: 0
  })
}
</script>

<style lang="stylus">
.input-color
  margin-bottom 10px
  position relative
  display block
.myNavbar
  color rgb(255,255,255)
</style>

```

</div>
</vuecode>
</box>
