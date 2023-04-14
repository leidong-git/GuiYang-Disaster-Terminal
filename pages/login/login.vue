<template>
	<view class="login_content">
		<view class="login_title">登录</view>
		<view class="login_k">
			<view class="login_row">
				<view class="row_name">名称</view>
				<input v-model="loginInfo.name" placeholder="请输入登录名称" />
			</view>
			<view class="login_row">
				<view class="row_name">密码</view>
				<input v-model="loginInfo.pwd" placeholder="请输入登录名称" />
			</view>
			<view class="login_row">
				<view class="row_name">验证码</view>
				<input v-model="loginInfo.v_code" placeholder="请输入登录名称" />
				<view class="code-img-wrapper" @click="UpdateImageCode">
					<canvas style="width:150rpx; height:85rpx;" canvas-id="canvas"></canvas>
				</view>
			</view>
			<view class="login_row">
				<button @click="Login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		Mcaptcha
	} from '@/static/javascript/mcaptcha.js'
	export default {
		data() {
			return {
				loginInfo: {
					LoginName: '',
					Password: '',
					VerifyCode:''
				},
				rules: {
					name: {
						rule: /\s*\S+?/,
						msg: '登录名称不能为空！'
					},
					pwd: {
						rule: /^[0-9a-zA-Z]{6,16}$/,
						msg: '密码应该为6-16位字符'
					}
				}
			}
		},
		onReady() {
			this.mcaptcha = new Mcaptcha({
				el: 'canvas',
				width: 80,
				height: 35,
				createCodeImg: ""
			});
		},
		methods: {
			// 刷新验证码
			UpdateImageCode() {
				this.mcaptcha.refresh()
			},

			// 登录
			Login() {
				if (!this.Verify('name')) return
				if (!this.Verify('pwd')) return
				if (!this.loginInfo.VerifyCode) {
					return uni.showToast({
						title: '请输入图形验证码'
					})
				}
				let validate = this.mcaptcha.validate(this.loginInfo.VerifyCode)
				if (!validate) {
					return uni.showToast({
						title: '图形验证码错误'
					})
				}
				
				uni.showLoading({
					title: '登录中',
					icon: 'success',
				})
				
				setTimeout(() => {
					if (this.loginInfo.name != 'admin') return uni.showToast({
						title: '登录失败，用户名错误！'
					})
					if (this.loginInfo.pwd != '123456') return uni.showToast({
						title: '登录失败，密码错误错误！',
					})
					
					this.loginInfo.token = 'token=savasjviahvhasvhaivhaisvhaisvhaisvhas'
					this.loginInfo.icon = '1.jpg'
					
					this.$store.commit('Login',this.loginInfo)
					uni.showToast({
						title: '登录成功！',
					})
					
					uni.navigateBack({
							delta: 1,
						})
				}, 2000)
			},

			// 验证
			Verify(key) {
				let Bool = true
				if (!this.rules[key].rule.test(this.loginInfo[key])) {
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

<style lang="less" scoped="scoped">
.login_cont {
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: 50% 50%;
	display: flex;
	align-items: center;
	position: relative;

	.go_register {
		position: absolute;
		top: 50rpx;
		left: 0;
		width: 100%;
		height: 70rpx;
		justify-content: center;
		display: flex;
		color: #fff;
		font-size: 28rpx;
		align-items: center;
		text-shadow: 0 0 5px #000;

		i {
			font-size: 35rpx;
			margin-right: 10rpx;
		}
	}

	.login_content {
		width: calc(100% - 100rpx);
		margin: 0 50rpx;
		padding: 40rpx 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: rgba(255, 255, 255, 0.4);
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
		border-radius: 10rpx;

		.login_title {
			width: 100%;
			height: 100rpx;
			font-size: 35rpx;
			line-height: 100rpx;
			color: #000;
			text-align: center;
		}

		.login_row {
			display: flex;
			height: 85rpx;
			align-items: center;
			flex-direction: row;
			font-size: 30rpx;

			input {
				width: calc(100% - 290rpx);
				margin-left: 20rpx;
			}

			.row_name {
				width: 110rpx;
				text-align: right;
				display: inline-block;
			}

			button {
				width: 50%;
				margin: 0 25%;
				background: #49bdfb;
				color: #fff;
				font-size: 30rpx;
				height: 70rpx;
				border: 0;
				margin-top: 25rpx;
			}
		}
	}
}
</style>
