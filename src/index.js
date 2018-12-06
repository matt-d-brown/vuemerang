import * as vmComponents from './components'
import './styles/index.styl'
import vmFunctions from './functions'
import easing from './utils/easing.js'
import vmTheme from './utils/theme.js'
import Vuelidate from 'vuelidate'

const Vuemerang = {
  install(Vue, options) {
    Vue.use(Vuelidate)
    //change defaults colors, Not Soport SSR, else = Stylus vars
    if(options){
      if(options.hasOwnProperty('theme')){
        if(options.theme.hasOwnProperty('colors')){
          if (typeof window !== 'undefined') {
            vmTheme.vmfunction(options.theme.colors, options.server)
          }
        }
      }
    }

    Object.values(vmComponents).forEach((vmComponent) => {
      Vue.use(vmComponent)
    })

    vmFunctions(Vue)

    Vue.prototype.$vm.easing = easing
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuemerang)
}
export default Vuemerang
