<template>
  <div id="container">
    <h2>Warmup</h2>

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
        class="team"
        v-for="(team,index) in leaderboard"
        :key="index"
      >
        <h2>{{index+1}}</h2>
        <h1 class="name">{{team.username}}</h1>
        <div class="problem" v-for="i in noP" :key="i">
          <h1 v-if="team.subs.filter(sub => (sub.pid == i)).length == 0">-</h1>
          <h1 v-else class="green">{{team.subs.filter(sub => (sub.pid == i))[0].time}}</h1>
        </div>
        <div class="score">
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
      noP: 5
    };
  },
  methods: {
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
    this.$store.dispatch("leaderboard");
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
  min-height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5vh;
  /* padding-bottom: 5vh; */
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
  border: solid;
  border-color: lightgrey;
  color: #1c1c1e;
  border-width: 0.5px;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  background-color: yellow;
  border-radius: 10px;
  font-family: "Teko", sans-serif;
}

.green {
  color: green;
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
  border-bottom: solid;
  border-right: solid;
  border-width: 1px;
  border-color: lightgrey;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
</style>