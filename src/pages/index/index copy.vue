<template>
	<div class="content">
		<h1>{{ msg }}</h1>
		<image class="logo" src="/static/logo.png"></image>
		<!-- <uni-badge text="1"></uni-badge> -->
		<ChildComponent></ChildComponent>
		<div>
			<text class="title">{{title}}</text>
		</div>
	</div>
</template>

<script>
	/* import { uniBadge } from '@dcloudio/uni-ui'; */
	import ChildComponent from './childComponent.vue';
	
	export default {
		props: {
			msg: {
				type: String,
				default: ''
			}
		},
		components: {
			uniBadge,
			ChildComponent
		}, 
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
