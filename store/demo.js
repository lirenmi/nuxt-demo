export const state = () => ({
  pageName: 'Vuex',
  count: 0
})

export const mutations = {
  add(state, payload) {
    state.count = state.count + payload
  }
}

export const actions = {
  addAction(context, payload) {
    context.commit('add', payload)
  }
}
