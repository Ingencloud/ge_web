import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import intro from "../views/intro.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue"
import Code from "../views/code.vue"
import OurStory from '../components/ourstory.vue';
import Schedule from '../components/schedule.vue';
import Gallery from '../components/gallery.vue';
import Gift from '../components/gift.vue';


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
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


export default router
