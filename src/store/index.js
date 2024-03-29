import Vue                          from 'vue'
import Vuex                         from 'vuex'
// import rootModule                   from './rootModule'

import modals                    from './modules/modals'
import general                    from './modules/general'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    modals,
    general
  },
  strict: debug
})
