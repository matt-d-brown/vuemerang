import vmComponent from './vmSidebar'
import vmComponent2 from './vmSidebarItem'
import vmComponent3 from './vmSidebarGroup'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
}
