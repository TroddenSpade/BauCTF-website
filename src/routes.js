import Home from "./components/Home.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import Challenges from "./components/Challenges.vue";
import Login from "./components/Login.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/scoreboard", component: ScoreBoard },
  { path: "/challenges", component: Challenges },
  { path: "/login", component: Login }
];
