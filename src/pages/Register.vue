<template>
  <Layout :stickable="true">
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
    <div class="container" v-if="!signedIn">
      <div class="content">
        <div class="glitch">
          <div class="glitch__img"></div>
          <div class="glitch__img"></div>
          <div class="glitch__img"></div>
          <div class="glitch__img"></div>
          <div class="glitch__img"></div>
        </div>
        <div class="inputs">
          <h1 class="content__title">REGISTER</h1>

          <div class="inside-inputs">
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/users-solid.svg" alt />
              <input class="text-box" type="text" placeholder="Your Team's Name *" v-model="name" />
            </div>
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/envelope-solid.svg" alt />
              <input class="text-box" type="text" placeholder="Email *" v-model="email" />
            </div>
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/flag-solid.svg" alt />
              <input
                class="text-box"
                type="text"
                placeholder="CTFTime's teamID"
                v-model="ctftime_id"
              />
            </div>
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/key-solid.svg" alt />
              <input class="text-box" type="password" placeholder="Password *" v-model="password" />
            </div>
            <div class="block input">
              <g-image class="svg" src="~/assets/svgs/unlock-solid.svg" alt />
              <input
                class="text-box"
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
              <button v-else class="button" @click="onSubmit">SIGN UP</button>
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
      loading: false,
      name: "",
      password: "",
      password_confirmation: "",
      email: "",
      ctftime_id: "",
      captcha: null
    };
  },
  computed: mapState(["signedIn"]),
  components: { VueRecaptcha },
  mounted() {
    let demo = document.createElement("script");
    demo.setAttribute("src", "/js/demo.js");
    let imagesloaded = document.createElement("script");
    imagesloaded.setAttribute("src", "js/imagesloaded.pkgd.min.js");
    document.body.appendChild(imagesloaded);
    document.body.appendChild(demo);
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

      this.send()
        .then(async res => {
          await localStorage.setItem("token", res.data.access_token);
          this.$router.push({
            path: "/email"
          });
        })
        .catch(err => {
          this.resetRecaptcha();
          if (err.response) return alert(err.response.data.message);
          return alert(err);
        })
        .finally(() => (this.loading = false));
    },
    onError: function(error) {
      alert("reCAPTCHA error");
      this.loading = false;
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
        if (this.name.length == 0 || this.password.length == 0) {
          return reject(
            new Error("Fill out all the fields. (CTFTime ID is optional)")
          );
        }
        if (
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            this.email.toLowerCase()
          ) === false
        ) {
          return reject(new Error("invalid email"));
        }

        if (this.password !== this.password_confirmation) {
          return reject(new Error("Passwords didn't match"));
        }

        resolve();
      });
    },
    send() {
      return axios.post("http://localhost:8000/api/register", {
        name: this.name,
        password: this.password,
        email: this.email.toLowerCase(),
        password_confirmation: this.password_confirmation,
        ctftime_id: this.ctftime_id == "" ? null : this.ctftime_id,
        captcha: this.captcha
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
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 80%;
  height: auto;
}

.register {
  width: 80%;
  height: 90%;
  border-radius: 11px;
  box-shadow: 0 14px 18px rgba(0, 0, 0, 1), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  border: solid 1px black;
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
  width: 40vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark);
  border-radius: 10px;
  color: white;
  font-family: "Teko";
}

@media screen and (max-width: 900px) {
  .inputs {
    width: 350px;
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
  height: 25px;
  width: 250px;
  padding: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
  border: none;

  outline: 0;
  font: 400 14px system-ui;
}

.submit-cont {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
}

.block {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
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
  background: var(--second-color);
}

.svg {
  margin: 5px;
  height: 20px;
  width: 25px;
  color: white;
}

.button {
  position: relative;
  background: none;
  color: var(--second-color);
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid var(--second-color);
  padding: 0.5em 1em;
  font-size: 0.8em;
  cursor: pointer;
}
.button:hover {
  border: 0.2em solid white;
  color: white;
}

.button::before {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #222;
  height: 0.3em;
  right: 20%;
  top: -0.21em;
  transform: skewX(-45deg);
  -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.button::after {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #222;
  height: 0.3em;
  left: 20%;
  bottom: -0.25em;
  transform: skewX(45deg);
  -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.button:hover::before {
  right: 80%;
}
.button:hover::after {
  left: 80%;
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

.imgloaded .content__title,
.imgloaded .content__text {
  animation-name: glitch-anim-text;
  animation-duration: var(--time-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.content__title {
  font-size: 2.5em;
  position: relative;
  color: var(--second-color);
  animation-delay: calc(var(--delay-anim));
}

.content__text {
  animation-delay: calc(var(--delay-anim));
}

/* Glitch styles */
.glitch {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: var(--glitch-width);
  height: var(--glitch-height);
  overflow: hidden;
}

.glitch__img {
  position: absolute;
  top: calc(-1 * var(--gap-vertical));
  left: calc(-1 * var(--gap-horizontal));
  width: calc(100% + var(--gap-horizontal) * 2);
  height: calc(100% + var(--gap-vertical) * 2);
  background: url(../assets/image/static-bg.png) no-repeat 50% 0;
  background-color: var(--blend-color-1);
  background-size: cover;
  transform: translate3d(0, 0, 0);
  background-blend-mode: var(--blend-mode-1);
}

.glitch__img:nth-child(n + 2) {
  opacity: 0;
}

.imgloaded .glitch__img:nth-child(n + 2) {
  animation-duration: var(--time-anim);
  animation-delay: var(--delay-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.imgloaded .glitch__img:nth-child(2) {
  background-color: var(--blend-color-2);
  background-blend-mode: var(--blend-mode-2);
  animation-name: glitch-anim-1;
}

.imgloaded .glitch__img:nth-child(3) {
  background-color: var(--blend-color-3);
  background-blend-mode: var(--blend-mode-3);
  animation-name: glitch-anim-2;
}

.imgloaded .glitch__img:nth-child(4) {
  background-color: var(--blend-color-4);
  background-blend-mode: var(--blend-mode-4);
  animation-name: glitch-anim-3;
}

.imgloaded .glitch__img:nth-child(5) {
  background-color: var(--blend-color-5);
  background-blend-mode: var(--blend-mode-5);
  animation-name: glitch-anim-flash;
}

/* Animations */

@keyframes glitch-anim-1 {
  0% {
    opacity: 1;
    transform: translate3d(var(--gap-horizontal), 0, 0);
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  2% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }
  4% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }
  6% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }
  8% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  10% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  12% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  14% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  16% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  18% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(var(--gap-horizontal), 0, 0);
  }
  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    opacity: 1;
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  3% {
    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }
  5% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
  }
  7% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  9% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
  }
  11% {
    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
  }
  13% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  15% {
    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }
  17% {
    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
  }
  19% {
    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
  }
  20% {
    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
  }
  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}

@keyframes glitch-anim-3 {
  0% {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
      scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }
  1.5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }
  2% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }
  2.5% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  3% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }
  5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }
  5.5% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }
  7% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }
  8% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  9% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }
  10.5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }
  11% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }
  13% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }
  14% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }
  14.5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }
  15% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }
  16% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  18% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
      scale3d(-1, -1, 1);
  }
  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}

@keyframes glitch-anim-text {
  0% {
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0)
      scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  2% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  4% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  6% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  7% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  8% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  9% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  9.9% {
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0)
      scale3d(-1, -1, 1);
  }
  10%,
  100% {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

/* Flash */
@keyframes glitch-anim-flash {
  0%,
  5% {
    opacity: 0.2;
    transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
  }
  5.5%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
</style>
