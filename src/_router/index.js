import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/_routes/Root'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/home',
      component: Root,
      children: [
        {
          path: 'home',
          component: () => import("@/_routes/Home")
        },
      ]
    }
  ]
})
