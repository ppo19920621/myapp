<template>
	<div>
		<div class='roominfo'>
			房间：{{roomid}}
			在线人数：{{member_list.length}}
			在线人员：{{member_list}}
		</div>
		<div id='msglog'></div>
		<textarea id='msg' v-model='msg' placeholder='请输入你要发的信息'></textarea>
		<button type='button' @click='sendMsg'>发送</button>
	</div>
</template>

<script>
import { getJS } from '@/api/utils.js'

export default{
	name:'chat',
	data(){
		return {
			socket:null,
			member_list:[],	
			msg:'',
		}
	},
	props:{
		name:'',
		roomid:'',
	},
	mounted(){
		const _this = this
		let js_list = [
			'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js',
		]
		getJS(js_list).then(() => {
			_this.start();
		}).catch(e => console.log(e))
	},
	methods:{
		start(){
			let socket = io('http://192.168.0.60:8000');
			this.socket = socket;
			socket.on('open', data => {
				console.log('ws open');
				socket.emit('join', { name:this.name, roomid:this.roomid });
			});

			socket.on('join', data => {
				//其他人加入
				console.log('join');
				console.log(data);
				let l = this.member_list.indexOf(data.name);
				if(l === -1){
					this.member_list.push(data.name);
				}
			});

			socket.on('leave', data => {
				//其他人离开房间
				console.log('leave');
				console.log(data);
				let l = this.member_list.indexOf(data.name);
				if(l !== -1){
					this.member_list.splice(l,1);
				}
			});

			socket.on('roominfo', data => {
				//进入房间并获得房间信息
				console.log('roominfo');
				console.log(data);
				this.member_list = data.users;
			});

			socket.on('msg', data => {
				//收到信息
				console.log('msg');
				console.log(data);
				let html = '<div>'+data.name+': '+data.msg+'</div>';
				document.getElementById('msglog').innerHTML += html;
			});
			
		},
		sendMsg(){
			this.socket.send(this.msg);
			this.msg = '';
		},
	},
	destroyed(){
	}
}

</script>

<style scoped>

</style>
