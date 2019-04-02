import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

// router.beforeEach((to, from, next) => {
  // vuex store.getters.isLogin==false;

  // if (to.path=='/login'||to.path=='/register'){
  //   next();
  // } else{
  //   alert("还未登录，请先登录！");
  //   next('/login');
  // }
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');