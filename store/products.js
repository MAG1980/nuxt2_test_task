export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  }
}

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
