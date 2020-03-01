<template>
  <div class="me-func">
    <div class="func-detail">
        <ul>
            <li v-for="(item,index) in funcIcon" :key="index">
                <img :src="item.icon" alt="">
                <div>{{item.title}}</div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'MeFunc',
    data() {
        return {
            funcIcon: [{
					icon: require('../../../assets/images/icons/hongbao2.png'),
					title: '新人红包'
				}, {
					icon: require('../../../assets/images/icons/guoyuan.png'),
					title: '多多果园'
				}, {
					icon: require('../../../assets/images/icons/kanjia.png'),
					title: '砍价免费拿'
				}, {
					icon: require('../../../assets/images/icons/xianjin.png'),
					title: '天天领现金'
				}, {
					icon: require('../../../assets/images/icons/aixiaochu.png'),
					title: '多多爱消除'
				}, {
					icon: require('../../../assets/images/icons/muchang.png'),
					title: '多多牧场'
				}, {
					icon: require('../../../assets/images/icons/huochepiao.png'),
					title: '火车票'
				}, {
					icon: require('../../../assets/images/icons/icon_my_address_v3.png'),
					title: '收货地址'
				}, {
					icon: require('../../../assets/images/icons/icon_my_comments.png'),
					title: '我的评价'
				}, {
					icon: require('../../../assets/images/icons/icon_customer_service.png'),
					title: '官方客服'
				}, {
					icon: require('../../../assets/images/icons/icon_setting.png'),
					title: '设置'
				}]
        }
    },
}
</script>

<style scoped>
    .me-func {
        width: 100%;
		box-sizing: border-box;
		padding-top: 15px;
    }
    .me-func .func-detail ul {
		display: flex;
        flex-wrap: wrap;
		width: 100%;
		/* margin-top: 20px; */
	}
	.me-func .func-detail li {
		width: 20%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
        margin-bottom: 20px;
	}
	.me-func .func-detail li img {
		width: 40%;
		margin-bottom: 12px;
	}
	.me-func .func-detail li div {
		font-size: 13px;
	}
</style>