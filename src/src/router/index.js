import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/slide-test',
      name: 'slide-test',
      component: () => import('@/views/slide-test.vue')
    },
    {
      path: '/video-test',
      name: 'video-test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/video-test.vue')
    }
  ]
})

export default router
