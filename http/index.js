const baseUrl = ""; //公共路径


//post请求封装
function postRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data || '';
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'POST',
			success: function(res) {
				resolve(res.data);
			},
			error: function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data || '';
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: "GET",
			dataType: 'json',
			success: function(res) {
				resolve(res.data);
			},
			error: function(e) {
				reject('网络出错');
			}
		});
	});
	return promise;
}


export default {
	post: postRequest,
	get: getRequest,
}
