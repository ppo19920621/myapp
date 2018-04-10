<template>
	<div>
		<Header></Header>
		<Chat :name='user.uid' roomid='test' ref='chat'></Chat>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Chat from '@/components/chat.vue'
import { mapGetters } from 'vuex'

export default {
	components:{ Header,Footer,Chat },
	data(){
		return {
			roomid:'',
		}
	},
	computed:{
		...mapGetters([
			'user',
		])		 
	},
	created(){
		// 组件创建完后获取用户数据
	},
	methods:{
		
	},
}
</script>

