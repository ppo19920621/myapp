<template>
	<div>
		<div id='chat'></div>
	</div>
</template>

<script src='static/js/test.js'></script>
<script>
import { getJS } from '@/api/utils.js'

export default{
	name:'chat',
	data(){
		return {
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
			let socket = io('http://192.168.0.60:8000');
			socket.on('news', data => {
				console.log('data');
				socket.emit('my other event', { my:'data', name:_this.name} );
			});
		}).catch(e => console.log(e))
	},
	methods:{
	},
	destroyed(){
	}
}

</script>
