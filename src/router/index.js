import Vue from 'vue'
import VueRouter from 'vue-router'

const MainLayout = () => import(/* webpackChunkName: "main-layout" */ '@/views/layouts/MainLayout')
const AuthLayout = () => import(/* webpackChunkName: "auth-layout" */ '@/views/layouts/AuthLayout')
const LoginPage = () => import(/* webpackChunkName: "login-page" */ '@/views/pages/auth/LoginPage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginPage,
        meta: {
          hideForAuth: true
        }
      }
    ]
  },
  {
    path: '',
    component: MainLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
