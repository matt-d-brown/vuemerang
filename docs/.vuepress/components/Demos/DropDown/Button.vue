<template lang="html">
  <div class="examplex">
    <vm-button class="btnx" type="filled">Dropdown</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" type="filled" icon="chevron-down"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          option 2
        </vm-dropdown-item>
        <vm-dropdown-group >
          <vm-dropdown-item>
            option 1
          </vm-dropdown-item>
          <vm-dropdown-item>
            option 2
          </vm-dropdown-item>

        </vm-dropdown-group>
        <vm-dropdown-item divider>
          option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>


    <vm-button class="btnx" color="success" type="gradient">Dropdown</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" color="success" type="gradient" icon="more-horizotnal"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Home
        </vm-dropdown-item>
        <vm-dropdown-item>
          Contributors
        </vm-dropdown-item>
        <vm-dropdown-item divider>
          Logout
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>


    <vm-button class="btnx" color="danger" type="line">Icons</vm-button>
    <vm-dropdown>
      <vm-button class="btn-drop" color="danger" type="line" icon="options-outline"></vm-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vm-dropdown-menu>
        <vm-dropdown-item>
          <i class="eva">
            mood
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            mood_bad
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_dissatisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_satisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_very_dissatisfied
          </i>
        </vm-dropdown-item>
        <vm-dropdown-item>
          <i class="eva">
            sentiment_very_satisfied
          </i>
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

  </div>
</template>

<script>
export default {
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
      margin-left: 10px !important;
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
