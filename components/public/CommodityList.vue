<template>
	<view class="commodity_cont" :style="'flex-wrap:'+ wrap">
		<view class="commodity_list" :style="'width:'+itemW" v-for="(item,index) in commodity_data" :key="index">
			<image class="commodity_img" :style="'height:'+itemH" :src="'../../static/image/'+item.img"></image>
			<view class="commodity_detail">
				<view class="detail">{{item.detail}}</view>
				<view class="price">
					<view>¥{{item.price}}</view>
					<view class="old_price">¥{{item.old_price}}</view>
				</view>
				<i class="discount">{{item.discount}}折</i>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			commodity_data: Array,
			itemW: {
				type: String,
				default: "375rpx",
			},
			itemH: {
				type: String,
				default: "375rpx",
			},
			wrap: {
				type: String,
				default: "wrap",
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.commodity_cont {
		width: 100%;
		height: auto;
		display: flex;
		color: #434343;
	}

	.commodity_list {
		height: auto;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.commodity_list .commodity_img {
		width: 100%;
	}

	.commodity_list .commodity_detail {
		width: 100%;
		padding: 15rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.commodity_detail .detail {
		width: 100%;
		wtext-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		line-height: 40rpx;
		font-size: 24rpx;
	}

	.commodity_detail .price {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		height: 50rpx;
	}

	.price view {
		color: #f00;
	}

	.price .old_price {
		color: #f1f1f1;
		margin-left: 20rpx;
	}

	.discount {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 40rpx;
		text-align: center;
		border: 2rpx solid #fff000;
		font-size: 24rpx;
		font-style: initial;
		border-radius: 10rpx;
	}
</style>
