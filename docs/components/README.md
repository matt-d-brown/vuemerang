---
API:
  - name: type
    type: String
    parameters: null
    description: The type of button to use
    default: filled
  - name: color
    type: String
    parameters: null
    description: Change the color of the button
    default: primary
  - name: text-color
    type: String
    parameters: null
    description: Change the font color of the button
    default: null
  - name: icon
    type: String
    parameters: Eva Icons
    description: Determine the button icon
    default: null
  - name: icon-pack
    type: String
    parameters: Icon Pack Class Name
    description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
    default: eva
  - name: icon-after
    type: Boolean
    parameters: null
    description: Determines if the icon is set after the text
    default: false
  - name: line-origin
    type: String
    parameters: null
    description: Determines the output of the line on the button (line)
    default: center
  - name: line-position
    type: String
    parameters: null
    description: Determine if the button (line) has the line up or down
    default: center
  - name: gradient-direction
    type: String
    parameters: null
    description: Determine the angle of the gradient on the button
    default: 30 deg
  - name: gradient-color-secondary
    type: String
    parameters: null
    description: Change the secondary color on the button (gradient)
    default: primary
  - name: radius
    type: Boolean
    parameters: null
    description: Change button radius to circle
    default: false
  - name: to
    type: String | Object
    parameters: null
    description: Added router push navigation to button
    default: false
  - name: href
    type: String | Object
    parameters: null
    description: Added href property to button
    default: null
  - name: target
    type: Boolean
    parameters: null
    description: Presence or absence of target property
    default: false
---

# Buttons

<box header>

  Easy-to-use button components

</box>

<box>

## Filled

To define the type of button the directive is used `type` with the value of some type of button like it can be: `filled`.

