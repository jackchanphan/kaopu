<template>
	<div id="app-footer">
		<ul class="flex-center">
			<li class="nav active"><router-link to="/"><i class="icon-home"></i><p>首页</p></router-link></li>
			<li class="nav"><router-link to="/index"><i class="icon-index"></i><p>指数</p></router-link></li>
			<li class="nav"><router-link to="/discovery"><i class="icon-discovery"></i><p>发现</p></router-link></li>
			<li class="nav"><router-link :to="'/user/'+userId"><i class="icon-self"></i><p>我</p></router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
  name: 'appfooter',
  props:{
  	userId:{default:-1},
  	active:{default:0}
  },
  methods: {
    log() {
      console.log('footer');
    },
  },
  mounted(){
  	$('#app-footer .nav').removeClass('active');
  	$('#app-footer .nav').eq(this.active).addClass('active');
  }
};
</script>

<style scoped>
	.nav{
		width:25%;
		text-align: center;
	}
	.nav i{
		width: 25%;
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
	.active .icon-home{
		background-image: url(../assets/home-active.svg);
	}
	.active .icon-index{
		background-image: url(../assets/star-active.svg);
	}
	.active .icon-discovery{
		background-image: url(../assets/compass-active.svg);
	}
	.active .icon-self{
		background-image: url(../assets/user-active.svg);
	}
</style>