import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Portfolio from './../components/portfolio/Portfolio'
import Stocks from './../components/stocks/Stocks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/portfolio',
      component: Portfolio,
      name: 'portfolio'
    },
    {
      path: '/stocks',
      component: Stocks,
      name: 'stocks'
    },
  ]
})
