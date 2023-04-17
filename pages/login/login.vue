<template>
	<view class="login_cont">
		<!-- header -->
		<view class="header">
			<image :src="`../../static/images/login/${login_header.name}`" />
		</view>
		<view class="login_content">
			<view class="login_title">用户登录</view>
			<view class="login_k">
				<view class="login_row">
					<i class="iconfont icon-dengluyonghuming"></i>
					<input v-model="loginInfo.LoginName" placeholder="请输入登录名称" />
				</view>
				<view class="login_row">
					<i class="iconfont icon-mima"></i>
					<input v-model="loginInfo.Password" placeholder="请输入密码" />
				</view>
				<view class="login_row">
					<i class="iconfont icon-yanzhengma"></i>
					<input v-model="loginInfo.VerifyCode" placeholder="请输入验证码" />
					<view class="code-img-wrapper" @click="UpdateImageCode">
						<canvas class="code_canvas" canvas-id="canvas"></canvas>
					</view>
				</view>
				<view class="login_row">
					<button @click="Login">登录</button>
				</view>
			</view>
		</view>

		<view class="login_footer">
			<text>版权所有：贵州云海气象科技服务有限责任公司 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：14785089385</text>
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
				login_header: {
					name: 'login_name.png'
				},
				loginInfo: {
					LoginName: 'gysqxj001',
					Password: 'qwer1234',
					VerifyCode: ''
				},
				rules: {
					LoginName: {
						rule: /\s*\S+?/,
						msg: '登录名称不能为空！'
					},
					Password: {
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
				if (!this.Verify('LoginName')) return
				if (!this.Verify('Password')) return
				if (!this.loginInfo.VerifyCode) {
					return uni.showToast({
						title: '请输入验证码'
					})
				}
				let validate = this.mcaptcha.validate(this.loginInfo.VerifyCode)
				if (!validate) {
					return uni.showToast({
						title: '验证码错误'
					})
				}

				uni.showLoading({
					title: '登录中',
					icon: 'success',
				})

				console.log(this.$http);

				this.$http.get(
						`api/Customer/GetCustomer?LoginName=${this.loginInfo.LoginName}&Password=${this.loginInfo.Password}`
					)
					.then(res => {
						this.$store.commit('Login', res.Data)

						uni.showToast({
							title: '登录成功！',
						})

						uni.hideToast()

						// 跳转首页
						uni.navigateTo({
							url: `/pages/index/index`
						})
					})

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
		background: url('../../static/images/login/login_bg.png') no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		position: relative;
		display: flex;
		align-content: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 100rpx 0;
		box-sizing: border-box;

		.header {
			width: 100%;
			height: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 1360rpx;
				height: 140rpx;
			}

		}

		.login_content {
			width: 900rpx;
			height: auto;
			margin: 0 auto;
			padding: 0rpx 70rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
			border-radius: 40rpx;
			margin-top: 120rpx;

			.login_title {
				width: 100%;
				height: 140rpx;
				font-size: 50rpx;
				line-height: 140rpx;
				color: #222222;
				text-align: center;
				letter-spacing: 2px;
			}

			.login_k {
				width: 100%;
				height: auto;

				.login_row {
					display: flex;
					height: 110rpx;
					align-items: center;
					font-size: 30rpx;
					margin-bottom: 40rpx;
					position: relative;

					input {
						width: 100%;
						height: 100%;
						border-radius: 50px;
						background: #fcfcfc;
						border: 1px solid #ededed;
						box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.1);
						padding-left: 100rpx;
						line-height: 120rpx;
					}

					.iconfont {
						width: 50rpx;
						height: 50rpx;
						font-size: 50rpx;
						color: #bebebe;
						position: absolute;
						left: 30rpx;
						top: 50%;
						transform: translate(0, -50%);
					}

					button {
						width: 100%;
						border-radius: 50px;
						background-image: linear-gradient(to right, #26d0ff, #00a8ff);
						color: #fff;
						font-size: 40rpx;
						height: 110rpx;
						line-height: 110rpx;
						border: 0;
						letter-spacing: 5px;
					}

					.code-img-wrapper {
						width: 500rpx;
						height: 100%;
						border-radius: 2px;
						box-sizing: border-box;
						border: 1px solid #ededed;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 40rpx;
						box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);

						.code_canvas {
							width: 100%;
							height: 100%;
						}
					}
				}

				.login_row:hover input,
				.login_row:focus input {
					border: 1px solid #00a8ff;
				}

				.login_row:hover .iconfont,
				.login_row:focuss .iconfont {
					color: #00a8ff;
				}

				.login_row:last-child {
					margin: 100rpx auto;
				}
			}
		}

		.login_footer {
			width: 100%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 250rpx;
			position: absolute;
			top: auto;
			right: 0;
			bottom: 60rpx;
			left: 0;

			text {
				color: #fff;
				text-shadow: 0px 0px 10px #0040bc;
			}
		}
	}
</style>
