import Vue from 'vue'
import {
  RESET_STATE,
  MODAL_STATUS,
} from '@/store/mutation-types'

let initialState = {
  modalStatus: false,
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  modalStatus: function (state) {
    return state.modalStatus
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
  [MODAL_STATUS]: function (state, isModalOpen) {
    state.modalStatus = isModalOpen
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}