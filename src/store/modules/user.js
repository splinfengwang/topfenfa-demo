import api from '@/api/index'

const state = {
  islogin: false,
  userinfo: null
}

const getters = {
  islogin: state => state.islogin,
  userinfo: state => state.userinfo
}

const actions = {
  login ({commit, state}, payload) {
    return api.login(payload.email, payload.password)
      .then(res => {
        console.log(res)
        this.commit('SET_USERINFO', {
          name: 'wanglinfeng'
        })
        this.commit('SET_ISLOGIN', true)
      })
  },
  logout ({commit, state}, payload) {
    return api.logout()
      .then(() => {
        this.commit('SET_USERINFO', null)
        this.commit('SET_ISLOGIN', false)
      })
  }
}

const mutations = {
  SET_USERINFO (state, userinfo) {
    state.userinfo = userinfo
  },
  SET_ISLOGIN (state, islogin) {
    state.islogin = islogin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
