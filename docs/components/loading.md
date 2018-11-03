---
API:
 - name: $vm.loading()
   type: Function
   parameters: Object
   description: function to open loading.
   default: null
 - name: $vm.loading.close()
   type: Function
   parameters:
   description: function to close loading.
   default: null
 - name: container
   type: HTMLElement, String
   parameters: null
   description: Container that will be loading, pass a HTMLElement or query selector
   default: null
 - name: color
   type: String
   parameters: RGB, HEX, primary, danger, success, dark, warning
   description: Color of loading.
   default: null
 - name: type
   type: String
   parameters: default, point, reduis, border, corners, sound, material
   description: Change the type of animation.
   default: default
 - name: background
   type: String
   parameters: RGB, HEX, primary, danger, success, dark, warning
   description: loading background.
   default: rgba(255, 255, 255,.8)
 - name: text
   type: String
   parameters: null
   description: Add a text on the loading .
   default: null
 - name: textAfter
   type: Boolean
   parameters: null
   description: Change the position of the text when loading .
   default: false
 - name: scale
   type: Number
   parameters: 0 - 1
   description: change the scale of the animation.
   default: 1
 - name: clickEffect
   type: Boolean
   parameters:
   description: Add an animation to the user to click while loading is active.
   default: false

---

# Loading

<box header>

  Very simple to implement and remove.

</box>

<!-- Default -->
<box>

## Default

To add a loading in any part of your application we have the global function `$vm.loading ()`, and then when you want to remove it we have `$vm.loading.close()`.

:::tip
For the examples, the request or the delay is simulated with `setTimeout`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="openLoading" type="filled" color="primary">Loading Default</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    openLoading(){
      this.$vm.loading()
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 2000);
    },
  }
}
</script>
```

</div>
</vuecode>

</box>

<!-- Default -->
<box>

## Type

You can change the type of animation with the `type` property and the animations so far are:

- point
- radius
- border
- corners
- sound
- material

<vuecode md>
<div slot="demo">
  <Demos-Loading-Type />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx example-loading">
    <div
      class="fill-row-loading">
      <div
        :class="{'activeLoading':activeLoading}"
        @click="openLoading(type)"
        v-for="type in types"
        :id="[`loading-${type}`]"
        class="vm-con-loading__container loading-example">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    types:[
      'default',
      'point',
      'radius',
      'corners',
      'border',
      'sound',
      'material',
    ],
    activeLoading:false,
  }),
  mounted(){
    this.types.forEach((type)=>{
      console.log(type)
      this.$vm.loading({
        container: `#loading-${type}`,
        type,
        text:type
      })
    })
  },
  methods:{
    openLoading(type){
      this.activeLoading = true
      this.$vm.loading({
        type:type,
      })
      setTimeout( ()=> {
        this.activeLoading = false
        this.$vm.loading.close()
      }, 3000);
    },
  }
}
</script>

<style lang="stylus">
.fill-row-loading
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  .loading-example
    width 120px;
    float left
    height 120px;
    box-shadow 0px 5px 20px 0px rgba(0,0,0,.05)
    border-radius 10px;
    margin 8px
    transition all .3s ease
    cursor pointer
    &:hover
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.05)
      transform translate(0,4px)
    h4
      z-index 40000
      position relative
      text-align center
      padding 10px

    &.activeLoading
      opacity 0 !important
      transform scale(.5)
</style>
```

</div>
</vuecode>

</box>

<box>

## Color

You can change the color of the loading with the property `color`.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorLoading" name="" value="">
    <vm-button @click="openLoadingColor" type="gradient" color="danger">Danger</vm-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorLoading:'#7d0c3f',
    }
  },
  methods:{
    openLoadingColor(){
      this.$vm.loading({color:this.colorLoading})
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 2000);
    },
  }
}
</script>
```

</div>
</vuecode>
</box>


<!-- Background -->
<box>

## Background

If you need to change the background of the loading, you can use the property `background`.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Background />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="backgroundLoading" name="" value="">
    <vm-button @click="openLoadingBackground" type="gradient" color="success">Success</vm-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'#22c16b',
    }
  },
  methods:{
    openLoadingBackground(){
      this.$vm.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vm.loading.close()
      }, 3000);
    },
  }
}
</script>
```

</div>
</vuecode>
</box>

<!-- Contained -->
<box>

## Contained

To add a loading within a container, call the `$ vm.loading ()` global function passing the `container` and the `scale` parameters. When you want to remove it we have `$ vm.loading.close ()`, passing the same `container` parameter.

:::tip
For the examples, the request or the delay is simulated with `setTimeout`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Contained />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button ref="loadableButton" id="button-with-loading" class="vm-con-loading__container" @click="openLoadingContained" type="relief" vmlor="primary">Button with Loading</vm-button>
    <vm-button @click="openLoadingInDiv" type="relief" vmlor="primary">Div with Loading</vm-button>
    <div class="fill-row">
      <div id="div-with-loading" class="vm-con-loading__container">Load Me!</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vm.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: this.refs.loadableButton,
        scale: 0.45
      })
      setTimeout( ()=> {
        this.$vm.loading.close(this.refs.loadableButton)
      }, 3000);
    },
    openLoadingInDiv(){
      this.$vm.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vm.loading.close('#div-with-loading > .con-vm-loading')
      }, 3000);
    },
  }
}
</script>

<style lang="stylus">
.fill-row
  flex: 0 0 100%;
  margin-top: 20px;
  margin-bottom: 20px;

#div-with-loading
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
</style>
```

</div>
</vuecode>

</box>
