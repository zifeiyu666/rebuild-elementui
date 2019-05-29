import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Zfui from '../packages/index.js'
Vue.config.productionTip = false
import '../theme/index.scss';
Vue.use(Zfui)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
