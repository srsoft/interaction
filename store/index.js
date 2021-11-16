const state = () => ({
  pageTransition: {
    name: 'router-view',
    mode: ''
  }
})

const mutations = {
  setPageTransition (state, value) {
    if (value === 'default') {
      state.pageTransition = {
        name: 'router-view',
        mode: 'in-out'
      }
    }
    if (value === 'back') {
      state.pageTransition = {
        name: 'router-view-back',
        mode: ''
      }
    }
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
