<template>
	<div>
		<a href='/user'>
			<img src='static/image/dota.jpg' alt='dota'>
		</a>
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
	</div>
</template>

<script>

export default {
	components:{ },
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
			// 这里用全局绑定的方法来获取数据	
			this.$axios.get('https://cnodejs.org/api/v1/topics', null, r => {
				this.list = r.data	
			})
		},		
	},
}
</script>

