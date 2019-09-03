<template>
  <div class="main">
    <div class="challenge" v-for="(challenge, index) in challenges" :key="index">
      <button
        class="collapsible"
        v-on:click="collapse(index)"
      >{{challenge.name}} ( {{challenge.point}} )</button>
      <div class="content" ref="challenge">
        <p>{{challenge.body}}</p>
        <a :href="challenge.attach" target="_blank">[ attached file ]</a>
        <br />
        <br />

        <input class="name" type="text" placeholder="Your Team" v-model="teams[index]" />
        <br />
        <input type="text" placeholder="CTF{ ... }" v-model="ctf[index]" />
        <br />
        <button class="submit" @click="submit(index)">Submit</button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import challenges from "../../data/challenges.json";
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
      } else {
        this.$refs.challenge[i].classList.add("active");
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
          alert(err.data.msg);
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
  border-bottom-color: lightgrey;
}

.collapsible {
  font-family: "Anton", sans-serif;
  background-color: rgb(255, 255, 148);
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.collapsible:hover {
  background-color: rgb(255, 238, 82);
}

.collapsible:after {
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

.active {
  max-height: 50vh;
}

.name {
  width: 30%;
}

.submit {
  width: 10vw;
}
</style>