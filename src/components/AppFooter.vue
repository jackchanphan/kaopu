<template>
	<div id="app-footer">
		<ul class="flex-center">
			<li class="nav"><a href=""><i class="icon-home"></i><p>首页</p></a></li>
			<li class="nav"><a href=""><i class="icon-index"></i><p>指数</p></a></li>
			<li class="nav"><a href=""><i class="icon-discovery"></i><p>发现</p></a></li>
			<li class="nav"><a href=""><i class="icon-self"></i><p>我</p></a></li>
		</ul>
	</div>
</template>

<script>
	export default {
  name: 'appfooter',
  methods: {
    log() {
      console.log('footer');
    },
  },
};
</script>

<style scoped>
	.nav i{
		width: 26px;
		height:26px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	p{
		text-align: center;
	}
	.icon-home{
		background-image: url(../assets/home.svg);
	}
	.icon-index{
		background-image: url(../assets/star.svg);
	}
	.icon-discovery{
		background-image: url(../assets/compass.svg);
	}
	.icon-self{
		background-image: url(../assets/user.svg);
	}
</style>