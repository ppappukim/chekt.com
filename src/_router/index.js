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
        {
          path: 'whychekt',
          component: () => import("@/_routes/pages/WhyChekt")
        },
        {
          path: 'enterprise',
          component: () => import("@/_routes/pages/Enterprise")
        },
        {
          path: 'support',
          component: () => import("@/_routes/pages/Support")
        },
        {
          path: 'partners',
          component: () => import("@/_routes/pages/Partners")
        },
      ]
    }
  ]
})
