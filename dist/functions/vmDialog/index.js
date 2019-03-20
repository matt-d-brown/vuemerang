import Vue from 'vue';
import utils from '../../utils'
import vmDialog from './index.vue'


const dialogConstructor = Vue.extend(vmDialog);

let instance;

export default { name:'dialog', vmfunction(parameters){

  instance = new dialogConstructor({
    data: parameters,
  });

  instance.$data.isPrompt = false

  instance.vm = instance.$mount();

  parameters.accept?instance.vm.$on('accept',parameters.accept):null
  parameters.cancel?instance.vm.$on('cancel',parameters.cancel):null
  parameters.action?instance.vm.$on('action',parameters.action):null
  utils.insertBody(instance.vm.$el);

  Vue.nextTick(() => {
    instance.active = true
  });
}

}
