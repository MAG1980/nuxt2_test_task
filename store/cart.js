export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCT_TO_CART: (state, product) => {
    state.products.push(product)
  }
}

export const actions = {
  ADD_TO_CART({commit}, product) {
    commit('SET_PRODUCT_TO_CART', product)
  }
}

export const getters = {
  GET_CART: state => state.products
}
