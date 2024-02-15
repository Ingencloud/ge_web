import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import intro from "../views/intro.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue"
import Code from "../views/code.vue"
import OurStory from '../components/ourstory.vue';
import Schedule from '../components/schedule.vue';
import Gallery from '../components/gallery.vue';
import Gift from '../components/gift.vue';
import Sorry from '../views/sorry.vue'
import isAuthenticated from '../middleware/isAuthenticated'


const routes = [
  {
    path: '/',
    name: 'Intro',
    component: intro
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/register',
    name: 'Regiater',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // beforeEnter: checkAuthentication
    meta: { requiresAuth: true } // Require authentication for this route
  },
  {
    path: '/sorry',
    name: 'Sorry',
    component: Sorry
  },
  { path: '/ourstory', component: OurStory, meta: { scrollTo: '#ourstory-section' } },
  { path: '/schedule', component: Schedule, meta: { scrollTo: '#schedule-section' } },
  { path: '/gallery', component: Gallery, meta: { scrollTo: '#gallery-section' } },
  { path: '/gift', component: Gift, meta: { scrollTo: '#gift-section' } },
  
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
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

// Navigation guard to check if route requires authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login') // Redirect to login page if not authenticated
  } else {
    next()
  }
})

// function checkAuthentication(to, from, next){
//     console.log(isAuthenticated());
//     if(isAuthenticated()) next();
//     else next("/login")
// }

export default router