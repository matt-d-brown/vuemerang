---
API:
 - name: type
   type: String
   parameters: date, daterange, datetime, datetimerange, year, month
   description: Display type.
   default: date
 - name: value
   type: Date
   parameters:
   description: Date, which can be a JavaScript Date, such as new Date(), or a standard date format. Click on the right to view
   default: null
 - name: format
   type: Date
   parameters: yyyy-MM-dd yyyy-MM-dd HH:mm:ss yyyy yyyy-MM
   description: Date format of the display.
   default: null
 - name: placement
   type: String
   parameters: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end
   description: The location where the date picker appears.
   default: bottom-start
 - name: placeholder
   type: String
   parameters:
   description: Placeholder text.
   default: null
 - name: options
   type: Object
   parameters:
   description: Selector additional configuration, such as no optional date and shortcut options, the specific items are shown in the table below.
   default: null
 - name: split-panels
   type: Boolean
   parameters: true, false
   description: When turned on, the left and right panels are not linked and are only available under daterange and datetimerange.
   default: false
 - name: multiple
   type: Boolean
   parameters: true, false
   description: Once turned on, you can select multiple dates, available only under date.
   default: false
 - name: start-date
   type: Date
   parameters:
   description: Set the start date of the default display.
   default: null
 - name: show-week-numbers
   type: Boolean
   parameters: true, false
   description: When turned on, you can display the number of weeks.
   default: false
 - name: confirm
   type: Boolean
   parameters: true, false
   description: Whether to display the bottom control bar, after opening, select the date, the selector will not be actively closed, and the user can confirm it before closing.
   default: false
 - name: open
   type: Boolean
   parameters: true, false
   description: Manually control the display state of the date picker, true for display and false for collapse. With this property, the selector does not actively close. It is recommended to use slot and confirm together with related events.
   default: null
 - name: size
   type: String
   parameters:
   description: Set the size.
   default: null
 - name: disabled
   type: Boolean
   parameters: true, false
   description: Whether to disable the selector.
   default: false
 - name: clearable
   type: Boolean
   parameters: true, false
   description: Whether to display the clear button.
   default: true
 - name: readonly
   type: Boolean
   parameters: true, false
   description: Fully read-only, the selector will not pop up when it is opened, it will only take effect if the open attribute is not set.
   default: false
 - name: editable
   type: Boolean
   parameters: true, false
   description: Whether the text box can be entered, only valid when no slot is used.
   default: true
 - name: transfer
   type: Boolean
   parameters: true, false
   description: Whether to place the layer in the body, it is recommended to add this property when used in Tabs, Table with fixed, it will not be affected by the parent style, so as to achieve better results.
   default: false
 - name: element-id
   type: String
   parameters:
   description: Set the id for the form element, as described in Form Usage.
   default: null
 - name: time-picker-options
   type: Object
   parameters:
   description: You can configure the properties of TimePicker under type datetime and datetimerange , such as the interval steps::time-picker-options="{steps [1, 10, 10]}"
   default: null
---

# DatePicker **- new**

<box header>

  Select or enter a date to support the year, month, day, etc. to support the selection range.

</box>

<box>

## Default

Set the attribute type to date or daterange to display the selection day and selection range types respectively.

Setting the attribute placement changes the direction in which the selector appears, consistent with the Poptip and Tooltip configurations, and supports 12 directions, as described in the API.

<vuecode md>
<div slot="demo">
  <Demos-DatePicker-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-date-picker />
  </div>
</template>
```

</div>
</vuecode>
</box>
