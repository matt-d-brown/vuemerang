import vmComponent from './vmImages'
import vmComponent2 from './vmImage'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
}
