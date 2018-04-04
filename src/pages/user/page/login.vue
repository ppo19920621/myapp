<template>
	<div>
		<Header></Header>
		<div class='login_box'>
			<form id='login_form' novalidate='novalidate'>
				<h3>用户登录</h3>
				<label>用户名：</label>
				<input type='text' v-model='account' />
				<br />
				<label>密  码：</label>
				<input type='password' v-model='pwd' />
				<br />
				<button type='submit' @click='login'>登录</button>
				<router-link :to="{ path:'register', query:{ redirect:redirect}}" >去注册</router-link>
			</form>
		</div>
		<Footer></Footer>
	</div>

</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
	components:{ Header, Footer},
	data(){
		return {
			redirect: decodeURIComponent(this.$route.query.redirect || '/'),
			account:'',
			pwd:''
		}
	},
	created(){
	
	},
	methods:{
		login: function(e){
			e.preventDefault();
			let req = { account:this.account, pwd:this.pwd}; 
			this.$axios.post('/user/login', req, r => {
				if(r.result === 0){
					this.$store.commit('updateUser', r.info);
					this.$router.push({
						path: this.redirect		
					});
				}else{
					alert(r.reason)
				}
			});
		}
	},
}

</script>

<style scoped>

</style>
