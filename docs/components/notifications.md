---
API:
 - name: $vm.notify
   type: function
   parameters: (title,text,color,position,icon,click,fixed)
   description: Function that makes the notification appear.
   default: null
 - name: title
   type: string
   parameters:
   description: Title of the notification.
   default: null
 - name: time
   type: Number
   parameters:
   description: Waiting time for notification to disappear.
   default: 2s
 - name: text
   type: string
   parameters:
   description: Notification text.
   default: null
 - name: color
   type: string
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Background color of the notification.
   default: null
 - name: position
   type: string
   parameters: bottom-right, top-right, top-left, bottom-left, bottom-center, top-center
   description: Position in which the notification appears.
   default: null
 - name: icon
   type: string
   parameters: Material Icon
   description: Notification Icon.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: click
   type: Function
   parameters: function(){ ... }, ()=>{ ... }
   description: Function executed by clicking on the notification
   default: null
 - name: fixed
   type: Boolean
   parameters: true, false
   description: Removes the automatic elimination of the notification
   default: null
---

# Notifications

<box header>

  Nice, simple, and interactive notifications.

</box>

<!-- defaults notifications -->
<box>

## Notifications Defaults

To add a notification we have the global function `$vm.notify`. The first parameter is a `json` with all the necessary attributes, or if we only want the standard notification we can only add a string with the text of the notification.

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Defaults/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-notifications">
    <vm-button @click="$vm.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" color="primary" type="border">Notification white</vm-button>
    <vm-button @click="$vm.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" color="primary" type="flat">Notification Primary</vm-button>
    <vm-button @click="$vm.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" color="success" type="flat">Notification Success</vm-button>
    <vm-button @click="$vm.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" color="danger" type="flat">Notification Danger</vm-button>
    <vm-button @click="$vm.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" color="warning" type="flat">Notification Warning</vm-button>
    <vm-button @click="$vm.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" color="dark" type="flat">Notification Dark</vm-button>
    <vm-button @click="random()" color="success" type="gradient">Notification Random Color</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    random(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vm.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
      })

    },
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Positions

We can change the place where the notification appears with the property `position`. A practical example would be: `position: 'top-right'`. The supported values are:

 - `top-right`
 - `top-left`
 - `bottom-left`
 - `bottom-center`
 - `top-center`

 :::warning
  The default notifications appear `bottom-right`, it is not necessary to add the position property if it is the desired position.
 :::

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Position/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-notifications-position">
    <vm-button @click="$vm.notify({title:'Position Default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" color="primary" type="flat">Position Default</vm-button>
    <vm-button @click="$vm.notify({title:'Position top-right',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',position:'top-right'})" color="success" type="flat">Position Top Right</vm-button>
    <vm-button @click="$vm.notify({title:'Position top-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',position:'top-left'})" color="danger" type="flat">Position Top Left</vm-button>
    <vm-button @click="$vm.notify({title:'Position bottom-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',position:'bottom-left'})" color="warning" type="flat">Position Bottom Left</vm-button>
    <vm-button @click="$vm.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',position:'bottom-center'})" color="dark" type="flat"> Position Bottom Center</vm-button>
    <vm-button @click="randomCenter()" color="success" type="gradient">Position Top Center Random Color</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
   randomCenter(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
      this.$vm.notify({title:'Position top-center',text:'Lorem ipsum dolor sit amet, consectetur',color:color,position:'top-center'})
    }
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Icons

Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the `icon` property. A practical example would be: `icon: 'chat'`.
::: tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::
<vuecode md>
<div slot="demo">

  <Demos-Notifications-Icons/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" color="primary" type="flat">Icon Mail</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" color="success" type="flat">Icon check_box</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" color="danger" type="flat">Icon favorite</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" color="warning" type="flat">Icon error</vm-button>
    <vm-button @click="$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" color="dark" type="flat">Icon chat</vm-button>
    <vm-button @click="randomIcon()" color="success" type="gradient">Icon Random Color</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    randomIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vm.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    }
  }
}
</script>
```

</div>
</vuecode>

</box>



</vuecode>

</box>

<box>

## Fixed and function click

Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: `click:()=>{ ... }`

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Click/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="myFunction()" type="flat">Run Example</vm-button>
  </div>
</template>

<script>
export default {
  methods:{
    myFunction(){
      this.$vm.notify({
        title:'Function click',
        text:'Click on me',
        color:'primary',
        fixed:true,
        click:()=>{
          // Secondary function
          this.$vm.notify({
            title:'Secondary function',
            text:'Executed the function when clicking',
            color:'success',
            icon:'check_box'
          })
        },
      })
    },
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Time

You can change the total time that the notification stays on the screen with the `time` property. Example: `time: 4000`.

::: tip
By default the notifications have a time of **2000** (2s)
:::

<vuecode md center>
<div slot="demo">
  <vm-button @click="$vm.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" color="primary" type="flat">Time default</vm-button>
  <vm-button @click="$vm.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" color="primary" type="flat">Time 4s (4000)</vm-button>
  <vm-button @click="$vm.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" color="primary" type="flat">Time 8s (8000)</vm-button>
</div>
<div slot="code">

```html
<vm-button @click="$vm.notify({
  title:'Time default',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" color="primary" type="flat">Time default</vm-button>

<vm-button @click="$vm.notify({
  time:4000,
  title:'Time 4s (4000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" color="primary" type="flat">Time 4s (4000)</vm-button>

<vm-button @click="$vm.notify({
  time:8000,
  title:'Time 8s (8000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" color="primary" type="flat">Time 8s (8000)</vm-button>
```

</div>
</vuecode>

</box>
