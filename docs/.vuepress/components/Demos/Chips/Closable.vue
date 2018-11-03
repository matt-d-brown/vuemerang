<template lang="html">
  <div class="centerx">
    <vm-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vm-button>
    <vm-chip :key="chip" @click="remove(chip)" v-for="chip in chips" closable>
      {{ chip }}
    </vm-chip>

  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        'Dribbble',
        'GitHub',
        'Behance',
        'Vuejs',
        'Vuesax',
      ],
    }
  },
  methods: {
    reset () {
      this.chips = [
        'Dribbble',
        'GitHub',
        'Behance',
        'Vuejs',
        'Vuesax',
      ]
    },
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
