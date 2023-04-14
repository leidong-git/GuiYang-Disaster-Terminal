<template>
	<view class="phone_cont">
		<view class="phone">
			<view>验证码</view>
			<input v-model="verify" type="number" maxlength="6" placeholder="请输入验证码" />
			<button @tap="Open_an()" :class="flag ? 'disable':''" :disable="flag">重新发送<i
					v-if="flag">({{time}})</i></button>
		</view>
		<view class="phone_ts">
			我们已经向您手机号{{phone}}发送了验证
		</view>
		<button class="next" @tap="Next()">下一步</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				time: 5,
				verify: '',
				flag: false,
			}
		},
		onLoad(option) {
			this.phone = option.tel || ''
			this.Open_an()
		},
		methods: {
			Open_an() {
				if (this.flag) return
				this.flag = true
				let time = setInterval(() => {
					if (this.time == 0) {
						this.flag = false
						this.time = 5
						clearInterval(time)
					}
					this.time--
				}, 1000)
			},

			Next() {
				if (this.verify === '123456') {
					uni.switchTab({
						url: '/pages/index/index'
					})
				} else {
					uni.showToast({
						title: '验证码错误，请重新填写！'
					})
				}

			}
		}
	}
</script>

<style scoped lang="less">
	.phone_cont {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;

		.phone {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			float: left;
			border-bottom: 2rpx solid #ccc;

			view {
				width: 180rpx;
				font-size: 30rpx;
			}

			input {
				width: calc(100% - 110rpx);
				margin-left: 10rpx;
			}

			button {
				width: 400rpx;
				height: 70rpx;
				background: #49bdfb;
				border-radius: 50rpx;
				line-height: 70rpx;
				color: #fff;
				font-size: 30rpx;

				i {
					font-style: initial;
				}
			}

			.disable {
				background: #ccc;
				color: #434343;
			}
		}

		.next {
			width: 100%;
			height: 70rpx;
			background: #49bdfb;
			border-radius: 50rpx;
			line-height: 70rpx;
			color: #fff;
			margin: 20rpx 0;
			float: left;


		}

		.phone_ts {
			width: 100%;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			a {
				color: #49bdfb;
			}
		}
	}
</style>
