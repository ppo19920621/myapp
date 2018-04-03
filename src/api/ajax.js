// axios封装

import axios from 'axios'
import { filterNull } from './utils'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';


function apiAxios(method, url, params, success){
	if(params){
		params = filterNull(params)
	}
	axios({
		method:method,
		url:url,
		data:method === 'POST' || method === 'PUT' ? params:null,
		params:method === 'GET' || method === 'DELETE' ? params:null,
		baseURL:baseURL,
		withCredentials:false
	})
	.then(function(res){
		console.log(res.data)
		if(success){
			success(res.data)
		}
	})
	.catch(function(err){
		let res = err.response
		if(err){
			window.alert('api error,HTTP CODE:'+res.status)
		}
	})
}

export default{
	get:function(url, params, success){
		return apiAxios('GET', url, params, success)
	},
	post:function(url, params, success){
		return apiAxios('POST', url, params, success)
	},
	put:function(url, params, success){
		return apiAxios('PUT', url, params, success)
	},
	delete:function(url, params, success){
		return apiAxios('DELETE', url, params, success)
	}
}

