---
API:
 - name: vm-value
   type: String
   parameters: null
   description: Radius value.
   default: null
 - name: color
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Radio color.
   default: primary
 - name: disabled
   type: Boolean
   parameters: null
   description: Property to define if the radio is disabled.
   default: false
---

# Radio

<box header>

  Radio with a nice effect, very easy to implement.

</box>


<box>

## Default

To implement a radio button you just add the `vm-radio` component and add a `v-model`.

:::warning
The **Radio Button** is always going to replace the current value.
:::

<vuecode md>
<div slot="demo">
  <Demos-Radio-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="leftx">
    <li class="modelx">
      {{radios1}}
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="luis">Luis</vm-radio>
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="carols">Carols</vm-radio>
    </li>
    <li>
      <vm-radio v-model="radios1" vm-value="summer">Summer</vm-radio>
    </li>
    <li>
      <vm-radio disabled="true" v-model="radios1" vm-value="lyon">Lyon - disabled</vm-radio>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      radios1:'luis',
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Colors

You can change the color with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Radio-Colors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="leftx">
      <li class="modelx">
        {{radios2}}
      </li>
      <li>
        <vm-radio v-model="radios2" vm-value="primary">Primary</vm-radio>
      </li>
      <li>
        <vm-radio color="success" v-model="radios2" vm-value="Success">Success</vm-radio>
      </li>
      <li>
        <vm-radio color="danger" v-model="radios2" vm-value="Danger">Danger</vm-radio>
      </li>
      <li>
        <vm-radio color="warning" v-model="radios2" vm-value="Warning">Warning</vm-radio>
      </li>
      <li>
        <vm-radio color="dark" v-model="radios2" vm-value="Dark">Dark</vm-radio>
      </li>
      <li>
        <vm-radio color="rgb(87, 251, 187)" v-model="radios2" vm-value="RGB">RGB</vm-radio>
      </li>
      <li>
        <vm-radio color="#e48346" v-model="radios2" vm-value="HEX">HEX</vm-radio>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      radios2:'primary',
    }
  }
}
</script>
```

</div>
</vuecode>

</box>
