import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-foo" */ 'views/Home')
const User = () => import(/* webpackChunkName: "group-foo" */ 'views/Manage/user')
const Merchant = () => import(/* webpackChunkName: "group-foo" */ 'views/Manage/merchant')
const Food = () => import(/* webpackChunkName: "group-foo" */ 'views/Manage/food')
const Order_form = () => import(/* webpackChunkName: "group-foo" */ 'views/Manage/order_form')
const Administrator = () => import(/* webpackChunkName: "group-foo" */ 'views/Manage/Administrator')
const Store = () => import(/* webpackChunkName: "group-foo" */ 'views/Adddata/store')
const Commodity = () => import(/* webpackChunkName: "group-foo" */ 'views/Adddata/commodity')
const Chart = () => import(/* webpackChunkName: "group-foo" */ 'views/Chart')
const Compile = () => import(/* webpackChunkName: "group-foo" */ 'views/Compile')
const Explain = () => import(/* webpackChunkName: "group-foo" */ 'views/Explain')
const Setting = () => import(/* webpackChunkName: "group-foo" */ 'views/Setting')

const error = () => import(/* webpackChunkName: "group-foo" */ 'views/error')

const register = () => import(/* webpackChunkName: "group-foo" */ 'views/register')
const login = () => import(/* webpackChunkName: "group-foo" */ 'views/login')

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/Home'
        },{
            //首页
            path:'/Home',
            component:Home
        },{
            //数据管理/用户列表
            path:'/manage/User',
            component:User
        },{
            //数据管理/商家列表
            path:'/manage/Merchant',
            component:Merchant
        },{
            //数据管理/食品列表
            path:'/manage/Food',
            component:Food
        },{
            //数据管理/订单列表
            path:'/manage/Order_form',
            component:Order_form
        },{
            //数据管理/订单列表
            path:'/manage/Administrator',
            component:Administrator
        },{
            //添加数据/商铺
            path:'/adddata/Store',
            component:Store
        },{
            //添加数据/商品
            path:'/adddata/Commodity',
            component:Commodity
        },{
            //图表
            path:'/Chart',
            component:Chart
        },{
            //编辑
            path:'/Compile',
            component:Compile
        },{
            //设置
            path:'/Setting',
            component:Setting
        },{
            //说明
            path:'/Explain',
            component:Explain
        },{
            //登录
            path:'/login',
            component:login
        },{
            //注册
            path:'/register',
            component:register
        },{
            //报错404
            path:'*',
            component:error
        }
    ]
})