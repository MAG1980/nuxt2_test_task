import {uid} from 'uid'

export const state = () => ({
  orders: []
})

export const mutations = {
  SET_ORDERS_TO_LIST: (state, order) => {
    state.orders.push({...order, id: uid()})
  }
}

export const actions = {
  ADD_TO_LIST({commit}, order) {
    commit('SET_ORDERS_TO_LIST', order)
  }
}

export const getters = {}
