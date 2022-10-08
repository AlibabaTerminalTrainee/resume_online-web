<template>
	<view class="body"><uni-datetime-picker v-model="range" type="daterange" rangeSeparator="至" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			range: [],
			// 当前选择的时间范围
		};
	},
	watch: {
		range(newval) {
			this.rang=newval

		}
	},
	
};
</script>

<style>
		.body {
			background-color: #fff;
			padding: 10px;
		}

</style>
