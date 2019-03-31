<!-- 1.模板:html结构 -->
<template>
  <div id="app">
    <app-header :title1="title1" @titleChanged="titleChanged($event)"></app-header>
    <users :users="users"></users>
    <app-footer :title1="title1" @titleChanged="titleChanged($event)"></app-footer>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Users from './components/Users.vue'
 
export default {
  name: 'app',
  data(){
    return{
      title1:"这是我的第一个Vue脚手架项目！",
      users:[
            {name:"Henry",position:'Web开发',show:false},
            {name:"Bucky",position:'Web开发',show:false},
            {name:"Emily",position:'Web开发',show:false},
            {name:"Henry",position:'Web开发',show:false},
            {name:"Bucky",position:'Web开发',show:false},
            {name:"Emily",position:'Web开发',show:false},
            {name:"Henry",position:'Web开发',show:false},
            {name:"Bucky",position:'Web开发',show:false},
            {name:"Emily",position:'Web开发',show:false},
            {name:"Henry",position:'Web开发',show:false},
            {name:"Bucky",position:'Web开发',show:false},
            {name:"Emily",position:'Web开发',show:false},
            {name:"Henry",position:'Web开发',show:false},
            {name:"Bucky",position:'Web开发',show:false},
            {name:"Emily",position:'Web开发',show:false}
        ]
    }
  },
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "users":Users
  },
  methods:{
    titleChanged(title){
      this.title1 = title;
    }
  }
}
</script>
<!-- 3.样式：解决样式 -->
<style>

</style>
