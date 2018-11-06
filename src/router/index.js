import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Release from '@/components/Release'
import Price from '@/components/Price'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Restpsd from '@/components/Restpsd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/release',
      name: 'release',
      component: Release
    }, {
      path: '/price',
      name: 'price',
      component: Price
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/restpsd',
      name: 'restpsd',
      component: Restpsd
    }
  ]
})
