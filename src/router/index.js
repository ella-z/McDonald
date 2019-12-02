import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'

import order from '../views/order'
import menu from '../views/menu'
import discover from '../views/discover'
import member from '../views/user/member'
import detail from '../components/detail'
import packages from '../components/packages'
import want from '../components/want'
import MenuCard from '../views/MenuCard'
import user from '../views/user/user'
import administrator from '../views/user/administrator'
import client from '../views/user/client'
import allOrder from '../views/user/allOrder'
import statistics from '../views/user/statistics'
import administratorIndex from '../views/user/administratorIndex'
import orderDetail from '../components/orderDetail'

Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
} 

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
                namqe: 'order',
                component: order
            },
            {
                path:'/index/discover',
                name: 'discover',
                component: discover,
            },
            {
                path:'/index/user',
                name: 'user',
                component: user,
              children:[
                {
                  path:'/index/user/member',
                  name:'member',
                  component:member
                },
                {
                  path:'/index/user/administrator',
                  name:'administrator',
                  component:administrator,
                  children:[
                    {
                      path:'/index/user/administrator/administratorIndex',
                      name:'administratorIndex',
                      component:administratorIndex
                    },
                    {
                      path:'/index/user/administrator/allOrder',
                      name:'allOrder',
                      component:allOrder
                    },
                    {
                      path:'/index/user/administrator/allOrder/orderDetail',
                      name:'orderDetail',
                      component:orderDetail
                    },
                    {
                      path:'/index/user/administrator/statistics',
                      name:'statistics',
                      component:statistics
                    },
                  ]
                },
                
                {
                  path:'/index/user/client',
                  name:'client',
                  component:client
                }
              ]
            },
        ]
      },
      {
        path:'/menu',
        name:'menu',
        component:menu
      },
      {
        path:'/detail',
        name:'detail',
        component:detail
      },
      {
        path:'/packages',
        name:'packages',
        component:packages
      },
      {
        path:'/want',
        name:'want',
        component:want
      },
      {
        path:'/MenuCard',
        name:'MenuCard',
        component:MenuCard
      }
     
]

export default new Router({
    mode:"history",
    routes: router,
   
})
