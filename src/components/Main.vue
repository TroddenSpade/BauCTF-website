<template>
  <div class="main-container">
    <div class="top-info"></div>
    <div class="charts">
      <div class="chart-container">
        <canvas ref="scoreChart" id="chart"></canvas>
      </div>
      <div class="chart-container">
        <canvas ref="rankChart" id="chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Chart from "chart.js";

export default {
  computed: mapState(["signedIn", "events"]),
  data() {
    return {
      active: 0,
      codes: []
    };
  },
  created() {
    this.$store.dispatch("events");
  },
  mounted() {
    var ctxRank = this.$refs.rankChart;
    var ctxScore = this.$refs.scoreChart;
    var ScoreChart = new Chart(ctxScore, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Score",
            data: [12, 19, 3, 5, 1, 3, 6],
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
              }
            }
          ]
        }
      }
    });
    var RankChart = new Chart(ctxRank, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Rank",
            data: [12, 19, 3, 5, 1, 3],
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
                reverse: true,
                start: 0
              }
            }
          ]
        }
      }
    });
  },
  methods: {
    participate(i, id) {
      this.$store.dispatch("participate", {
        id: id,
        code: this.codes[i]
      });
    }
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.chart-container {
  position: relative;
  margin: auto;
  height: 40%;
  min-width: 500px;
}

.charts {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
}

.top-info {
  width: 70%;
  height: 15vh;
  background-color: #111111;
  margin-top: 20px;
}
</style>
