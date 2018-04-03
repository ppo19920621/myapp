import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import axios from '@/api/ajax.js'

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
			state.user = user;
		},
		removeUser (state){
			state.login = false;
			state.user = {};
		}
	},
	actions:{
		updateUser({ commit }){
			if(localStorage.change_time && localStorage.change_time > Date.now() - 30*60*1000){
				let info = localStorage.user;
				if(info){
					commit('updateUser', JSON.parse(localStorage.user));
				}
			}else{
				axios.get('/user/get_user_info', null, r => {
					if(r.result === 0){
						localStorage.change_time = Date.now();
						localStorage.user = JSON.stringify(r.info);
						commit('updateUser', r.info);
					}else{
						localStorage.change_time = Date.now();
					}
				})
			}
		}
	},
	stricr: debug,
	plugins: debug ? [createLogger()] : []
})
