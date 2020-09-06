import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: true,
    userName: '',
    nickName: '',
  },
  mutations: {
    changeLoginStatus(state, status) {
      state.isLogin = status;

      if (!status) {
        state.userName = '';
        state.nickName = '';
      }
    },
    setName(state, o) {
      state.userName = o.userName;
      state.nickName = o.nickName;
    }
  },
});

export default store;