<vuecode md center>
<div slot="demo">
<vm-button type="filled">Primary</vm-button>
<vm-button type="default">Default</vm-button>
<vm-button color="success" type="filled">Success</vm-button>
<vm-button color="danger" type="filled">Danger</vm-button>
<vm-button color="warning" type="filled">Warning</vm-button>
<vm-button color="dark" type="filled">Dark</vm-button>
<vm-button color="rgb(11, 189, 135)" type="filled">RGB</vm-button>
<vm-button disabled type="filled">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="filled">Primary</vm-button>
<vm-button color="success" type="filled">Success</vm-button>
<vm-button color="danger" type="filled">Danger</vm-button>
<vm-button color="warning" type="filled">Warning</vm-button>
<vm-button color="dark" type="filled">Dark</vm-button>
<vm-button color="rgb(134, 4, 98)" type="filled">RGB</vm-button>
<vm-button disabled type="filled">Disabled</vm-button>
<vm-button color="primary" type="filled" to="/components/list.html">Router</vm-button>
```

</div>
</vuecode>
</box>

<box>

## Border

To add a type of button with edges we change the value of `border`.

<vuecode md center>
<div slot="demo">
<vm-button color="primary" type="border">Primary</vm-button>
<vm-button color="success" type="border">Success</vm-button>
<vm-button color="danger" type="border">Danger</vm-button>
<vm-button color="warning" type="border">Warning</vm-button>
<vm-button color="dark" type="border">Dark</vm-button>
<vm-button color="rgb(11, 189, 135)" type="border">RGB</vm-button>
<vm-button disabled type="border">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="border">Primary</vm-button>
<vm-button color="success" type="border">Success</vm-button>
<vm-button color="danger" type="border">Danger</vm-button>
<vm-button color="warning" type="border">Warning</vm-button>
<vm-button color="dark" type="border">Dark</vm-button>
<vm-button color="rgb(11, 189, 135)" type="border">RGB</vm-button>
<vm-button disabled type="border">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- flat -->
<box>

## Flat

To add a type of button with edges we change the value of `flat`.

<vuecode md center>
<div slot="demo">
<vm-button color="primary" type="flat">Primary</vm-button>
<vm-button color="success" type="flat">Success</vm-button>
<vm-button color="danger" type="flat">Danger</vm-button>
<vm-button color="warning" type="flat">Warning</vm-button>
<vm-button color="dark" type="flat">Dark</vm-button>
<vm-button color="rgb(11, 189, 135)" type="flat">RGB</vm-button>
<vm-button disabled type="flat">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="flat">Primary</vm-button>
<vm-button color="success" type="flat">Success</vm-button>
<vm-button color="danger" type="flat">Danger</vm-button>
<vm-button color="warning" type="flat">Warning</vm-button>
<vm-button color="dark" type="flat">Dark</vm-button>
<vm-button color="rgb(11, 189, 135)" type="flat">RGB</vm-button>
<vm-button disabled type="flat">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- Line Down -->
<box>

## Line Down

To add a type of button with edges we change the value of `type` by: `line`.

:::tip
  you can change the position of the line up with the property `line-position="top"`. You can also change the way the line appears on mouse hover with the property `line-origin` using the allowed values:

  - left
  - center (default)
  - right
:::

<vuecode md center>
<div slot="demo">
<vm-button type="line">Primary</vm-button>
<vm-button line-origin="left" color="success" type="line">Success</vm-button>
<vm-button  color="danger" type="line">Danger</vm-button>
<vm-button line-position="top" line-origin="left" color="warning" type="line">Warning</vm-button>
<vm-button line-position="top" line-origin="right" color="dark" type="line">Dark</vm-button>
<vm-button disabled type="line">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button type="line">Primary</vm-button>
<vm-button line-origin="left" color="success" type="line">Success</vm-button>
<vm-button  color="danger" type="line">Danger</vm-button>
<vm-button line-position="top" line-origin="left" color="warning" type="line">Warning</vm-button>
<vm-button line-position="top" line-origin="right" color="dark" type="line">Dark</vm-button>
<vm-button disabled type="line">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- Gradient -->
<box>

## Gradient

To add a type of button with edges we change the value of `type` by: `gradient`

<vuecode md center>
<div slot="demo">

<vm-button type="gradient">primary</vm-button>
<vm-button color="success" type="gradient">success</vm-button>
<vm-button color="danger" type="gradient">danger</vm-button>
<vm-button color="warning" type="gradient">warning</vm-button>
<vm-button color="dark" type="gradient">dark</vm-button>
<vm-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">dark</vm-button>
<vm-button disabled type="gradient">Disabled</vm-button>
</div>

<div slot="code">

```html

<vm-button type="gradient">primary</vm-button>
<vm-button color="success" type="gradient">success</vm-button>
<vm-button color="danger" type="gradient">danger</vm-button>
<vm-button color="warning" type="gradient">warning</vm-button>
<vm-button color="dark" type="gradient">dark</vm-button>
<vm-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">dark</vm-button>
<vm-button disabled type="gradient">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- Relief -->
<box>

## Relief

To add a type of button with edges we change the value of `type` by: `relief`

<vuecode md center>
<div slot="demo">
<vm-button type="relief">Primary</vm-button>

<vm-button color="success" type="relief">Success</vm-button>
<vm-button color="danger" type="relief">Danger</vm-button>
<vm-button color="warning" type="relief">warning</vm-button>
<vm-button color="dark" type="relief">dark</vm-button>
<vm-button color="rgb(187, 138, 200)" type="relief">Color</vm-button>
<vm-button disabled type="relief">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button type="relief">Primary</vm-button>
<vm-button color="success" type="relief">Success</vm-button>
<vm-button color="danger" type="relief">Danger</vm-button>
<vm-button color="warning" type="relief">warning</vm-button>
<vm-button color="dark" type="relief">dark</vm-button>
<vm-button color="rgb(187, 138, 200)" type="relief">Color</vm-button>
<vm-button disabled type="relief">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- Color -->
<box>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `color` giving it as a value the color.

:::tip
If you need a gradient type button, to assign the color you have to use the property `gradient-color-secondary`
:::

<vuecode md center>
<div slot="demo">

  <Demos-Color/>

</div>

<div slot="code">

