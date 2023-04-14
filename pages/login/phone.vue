<template>
	<view class="phone_cont">
		<view class="phone">
			<view>手机号</view>
			<input v-model="phone" type="number" maxlength="11" placeholder="请输入手机号" />
		</view>

		<button @tap="Next()">下一步</button>
		<view class="phone_ts">
			继续注册表示你同意<a>《***用户守则》</a>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				rules: {
					phone: {
						rule: /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,
						msg: '手机号输入错误！'
					}
				}
			}
		},
		methods: {
			Next() {
				if (!this.Verify('phone')) return
				uni.showToast({
					title: '下一步'
				})
				uni.navigateTo({
					url: `/pages/login/verify?tel=${this.phone}`
				})
			},

			// 验证
			Verify(key) {
				let Bool = true
				if (!this.rules[key].rule.test(this[key])) {
					uni.showToast({
						title: this.rules[key].msg
					})
					Bool = false
					return false
				}
				return Bool
			},
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
				width: 100rpx;
				font-size: 30rpx;
			}

			input {
				width: calc(100% - 110rpx);
				margin-left: 10rpx;
			}
		}

		button {
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
