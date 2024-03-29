// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './_router'
import store  from './store'

Vue.config.productionTip = false

// Plugin
import ToolPlugin from './plugins/tool'


Vue.use(ToolPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
