<template>
  <div class="hot-nav">
      <div class="hot-nav-content">
          <div class="nav-content-inner">
              <a href="" class="inner-item" v-for="(item,index) in navs" :key="index">
                  <img :src="item.imgUrl" alt="">
                  <span>{{item.title}}</span>
              </a>
          </div>
      </div>
      <div class="hot-nav-bottom">
          <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'HotNav',
    props: {
        navs: {
            type:Array,
            default:[]
        }
    },
    data() {
        return {
            screenW:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
            scrollContentW:720,
            bgBarW:100,
            barXWidth:0,
            startX:0,
            endFlag:0,
            barMoveWidth:0
        }
    },
    computed: {
        innerBarStyle() {
            return {
                width:`${this.barXWidth}px`,
                left:`${this.barMoveWidth}px`
            }
        }
    },
    mounted() {
        this.getBottomBarWidth()
        this.bindEvent()
    },
    methods: {
        getBottomBarWidth() {
            this.barXWidth = this.bgBarW*(this.screenW / this.scrollContentW)
        },
        bindEvent() {
            this.$el.addEventListener('touchstart',this.handleTouchStart,false)
            this.$el.addEventListener('touchmove',this.handleTouchMove,false)
            this.$el.addEventListener('touchend',this.handleTouchEnd,false)
        },
        handleTouchStart(event) {
            let touch = event.touches[0]
            this.startX = Number(touch.pageX)

        },
        handleTouchMove() {
            let touch = event.touches[0]
            let moveWidth = Number(touch.pageX) - this.startX
            this.barMoveWidth = -((this.bgBarW/this.scrollContentW)*moveWidth -this.endFlag)

            if(this.barMoveWidth <= 0) {
                this.barMoveWidth = 0
            }else if (this.barMoveWidth >= this.bgBarW -this.barXWidth) {
                this.barMoveWidth = this.bgBarW - this.barXWidth
            }
        },
        handleTouchEnd() {
            // console.log('结束')
            this.endFlag = this.barMoveWidth

        },
    },
}
</script>

<style scoped>
.hot-nav {
    width: 100%;
    height: 180px;
    position: relative;
    background-color: #fff;
    padding-bottom: 10px;
}
.hot-nav .hot-nav-content {
    width: 100%;
    overflow-x: scroll
}
.hot-nav .hot-nav-content .nav-content-inner {
    width: 720px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
}
.hot-nav .hot-nav-content .inner-item {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666;
}
.hot-nav .hot-nav-content img {
    width: 40%;
    margin-bottom: 5px;

}
.hot-nav-content::-webkit-scrollbar {
    display: none;
}
.hot-nav-bottom {
    width: 100px;
    height: 2px;
    background-color: #cccccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 8px;
}
.hot-nav-bottom .hot-nav-bottom-inner {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: orangered;
    width: 0;
}
</style>