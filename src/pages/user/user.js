// 引用vue 
import Vue from 'vue'
// 入口文件为vue 文件 
import App from './user.vue'
import router from './router'

import store from './store'


// 引用api文件
import axios from '@/api/ajax.js'
// 将api方法绑定到全局
Vue.prototype.$axios = axios


Vue.config.productionTip = false


// 跑起来
new Vue({
	el:'#app',
	router,
	store,
	template:'<App/>',
	components: { App }
})
