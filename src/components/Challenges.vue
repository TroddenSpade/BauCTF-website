<template>
  <div class="main">
    <div class="challenge" v-for="(challenge, index) in challenges" :key="index">
      <button ref="buttons" class="collapsible" v-on:click="collapse(index)">
        {{challenge.name}} ( {{challenge.point}} )
        <h4>{{challenge.author}}</h4>
      </button>
      <div class="content" ref="challenge">
        <p>{{challenge.body}}</p>
        <a v-html="challenge.attach"></a>
        <br />
        <br />

        <input class="name" type="text" placeholder="Your Team's Name" v-model="teams[index]" />
        <br />
        <input type="text" placeholder="CTF{...}" v-model="ctf[index]" />
        <br />
        <button class="submit" @click="submit(index)">Submit</button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import challenges from "../data/challenges.json";
export default {
  name: "challenges",
  data: function() {
    return {
      challenges,
      isActive: Array(challenges.length).fill(0),
      teams: Array(challenges.length).fill(""),
      ctf: Array(challenges.length).fill("")
    };
  },
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
      if (this.ctf[index].length == 0 || this.teams[index].length == 0) {
        return alert("Fill in All the Fields !");
      }
      if (
        this.ctf[index].substring(0, 4) != "CTF{" ||
        this.ctf[index].substr(-1) != "}"
      ) {
        return alert("Invalid CTF code");
      }
      axios
        .post("http://localhost:5000/api/submit", {
          id: index,
          name: this.teams[index],
          ctf: this.ctf[index]
        })
        .then(response => {
          alert(response.data.msg);
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>


<style scoped>
.main {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.challenge {
  width: 80vw;
  border-bottom-width: 1px;
  border-bottom: solid;
  border-bottom-color: grey;
}

.collapsible {
  font-family: "Anton", sans-serif;
  background-color: lightgray;
  color: black;
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
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  background-color: #f1f1f1;
}

.collapsed {
  font-size: 35px;
  background-color: #f1f1f1;
}

.collapsed > h4 {
  font-size: 12px;
}

.collapsed:hover {
  background-color: #f1f1f1;
}

.collapsed:active {
  background-color: yellow;
}

.active {
  max-height: 50vh;
}

.name {
  width: 30%;
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

input {
  padding: 8px 10px;
}

p {
  font-family: "Teko", sans-serif;
  font-size: 18px;
}

h4 {
  font-family: "Arcade";
  font-size: 15px;
  padding: 0;
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