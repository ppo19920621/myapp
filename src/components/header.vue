<template>
	<header class='header'>
		<div class='logo'>
			<img src='/static/image/dota.jpg' alt='logo'>
		</div>
		<div class='menu'>
			<dl>房间</dl>

		</div>

		<div class='userinfo'>
			<div v-if='login'>
				<a class="user_link">
					<img src="/static/image/dota.jpg">
					<span>{{user.account}}</span>
				</a>
				<ul class="user_menu">
					<li><router-link :to="{ path:''}" >个人主页</router-link></li>
					<li @click='layout'>退出</li>
				</ul>
			</div>
			<div v-else>
				<router-link :to="{ path:'login'}" >登录</router-link>
				<router-link :to="{ path:'login'}" >注册</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'

	
export default{
	name:'header',
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
	
	},
	methods:{
		layout(){
			console.log('layout');
			this.$axios.get('/user/layout', null, r => {
				if(r.result === 0){
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

<style scoped>
.header{
	position: relative;
	width: 100%;
	height: 70px;
	background: #222b40;
}
.logo{
	position: absolute;
	top: 10px;
	left: 25px;
	width: 50px;
	height: 50px;
	font-size: 0;
}
.logo img{
	width: 100%;
	height: 100%;
}
.menu{
	position: relative;
	margin: 0 100px 0 100px;
	height: 70px;
	line-height: 70px;
	font-size: 0;
	text-align: center;
}
.menu dl{
	position: relative;
	display: inline-block;
	margin:0 10px 0;
	font-size: 18px;
	color: #fff;
}
.userinfo{
	position: absolute;
	top:10px;
	right: 25px;
	width: 75px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #fff;
}



</style>
