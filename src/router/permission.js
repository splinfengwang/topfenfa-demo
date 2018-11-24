import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import api from '@/api/index'

router.beforeEach((to, from, next) => {
  if (store.getters.isLogin) { // 已经登录
    if (to.name === 'login') { // 跳转到登录页就重定向到首页
      next({path: '/'})
    } else { // 其他页面就正常跳转
      next()
    }
  } else { // 没有登录
    if (to.meta.requireAuth) { // 是需要鉴权的页面
      if (localStorage.expires_in && localStorage.expires_in > Date.parse(new Date())) { // 判断有token且token未过期
        // 使用token和用户名去登录
      } else { // 无token或token已过期，则跳转到登录页面
        next({path: '/login'})
      }
    }
  }
})

router.afterEach(() => {
})
