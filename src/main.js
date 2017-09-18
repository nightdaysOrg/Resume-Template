// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

import '../node_modules/element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import '../theme/bootstrap/bootstrap-theme.min.css';
import '../theme/bootstrap/bootstrap.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
