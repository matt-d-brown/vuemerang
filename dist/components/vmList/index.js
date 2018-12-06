import vmComponent from './vmList'
import vmComponent2 from './vmListItem'
import vmComponent3 from './vmListHeader'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
}
