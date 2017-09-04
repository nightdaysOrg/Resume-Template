import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index.vue'
import template1 from '@/pages/templates/template1/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/template1',
      component: template1
    }
  ]
})
