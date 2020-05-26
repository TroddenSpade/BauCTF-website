<template>
  <Layout :stickable="true">
    <div id="particles-js"></div>
    <div v-if="signedIn" class="main-challenges">
      <div v-if="challenges.length === 0">
        <p>No Challenges Available</p>
      </div>
      <div class="challenge" v-for="(challenge, index) in challenges" :key="index">
        <button ref="buttons" class="collapsible" v-on:click="collapse(index)">
          <div class="challenge-name">
            <h2>{{ challenge.title }}</h2>
            <h4 v-if="challenge.solved">Solved</h4>
          </div>
          <div class="challenge-info">
            <h4>{{ challenge.score }} Points</h4>
            <div class="cat">
              <h4>{{categories[challenge.category]}}</h4>
            </div>
          </div>
        </button>
        <div class="content" ref="challenge">
          <div class="challenge-body">
            <p>{{ challenge.body }}</p>
          </div>
          <div class="attach">
            <a :href="challenge.link" target="_blank">[&diams;link]</a>
          </div>
          <div class="submit">
            <input type="text" class="ctf" placeholder="KCTF{...}" v-model="flag[index]" />
            <button class="button" @click="submit(index,challenge.id)">Submit</button>
          </div>
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
  </Layout>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "challenges",
  data: function() {
    return {
      isActive: Array(21).fill(0),
      flag: Array(21).fill("")
    };
  },
  computed: mapState(["signedIn", "challenges", "categories"]),
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
    submit(index, challenge_id) {
      if (this.flag[index][4] != "{" || this.flag[index].substr(-1) != "}") {
        return alert("invalid flag format");
      }
      this.$store.dispatch("submit", {
        id: challenge_id,
        flag: this.flag[index]
      });
    }
  },
  mounted: function() {
    if (this.signedIn) this.$store.dispatch("challenges");
    let particles = document.createElement("script");
    particles.setAttribute("src", "/js/particles.min.js");
    document.body.appendChild(particles);
    let options = document.createElement("script");
    options.setAttribute("src", "/js/triangle.js");
    document.body.appendChild(options);
  },
  created() {
    if (!this.signedIn) {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style scoped>
.main-challenges {
  display: flex;
  min-height: 92vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  box-sizing: border-box;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--background-dark);
  z-index: -1;
}

.challenge-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.challenge-name > h4 {
  margin: 0;
  color: var(--second-color);
  margin-left: 10px;
}

.challenge {
  width: 80vw;
  margin-bottom: 5px;
}

.collapsible {
  font-family: "Tomorrow", sans-serif;
  background-color: #38383f;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.attach {
  margin-bottom: 20px;
  margin-left: 20px;
}

.attach > a {
  font-family: "Press Start 2P", cursive;
  color: var(--second-color);
  font-size: 0.5em;
}

.challenge-name > h2,
.challenge-info > h4,
.cat > h4 {
  margin: 0px;
  transition: font-size 0.5s ease-out;
}

.collapsible:hover {
  background-color: var(--second-color);
  /* color: black; */
}

.challenge-info {
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: flex-end;
  align-items: center;
  color: lightgrey;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  background-color: #38383f;
}

.collapsed > h2 {
  font-size: 2.5em;
}

.cat {
  color: var(--second-color);
  border: solid 2px var(--second-color);
  padding: 2px;
  margin-left: 10px;
}

.collapsible:hover .cat {
  color: lightgrey;
  border: solid 2px lightgrey;
}

.collapsible:hover .challenge-name > h4 {
  color: lightgrey;
}

.collapsed:hover .cat {
  color: var(--second-color);
  border: solid 2px var(--second-color);
}

.collapsed:hover {
  background-color: rgb(56, 56, 63);
  color: white;
}

.collapsed:hover .challenge-name > h4 {
  color: var(--second-color);
}

.ctf {
  width: 200px;
  border: solid 2px var(--second-color);
  outline: 0;
}

.active {
  max-height: 50vh;
}

.submit {
  width: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.button {
  position: relative;
  background: none;
  color: var(--second-color);
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid var(--second-color);
  padding: 0.5em 1em;
  margin: 10px;
  font-size: 0.8em;
  cursor: pointer;
}

.button:hover {
  border: 0.2em solid white;
  color: white;
}

.button::before,
.disabled::before {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #38383f;
  height: 0.3em;
  right: 20%;
  top: -0.21em;
  transform: skewX(-45deg);
  -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.button::after,
.disabled::after {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #38383f;
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

.login {
  height: 91vh;
  letter-spacing: 10px;
  font-size: 40px;
  color: black;
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
    var(--second-color) 50%
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
</style>
