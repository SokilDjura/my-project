import store from '@/store'

export default (e) => {
  if (e.response?.status !== 401) {
    let type
    let message = e.message
    switch (e?.status || e.response.status) {
      case 200:
        type = 'success'
        message = e.data.message
        break
      case 404:
        type = 'warning'
        break
      case 422:
        type = 'warning'
        message = e.response.data.message
        break
      case 500:
        type = 'danger'
        break
    }
    store.commit('SET_GLOBAL_ALERT_DATA', {
      timer: 4,
      type,
      message
    })
  }
}