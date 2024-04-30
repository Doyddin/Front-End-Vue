import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Sign from '@/views/SignView.vue'

const routes = [
  // Rota padrão: redireciona para a tela de login
  {
    path: '/',
    redirect: '/sign'
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
