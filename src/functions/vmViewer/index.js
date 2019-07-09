import Vue from 'vue';
import utils from '../../utils'
import vmViewer from './vmViewer.vue'


const viewerConstructor = Vue.extend(vmViewer);

let instance;

export default { name:'viewer', vmfunction(parameters){

  instance = new viewerConstructor({
    data: parameters,
  });

  instance.$data.isPrompt = false

  instance.vm = instance.$mount();

  parameters.download?instance.vm.$on('download',parameters.download):null
  parameters.cancel?instance.vm.$on('cancel',parameters.cancel):null
  utils.insertBody(instance.vm.$el);

  Vue.nextTick(() => {
    instance.active = true
  });
}

}
