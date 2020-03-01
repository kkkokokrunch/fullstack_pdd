<template>
  <div class="me-tips">
     <div class="tips-detail">
			<ul>
				<li v-for="(item,index) in tipsIcon" :key="index">
					<img :src="item.icon" alt="">
					<div>{{item.title}}</div>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
    name:'MeTips',
    data() {
        return {
            tipsIcon: [{
					icon: require('../../../assets/images/icons/yhq.png'),
					title: '优惠券'
				}, {
					icon: require('../../../assets/images/icons/spsc.png'),
					title: '商品收藏'
				}, {
					icon: require('../../../assets/images/icons/lsll.png'),
					title: '历史浏览'
				}, {
					icon: require('../../../assets/images/icons/tkss.png'),
					title: '退款售后'
				}, {
					icon: require('../../../assets/images/icons/wdpj.png'),
					title: '我的评价'
				}]
			}
        }
    }

</script>

<style scoped>
    .me-tips {
        width: 100%;
		box-sizing: border-box;
		padding: 15px 0 15px 0;
    }
    .me-tips .tips-detail ul {
		display: flex;
		width: 100%;
		/* margin-top: 20px; */
	}
	.me-tips .tips-detail li {
		width: 20%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	.me-tips .tips-detail li img {
		width: 30px;
		margin-bottom: 12px;
	}
	.me-tips .tips-detail li div {
		font-size: 13px;
	}
</style>