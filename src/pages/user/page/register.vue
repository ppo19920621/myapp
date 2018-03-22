<template>
	<div>
		<Header></Header>
		<div class='register_box'>
			<form id='register_form' novalidate='novalidate' >
				<h3>用户注册</h3>
				<label>用户名：</label>
				<input type='text' name='account' value='' />
				<br />
				<label>密  码：</label>
				<input type='password' name='pwd' value='' />
				<br />
				<label>重复密码：</label>
				<input type='password' name='re_pwd' value='' />
				<br />
				<button type='button' @click='register'>注册</button>
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
		return {}
	},
	created(){
	
	},
	methods:{
		register: function(){
			let form = document.querySelector('#register_form');
			let account = form.account.value;
			let pwd = form.pwd.value;
			let re_pwd = form.re_pwd.value;
			this.$api.post('/user/register',{ account:account, pwd:pwd, re_pwd:re_pwd}, r => {
				console.log(r);
				if(r.result === 0){
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
