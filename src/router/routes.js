/**
 * 配置路由
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter)

import Home from '../pages/Home/Home.vue'
import Catalogue from '../pages/Catalogue/Catalogue.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Things from '../pages/Things/Things.vue'

export default [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catalogue',
      component: Catalogue
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/things',
      component: Things
    }
  ]

