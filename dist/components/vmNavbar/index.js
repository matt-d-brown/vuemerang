import vmComponent from './vmNavbar'
import vmComponent2 from './vmNavItem'
import vmComponent3 from './vmNavGroup'
import vmComponent4 from './vmNavbarTitle'
import vmComponent5 from './vmNavbarItems'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
  Vue.component(vmComponent4.name, vmComponent4)
  Vue.component(vmComponent5.name, vmComponent5)
}
