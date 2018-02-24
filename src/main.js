// 引用vue 
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 入口文件为src/App.vue 文件 
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 光引用不成 还要使用
Vue.use(VueRouter)
// 使用配置文件规则
const router = new VueRouter({
	routes
})	
// 跑起来
new Vue({
	router,
	el:'#app',
	render:(h) => h(App)
})
