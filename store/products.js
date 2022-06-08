export const state = () => ({
  products: []
})

export const mutations = {
  /*   increment(state) {
      state.counter++
    }, */

  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  }
}

/* {
  actions: {
    async getIP ({ commit }) {
      const ip = await this.$axios.$get('http://icanhazip.com')
      commit('SET_IP', ip)
    }
  }
} */

export const actions = {
  async GET_PRODUCTS_FROM_API({commit}) {
    const data = await this.$axios.$get(('http://localhost:3000/api/getJSON'))
    const products = data.goods
    commit('SET_PRODUCTS_TO_STATE', products)
    return products
  }
}

export const getters = {
  // getCounter: state => state.counter
  GET_PRODUCTS_FROM_STATE: state => state.products
}
