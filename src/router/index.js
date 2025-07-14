import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Fonts from '../views/content/Fonts.vue'
import Bazar from '../views/content/BazarBlend.vue'
import Logos from '../views/content/Logos.vue'
import Map from '../views/content/Map.vue'
import Misc from '../views/content/Misc.vue'
import SpiceTrail from '../views/content/SpiceTrail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    { path: '/fonts', 
      name: 'Fonts', 
      component: Fonts },
    { path: '/bazar', name: 'Bazar', component: Bazar },
    { path: '/logos', name: 'Logos', component: Logos },
    { path: '/map', name: 'Map', component: Map},
    { path: '/misc', name: 'Misc', component: Misc },
    {path: '/spicetrail', name: 'SpiceTrail', component: SpiceTrail}
  ]
})

export default router
