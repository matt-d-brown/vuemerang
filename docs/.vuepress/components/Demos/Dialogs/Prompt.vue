<template lang="html">
  <div class="centerx con-exemple-prompt">
    <!-- <vm-button @click="openPrompt" color="primary" type="border">Run prompt</vm-button> -->
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vm-button @click="activePrompt = true" color="primary" type="border">Run prompt</vm-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vm-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vm-button>

     <vm-prompt
      @vm-cancel="val=''"
      @vm-accept="acceptAlert"
      @vm-close="close"
      :vm-active.sync="activePrompt">
       <div class="con-exemple-prompt">
          Enter the security code
         <vm-input placeholder="Code" vm-placeholder="Code" v-model="val"/>
       </div>
     </vm-prompt>

     <vm-prompt
      @vm-cancel="valMultipe.value1='',valMultipe.value2=''"
      @vm-accept="acceptAlert"
      @vm-close="close"
      :vm-is-valid="validName"
      :vm-active.sync="activePrompt2">
       <div class="con-exemple-prompt">
       Enter your first and last name to <b>continue</b>.
         <vm-input placeholder="Name" v-model="valMultipe.value1"/>
         <vm-input placeholder="Last Name" v-model="valMultipe.value2"/>

         <vm-alert :vm-active="!validName" color="danger" vm-icon="new_releases" >
           Fields can not be empty please enter the data
         </vm-alert>
       </div>
     </vm-prompt>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(color){
      this.$vm.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vm.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
}
</script>

<style lang="stylus">
.con-exemple-prompt
  padding 10px;
  padding-bottom 0px;
  .vm-input
    width 100%
    margin-top 10px;
</style>
