<template>
	<view>
		<scroll-view scroll-x="true" class="nav_cont" :scroll-into-view="`top${nav_index}`">
			<view :id="`top${index}`" class="nav_item" @click="Nav_click(index)" v-for="(item,index) in nav_list" :key="index">
				<text :class="nav_index == index ? 'f_active_color ':'f_color'">{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			nav_index:{
				type: Number
			},
			nav_list:{
				type: Array
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			Nav_click(index){
				this.$emit("change_navindex",index)
			}
		}
	}
</script>

<style scoped>
.nav_cont{
	width: 100%;
	white-space: nowrap;
}
.nav_item{
	padding:25rpx;
	height: 40rpx;
	display: inline-block;
}
.f_active_color{
	width: auto;
	border-bottom: 4rpx solid #49bdfb;
	padding-bottom: 10rpx;
}
</style>
