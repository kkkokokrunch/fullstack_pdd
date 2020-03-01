<template>
  <div class="fresher">
      <div class="fresher-header">
            <span class="header-title">新人专享</span>
            <div class="line"></div>
            <div class="quan">券</div>
            <span class="header-remai">爆款热卖 包邮到家</span>
            <a class="header-remai more">查看更多 ></a>
      </div>
      <div class="fresher-content">
          <img src="http://images.pinduoduo.com/mrk/2019-12-26/7b93a35e-f7a9-4c64-aeff-0e16c5b98f25.gif?imageView2/2/w/1300/q/70/format/webp" alt="">
        <ul v-for="(item,index) in fresherTwo" :key="index">
            
            <li>
                <img :src="item.thumb_url" alt="">
                <div class="name">{{item.short_name}}</div>
                <div class="price">
                    <div class="xrj">新人价</div>
                    <span>￥{{item.price / 100}}</span>
                </div>
                
            </li>
        </ul>
      </div>
      
  </div>
</template>

<script>
import {getFresherdata} from '../../network/home'
export default {
    name:'FresherOnly',
    data() {
        return {
            fresherTwo:[]
        }
    },
    // computed: {
    //     fresher() {
    //         var price =  this.fresherTwo.price / 100
    //         return price
    //     }
    // },
    created() {
        this.getFresherdata()
    },
    methods: {
        getFresherdata() {
            getFresherdata().then(res => {
                // console.log(res)
                // console.log(res.data[0])
                this.fresherTwo = res.fresher.data.splice(0,2)
                // console.log(this.fresherTwo)
            })
      },
    },
}
</script>

<style scoped>
.fresher {
    width: 100%;
    padding: 12px;
    /* box-sizing: border-box; */
}
.fresher-header {
    display: flex;
    margin-bottom: 10px;
/* justify-content: space-around; */
}
.fresher-header .header-title{
    color: #151516;
    font-size: 16px;
    font-weight: 700;
    margin-right: 8px;
}
.fresher-header .line {
    width: 1px;
    height: 14px;
    background-color: #cdcdcd;
    margin-right: 8px;
    margin-top: 2px;
}
.fresher-header .quan{
    width: 22px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    background-color: #f32109;
    color: #fff;

}
.fresher-header .header-remai {
    margin-left: 6px;
    color: #9c9c9c;
    font-size: 14px;
}
.fresher-header .more {
    /* width: 20px; */
    flex: 1;
    text-align: right;
    /* margin-right: 25px; */
}
.fresher-content {
    display: flex;
}
.fresher-content li {
    margin-left: 8px;
}
.fresher-content img {
    width: 111px;
    border-radius: 2px;
}
.fresher-content li .name {
    width: 111px;
    line-height: 29px;
    height: 29px;
    font-size: 13px;
    text-align: center;
    color: #151516;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
}
.fresher-content li .price {
    display: flex;
    justify-content: center;
}
.fresher-content li .xrj {
    text-align: center;
    font-size: 13px;
    padding: 2px;
    color: #fff;
    background-color: #f32109;
    border-radius: 4px;
}
.fresher-content li .price span {
    font-size: 16px;
    font-weight: 700;
    color: #f32109;
}
</style>