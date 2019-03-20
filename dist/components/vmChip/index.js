import vmComponent from './vmChip'
import vmComponent2 from './vmChips'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
}
