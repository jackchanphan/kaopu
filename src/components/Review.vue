<template>
	<div class="review">
		<div class="dotbox">
		<div class="row">
			<div v-if="iconUserSrc" class="icon-user ib">
				<img :src="iconUserSrc" />
			</div>
			<div v-if="username" class="username ib">{{username}}&nbsp;<span class="f9 lightgray">{{title}}</span></div>
		</div>
		<div class="row">
			<div class="comment ib">
			<div class="ibbox score">
				评分{{parseFloat(score).toFixed(1)}}
			</div><span class="sep"></span>
				{{comment.length>40?comment.substr(0,50)+"...":comment}}
				<a v-if="comment.length>40" :id="id" class="text-green comment-link" :data-full-txt="comment" @click="showFullText(id)">more&gt;</a>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'review',
		props: {
			id:{default:0},
			iconUserSrc: { default: null },
			username: { default: null },
			title: { default: '' },
			score:{default:0},
			comment:{default:'这家伙很懒，还没有任何评论！'}
		},
		methods:{
			showFullText(id){
				var tmp = $('#'+id);
				var head = tmp.parent().html().substr(0,tmp.parent().html().indexOf('<span'));
				tmp.parent().html(head+tmp.data('full-txt'));
			}
		}
	}
</script>

<style scoped lang="less">
	@green:#80b74e;
	.row{
		padding:.5rem 0;
	}
	.review {
		background: #f3f3f3;
		padding: 0 1rem;
	}
	
	.icon-user {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		overflow: hidden;
		vertical-align: middle;
		margin-right: 1rem;
	}
	.comment{
		vertical-align: top;
		line-height: 2em;
	}
	.score{
		line-height: 1.5em;
		height:1.5em;
		color:@green;
	}
	.icon-user>img {
		width: 100%;
		height: 100%;
	}
	.dotbox{
		padding:1rem 0;
		}
</style>