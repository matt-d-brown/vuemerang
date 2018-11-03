---
API:
 - name: vm-w
   type: Number, String
   parameters: 1-12
   description: Width of the vm-row or vm-colum.
   default: 12
 - name: vm-offset
   type: Number, String
   parameters: 1-12
   description: Distance to the left of the.
   default: 0
 - name: vm-justify
   type: String
   parameters: flex-start, center, flex-end, space-around, space-between
   description: Define the alignment vertically of the elements within the vm-row or vm-col.
   default: null
 - name: vm-align
   type: String
   parameters: flex-start, center, flex-end, space-around, space-between
   description: Define the horizontal alignment of the elements within the vm-row or vm-col.
   default: null
 - name: vm-order
   type: Number
   parameters:
   description: Changes the order of the vm-col with respect to his brothers vm-col.
   default: null
 - name: vm-lg
   type: Number,String
   parameters: 1-12
   description: Is for large devices such as desktops or laptops (large).
   default: null
 - name: vm-sm
   type: Number,String
   parameters: 1-12
   description: Is for medium devices such as laptops or tablets.
   default: null
 - name: vm-xs
   type: Number,String
   parameters: 1-12
   description:	Is for small devices such as tablets (small) and phones.
   default: null
---

# Grid

<box header>

In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.

</box>

<box>

Following is a brief look at how it works:
- 1 - Establish a set of column in the horizontal space defined by row (abbreviated col)
- 2 - Your content elements should be placed directly in the col, and only col should be placed directly in row
- 3 - The column grid system is a value from 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%).
- 4 - If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement.

</box>

<box>

## Design concept

With the directive `vm-w` define the width of the column (`vm-col`) its value is **1-12** an example of sizes would be: **12 = 100%, 6 = 50%, 4 = 25%**

<vuecode md>

<div class="gridx" slot="demo">
<vm-row>
<vm-col vm-type="flex" vm-justify="center" vm-align="center" vm-w="12">

100%

</vm-col>
</vm-row>

<vm-row>
<vm-col :key="index" v-for="col,index in 2" vm-type="flex" vm-justify="center" vm-align="center" vm-w="6">

50%

</vm-col>
</vm-row>

<vm-row>
<vm-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="4">

33.3%

</vm-col>
</vm-row>

<vm-row>
<vm-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">

25%

</vm-col>
</vm-row>

<vm-row>
<vm-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

16.6%

</vm-col>
</vm-row>

<vm-row>
<vm-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="1">

8.3%

</vm-col>
</vm-row>
</div>

<div slot="code">

```html
<vm-row>
  <vm-col vm-type="flex" vm-justify="center" vm-align="center" vm-w="12">
    100%
  </vm-col>
</vm-row>

<vm-row>
  <vm-col :key="index" v-for="col,index in 2" vm-type="flex" vm-justify="center" vm-align="center" vm-w="6">
    50%
  </vm-col>
</vm-row>

<vm-row>
  <vm-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="4">
    33.3%
  </vm-col>
</vm-row>

<vm-row>
  <vm-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">
    25%
  </vm-col>
</vm-row>

<vm-row>
  <vm-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    16.6%
  </vm-col>
</vm-row>

<vm-row>
  <vm-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="1">
    8.3%
  </vm-col>
</vm-row>
```

</div>

</vuecode>

</box>
<box>

## Column offset

To give a distance with respect to the left we have the directive vm-offset that with the same measures `1-12` we add the space specified a serious example `12 = 100%`, `6 = 50%`, `4 = 25%`.


<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-w="12">
<vm-col vm-offset="5" vm-type="flex" vm-justify="center" vm-align="center" vm-w="6">

offset - 6

</vm-col>
</vm-row>

<vm-row>
<vm-col vm-offset="0" v-tooltip="'col - 2'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 2

</vm-col>
</vm-row>

<vm-row>
<vm-col vm-offset="2" v-tooltip="'col - 8'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="8">

offset - 8

</vm-col>
</vm-row>

<vm-row>
<vm-col vm-offset="10" v-tooltip="'col - 1'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="1">

offset - 7

</vm-col>
</vm-row>

<vm-row>
<vm-col vm-offset="4" v-tooltip="'col - 4'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="4">

offset - 4

</vm-col>
</vm-row>
</div>

<div slot="code">

```html
<vm-row vm-w="12">
  <vm-col vm-offset="5" vm-type="flex" vm-justify="center" vm-align="center" vm-w="6">
    offset - 6
  </vm-col>
</vm-row>

<vm-row>
  <vm-col vm-offset="0" v-tooltip="'col - 2'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 2
  </vm-col>
</vm-row>

<vm-row>
  <vm-col vm-offset="2" v-tooltip="'col - 8'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="8">
    offset - 8
  </vm-col>
</vm-row>

<vm-row>
  <vm-col vm-offset="10" v-tooltip="'col - 1'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="1">
    offset - 7
  </vm-col>
</vm-row>

<vm-row>
  <vm-col vm-offset="4" v-tooltip="'col - 4'" vm-type="flex" vm-justify="center" vm-align="center" vm-w="4">
    offset - 4
  </vm-col>
</vm-row>
```

</div>

</vuecode>

</box>

<box>

## Flex layout

