export default {
	state: {
		cart_data: [{
			store_name: '****精品店铺',
			store_icon: 'my-active.png',
			checked: false,
			page_list: [{
				id: '0001',
				checked: false,
				com_name: '天王（TIAN WANG）手表男 情人节礼物昆仑系列钢带商务机械男表白色GS5876S.D.S.W',
				com_img: '1.jpg',
				com_color: '玫瑰金色',
				com_price: '1369.00',
				com_num: 1,
			}, {
				id: '0002',
				checked: false,
				com_name: '艾米龙(Emile Chouriet)瑞士手表智慧三问表金表手动机械表男表礼物',
				com_img: '2.jpg',
				com_color: '金色',
				com_price: '1489000.00',
				com_num: 1,
			}, {
				id: '0003',
				checked: false,
				com_name: '诺曼纳 Normana Chateau 城堡系列陀飞轮多功能瑞士男表10004',
				com_img: '3.jpg',
				com_color: '金色',
				com_price: '730600.00',
				com_num: 1,
			}, {
				id: '0004',
				checked: false,
				com_name: '劳力士(Rolex)瑞士手表 宇宙计型迪通拿系列机械腕表M116508-0013',
				com_img: '1.jpg',
				com_color: '金色',
				com_price: '646500.00',
				com_num: 1,
			}]
		}, {
			store_name: '小腰金官方旗舰店',
			store_icon: 'my.png',
			checked: false,
			page_list: [{
				id: '0005',
				checked: false,
				com_name: '小腰金 凤穿牡丹花项链夸张豪华新娘结婚首饰黄金五金嫁妆手镯耳环戒指结婚订婚高端金饰 足金凤穿牡丹花项链套链约472克（定金）下单咨询',
				com_img: '1.jpg',
				com_color: '玫瑰金色',
				com_price: '1369.00',
				com_num: 1,
			}, {
				id: '0006',
				checked: false,
				com_name: '小腰金 黄金项链男士足金实心9999足金十字链粗款生日礼物送老公定制传承古法手工定制结婚订婚三金礼 黄金项链可定制克重42至300克',
				com_img: '2.jpg',
				com_color: '金色',
				com_price: '1489000.00',
				com_num: 1,
			}, {
				id: '0007',
				checked: false,
				com_name: '小腰金 999足金蛇骨链宽扁款叠戴黄金项链女ins简约风格足金套链不含吊坠传承古法手工定制礼物送女朋 宽扁蛇骨链项链约7.2克长35加7cm',
				com_img: '3.jpg',
				com_color: '金色',
				com_price: '730600.00',
				com_num: 1,
			}, {
				id: '0008',
				checked: false,
				com_name: '小腰金 老板黄金项链侧身链男士9999足金坦克链长款实心2022新款时尚送女朋友送老婆礼物 页面图足金侧身项链约50克长72cm',
				com_img: '1.jpg',
				com_color: '金色',
				com_price: '646500.00',
				com_num: 1,
			}]
		}],

		sta_data: {
			sta_checked: false,
			sta_num: 0,
			sta_freight: false,
			sta_pic: '1515.00'
		},

		SelectAll: [],
	},
	mutations: {
		// 父元素全选
		SelectAll(state) {
			state.sta_data.sta_checked = !state.sta_data.sta_checked
			let data = state.cart_data.map((item) => {
				return {
					...item,
					checked: state.sta_data.sta_checked
				}
			})

			state.cart_data = data
			let check = !state.sta_data.sta_checked
			state.cart_data.forEach((item, index) => {
				this.commit('SelectChildAll', {
					code: check,
					index: index
				})
			})
		},

		// 子元素全选
		SelectChildAll(state, code) {
			// 控制子级
			state.cart_data[code.index].checked = !code.code
			let page = state.cart_data[code.index].page_list.map(item => {
				return {
					...item,
					checked: state.cart_data[code.index].checked
				}
			})
			state.cart_data[code.index].page_list = page


			// 控制父级
			let fa = state.cart_data.map((item, index) => {
				return item.checked
			})
			state.sta_data.sta_checked = fa.every(val => val == true)
		},


		// 孙元素选择
		SelectSunAll(state, code) {
			// 改变自身
			state.cart_data[code.index].page_list[code.Cindex].checked = !code.code

			// 遍历改变父元素
			let child = state.cart_data[code.index].page_list.map((item, index) => {
				return item.checked
			})
			state.cart_data[code.index].checked = child.every(val => val == true)

			// 控制祖宗级
			let fa = state.cart_data.map((item, index) => {
				return item.checked
			})
			state.sta_data.sta_checked = fa.every(val => val == true)
		},

		// 总价
		SelectPrice(state, code) {
			state.sta_data.sta_pic = code.pic.toFixed(2)
			state.sta_data.sta_num = code.num
		},

		// 改变当前个数
		SelectUnumber(state, code) {
			console.log(code);
			state.cart_data[code.index].page_list[code.Cindex].com_num = code.num
		},

		// 删除选中
		RemoveItem(state) {
			let data = state.cart_data.map((item, index) => {
				let child = item.page_list.filter(item1 => {
					if (!item1.checked) return item1
				})
				return {
					...item,
					page_list: child
				}
			})

			console.log(data);
			state.cart_data = data
		},

		AddItem(state, code) {
			state.cart_data.unshift(code)
		}
	},
	actions: {

	},
	getters: {

	}
}
