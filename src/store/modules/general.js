import Vue from 'vue'
import {
  RESET_STATE,
  HEADER_SCROLL_STATUS,
} from '@/store/mutation-types'

let initialState = {
  headerScrolled: false,
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  headerScrolled: function (state) {
    return state.headerScrolled
  },
}

// actions
const actions = {
}

// mutations
const mutations = {
  [RESET_STATE]: function (state) {
    for (let f in state) {
      Vue.set(state, f, initialState[f])
    }
  },
  [HEADER_SCROLL_STATUS]: function (state, isScrolled) {
    state.headerScrolled = isScrolled
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}