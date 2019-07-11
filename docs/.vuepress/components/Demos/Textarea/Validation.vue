<template lang="html">
  <div>
    <vm-textarea
    :success="true"
    success-text="The email is valid"
    placeholder="Email Success"
    val-icon-success="checkmark-circle-outline"
    v-model="value1"/>
    <vm-textarea
    :danger="true"
    danger-text="The password does not meet the standards"
    placeholder="Password Danger"
    val-icon-danger="close"
    v-model="value2"/>
    <vm-textarea
    :warning="true"
    warning-text="The entered data could not be verified"
    placeholder="Date Warning"
    val-icon-warning="alert-triangle-outline"
    v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:''
    }
  }
}
</script>

<style lang="css" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }
</style>
