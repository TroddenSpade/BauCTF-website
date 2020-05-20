import axios from "axios";
import { SCOREBOARD } from "./links";

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
};
