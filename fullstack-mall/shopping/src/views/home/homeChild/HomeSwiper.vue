<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/swiper'
export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type:Array,
            default() {
                return []
            }
        }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        // isLoad:false
      }
    },
    methods: {
      // imageLoad() {
      //   if(!this.isLoad) {
      //     this.$emit('swiperImageLoad')
      //     this.isLoad = true
      //   }
       
      // }
    },
}
</script>

<style>

</style>