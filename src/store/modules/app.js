import api from '@/api/index'

const state = {
  apps: []
}

const getters = {
  apps: state => state.apps
}

const actions = {
  getApps ({commit, state}, payload) {
    return api.getApps(payload.page, payload.form, payload.word)
      .then(res => {
        console.log(res, '应用列表')
      })
  }
}

const mutations = {
  SET_APPS (state, apps) {
    state.apps = apps
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
