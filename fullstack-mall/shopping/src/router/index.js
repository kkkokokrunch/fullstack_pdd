import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import ('../views/home/Home.vue')
const Recommend = () =>import ('../views/recommend/Recommend')
const Category = () =>import ('../views/category/Category.vue')
const Cart = () =>import ('../views/cart/Cart.vue')
const Me = () =>import ('../views/me/Me.vue')
const Hot = () =>import ('../views/home/homeChild/Hot.vue')
const Food = () =>import ('../views/home/homeChild/Food.vue')
const ManCloth = () =>import ('../views/home/homeChild/ManCloth.vue')
const WomenCloth = () =>import ('../views/home/homeChild/WomenCloth.vue')
const ShoeBag = () =>import ('../views/home/homeChild/ShoeBag.vue')
const BaseInfo = () =>import ('../views/baseInfo/BaseInfo.vue')
const Login = () =>import ('../views/login/Login.vue')
const Profile = () =>import ('../views/me/Profile.vue')
Vue.use(VueRouter)

const routes = [
{
    path: '',
    redirect: '/home',
    meta: {showTabBar:true}
},
{
    path: '/home',
    component: Home,
    children:[
      {
        path: '/home',
        redirect: '/home/hot',
        meta: {showTabBar:true}
      },
      {
        path:'hot',
        component:Hot,
        meta: {showTabBar:true}
      },{
        path:'food',
        component:Food
      },{
        path:'manCloth',
        component:ManCloth
      },{
        path:'womenCloth',
        component:WomenCloth
      },{
        path:'shoeBag',
        component:ShoeBag
      },
    ]
},
{
  path: '/recommend',
  component: Recommend,
  meta: {showTabBar:true}
},
{
  path: '/category',
  component: Category,
  meta: {showTabBar:true}
},
{
  path: '/cart',
  component:Cart,
  meta: {showTabBar:true}
},
{
  path: '/me',
  component: Me,
  meta: {showTabBar:true}
},
{
  path:'/baseinfo',
  component:BaseInfo
},
// {
//   path:'/profile',
//   component:Profile,
//   meta: {showTabBar:true}
// },
{
  path:'/login',
  component:Login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
