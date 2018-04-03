export function goodTime (str) {
    let now = new Date().getTime()
    let oldTime = new Date(str).getTime()
    let difference = now - oldTime
    let result = ''
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let month = day * 30
    let year = month * 12
    let _year = difference / year
    let _month = difference / month
    let _week = difference / (7 * day)
    let _day = difference / day
    let _hour = difference / hour
    let _min = difference / minute

    if (_year >= 1) {
      result = '发表于 ' + ~~(_year) + ' 年前'
    } else if (_month >= 1) {
      result = '发表于 ' + ~~(_month) + ' 个月前'
    } else if (_week >= 1) {
      result = '发表于 ' + ~~(_week) + ' 周前'
    } else if (_day >= 1) {
      result = '发表于 ' + ~~(_day) + ' 天前'
    } else if (_hour >= 1) {
      result = '发表于 ' + ~~(_hour) + ' 个小时前'
    } else if (_min >= 1) {
      result = '发表于 ' + ~~(_min) + ' 分钟前'
    } else {
      result = '刚刚'
    }
    return result
}

function _getJS(url){
	console.log('get js file:'+url);
	const promise = new Promise(function(resolve, reject){
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.defer = true;
		if(script.readyState){
			script.onreadystatechange = function(){
				if(script.readyState == 'loaded' || script.readyState == 'complete'){
					script.onreadystatechange = null;
					resolve(this);
				}
			}
		}else{
			script.onload = function(){
				resolve(this);
			}
			script.onerror = function(){
				reject(new Error('getjs error'));
			}
		}
		script.src = url
		document.body.appendChild(script)
	});

	return promise
}

export async function getJS(js_list){
	for(let i in js_list){
		let a = await _getJS(js_list[i])
		console.log('get js file success')
	}
}


function _toType(obj){
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}


export function filterNull(o){
  for(var key in o){
    if(o[key] === null){
      delete o[key]
    }
    if(_toType(o[key]) === 'string'){
      o[key] = o[key].trim()
    }else if(_toType(o[key]) === 'object'){
      o[key] = filterNull(o[key])
    }else if(_toType(o[key]) === 'array'){
      o[key] = filterNull(o[key])
    }
  }
  return o
}
