export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    this.state.counter--
  }
}

export const getters = {
  getCounter: state => state.counter
}
