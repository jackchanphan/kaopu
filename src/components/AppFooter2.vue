<template>
	<div id="app-footer">
		<ul class="flex-center">
			<li class="nav active"><router-link to="/index"><i class="icon-index"></i><p>靠谱指数</p></router-link></li>
			<li class="nav"><router-link to="/comment"><i class="icon-comment"></i><p>千人共评</p></router-link></li>
			<li class="nav"><router-link to="/user_self"><i class="icon-self"></i><p>个人中心</p></router-link></li>
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
	a{
		display: inline-block;
		text-align: center;
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
	.icon-comment{
		background-image: url(../assets/comment.svg);
	}
	.icon-self{
		background-image: url(../assets/user2.svg);
	}
	.active .icon-home{
		background-image: url(../assets/home-active.svg);
	}
	.active .icon-index{
		background-image: url(../assets/star-active.svg);
	}
	.active .icon-comment{
		background-image: url(../assets/comment-active.svg));
	}
	.active .icon-self{
		background-image: url(../assets/user2-active.svg);
	}
</style>