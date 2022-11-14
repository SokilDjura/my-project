import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

const MainLayout = () => import(/* webpackChunkName: "main-layout" */ '@/views/layouts/MainLayout')
const DashboardPage = () => import(/* webpackChunkName: "dashboard-page" */ '@/views/pages/dashboard/DashboardPage')
const CheckPage = () => import(/* webpackChunkName: "checkVisit-page" */ '@/views/pages/checkVisit/CheckPage')
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
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'DashboardPage',
        component: DashboardPage,
        meta: {
          authRequired: true
        }
      },
      {
        path: '/check',
        name: 'CheckPage',
        component: CheckPage,
        meta: {
          authRequired: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  if (!authRequired) next()
  if (!store.getters['authStore/isLogged'] && authRequired) {
    next({ name: 'LoginPage' })
  }
  const hideForAuth = routeTo.matched.some((route) => route.meta.hideForAuth)
  if (store.getters['authStore/isLogged'] && hideForAuth) {
    next({ name: 'DashboardPage' })
  }
  next()
})

export default router
