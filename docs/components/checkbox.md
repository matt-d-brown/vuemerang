---
API:
 - name: v-model
   type: String / boolean / array
   parameters: null
   description: Link values.
   default: null
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color options for checkBox.
   default: primary
 - name: vm-value
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Value if different from a boolean.
   default: null
 - name: icon
   type: String
   parameters: Material Icons
   description: Change the checkBox icon.
   default: checked
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# CheckBox

<box header>

Aggressive and impacting effect and the most important functional

</box>

<box>

## State

To add a checkBox, we have the `vm-checkbox` component which expects a principal parameter `v-model` that would be our value.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-State />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary - active</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox2">Primary - inactive</vm-checkbox>
      </li>
      <li>
        <vm-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vm-checkbox>
      </li>
      <li>
        <vm-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,
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

You can change the color of the checkBox with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only RGB and HEX colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="success" v-model="checkBox2">Success</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="danger" v-model="checkBox3">Danger</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="warning" v-model="checkBox4">Warning</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="dark" v-model="checkBox5">Dark</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vm-checkbox>
      </li>
      <li>
        <vm-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Boolean Value

In most cases you will need a boolean data type while working with checkBoxes. For making this possible you have to link a boolean value in `v-model`.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Boolean />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">{{checkBox1}}</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox2">{{checkBox2}}</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## String Value

You can pass as a value a string by giving it as a value of the property `vm-value`.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-String />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="ul">
      <li class="modelx">
        {{checkBox1==null?'null':checkBox1}}
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="Luis Daniel" >Luis Daniel</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:null,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Array Values

You can have several checkBoxs linked to the same array only by using `v-model` with a value of **array**.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Array />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li class="modelx">
        {{checkBox1}}
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="luis">Luis</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="carols">Carols</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="summer">Summer</vm-checkbox>
      </li>
      <li>
        <vm-checkbox v-model="checkBox1" vm-value="lyon">Lyon</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:['luis']
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Array Object values

Sometimes you need to link an object as a value when selecting a checkBox for it, you only have to put it as value in `vm-value` an object either literal or linked.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Arrayobjects />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{form.regions}}
    </div>
    <vm-col v-for="(region, index) in regions" :key="index">
      <vm-checkbox v-model="form.regions" :vm-value="region" >{{ region.name }}</vm-checkbox>
    </vm-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
    regions: []
  },
  regions: [
    { id: 1, name: 'Queensland' },
    { id: 2, name: 'South Australia' },
    { id: 3, name: 'New South Wales' },
  ]
})
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Change Icon

Sometimes we want to change the internal icon inside the checkbox. To do so, we have the property `icon`

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.

:::

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vm-checkbox v-model="checkBox1">Primary</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="sms" color="success" v-model="checkBox2">SMS</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="close" color="danger" v-model="checkBox3">Cancel</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="attach_file" color="warning" v-model="checkBox4">File</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="format_bold" color="dark" v-model="checkBox5">Bold</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="location_searching" color="rgb(38, 187, 174)" v-model="checkBox6">Location</vm-checkbox>
      </li>
      <li>
        <vm-checkbox icon="camera_alt" color="#720ea8" v-model="checkBox7">Camera</vm-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
