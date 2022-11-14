import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import authStore from '@/store/modules/authStore'
import notification from '@/store/modules/notification'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    globalAlertData: {
      timer: 0,
      message: '',
      type: ''
    }
  },
  mutations: {
    SET_GLOBAL_ALERT_DATA: (state, data) => state.globalAlertData = data
  },
  modules: {
    authStore,
    notification
  }
})

export default store