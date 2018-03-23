<template>
	<div>
		<Header></Header>
		<img src='/static/image/dota.jpg' alt='dota'>
		<h3>个人资料</h3>
		<div v-for='(value, key) in info'>{{key}}:{{value}}</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
	components:{ Header,Footer},
	data(){
		return {
			info:{}
		}
	},
	created(){
		// 组件创建完后获取数据
		this.getData()
	},
	methods:{
		getData(){
			// 这里用全局绑定的$api方法来获取数据	
			this.$api.get('/user/get_user_info', null, r => {
				console.log(r);
				if(r.result === 0){
					this.info = r.info	
					this.$store.commit('updateUser', r.info)
				}else{
					alert(r.reason)
					this.$router.push('/login')
				}
			})
		},		
	},
}
</script>

