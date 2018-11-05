<template lang="html">
  <div class="examplex">
    <vm-dropdown>
      <a class="a-icon" href.prevent>
        Dropdown Option Group
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item>
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>
        <vm-dropdown-group>
          <vm-dropdown-item>
            Option 1
          </vm-dropdown-item>
          <vm-dropdown-item>
            Option 2
          </vm-dropdown-item>

          <vm-dropdown-group>
            <vm-dropdown-item>
              sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              sub Options 2
            </vm-dropdown-item>
          </vm-dropdown-group>

        </vm-dropdown-group>
        <vm-dropdown-item divider>
          Option 3
        </vm-dropdown-item>
      </vm-dropdown-menu>
    </vm-dropdown>

    <vm-dropdown  >
      <a class="a-icon" href.prevent>
        Dropdown Group Collapse
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vm-dropdown-menu>
        <vm-dropdown-item to="/components/">
          Option 1
        </vm-dropdown-item>
        <vm-dropdown-item>
          Option 2
        </vm-dropdown-item>

        <vm-dropdown-group vm-collapse vm-label="Group Collapse" vm-icon="add">
          <vm-dropdown-item>
            Option Collapse 1
          </vm-dropdown-item>
          <vm-dropdown-item >
           Option Collapse 2
          </vm-dropdown-item>
          <vm-dropdown-group>
            <vm-dropdown-item>
              Sub Options 1
            </vm-dropdown-item>
            <vm-dropdown-item>
              Sub Options 2
            </vm-dropdown-item>

            <vm-dropdown-group vm-collapse>
              <vm-dropdown-item vm-label="Sub Collapse">
                Sub Collapse 1
              </vm-dropdown-item>
              <vm-dropdown-item>
                Sub Collapse 2
              </vm-dropdown-item>
            </vm-dropdown-group>

          </vm-dropdown-group>
        </vm-dropdown-group>

        <vm-dropdown-item divider>
          Option 3
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
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
