<template>
	<div class="quiz box" :id="id">
		<div class="wrap95">
		<a :href="href">
			<div class="title">{{title}}</div>
		</a>
			<div class="body clearfix text-gray">
				<div class="ib left">
					<a :href="usrlink">
						<div v-if="src" class="ib icon-user"><img :src="src" alt="" /></div>
						<div class="ib">{{answer}}</div>
					</a>
				</div>
				<div class="ib right">
					<div v-if="pv" class="ib pv">
						<a :href="pvlink"><i class="icon-pv"></i><span>{{pv}}</span></a>
					</div>
					<div v-if="tu" class="ib thumbsup">
						<a :href="tulink" :id="'tu-'+id_" @click="thumbsup('tu-'+id_)"><i class="icon-thumbsup"></i><span>{{tu_}}</span></a>
					</div>
					<div v-if="msgs" class="ib msgs">
						<a :href="msgslink"><i class="icon-msgs"></i><span>{{msgs}}</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"quiz",
		props: {
				'id':{default:0},
				'message':{default:''},
				'title':{default:''},
				'answer':{
					default:'还没有人回答该问题'
				},
				'pv':{default:0},
				'tu':{default:0},
				'msgs':{default:0},
				'href':{default:''},
				'src':{default:''},
				'usrlink':{default:'javascript:void(0);'},
				'pvlink':{default:'javascript:void(0);'},
				'tulink':{default:'javascript:void(0);'},
				'msgslink':{default:'javascript:void(0);'}
	},
	data(){
		return {
			incflag:true,
			id_:this.id,
			tu_:this.tu
		}
	},
	methods:{
		thumbsup(id){
			if(this.incflag){
				this.tu_++;
				this.incflag=false;
				console.log($('#'+id).find('i'));
				$('#'+id).find('i').removeClass('icon-thumbsup').addClass('icon-thumbsup-active');
			}
		}
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
	background-size: contain;
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
.icon-thumbsup-active{
	background-image: url(../assets/icon-quiz-thumbsup-active.png);
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