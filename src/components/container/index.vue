<template>
	<view class="container-wrapper">
		<view class="box-bg">
			<uni-nav-bar @clickLeft="clickLeft" @clickRight="clickRight" shadow left-icon="left" :right-text="rightText" :title="title" />
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			rightText:{
				type:String
			},
			title:{
				type:String
			}
		},
		data(){
			return {
			}
		},
		methods:{
			clickLeft(){
				this.$router.back();
			},
			clickRight(){
				
			}
		}
	};
</script>

<style scoped>
	.container-wrapper{
		padding-bottom: 5px;
	}
</style>