<template>
  <div class="main-container">
    <div class="charts">
      <div class="top-info">
        <h1>{{user.name}}</h1>
      </div>
      <div class="chart-container">
        <canvas ref="scoreChart" id="chart"></canvas>
      </div>
      <div class="chart-container">
        <canvas ref="rankChart" id="chart"></canvas>
      </div>
    </div>
    <div class="submissions">
      <div class="submissions-header">
        <h3>Latest Submissions</h3>
      </div>
      <h5 v-if="submissions.length == 0">* Capture Some Flags</h5>
      <div class="submission" v-for="(s,index) in submissions" :key="index">
        <div class="submission-left">
          <div class="challenge-title">
            <h4>{{s.title}}</h4>
            <div class="cat">
              <h6>{{categories[s.category]}}</h6>
            </div>
          </div>
          <h5>{{s.name}}</h5>
        </div>
        <div class="submission-right">
          <h6>{{s.created_at}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Chart from "chart.js";

export default {
  computed: mapState([
    "signedIn",
    "leaderboard",
    "submissions",
    "categories",
    "user"
  ]),
  data() {
    return {};
  },
  watch: {
    leaderboard(leaderboard, oldCount) {
      let label = [];
      let rank = [];
      let score = [];
      leaderboard.forEach(e => {
        label.push(e.start.substring(8, 16));
        rank.push(e.rank);
        score.push(e.score);
      });

      var ctxRank = this.$refs.rankChart;
      var ctxScore = this.$refs.scoreChart;
      var ScoreChart = new Chart(ctxScore, {
        type: "line",
        data: {
          labels: label,
          datasets: [
            {
              label: "Score",
              data: score,
              backgroundColor: ["rgb(20, 148, 20,0.2)"],
              borderColor: "rgb(20, 148, 20)",
              borderWidth: 1,
              fill: "start"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  start: 0
                },
                gridLines: {
                  display: true,
                  color: "#27272b",
                  zeroLineColor: "green"
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                  color: "#27272b"
                }
              }
            ]
          },
          tooltips: {
            callbacks: {
              title: (tooltipItems, data) => {
                return leaderboard[tooltipItems[0].index].name;
              }
            }
          }
        }
      });
      var RankChart = new Chart(ctxRank, {
        type: "line",
        data: {
          labels: label,
          datasets: [
            {
              label: "Rank",
              data: rank,
              backgroundColor: ["rgb(20, 148, 20,0.2)"],
              borderColor: "rgb(20, 148, 20)",
              borderWidth: 1,
              fill: "start"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                  reverse: true,
                  suggestedMin: 1,
                  stepSize: 1
                },
                gridLines: {
                  display: true,
                  color: "#27272b",
                  zeroLineColor: "green"
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                  color: "#27272b"
                }
              }
            ]
          },
          tooltips: {
            callbacks: {
              title: (tooltipItems, data) => {
                return leaderboard[tooltipItems[0].index].name;
              }
            }
          }
        }
      });
    }
  },
  created() {
    this.$store.dispatch("leaderboard");
    this.$store.dispatch("submissions");
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.main-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
  background-color: var(--background-dark);
  padding: 30px;
  box-sizing: border-box;
}

.chart-container {
  position: relative;
  margin: auto;
  height: 40%;
  min-width: 500px;
}

.charts {
  height: 80vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.top-info {
  width: 500px;
  font-family: "Teko";
  margin: 20px;
}

.top-info > h1 {
  margin: 0;
}

.submissions {
  width: 400px;
  height: 80vh;
  color: white;
  margin-top: 30px;
}

.submission {
  width: 100%;
  height: 60px;
  /* padding: 10px; */
  background-color: #111111;
  border-left: var(--second-color) 2px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.submission-right {
  font-family: "Tomorrow";
  margin-right: 10px;
  color: lightgrey;
}

.challenge-title > h4 {
  margin: 5px;
  font-family: "Tomorrow";
}

.submission-left > h5 {
  margin: 5px;
  color: grey;
  font-family: "Teko";
}

.submissions-header > h3,
.submissions > h5 {
  font-family: "Tomorrow";
}

.cat > h6 {
  margin: 0px;
}

.cat {
  color: var(--second-color);
  border: solid 1px var(--second-color);
  padding: 2px;
  margin-left: 10px;
}

.challenge-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Tomorrow";
}
</style>
