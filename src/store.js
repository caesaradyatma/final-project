import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: '',
    vuexAuth: true,
    email: 'test@email.com',
    password: 'test',
  },
  mutations: {
    login(state) {
      state.vuexAuth = true;
      localStorage.setItem('auth', true);
    },
    logout(state) {
      state.vuexAuth = false;
      localStorage.setItem('auth', false);
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
});
