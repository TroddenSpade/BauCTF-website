import axios from "axios";
import { CHALLENGES, SUBMIT } from "./links";

export default {
  challenges({ commit, state }) {
    axios
      .get(CHALLENGES, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          commit("challenges", res.data);
        }
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.message);
        return alert(err);
      });
  },
  submit({ dispatch }, data) {
    axios
      .post(
        SUBMIT,
        {
          c_id: data.id,
          flag: data.flag,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert(response.data.message);
        if (response.status == 200) dispatch("challenges");
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.message);
        alert(err);
      });
  },
};
