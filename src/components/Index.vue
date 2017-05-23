<template>
	<div>
		<appheader></appheader>
		<div class="index-main">
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
							<span class="sep"></span>
							<span class="sep"></span>
							<span class="sep"></span>
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
					<platform :platformName="itm.platformName" :score="itm.score" :abstract="itm.abstract" :tags="itm.tags" :id="'platform'+index">
					</platform>
					<div v-for="(review,index) in itm.reviews" class="review-list">
						<review :id="'review'+index"
							 :username="review.username"
							 :iconUserSrc="review.iconUserSrc"
							 :title="review.title" ></review>
					</div>
				</div>
			</div>
		</div>
		<div class="linearbg-reverse bottom"></div>
		<appfooter></appfooter>
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
				platforms: [
					{ platformName: 'haha' },
					{
						platformName: 'enen',
						score: 3.5,
						abstract: '年利率：6%-12%    期限：活期-2年    银行背景     5年平台',
						tags: [{ name: '标难抢', cnt: 12 }, { name: '人太多', cnt: 1 }, { name: '人太帅', cnt: 23 }],
						reviews: [{ username: '柒哥',
						title: '专业风控', 
						iconUserSrc: 'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png' 
						}]

					},
					{ platformName: 'aaaa' }
				]
			}
		},
		mounted() {
			$('.thumbnails').click(function() {
				$('.sublinks').toggle(100);
			});
		}
	}
</script>

<style>
	#app-header .quiz {
		display: none;
	}
	
	#app-header .logo {
		left: .25rem;
		margin-left: 0;
	}
</style>
<style scoped lang="less">
	.index-main {
		color: #868686;
	}
	.platforms-list{
		padding-top: 45px;
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
		position:fixed;
		width: 100%;
		z-index: 9999;
		background: #fff;
	}
	
	nav>ul {
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	
	.thumbnails {
		position: relative;
		display: inline-block;
		padding-top: 10px;
		width: 1.5rem;
		background: #fff;
	}
	
	.sep {
		position: relative;
		display: block;
		height: 1px;
		background: #ccc;
		margin: 5px 1px;
	}
	
	.sep:before {
		content: "。";
		position: absolute;
		left: -.4rem;
		top: -1.9rem;
		color: #ccc;
		line-height: 38px;
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
		bottom: 54px;
	}
	
	.platform-itm {
		background: #fff;
		padding: 15px 1rem 7px;
	}
	
	.platform-itm:not(:first-child) {
		margin: 5px 0;
	}
	.review-list{
		margin:1rem 0;
	}
</style>