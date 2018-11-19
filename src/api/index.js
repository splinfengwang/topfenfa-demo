import $http from '@/api/request'

/**
 * 登录
 * @param {String} email 邮箱
 * @param {String} password 密码
 */
const login = (email, password) => {
  return $http({
    url: 'auth/login',
    method: 'post',
    data: {
      email: email,
      password: password
    },
    accept: 'application/json'
  }).then(res => {
    $http.defaults.headers.common['Authorization'] = `${res.data.data.token_type} ${res.data.data.access_token}`
    return res.data
  })
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
  logout,
  getApps
}
