import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const pstate = 1;

export const store = new Vuex.Store({
  state: {
    signedIn: false,
    dark: false,
    leaderboard: [],
    challenges: []
  },
  getters: {
    signedIn(state) {
      return state.signedIn;
    },
    leaderboard(state) {
      return state.leaderboard;
    },
    challenges(state) {
      return state.challenges;
    }
  },
  mutations: {
    darkMode(state, status) {
      state.dark = status;
    },
    signInStatus(state, status) {
      state.signedIn = status;
    },
    leaderboard(state, leaderboard) {
      function compare(a, b) {
        if (a.total_score > b.total_score) return -1;
        if (b.total_score > a.total_score) return 1;

        if (a.total_ts > b.total_ts) return 1;
        if (a.total_ts < b.total_ts) return -1;

        return 0;
      }

      leaderboard.sort(compare);
      state.leaderboard = leaderboard;
    },
    challenges(state, challenges) {
      state.challenges = challenges;
    }
  },
  actions: {
    signin({ commit }, data) {
      axios
        .post("http://kntuctf.ir/api/sign_in.php", {
          username: data.user,
          password: data.password
        })
        .then(res => {
          if (res.data) {
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("open", res.data.open);
            commit("signInStatus", true);
            data.callback();
          }
        })
        .catch(err => {
          if (err.response) return alert(err.response.data.error);
          return alert(err);
        });
    },
    challenges({ commit, state }) {
      if (state.signedIn)
        axios
          .post("http://kntuctf.ir/api/get_p.php", {
            state: pstate,
            token: localStorage.getItem("token")
          })
          .then(res => {
            if (res.data) {
              commit("challenges", res.data);
            }
          })
          .catch(err => {
            if (err.response) return alert(err.response.data.error);
            return alert(err);
          });
    },
    leaderboard({ commit }, { open, cb }) {
      commit("leaderboard", []);
      axios
        .post("http://kntuctf.ir/api/leaderboard.php", {
          open: open,
          state: pstate
        })
        .then(async res => {
          if (res.data) {
            await commit("leaderboard", res.data);
            cb();
          }
        })
        .catch(err => {
          if (err.response) return alert(err.response.data.error);
          return alert(err);
        });
    }
  }
});
