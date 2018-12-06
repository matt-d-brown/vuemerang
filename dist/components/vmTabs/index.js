import vmComponent from './vmTabs'
import vmComponent2 from './vmTab'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
}
