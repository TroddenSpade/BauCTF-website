<template>
  <div id="container">
    <a href="https://ctftime.org/event/999">KNTU CTF Winter 2020 Quals</a>
    <div class="header">
      <h1 class="button left" @click="changeOpen" :class="!open ? 'on':null">KNTU</h1>
      <h1 class="button right" @click="changeOpen" :class="open ? 'on':null">Open</h1>
      <p>Click to change the Leaderboard</p>
    </div>
    <div class="table">
      <div class="head-table">
        <h2></h2>

        <div class="name">
          <h1>Team</h1>
        </div>
        <div class="problem" v-for="index in noP" :key="index">
          <h1>{{index}}</h1>
        </div>
        <div class="score">
          <h1>Score</h1>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        v-for="(team,index) in leaderboard"
        :class="{'yellow':index < (open ? 3 : 6),'white':index >= (open ? 3 : 6),'team':true}"
        :key="index"
      >
        <h2
          :class="{'yellow-num':index < (open ? 3 : 6),'white-num':index >= (open ? 3 : 6)}"
        >{{index+1}}</h2>
        <h1 class="name">{{team.username}}</h1>
        <div class="problem" v-for="i in noP" :key="i">
          <h1 v-if="team.subs.filter(sub => (sub.pid == i)).length == 0">-</h1>
          <h1 v-else class="green">{{team.subs.filter(sub => (sub.pid == i))[0].time}}</h1>
        </div>
        <div
          :class="{'yellow-num':index < (open ? 3 : 6),'white-num':index >= (open ? 3 : 6),'score':true}"
        >
          <h1>{{team.total_score}}</h1>
        </div>
      </div>
    </div>
    <img id="img" class="none" src="../assets/down.png" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "score-board",
  computed: mapState(["leaderboard"]),
  data: function() {
    return {
      // leaderboard: []
      noP: 8,
      top: 5,
      open: localStorage.getItem("open") | 0
    };
  },
  methods: {
    changeOpen: function() {
      if (this.open === 1) this.open = 0;
      else this.open = 1;
      this.$store.dispatch("leaderboard", {
        open: this.open,
        cb: () => {
          this.handleScroll();
        }
      });
    },
    handleScroll() {
      let container = document.getElementById("container");
      if (
        (9.5 / 10) * window.innerHeight + window.scrollY >=
        container.offsetHeight
      ) {
        document.getElementById("img").className = "none";
      } else {
        document.getElementById("img").className = "down";
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("leaderboard", {
      open: this.open,
      cb: () => {
        this.handleScroll();
      }
    });
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
#container {
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* padding-top: 5vh; */
  /* padding-bottom: 5vh; */
  background-color: #1c1c1e;
  color: white;
}

#img {
  filter: invert(1);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.on {
  background-color: yellow;
  color: black;
}

.button {
  padding: 0px 10px;
  border: 1px white solid;
  cursor: pointer;
}

.left {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.right {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.none {
  height: 0;
}

.table {
  width: 90vw;
  margin-bottom: 10vh;
}

.head-table {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  border-bottom: solid;
  border-color: lightgrey;
  color: lightgray;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
  font-family: "Teko", sans-serif;
}

.green {
  color: rgb(50, 255, 84);
}

.red {
  color: red;
}

.name {
  width: 15%;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.problem {
  width: calc(75% / 9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.score {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.down {
  position: fixed;
  bottom: 5vh;
  height: 2vh;
  animation: scrollDown 2s infinite;
  -webkit-animation: scrollDown 2s infinite;
  -moz-animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.team {
  width: 100%;
  height: 10vh;
  /* background-color: white; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.yellow {
  border-bottom: solid;
  border-right: solid;
  border-width: 1px;
  border-bottom-right-radius: 10px;
  border-color: yellow;
  color: yellow;
}

.white {
  border-bottom: solid;
  border-right: solid;
  border-width: 1px;
  border-bottom-right-radius: 10px;
}

.yellow-num {
  color: yellow;
}

.white-num {
  color: lightgrey;
}

h1 {
  font-size: 1.5vw;
  font-family: "Teko", sans-serif;
}

h2 {
  font-family: "Teko", sans-serif;
  color: yellow;
  text-shadow: 2px 0 black, 0 1px black, 1px 0 black, 0 1px black;
}

p {
  margin: 0;
  font-family: sans-serif;
  font-size: 0.8em;
  margin-left: 10px;
}

a {
  font-size: 1.7em;
  padding-top: 10px;
  color: white;
  font-family: "Teko";
  text-decoration: none;
}
</style>