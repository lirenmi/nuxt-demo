export const state = () => ({
  pageName: 'Vuex',
  count: 0
})

export const mutations = {
  add(state, payload) {
    state.count = state.count + payload
  }
}
