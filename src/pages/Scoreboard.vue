<template>
  <Layout :stickable="true">
    <div id="particles-js"></div>
    <div class="scoreboard-container">
      <div class="title">
        <h1 v-if="latestEvent != null">{{ latestEvent.name }}</h1>
        <h5 v-if="scoreboard_data.participants != undefined">
          {{ scoreboard_data.participants.length }} Teams -
          {{ latestEvent.no_c }} challenges
        </h5>
      </div>
      <div class="table">
        <div class="row header">
          <div class="left">
            <div class="rank">
              <h4>#</h4>
            </div>
            <div class="team-name">
              <h4>Team</h4>
            </div>
            <div class="score">
              <h4>Score</h4>
            </div>
          </div>
          <div class="challenges">
            <div class="challenge" v-for="(c, index) in scoreboard_data.challenges" :key="index">
              <h4>{{ c.title }}</h4>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          v-for="(team, index) in scoreboard_data.participants"
          class="row team"
          :key="index"
        >
          <div class="left">
            <div class="rank">
              <h4>{{ index + 1 }}</h4>
            </div>
            <div class="team-name">
              <h4 class="name">{{ team.name }}</h4>
            </div>
            <div class="score">
              <h4>{{ team.score }}</h4>
            </div>
          </div>
          <div class="challenges">
            <div class="challenge" v-for="(c, i) in scoreboard_data.challenges" :key="i">
              <h4 v-if="team.taskStats[c.id] == undefined">-</h4>
              <h5 v-else class="green">{{ team.taskStats[c["id"]].created_at }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import { LHOST } from "../store/links";

export default {
  name: "index",
  computed: mapState(["scoreboard_data", "latestEvent"]),
  data: function() {
    return {};
  },
  methods: {},
  mounted: async function() {
    this.$store.dispatch("latestEvent");
    this.$store.dispatch("scoreboard");
    // this.$echo.channel("test").listen("RefreshScoreboard", event => {
    //   this.$store.commit("scoreboard", event.scoreboard);
    // });

    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (scripts[i] != undefined && scripts[i].src == LHOST + "/js/particles.min.js") {
        await scripts[i].parentNode.removeChild(scripts[i]);
      }
      if (scripts[i] != undefined && scripts[i].src == LHOST + "/js/options.js") {
        await scripts[i].parentNode.removeChild(scripts[i]);
      }
    }

    let particles = document.createElement("script");
    particles.setAttribute("src", "/js/particles.min.js");
    document.body.appendChild(particles);
    let options = document.createElement("script");
    options.setAttribute("src", "/js/options.js");
    document.body.appendChild(options);
  }
};
</script>

<style scoped>
.scoreboard-container {
  min-height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-family: "Tomorrow", sans-serif;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--background-dark);
  z-index: -1;
}

.table {
  width: 90vw;
  margin-bottom: 10vh;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;
}

.title {
  margin: 20px;
  color: var(--second-color);
}

.title > h1 {
  margin-bottom: 8px;
}

.title > h5 {
  margin-top: 7px;
}

.team {
  /* border: solid 0px; */
  border-left: 3px var(--second-color) solid;
  margin-top: 10px;
  background-color: rgba(10, 10, 10, 0.8);
}

.left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
}

.challenges {
  width: 60%;
  display: table;
  table-layout: fixed;
}

.challenge {
  justify-content: center;
  align-items: center;
  display: table-cell;
  width: 1%;
  text-align: center;
}

.rank {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: grey;
}

.header {
  color: lightgrey;
  /* border-bottom: solid 1px grey; */
}

.score,
.team-name,
.rank {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.rank {
  width: 20%;
}

.score {
  width: 30%;
}

.team-name {
  width: 50%;
}

.green {
  color: var(--second-color);
}
</style>
