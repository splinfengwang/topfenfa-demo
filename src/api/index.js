import $http from '@/api/request'

/**
 * 登录
 * @param {String} email 邮箱
 * @param {String} password 密码
 */
const login = (email, password) => {
  return $http({
    url: 'api/auth/login',
    method: 'post',
    data: {
      email: email,
      password: password
    },
    accept: 'application/json'
  }).then(res => {
    localStorage.token_type = res.data.data.token_type
    localStorage.access_token = res.data.data.access_token
    localStorage.expires_in = Date.parse(new Date()) + res.data.data.expires_in * 1000
    $http.defaults.headers.common['Authorization'] = `${res.data.data.token_type} ${res.data.data.access_token}`
    return res.data
  })
}

const relogin = (token) => {
  return null
}

/**
 * 登出
 */
const logout = () => {
  return $http({
    url: 'logout',
    method: 'post',
    accept: 'application/json'
  })
}

const getApps = (page, form, word) => {
  return $http({
    url: 'apps',
    params: {
      page: page,
      form: form,
      word: word
    }
  }).then(res => {
    return res.data
  })
}

export default {
  login,
  relogin,
  logout,
  getApps
}
