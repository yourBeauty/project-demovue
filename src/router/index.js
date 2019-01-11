import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import FirstPart from '@/components/FirstPart'
import SecondPart from '@/components/SecondPart'
import UserPage from '@/components/UserComponents/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: 'UserPage',
          component: UserPage
        }
      ]
    },

  {
    path: '/',
    name: 'Login',
    component: Login
  },

    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name:'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name:'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
