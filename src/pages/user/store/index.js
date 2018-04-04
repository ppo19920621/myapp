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
		updateUser (state, user, local=true){
			if(local){
				localStorage.login_time = Date.now();
				localStorage.user = JSON.stringify(user);
			}
			state.login = true;
			state.user = user;
		},
		removeUser (state){
			localStorage.removeItem('login_time');
			localStorage.removeItem('user');
			state.login = false;
			state.user = {};
		}
	},
	actions:{
		getUser({ commit }){
			if(localStorage.login_time && localStorage.login_time > Date.now() - 30*60*1000){
				let info = localStorage.user;
				if(info){
					commit('updateUser', JSON.parse(localStorage.user), false);
				}
			}else{
				axios.get('/user/get_user_info', null, r => {
					if(r.result === 0){
						commit('updateUser', r.info);
					}else{
						localStorage.login_time = Date.now();
					}
				})
			}
		}
	},
	stricr: debug,
	plugins: debug ? [createLogger()] : []
})
