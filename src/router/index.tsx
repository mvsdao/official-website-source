import Home from '@/pages/Home'
import Layout from '@/layout'
import Nft from '@/pages/Nft'
import Shop from '@/pages/Shop'
import TradingFloor from '@/pages/TradingFloor'
import Treasury from '@/pages/Treasury'
import Governance from '@/pages/Governance'
import MyNft from '@/pages/User/MyNft'
import MyHome from '@/pages/User/Home'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'
import No404 from '@/pages/404'

const Router: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />,
      },
      {
        path: '/home',
        exact: true,
        component: Home,
      },
      {
        path: '/ballnft',
        exact: true,
        component: Nft,
      },
      {
        path: '/foundry',
        exact: true,
        component: Shop,
      },
      {
        path: '/trading',
        exact: true,
        component: TradingFloor,
      },
      {
        path: '/treasury',
        exact: true,
        component: Treasury,
      },
      {
        path: '/governance',
        exact: true,
        component: Governance,
      },
      {
        path: '/myhome',
        exact: true,
        component: MyHome,
      },
      {
        path: '/mynft',
        exact: true,
        component: MyNft,
      },
      {
        path: '/404',
        component: No404,
      },
      {
        path: '*',
        component: No404,
      },
    ],
  },
  {
    path: '/404',
    component: No404,
  },
  {
    path: '*',
    component: No404,
  },
]

export default Router