```html
<template lang="html">
  <div class="">
    <input type="color" v-model="colorx" name="" value="">
    <input type="color" v-model="colorx2" name="" value="">
    <vm-button :color="colorx" type="filled">Color</vm-button>
    <vm-button :color="colorx" type="border">Color</vm-button>
    <vm-button :color="colorx" type="flat">Color</vm-button>
    <vm-button :color="colorx" type="line">Color</vm-button>
    <vm-button :color="colorx" :gradient-color-secondary="colorx2" type="gradient">Color</vm-button>
    <vm-button :color="colorx"  type="relief">Color</vm-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#c72a75',
      colorx2:'#5252e8'
    }
  },
}
</script>
```

</div>
</vuecode>
</box>

<!-- textColor -->
<box>

## Text Color

You can change the font color of buttons, need only set the prop `text-color` with your color.

<vuecode md center>
<div slot="demo">
  <vm-button>Primary</vm-button>
  <vm-button color="success" text-color="rgb(10, 20, 30)">Success</vm-button>
  <vm-button color="danger" text-color="#aaffaa">Danger</vm-button>
  <vm-button color="warning" text-color="primary">warning</vm-button>
  <vm-button color="dark" text-color="rgb(255, 255, 255)">dark</vm-button>
  <vm-button color="rgb(187, 138, 200)" text-color="warning)">Color</vm-button>
  <vm-button disabled text-color="rgb(0, 0, 0)">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button>Primary</vm-button>
<vm-button color="success" text-color="rgb(10, 20, 30)">Success</vm-button>
<vm-button color="danger" text-color="#aaff00">Danger</vm-button>
<vm-button color="warning" text-color="primary">warning</vm-button>
<vm-button color="dark" text-color="rgb(10, 20, 30)">dark</vm-button>
<vm-button color="rgb(187, 138, 200)" text-color="warning)">Color</vm-button>
<vm-button disabled text-color="rgb(0, 0, 0)">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<!-- Icon -->
<box>

## Icon

You can add an icon to the button with the property `icon`

::: tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

:::tip
  You can change the position of the icon so that it is after the text with the property `icon-after`
:::

