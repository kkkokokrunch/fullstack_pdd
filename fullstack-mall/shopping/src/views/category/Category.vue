<template>
  <div class="category">
      <search-bar class="header"></search-bar>
      <div class="shop">
        <!-- 左边 -->
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <!-- current -->
            <li class="menu-item" 
            v-for="(goods,index) in searchGoods" 
            :key="index"
            :class="{current:index === currentIndex}"
            @click="clickLeftItem(index)"
            ref="menulist">
              <span>{{goods.name}}</span>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="shop-wrapper" ref="shopWrapper">
          <ul ref="shopsParent">
            <li class="shops-li" v-for="(goods,index1) in searchGoods" :key="index1">
              <div class="shops-title">
                <span>{{goods.name}}</span>    
              </div>
              <!-- banner -->
              <div v-show="goods.banner" class="shop-banner">
                <img :src="goods.banner" alt="">
              </div>
              <!-- 手机品牌 -->
              <ul class="phone-type" v-if="goods.tag === 'phone'">
                <li v-for="(phone,index) in goods.category" :key="index">
                  <img :src="phone.icon" alt="">
                </li>
              </ul>
              <ul class="shops-items">
                <li v-for="(item,index2) in goods.items" :key="index2">
                  <img :src="item.icon">
                  <span>{{item.title}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import SearchBar from '../../components/searchBar/SearchBar'
import {getSearchdata} from '../../network/category'
import BScroll from 'better-scroll'
export default {
    name:'Category',
    components: {
      SearchBar
    },
    data() {
      return {
        searchGoods:[],
        scrollY:0,
        rightLiTops:[]
      }
    },
    created() {
      this.getSearchdata()
    },
    watch: {
      searchGoods() {
        this.$nextTick(() => {
          this._initBScroll()
          this._initRightLiTops()
        })
      }
    },
    computed: {
      currentIndex() {
        const {scrollY,rightLiTops} = this;
        //取出索引
        return rightLiTops.findIndex((liTop,index) => {
          this._leftScroll(index)
          return scrollY >= liTop && scrollY < rightLiTops[index + 1]
        })
      }
    },
    methods: {
      getSearchdata() {
        getSearchdata().then(res => {
          this.searchGoods = res.data
          // console.log(res)
        })
      },
      _initBScroll() {
        this.leftScroll = new BScroll(this.$refs.menuWrapper, {
          scrollY:true,
          click:true
        })
        this.rightScroll = new BScroll(this.$refs.shopWrapper, {
          scrollY:true,
          click:true,
          probeType:3
        })
        //监听右侧滑动事件
        this.rightScroll.on('scroll',(pos) => {
          this.scrollY = Math.abs(pos.y)
          // console.log(this.scrollY)
          // console.log(this.rightLiTops)
        })
      },
      _initRightLiTops() {
        //临时数组
        const tempArr = []
        //定义变量记录高度
        let top = 0
        tempArr.push(top)
        //遍历li标签，取出高度
        let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li')
        // console.log(allLis)
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight
          tempArr.push(top)
        })
        //更新数据
        this.rightLiTops = tempArr;
      },
      //点击切换
    clickLeftItem(index) {
      this.scrollY = this.rightLiTops[index]
      this.rightScroll.scrollTo(0,-this.scrollY,300)
    },
    //左侧联动
    _leftScroll(index) {
      let menulists = this.$refs.menulist
      let el = menulists[index]
      this.leftScroll.scrollToElement(el,300,0,-100)
    }
    },
    
}
</script>

<style scoped>
.category {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.shop {
  width: 100%;
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 55px;
  background-color: #f5f5f5;
  overflow: hidden;
}
.shop .menu-wrapper {
  background-color: #fafafa;
  width: 80px;
  flex: 0 0 80px;
}
.shop .menu-wrapper .menu-item {
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #666666;
  position: relative;
}
.shop .menu-wrapper .current {
  color: #e02e24;
}
.shop .menu-wrapper .current::before {
  content: '';
  background-color: #e02e24;
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
.shop .shop-wrapper {
  flex: 1;
  background-color: #fff;
}
.shop .shop-wrapper .shops-title {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  color: #151516;
  font-size: 15px;
}
.shop .shop-wrapper .shop-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop .shop-wrapper .shop-banner img{
  width: 90%;
}
.shop .shop-wrapper .phone-type {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #f4f4f4;
}
.shop .shop-wrapper .phone-type li {
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
.shop .shop-wrapper .phone-type li img {
  width: 70%;
}
.shop .shop-wrapper .shops-items {
  display: flex;
  flex-wrap: wrap;
}
.shop .shop-wrapper .shops-items li {
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 90px;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
}
.shop .shop-wrapper img {
  width: 50%;
  margin-bottom: 5px;
}
</style>