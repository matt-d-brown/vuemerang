import vmComponent from './vmOrderBy'
import vmComponent2 from './vmOrderByItem'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
}
