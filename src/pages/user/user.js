// 引用vue 
import Vue from 'vue'
// 入口文件为vue 文件 
import App from './user.vue'
import router from './router'


// 引用api文件
import api from '@/api/index.js'
// 将api方法绑定到全局
Vue.prototype.$api = api


Vue.config.productionTip = false


// 跑起来
new Vue({
	el:'#app',
	router,
	template:'<App/>',
	components: { App }
})
