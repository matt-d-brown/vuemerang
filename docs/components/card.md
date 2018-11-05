---
API:
  - name: header
    type: slot
    parameters:
    description: slot header card
    default: null
  - name: footer
    type: slot
    parameters:
    description: slot footer card
    default: null
  - name: media
    type: slot
    parameters:
    description: slot image media
    default: null
  - name: extra-content
    type: slot
    parameters:
    description: slot extra contend and card
    default: null
  - name: fixed-height
    type: Boolean
    parameters:
    description: Set the card with 100% of height
    default: false
  - name: actionable
    type: Boolean
    parameters:
    description: Hover effect
    default: false
contributors:
  - fergardi
  - RodSwanston
---

# Card

<box header>

  Cards contain content and actions about a single subject.

</box>

<box>

## Default

To add a card we have the `vm-card` component, for the internal structure we use several **slots** (`header`, `footer`, `media`, ... )

<vuecode md>
<div slot="demo">
<vm-row vm-justify="center">
  <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
    <vm-card>
      <div slot="header">
        <h3>
          Hello world !
        </h3>
      </div>
      <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <div slot="footer">
        <vm-row vm-justify="flex-end">
          <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
          <vm-button color="primary" icon="turned_in_not"></vm-button>
          <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
        </vm-row>
      </div>
    </vm-card>
  </vm-col>
</vm-row>
</div>
<div slot="code">

```html
<vm-row vm-justify="center">
  <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
    <vm-card>
      <div slot="header">
        <h3>
          Hello world !
        </h3>
      </div>
      <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <div slot="footer">
        <vm-row vm-justify="flex-end">
          <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
          <vm-button color="primary" icon="turned_in_not"></vm-button>
          <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
        </vm-row>
      </div>
    </vm-card>
  </vm-col>
</vm-row>
```

</div>
</vuecode>
</box>

<box>

## Media

There are cases in which you need to add an image or video on the card so we have the `slot="media"`

<vuecode md>
<div slot="demo">
  <Demos-Card-Media />
</div>
<div slot="code">

```html
<template>
  <vm-row vm-justify="center">
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card2.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
  </vm-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.cardx
  margin 15px
</style>
```

</div>
</vuecode>
</box>

<box>

## Fixed Height

If you need to set card with the same height, send the prop `fixed-height` and cards set to 100% of height.

<vuecode md>
<div slot="demo">
  <Demos-Card-FixedHeight />
</div>
<div slot="code">

```html
<template>
  <vm-row vm-justify="center">
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card class="cardx" fixedHeight>
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card class="cardx" fixedHeight>
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card2.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
  </vm-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.cardx
  margin 15px
</style>

```

</div>
</vuecode>
</box>

<box>

## Hover

You can add hover functionality with the property `actionable`

<vuecode md>
<div slot="demo">
    <vm-row vm-justify="center">
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button color="primary" type="gradient" >View</vm-button>
            <vm-button color="danger" type="gradient">Delete</vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card2.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button color="primary" type="gradient" >View</vm-button>
            <vm-button color="danger" type="gradient" >Delete</vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
  </vm-row>
</div>
<div slot="code">

```html
<vm-row vm-justify="center">
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button color="primary" type="gradient" >View</vm-button>
            <vm-button color="danger" type="gradient">Delete</vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card2.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button color="primary" type="gradient" >View</vm-button>
            <vm-button color="danger" type="gradient" >Delete</vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
  </vm-row>
```

</div>
</vuecode>
</box>
