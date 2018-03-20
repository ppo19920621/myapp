// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
	"postcss-aspect-ratio-mini":{},
	"postcss-write-svg":{
		utf8:false
	},
	"postcss-cssnext":{},
	"postcss-px-to-viewport":{
		viewportWidth: 750,		// 视窗的宽度，对应的是我们设计稿的宽度
		viewportHeight: 1334,	// 视窗的高度，也可以不配置
		unitPrecision: 3,		// 指定px转换为视窗单位的小数位数(很多时候无法整除)
		viewportUnit: 'vw',		// 指定需要转换成的视窗单位，建议使用vw
		selectorBlackList: ['.ignore', '.hairlines'],	// 指定不转换为视图单位的类，可以自定义
		minPixelValue: 1,		// 小于或等于1px，不转换为视图单位，
		mediaQuery: false		// 允许在媒体查询中转换px
	},
	"postcss-viewport-units":{},
	"cssnano":{
		preset: "advanced",
		autoprefixer: false,
		"postcss-zindex": false
	}
  }
}
