<template lang="html">
  <div class="examplex">

    <vm-dropdown ref="dropdown" vm-custom-content vm-trigger-click vm-trigger-outside-click >
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
    <vm-select
      class="selectExample"
      label="Figuras"
      v-model="select1"
      >
      <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
    </vm-select>
        <vm-button width="100%" color="success" type="gradient" @click="hiddeDrop">Login</vm-button>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    select1:2,
    options1:[
      {text:'IT',value:0},
      {text:'Blade Runner',value:2},
      {text:'Thor Ragnarok',value:3},
    ],
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  }),
  methods: {
    hiddeDrop () {
      let [dropdownMenu] = this.$refs.dropdown.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      dropdownMenu.dropdownVisible = false
    }
  }
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
