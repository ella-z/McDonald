import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'

import order from '../components/order'
import menu from '../components/menu'
import discover from '../components/discover'
import member from '../components/member'

Vue.use(Router);

const router =  [
    {
        path: '*',      //没有配置的路径
        redirect: '/index'   //默认跳转首页
      },
      {
        path: '/index',
        component: index,
        children:[
            {
                path:'/',
                name: 'order',
                component: order
            },
            {
                path:'/index/discover',
                name: 'discover',
                component: discover
            },
            {
                path:'/index/member',
                name: 'member',
                component: member
            },
        ]
      },
      {
        path:'/menu',
        name:'menu',
        component:menu
      }
     
]
export default new Router({
    routes: router,
    mode:"history",
})