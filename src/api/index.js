import http from '@/api/request'

const login = (email, password) => {
  return http({
    url: '/api/auth/login',
    method: 'post',
    data: {
      email: email,
      password: password
    },
    accept: 'application/json'
  }).then(res => {
    http.defaults.headers.common['Authorization'] = `${res.data.data.token_type} ${res.data.data.access_token}`
    return res.data
  })
}

const logout = () => {
  return http({
    url: '/api/logout',
    method: 'post',
    accept: 'application/json'
  })
}

export default {
  login,
  logout
}
