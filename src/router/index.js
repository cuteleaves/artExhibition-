import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/home',
        component: home,
        children: [
            { path: '/', redirect: '/vocalistenroll' },
            { path: '/vocalistenroll', component: solve => require(['../components/artenroll/vocalistEnroll.vue'], solve) },
            { path: '/instrumentalEnroll', component: solve => require(['../components/artenroll/instrumentalEnroll.vue'], solve) },
            { path: '/danceEnroll', component: solve => require(['../components/artenroll/danceEnroll.vue'], solve) },
            { path: '/playEnroll', component: solve => require(['../components/artenroll/playEnroll.vue'], solve) },
            { path: '/recitationEnroll', component: solve => require(['../components/artenroll/recitationEnroll.vue'], solve) },
            { path: '/drawingEnroll', component: solve => require(['../components/studentartenroll/drawingEnroll.vue'], solve) },
            { path: '/handwritingEnroll', component: solve => require(['../components/studentartenroll/handwritingEnroll.vue'], solve) },
            { path: '/shootEnroll', component: solve => require(['../components/studentartenroll/shootEnroll.vue'], solve) },
            { path: '/deviseEnroll', component: solve => require(['../components/studentartenroll/deviseEnroll.vue'], solve) },
            { path: '/movieEnroll', component: solve => require(['../components/studentartenroll/movieEnroll.vue'], solve) },
            { path: '/artPlaystatistics', component: solve => require(['../components/statistics/artPlayStatistics.vue'], solve) },
            { path: '/studentStatistics', component: solve => require(['../components/statistics/studentStatistics.vue'], solve) },
            { path: '/collegeStatistics', component: solve => require(['../components/statistics/collegeStatistics.vue'], solve) },
            { path: '/artWorkStatistics', component: solve => require(['../components/statistics/artWorkStatistics.vue'], solve) },
            { path: '/excellentStatistics', component: solve => require(['../components/statistics/excellentStatistics.vue'], solve) },
            { path: '/collegeDrawingEnroll', component: solve => require(['../components/collegeenroll/collegeDrawingEnroll.vue'], solve) },
            { path: '/collegeHandweitingEnrol', component: solve => require(['../components/collegeenroll/collegeHandweitingEnrol.vue'], solve) },
            { path: '/collegeShootEnrol', component: solve => require(['../components/collegeenroll/collegeShootEnrol.vue'], solve) },
            { path: '/artWorkEnrol', component: solve => require(['../components/artworkenroll/artWorkEnrol.vue'], solve) },
            { path: '/excellentEnrol', component: solve => require(['../components/excellentenroll/excellentEnrol.vue'], solve) },
        ]
    },
]
const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router