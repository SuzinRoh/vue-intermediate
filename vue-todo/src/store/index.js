import { createStore } from 'vuex'

import todoApp from './modules/todoApp'

import * as getters from './getters'
import * as mutations from './mutatioms'

/**
 * 로컬스토레지에 있는 todo 아이템들을 갱신받아옴
 */
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        } 
        return arr;  
    }
};

export const store = createStore({
  state: {
    todoItems: storage.fetch()
  }
  , getters
  , mutations
});