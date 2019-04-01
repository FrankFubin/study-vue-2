<!-- 1.模板:html结构 -->
<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>

  import Header from "./components/Header"

  export default {
    components:{
      "app-header":Header
    }
  }
</script>
<!-- 3.样式：解决样式 -->
<style>
  @import "https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css";
</style>