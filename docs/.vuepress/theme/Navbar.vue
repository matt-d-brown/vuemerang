<template>
  <header :class="{'shadow':true}" class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <div class="con-btns-header">
      <router-link @click.native="changeAds" :to="$localePath" class="home-link">
        <div class="con-logo">
          <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        </div>
        <span class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          <!-- {{ $siteTitle }} -->
        </span>
      </router-link>
      <div :class="{'linksColor':!$page.frontmatter.home}" class="links">
        <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/> -->
        <!-- <SearchBox v-else-if="$site.themeConfig.search !== false"/> -->
        <NavLinks class="can-hide"/>
      </div>
    </div>

    <div class="con-redes-download">
      <a
        title="Github"
        v-if="repoLink"
        :href="repoLink"
        class="repo-link flaticon-github"
        target="_blank"
        rel="noopener noreferrer">
          <!-- {{ repoLabel }} -->
          <!-- <OutboundLink/> -->
        </a>
        <a target="_blank" title="@Vuemerang" href="https://twitter.com/Vuemerang">
          <i class="flaticon-twitter twitterx"></i>
        </a>

        <a href="https://github.com/controlla/vuemerang/releases/download/v3.5.7/Vuemerang-3.5.7.zip" class="btn-download">
          <i class="eva eva-download">
          </i>
          <span>Download</span>
        </a>

      <div title="Change Color Primary" v-if="!$page.frontmatter.home" class="con-colors-input">
        <div :style="{
          'box-shadow': '0px 5px 20px -4px rgba(var(--primary),.9)',
          'background': 'rgb(var(--primary))'}" class="con-inputx-c">
          <input @change="changeColor($event.target.value)" type="color" name="" :value="color">
        </div>
      </div>

      <btnApps />
    </div>
    <!-- colors change -->

  </header>
</template>

<script>
import btnApps from './btnApps.vue'
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, btnApps },
  data(){
    return {
      color: '#008afb',
      shadow:false,
    }
  },
  computed: {
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  mounted(){
    if(this.$page.frontmatter.home){
      window.addEventListener('scroll',(e)=>{
        if(e.target.scrollingElement.scrollTop > 350){
          this.shadow = true
        } else {
          this.shadow = false
        }
      })
    } else {
      this.shadow = true
    }

  },
  methods:{
    changeAds(){
      if (!document.querySelector('#carbonads')) return;
      if (typeof _carbonads !== 'undefined') _carbonads.refresh();
    },
    changeColor(colorx){
      this.$vm.theme({
        primary:colorx // myColorNew
      })
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
//Vuemerang
.st0
  fill:#5b5777

.icon-discord
  position relative
  svg
    width 22px
    height 22px
.con-redes-download
  display flex
  align-items center
  justify-content center
  .twitterx
    &:before
      font-size 1.2rem !important
  .repo-link
    &:before
      font-size 1.2rem !important
  a
    display flex !important
    align-items center
    justify-content center
    padding 0px 4px
    transition all .25s ease
    color #5b5777
    &:hover
      color $accentColor !important
      .st0
        fill $accentColor !important
  .btn-download
    padding 12px 10px
    font-size .8rem
    display flex
    align-items center
    justify-content center
    border-left 1px solid rgba(0,0,0,.05)
    border-right 1px solid rgba(0,0,0,.05)
    margin-left 5px
    cursor pointer
    span
      margin-left 5px
.con-inputx-c {
  overflow: hidden;
  display: inline-block;
  position: relative;
  // overflow: hidden;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px
}
.con-colors-input{
  position: relative;
  display flex
  align-items center
  justify-content center
  margin-left 10px
}
.con-colors-input input{
  border: 0px;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.shadow {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04) !important
}
.logo {
  transition: all .3s ease
  // opacity: 0;
  // transform: translate(0,-100%);
}
.visible
  opacity: 1;
  transform: translate(0);
//Vuemerang

.navbar
  height: 3rem !important;
  padding 0.4rem 1rem
  line-height $navbarHeight - 1.5rem
  position relative
  background: $background
  z-index: 1200 !important
  position: fixed;
  width: calc(100% + 7px)
  display flex
  align-items center
  justify-content space-between

  i
    font-size 1rem

  .home-link
    margin-left 1rem
    margin-right 3.5rem
  .con-btns-header
    display flex
    align-items center
    // justify-content flex-start
  a, span, img
    display block
  .logo
    height $navbarHeight - 0.7rem
    // min-width $navbarHeight - 1.4rem
    // margin-right 4.5rem
    vertical-align top
    // margin-left 2.5rem
  .site-name
    font-size 1.3rem
    display none
    font-weight 600
    color $textColor
    position relative
  .links
    font-size 0.9rem
    position relative
    // right 0rem
    top 0rem
    transition: all .2s ease;
    &.linksColor
      // right: 1.5rem
@media (max-width: $MQMobile)
  .links
    line-height 48px
  .navbar
    padding-left 3rem
    .can-hide
      display none
</style>
