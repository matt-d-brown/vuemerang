<template lang="html">
  <div class="examplex">

    <vm-dropdown vm-custom-content vm-trigger-click >
      <a class="a-icon" href.prevent>
        Click me open login
        <i class="eva eva-chevron-down">
        </i>
      </a>

      <vm-dropdown-menu class="loginx">
        <h3>Login</h3>
        <p>Welcome to Vuemerang, add your data to enter</p>


        <vm-input
    :valid.sync="valid.email"
    success-text="Valid mail"
    danger-text="The email does not meet the requirements"
    type="email" label-placeholder="Email" v-model="value1"/>

    <vm-input
        :valid.sync="valid.password"
        success-text="Password Valida"
        danger-text="The password must have at least 8 characters, 1 number, 1 special character"
        type="password"
        label-placeholder="Password" v-model="value2"/>

        <vm-button width="100%" color="success" type="gradient">Login</vm-button>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  })
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
.vm-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
</style>
