<template>
	<view class="">
		<uni-nav-bar left-icon="left" right-text="确定" title="学校" />
		<view class="shurukuang">
				<input 
					class="input"
					placeholder-style="color:#646464;
					font-size:28rpx" 
					placeholder="请在这里输入的学校" 
					@input="descInput" maxlength="50" 
					v-model="dataInfo" />
				   <text style="font-size:26rpx;color: #646464;">{{ start }}/50</text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start: 0,
				dataInfo: ''
			};
		},
		methods: {
			descInput() {
				let txtVal = this.dataInfo.length;
				this.start = txtVal;
			}
		}
}
</script>

<style>
	.shurukuang {
		position: relative;
	}
	.shurukuang text {
		position: absolute;
		right: 30px;
		top: 14px;
	}
	.input {
		border: 1px solid #ddd;
		border-radius: 2px;
		margin: 15px;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
	}
</style>