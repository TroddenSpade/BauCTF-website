<template>
  <Layout :stickable="true">
    <div v-if="signedIn" class="container loggedin">
      <div class="register">
        <div class="title">
          <h2>Email Address is Already verified</h2>
        </div>
      </div>
    </div>
    <div class="container" v-else-if="token">
      <div class="register">
        <div class="title">
          <h2>Verify Your Email Address</h2>
        </div>
        <div>
          <p>Before proceeding, please check your email for a verification link.</p>
          <p>
            If you did not receive the email,
            <a @click="resend" class="resend">click here</a> to request another.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="container loggedin">
      <div class="register">
        <div class="title">
          <h2>Something Went Wrong !</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: function() {
    return {
      token: localStorage.getItem("token")
    };
  },
  computed: mapState(["signedIn"]),
  method: {
    resend() {
      axios
        .get("http://localhost:8000/api/email/resend", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.token
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
  background-image: linear-gradient(135deg, yellow 25%, transparent 25%),
    linear-gradient(205deg, yellow 25%, transparent 25%),
    linear-gradient(280deg, yellow 25%, transparent 25%),
    linear-gradient(45deg, yellow 25%, transparent 25%);
  background-position: 25px 0, 25px 0, 0 0, 0 0;
  background-size: 100px 100px;
  background-repeat: repeat;
  background-color: rgb(223, 223, 22);
  font-family: "Tomorrow";
  color: white;
}

.register {
  width: 80%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0 14px 18px rgba(0, 0, 0, 1), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
}

.resend {
  font-family: "Tomorrow";
  color: yellow;
  cursor: pointer;
  text-decoration: underline;
}
</style>
