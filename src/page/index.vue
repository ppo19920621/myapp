<template>
	<div>
		<Header></Header>
		<img src='static/image/dota.jpg' alt='dota'>
		<div class='article_list'>
			<ul>
				<li v-for='i in list'>
					<time v-text='$utils.goodTime(i.create_at)'></time>
					<router-link :to="'/content/'+i.id">
						{{i.title}}
					</router-link>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
	components:{ Header,Footer},
	data(){
		return {
			list:[]
		}
	},
	created(){
		// 组件创建完后获取数据
		this.getData()
	},
	methods:{
		getData(){
			// 这里用全局绑定的$api方法来获取数据	
			this.$api.get('topics', null, r => {
				this.list = r.data	
			})
		},		
	},
}
</script>

