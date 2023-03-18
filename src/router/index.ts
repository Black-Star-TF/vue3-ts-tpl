import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hone',
    component: Home
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
