<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vm-chips
      :success="true"
      success-text="The field is valid"
      placeholder="Success"
      val-icon-success="checkmark-circle-outline"
      color="rgb(145, 32, 159)" v-model="chips">
      <vm-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable>
        {{ chip }}
      </vm-chip>
    </vm-chips>
    <div class="modelx">
      {{chips}}
    </div>
    <vm-chips
      :danger="true"
      danger-text="This field does not meet the standards"
      placeholder="Danger"
      val-icon-danger="close"
      color="rgb(145, 32, 159)" v-model="chips">
      <vm-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable>
        {{ chip }}
      </vm-chip>
    </vm-chips>
    <div class="modelx">
      {{chips}}
    </div>
    <vm-chips
      :warning="true"
      warning-text="The entered data could not be verified"
      placeholder="Warning"
      val-icon-warning="alert-triangle-outline"
      color="rgb(145, 32, 159)" v-model="chips">
      <vm-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable>
        {{ chip }}
      </vm-chip>
    </vm-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "Vuejs",
        "Node",
        "Vuemerang"
      ]
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>