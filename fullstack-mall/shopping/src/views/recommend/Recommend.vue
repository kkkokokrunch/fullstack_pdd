<template>
  <div class="recommend-wrapper">
    <scroll 
    class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true" 
    @pullingUp="loadMore">
      <div class="recommend">
        <recom-item 
        :recommend-item="item" 
        v-for="(item,index) in recommend" 
        :key="index" 
        @itemImageLoad="imgLoad">
        </recom-item>
      </div>
    </scroll>
  </div>
</template>

<script>
  import RecomItem from './recommendChildren/RecomItem'
  import { getRecommenddata } from '../../network/recommend'
  import { debounce } from '../../common/utils'
  import Scroll from '../../components/scroll/Scroll'
  export default {
    name: 'Recommend',
    components: {
      RecomItem,
      Scroll
    },
    data() {
      return {
        recommend: [],
        itemImgListener: null,
        page: 0
      }
    },
    created() {
      this.getRecommenddata()
    },
    mounted() {
      this.$nextTick(function () {
        this.$on('childmethods', function () {
          console.log('我是子组件方法');
        });
      });
    },
    methods: {
      getRecommenddata() {
        const page = this.page + 1
        getRecommenddata(page).then(res => {
          this.recommend.push(...res)
          this.page = page
          this.$refs.scroll.finishPullUp()
        })
      },
      loadMore() {
        this.getRecommenddata()
      },
      imgLoad(data) {
        const refresh = debounce(this.$refs.scroll.refresh, 500)
        refresh()
      }
    },
  }
</script>

<style scoped>
  .recommend-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .recommend-wrapper .content {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>