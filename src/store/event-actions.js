import axios from "axios";
import { LATEST_EVENT, EVENTS, PARTICIPATE } from "./links";

export default {
  latestEvent({ commit, state }) {
    axios
      .get(LATEST_EVENT)
      .then(res => {
        if (res.data) {
          commit("latestEvent", res.data);
        }
      })
      .catch(err => {
        // if (err.response) return alert(err.response.data.error);
        // return alert(err);
      });
  },
  events({ commit, state }) {
    axios
      .get(EVENTS, {
        headers: {
          Accept: "application/json",
          // Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        if (res.data) {
          commit("events", res.data);
        }
      })
      .catch(err => {
        // if (err.response) return alert(err.response.data.error);
        // return alert(err);
      });
  },
  participate({ commit, dispatch }, data) {
    axios
      .post(
        PARTICIPATE,
        {
          e_id: data.id,
          code: data.code | null
        },
        {
          headers: {
            Accept: "application/json",
            // Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      .then(res => {
        if (res.data) {
          // alert(res.data.message);
        }
        dispatch("events");
      })
      .catch(err => {
        // if (err.response) return alert(err.response.data.message);
        // return alert(err);
      });
  }
};
