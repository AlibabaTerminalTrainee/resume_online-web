<template>
	<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->

	<view>
		<form @submit="formSubmit" @reset="formReset" class="uni-form">
			<!-- 学校 -->
			<uni-section title="school" type="line" padding>
				<text class="uni-subtitle">学校：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="school" placeholder="请输入学校名" @input="input"></uni-easyinput>
			</uni-section>
			<!-- 学历 -->
			<uni-section title="学历" type="line">
				<view class="uni-form-item uni-column">
					<view class="uni-subtitle">学历</view>
					<view><uni-data-select class="uni-mt-5" v-model="value" :localdata="range" @change="change"></uni-data-select></view>
				</view>
			</uni-section>
			<!-- 学院 -->
			<uni-section title="college" type="line" padding>
				<text class="uni-subtitle">学院：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="college" placeholder="请输入学院名" @input="input"></uni-easyinput>
			</uni-section>
			<!-- 专业 -->
			<uni-section title="marjor" type="line" padding>
				<text class="uni-subtitle">专业：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="marjor" placeholder="请输入专业名" @input="input"></uni-easyinput>
			</uni-section>
			<!-- 城市 -->
			<uni-section title="city" type="line" padding>
				<text class="uni-subtitle">城市：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="city" placeholder="请输入城市名" @input="input"></uni-easyinput>
			</uni-section>
		</form>
	</view>
</template>
<script>
export default {
	data() {
		return {
			school: '',
			college: '',
			marjor: '',
			city: '',
			value: 0,
			range: [{ value: 0, text: '本科' }, { value: 1, text: '硕士' }, { value: 2, text: '博士' }]
		};
	},
	methods: {
		formSubmit: function(e) {
			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			// var formdata = e.detail.value
			// uni.showModal({
			// 	content: '表单数据内容：' + JSON.stringify(formdata),
			// 	showCancel: false
			// });
		},
		formReset: function(e) {
			// console.log('清空数据')
		},
		// bindPickerChange: function(e) {
		// 	// console.log('picker发送选择改变，携带值为', e.detail.value);
		// 	this.index = e.detail.value;
		// },
		input(e) {
			console.log('输入内容：', e);
		},
		change(e) {
			this.value = e.detail.value;
			console.log('e:', e);
		}
	}
};
</script>

<style lang="scss">
.uni-mt-5 {
	margin-top: 15rpx;
	margin-bottom: 15rpx;
}
.uni-form {
	display: flex;
	margin: 15px;
}



</style>
