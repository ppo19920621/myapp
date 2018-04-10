<template>
	<header class='header' >
		<div class='logo'>
			<img src='static/image/dota.jpg' alt='logo'>
		</div>
		<div class='menu'>
			<dl><a href='/'>首页</a></dl>
			<dl><router-link :to="{ path:'chat'}" >房间</router-link></dl>

		</div>

		<div class='userinfo'>
			<div v-if='login'>
				<a class="user_link" href="javascript:;" @click='show'>
					<img src="static/image/dota.jpg">
					<span>{{user.account}}</span>
				</a>
				<div class="user_menu" >
					<dl><router-link :to="{ path:'/'}" >个人主页</router-link></dl>
					<dl><a href="javascript:;" @click='layout'>退出</a></dl>
				</div>
			</div>
			<div v-else class="before_login">
				<router-link :to="{ path:'login'}" >登录</router-link>
				or
				<router-link :to="{ path:'register'}" >注册</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'

	
export default{
	name:'head',
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
		show(e){
			let obj = document.querySelectorAll('.user_link')[0];

			if(obj.getAttribute('show') === null){
				obj.setAttribute('show','true');
			}else{
				obj.removeAttribute('show','true');
			}
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
	margin: 0 150px 0 100px;
	height: 70px;
	line-height: 70px;
	font-size: 0;
	text-align: left;
}
.menu dl{
	position: relative;
	display: inline-block;
	margin:0 10px 0;
	padding:0 10px;
	font-size: 18px;
}
.menu dl a{
	color: #fff;
}
.userinfo{
	position: absolute;
	top: 10px;
	right: 25px;
	width: 100px;
	height: 50px;
	line-height: 50px;
	font-size: 0;
	color: #fff;
}
.user_link {
	position: relative;
	display: block;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.user_link:hover{
	text-decoration: none;
}
.user_link img{
	width: 40px;
	height: 40px;
	border-radius: 20px;
}
.user_link span{

	margin-left: 10px;
	font-size: 14px;
	color: #fff;
	vertical-align: middle;
}
.user_menu{
	display: none;
	position: absolute;
	padding:5px 0;
	top: 55px;
	right: 0;
	width: 100px;
	font-size: 14px;
	color: #586069;
	line-height: 30px;
	background: #fff;
	border:1px solid rgba(27,31,35,0.15);
	border-radius: 5px;
	z-index: 10;
}
[show] + .user_menu{
	display: block;
}
.user_menu:after{
	content: '';
	position: absolute;
	top: -5px;
	left: 15px;
	width: 0;
	height: 0;
	border-bottom:6px solid #fff;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
}
.user_menu dl{
	position: relative;
	margin:0 ;
	text-align: center;
	border-bottom: 1px solid rgba(27,31,35,0.15);
}
.user_menu dl:last-child{
	border-bottom: none;
}
.user_menu a{
	display: block;
	color: inherit;
}
.user_menu a:hover{
	text-decoration: none;
	background: #0366d6;
	color: #fff;
}
.before_login{
	position: relative;
	font-size: 14px;
	color: #586069 ;
}
.before_login a{
	color: #fff;
}


</style>
