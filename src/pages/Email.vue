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
        <div class="">
          <h2>Verify Your Email Address</h2>
        </div>
        <div>
          <p>
            Before proceeding, please check your email for a verification link.
          </p>
          <p>
            If you did not receive the email,
            <a class="resend" @click="resend" v-if="!loading">click here</a>
            <a class="sending" v-else>click here</a> to request another.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="container loggedin"></div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: function() {
    return {
      token: localStorage.getItem("token"),
      loading: false
    };
  },
  computed: mapState(["signedIn"]),
  mounted() {
    let demo = document.createElement("script");
    demo.setAttribute("src", "/js/demo.js");
    let imagesloaded = document.createElement("script");
    imagesloaded.setAttribute("src", "js/imagesloaded.pkgd.min.js");
    document.body.appendChild(imagesloaded);
    document.body.appendChild(demo);
  },
  methods: {
    resend: function() {
      this.loading = true;
      this.$store.dispatch("resend", {
        ...this.$data,
        finally: () => (this.loading = false)
      });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
  font-family: "Tomorrow";
  color: white;
  background: url(../assets/htp.jpeg) 100px 100px;
  background-size: 200px 200px;
  animation: animation 100s linear infinite forwards;
}

@keyframes animation {
  100% {
    background-position: -2000px -2000px;
  }
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
  color: var(--second-color);
  cursor: pointer;
  text-decoration: underline;
}

.sending {
  font-family: "Tomorrow";
  color: grey;
}
</style>
