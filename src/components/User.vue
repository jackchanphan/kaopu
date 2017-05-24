<template>
	<div class="user-page">
		<div class="usr-panel" :id="'usr_'+uid">
			<div class="wrap">
			<div class="pos-rel vtop ib">
				<div class="icon-usr">
					<img :src="usrSrc" />
				</div>
				<i v-if="verified==true" class="icon-verified-usr"></i>
			</div>
			<div class="ib mid">
				<div v-if="usrName" class="usrName">
					<div class="ib vmiddle">{{usrName}}</div>
				<div v-if="verified==true" class="tag verified-tag ib">
					<i class="icon-verified-cer"></i>&nbsp;<span class="vmiddle">KP认证</span>
				</div>
				</div>
				<div class="title">
					{{title}}&nbsp;|&nbsp;获得{{tu}}个称赞
				</div>
				<div class="moto">
					{{moto}}
				</div>
			</div>
			<div class="btn-follow" @click="incFollow()">
				★ 关注 
			</div>
			</div>
			<div class="statistics orient-list">
				<li>
					<div class="static-itm">
						<p class="amount">{{fans}}</p>
						<p class="cn">粉丝</p>
					</div>
				</li>
				<li>
					<div class="static-itm">
						<p class="amount">{{follow}}</p>
						<p class="cn">关注的人</p>
					</div>
				</li>
				<li>
					<div class="static-itm">
						<p class="amount">{{followedPlatform}}</p>
						<p class="cn">关注的平台</p>
					</div>
				</li>
				<li>
					<div class="static-itm">
						<p class="amount">{{quizs}}</p>
						<p class="cn">关注的问题</p>
					</div>
				</li>
			</div>
		</div>
		<div class="tab-panel">
			<ul class="orient-list tabs">
				<li class="current">评价</li>
				<li>回答</li>
				<li>提问</li>
			</ul>
			<div class="current-box">
				<ul class="comment-list">
					<div v-for="(itm,index) in comments">
					<comment :id="index"></comment>
					</div>
				</ul>
				<ul class="answer-list">
					
				</ul>
				<ul class="quiz-list">
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import comment from '../components/Comment'
	export default{
		name:'user',
		components:{
			comment
		},
		data(){
			return {
				uid:this.$route.params.uid,
				usrName:'柒哥',
				verified:true,
				usrSrc:'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png',
				title:'风控专家',
				moto:'一句话的介绍，你也了解不了我',
				tu:365,
				follow:77,
				followFlag:false,
				fans:372,
				followedPlatform:24,
				quizs:24,
				comments:[{},{},{}]
			}
		},
		methods:{
			incFollow:function(){
				if(this.followFlag){return;}
				this.follow_++;
				this.followFlag=true;
			},
			incTag:function(index,tId){
				if(this.tagFlag[index] && this.tagFlag[index]==1){return;}
				this.tags_[index].cnt++;
				this.tagFlag[index]=1;
				$('#'+tId).addClass('tagInc');
			}
		},
		mounted(){
			emitter.emit('change-title',this.usrName);
		}
	}
</script>

<style scoped lang="less">
	@green:#80b74e;
	.usr-panel{
		padding-top: 25px;
		background: #fff;
	}
	.usrName{
		display:inline-block;
		font-size: 18px;
		font-weight: bold;
	}
	.title{
		padding:.25rem 0;
		font-size: 14px;
		font-weight: bold;
	}
	.moto{
		font-size: 14px;
		color:#999;
		
	}
	.icon-usr{
		overflow: hidden;
		display:inline-block;
		border-radius: 50%;
		border:1px solid #ececec;
		width: 65px;
		height: 65px;
		vertical-align: top;
		margin:0 1rem 0 0;
	}
	.icon-usr img{
		width:100%;
		height:100%;
	}
	.icon-verified-usr{
		position:absolute;
		width: 18px;
		height: 18px;
		right:20px;
		top:50px;
		border-radius: 50%;
		background: url(../assets/icon-verified-big.png)center center no-repeat;
		background-size: 70% 70%;
		background-color: @green;
	}
	.icon-verified-cer{
		width: 9px;
		height: 10px;
		vertical-align: middle;
		background: url(../assets/icon-verified-small.png)center center no-repeat;
		background-size: 100% 100%;
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
	.mid{
		max-width: 72%;
	}
	.tag{
		font-size:9px;
		padding:2px 5px;
		border:1px solid @green;
		border-radius: 3px;
		color:@green;
		font-weight: normal;
		margin-right: 1rem;
	}
	.verified-tag{
		vertical-align: middle;
	}
	.tagInc{
		background: @green;
		color:#fff;
	}
	.statistics{
		padding: 30px 0 15px;
	}
	.statistics li{
		text-align: center;
		box-sizing: border-box;
		width:24%;
	}
	.amount{
		font-size: 11px;
	}
	.cn{
		color:#999;
		font-size: 11px;
	}
	.statistics li:not(:last-child) .static-itm{
		border-right: 1px solid #ccc;
	}
	.tab-panel{
		background: #fff;
		margin-top: 8px;
	}
	.tabs>li{
		width:33.33%;
		padding:1rem 0;
		text-align: center;
		border-top:2px solid #fff;
	}
	.tabs .current{
		border-color:@green;
	}
	.current-box>ul:not(:first-child){
		display: none;
	}
</style>