If we need to align the elements horizontally, use the `vm-justify` directive that uses CSS attributes as parameters: `flex-start`, `center`, `flex-end`, `space-around`, `space-between`.

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-w="12">
<vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 6

</vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="center">
<vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 6

</vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="flex-end">
<vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 6

</vm-col>
</vm-row>


<vm-row vm-type="flex" vm-justify="space-around">
<vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 6

</vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="space-between">
<vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

offset - 6

</vm-col>
</vm-row>
</div>

<div slot="code">

```html
<vm-row vm-w="12">
  <vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 6
  </vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="center">
  <vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 6
  </vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="flex-end">
  <vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 6
  </vm-col>
</vm-row>


<vm-row vm-type="flex" vm-justify="space-around">
  <vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 6
  </vm-col>
</vm-row>

<vm-row vm-type="flex" vm-justify="space-between">
  <vm-col :key="index" v-for="col,index in 3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    offset - 6
  </vm-col>
</vm-row>
```

</div>

</vuecode>

</box>

<box>

## Flex alignment

To align the elements vertically we have the directive `vm-align` that as parameters the same known values ​​of css: `center`, `flex-end`, `flex-start`.


### Align Top

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-type="flex" vm-align="flex-start" vm-justify="center" vm-w="12">
<vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

col - 3

</vm-col>
</vm-row>
</div>

<div slot="code">

```html{2}
<vm-row
  vm-align="flex-start"
  vm-type="flex" vm-justify="center" vm-w="12">
  <vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    col - 3
  </vm-col>
</vm-row>
```

</div>

</vuecode>


### Align Center

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-type="flex" vm-align="center" vm-justify="space-around" vm-w="12">
<vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

col - 3

</vm-col>
</vm-row>
</div>

<div slot="code">

```html{2}
<vm-row
  vm-align="center"
  vm-type="flex" vm-justify="space-around" vm-w="12">
  <vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    col - 3
  </vm-col>
</vm-row>
```

</div>

</vuecode>

### Align Bottom

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-type="flex" vm-align="flex-end" vm-justify="space-between" vm-w="12">
<vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">

col - 3

</vm-col>
</vm-row>
</div>

<div slot="code">

```html{2}
<vm-row
  vm-align="flex-end"
  vm-type="flex" vm-justify="space-between" vm-w="12">
  <vm-col :key="index" v-for="col,index in 4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="2">
    col - 3
  </vm-col>
</vm-row>
```

</div>

</vuecode>

</box>

<box>

## Flex order

In some cases, we want to order the elements to our liking. To do this, use the directive `vm-order` that has a parameter you just have to pass the number in which we want to order the `vm-col` with respect to his brothers `vm-col`

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-type="flex">
<vm-col vm-order="3" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">

1 / order 3

</vm-col>
<vm-col vm-order="1" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">

2 / order 1

</vm-col>
<vm-col vm-order="4" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">

3 / order 4

</vm-col>
<vm-col vm-order="2" vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">

4 / order 2

</vm-col>
</vm-row>
</div>

<div slot="code">

```html{3,8,13,18}
<vm-row vm-type="flex">
  <vm-col
    vm-order="3"
    vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">
      1 / order 3
  </vm-col>
  <vm-col
    vm-order="1"
    vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">
      2 / order 1
  </vm-col>
  <vm-col
    vm-order="4"
    vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">
      3 / order 4
  </vm-col>
  <vm-col
    vm-order="2"
    vm-type="flex" vm-justify="center" vm-align="center" vm-w="3">
      4 / order 2
  </vm-col>
</vm-row>
```

</div>

</vuecode>
</box>

<box>

## Responsive layout

There are some measures that can only be added in a specific size of the device, the directives are:

- 1 - `vm-lg`: is for large devices such as desktops or laptops (large).
- 2 - `vm-sm`: is for medium devices such as laptops or tablets.
- 3 - `vm-xs`: is for small devices such as tablets (small) and phones.

<vuecode md>

<div class="gridx" slot="demo">
<vm-row vm-w="12">
<vm-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vm-type="flex" vm-justify="center" vm-align="center" vm-lg="2" vm-sm="4" vm-xs="12" >

vm-lg = 2

</vm-col>
<vm-col v-tooltip="'lg - 8 / sm - 4 / xs - 12'" vm-type="flex" vm-justify="center" vm-align="center" vm-lg="8" vm-sm="4" vm-xs="12">

vm-lg = 8

</vm-col>
<vm-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vm-type="flex" vm-justify="center" vm-align="center" vm-lg="2" vm-sm="4" vm-xs="12">

vm-lg = 2

</vm-col>
</vm-row>
</div>

<div slot="code">

```html
<vm-row vm-w="12">
  <vm-col vm-type="flex" vm-justify="center" vm-align="center" vm-lg="2" vm-sm="4" vm-xs="12" >
    vm-lg="2" vm-sm="4" vm-xs="12"
  </vm-col>
  <vm-col vm-type="flex" vm-justify="center" vm-align="center" vm-lg="8" vm-sm="4" vm-xs="12">
    vm-lg="8" vm-sm="4" vm-xs="12"
  </vm-col>
  <vm-col vm-type="flex" vm-justify="center" vm-align="center" vm-lg="2" vm-sm="4" vm-xs="12">
    vm-lg="2" vm-sm="4" vm-xs="12"
  </vm-col>
</vm-row>
```

</div>

</vuecode>
</box>
