import Vue from 'vue'
import Router from 'vue-router'
import projectPages from '@/components/pages/projectPages'
import newsPages from '@/components/pages/newsPages'
import homePages from '@/components/pages/homePages'
import aboutPages from '@/components/pages/aboutPages'
import salesPages from '@/components/pages/salesPages'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sales',
      component: salesPages
    },
    {
      path:'/project',
      component: projectPages
    },
    {
      path: '/news',
      component: newsPages
    },
    {
      path: '/home',
      component: homePages
    },
    {
      path: '/about',
      component: aboutPages
    }
  ]
})
