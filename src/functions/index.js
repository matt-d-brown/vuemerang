// Functions

import vmNotifications from './vmNotifications/index.js'
import vmLoading from './vmLoading/index.js'
import vmDialog from './vmDialog/index.js'
//theme
import vmTheme from '../utils/theme.js'


const vmFunctions = {
  vmNotifications,
  vmLoading,
  vmTheme,
  vmDialog
}

export default Vue => {
  Vue.prototype.$vm = {}
  Object.values(vmFunctions).forEach((vmFunctions) => {
    if(vmFunctions.hasOwnProperty('subName')){
      Vue.prototype.$vm[vmFunctions.name][vmFunctions.subName] = vmFunctions.vmfunction
    } else {
      Vue.prototype.$vm[vmFunctions.name] = vmFunctions.vmfunction
    }
  })

  Vue.prototype.$vm.loading.close = vmLoading.close
}
