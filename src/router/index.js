import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'

import order from '../views/order'
import menu from '../views/menu/menu'
import discover from '../views/discover'
import member from '../views/user/member'
import detail from '../components/detail'
import packages from '../components/packages'
import want from '../components/want'
import MenuCard from '../views/menu/MenuCard'
import user from '../views/user/user'
import client from '../views/user/client'
import allOrder from '../views/user/allOrder'
import statistics from '../views/user/statistics'
import administratorIndex from '../views/user/administratorIndex'
import orderDetail from '../components/orderDetail'
import settlement from '../views/menu/settlement'
import payment from '../views/menu/payment'

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
                  component:member,
                  meta:{
                    login_require:true
                  }
                },
                {
                  path:'/index/user/administratorIndex',
                  name:'administratorIndex',
                  component:administratorIndex,
                },
                {
                      path:'/index/user/allOrder',
                      name:'allOrder',
                      component:allOrder
                    },
                    {
                      path:'/index/user/administratorIndex/allOrder/orderDetail',
                      name:'orderDetail',
                      component:orderDetail
                    },
                    {
                      path:'/index/user/administratorIndex/statistics',
                      name:'statistics',
                      component:statistics
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
        path:'/payment',
        name:'payment',
        component:payment
      },
      {
        path:'/settlement',
        name:'settlement',
        component:settlement
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
