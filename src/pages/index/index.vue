<template>
	<!-- <h1>{{ msg }}</h1> -->
	<view class="content">
		<h1>{{ msg }}</h1>
		<image class="logo" src="/static/logo.png"></image>
		<uni-badge text="2"></uni-badge>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">用于收藏功能，可点击切换选中、不选中的状态。</text>
		</uni-card>
		<ChildComponent @custom="onCustom"/>
		<p v-if="emitted">Emitted!</p>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
    import { uniBadge, uniCard } from '@dcloudio/uni-ui'
	import ChildComponent from './childComponent.vue'
	
	export default {
		props: {
			msg: {
				type: String,
				default: ''
			}
		},
		components: {
			uniBadge,
			uniCard,
			ChildComponent
		}, 
		data() {
			return {
				title: 'Hello',
				emitted: false,
			}
		},
		onLoad() {

		},
		methods: {
			onCustom(bln) {
				console.log(`this.emitted1: `, this.emitted)
				this.emitted = bln;
				console.log(`this.emitted2: `, this.emitted)
			}
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
