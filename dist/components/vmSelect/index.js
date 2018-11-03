import vmComponent from './vmSelect'
import vmComponent2 from './vmSelectItem'
import vmComponent3 from './vmSelectGroup'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
}
