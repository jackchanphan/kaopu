<template>
	<div class="quiz box">
		<div class="wrap95">
		<a :href="href">
			<div class="title">{{title}}</div>
			<div class="body clearfix text-gray">
				<div class="ib left">
					<div v-if="src" class="ib icon-user"><img :src="src" alt="" /></div>
					<div class="ib">{{answer}}</div></div>
				<div class="ib right">
					<div v-if="pv" class="ib pv"><i class="icon-pv"></i><span>{{pv}}</span></div>
					<div v-if="tu" class="ib thumbsup"><i class="icon-thumbsup"></i><span>{{tu}}</span></div>
					<div v-if="msgs" class="ib msgs"><i class="icon-msgs"></i><span>{{msgs}}</span></div>
				</div>
			</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"quiz",
		props: {'message':{default:''},
				'title':{default:''},
				'answer':{
					default:'还没有人回答该问题'
				},
				'pv':{default:0},
				'tu':{default:0},
				'msgs':{default:0},
				'href':{default:''},
				'src':{default:''}
		}
	}
</script>

<style scoped>
.quiz{
	margin:1px 0;
}
.title{
	font-size: 16px;
	color:#0b0b0b;
	margin-bottom: .5rem;
}
i{
	width:16px;
	height:16px;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.left{
	float:left;
}
.right{
	float:right;
}
.right i,.right span{
	vertical-align: middle;
	margin:0 2px;
}
.icon-pv{
	background-image: url(../assets/icon-quiz-pv.png);
}
.icon-thumbsup{
	background-image: url(../assets/icon-quiz-thumbsup.png);
}
.icon-msgs{
	background-image: url(../assets/icon-quiz-msgs.png);
}
.icon-user{
	height:19px;
	width:19px;
	border-radius: 50%;
	overflow: hidden;
	vertical-align: middle;
}
.icon-user>img{
	width:100%;
	height:100%;
}
</style>