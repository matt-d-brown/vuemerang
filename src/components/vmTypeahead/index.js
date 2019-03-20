import vmComponent from './vmTypeahead'
import vmComponent1 from './vmTypeaheadItem'
import vmComponent2 from './vmTypeaheadData'
import vmComponent3 from './vmTypeaheadloading'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent1.name, vmComponent1)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
}
