import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GameScene from "../views/GameScene";
import YouWin from "../views/YouWin";
import YouLose from "../views/YouLose";
import Stats from "../views/Stats";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'GameScene',
    component: GameScene
  },
  {
    path: '/win',
    name: 'YouWin',
    component: YouWin
  },
  {
    path: '/lose',
    name: 'YouLose',
    component: YouLose
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
