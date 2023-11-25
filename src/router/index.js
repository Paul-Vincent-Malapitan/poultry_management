import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import UserManagement from '../views/UserManagement.vue'
import BranchManagement from '../views/BranchManagement.vue'
import InventoryManagement from '../views/InventoryManagement.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/BranchManage',
    name: 'BranchManage',
    component: BranchManagement
  },
  {
    path: '/UserManage',
    name: 'UserManage',
    component: UserManagement
  },
  {
    path: '/InventoryManage',
    name: 'InventoryManage',
    component: InventoryManagement
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
