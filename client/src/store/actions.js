import { types } from './mutation-types'

export const actions = {
  addToCart({ commit }, product) {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
};