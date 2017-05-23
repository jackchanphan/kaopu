<template>
	<div>
	<appheader></appheader>
	<div class="channels">
		<ul class="flex-center">
			<li class="channel"><a href=""><i class="icon-channel1"></i><p>问答</p></a></li>
			<li class="channel"><a href=""><i class="icon-channel2"></i><p>课题组</p></a></li>
			<li class="channel"><a href=""><i class="icon-channel3"></i><p>理财专栏</p></a></li>
			<li class="channel"><a href=""><i class="icon-channel4"></i><p>每日财讯</p></a></li>
		</ul>
	</div>
	<div class="subjects box">
		<div class="ib">
			<p class="text-green f19">千人共评课题组</p>
			<p class="text-gray f12">每天9：00-10：00 等你来评</p>
		</div>
	</div>
	<div class="quizlist">
		<div v-for="(quiz,index) in quizlist">
			<quiz :id='index' :href="quiz.href" :title="quiz.title"
			 :answer="quiz.answer" :pv="quiz.pv" :tu="quiz.tu" :msgs="quiz.msgs" :src="quiz.src"></quiz>
		</div>
	</div>
	<appfooter></appfooter>
	</div>
</template>

<script>
import appheader from '../components/AppHeader'
import appfooter from '../components/AppFooter'
import quiz from '../components/Quiz'
export default {
  name: 'home',
  components: {
  	appheader,
  	appfooter,
  	quiz
  },
  data () {
    return {
      quizlist:[
      	{
      		href:'http://www.baidu.com',
      		title:'P2P平台被监管一查就死的情况,怎么看？',
      		answer:'柒哥、牛小青等回答了问题',
      		pv:'1.5k',
      		msgs:'32',
      		tu:'20',
      		src:'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
      	},
      	{
      		href:'http://www.baidu.com',
      		title:'P2P平台被监管一查就死的情况,怎么看？',
      		answer:'柒哥、牛小青等回答了问题',
      		pv:'1.5k',
      		msgs:'32'
      	},
      	{
      		href:'http://www.baidu.com',
      		title:'P2P平台被监管一查就死的情况,怎么看？',
      		answer:'柒哥、牛小青等回答了问题',
      		msgs:'32',
      		tu:'20',
      		src:'http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png'
      	}
      ]
    }
  },
  mounted(){
  	emitter.sub('quiz-update',this,function(data){
  		console.log(data);
  		if(data.constructor!=[].constructor){return ;}
  		for(var i=0;i<data.length;i++){
  			this.quizlist.push(data[i]);
  		}
  	});
  	emitter.sub('inc',this.quizlist,function(index){
  		this[index].tu++;
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
.channels{
	background: #fff;
	text-align: center;
	padding:1.5rem 0;
}
.channel a{
	display: inline-block;
}
.channel i{
	width: 43px;
	height:43px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.icon-channel1{
	background-image: url(../assets/icon-channels1.png);
}
.icon-channel2{
	background-image: url(../assets/icon-channels2.png);
}
.icon-channel3{
	background-image: url(../assets/icon-channels3.png);
}
.icon-channel4{
	background-image: url(../assets/icon-channels4.png);
}
.subjects{
	margin: .5rem 0;
	height:80px;
	line-height: 80px;
	background-image: url(../assets/subjects.png);
	background-position: right center;
	background-repeat: no-repeat;
	background-size: 40% 40%;
}
.subjects>div{
	padding-left: 2rem;
	line-height: 2em;
	vertical-align: middle;
}
.quizlist{
	padding-bottom: 50px;
}
</style>