import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state:{
		login: false,
		user: {}
	},
	getters:{
		user:(state) => state.user,
		login:(state) => state.login
	},
	mutations:{
		updateUser (state, user){
			state.login = true;
			state.user = user
		}	
	},
	actions:{
	},
	stricr: debug,
	plugins: debug ? [createLogger()] : []
})
