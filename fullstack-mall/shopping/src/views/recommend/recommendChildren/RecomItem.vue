<template>
	<div class="recom-item">

		<img :src="recommendItem.thumb_url" alt="" @load="imageLoad">
		<div class="item-name">{{recommendItem.short_name}}</div>
		<div class="item-bottom">
			<span>￥{{recommendItem.price / 100}}</span>
			<span>{{recommendItem.sales_tip}}</span>
		</div>
		<i class="iconfont icon-che" @click="addToCart"></i>
	</div>
</template>

<script>
	export default {
		name: 'RecomItem',
		props: {
			recommendItem: {
				type: Object,
				default: {}
			}
		},
		methods: {
			imageLoad() {
				this.$emit('itemImageLoad', '子组件')
			},
			addToCart() {
				// this.$toast({
				// 	type: "success",
				// 	message: `成功加入购物车`,
				// 	forbidClick: true,
				// 	duration: 1000
				// });
				 //1.获取商品信息
            const product = {}
            product.image = this.recommendItem.thumb_url
            product.title = this.recommendItem.short_name
            product.price = this.recommendItem.price / 100
            product.id = this.recommendItem.goods_id

			// console.log(product)
            //2.将商品加到购物车
            this.$store.dispatch('addCart',product).then(res => {
                console.log(res)
            })
            
			}
		},
	}
</script>

<style scoped>
	.recom-item {
		padding-bottom: 5px;
		position: relative;
		width: 49%;
	}

	.recom-item img {
		width: 100%;
	}

	.recom-item .item-name {
		margin: 5px;
		font-size: 13px;
		color: #151516;
		overflow:hidden; /*超出的部分隐藏起来。*/ 
		white-space:nowrap;/*不显示的地方用省略号...代替*/
		text-overflow:ellipsis;/* 支持 IE */
	}

	.recom-item .item-bottom {
		margin: 10px 5px;
	}

	.recom-item .item-bottom span:nth-child(1) {
		color: #e02e24;
		font-size: 16px;
		font-weight: 600;
	}

	.recom-item .item-bottom span:nth-child(2) {
		color: #9c9c9c;
		font-size: 11px;
		font-weight: 400;
		margin-left: 5px;
	}

	.recom-item .iconfont {
		color: #e02e24;
		position: absolute;
		right: 5px;
		bottom: 15px;
		font-weight: 700;
	}
</style>