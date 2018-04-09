<template>
	<div>
		<div class='roominfo'></div>
		<div id='msglog'></div>
		<textarea id='msg'></textarea>
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
		}
	},
	props:{
		name:'',
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
			let roomid = 'test';
			socket.on('open', data => {
				console.log('ws open');
				socket.emit('join', { name:this.name, roomid:roomid });
			});

			socket.on('join', data => {
				//其他人加入
				console.log('join');
				console.log(data);
			});

			socket.on('roominfo', data => {
				//进入房间并获得房间信息
				console.log('roominfo');
				console.log(data);
			});

			socket.on('leave', data => {
				//其他人离开房间
				console.log('leave');
				console.log(data);
			});

			socket.on('msg', data => {
				//收到信息
				console.log('msg');
				console.log(data);
			});
			
		},
		sendMsg(){
			let msg = 'send msg test';
			this.socket.send(msg);
		},
	},
	destroyed(){
	}
}

</script>
