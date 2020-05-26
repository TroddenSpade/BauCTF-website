import axios from "axios";
import { SCOREBOARD, LEADERBOARD, SUBMISSIONS } from "./links";

export default {
  scoreboard({ commit }, { cb }) {
    axios
      .get(SCOREBOARD)
      .then(async (res) => {
        if (res.data) {
          await commit("scoreboard", res.data);
          cb();
        }
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.error);
        return alert(err);
      });
  },
  leaderboard({ commit }) {
    axios
      .get(LEADERBOARD, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          commit("leaderboard", res.data);
        }
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.error);
        return alert(err);
      });
  },
  submissions({ commit }) {
    axios
      .get(SUBMISSIONS, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          commit("submissions", res.data);
        }
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.error);
        return alert(err);
      });
  },
};
