import vmComponent from './vmDropDown'
import vmComponent2 from './vmDropDownMenu'
import vmComponent3 from './vmDropDownItem'
import vmComponent4 from './vmDropDownGroup'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
  Vue.component(vmComponent2.name, vmComponent2)
  Vue.component(vmComponent3.name, vmComponent3)
  Vue.component(vmComponent4.name, vmComponent4)
}
