<template lang="html">
  <div class="con-avatarsx">
    <div class="con-avatar-solo">
    <vm-avatar badge />
    <vm-avatar :badge="badge1" text="Luisdaniel"/>
    <vm-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd"/>
  </div>
      <vm-button type="filled" @click="increment">
        Increment Badge counter
      </vm-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    badge1:2,
    badge2:10,
  }),
  methods:{
    increment(){
      this.badge1 ++
      this.badge2 ++
    }
  }
}
</script>

<style lang="stylus">
  .con-avatarsx
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
</style>
