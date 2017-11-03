import Vue from 'vue'
import Router from 'vue-router'

//页面
import Login from '@/pages/login/index.vue'
import template1 from '@/pages/templates/template1/index.vue'
import EnterAll from '@/pages/EnterAll/index.vue'
import myself from '@/pages/myself/index.vue'
import getinfo from '@/pages/getinfo/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: getinfo
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/template1',
      component: template1
    },{
      path:'/enterall',
      component:EnterAll
    },{
      path:'/myself',
      component:myself
    },{
      path:'/getinfo',
      component:getinfo
    }
  ]
})
