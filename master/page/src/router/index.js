import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/page/ShoppingMall'
import { Button, Row, Col ,Search , Swipe , SwipeItem,List,Field,NavBar} from 'vant'
import Register from '@/components/page/Register'
import Login from '@/components/page/Login'


Vue.use(Router).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(List).use(Field).use(NavBar)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },{
      path:'/register',
      name:'Register',
      component:Register
    },{
      path:'/Login',
      name:'/Login',
      component:Login
    }
  ]
})
