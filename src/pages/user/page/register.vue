<template>
	<div>
		<Header></Header>
		<div class='register_box'>
			<form id='register_form' novalidate='novalidate'>
				<h3>用户注册</h3>
				<label>用户名：</label>
				<input type='text' v-model='account' />
				<br />
				<label>密  码：</label>
				<input type='password' v-model='pwd' />
				<br />
				<label>重复密码：</label>
				<input type='password' v-model='re_pwd' />
				<br />
				<button type='button' @click='register'>注册</button>
				<router-link to='/login' >去登录</router-link>
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
			accoutn:'',
			pwd:'',
			re_pwd:''
		}
	},
	created(){
	
	},
	methods:{
		register: function(){
			let req = { account:this.account, pwd:this.pwd, re_pwd:this.re_pwd};
			this.$axios.post('/user/register', req, r => {
				if(r.result === 0){
					localStorage.change_time = Date.now();
					localStorage.user = JSON.stringify(r.info);
					this.$store.commit('updateUser', r.info);
					this.$router.push('/')
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
