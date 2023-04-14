<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<view class="title">
			<view class="iconfont icon-sousuo1" @click="Search()"></view>
			<view class="title_name">
				{{title}}++
			</view>
			<view class="iconfont icon-xinxi1">
			</view>
		</view>
		<!-- #endif -->

		<!-- 导航栏 -->
		<NavigationIndex :nav_list="NavList" :nav_index="NavIndex" @change_navindex="Change_navindex"></NavigationIndex>

		<!-- 屏幕滑动 swiper 切换 -->
		<swiper @change="TabChange" :style="'height:'+swiper_height" :current="NavIndex">
			<swiper-item v-for="(item,index) in NavList" :key="index">
				<scroll-view :style="'height:'+swiper_height" scroll-y="true" v-if="index == 0">
					<!-- 推荐模板 -->
					<IndexSwiper></IndexSwiper>

					<Recommended></Recommended>

					<view class="card_list">
						<view class="card_title">- 猜你喜欢 -</view>
						<CommodityList :commodity_data="commodity_data"></CommodityList>
					</view>

					<view class="card_list">
						<view class="card_title">- 运动户外 -</view>
						<CommodityList :commodity_data="commodity_data"></CommodityList>
					</view>
				</scroll-view>

				<scroll-view :style="'height:'+swiper_height" scroll-y="true" v-if="index != 0">
					<!-- 其他模板 -->
					<view class="card_banner">
						<image class="card_banner_img" src="@/static/image/3.jpg"></image>
					</view>

					<view class="card_list">
						<view class="card_title">- 火爆产品 -</view>
						<CommodityList :commodity_data="commodity_data" itemW="250rpx" itemH="250rpx"></CommodityList>
					</view>

					<view class="card_list">
						<view class="card_title">- 推荐店铺 -</view>
						<view class="card_banner">
							<image class="card_banner_img" src="@/static/image/1.jpg"></image>
						</view>
						<scroll-view scroll-x="true">
							<CommodityList :commodity_data="commodity_data" itemW="250rpx" itemH="250rpx"
								wrap="no-wrap"></CommodityList>
						</scroll-view>
					</view>

					<view class="card_list">
						<view class="card_title">- 推荐店铺1 -</view>
						<view class="card_banner">
							<image class="card_banner_img" src="@/static/image/1.jpg"></image>
						</view>
						<scroll-view scroll-x="true">
							<CommodityList :commodity_data="commodity_data" itemW="250rpx" itemH="250rpx" wrap="nowrap">
							</CommodityList>
						</scroll-view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import NavigationIndex from '@/components/index/NavigationIndex.vue'
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommended from '@/components/index/Recommended.vue'
	import CommodityList from '@/components/public/CommodityList.vue'
	export default {
		data() {
			return {
				title: '首页',
				commodity_data: [{
					img: '1.jpg',
					detail: "新华社北京2月9日电 题:新时代十年伟大变革奠定坚实基础——新征程上满怀信心开新局展新貌系列述评之四 新华社记者谭谟晓、姚均芳、刘羽佳 历经新时代十年伟大变革的中国,站...",
					price: '152.5',
					old_price: '254.3',
					discount: '5.5'
				}, {
					img: '2.jpg',
					detail: "满怀信心踏上新征程 阔步向前续写新篇章 中国共产党第二十次全国代表大会已经召开,大会报告让红谷滩区各界干部群众满怀信心,自信、喜悦和豪迈之情溢于言表。大家畅所欲言,纷...",
					price: '352.5',
					old_price: '654.3',
					discount: '5.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}, ],

				NavIndex: 0,
				NavList: [{
					name: '推荐',
				}, {
					name: '运动户外',
				}, {
					name: '服饰内衣',
				}, {
					name: '鞋靴箱包',
				}, {
					name: '美妆个护',
				}, {
					name: '家居数码',
				}, {
					name: '食品母婴',
				}],

				swiper_height: '800rpx'
			}
		},
		components: {
			IndexSwiper,
			Recommended,
			CommodityList,
			NavigationIndex
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiper_height = res.windowHeight - uni.upx2px(90) - this.Get_type_height() + 'px'
				}
			})
		},
		onReady() {
			// uni.setNavigationBarTitle({
			// 	title: '首页'
			// });

			// uni.setNavigationBarColor({
			// 	frontColor: '#000000', //前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
			// 	backgroundColor: '#f1f1f1', //背景颜色值，有效值为十六进制颜色
			// 	animation: { //动画效果
			// 		duration: 400,
			// 		timingFunc: 'easeIn'
			// 	}
			// })
		},
		methods: {
			// 子组件调用改索引
			Change_navindex(index) {
				console.log(index);
				this.NavIndex = index
			},

			// swiper 滑动
			TabChange(e) {
				this.NavIndex = e.detail.current
			},

			// 获取不同设备的导航栏宽度
			Get_type_height() {
				let type_height = 0;
				let type = uni.getSystemInfoSync().uniPlatform

				if (type === 'web') {
					type_height = uni.upx2px(190)
				} else if (type === 'app') {
					type_height = uni.upx2px(90)
				} else if (type === 'mp-weixin') {
					type_height = uni.upx2px(115)
				} else {
					type_height = 0
				}

				return type_height
			},

			// 跳转搜索界面
			Search() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		},
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.card_list {
		width: 100%;
		height: auto;
		box-sizing: border-box
	}

	.card_title {
		width: 100%;
		display: flex;
		height: 60rpx;
		align-items: center;
		justify-content: center;
		color: #434343;
		font-weight: 600;
		font-size: 30rpx;
		margin: 20rpx 0;
	}

	.card_banner {
		width: 100%;
		height: 400rpx;
	}

	.card_banner_img {
		width: 100%;
		height: 400rpx;
	}

	.tab_cont {
		width: 100%;
		height: 100%;
	}

	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}

	/* #endif */
</style>
