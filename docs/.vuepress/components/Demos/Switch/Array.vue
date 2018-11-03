<template lang="html">
  <ul class="ul examplex">
    <li class="modelx">
      {{switchArray}}
    </li>
    <li>
      <vm-switch vm-icon-on="check" color="success" v-model="switchArray" vm-value="luis">
        <span slot="off">
          Luis
        </span>
      </vm-switch>
    </li>
    <li>
      <vm-switch vm-icon-on="check" color="success" v-model="switchArray" vm-value="carols">
        <span slot="off">
          Carols
        </span>
      </vm-switch>
    </li>
    <li>
      <vm-switch vm-icon-on="check" color="success" v-model="switchArray" vm-value="summer">
        <span slot="off">
          Summer
        </span>
      </vm-switch>
    </li>
    <li>
      <vm-switch vm-icon-on="check" color="success" v-model="switchArray" vm-value="lyon">
        <span slot="off">
          Lyon
        </span>
      </vm-switch>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switchArray:['luis'],
    }
  }
}
</script>

<style lang="stylus">
.ul
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
.modelx
  padding: 10px;
  margin-left: 10px;
  background: rgb(235, 235, 235);
  border-radius: 5px;

</style>
