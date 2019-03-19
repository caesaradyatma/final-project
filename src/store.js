import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: '',
    vuexAuth: false,
    email: 'test@email.com',
    password: 'test',
  },
  mutations: {
    login(state) {
      state.vuexAuth = true;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
  },
});
