import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/home.vue'
import LoginPage from '@/components/login.vue'
import RegisterPage from '@/components/register.vue'
import PostPage from '@/components/post.vue'
import EssayPage from '@/components/essay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/post',
      name: 'post',
      component: PostPage,
    },
    {
      path: '/essay',
      name: 'essay',
      component: EssayPage,
    },
  ],
})

export default router
