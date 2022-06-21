import { createStore } from 'vuex'

import todoApp from './modules/todoApp'

// import * as getters from './getters'
// import * as mutations from './mutatioms'



export const store = createStore({
  modules: {
    todoApp
  }
});