<template>
  <div class="hot">
      <home-swiper :banners="banners"/>
      <hot-nav :navs="navs"></hot-nav>
      <grey-line></grey-line>
      <fresher-only></fresher-only>
      <grey-line></grey-line>
      <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper'
import HotNav from '../../../components/hotChildren/HotNav'
import greyLine from '../../../components/greyLine'
import FresherOnly from '../../../components/hotChildren/FresherOnly'
import GoodsList from '../../../components/hotChildren/GoodsList'
import {getBannersdata,getNavdata,getGoodesdata,insertUser} from '../../../network/home'

export default {
    name:'Hot',
    components: {
      HomeSwiper,
      HotNav,
      greyLine,
      FresherOnly,
      GoodsList
    },
    data() {
      return {
        banners:[],
        navs:[],
        goods:[],
        
      }
    },
    created() {
      this.getBannersdata()
      this.getNavdata()
      this.getGoodesdata()
    },
    methods: {
      getBannersdata() {
        getBannersdata().then(res => {
          // this.banners = res.data
           this.banners = res
        })
      },
      getNavdata() {
        getNavdata().then(res => {
          this.navs = res
          // console.log(res)
        })
      },
      getGoodesdata() {
        getGoodesdata().then(res => {
          this.goods = res.goods
          console.log(res)
        })
      }
    },
}
</script>

<style scoped>
.hot {
  margin-top: 95px;
  margin-bottom: 55px;
}

</style>