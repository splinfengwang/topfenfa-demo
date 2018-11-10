import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Price from '@/components/price/Price'
import Priceinfo from '@/components/price/Priceinfo'
import Buy from '@/components/price/Buy'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Restpsd from '@/components/Restpsd'
import Publishinfo from '@/components/publish/Publishinfo'
import Myapp from '@/components/publish/Myapp'
// import Appinfo from '@/components/publish/Appinfo'
import Appsetting from '@/components/publish/Appsetting'
import Publish from '@/components/publish/Publish'
import Upload from '@/components/publish/Upload'
import Applist from '@/components/publish/Applist'
import Success from '@/components/publish/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/price',
      name: 'price',
      component: Price,
      redirect: {
        name: 'priceinfo'
      },
      children: [
        {
          path: 'priceinfo',
          name: 'priceinfo',
          component: Priceinfo
        },
        {
          path: 'buy',
          name: 'buy',
          component: Buy
        }
      ]
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
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
      redirect: {
        name: 'publishinfo'
      },
      children: [
        {
          path: 'publishinfo',
          name: 'publishinfo',
          component: Publishinfo,
          redirect: {
            name: 'upload'
          },
          children: [
            {
              path: 'upload',
              name: 'upload',
              component: Upload
            },
            {
              path: 'applist',
              name: 'applist',
              component: Applist
            },
            {
              path: 'success',
              name: 'success',
              component: Success
            }
          ]
        },
        {
          path: 'myapp/:id',
          name: 'myapp',
          component: Myapp,
          redirect: {
            name: 'appsetting'
          },
          children: [
            // {
            //   path: 'appinfo',
            //   name: 'appinfo',
            //   component: Appinfo
            // },
            {
              path: 'appsetting',
              name: 'appsetting',
              component: Appsetting
            }
          ]
        }
      ]
    }
  ]
})
