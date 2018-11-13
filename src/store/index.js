import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'
import app from './modules/app'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    order,
    app,
    common
  }
})
