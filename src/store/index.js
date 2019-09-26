import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    signedIn: false,
    leaderboard: []
  },
  getters: {
    signedIn(state) {
      return state.signedIn;
    },
    leaderboard(state) {
      return state.leaderboard;
    }
  },
  mutations: {
    signInStatus(state, status) {
      state.signedIn = status;
    },
    leaderboard(state, leaderboard) {
      state.leaderboard = leaderboard;
    }
  },
  actions: {
    signin({ commit }, data) {
      axios
        .post("https://kctf.parsasam.ir/ctf/sign_in.php", {
          username: data.user,
          password: data.password
        })
        .then(res => {
          if (res.data) {
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("token", res.data.token);
            commit("signInStatus", true);
            data.callback();
          }
        })
        .catch(err => alert(err.response.data.message));
    },
    leaderboard({ commit }) {
      axios
        .get("https://kctf.parsasam.ir/ctf/leaderboard.php")
        .then(res => {
          if (res.data) {
            commit("leaderboard", res.data);
          }
        })
        .catch(err => alert(err.response.data.message));
    }
  }
});
