import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentInstance   } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// Pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import BlogDetailPage from './pages/BlogDetailPage.vue'
import BlogIndexPage from './pages/BlogIndexPage.vue'
import ContactPage from './pages/ContactPage.vue'
import ErrorPage from './pages/ErrorPage.vue'
import FaqPage from './pages/FaqPage.vue'
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue'
import LoginPage from './pages/LoginPage.vue'
import PortfolioDetailPage from './pages/PortfolioDetailPage.vue'
import PortfolioIndexPage from './pages/PortfolioIndexPage.vue'
import PricePage from './pages/PricePage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import ResetPasswordPage from './pages/ResetPasswordPage.vue'
import ServicePage from './pages/ServicePage.vue'
import ServiceDetailPage from './pages/ServiceDetailPage.vue'

const siteTitle = getCurrentInstance()?.appContext.config.globalProperties.$siteTitle || "Site Title" 

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage, meta: { title: `Home - ${siteTitle}` } },
  { path: '/about', name: 'About', component: AboutPage, meta: { title: `About Us - ${siteTitle}` } },
  { path: '/blog', name: 'Blog', component: BlogIndexPage, meta: { title: `Blog - ${siteTitle}` } },
  { path: '/blog/:slug', name: 'BlogDetail', component: BlogDetailPage, meta: { title: `Blog Details - ${siteTitle}` } },
  { path: '/contact', name: 'Contact', component: ContactPage, meta: { title: `About Us - ${siteTitle}` } },
  { path: '/error', name: 'Error', component: ErrorPage, meta: { title: `Page Not Found - ${siteTitle}` } },
  { path: '/faq', name: 'Faq', component: FaqPage, meta: { title: `Faq - ${siteTitle}` } },
  { path: '/auth/email/forgot', name: 'ForgotPassword', component: ForgotPasswordPage, meta: { title: `Forgot Password - ${siteTitle}` } },
  { path: '/auth/login', name: 'Login', component: LoginPage, meta: { title: `Login - ${siteTitle}` } },
  { path: '/auth/register', name: 'Register', component: RegisterPage, meta: { title: `Register - ${siteTitle}` } },
  { path: '/auth/email/reset/:token', name: 'ResetPassword', component: ResetPasswordPage, meta: { title: `Reset Password - ${siteTitle}` } },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioIndexPage, meta: { title: `Portfolio - ${siteTitle}` } },
  { path: '/portfolio/:id', name: 'PortfolioDetail', component: PortfolioDetailPage, meta: { title: `Portfolio Details - ${siteTitle}` } },
  { path: '/price', name: 'Price', component: PricePage, meta: { title: `Price - ${siteTitle}` } },
  { path: '/service', name: 'Service', component: ServicePage, meta: { title: `Service - ${siteTitle}` } },
  { path: '/service/:id', name: 'ServiceDetail', component: ServiceDetailPage, meta: { title: `Service Details - ${siteTitle}` } },
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
