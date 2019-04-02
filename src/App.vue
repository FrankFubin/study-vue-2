<!-- 1.模板:html结构 -->
<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>

  import Header from "./components/Header"

  export default {
    components:{
      "app-header":Header
    },
    created() {
      this.$axios.post('/apis/signIn',{
        username:'hello',
        password:'123456'
      }).then(data=>{
        console.log(data);
      })
    }
  }
</script>
<!-- 3.样式：解决样式 -->
<style>
</style>