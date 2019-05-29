import Vue from 'vue'
import Vuex from 'vuex'
import foo from './modules/foo'
import bar from './modules/bar'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foo,
    bar
  }
})

export default store
