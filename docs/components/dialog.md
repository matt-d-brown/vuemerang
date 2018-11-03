---
API:
 - name: vm-active.sync
   type: Boolean
   parameters: null
   description: Define if the dialog is active (visible).
   default: false
 - name: vm-title
   type: String
   parameters: null
   description: Main title of the dialog.
   default: Dialog
 - name: color
   type: String
   parameters: null
   description: Dialog color and accept buttons.
   default: primary
 - name: vm-accept
   type: function
   parameters: null
   description: function that is executed when the user approves the dialog.
   default: null
 - name: vm-cancel
   type: function
   parameters: null
   description: Function that executes the user cancel the dialog.
   default: null
 - name: vm-close
   type: function
   parameters: null
   description: function that is executed when the dialog as closed.
   default: null
 - name: vm-is-valid
   type: Boolean
   parameters: null
   description: Determines if it is valid to be able to accept at the prompt.
   default: null
 - name: vm-buttons-hidden
   type: Boolean
   parameters: null
   description: Determines if the component has hidden or visible buttons.
   default: false
 - name: vm-button-accept
   type: type buttons
   parameters: null
   description: Change the type of botton for the accept.
   default: false
 - name: vm-button-cancel
   type: type buttons
   parameters: null
   description: Change the type of botton for the cancel.
   default: filled
 - name: vm-accept-text
   type: String
   parameters: null
   description: Change the text of the accept button.
   default: Accept
 - name: vm-cancel-text
   type: String
   parameters: null
   description: Change the text of the cancel button.
   default: Cancel
 - name: vm-icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
#  - name: vm-close-icon
#    type: String
#    parameters: null
#    description: Determines the close icon
#    default: close

---

# Dialogs

<box header>

  Dialogs very easy to implement and practical to use in any case and need.

</box>

<box>

## Alert

To generate a dialog we have the global function `$vm.dialog` the parameters to generate the dialog are

- **title**: title of the dialogue - *String*
- **text**: internal text of the dialog - *String*
- **color**: color of the component - *Colors, RGB, HEX*
- **accept**: function that executes the user accept the dialog - *Function*
- **cancel**: function that executes the user to cancel the dialog (if it is a confirm type) - *Function*
- **type**: determines the type of dialog (alert or confirm) - *alert, confirm*
- **buttonAccept**: determines the type of accept button - *Boolean*
- **buttonCancel**: determines the type of cancel button - *Boolean*

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Alert />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="openAlert('primary')" color="primary" type="flat">Alert Primary</vm-button>
    <vm-button @click="openAlert('success')" color="success" type="flat">Alert Success</vm-button>
    <vm-button @click="openAlert('danger')" color="danger" type="flat">Alert Danger</vm-button>
    <vm-button @click="openAlert('warning')" color="warning" type="flat">Alert Warning</vm-button>
    <vm-button @click="openAlert('dark')" color="dark" type="flat">Alert Dark</vm-button>
    <vm-button @click="openAlert(null)" color="primary" type="gradient">Alert Color RGB | HEX</vm-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorAlert:'primary',
    titleAlert:'Alert',
    activeAlert:false,
    valueInput:'',
  }),
  methods:{
    openAlert(color){
      this.colorAlert = color || this.getColorRandom()
      this.$vm.dialog({
        color:this.colorAlert,
        title: `Dialog - ${this.colorAlert}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    },
    acceptAlert(){
      this.$vm.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Confirm

If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function.

:::tip
  To do some action when the user approves or confirms we have the property `accept:myFunctionAccept`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Confirm />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="openConfirm()" color="danger" type="gradient">Alert Primary</vm-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
      openConfirm(){
      this.$vm.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
      },
      acceptAlert(color){
        this.$vm.notify({
          color:'danger',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
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

## Prompt

To add a dialog of type prompt we have a global function a completely independent component `vm-prompt`. This allows more flexibility with the input and ability to add any type of input and components.

:::tip
  The properties of the component are equivalent to those of the global function only with the vm before each property something like

 - `function = color`
 - `component = vmColor`
:::

```html
  <div slot="input">
    <input v-model="val" type="text" name="" value="">
  </div>
```

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Prompt />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx con-exemple-prompt">
    <!-- <vm-button @click="openPrompt" color="primary" type="border">Run prompt</vm-button> -->
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vm-button @click="activePrompt = true" color="primary" type="border">Run prompt</vm-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vm-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vm-button>

     <vm-prompt
      @vm-cancel="val=''"
      @vm-accept="acceptAlert"
      @vm-close="close"
      :vm-active.sync="activePrompt">
       <div class="con-exemple-prompt">
          Enter the security code
         <vm-input placeholder="Code" vm-placeholder="Code" v-model="val"/>
       </div>
     </vm-prompt>

     <vm-prompt
      @vm-cancel="valMultipe.value1='',valMultipe.value2=''"
      @vm-accept="acceptAlert"
      @vm-close="close"
      :vm-is-valid="validName"
      :vm-active.sync="activePrompt2">
       <div class="con-exemple-prompt">
       Enter your first and last name to <b>continue</b>.
         <vm-input placeholder="Name" v-model="valMultipe.value1"/>
         <vm-input placeholder="Last Name" v-model="valMultipe.value2"/>

         <vm-alert :vm-active="!validName" color="danger" vm-icon="new_releases" >
           Fields can not be empty please enter the data
         </vm-alert>
       </div>
     </vm-prompt>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(color){
      this.$vm.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vm.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
}
</script>

<style lang="stylus">
.con-exemple-prompt
  padding 10px;
  padding-bottom 0px;
  .vm-input
    width 100%
    margin-top 10px;
</style>

```

</div>
</vuecode>

</box>
