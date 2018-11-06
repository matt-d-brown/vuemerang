import vmComponent from './vmCollapse'
import vmComponent2 from './vmCollapseItem'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
}
