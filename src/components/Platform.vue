<template>
	<div class="platform pos-rel">
		<div class="icon-platform">
			<img v-if="platformSrc" :src="platformSrc" />
		</div>
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
				<span class="tag" v-for="(tag,index) in tags_" @click="incTag(index)">{{tag.name}}({{tag.cnt}})</span>
			</div>
		</div>
		<div class="btn-follow" @click="incFollow()">
			关注 ({{follow_}})
		</div>
	</div>
</template>

<script>
	export default{
		name:'platform',
		props:{
			platformSrc:{default:null},
			platformName:{default:""},
			follow:{default:0},
			score:{default:0},
			abstract:{default:'暂无简介'},
			tags:{default:function(){return [];}}
		},
		data(){
			return {
				tags_:this.tags,
				follow_:this.follow,
				followFlag:false,
				tagFlag:new Array(this.tags.length)
			}
		},
		methods:{
			incFollow:function(){
				if(this.followFlag){return;}
				this.follow_++;
				this.followFlag=true;
			},
			incTag:function(index){
				if(this.tagFlag[index] && this.tagFlag[index]==1){return;}
				this.tags_[index].cnt++;
				this.tagFlag[index]=1;
			}
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
		overflow: hidden;
		display:inline-block;
		border-radius: 50%;
		border:1px solid #ececec;
		width: 65px;
		height: 65px;
		vertical-align: top;
		margin:0 1rem 0 0;
	}
	.icon-platform img{
		width:100%;
		height:100%;
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