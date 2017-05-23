<template>
	<div class="review">
		<div v-if="iconUserSrc" class="icon-user ib">
			<img :src="iconUserSrc"/>
		</div>
		<div v-if="username" class="username ib">{{username}}&nbsp;<span class="f9">{{title}}</span></div>
	</div>
</template>

<script>
	export default{
		name:'review',
		props:{
			iconUserSrc:{default:null},
			username:{default:null},
			title:{default:''}
		}
	}
</script>

<style scoped>
	.review{
		background: #f3f3f3;
		padding:1rem;
	}
	.icon-user{
		width: 32px;
		height:32px;
		border-radius: 50%;
		overflow: hidden;
		vertical-align: top;
	}
	.icon-user>img{
		width: 100%;
		height: 100%;
	}
</style>