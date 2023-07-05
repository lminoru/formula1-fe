import { createStore } from 'vuex'

export default createStore({
  state: {
    username: "",
  },
  getters: {
  },
  mutations: {
    login(state, username) {
      state.username = username;
      localStorage.setItem('username', username);
      alert('Logged in');
    },
    logout(state) {
      state.username = "";
      localStorage.removeItem('username');
      alert('Logged out');
    },
    initialiseStore(state) {
      if (localStorage.getItem('username')) {
        state.username = localStorage.getItem('username');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
