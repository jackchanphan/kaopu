<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: "microsoft yahei",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 0px;
}
@green:#80b74e;
*{
    padding:0;
    margin:0;
    color:inherit;
    text-decoration: none;
    list-style: none;
}
html{
    font-size: 12px;
    height:100%;
}
.bgf3{
    background-color: #f3f3f3;
}
.bgfff{
    background-color: #fff;
}
.lightgray{
    color: #b3b3b3;
}
body{
    .bgf3;
    color:#333;
    height:100%;
}
i{
    display: inline-block;
    font-style: normal;
}
.flex-center{
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-around;
}
.vmiddle{
	vertical-align: middle;
}
.vtop{
	vertical-align: top;
}
.ib{
    display: inline-block;
}
.ibbox{
    .ib;
    border:1px solid @green;
    padding:0 5px;
    border-radius:3px;
}
.fixed{
	position:fixed;
}
.clear{
    clear:both;
}
.clearfix:after,
.orient-list:after{
    content:"";
    display:block;
    clear:both;
}
.left{
    float:left;
}
.right{
	float:right;
}
.center{
    margin:0 auto;
}
.text-green{
    color:#78b63f;
}
.text-gray{
    color:#999999;
}
.f9{
    font-size: 9px;
}
.f19{
    font-size: 19px;
}
.f12{
    font-size: 12px;
}
.wrap{
    position:relative;
    width:95%;
    margin:0 auto;
}
.wrap95{
    position:relative;
    width:95%;
    margin:0 auto;
}
.orient-list>li{
    float:left;
}
.pos-rel{
    position: relative;
}
#app-header{
    position:fixed;
    width:100%;
    background:#80b74e;
    height:45px;
    padding-top: 22px;
    z-index: 9999;
}
#app-footer{
    position:fixed;
    width:100%;
    bottom:0;
    padding:.25rem 0;
    border-top:2px solid #f3f3f3;
    background: #fff;
}
.box{
    padding:1.5rem .5rem;
    .bgfff;
}

</style>
