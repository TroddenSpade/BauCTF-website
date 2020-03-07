import Home from "./components/Home.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import Challenges from "./components/Challenges.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/scoreboard", component: ScoreBoard },
  { path: "/challenges", component: Challenges },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];
