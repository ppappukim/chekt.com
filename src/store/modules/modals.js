import Vue from 'vue'
import {
  RESET_STATE,
  MAIN_YOUTUBE_MODAL_STATUS,
  HOME_MOBILE_MENU_MODAL_STATUS
} from '@/store/mutation-types'

let initialState = {
  mainYoutubeModalStatus: false,
  homeMobileMenuModalStatus: false,
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  mainYoutubeModalStatus: function (state) {
    return state.mainYoutubeModalStatus
  },
  homeMobileMenuModalStatus: function (state) {
    return state.homeMobileMenuModalStatus
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
  [MAIN_YOUTUBE_MODAL_STATUS]: function (state, isModalOpen) {
    state.mainYoutubeModalStatus = isModalOpen
  },
  [HOME_MOBILE_MENU_MODAL_STATUS]: function (state, isModalOpen) {
    state.homeMobileMenuModalStatus = isModalOpen
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}