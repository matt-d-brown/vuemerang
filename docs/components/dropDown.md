---
API:
 - name: color
   type: String
   parameters: null
   description: Change the color of the dropdown.
   default: primary
 - name: vm-trigger-click
   type: Boolean
   parameters: null
   description: Determine if the dropdown opens when you click, changing the default functionality.
   default: false
 - name: divider
   type: Boolean
   parameters: null
   description: Add a top line to split a link from others.
   default: false
 - name: vm-label
   type: String
   parameters: null
   description: Title of the item group (vm-dropdown-group).
   default: Options
 - name: vm-custom-content
   type: Boolean
   parameters: null
   description: Determines whether the component will contain custom elements.
   default: false
 - name: vm-collapse
   type: Boolean
   parameters: null
   description: Determines if the group of options is closed until the user poses in the title (vm-dropdown-group).
   default: false
 - name: vm-icon
   type: String
   parameters: null
   description: Define the icon show when have a (vm-dropdown-group).
   default: chevron-down
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
---

# DropDown

<box header>

  Easy to implement options that seem only when the user needs them

</box>

<box>

## Default

To add the Dropdown we have three types of components the main `vm-dropdown` that contains the element that makes the` vm-dropdown-menu` appear and to add each item within it we have the component `vm-dropdown-item`

:::tip Links
  To add an internal link using [vue-router](https://router.vuejs.org/) you can do them simply by adding the property [to](https://router.vuejs.org/api/#to) as if it were a [vue-router](https://router.vuejs.org/) link

  In case you need an external link or normal html, simply do it with the href property

  ```html
    <!-- to: internal link -->
    <vm-dropdown-item to="/myLink">
      my Link name
    </vm-dropdown-item>

    <!-- href: external link-->
    <vm-dropdown-item href="/myLink">
      my Link name
    </vm-dropdown-item>
  ```
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <vm-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

    <vm-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item disabled>
          Option 2
        </vm-dropdown-item >
        <vm-dropdown-item disabled divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</div>
</vuecode>
</box>


<box>

## Color

You can change the color of the component with the property `color`

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <input type="color" v-model="colorx">

    <vm-dropdown :color="colorx">
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'#c80948'
  }),
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="color"]
    border: 0px;
    width: 30px;
    height: 30px;
    display: block;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</div>
</vuecode>
</box>

<box>

## Option Group

If you need to group the options you can use the subcomponent `vm-dropdown-group` which as a required parameter is `vm-label` to define the group title

:::tip
  The group can be hidden from the user and only open when it is sitting on the property with the `vm-collapse` property

  You can modify the icon with a property `vm-icon`
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Group />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">
    <vm-dropdown>
      <a class="a-icon" href.prevent>
        Dropdown Option Group
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>
        <vm-dropdown-group>
          <vm-dropdown-item>
            Option 1
          </vm-dropdown-item>
          <vm-dropdown-item>
            Option 2
          </vm-dropdown-item>

          <vm-dropdown-group>
            <vm-dropdown-item>
              sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              sub Options 2
            </vm-dropdown-item>
          </vm-dropdown-group>

        </vm-dropdown-group>
        <vm-dropdown-item divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

    <vm-dropdown  >
      <a class="a-icon" href.prevent>
        Dropdown Group Collapse
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item to="/components/">
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>

        <vm-dropdown-group vm-collapse vm-label="Group Collapse" vm-icon="add">
          <vm-dropdown-item>
            Option Collapse 1
          </vm-dropdown-item>
          <vm-dropdown-item >
           Option Collapse 2
          </vm-dropdown-item>
          <vm-dropdown-group>
            <vm-dropdown-item>
              Sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              Sub Options 2
            </vm-dropdown-item>

            <vm-dropdown-group vm-collapse>
              <vm-dropdown-item vm-label="Sub Collapse">
                Sub Collapse 1
              </vm-dropdown-item>
              <vm-dropdown-item>
                Sub Collapse 2
              </vm-dropdown-item>
            </vm-dropdown-group>

          </vm-dropdown-group>
        </vm-dropdown-group>

        <vm-dropdown-item divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>

```

</div>
</vuecode>
</box>

<box>

## Custom Content

Sometimes when we need something more personalized and not necessarily a menu for it you can add any content and have the dropdown functionality with the property `vm-custom-content`

:::tip
  For better functionality in the user's aspect when doing some interaction with the custom dropdown you can add that it is only activated and deactivated by a click event with the property `vm-trigger-click`
:::


<vuecode md>
<div slot="demo">
  <Demos-DropDown-Custom />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <vm-dropdown vm-custom-content vm-trigger-click >
      <a class="a-icon" href.prevent>
        Click me open login
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu class="loginx">
        <h3>Login</h3>
        <p>Welcome to Vuemerang, add your data to enter</p>


        <vm-input
    :valid.sync="valid.email"
    success-text="Correo Valido"
    danger-text="The email does not meet the requirements"
    type="email" label-placeholder="Email" v-model="value1"/>

    <vm-input
        :valid.sync="valid.password"
        success-text="Password Valida"
        danger-text="The password must have at least 8 characters, 1 number, 1 special character"
        type="password"
        label-placeholder="Password" v-model="value2"/>

        <vm-button width="100%" color="success" type="gradient">Login</vm-button>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  }),
  methods:{
    logx(){
      console.log("click");
    }
  }
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
.vm-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
</style>
```

</div>
</vuecode>
</box>


<box>

## Button

You can customize the component or element that initialize the dropdown in this case, it is a Button that is the most common

:::tip
  The component or element that initializes the dropdown is the one inside it with the possibility of total customization and flexibility in the required use
:::

:::tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

```html
<vm-dropdown>
  <!-- element that initializes the dropdown -->

  <vm-dropdown-menu>
    <!-- items and elements within the menu or custom dropdown -->
  </vm-dropdown-menu>
</vm-dropdown>
```

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Button />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">
    <vm-button class="btnx" type="filled">Dropdown</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" type="filled" icon="chevron-down"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>
        <vm-dropdown-group >
          <vm-dropdown-item>
            option 1
          </vm-dropdown-item>
          <vm-dropdown-item>
            option 2
          </vm-dropdown-item>

        </vm-dropdown-group>
        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>


    <vm-button class="btnx" type="success-gradient">Dropdown</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" type="success-gradient" icon="more-horizotnal"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Home
        </vm-dropdown-item>
        <vm-dropdown-item>
          Contributors
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          Logout
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>


    <vm-button class="btnx" type="danger-line-down">Icons</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" type="danger-line-down" icon="options-outline"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          <i class="eva">
            mood
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            mood_bad
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_dissatisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_satisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_very_dissatisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_very_satisfied
          </i>
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  button
    margin: 0px !important;
    &.btnx
      margin-left: 10px !important;
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
```

</div>
</vuecode>
</box>
