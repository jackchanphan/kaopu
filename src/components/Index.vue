<template>
	<div>
		<appheader></appheader>
		<div class="index-main scrollable">
			<nav>
				<ul class="flex-center">
					<li>
						<router-link to="/">指数最高</router-link>
					</li>
					<li>
						<router-link to="/">最近热评</router-link>
					</li>
					<li>
						<router-link to="/">评价最多</router-link>
					</li>
					<li>
						<router-link to="/">资历最老</router-link>
					</li>
					<li class="pos-rel">
						<div class="thumbnails">
							<div class="pos-rel sepbox">
								<span class="sep"></span>
							</div>
							<div class="pos-rel sepbox">
								<span class="sep"></span>
							</div>
							<div class="pos-rel sepbox">
								<span class="sep"></span>
							</div>
						</div>
						<ul class="sublinks">
							<li>
								<router-link to="/">子链接</router-link>
							</li>
							<li>
								<router-link to="/">子链接</router-link>
							</li>
							<li>
								<router-link to="/">子链接</router-link>
							</li>
						</ul>
					</li>
				</ul>
				<div class="linearbg">
				</div>
			</nav>
			<div class="platforms-list">
				<div v-for="(itm,index) in platforms" class="platform-itm">
					<platform :platformSrc="itm.platformSrc" :platformName="itm.platformName" :score="itm.score" :abstract="itm.abstract" :tags="itm.tags" :id="'platform'+index">
					</platform>
					<div v-if="itm.reviews && itm.reviews.length>0" class="review-list">
					<div class="cover">▼</div>
					<div v-for="(review,index2) in itm.reviews.slice(0,2)">
						<review :id="'pf'+index+'-review'+index2" 
							:class="'review'+index2" 
							:username="review.username" 
							:iconUserSrc="review.iconUserSrc" 
							:title="review.title" 
							:comment="review.comment" 
							:score="review.score"></review>
					</div>
					</div>
					<div  v-if="itm.reviews && itm.reviews.length>2" class="view-more">
						查看剩余{{itm.reviews.length-2}}条评分 >
					</div>
				</div>
			</div>
		</div>
		<div class="linearbg-reverse bottom"></div>
		<appfooter :userId="loginUser.userId"></appfooter>
	</div>
</template>

<script>
	import appheader from '../components/AppHeader'
	import appfooter from '../components/AppFooter2'
	import platform from '../components/Platform'
	import review from '../components/Review'
	export default {
		name: 'index',
		components: {
			appheader,
			appfooter,
			platform,
			review
		},
		data() {
			return {
		      loginUser:{
		      	userId:-1,
		      	userName:'jackchan'
		      },
				platforms: [{
						platformSrc: 'https://www.baidu.com/img/bd_logo1.png',
						platformName: '人人贷',
						score: 4.5,
						abstract: '年利率：6%-12%    期限：活期-2年    银行背景     5年平台',
						tags: [{ name: '标难抢', cnt: 12 }, { name: '人太多', cnt: 1 }, { name: '人太帅', cnt: 23 }],
						reviews: [{
							username: '柒哥',
							title: '专业风控',
							score: 4,
							comment: ' 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬',
							iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
						}]

					},
					{
						platformSrc:'https://imgsa.baidu.com/news/q%3D100/sign=be01a7932d7f9e2f763519082f31e962/6a63f6246b600c3398cecbbd104c510fd9f9a10b.jpg',
						platformName: '人人贷',
						score: 3.5,
						abstract: '年利率：6%-12%    期限：活期-2年    银行背景     5年平台',
						tags: [{ name: '标难抢', cnt: 12 }, { name: '人太多', cnt: 1 }, { name: '人太帅', cnt: 23 }],
						reviews: [
						{
							username: '柒哥',
							title: '专业风控',
							score: 4,
							comment: ' 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬',
							iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
						},
						{
							username: '你是小白',
							title: '专业风控',
							score: 3.7,
							comment: ' 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬',
							iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
						},
						{
							username: '你是小白',
							title: '专业风控',
							score: 3.7,
							comment: ' 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬',
							iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
						},
						{
							username: '你是小白',
							title: '专业风控',
							score: 3.7,
							comment: ' 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬',
							iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
						}
						]

					},
					{ platformName: 'aaaa' }
				]
			}
		},
		mounted() {
			initScrollable();
			$('.thumbnails').click(function() {
				$('.sublinks').toggle(100);
			});
			$('#app-header .quiz').css({
				display: 'none'
			});
			$('#app-header .logo').css({
				'left': '.25rem',
				'margin-left': 0
			});
			$('.review-list .cover').click(function(){
				$(this).hide();
				$(this).parent().css('height','100%');
			});
		}
	}
</script>
<style scoped lang="less">
	.index-main {
		color: #868686;
		overflow-y:auto ;
	}
	
	.platforms-list {
		margin-top: 43px;
		overflow-y: auto;
	}
	.sublinks {
		display: none;
		position: absolute;
		right: 0;
		top: 40px;
		background: #fff;
		z-index: 999;
		min-width: 8rem;
		text-align: center;
		border: 1px solid #ECECEC;
	}
	
	nav {
		position: fixed;
		width: 100%;
		z-index: 9999;
		background: #fff;
		top: 66px;
	}
	
	nav>ul>li{
		width:20%;
		text-align: center;
	}
	
	nav>ul {
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	nav a{
		line-height: 40px;
	}
	.thumbnails {
		position: relative;
		display: inline-block;
		width: 2rem;
		background: #fff;
		vertical-align: middle;
		margin-top:-.75rem;
	}
	
	.sep {
		line-height: 2px;
		display: inline-block;
		height: 1px;
		width:1.5rem;
		background: #ccc;
		margin: 5px 1px;
	}
	.sepbox{
		height:6px;
		line-height: 6px;
	}
	.sepbox:before {
		content: "。";
		position: absolute;
		height:5px;
		width:.2rem;
		left: -.4rem;
		top:0;
		color: #ccc;
		line-height: 5px;
	}
	
	.linearbg {
		height: 5px;
		background: linear-gradient(180deg, #ECECEC, #fff);
	}
	
	.linearbg-reverse {
		height: 5px;
		background: linear-gradient(0deg, #ECECEC, #fff);
	}
	
	.bottom {
		position: fixed;
		width: 100%;
		bottom: 52px;
	}
	
	.platform-itm {
		background: #fff;
		padding: 15px 1rem 7px;
	}
	
	.platform-itm:not(:first-child) {
		margin: 5px 0;
	}
	
	.review-list {
		position:relative;
		margin: 1rem 0;
		border-radius: 5px;
		overflow: hidden;
		height:10rem;
	}
	.review-list .cover{
		position:absolute;
		width:100%;
		text-align: center;
		padding:1rem 0;
		top:80px;
		background: linear-gradient(180deg,rgba(255,255,255,.8),rgb(240,240,240));
	}
	.view-more{
		color: #6987b7;
		text-align: center;
		padding-bottom: 1rem;
	}
</style>
<style>
	.review-list>div:not(:last-child) .dotbox{
		border-bottom: 1px dotted #aaa;
	}
</style>