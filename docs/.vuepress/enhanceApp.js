import './main.styl'
import Vuemerang from '../../src'
import Vuelidate from 'vuelidate'
import Vuecode from 'viewcode/dist/vuecode.common.js'
import 'viewcode/dist/vuecode.css'
// import 'eva-icons/style/eva-icons.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuemerang)
  Vue.use(Vuelidate)
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Demo',demo)
  Vue.component('Box',Box)


}
