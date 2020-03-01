<template>
<div class="base-info">

  <div class="title">基本信息</div>
    <div class="info">
      <van-cell-group>
        <!-- 头像 -->
        <van-cell title="头像" class="touxiang" center>
          <img class="avatar" src="../../assets/images/avatar.png" alt="">
        </van-cell>
        <!-- 昵称 -->
        <van-cell title="昵称">{{nickname}}</van-cell>
        <!-- 性别 -->
        <gender-popup></gender-popup>
        <!-- 生日 -->
        <birth-popup></birth-popup>
        <!-- 个性签名 -->
        <sign-popup></sign-popup>
        <!-- 多多号 -->
        <van-cell title="昵称">{{duoId}}</van-cell>
      </van-cell-group>

      <van-cell-group class="second-cell">
        <van-cell title="我的带货动态" is-link/>
        <van-cell title="我的发票抬头" is-link/>
      </van-cell-group>
    </div>
</div>
</template>

<script>
import GenderPopup from './baseInfoChildren/GenderPopup'
import BirthPopup from './baseInfoChildren/BirthPopup'
import SignPopup from './baseInfoChildren/SignPopup'
export default {
  components: {
    GenderPopup,
    BirthPopup,
    SignPopup
  },
    data() {
        return {
            nickname:'',
            duoId:''
        };
    },
    methods: {
       
    }
}
</script>

<style scoped>
.base-info {
    height: 100vh;
    background-color: #f5f5f5;
    box-sizing: border-box;
}

.base-info .title {
    color: #58595b;
    font-size: 16px;
    padding-left: 12px;
    padding-top: 13px;
    padding-bottom: 13px;
}

.base-info .info img{
  display: inline-block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
}
.base-info .info .second-cell {
  margin-top: 10px;
}
</style>
