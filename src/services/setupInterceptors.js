import HTTP from './api'
import router from '@/router'
import store from '@/store'
// import axios from 'axios'

const setup = () => {
  HTTP.interceptors.response.use(config => config, async err => {
    if (err.response.status === 419 || err.response.status === 401) {
      if (store.getters['authStore/isLogged']) {
        store.commit('authStore/SET_CURRENT_USER', {})
      }
      await router.replace({ name: 'LoginPage' })
      store.commit('SET_GLOBAL_ALERT_DATA', {
        timer: 4,
        type: 'warning',
        message: 'Будь ласка, авторизуйтесь'
      })
    }
    return Promise.reject(err)
  })
}

export default setup