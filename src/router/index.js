import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Role from '@/components/role/Role'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: HelloWorld
    },
    {path: '/', redirect: '/index'},
    {
      path: '/index',
      component: HelloWorld,
      children:[
        {path:'/login',component:Login},
        {path:'/register',component:Register}
      ]
    },
    {path:'/role',component:Role}
  ]
})
