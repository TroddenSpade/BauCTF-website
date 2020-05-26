import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import moment from "moment";

Vue.use(Vuex);

import login_actions from "./login-actions";
import score_actions from "./score-actions";
import event_actions from "./event-actions";
import challenge_actions from "./challenge-actions";

import { USER } from "./links";

export const store = new Vuex.Store({
  state: {
    signedIn: false,
    dark: false,
    latestEvent: null,
    user: {},
    scoreboard_data: [],
    challenges: [],
    events: [],
    leaderboard: [],
    submissions: [],
    categories: ["WEB", "REV", "CRYP", "PWN", "MISC"],
  },
  getters: {
    signedIn(state) {
      return state.signedIn;
    },
    scoreboard(state) {
      return state.scoreboard_data;
    },
    challenges(state) {
      return state.challenges;
    },
    latestEvent(state) {
      return state.latestEvent;
    },
    events(state) {
      return state.events;
    },
    categories(state) {
      return state.categories;
    },
    leaderboard(state) {
      return state.leaderboard;
    },
    user(state) {
      return state.user;
    },
    submissions(state) {
      return state.submissions;
    },
  },
  mutations: {
    darkMode(state, status) {
      state.dark = status;
    },
    signInStatus(state, status) {
      state.signedIn = status;
    },
    latestEvent(state, status) {
      state.latestEvent = status.event;
    },
    scoreboard(state, scoreboard_data) {
      function compare(a, b) {
        if (a.score > b.score) return -1;
        if (b.score > a.score) return 1;
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      }
      scoreboard_data.participants = Object.values(
        scoreboard_data.participants
      ).sort(compare);
      state.scoreboard_data = scoreboard_data;
    },

    challenges(state, challenges) {
      state.challenges = challenges;
    },
    events(state, events) {
      events.forEach((e) => {
        var end = moment.utc(e.end, "ddd, D-MMM-YYYY HH:mm");
        let now = moment().toDate();
        e.disabled = now > end ? 1 : 0;
      });
      state.events = events;
    },
    leaderboard(state, leaderboard) {
      state.leaderboard = leaderboard;
    },
    user(state, user) {
      state.user = user;
    },
    submissions(state, submissions) {
      submissions.forEach((e) => {
        e.created_at = moment.unix(e.created_at).fromNow();
      });
      state.submissions = submissions;
    },
  },
  actions: {
    ...login_actions,
    ...score_actions,
    ...event_actions,
    ...challenge_actions,
    user({ commit }) {
      axios
        .get(USER, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data) {
            commit("user", res.data);
          }
        })
        .catch((err) => {
          if (err.response) return alert(err.response.data.error);
          return alert(err);
        });
    },
  },
});
