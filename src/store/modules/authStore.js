import HTTP from '@/services/api'
import router from '../../router/index'
import responseHandler from '@/services/responseHandler'

export default {
  namespaced: true,
  state: {
    currentUser: {}
  },
  getters: {
    isLogged: state => !!Object.keys(state.currentUser).length
  },
  mutations: {
    SET_CURRENT_USER: (state, user) => state.currentUser = user
  },
  methods: {},
  actions: {
    async logIn({ commit }, data) {
      try {
        await HTTP.get('sanctum/csrf-cookie')
        await HTTP.post('login', data)
        // const user = await HTTP.get('api/user')
        commit('SET_CURRENT_USER', data)
        await router.replace({ name: 'DashboardPage' })
      } catch (e) {
        commit('SET_CURRENT_USER', {})
        responseHandler(e)
      }
    },
    async logOut({ commit }) {
      try {
        await HTTP.post('logout')
        commit('SET_CURRENT_USER', {})
        await router.replace({ name: 'LoginPage' })
        commit('SET_GLOBAL_ALERT_DATA', {
          timer: 4,
          type: 'success',
          message: 'Ви успішно вийшли з системи!'
        }, { root: true })
      } catch (e) {
        responseHandler(e)
      }
    }
  }
}