export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCT_TO_CART: (state, product) => {
    if (state.products.length === 0) {
      state.products.push({...product, amount: 1})
    } else {
      let found = false;
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === product.id) {
          state.products[i].amount++
          found = true
          break
        }
      }
      if (!found) {
        state.products.push({...product, amount: 1})
      }
    }
  }
}

export const actions = {
  ADD_TO_CART({commit}, product) {
    commit('SET_PRODUCT_TO_CART', product)
  }
}

export const getters = {
  GET_CART: state => state.products,
  GET_ROWS_COUNT: state => state.products.length
}
