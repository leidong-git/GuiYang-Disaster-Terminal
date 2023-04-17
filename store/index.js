import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "../store/vuex-persistedstate.js";

Vue.use(Vuex)

import user from './user.js'

export default new Vuex.Store({
	modules: {
		user,
	},
	plugins: [
		createPersistedState({
			// 存储方式
			storage: window.localStorage,
			key: 'userinfo',
			reducer(state) {
				return {
					...state
				}
			}

		}),
	],
})
