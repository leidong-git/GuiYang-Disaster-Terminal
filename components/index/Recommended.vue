<template>
	<view class="recommended bg_color">
		<view class="recommended-item">
			<image class="recommended_bigimg" src="@/static/image/big.jpg"></image>
			<view class="recommended_list">
				<image class="list_img" src="@/static/image/1.jpg">
				</image>
				<image class="list_img" src="@/static/image/2.jpg">
				</image>
				<image class="list_img" src="@/static/image/3.jpg">
				</image>
			</view>
		</view>

		<view class="recommended-item">
			<image class="recommended_bigimg" src="@/static/image/big.jpg"></image>
			<view class="recommended_list">
				<image class="list_img" src="@/static/image/1.jpg">
				</image>
				<image class="list_img" src="@/static/image/2.jpg">
				</image>
				<image class="list_img" src="@/static/image/3.jpg">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Recommended",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.recommended {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.recommended-item {
		width: 100%;
		background: #fff;
		border-radius: 10rpx;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
	}

	.recommended-item:last-child {
		margin-bottom: 0;
	}

	.recommended-item .recommended_bigimg {
		width: 100%;
		height: 300rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}

	.recommended-item .recommended_list {
		width: 100%;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-top: 2rpx solid #f1f1f1;
	}

	.recommended_list .list_img {
		width: 100%;
		height: 200rpx;
	}
</style>
