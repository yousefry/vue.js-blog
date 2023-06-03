import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/components/PageNotFound.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home-layout" */ '../layout/HomeLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        alias: ['home', '/'],
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/post/:id',
        name: 'post-id',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "postId" */ '../views/PostView.vue')
      },
      {
        path: '/contact-us',
        name: 'contactus',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contactus" */ '../views/ContactusView.vue')
      },
      {
        path: '/category/:slug',
        name: 'category-slug',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categoryslug" */ '../views/CategoryView.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
      },
    ]
  },
  {
    path: '/404',
    component: PageNotFound,
  },
  {
    path: '/:match(.*)',
    name: 'pageNotFound',
    redirect: '/404'
  },
  {
    path: '/login',
    name: 'login',
    alias: ['/login', '/sing-in'],
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    alias: ['/register', '/sing-up'],
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
