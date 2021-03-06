import Login from '~/views/login.vue'
import Main from '~/views/main.vue'
import Home from '~/views/demo/home.vue'
import Error403 from '~/components/error/403.vue'
import Error404 from '~/components/error/404.vue'
import Error500 from '~/components/error/500.vue'
import {routes} from '~/utils/menus'
const _routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/',
    component: Main,
    meta: {requiresAuth: true},
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        hidden: true,
        meta: {requiresAuth: true},
      },
      ...routes,
    ]
  },
  {
    path: '/403',
    component: Error403,
    name: '',
  },
  {
    path: '/404',
    component: Error404,
    name: '',
  },
  {
    path: '/500',
    component: Error500,
    name: '',
  },
]
console.log(_routes)
export default _routes;