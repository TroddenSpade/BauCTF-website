import axios from "axios";

export default {
  clearStorage() {
    // localStorage.removeItem("expires_in");
    // localStorage.removeItem("token");
    // localStorage.removeItem("setDate");
  },

  signout({ commit, dispatch }, data) {
    // axios
    //   .post(
    //     "http://localhost:8000/api/logout",
    //     {},
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: "Bearer " + localStorage.getItem("token")
    //       }
    //     }
    //   )
    //   .then(s => {})
    //   .catch(err => console.log(err.response))
    //   .finally(() => {
    //     dispatch("clearStorage");
    //     commit("signInStatus", false);
    //     data.route();
    //   });
  },

  autoLogin({ commit, dispatch }) {
    // if (
    //   localStorage.getItem("token") &&
    //   localStorage.getItem("expires_in") &&
    //   localStorage.getItem("setDate")
    // ) {
    //   let e = parseInt(localStorage.getItem("expires_in"));
    //   let d = new Date(localStorage.getItem("setDate"));
    //   let now = new Date();

    //   let diff = Math.abs(now.getTime() - d.getTime());
    //   var secs = Math.ceil(diff / 1000);

    //   if (secs >= e)
    //     axios
    //       .post(
    //         "http://localhost:8000/api/login/refresh",
    //         {
    //           email: localStorage.getItem("token"),
    //           id: localStorage.getItem("id")
    //         },
    //         {
    //           headers: {
    //             Accept: "application/json",
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //           }
    //         }
    //       )
    //       .then(res => {
    //         if (res.data) {
    //           localStorage.setItem("id", res.data.user.id);
    //           localStorage.setItem("token", res.data.access_token);
    //           localStorage.setItem("email", res.data.user.email);
    //           localStorage.setItem("setDate", new Date());
    //           commit("signInStatus", true);
    //         }
    //       })
    //       .catch(err => {
    //         data.catch();
    //         if (err.response) return alert(err.response.data.message);
    //         return alert(err);
    //       })
    //       .finally(data.finally);
    //   else {
    //     commit("signInStatus", true);
    //   }
    // }
  },

  login({ commit, dispatch }, data) {
    // axios
    //   .post(
    //     "http://localhost:8000/api/login",
    //     {
    //       email: data.email,
    //       password: data.password,
    //       captcha: data.captcha
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(res => {
    //     if (res.data) {
    //       localStorage.setItem("token", res.data.access_token);
    //       localStorage.setItem("expires_in", res.data.expires_in);
    //       localStorage.setItem("setDate", new Date());
    //       data.then();
    //       commit("signInStatus", true);
    //     }
    //   })
    //   .catch(async err => {
    //     if (err.response) {
    //       if (err.response.status === 403) {
    //         await localStorage.setItem("token", err.response.data.access_token);
    //         dispatch("resend", {
    //           token: err.response.data.access_token,
    //           finally: () => {}
    //         });
    //         data.resend();
    //       }
    //       return alert(err.response.data.message);
    //     }
    //     return alert(err);
    //   })
    //   .finally(data.finally());
  },

  resend({}, data) {
    // axios
    //   .get("http://localhost:8000/api/email/resend", {
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: "Bearer " + data.token
    //     }
    //   })
    //   .then(res => {
    //     alert(res.data.message);
    //     data.finally();
    //   })
    //   .catch(err => {
    //     if (err.response)
    //       if (err.response.status === 401) {
    //         return alert(
    //           "email verification expired,\nplease login to request another email"
    //         );
    //       }
    //     data.finally();
    //     return alert(err);
    //   });
  },

  reset_email({}, data) {
    // axios
    //   .post(
    //     "http://localhost:8000/api/password/email",
    //     {
    //       email: data.email
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     alert(res.data.message);
    //   })
    //   .catch(err => {
    //     if (err.response) return alert(err.response.data.message);
    //     return alert(err);
    //   })
    //   .finally(() => data.finally());
  },

  reset_password({}, data) {
    // axios
    //   .post(
    //     "http://localhost:8000/api/password/reset",
    //     {
    //       email: data.email,
    //       password: data.password,
    //       password_confirmation: data.password_confirmation,
    //       token: data.token
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     data.then();
    //     alert(res.data.message);
    //   })
    //   .catch(err => {
    //     if (err.response)
    //       return alert(
    //         err.response.data.message +
    //           "\n" +
    //           err.response.data.errors[
    //             Object.keys(err.response.data.errors)[0]
    //           ][0]
    //       );
    //     return alert(err);
    //   })
    //   .finally(() => data.finally());
  },

  register({}, data) {
    // return axios
    //   .post("http://localhost:8000/api/register", {
    //     name: data.name,
    //     password: data.password,
    //     email: data.email.toLowerCase(),
    //     password_confirmation: data.password_confirmation,
    //     ctftime_id: data.ctftime_id == "" ? null : data.ctftime_id,
    //     captcha: data.captcha
    //   })
    //   .then(async res => {
    //     await localStorage.setItem("token", res.data.access_token);
    //     data.then();
    //   })
    //   .catch(err => {
    //     if (err.response)
    //       return alert(
    //         err.response.data.message +
    //           "\n" +
    //           err.response.data.errors[
    //             Object.keys(err.response.data.errors)[0]
    //           ][0]
    //       );
    //     return alert(err);
    //   })
    //   .finally(() => data.finally());
  }
};
