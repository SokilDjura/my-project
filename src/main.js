import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import setupInterceptors from './services/setupInterceptors'
import Vuelidate from 'vuelidate'
import VCalendar from 'v-calendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-swatches/dist/vue-swatches.css"
import '@/assets/scss/app.scss'

Vue.use(BootstrapVue)
setupInterceptors()
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VCalendar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
