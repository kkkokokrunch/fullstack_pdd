<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar v-show="$route.meta.showTabBar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/mainTabbar/mainTabbar'
export default {
  components: {
    MainTabBar
  },
  // created() {
  //   this.$store.dispatch('getUserInfo')
  // }
    
}
</script>
<style>
@import 'assets/css/base.css'
</style>
