export const state = () => ({
  list: []
})

export const mutations = {
  setList(state, payload) {
    state.list = payload
  },
  removeItem(state, id) {
    state.list = state.list.filter(item => item.id != id)
  }
}

export const actions = {
  async destroyAction(context, id) {
    await this.$axios.delete(`http://localhost:3333/posts/${id}`)
    context.commit('removeItem', id)
  }
}
