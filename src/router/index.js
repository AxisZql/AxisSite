import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList.vue'
import BooklList from '../views/BookList.vue'
import VideoList from '../views/VideoList.vue'
import LeaveComment from '../views/LeaveComment.vue'

Vue.use(VueRouter)

const routes = [ // 路由关系数据
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home', // 对应路由地址
    name: 'home', // 路由对应的名称
    component: Home
    // 可以直接用一个路由组件，这样写是懒加载，触发对应路由的时候才会去请求这个路由组件的信息
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: ArticleList
  },
  {
    path: '/bookList',
    name: 'booklList',
    component: BooklList
  },
  {
    path: '/videoList',
    name: 'videoList',
    component: VideoList
  },
  {
    path: '/leaveComment',
    name: 'leaveComment',
    component: LeaveComment
  }
]

const router = new VueRouter({
  // mode: 'hash', // 可以选择hash
  // base: process.env.BASE_URL, //  配置单页应用的基路径

  linkActiveClass: 'is-active',
  routes
})

export default router
