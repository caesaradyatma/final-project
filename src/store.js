import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
  },
  mutations: {
    login(state,auth) {
      state.auth = auth;
    },
  },
  actions: {

  },
});
