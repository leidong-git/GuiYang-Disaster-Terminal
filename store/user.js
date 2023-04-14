export default {
	state: {
		loginInfo:false,
		userInfo:{
			
		}
	},
	mutations: {
		Login(state,code){
			state.userInfo = code
			state.loginInfo = true
			uni.setStorageSync('userInfo',JSON.stringify(code))
		},
		
		LoginOut(state){
			console.log(11);
			state.userInfo = {}
			state.loginInfo = false
			uni.removeStorageSync('userInfo')
		},
		
		DataInfo(state){
			state.userInfo = JSON.parse(uni.getStorageSync('userInfo') || {})
			console.log(state.userInfo)
		}
	},	
}