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

        <input class="name" type="text" placeholder="Your Team" />
        <br />
        <input type="text" placeholder="CTF{ ... }" />
        <br />
        <button class="submit">Submit</button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import challenges from "../../data/challenges.json";
export default {
  name: "challenges",
  data: function() {
    return {
      challenges,
      isActive: Array(challenges.length).fill(0)
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