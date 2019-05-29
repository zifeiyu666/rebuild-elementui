const state = {
  name: 'bar'
}

const getters = {
  cName (state) {
    return state.name.concat('-yxp')
  }
}
const actions = {
  tap ({ commit }, name) {
    commit('tap', { name })
  }
}
const mutations = {
  tap (state, { name }) {
    state.name = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}