<template>
<div class="me-top">
	<div class="me-header">
		<div class="header-info">
			<div class="img-wrapper" @click="toBaseInfo">
				<img class="avatar" src="../../../assets/images/avatar.png" alt="">
			</div>
			<div class="nick">
				<div class="nick-wrapper" @click="toBaseInfo">
					<p>{{userInfo.user_name}}</p>
					<img src="../../../assets/images/icons/mobile.png" alt="">
				</div>
				<div class="xzq">勋章墙 ></div>
			</div>
		</div>
		<div class="header-tip">
			<img src="../../../assets/images/icons/hongbao.png" alt="">
			<span>拼单返现</span>
		</div>
		
	</div>	
	<div class="red-tip">
		<div class="left">
			<span>省钱月卡</span>
			<span>|帮你省194元</span>
		</div>
		<div class="right">
			<span>领144元通用券</span>
			<span>></span>
		</div>
		
	</div>
</div>
	
</template>

<script>
import {mapState} from 'vuex'
	export default {
		name: 'MeHeader',
		computed: {
      ...mapState(['userInfo'])
    },
		methods: {
			toBaseInfo() {
				this.$router.push('./baseinfo')
			}
		},
	}
</script>

<style scoped>
.me-top {
	width: 100%;
	padding: 15px 16px;
	box-sizing: border-box;
}
	.me-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding-bottom: 15px;
	}
	.me-header .header-info {
		display: flex;
	}
	.me-header .header-info .img-wrapper {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		overflow: hidden;
		border: 1.5px solid rgba(219, 80, 79, .06);
		margin-right: 12px;
	}
	.me-header .header-info .img-wrapper .avatar {
		width: 100%;
		height: 100%;
	}
	.me-header .header-info .nick .nick-wrapper {
		display: flex;
	}
	.me-header .header-info .nick p {
		font-size: 19px;
		vertical-align: middle;
		color: #151516;
		vertical-align: middle;
		padding-top: 10px;
	}
	.me-header .header-info .nick img {
		width: 20px;
		height: 20px;
		margin-top: 10px;
		/* display: inline-block; */
	}
	.me-header .header-info .nick .xzq {
		color: #9c9c9c;
		font-size: 13px;
		margin-top: 5px;
	}
	.me-header .header-tip {
		width: 97px;
		height: 30px;
		font-size: 13px;
		color: #151516;
		border: 1px solid #abaaaa;
		border-radius: 14.5px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}
	.me-header .header-tip img {
		width: 15px;
		margin-right: 6px;
	}
	.red-tip {
		width: 100%;
		height: 45px;
		color: #e02e24;
    font-size: 15px;
		border-radius: 8px 8px 0 0;
		background-color: #fdefee;
		padding: 0 10px 0 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.red-tip .left span:nth-child(2) {
		font-size: 13px;
	}
	.red-tip .right span:nth-child(1){
		position: relative;
		right: 10px;
		display: inline-block;
		background-color: #fff;
		padding: 5px 7px;
		border-radius: 12.5px;
		font-size: 13px;
	}
</style>