<template>
	<div>
	<div id="app-header">
		<div class="wrap">
		<div class="quiz ib"><router-link to="/quiz">提问</router-link></div>
		<div class="logo ib"></div>
		<div class="mag ib"><a href=""><i class="icon-mag"></i></a></div>
		</div>
	</div>
	<div class="ac-pos"></div></div>
</template>

<script>
	export default {
  name: 'appheader',
  methods: {
    log() {
      console.log('header');
    },
  },
};
</script>

<style lang="less" scoped>
	#app-header *{
		color:#fff;
		font-size: 15px;
	}
    .logo{
        background-image: url(../assets/logo.png);
    }
    .quiz{
    	height:100%;
    	line-height: 100%;
    }
    .icon-mag{
    	position: absolute;
    	width: 19px;
    	height:19px;
    	right:0;
    	top:.25rem;
    	background-image: url(../assets/mag.png);
    	background-size: 100% 100%;
    }
    .ac-pos{
    	height:68px;
    	background: transparent;
    	z-index: 0;
    }
</style>