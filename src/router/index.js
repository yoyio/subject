import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('../views/ToolView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/submitText',
    name: 'submitText',
    component: () => import('../views/SubmitText.vue'),
    props: (route) => ({
      query: route.query.id
    })
  },
  {
    path: '/fileTable',
    name: 'fileTable',
    component: () => import('../views/FileTable.vue'),
    props: (route) => ({
      query: route.query
    })
  },
  {
    path: '/submitFile/:id',
    name: 'submitFile',
    component: () => import('../views/SubmitFile.vue')
  },
  {
    path: '/textTool',
    name: 'textTool',
    component: () => import('../views/textTool.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
