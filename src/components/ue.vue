<template>
	<div>
		<script id='editor' type='text/plain'></script>
	</div>
</template>

<script>

export default{
	name:'ue',
	data(){
		return {
			editor:null
		}
	},
	props:{
		value:'',
		config:{}
	},
	mounted(){
		const _this = this
		let js_list = [
			'static/ue/ueditor.config.js',
			'static/ue/ueditor.all.min.js',
			'static/ue/lang/zh-cn/zh-cn.js',
			'static/ue/ueditor.parse.min.js'
		]
		this.$utils.getJS(js_list).then(() => {
			_this.editor = window.UE.getEditor('editor', _this.config)
			_this.editor.addListener('ready',function(){
				_this.editor.setContent(_this.value)		
			})
		}).catch(e => console.log(e))	
	},
	methods:{
		getUEContent(){
			return this.editor.getContent()
		}
	},
	destroyed(){
		this.editor.destroy()
	}
}

</script>
