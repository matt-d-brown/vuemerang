# Vuemerang

> New Framework Components for Vue.js

  <p align="center">
  <a href="https://travis-ci.org/controlla/vuemerang">
    <img src="https://img.shields.io/travis/controlla/vuemerang.svg" alt="travis ci badge">
  </a>
  <a href="https://www.npmjs.com/package/vuemerang">
    <img src="https://img.shields.io/npm/dm/vuemerang.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuemerang">
    <img src="https://img.shields.io/npm/v/vuemerang.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vuemerang"><img src="https://img.shields.io/npm/l/vuemerang.svg" /></a>
</p>

## Introduction

[Vuemerang](https://controlla.github.io/vuemerang/) is a framework of components based on [vue.js](https://vuejs.org/), it is a framework that is designed from scratch to be incrementally adoptable.

The framework is focused on facilitating the development of applications, improving the design of the same without removing the necessary functionality. we want all the components to be independent in colors, shapes and design for a freedom that we like all front-end but without losing the speed of creation and production.

## Support the project ⭐

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us getting known and grow the community. 🙏

<img src="https://github.com/controlla/vuemerang/blob/master/public/github-vuemerang-star.gif" alt="vuemerang-star" />

## Browser Support
Recent versions of **Firefox**, **Chrome**, **Edge**, **Opera** and **Safari**. **IE10+**

## Quick-start CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/vuemerang/dist/vuemerang.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <vm-button vm-type="filled">Hello World</vm-button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuemerang/dist/vuemerang.umd.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## CDN Links

- https://cdn.jsdelivr.net/npm/vuemerang/dist/vuemerang.umd.js
- https://cdn.jsdelivr.net/npm/vuemerang/dist/vuemerang.css

# Install en Proyecto NPM
``` bash
# npm
npm install vuemerang
```

``` bash
# yarn
yarn add vuemerang
```

## Use

### All components

```javascript
import Vue from 'vue'
import Vuemerang from 'vuemerang'

import 'vuemerang/dist/vuemerang.css'
Vue.use(Vuemerang)
```

### Or use individual components:

```javascript
import Vue from 'vue'
import { vmButton, vmSelect, vmPopup } from 'vuemerang/dist/components'
import 'vuemerang/dist/vuemerang.css'

Vue.use(vmButton)
Vue.use(vmSelect)
Vue.use(vmPopup)
```

## Controlla

This library was created and is supported by [Controlla](http://www.controlla.com.mx/)

## License

[MIT](https://github.com/controlla/vuemerang/blob/master/LICENSE)
