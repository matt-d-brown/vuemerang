<template>
  <vm-row vm-justify="center">
    <vm-col type="flex" vm-w="6">
      <vm-card class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
    <vm-col type="flex" vm-justify="center" vm-align="center" vm-w="6">
      <vm-card class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img :src="$withBase('/card2.png')">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div slot="footer">
          <vm-row vm-justify="flex-end">
            <vm-button type="gradient" color="danger" icon="favorite"></vm-button>
            <vm-button color="primary" icon="turned_in_not"></vm-button>
            <vm-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vm-button>
          </vm-row>
        </div>
      </vm-card>
    </vm-col>
  </vm-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.cardx
  width calc(100% - 10px)
  margin 5px
  margin-bottom 20px
</style>
