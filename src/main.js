// 引用vue 
import Vue from 'vue'
// 入口文件为src/App.vue 文件 
import App from './App'
import router from './router'

// 引用api文件
import api from './api/index.js'
// 将api方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件并绑定到全局
import utils from './utils/index.js'
Vue.prototype.$utils = utils

Vue.config.productionTip = false

// 配置百度编辑器
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'

// 跑起来
new Vue({
	el:'#app',
	router,
	template:'<App/>',
	components: { App }
})
