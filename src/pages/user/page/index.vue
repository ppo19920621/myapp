<template>
	<div>
		<Header></Header>
		<img src='/static/image/dota.jpg' alt='dota'>
		<h3>个人资料</h3>
		<div v-for='(value, key) in user'>{{key}}:{{value}}</div>
		<button type='button' @click='layout'>登出</button>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { mapGetters } from 'vuex'

export default {
	components:{ Header,Footer},
	data(){
		return {
		}
	},
	computed:{
		...mapGetters([
			'user',
			'login'
		])		 
	},
	created(){
		// 组件创建完后获取用户数据
		this.getUser();
	},
	methods:{
		getUser(){
			console.log('getUser')
			this.$store.dispatch('updateUser')
				.then(r => {
					if(!this.login){
						alert('未登录')
						this.$router.push('/login');
					}
				})
				.catch(e => console.error(e))
		},
		layout(){
			console.log('layout');
			this.$axios.get('/user/layout', null, r => {
				if(r.result === 0){
					localStorage.removeItem('change_time');
					localStorage.removeItem('user');
					this.$store.commit('removeUser');
					alert('登出成功！');
					this.$router.go(0);
				}else{
					alert(r.searon);
				}
			});
		},
	},
}
</script>

