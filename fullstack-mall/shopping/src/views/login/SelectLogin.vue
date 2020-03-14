<template>
  <div class="select-login">
	<img class="logo" src="../../assets/images/pin_logo.png" alt="">
	<router-link to="/login" tag="button">
		<i class="iconfont icon-shouji"></i>
		手机登录
	</router-link>
	<div class="safe">
		<span>平台用户信息安全由</span>
		<img src="../../assets/images/brand_picc_new.png" alt="">
		<span>承保</span>
	</div>
		
  </div>
</template>

<script>
export default {
	name:"SelectLogin",
}
</script>

<style scoped>
.select-login {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	left:0;
    top:0;
    z-index:1000;
	background-color: #fff;
}
.select-login .logo {
	width: 140px;
	padding-top: 120px;
	/* margin: 0 auto; */
	/* height: 30px; */
}
.select-login button {
	width: 300px;
	height: 45px;
	background-color: #fb0;
	border-radius: 10px;
	border:none;
	margin-top: 100px;
	color: #ffffff;
	font-weight: 400;
}
.select-login .safe {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
	color: #9c9c9c;
	font-size: 12px;
}
.select-login .safe img {
	width: 90px;
}
</style>