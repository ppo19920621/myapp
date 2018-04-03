// 引用vue 
import Vue from 'vue'
// 入口文件为index.vue 文件 
import App from './index.vue'
import router from './router'

console.log(router)

// 引用api文件
import axios from '@/api/ajax.js'
// 将api方法绑定到全局
Vue.prototype.$axios = axios

// 引用工具文件并绑定到全局
import * as utils from '@/api/utils.js'
Vue.prototype.$utils = utils

Vue.config.productionTip = false


// 跑起来
new Vue({
	el:'#app',
	router,
	template:'<App/>',
	components: { App }
})
