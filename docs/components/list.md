---
API:
  - name: color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: icon
    type: String
    parameters: Material icons
    description: An icon to show
    default: null
  - name: icon-pack
    type: String
    parameters: Icon Pack Class Name
    description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
    default: material-icons
  - name: title
    type: String
    parameters:
    description: List primary text
    default: null
  - name: subtitle
    type: String
    parameters:
    description: List secondary text
    default: null
  - name: slot="avatar"
    type: Slot
    parameters: null
    description: Slot to add the avatar in the list
    default: null
contributors:
  - fergardi
---

# List

<box header>

  Lists are continuous, vertical indexes of text or images

</box>

<box>

## Basic

A basic list of items with `title` and `subtitle`.

<vuecode md>
<div slot="demo">
  <vm-list>
    <vm-list-item title="One text"></vm-list-item>
    <vm-list-item title="Another text" subtitle="A little text"></vm-list-item>
    <vm-list-item title="Some more text"></vm-list-item>
    <vm-list-item title="Even more text" subtitle="Another little text"></vm-list-item>
  </vm-list>
</div>
<div slot="code">

```html
  <vm-list>
    <vm-list-item title="One text"></vm-list-item>
    <vm-list-item title="Another text" subtitle="A little text"></vm-list-item>
    <vm-list-item title="Some more text"></vm-list-item>
    <vm-list-item title="Even more text" subtitle="Another little text"></vm-list-item>
  </vm-list>
```

</div>
</vuecode>
</box>

<box>

## Header

A `vm-list-header` separator with custom `color`.

<vuecode md>
<div slot="demo">
  <vm-list>
    <vm-list-header title="Group 1"></vm-list-header>
    <vm-list-item title="Snickerdoodle" subtitle="An excellent companion"></vm-list-item>
    <vm-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vm-list-item>
    <vm-list-header title="Group 2" color="success"></vm-list-header>
    <vm-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vm-list-item>
    <vm-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vm-list-item>
  </vm-list>
</div>
<div slot="code">

```html
  <vm-list>
    <vm-list-header title="Group 1"></vm-list-header>
    <vm-list-item title="Snickerdoodle" subtitle="An excellent companion"></vm-list-item>
    <vm-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vm-list-item>
    <vm-list-header title="Group 2" color="success"></vm-list-header>
    <vm-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vm-list-item>
    <vm-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vm-list-item>
  </vm-list>
```

</div>
</vuecode>
</box>

<box>

## Icon

The list items and the headers can have a `icon` as well.

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <vm-list>
    <vm-list-header icon="supervisor_account" title="Group 1"></vm-list-header>
    <vm-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></vm-list-item>
    <vm-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vm-list-item>
    <vm-list-header icon="how_to_reg" title="Group 2" color="success"></vm-list-header>
    <vm-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vm-list-item>
    <vm-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vm-list-item>
  </vm-list>
</div>
<div slot="code">

```html
  <vm-list>
    <vm-list-header icon="supervisor_account" title="Group 1"></vm-list-header>
    <vm-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></vm-list-item>
    <vm-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vm-list-item>
    <vm-list-header icon="how_to_reg" title="Group 2" color="success"></vm-list-header>
    <vm-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vm-list-item>
    <vm-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vm-list-item>
  </vm-list>
```

</div>
</vuecode>
</box>

<box>

## Content

You can add custom content to the item. It will be pushed to the right side.

<vuecode md>
<div slot="demo">
  <vm-list>
    <vm-list-header title="Group 1"></vm-list-header>
    <vm-list-item title="Rachel" subtitle="Last seen watching Arrested Development just now.">
      <vm-button color="danger">One action</vm-button>
    </vm-list-item>
    <vm-list-item title="Lindsay" subtitle="Last seen watching Bob's Burgers 10 hours ago.">
      <vm-checkbox color="danger"/>
    </vm-list-item>
    <vm-list-header title="Group 2" color="success"></vm-list-header>
    <vm-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
      <vm-chip color="warning">Another component</vm-chip>
    </vm-list-item>
    <vm-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
      <vm-switch color="warning"/>
    </vm-list-item>
  </vm-list>
</div>
<div slot="code">

```html
  <vm-list>
    <vm-list-header title="Group 1"></vm-list-header>
    <vm-list-item title="Snickerdoodle" subtitle="An excellent companion">
      <vm-button color="danger">One action</vm-button>
    </vm-list-item>
    <vm-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals">
      <vm-checkbox color="danger"/>
    </vm-list-item>
    <vm-list-header title="Group 2" color="success"></vm-list-header>
    <vm-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
      <vm-chip color="warning">Another component</vm-chip>
    </vm-list-item>
    <vm-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
      <vm-switch color="warning"/>
    </vm-list-item>
  </vm-list>
```

</div>
</vuecode>
</box>

<box>

## Avatar

You can implement an avatar in the list with the `slot="avatar"` by putting a [vm-avatar] component (/components/avatar.html)

<vuecode md>
<div slot="demo">
<vm-list>
  <vm-list-header title="Users" color="primary"></vm-list-header>
  <vm-list-item title="Steve Jobes" subtitle="Top Contributor">
    <template slot="avatar">
      <vm-avatar color="primary" text="Steve Jobes"/>
    </template>
  </vm-list-item>
  <vm-list-item title="Matt" subtitle="11 Points">
    <template slot="avatar">
      <vm-avatar color="primary" text="Matt"/>
    </template>
  </vm-list-item>
  <vm-list-header title="Profile photo" color="warning"></vm-list-header>
  <vm-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">
    <template slot="avatar">
      <vm-avatar color="warning" text="Xian Famous Foods"/>
    </template>
  </vm-list-item>
</vm-list>
</div>
<div slot="code">

```html
<vm-list>
  <vm-list-header title="Users" color="danger"></vm-list-header>
  <vm-list-item title="Steve Jobes" subtitle="Top Contributor">
    <template slot="avatar">
      <vm-avatar />
    </template>
  </vm-list-item>
  <vm-list-item title="Matt" subtitle="11 Points">
    <template slot="avatar">
      <vm-avatar vm-text="Vuesax"/>
    </template>
  </vm-list-item>
  <vm-list-header title="Profile photo" color="warning"></vm-list-header>
  <vm-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">
    <template slot="avatar">
      <vm-avatar vm-text="Vue"/>
    </template>
  </vm-list-item>
</vm-list>
```

</div>
</vuecode>
</box>
