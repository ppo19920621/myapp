import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			component: resolve => require(['@/page/index.vue'], resolve)
		},{
			path:'/content/:id',
			component: resolve => require(['@/page/content.vue'], resolve)
		},{
			path:'/ue',
			component: resolve => require(['@/page/ue_test.vue'], resolve)
		}
	]
})
