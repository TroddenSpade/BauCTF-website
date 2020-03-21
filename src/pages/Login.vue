<template>
  <Layout :stickable="true">
    <div class="container" v-if="!signedIn">
      <div class="register">
        <div class="panel">
          <g-image class="img" src="~/assets/image/logo.png" />
          <div>
            <p>Hosted by 3P1X KNTU CTF Team</p>
          </div>
        </div>
        <div class="inputs">
          <vue-recaptcha
            sitekey="6LcFX-EUAAAAAHXcib6qmnXt2QJTqR5S35UFoaUw"
            theme="dark"
            size="invisible"
            ref="recaptcha"
            @verify="onVerify"
            @expired="onExpired"
            @error="onError"
            :loadRecaptchaScript="true"
          />
          <h1 class="title">Login Now</h1>
          <div class="inside-inputs">
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/envelope-solid.svg" alt />
              <input class="text-box" type="text" placeholder="Email" v-model="email" />
            </div>

            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/key-solid.svg" alt />
              <input class="text-box" type="password" placeholder="Password" v-model="password" />
            </div>

            <div class="submit-cont">
              <div v-if="this.loading" class="lds-ring" key="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <button v-else class="button big-b" @click="onSubmit">Submit</button>
            </div>

            <div class="block">
              <p>
                Don't have an account?
                <g-link class="acc" to="/register" tag="a" href>Register</g-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container loggedin">
      <h1>
        SignOut
        <br />To
        <br />Continue
        <br />...
      </h1>
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
      email: "",
      captcha: null,
      loading: false
    };
  },
  computed: mapState(["signedIn"]),
  components: { VueRecaptcha },
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

      this.$store.dispatch("login", {
        ...this.$data,
        then: res => {
          this.$router.push({
            path: "/challenges"
          });
        },
        resend: () =>
          this.$router.push({
            path: "/email"
          }),
        catch: () => this.resetRecaptcha(),
        finally: () => (this.loading = false)
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
        if (this.email.length == 0 || this.password.length == 0) {
          return reject(new Error("Fill out all the fields."));
        }
        if (
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            this.email.toLowerCase()
          ) === false
        ) {
          return reject(new Error("invalid email"));
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
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
  background-image: linear-gradient(120deg, yellow 25%, transparent 25%),
    linear-gradient(45deg, yellow 25%, transparent 25%),
    linear-gradient(200deg, yellow 25%, transparent 25%),
    linear-gradient(0deg, yellow 25%, transparent 2%);
  background-position: 25px 0, 25px 0, 0 0, 0 0;
  background-size: 100px 100px;
  background-repeat: repeat;
  background-color: rgb(223, 223, 22);
}

.title {
  font-size: 2em;
}

.img {
  width: 80%;
  height: auto;
}

.register {
  width: 80%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 0 14px 18px rgba(0, 0, 0, 1), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
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
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: white;
  font-family: "Teko";
}

.inside-inputs {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (max-width: 992px) {
  .register {
    flex-direction: column;
  }
  .panel {
    width: 100%;
    height: 15%;
  }

  .inputs {
    width: 100%;
    height: 85%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 10px;
  }

  .img {
    width: auto;
    height: 100%;
  }

  .title {
    font-size: 1.5em;
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

.text-box {
  height: 30px;
  width: 250px;
  padding: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
  border-left-width: 1px;
  border-color: lightgrey;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  outline: 0;
  font: 400 14px system-ui;
}

.submit-cont {
  display: flex;
  height: 80px;
  width: fit-content;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 5px 15px;
  margin: 20px;
  background-color: yellow;
  color: #1c1c1c;
  font-size: 1.5em;
  font-family: "Teko", sans-serif;
  border-radius: 5px;
  border-width: 0px;
  cursor: pointer;
  height: 40px;
}
.block {
  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.block > p {
  margin: 0;
}

.input {
  background: yellow;
}

.svg {
  margin: 5px;
  height: 20px;
  width: 30px;
  color: white;
}

.big-b {
  font-size: 1.5em;
  /* background-color: black; */
  transition-duration: 0.4s;
}

.big-b:hover {
  background-color: white;
  color: #1c1c1c;
}

.acc {
  /* font-family: "Tomorrow"; */
  color: yellow;
  text-decoration: underline;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: 8px solid black;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: yellow transparent transparent transparent;
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
