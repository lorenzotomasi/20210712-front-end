import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Park from '../views/park.vue'
import Attraction from '../views/attraction.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/park/:id',
    name: 'ParkDetails',
    component: Park
  },
  {
    path: '/:parkId/attraction/:id',
    name: 'AttractionDetails',
    component: Attraction
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
