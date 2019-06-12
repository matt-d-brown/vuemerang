import vmComponent from './vmStepper'
import vmComponent2 from './vmStepperContent'
import vmComponent3 from './vmStepperHeader'
import vmComponent4 from './vmStepperItems'
import vmComponent5 from './vmStepperStep'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
  Vue.component(vmComponent4.name, vmComponent4)
  Vue.component(vmComponent5.name, vmComponent5)
}
