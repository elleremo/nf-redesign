import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Catalog from '../views/Catalog.vue'
import ProductPage from '../views/ProductPage.vue'
import Cart from '../views/Cart.vue'
import Personal from '../views/Personal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
 
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/product-page',
      name: 'product-page',
      component: ProductPage
    }, 
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  ]
})

export default router
