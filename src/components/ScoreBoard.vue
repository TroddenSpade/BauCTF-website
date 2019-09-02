<template>
  <div class="main">
    <div class="table">
      <div class="head-table">
        <div class="name">
          <h1>Teams</h1>
        </div>
        <div class="problem" v-for="index in 12" :key="index">
          <h1>{{index}}</h1>
        </div>
        <div class="score">
          <h1>Score</h1>
        </div>
      </div>

      <div class="team" v-for="(team,index) in teams" :key="index">
        <h2>{{index+1}}</h2>
        <h1 class="name">{{team.name}}</h1>
        <div class="problem" v-for="index in 12" :key="index">
          <h1>-</h1>
        </div>
        <div class="score">
          <h1>{{team.score}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teams from "../../data/teams.json";
export default {
  name: "score-board",
  data: function() {
    return {
      teams
    };
  },
  methods: {}
};
</script>

<style scoped>
.main {
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.table {
  width: 90vw;
}

.head-table {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  border: solid;
  border-color: lightgrey;
  border-width: 0.5px;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  background-color: yellow;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: "Teko", sans-serif;
}

.name {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.problem {
  width: 6%;
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

.team {
  width: 100%;
  height: 10vh;
  background-color: white;
  border-bottom: solid;
  border-right: solid;
  border-width: 1px;
  border-color: lightgrey;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: row;
}

h2 {
  font-family: "Teko", sans-serif;
}
</style>