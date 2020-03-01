<template>
	<div class="me-order">
		<div class="order-title">
			<span>我的订单</span>
			<span>查看全部></span>
		</div>
		<div class="order-detail">
			<ul>
				<li v-for="(item,index) in orderIcon" :key="index">
					<img :src="item.icon" alt="">
					<div>{{item.title}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MeOrder',
		data() {
			return {
				orderIcon: [{
					icon: require('../../../assets/images/icons/unpayed.png'),
					title: '待付款'
				}, {
					icon: require('../../../assets/images/icons/unshare.png'),
					title: '待分享'
				}, {
					icon: require('../../../assets/images/icons/comfirm.png'),
					title: '待发货'
				}, {
					icon: require('../../../assets/images/icons/shipping.png'),
					title: '待收货'
				}, {
					icon: require('../../../assets/images/icons/unpayed.png'),
					title: '待评价'
				}]
			}
		},
	}
</script>

<style scoped>
	.me-order {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 20px;
	}
	.me-order .order-title {
		display: flex;
		justify-content: space-between;
		padding: 5px 16px 0 16px;
	}
	.me-order .order-title span:nth-child(1) {
		font-size: 17px;
		color: #151516;
	}
	.me-order .order-title span:nth-child(2) {
		font-size: 13px;
		color: #999;
	}
	.me-order .order-detail ul {
		display: flex;
		width: 100%;
		margin-top: 20px;
	}
	.me-order .order-detail li {
		width: 20%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	.me-order .order-detail li img {
		width: 24px;
		margin-bottom: 12px;
	}
	.me-order .order-detail li div {
		font-size: 13px;
	}
</style>