<template>
  <div class="home">
		<div class="header">
			<search-bar></search-bar>
			<ly-tab 
			class="lytab"
			v-model="selectedId"
			:items="items"
			:options="options"
			@change="handleChange"/>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
import SearchBar from '../../components/searchBar/SearchBar'
// import HomeSwiper from '../home/homeChild/HomeSwiper'

export default {
	name:'Home',
	components: {
		SearchBar,
		// HomeSwiper
	},
	data() {
		return {
			selectedId:0,
			items:[
				{label:'热门'},
				{label:'女装'},
				{label:'男装'},
				{label:'鞋包'},
				{label:'食品'},
				{label:'母婴'},
				{label:'男装'},
				{label:'百货'},
				{label:'内衣'},
				{label:'电器'},
				{label:'家纺'},
				{label:'水果'},
				{label:'家具'},
				{label:'美妆'},
				{label:'家装'},
			],
			options: {
				activeColor:'#e9232c'
			},
			subRouterUrl:[
				'/home/hot',
				'/home/womenCloth',
				'/home/manCloth',
				'/home/shoeBag',
				'/home/food',
			]
			
		}
	},
	methods: {
		handleChange(item,index) {
			this.$router.replace(this.subRouterUrl[index])
		}
	},
}
</script>

<style scoped>
.home {
	height: 100vh;
    position: relative;
    box-sizing: border-box;
}
.header {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
}
.lytab {
	background-color: #fff;
	/* position: relative;
	top: 50px;
	left: 0;
	right: 0; */
}
</style>