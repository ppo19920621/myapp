<template>
	<div>
		<Header></Header>
		<div class='login_box'>
			<form id='login_form' novalidate='novalidate'>
				<h3>用户登录</h3>
				<label>用户名：</label>
				<input type='text' name='account' value='' />
				<br />
				<label>密  码：</label>
				<input type='password' name='pwd' value='' />
				<br />
				<button type='button' @click='login'>登录</button>
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
		login: function(){
			let form = document.querySelector('#login_form');
			let account = form.account.value;
			let pwd = form.pwd.value;
			this.$api.post('/user/login',{ account:account, pwd:pwd}, r => {
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
