<template>
  <Layout :stickable="true">
    <div class="ab-not">
      <notifications group="scoreboard" classes="vue-notifications" position="top right" />
    </div>
    <div id="particles-js"></div>
    <div class="scoreboard-container">
      <div class="title-container">
        <div class="title" v-if="scoreboards[id] != null">
          <h1>{{ scoreboards[id].name }}</h1>
          <h5>
            {{ scoreboards[id].scoreboard.participants.length }} Teams -
            {{ scoreboards[id].no_c }} challenges
          </h5>
        </div>
        <div class="change" v-if="scoreboards[id] != null">
          <span
            v-for="i in scoreboards[id].no"
            :key="i"
            :class="{ dot: true, inactive: id !== i, active: id === i }"
            @click="() => changeEvent(i)"
          ></span>

          <!-- <div class="change-button" @click="()=>changeEvent(-1)" v-show="id != 1">
            <i class="fa fa-angle-double-left arrow"></i>
            <h6>prev</h6>
          </div>
          <div class="change-button" @click="()=>changeEvent(1)">
            <h6>next</h6>
            <i class="fa fa-angle-double-right arrow"></i>
          </div>-->
        </div>
      </div>
      <div class="scoreboard" v-if="scoreboards[id] != null">
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
              <div
                class="challenge"
                v-for="(c, index) in scoreboards[id].scoreboard.challenges"
                :key="index"
              >
                <h4>{{ c.title }}</h4>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            v-for="(team, index) in scoreboards[id].scoreboard.participants"
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
              <div
                class="challenge"
                v-for="(c, i) in scoreboards[id].scoreboard.challenges"
                :key="i"
              >
                <h4 v-if="team.taskStats[c.id] == undefined">-</h4>
                <h5 v-else class="green">{{ team.taskStats[c["id"]].created_at }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import { LHOST } from "../../store/links";

export default {
  computed: mapState(["scoreboards"]),

  data: function() {
    return { id: parseInt(this.$route.params.id) };
  },
  watch: {
    $route(to, from) {
      this.id = parseInt(to.params.id);
      if (this.id === 0)
        this.$store.dispatch("scoreboard", {
          id: parseInt(this.id),
          notification: msg => this.notification("error", msg),
          next: id => {
            this.id = id;
          }
        });
    }
  },
  methods: {
    notification(type, msg) {
      this.$notify({
        group: "scoreboard",
        type: type,
        title: "Scoreboard Error",
        text: msg
      });
    },
    changeEvent(offset) {
      if (offset <= 0) {
        return this.notification("error", "Scoreboard not Found.");
      }
      this.$router.push({
        path: "/scoreboard/" + offset
      });
    }
  },
  mounted: async function() {
    // if (this.scoreboards[this.id] === undefined)
    //   this.$store.dispatch("scoreboard", {
    //     id: parseInt(this.id),
    //     notification: msg => this.notification("error", msg),
    //     next: id => {
    //       this.id = id;
    //     }
    //   });
    // this.$echo.channel("test").listen("RefreshScoreboard", event => {
    //   this.$store.commit("scoreboard", event.scoreboard);
    // });

    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (
        scripts[i] != undefined &&
        scripts[i].src == LHOST + "/js/particles.min.js"
      ) {
        await scripts[i].parentNode.removeChild(scripts[i]);
      }
      if (
        scripts[i] != undefined &&
        scripts[i].src == LHOST + "/js/options.js"
      ) {
        await scripts[i].parentNode.removeChild(scripts[i]);
      }
    }

    let particles = await document.createElement("script");
    particles.setAttribute("src", "/js/particles.min.js");
    await document.body.appendChild(particles);
    let options = document.createElement("script");
    options.setAttribute("src", "/js/options.js");
    document.body.appendChild(options);
  }
};
</script>

<style scoped>
.scoreboard-container {
  min-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  font-family: "Tomorrow", sans-serif;
}

.scoreboard-container h4 {
  font-size: 0.9em;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--background-dark);
  z-index: -1;
}

.scoreboard {
  padding: 0px 40px;
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.table {
  margin-bottom: 10vh;
  width: fit-content;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 8vh;
}

.title-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--second-color);
}

.title-container {
  box-sizing: border-box;
  padding: 20px;
}

.title > h1 {
  margin-bottom: 8px;
}

.title > h5 {
  margin-top: 7px;
}

.change {
  display: flex;
  flex-direction: row;
  color: grey;
}

.change-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.change h6 {
  margin: 10px;
}

.arrow {
  font-size: 30px;
}

.change-button:hover {
  color: var(--second-color);
  cursor: pointer;
}

.team {
  /* border: solid 0px; */
  border-left: 3px var(--second-color) solid;
  margin-top: 10px;
  background-color: rgba(10, 10, 10, 0.8);
}

.left {
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.challenges {
  display: table;
  table-layout: fixed;
  width: max-content;
}

.challenge {
  justify-content: center;
  align-items: center;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 120px;
  color: grey;
}

.rank {
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.header {
  color: lightgrey;
  border-left: 3px transparent solid;
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

.score {
  width: 60px;
}

.team-name {
  width: 200px;
}

.green {
  color: var(--second-color);
}

.ab-not {
  position: absolute;
  right: 0;
  top: 10vh;
  z-index: 2;
}

.dot {
  height: 9px;
  width: 9px;
  margin: 4px;
  border-radius: 50%;
  display: inline-block;
}

.inactive {
  background-color: grey;
}

.inactive:hover {
  background-color: lightgray;
  cursor: pointer;
}

.active {
  background-color: var(--second-color);
}
</style>
