<template>
	<div class="platform pos-rel">
		<div class="icon-platform"></div>
		<div class="ib mid">
			<div v-if="platformName" class="platformName">{{platformName}}</div>
			<div class="score">
				<span class="star-active" v-for="i in Math.floor(score)" >
					
				</span><span class="star-mute" v-for="b in 5-Math.floor(score)"></span>
				<span class="score-txt">{{score}}</span>
			</div>
			<div class="abstract">
				{{abstract}}
			</div>
			<div v-if="tags && tags.length>0" class="taglist">
				<span class="tag" v-for="tag in tags">{{tag.name}}({{tag.cnt}})</span>
			</div>
		</div>
		<div class="btn-follow">
			关注（{{follow}}）
		</div>
	</div>
</template>

<script>
	export default{
		name:'platform',
		props:{
			platformName:{default:""},
			follow:{default:0},
			score:{default:0},
			abstract:{default:'暂无简介'},
			tags:{default:function(){return [];}}
		}
	}
</script>

<style scoped lang="less">
	@green:#80b74e;
	.platformName{
		display:inline-block;
		font-size: 18px;
	}
	.icon-platform{
		display:inline-block;
		border-radius: 50%;
		border:1px solid #ececec;
		width: 65px;
		height: 65px;
		vertical-align: top;
		margin:0 1rem 0 0;
	}
	.btn-follow{
		position: absolute;
		top:0;
		right:0;
		background: @green;
		font-size: 12px;
		padding:.5rem;
		transform: scale(.8);
		color:#fff;
		border-radius: 3px;
	}
	.star-base{
		width: 15px;
		height:15px;
		background-repeat: no-repeat;
		display: inline-block;
		margin:0 2px;
	}
	.mid{
		max-width: 72%;
	}
	.score{
		padding-bottom: 5px;
	}
	.star-active{
		background-image: url(../assets/stars.png);
		.star-base;
	}
	.star-mute{
		background-image: url(../assets/stars.png);
		background-position-x:-21px ;
		.star-base;
	}
	.score-txt{
		color: @green;
		font-size: 24px;
		font-weight: bold;
	}
	.taglist{
		margin:1rem 0;
	}
	.tag{
		font-size:10px;
		padding:5px;
		border:1px solid #ccc;
		margin-right: 1rem;
	}
</style>