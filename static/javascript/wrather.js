const weatherHelper = [];
weatherHelper.push({
	code: 0,
	type: "晴"
});
weatherHelper.push({
	code: 1,
	type: "多云"
});
weatherHelper.push({
	code: 2,
	type: "阴"
});
weatherHelper.push({
	code: 3,
	type: "阵雨"
});
weatherHelper.push({
	code: 4,
	type: "雷阵雨"
});
weatherHelper.push({
	code: 5,
	type: "冰雹"
});
weatherHelper.push({
	code: 6,
	type: "雨夹雪"
});
weatherHelper.push({
	code: 7,
	type: "小雨"
});
weatherHelper.push({
	code: 8,
	type: "中雨"
});
weatherHelper.push({
	code: 9,
	type: "大雨"
});
weatherHelper.push({
	code: 10,
	type: "暴雨"
});
weatherHelper.push({
	code: 11,
	type: "大暴雨"
});
weatherHelper.push({
	code: 12,
	type: "特大暴雨"
});
weatherHelper.push({
	code: 13,
	type: "阵雪"
});
weatherHelper.push({
	code: 14,
	type: "小雪"
});
weatherHelper.push({
	code: 15,
	type: "中雪"
});
weatherHelper.push({
	code: 16,
	type: "大雪"
});
weatherHelper.push({
	code: 17,
	type: "暴雪"
});
weatherHelper.push({
	code: 18,
	type: "雾"
});
weatherHelper.push({
	code: 19,
	type: "冻雨"
});
weatherHelper.push({
	code: 20,
	type: "小雨"
});
weatherHelper.push({
	code: 21,
	type: "中雨"
});
weatherHelper.push({
	code: 22,
	type: "大雨"
});
weatherHelper.push({
	code: 23,
	type: "暴雨"
});
weatherHelper.push({
	code: 24,
	type: "大暴雨"
});
weatherHelper.push({
	code: 25,
	type: "特大暴雨"
});
weatherHelper.push({
	code: 26,
	type: "中雪"
});
weatherHelper.push({
	code: 27,
	type: "大雪"
});
weatherHelper.push({
	code: 28,
	type: "暴雪"
});

weatherHelper.push({
	code: 29,
	type: "浮尘"
});
weatherHelper.push({
	code: 30,
	type: "扬沙"
});
weatherHelper.push({
	code: 31,
	type: "扬沙"
});
weatherHelper.push({
	code: 32,
	type: "扬沙"
});

weatherHelper.push({
	code: 33,
	type: "沙尘暴"
});
weatherHelper.push({
	code: 34,
	type: "沙尘暴"
});
weatherHelper.push({
	code: 35,
	type: "沙尘暴"
});

weatherHelper.push({
	code: 36,
	type: "小雨"
});
weatherHelper.push({
	code: 37,
	type: "小雨"
});
weatherHelper.push({
	code: 38,
	type: "小雨"
});
weatherHelper.push({
	code: 39,
	type: "小雨"
});

weatherHelper.push({
	code: 40,
	type: "雾"
});
weatherHelper.push({
	code: 41,
	type: "雾"
});
weatherHelper.push({
	code: 42,
	type: "雾"
});
weatherHelper.push({
	code: 43,
	type: "雾"
});
weatherHelper.push({
	code: 44,
	type: "雾"
});
weatherHelper.push({
	code: 45,
	type: "雾"
});
weatherHelper.push({
	code: 46,
	type: "雾"
});
weatherHelper.push({
	code: 47,
	type: "雾"
});
weatherHelper.push({
	code: 48,
	type: "雾"
});
weatherHelper.push({
	code: 49,
	type: "雾"
});

weatherHelper.push({
	code: 50,
	type: "小雨"
});
weatherHelper.push({
	code: 51,
	type: "小雨"
});
weatherHelper.push({
	code: 52,
	type: "小雨"
});
weatherHelper.push({
	code: 53,
	type: "小雨"
});
weatherHelper.push({
	code: 54,
	type: "小雨"
});
weatherHelper.push({
	code: 55,
	type: "小雨"
});
weatherHelper.push({
	code: 56,
	type: "小雨"
});
weatherHelper.push({
	code: 57,
	type: "小雨"
});
weatherHelper.push({
	code: 58,
	type: "小雨"
});
weatherHelper.push({
	code: 59,
	type: "小雨"
});
weatherHelper.push({
	code: 60,
	type: "小雨"
});
weatherHelper.push({
	code: 61,
	type: "小雨"
});
weatherHelper.push({
	code: 62,
	type: "小雨"
});
weatherHelper.push({
	code: 63,
	type: "小雨"
});
weatherHelper.push({
	code: 64,
	type: "小雨"
});
weatherHelper.push({
	code: 65,
	type: "小雨"
});
weatherHelper.push({
	code: 66,
	type: "小雨"
});
weatherHelper.push({
	code: 67,
	type: "小雨"
});
weatherHelper.push({
	code: 68,
	type: "小雨"
});
weatherHelper.push({
	code: 69,
	type: "小雨"
});

weatherHelper.push({
	code: 70,
	type: "阵雪"
});
weatherHelper.push({
	code: 71,
	type: "阵雪"
});
weatherHelper.push({
	code: 72,
	type: "阵雪"
});
weatherHelper.push({
	code: 73,
	type: "阵雪"
});
weatherHelper.push({
	code: 74,
	type: "阵雪"
});
weatherHelper.push({
	code: 75,
	type: "阵雪"
});
weatherHelper.push({
	code: 76,
	type: "阵雪"
});
weatherHelper.push({
	code: 77,
	type: "阵雪"
});
weatherHelper.push({
	code: 78,
	type: "阵雪"
});
weatherHelper.push({
	code: 79,
	type: "阵雪"
});

// 获取天气现象
function getWeatherCode(num) {
	console.log(num);
	let xx = weatherHelper.find(m => m.code == num)
	console.log(xx);
	return xx
}

//获取风力等级
function getWindLevel(num) {
	var level = '';
	if (num < 0.2) {
		level = '无风';
	} else if (num >= 0.2 && num < 1.6) {
		level = '一级';
	} else if (num >= 1.6 && num < 3.4) {
		level = '二级';
	} else if (num >= 3.4 && num < 5.5) {
		level = '三级';
	} else if (num >= 5.5 && num < 8.0) {
		level = '四级';
	} else if (num >= 8.0 && num < 10.8) {
		level = '五级';
	} else if (num >= 10.8 && num < 13.9) {
		level = '六级';
	} else if (num >= 13.9 && num < 17.2) {
		level = '七级';
	} else if (num >= 17.2 && num < 20.8) {
		level = '八级';
	} else if (num >= 20.8 && num < 24.5) {
		level = '九级';
	} else if (num >= 24.5 && num < 28.5) {
		level = '十级';
	} else if (num >= 28.5 && num < 32.7) {
		level = '十一级';
	} else if (num >= 32.7 && num < 37) {
		level = '十二级';
	} else if (num >= 37) {
		level = '>十二级';
	}
	return level;
}


export default {
	getWeatherCode,
	getWindLevel
}
