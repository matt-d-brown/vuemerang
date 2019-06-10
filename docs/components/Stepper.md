---
API:
  - name: v-model
    type: bind
    parameters: Number, String
    description: Link active step index.
    default: null
  - name: value
    type: bind
    parameters: Number, String
    description: Link active step index.
    default: null
  - name: color
    type: String
    parameters: primary,success,danger,warning,dark,RGB,HEX
    description: Text color.
    default: primary
  - name: step
    type: Number, String
    parameters:
    description: Sets step to associate the content to.
    default: null
  - name: editable
    type: Boolean
    parameters: null
    description: Marks step as editable.
    default: false
  - name: complete
    type: Boolean
    parameters: null
    description: Marks step as complete.
    default: false
  - name: danger
    type: Boolean
    parameters: boolean bind
    description:  Marks step as danger.
    default: false
  - name: previus-text
    type: String
    parameters: null
    description: Add a text button previus.
    default: Previus
  - name: save-next-text
    type: String
    parameters: null
    description: Add a text button save and nextTick.
    default: Save & Next
  - name: save-text
    type: String
    parameters: null
    description: Add a text button save.
    default: Save
  - name: icon-pack
    type: String
    parameters: Icon Pack Class Name
    description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
    default: eva
  - name: complete-icon
    type: String
    parameters: Eva Icons
    description: Icon that appears in the complete state.
    default: checkmark-outline
  - name: edit-icon
    type: String
    parameters: Eva Icons
    description: Icon that appears in the edit state.
    default: edit-outline
  - name: error-icon
    type: String
    parameters: Eva Icons
    description: Icon that appears in the error state.
    default: alert-circle-outline
  - name: description-text
    type: String
    parameters: null
    description: Optional text.
    default: null
---

# Stepper **- new**

<box header>

  The component displays progress through numbered steps.

</box>

<box>

## Default
A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.

<vuecode md>
<div slot="demo">
  <Demos-Stepper-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-stepper v-model="step">
      <vm-stepper-header>
        <vm-stepper-step step="1" :complete="step > 1">
          Name of step 1
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step step="2" :complete="step > 2">
          Name of step 2
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step step="3">
          Name of step 3
        </vm-stepper-step>
      </vm-stepper-header>
      <vm-stepper-items>
        <vm-stepper-content step="1">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="2">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="3">
          <div class="card" />
        </vm-stepper-content>
      </vm-stepper-items>
    </vm-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style>
  .card {
    background: #bdbdbd;
    height: 200px;
  }
</style>
```

</div>
</vuecode>
</box>

<box>

## Editable Steps
An editable step can be selected by a user at any point and will navigate them to that step.

<vuecode md>
<div slot="demo">
  <Demos-Stepper-Editable />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-stepper v-model="step">
      <vm-stepper-header>
        <vm-stepper-step editable step="1" complete>
          Name of step 1
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step step="2" complete>
          Name of step 2
        </vm-stepper-step>
        <vm-divider/>
        <vm-stepper-step editable step="3">
          Name of step 3
        </vm-stepper-step>
      </vm-stepper-header>
      <vm-stepper-items>
        <vm-stepper-content step="1">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="2">
          <div class="card" />
        </vm-stepper-content>
        <vm-stepper-content step="3">
          <div class="card" />
        </vm-stepper-content>
      </vm-stepper-items>
    </vm-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style>
  .card {
    background: #bdbdbd;
    height: 200px;
  }
</style>
```

</div>
</vuecode>
</box>
