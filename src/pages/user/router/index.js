import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:'/',
			meta:{
				requireAuth: true,
			},
			component: resolve => require(['../page/index.vue'], resolve)
		},{
			path:'/register',
			component: resolve => require(['../page/register.vue'], resolve)
		},{
			path:'/login',
			component: resolve => require(['../page/login.vue'], resolve)
		},{
			path:'/chat',
			meta:{
				requireAuth: true,
			},
			component: resolve => require(['../page/chat.vue'], resolve)
		}
	],
})

//页面刷新时，重新赋值给store
store.dispatch('getUser');

//导航拦截器，做登录拦截
router.beforeEach((to, from, next) => {
	console.log('tiao');
	console.log(to, from);
	if(to.matched.some(r => r.meta.requireAuth)){
		if(store.state.login){
			next();
		}else{
			alert('未登录！');
			next({
				path:'/login',
				query:{redirect: to.fullPath}
			});
		}
	}else{
		next();
	}

})

export default router
