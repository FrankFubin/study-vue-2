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


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
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
      children:[
        {
          path: '/contact',
          name: 'contact',
          component: Contact
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
