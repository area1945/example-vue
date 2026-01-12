import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

const siteTitle = "Hello World";

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage, meta: { title: `Home - ${siteTitle}` } },
  { path: '/about', name: 'About', component: AboutPage, meta: { title: `About Us - ${siteTitle}` } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  const defaultTitle = siteTitle
  document.title = to.meta.title as string || defaultTitle
})

export default router
