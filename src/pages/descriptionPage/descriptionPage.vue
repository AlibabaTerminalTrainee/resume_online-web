<template>
	<uni-section title="基础卡片" type="line">
		<uni-card :is-shadow="false">
			<view class="uni-form-item uni-column">
				<view class="title">在校经历</view>
				<view class="uni-textarea"><textarea placeholder-style="color: #353535;" placeholder="可以列出荣誉奖项,相关课程及成绩等" @blur="bindTextAreaBlur" auto-height /></view>
			</view>
		</uni-card>
	</uni-section>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		bindTextAreaBlur: function(e) {
			console.log(e.detail.value);
			// 在校经历里写的内容：e.detail.value
		}
	}
};
</script>

<style>
	.uni-column {
		flex-direction: column;
	}
	.uni-form-item{
		display:flex;
		width:100%;
		padding:10rpx 0;
	}
	.uni-form-item .title{
		padding:10rpx 25rpx;
	}
	/* textarea */
	.uni-textarea{
		width:100%;
		background:#FFF;
	}
	.uni-textarea textarea{
		width:96%;
		padding:18rpx 2%;
		line-height:1.6;
		font-size:28rpx;
		height:150rpx;
	}
</style>
