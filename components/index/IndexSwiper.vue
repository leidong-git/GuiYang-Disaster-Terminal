<template>
	<swiper class="swiper" circular indicator-dots="indicatorDots" autoplay interval="2000" duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper_img" src="@/static/image/scenic_sj.png"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper_img" src="@/static/image/scenic_sj1.png"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	swiper {
		width: 100%;
		height: 320rpx;
	}

	.swiper_img {
		width: 100%;
		height: 320rpx;
	}
</style>
