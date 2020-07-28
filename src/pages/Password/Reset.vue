<template>
  <Layout :stickable="true">
    <vue-recaptcha
      sitekey="6LcUkK4ZAAAAAE6TKwaDQWkqqyDAzmIIhBXQcLH6"
      theme="dark"
      size="invisible"
      ref="recaptcha"
      @verify="onVerify"
      @expired="onExpired"
      @error="onError"
      :loadRecaptchaScript="true"
    />
    <notifications group="password" classes="vue-notifications" position="bottom right" />
    <div class="container">
      <div class="inputs">
        <div class="top-bar">
          <g-image id="logo" src="~/assets/image/logo.png" />
          <div class="part"></div>
        </div>

        <div class="inside-inputs">
          <div class="text-body">
            <g-image class="svg" src="~/assets/svgs/key-solid.svg" alt />
            <input type="password" placeholder="Password *" v-model="password" />
          </div>
          <div class="text-body">
            <g-image class="svg" src="~/assets/svgs/unlock-solid.svg" alt />
            <input
              id="last-input"
              type="password"
              placeholder="Password Confirmation *"
              v-model="password_confirmation"
            />
          </div>

          <div class="submit-cont">
            <div v-if="this.loading" class="lds-ring" key="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <button v-else class="button" id="button" @click="onSubmit">RESET</button>
          </div>
          <div class="captcha">
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
            >Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import VueRecaptcha from "vue-recaptcha";

export default {
  data: function() {
    return {
      password: "",
      password_confirmation: "",
      email: this.$route.query.email,
      token: this.$route.query.token,
      captcha: null,
      loading: false
    };
  },
  components: { VueRecaptcha },

  async mounted() {
    document
      .getElementById("last-input")
      .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("button").click();
        }
      });
  },
  created() {
    if (!this.$route.query.email || !this.$route.query.token)
      this.$router.push({
        path: "/login"
      });
  },
  methods: {
    onSubmit: function() {
      this.loading = true;

      this.checker()
        .then(() => {
          this.$refs.recaptcha.execute();
        })
        .catch(err => {
          this.loading = false;
          alert(err);
        });
    },

    onVerify: function(response) {
      this.captcha = response;

      this.$store.dispatch("reset_password", {
        ...this.$data,
        then: res => {
          this.$router.push({
            path: "/login"
          });
        },
        finally: () => {
          this.loading = false;
          this.resetRecaptcha();
        },
        notification: (type, msg) => {
          this.$notify({
            group: "password",
            type: type,
            title: "Reset Password",
            text: msg
          });
        }
      });
    },

    onError: function(error) {
      alert("reCAPTCHA error");
    },

    onExpired: function() {
      this.captcha = null;
    },

    resetRecaptcha() {
      this.captcha = null;
      this.$refs.recaptcha.reset();
    },

    checker() {
      return new Promise((resolve, reject) => {
        if (
          this.email.length == 0 ||
          (this.password.length == 0 && !this.forgot)
        ) {
          return reject(new Error("Fill out all the fields."));
        }
        if (
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            this.email.toLowerCase()
          ) === false
        ) {
          return reject(new Error("invalid email"));
        }
        if (this.state == 1 && this.password !== this.password_confirmation) {
          return reject(new Error("Passwords didn't match"));
        }
        resolve();
      });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/img/htp.png) 100px 100px;
  background-size: 200px 200px;
  animation: animation 100s linear infinite forwards;
  background-color: #000;
}

@keyframes animation {
  100% {
    background-position: +2000px +2000px;
  }
}

#logo {
  height: 150px;
  width: 150px;
}

.top-bar {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.part {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin: 20px;
  font-family: "Tomorrow";
}

.part > ul {
  width: 100%;
}

ul li {
  display: inline;
  text-align: center;
}

.part a {
  display: inline-block;
  width: 50%;
  padding: 0.75rem 0;
  margin: 0;
  text-decoration: none;
  color: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.active-tag > a {
  color: green;
}

.captcha {
  margin-top: 20px;
  width: 270px;
  font-size: 9px;
  color: grey;
}
.captcha > a {
  color: lightgrey;
}

.active-line {
  margin-left: 50%;
}

.none-line {
  width: 100%;
}

hr {
  height: 1px;
  width: 50%;
  margin: 0;
  background: var(--second-color);
  border: none;
  transition: 0.3s ease-in-out;
}

.text-body {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px;
  margin: 10px;
  height: 30px;
  width: 250px;
}

.text-body > input {
  background-color: transparent;
  border: solid 0px;
  outline: none;
  color: white;
  height: 30px;
  width: 100%;
}

.img {
  width: 80%;
  height: auto;
}

.panel {
  width: 30%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  font-family: "Teko";
}

.inputs {
  box-shadow: 0 14px 18px rgba(0, 0, 0, 1), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  padding: 30px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  border-radius: 10px;
  color: white;
  font-family: monospace;
}

@media screen and (max-width: 900px) {
  .inputs {
    width: 350px;
    box-sizing: border-box;
  }
}

.loggedin {
  letter-spacing: 10px;
  font-size: 40px;
  font-family: "Teko", sans-serif;
  text-shadow: 2px 0 black, 0 1px black, 2px 0 black, 0 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
}

.submit-cont {
  display: flex;
  height: 60px;
  width: fit-content;
  justify-content: center;
  align-items: center;
}

.input {
  background: var(--second-color);
}

.svg {
  margin-right: 10px;
  margin-left: 5px;
  height: 18px;
  width: 18px;
  color: white;
  filter: brightness(0) invert(1);
}

.button {
  background: white;
  color: var(--background-dark);
  text-transform: uppercase;
  border: none;
  padding: 0.3em 0.8em;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
  font-family: "Tomorrow", sans-serif;
  transition: 0.5s;
  margin: 10px;
}

.button:hover {
  background-color: var(--second-color);
}

.acc {
  color: var(--second-color);
  text-decoration: underline;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 8px;
  border: 5px solid black;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--second-color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
