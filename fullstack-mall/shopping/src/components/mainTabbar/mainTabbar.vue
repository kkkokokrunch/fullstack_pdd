<template>
  <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="#e02e24">
        <img slot="item-icon" src="../../assets/images/tabbars/home.webp" alt="">
        <img slot="item-icon-active" src="../../assets/images/tabbars/home-active.webp" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/recommend" activeColor="#e02e24">
        <img slot="item-icon" src="../../assets/images/tabbars/focus.webp" alt="">
        <img slot="item-icon-active" src="../../assets/images/tabbars/focus-active.webp" alt="">
        <div slot="item-text">推荐</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#e02e24">
        <img slot="item-icon" src="../../assets/images/tabbars/category.webp" alt="">
        <img slot="item-icon-active" src="../../assets/images/tabbars/category-active.webp" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#e02e24">
        <img slot="item-icon" src="../../assets/images/tabbars/chat.webp" alt="">
        <img slot="item-icon-active" src="../../assets/images/tabbars/chat-active.webp" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me" activeColor="#e02e24">
        <img slot="item-icon" src="../../assets/images/tabbars/me.webp" alt="">
        <img slot="item-icon-active" src="../../assets/images/tabbars/me-active.webp" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../tabbar/TabBar'
import TabBarItem from '../tabbar/TabBarItem'
export default {
name: 'mainTabbar',
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>
</style>

