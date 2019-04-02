import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import About from './components/about/About'

import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default:Home,
        "orderingGuide":OrderingGuide,
        "delivery":Delivery,
        "history":History
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      // beforeEnter:(to,from,next)=>{
      //   // 路由独享守卫
      //   // vuex store.getters.isLogin==false;
      //   if (to.path=='/login'||to.path=='/register'){
      //     next();
      //   } else{
      //     alert("还未登录，请先登录！");
      //     next('/login');
      //   }
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      redirect:'/contact',
      children:[
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
          redirect:'/phone',
          children: [
            {
              path:'/phone',
              name:'phone',
              component:Phone
            },
            {
              path:'/personname',
              name:'personname',
              component:PersonName
            }
          ]
        },
        {
          path: '/history',
          name: 'history',
          component: History
        },
        {
          path: '/delivery',
          name: 'delivery',
          component: Delivery
        },
        {
          path: '/orderingGuide',
          name: 'orderingGuide',
          component: OrderingGuide
        }
      ]
    },
    {
      path:'*',
      redirect:'/'

    }
  ]
})

