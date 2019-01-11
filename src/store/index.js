import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import dialog_store from './treeStrore/dialog_store.js';
export default new  vuex.Store({
  modules: {
    dialog: dialog_store
  }
})
