<template>
	<div class="goodslist">
		<!-- <div>{{goods}}</div> -->
		<ul v-for="(item,index) in goods" :key="index">
			<li>
				<img :src="item.hd_thumb_url" alt="">
				<div class="content">
						<div class="name">{{item.goods_name}}</div>
						<div class="qj" v-show="item.mall_name&&item.mall_name.indexOf('旗舰')!==-1">{{item.mall_name}}</div>
						<div class="mall-name" v-show="item.mall_name&&item.mall_name.indexOf('旗舰')==-1">{{item.mall_name}}</div>
						<div class="tp-wrapper">
							<div v-if="item.tag_list" class="tag">
								<span v-for="(i,tindex) in item.tag_list" :key="tindex">{{i.text}}</span>
							</div>
							<div class="price">
								<span class="red">￥{{item.group.price / 100}}</span>
								<span class="tip">{{item.sales_tip}}</span>
								<img :src="item.near_group.list[0].avatar" alt="">
							</div>
						</div>		
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				default: []
			}
		},
		created() {
			// console.log(this.goods)
		},
	}
</script>

<style scoped>
	.goodslist {
		padding: 12px;
	}
	.goodslist li {
		/* display: flex; */
		position: relative;
	}
	.goodslist li img {
		width: 156px;
		/* margin-top: 6px; */
		margin-bottom: 12px;
		border-radius: 2px;
	}
	.goodslist li .content {
		margin-left: 5px;
		position: absolute;
		width: 187px;
		height: 156px;
		right: 0px;
		top: 1px;
		border-bottom: 1px solid #f4f4f4;
	}
	.goodslist li .content .name {
		font-size: 14px;
		line-height: 20px;
		max-height: 40px;
		word-break: break-all;
		color: #151516;
		overflow: hidden;
	}
	.goodslist li .content .mall-name {
		height: 16px;
		line-height: 16px;
		padding: 0 3px;
		font-size: 12px;
		color: #9c9c9c;
		margin-top: 5px;
		box-sizing: border-box;
	}
	.goodslist li .content .qj {
		height: 16px;
		line-height: 16px;
		padding: 0 3px;
		font-size: 12px;
		color: #572600!important;
		background-color: #f8e2bd;
		border-radius: 2px;
		display: inline-block;
		margin-top: 5px;
		box-sizing: border-box;
		/* background-color:-webkit-linear-gradient(315deg,#e9c68c,#f8e2bd 50%,#eaca93 0,#eaca93); */
	}
	.goodslist li .content .tp-wrapper {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5px;
	}
	.goodslist li .content .tp-wrapper .tag span {
		color: rgb(255, 87, 6);
		background: rgba(255, 87, 6, 0.08);
		margin-right: 4px;
		margin-bottom: 2px;
		padding: 2px;
		font-size: 12px;
	}
	.goodslist li .content .tp-wrapper .price {
		display: flex;
	}
	.goodslist li .content .tp-wrapper .price .red{
		color: #e02e24;
		font-size: 18px;
		font-weight: 700;
	}
	.goodslist li .content .tp-wrapper .price .tip {
		margin-left: 10px;
		color: #9c9c9c;
		font-weight: 400;
		font-size: 13px;
		margin-top: 3px;
	}
	.goodslist li .content .tp-wrapper .price img {
		width: 22px;
		border-radius: 50%;
		border: 1px solid #fff;
		margin-left: 15px;
	}
</style>