<template lang="html">
  <div class="examplex">
    <vm-button class="btnx" type="filled">Dropdown</vm-button>
    <vm-dropdown @focus="logx">
      <vm-button class="btn-drop" type="filled" icon="expand_more"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item @click="logx">
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>
        <vm-dropdown-group >
          <vm-dropdown-item @click="logx">
            option 1
          </vm-dropdown-item>
          <vm-dropdown-item>
            option 2
          </vm-dropdown-item>

          <vm-dropdown-group>
            <vm-dropdown-item @click="logx">
              sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              sub Options 2
            </vm-dropdown-item>
          </vm-dropdown-group>

        </vm-dropdown-group>
        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

    <vm-dropdown  vm-trigger-click >
      <a href="#">Hola mundo</a>

      <vm-dropdown-menu>
        <vm-dropdown-item @click="logx">
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>

        <vm-dropdown-group vm-cascading vm-label="prueba de label nuevo para ver">
          <vm-dropdown-item @click="logx">
            option 1 prueba de el ancho
          </vm-dropdown-item>
          <vm-dropdown-item to="/components/">
           option 2
          </vm-dropdown-item>
          <vm-dropdown-group>
            <vm-dropdown-item @click="logx">
              sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              sub Options 2
            </vm-dropdown-item>
          </vm-dropdown-group>
        </vm-dropdown-group>

        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>
  </div>
</template>

<script>
export default {
  methods:{
    logx(){
      console.log("click");
    }
  }
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  button
    margin: 0px !important
    &.btnx
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
