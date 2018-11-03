import vmComponent from './vmTable'
import vmComponent2 from './vmTh'
import vmComponent3 from './vmTr'
import vmComponent4 from './vmTd'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
  Vue.component(vmComponent4.name, vmComponent4)
}
