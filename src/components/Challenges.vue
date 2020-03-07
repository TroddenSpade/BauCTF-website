<template>
  <div v-if="signedIn" class="main">
    <div v-if="challenges.length === 0">
      <p>Has Not Started Yet</p>
    </div>
    <div class="challenge" v-for="(challenge, index) in challenges" :key="index">
      <button
        ref="buttons"
        class="collapsible"
        v-on:click="collapse(index)"
      >{{ index + 1 }} | {{ challenge.title }} ({{ challenge.score }})</button>
      <div class="content" ref="challenge">
        <p>{{ challenge.body }}</p>
        <a :href="challenge.link" target="_blank">[&diams;link]</a>
        <div style="margin: 10px 0 10px 0;"></div>
        <div style="margin: 10px 0 10px 0;"></div>
        <input type="text" class="ctf" placeholder="CTF{...}" v-model="ctf[index]" />
        <div style="margin: 10px 0 10px 0;"></div>
        <button class="submit" @click="submit(index)">Submit</button>
        <div style="margin: 10px 0 10px 0;"></div>
      </div>
    </div>
  </div>
  <div v-else class="login">
    <h1>
      Login
      <br />To
      <br />Continue
      <br />...
    </h1>
  </div>
</template>

<script>
import axios from "axios";
import { sha256 } from "js-sha256";
import { mapState } from "vuex";

export default {
  name: "challenges",
  data: function() {
    return {
      isActive: Array(15).fill(0),
      ctf: Array(15).fill("")
    };
  },
  computed: mapState(["signedIn", "challenges"]),
  methods: {
    collapse(i) {
      if (this.isActive[i]) {
        this.$refs.challenge[i].classList.remove("active");
        this.$refs.buttons[i].classList.remove("collapsed");
      } else {
        this.$refs.challenge[i].classList.add("active");
        this.$refs.buttons[i].classList.add("collapsed");
      }
      this.isActive[i] = 1 - this.isActive[i];
    },
    submit(index) {
      if (this.ctf[index][3] != "{" || this.ctf[index].substr(-1) != "}") {
        return alert("Invalid CTF code");
      }
      axios
        .post("http://kntuctf.ir/api/submit.php", {
          pid: index + 1,
          ctf: sha256(this.ctf[index]),
          token: localStorage.getItem("token"),
          bare_code: this.ctf[index]
        })
        .then(response => {
          alert(response.data.msg);
        })
        .catch(err => {
          if (err.response) return alert(err.response.data.error);
          alert(err);
        });
    }
  },
  mounted: function() {
    this.$store.dispatch("challenges");
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex: 1;
  min-height: 90vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #1c1c1e;
}

.challenge {
  width: 80vw;
  border-bottom-width: 1px;
  border-bottom: solid;
  border-bottom-color: #1c1c1e;
}

.collapsible {
  font-family: "Tomorrow", sans-serif;
  background-color: rgb(56, 56, 63);
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: font-size 0.5s ease-out;
}

.collapsible > h4 {
  font-size: 0px;
  transition: font-size 0.5s ease-out;
}

.collapsible:hover {
  background-color: yellow;
  color: black;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  background-color: rgb(56, 56, 63);
}

.collapsed {
  font-size: 35px;
}

.collapsed > h4 {
  font-size: 12px;
}

.collapsed:hover {
  background-color: rgb(56, 56, 63);
  color: white;
}

.collapsed:active {
  background-color: yellow;
}

.active {
  max-height: 50vh;
}

.submit {
  width: 100px;
  height: 30px;
  background-color: lightgray;
  border: none;
  font-weight: bold;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.login {
  height: 90vh;
  letter-spacing: 10px;
  font-size: 40px;
  /* color: yellow; */
  font-family: "Teko", sans-serif;
  text-shadow: 2px 0 black, 0 1px black, 2px 0 black, 0 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 70px;
  background-image: radial-gradient(
    ellipse farthest-corner at 2em 2em,
    rgb(223, 223, 22),
    rgb(223, 223, 22) 50%,
    yellow 50%
  );
  background-size: 2em 2em;
}

input {
  padding: 8px 10px;
}

button {
  margin: 0;
}

p {
  font-family: "Tomorrow", sans-serif;
  color: white;
}

h4 {
  font-family: "Arcade";
  font-size: 15px;
  margin: 0;
}

a {
  font-family: "Arcade";
  font-size: 10px;
  color: black;
  background-color: yellow;
  width: min-content;
}
</style>
