import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

const routes = [
  // { path: '/', component: Foo },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({
  routes
}) 