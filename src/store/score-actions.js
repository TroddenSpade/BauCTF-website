import axios from "axios";
import { SCOREBOARD, LEADERBOARD, SUBMISSIONS } from "./links";
import { myLocalLocalsotarge } from "./index";

export default {
  scoreboard({ commit }, { id, notification, next }) {
    axios
      .get(SCOREBOARD + "/" + id)
      .then(async res => {
        if (res.data) {
          commit("scoreboard", res.data);
          next(res.data.id);
        }
      })
      .catch(err => {
        if (err.response) return notification(err.response.data.message);
        return notification(err);
      });
  },
  leaderboard({ commit }) {
    axios
      .get(LEADERBOARD, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + myLocalLocalsotarge(0, "token")
        }
      })
      .then(res => {
        if (res.data) {
          commit("leaderboard", res.data);
        }
      })
      .catch(err => {
        if (err.response) return alert(err.response.data.error);
        return alert(err);
      });
  },
  submissions({ commit }) {
    axios
      .get(SUBMISSIONS, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + myLocalLocalsotarge(0, "token")
        }
      })
      .then(res => {
        if (res.data) {
          commit("submissions", res.data);
        }
      })
      .catch(err => {
        if (err.response) return alert(err.response.data.error);
        return alert(err);
      });
  }
};
