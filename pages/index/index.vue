<template>
	<view class="content">
		<view class="header">
			<view class="header_time">{{header.time}}</view>
			<image class="header_name" :src="`../../static/images/login/${header.icon}`"></image>
			<view class="header_user">当前用户：{{userInfo.CustomerName}}</view>
		</view>

		<view class="index_cont">
			<view class="map_cont">
				<!-- 地图 -->
				<view class="map" id="index_map"></view>
				<!-- 预警 -->
				<view class="map_warning"></view>

				<!-- 地图操作栏 -->
				<view class="map_action"></view>

				<!-- 降水操作栏 -->
				<view class="pre_action"></view>

				<!-- 雷达操作栏 -->
				<view class="radar_action"></view>

				<!-- 决策 -->
				<view class="map_action"></view>
			</view>

			<!-- 操作栏 -->
			<view class="index_action">

				<!-- 天气实况 -->
				<view class="action_actually">
					<view class="actually_cont">

					</view>
					<view class="active_title">
						<text>天气实况</text>
					</view>
				</view>

				<!-- 降水分布 -->
				<view class="action_precipitation">
					<view class="precipitation_cont"></view>
					<view class="active_title">
						<text>降水分布</text>
					</view>
				</view>

				<!-- 天气预报 -->
				<view class="action_prediction">
					<view class="prediction_cont"></view>
					<view class="action_nav">
						<view @click="Nav_Action(index)" v-for="(item,index) in action_nav" :key="item.id"
							:class="`action_title ${action_nav_index == index ? 'active':''}`">
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Weather from '@/static/javascript/wrather.js'
	export default {
		data() {
			return {
				userInfo: {},
				header: {
					time: '',
					icon: 'login_name.png',
				},

				weather_list: {},


				// 操作栏
				action_nav_index: 0,
				action_nav: [{
					id: 'nav1',
					name: '天气预报'
				}, {
					id: 'nav2',
					name: '滚动预报'
				}],

			}
		},
		components: {

		},
		onLoad() {
			this.userInfo = this.$store.state.user.userInfo
			this.GetTime()
			this.GetInit()
		},
		onReady() {

		},
		methods: {
			// 获取当前时间
			GetTime() {
				var dt = new Date()
				const y = dt.getFullYear() //年
				const m = (dt.getMonth() + 1 + '').toString().padStart(2, '0'); //月
				const d = dt.getDate().toString().padStart(2, '0'); //日
				const h = dt.getHours().toString().padStart(2, '0'); //小时
				const mm = dt.getMinutes().toString().padStart(2, '0'); //分
				const weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
				const day = dt.getDay();

				this.header.time = `${y}年${m}月${d}日 ${weeks[day]} ${h}:${mm}`
			},

			// 获取数据
			GetInit() {
				this.GetActually()
			},

			// 获取天气实况
			GetActually() {
				this.$http.get(
						`/api/Customer/GetNowWeatherAndRain?longitude=${this.userInfo.Lng}&latitude=${this.userInfo.Lat}`
					)
					.then(res => {
						console.log(res.Data);
						let phe_code = res.Data.Factor.find(m => m.Factor == 1024)
						this.weather_list.phe = Weather.getWeatherCode(phe_code)
						this.weather_list.tem = res.Data.Factor.find(m => m.Factor == 8)
						this.weather_list.hum = res.Data.Factor.find(m => m.Factor == 32)
						this.weather_list.pre = res.Data.Factor.find(m => m.Factor == 256)
						this.weather_list.win_s = res.Data.Factor.find(m => m.Factor == 64)
						this.weather_list.win_d = res.Data.Factor.find(m => m.Factor == 128)

						console.log(Weather.getWeatherCode(phe_code));
					})
			},

			// 切换action 菜单
			Nav_Action(index) {
				this.action_nav_index = index
			},

		},
	}
</script>

<style scoped>
	@import url('@/static/css/index.css');
</style>
