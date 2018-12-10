import vmComponent from './vmDatePicker'
import vmComponent1 from './vmDatePanel.vue'
import vmComponent2 from './vmDateRangePanel.vue'
import vmComponent3 from './vmTimePanel.vue'
import vmComponent4 from './vmTimeRangePanel.vue'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent),
  Vue.component(vmComponent1.name, vmComponent1),
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3),
  Vue.component(vmComponent4.name, vmComponent4)
}
