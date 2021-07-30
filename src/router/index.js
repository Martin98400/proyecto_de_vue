import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agregar from '../views/Agregar.vue'
import detalle from '../views/detalle'
import visualizar from '../views/visualizar'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: Agregar
  },
  {
    path: '/detalle',
    name: 'detalle',
    component: detalle
  },
  {
    path: '/visualizar',
    name: 'vizualizar',
    component: visualizar
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
