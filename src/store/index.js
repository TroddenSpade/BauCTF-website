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
    clearStorage() {
      localStorage.removeItem("expires_in");
      localStorage.removeItem("token");
      localStorage.removeItem("setDate");
    },

    signOut({ commit, dispatch }) {
      axios
        .get("http://localhost:8000/api/logout", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .catch(err => console.log(err.response))
        .finally(() => {
          dispatch("clearStorage");
          commit("signInStatus", false);
        });
    },

    autoLogin({ commit, dispatch }) {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("expires_in") &&
        localStorage.getItem("setDate")
      ) {
        let e = parseInt(localStorage.getItem("expires_in"));
        let d = new Date(localStorage.getItem("setDate"));
        let now = new Date();

        let diff = Math.abs(now.getTime() - d.getTime());
        var secs = Math.ceil(diff / 1000);

        if (secs >= e)
          axios
            .post(
              "http://localhost:8000/api/autologin",
              {
                email: localStorage.getItem("token"),
                id: localStorage.getItem("id")
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              }
            )
            .then(res => {
              if (res.data) {
                localStorage.setItem("id", res.data.user.id);
                localStorage.setItem("token", res.data.access_token);
                localStorage.setItem("email", res.data.user.email);
                localStorage.setItem("setDate", new Date());
                commit("signInStatus", true);
              }
            })
            .catch(err => {
              data.catch();
              if (err.response) return alert(err.response.data.message);
              return alert(err);
            })
            .finally(data.finally);
        else {
          commit("signInStatus", true);
        }
      }
    },

    login({ commit, dispatch }, data) {
      axios
        .post(
          "http://localhost:8000/api/login",
          {
            email: data.email,
            password: data.password,
            captcha: data.captcha
          },
          { withCredentials: true }
        )
        .then(res => {
          if (res.data) {
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("expires_in", res.data.expires_in);
            localStorage.setItem("setDate", new Date());
            commit("signInStatus", true);
          }
        })
        .catch(async err => {
          data.catch();
          if (err.response) {
            if (err.response.status === 403) {
              await localStorage.setItem(
                "token",
                err.response.data.access_token
              );
              dispatch("resend", {
                token: err.response.data.access_token,
                finally: () => {}
              });
              data.resend();
            }
            return alert(err.response.data.message);
          }
          return alert(err);
        })
        .finally(data.finally());
    },

    resend({}, data) {
      axios
        .get("http://localhost:8000/api/email/resend", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + data.token
          }
        })
        .then(res => {
          alert(res.data.message);
          data.finally();
        })
        .catch(err => {
          if (err.response)
            if (err.response.status === 401) {
              return alert(
                "email verification expired,\nplease login to request another email"
              );
            }
          data.finally();
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