<vuecode md center>
<div slot="demo">
<vm-button color="primary" type="border" icon="home-outline">Home</vm-button>
<vm-button color="warning" type="filled" icon="star">Star</vm-button>
<vm-button color="success" type="flat" icon="checkmark">Done</vm-button>
<vm-button icon-after color="dark" type="line" icon="menu">menu</vm-button>
<vm-button icon-after color="danger" type="gradient" icon="heart-outline">favorite</vm-button>
<vm-button disabled color="primary" type="border" icon="home-outline">Disabled</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="border" icon="home">Home</vm-button>
<vm-button color="warning" type="filled" icon="star">Star</vm-button>
<vm-button color="success" type="flat" icon="done">Done</vm-button>
<vm-button color="dark" type="line" icon="menu">menu</vm-button>
<vm-button color="danger" type="gradient" icon="favorite">favorite</vm-button>
<vm-button disabled color="primary" type="border" icon="home">Disabled</vm-button>
```

</div>
</vuecode>
</box>

<box>

## Icon only

You can have a button with only the icon you want with the property `icon` and not add any internal value to the button

:::tip
  you can use the `radius` property to determine the border-radius of the button, there are many cases in which we need it to be round for example.
:::

<vuecode md center>
<div slot="demo">
<vm-button color="primary" type="border" icon="search"></vm-button>
<vm-button color="warning" type="filled" icon="globe-2-outline"></vm-button>
<vm-button color="success" type="flat" icon="video-outline"></vm-button>
<vm-button color="dark" type="line" icon="calendar-outline"></vm-button>
<vm-button color="danger" type="gradient" icon="person-add-outline"></vm-button>
<vm-button disabled color="primary" type="border" icon="search"></vm-button>
<br>
<br>
<vm-button radius color="primary" type="border" icon="search"></vm-button>
<vm-button radius color="warning" type="filled" icon="globe-2-outline"></vm-button>
<vm-button radius color="success" type="flat" icon="video-outline"></vm-button>
<vm-button radius color="dark" type="line" icon="calendar-outline"></vm-button>
<vm-button radius color="danger" type="gradient" icon="person-add-outline"></vm-button>
<vm-button disabled radius color="primary" type="border" icon="search"></vm-button>
</div>
<div slot="code">

```html
<vm-button color="primary" type="border" icon="search"></vm-button>
<vm-button color="warning" type="filled" icon="globe-2-outline"></vm-button>
<vm-button color="success" type="flat" icon="video-outline"></vm-button>
<vm-button color="dark" type="line" icon="calendar-outline"></vm-button>
<vm-button color="danger" type="gradient" icon="person-add-outline"></vm-button>
<vm-button disabled color="primary" type="border" icon="search"></vm-button>
<br>
<br>
<vm-button radius color="primary" type="border" icon="search"></vm-button>
<vm-button radius color="warning" type="filled" icon="globe-2-outline"></vm-button>
<vm-button radius color="success" type="flat" icon="video-outline"></vm-button>
<vm-button radius color="dark" type="line" icon="calendar-outline"></vm-button>
<vm-button radius color="danger" type="gradient" icon="person-add-outline"></vm-button>
<vm-button disabled radius color="primary" type="border" icon="search"></vm-button>
```

</div>
</vuecode>
</box>

<box>

## Size

To define the size of button the directive is used `size`. there are three type of size: `large`, `default`, `small`.
It is not important to specify the size when the button is of type `default`

<vuecode md center>
<div slot="demo">
<vm-button size="large">Large</vm-button>
<vm-button>Default</vm-button>
<vm-button size="small">Small</vm-button>
</div>

<div slot="code">

```html
<vm-button size="large">Large</vm-button>
<vm-button>Default</vm-button>
<vm-button size="small">Small</vm-button>
```

</div>
</vuecode>
</box>

<box>

## Router

You can send a string or object to directive `to`. This directive wrap a `$router.push()` vue method,
you can use all programmatic navigation on vue router.

<vuecode md center>
<div slot="demo">
<vm-button color="primary" type="filled" to="/components/list.html">String literal</vm-button>
<vm-button color="warning" type="filled" :to="{path: '/components/list.html'}">Object Path</vm-button>
<vm-button color="success" type="filled" :to="{ name: 'user', params: { userId: 123 }}">Named Router</vm-button>
<vm-button color="dark"    type="filled" :to="{ path: 'register', query: { plan: 'private' }}">With Query</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="filled" to="/components/list.html">String literal</vm-button>
<vm-button color="warning" type="filled" :to="{ path: '/components/list.html' }">Object Path</vm-button>
<vm-button color="success" type="filled" :to="{ name: 'user', params: { userId: 123 } }">Named Router</vm-button>
<vm-button color="dark"    type="filled" :to="{ path: 'register', query: { plan: 'private' } }">With Query</vm-button>
```

</div>
</vuecode>
</box>

<box>

## Link

You can specify for `window.location.href`

:::tip
  you can use the `target` property to window.open()
:::

<vuecode md center>
<div slot="demo">
<vm-button color="primary" target="_blank" type="filled" href="https://controlla.github.io/Vuemerang/">String literal</vm-button>
<vm-button color="primary" type="filled" :href="{url: 'https://controlla.github.io/Vuemerang/'}">Object Path</vm-button>
<vm-button color="primary" type="filled" target href="https://controlla.github.io/Vuemerang/">Open Current Tab</vm-button>
</div>

<div slot="code">

```html
<vm-button color="primary" type="filled" href="https://controlla.github.io/Vuemerang/">String literal</vm-button>
<vm-button color="primary" type="filled" :href="{url: 'https://controlla.github.io/Vuemerang/'}">Object Path</vm-button>
<vm-button color="primary" type="filled" target :href="{url: 'https://controlla.github.io/Vuemerang/'}">Open Current Tab</vm-button>

```

</div>
</vuecode>
</box>
