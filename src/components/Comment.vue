<template>
	<div class="comment-itm pos-rel" :id="'comment-'+id">
		<div class="icon-platform">
			<img v-if="platformSrc" :src="platformSrc" />
		</div>
		<div class="ib mid">
			<div v-if="platformName" class="platformName">{{platformName}}</div>
			<div class="score">
				<span class="star-active" v-for="i in Math.floor(score)" >
					
				</span><span class="star-mute" v-for="b in 5-Math.floor(score)"></span>
				<span class="score-txt">{{score.toFixed(1)}}</span>
			</div>
		</div>
		<div class="btn-evaluate">
			<span :class="'evok-comment-'+id" @click="incEvOK('evok-comment-'+id)">靠谱 {{evOK_}}</span>
			<span :class="'evnok-comment-'+id" @click="incEvNOK('evnok-comment-'+id)">扯淡 {{evNOK_}}</span>
		</div>
		<div class="ev-content">
			{{evContent}}
		</div>
		<div class="footer clearfix">
			<div class="comment-date left">{{commentDate}}</div>
			<div class="comment-follow right"><a :href="commentFollowHref">评论{{commentFollow}}&nbsp;&nbsp;...</a></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'comment',
		props:{
			id:{default:0},
			platformSrc:{default:'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'},
			platformName:{default:"未命名"},
			evOK:{default:0},
			evNOK:{default:0},
			score:{default:0},
			evContent:{default:'暂无评论'},
			commentDate:{default:'1分钟前'},
			commentFollow:{default:'0'},
			commentFollowHref:{default:'javascript:void(0);'}
		},
		data(){
			return {
				evOK_:this.evOK,
				evNOK_:this.evNOK
			}
		},
		methods:{
			incEvOK:function(className){
				if(this.evOK_==this.evOK && this.evNOK_==this.evNOK){
					this.evOK_++;
					$('.'+className).addClass('btn-evalueated');
				}
			},
			incEvNOK:function(className){
				if(this.evOK_==this.evOK && this.evNOK_==this.evNOK){
					this.evNOK_++;
					$('.'+className).addClass('btn-evalueated');
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@green:#80b74e;
	.comment-itm{
		padding:18px;
	}
	.platformName{
		display:inline-block;
		font-size: 14px;
	}
	.icon-platform{
		overflow: hidden;
		display:inline-block;
		border-radius: 50%;
		border:1px solid #ececec;
		width: 36px;
		height: 36px;
		vertical-align: top;
		margin:0 .5rem 0 0;
	}
	.icon-platform img{
		width:100%;
		height:100%;
	}
	.btn-evaluate{
		float:right;
		top:50%;
		margin-top: .25em;
		right:.5rem;
		border:1px solid #ececec;
		font-size: 12px;
		border-radius: 3px;
		overflow: hidden;
	}
	.btn-evalueated{
		background: @green;
		color:#fff;
		border-color: @green;
		border-color:@green;
	}
	.btn-evaluate span{
		padding:.5rem;
		float:right;
	}
	.btn-evaluate span:nth-child(1){
		float:left;
		border-right:1px solid #ECECEC;
	}
	.star-base{
		width: 10px;
		height:10px;
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
		background-image: url(../assets/stars-small.png);
		.star-base;
	}
	.star-mute{
		background-image: url(../assets/stars-small.png);
		background-position-x:-14px ;
		.star-base;
	}
	.score-txt{
		color: @green;
		font-size: 10px;
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
	.tagInc{
		background: @green;
		color:#fff;
	}
	.ev-content{
		margin-top: 1rem;
	}
	.footer{
		margin-top: 1.5rem;
		color:#999;
	}
</style>