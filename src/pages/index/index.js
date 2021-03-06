import { flow } from 'lodash';

const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));

// 获取应用实例
const app = getApp();

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
	},
    // 事件处理函数
    goToCreate() {
        wx.navigateTo({
			url: '../create/create',
		});
    },
	goToMy() {
		wx.navigateTo({
			url: '../my/my',
		});
	},
	async onLoad() {
		await delay();
		const log = flow(() => {
			console.log('is wechat mini program: ', __WECHAT__);
			console.log('is alipay mini program: ', __ALIPAY__);
			console.log('DEV: ', __DEV__);
		});

		log();

		// 调用应用实例的方法获取全局数据
		app.getUserInfo((userInfo) => {
			// 更新数据
			this.setData({ userInfo });
		});
	},
});
