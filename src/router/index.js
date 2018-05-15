import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Works from '@/components/Works'
import Friends from '@/components/Friends'
import About from '@/components/About'
import ArticlesDetail from '@/components/ArticlesDetail'


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles

    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    // {
    //   path: '/friends',
    //   name: 'Friends',
    //   component: Friends
    // },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/articles/detail',
      name: 'ArticlesDetail',
      component: ArticlesDetail
    }

  ]
})
