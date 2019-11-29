<template>
  <div class="main" :class="{'main_dark':dark}">
    <div class="half1">
      <div class="glitch" data-text="How does it Work ?">How does it Work ?</div>
    </div>
    <div class="half2">
      <p>Our Version of CTF is more based on solving intuitive challenges rather than skill-based challenges, so KNTU CTF is a team competition in which you have to get the highest score from 9 challenges, the score is decided by the number of challenges done and by the time each challenge has taken. the top 3 teams will also receive a prize from our prize pool.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["dark"]),
  name: "how-it-works"
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_dark {
  animation: convert linear 2s;
  background-color: #1c1c1e;
  color: #fefefe;
}

@keyframes convert {
  0% {
    background-color: #1c1c1e;
    color: #fefefe;
  }
  5% {
    background-color: white;
    color: black;
  }
  20% {
    background-color: white;
    color: black;
  }
  40% {
    background-color: #1c1c1e;
    color: #fefefe;
  }
}

.glitch {
  font-family: "Tomorrow", sans-serif;
  color: white;
  font-size: 4em;
  position: relative;
  margin: 0 auto;
}

@keyframes noise-anim {
  0% {
    clip-path: inset(2% 0 29% 0);
  }
  5% {
    clip-path: inset(52% 0 49% 0);
  }
  10% {
    clip-path: inset(32% 0 17% 0);
  }
  15% {
    clip-path: inset(23% 0 17% 0);
  }
  20% {
    clip-path: inset(40% 0 46% 0);
  }
  25% {
    clip-path: inset(76% 0 2% 0);
  }
  30% {
    clip-path: inset(96% 0 1% 0);
  }
  35% {
    clip-path: inset(21% 0 48% 0);
  }
  40% {
    clip-path: inset(90% 0 8% 0);
  }
  45% {
    clip-path: inset(29% 0 72% 0);
  }
  50% {
    clip-path: inset(61% 0 30% 0);
  }
  55% {
    clip-path: inset(41% 0 29% 0);
  }
  60% {
    clip-path: inset(41% 0 26% 0);
  }
  65% {
    clip-path: inset(93% 0 2% 0);
  }
  70% {
    clip-path: inset(86% 0 13% 0);
  }
  75% {
    clip-path: inset(61% 0 4% 0);
  }
  80% {
    clip-path: inset(53% 0 47% 0);
  }
  85% {
    clip-path: inset(31% 0 55% 0);
  }
  90% {
    clip-path: inset(89% 0 6% 0);
  }
  95% {
    clip-path: inset(45% 0 1% 0);
  }
  100% {
    clip-path: inset(2% 0 1% 0);
  }
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  width: fit-content;
  color: white;
  background: #1c1c1e;
  overflow: hidden;
  animation: noise-anim 2s infinite linear alternate-reverse;
  -moz-animation: noise-anim 2s infinite linear alternate-reverse;
  -o-animation: noise-anim 2s infinite linear alternate-reverse;
  -webkit-animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip-path: inset(95% 0 1% 0);
  }
  5% {
    clip-path: inset(44% 0 45% 0);
  }
  10% {
    clip-path: inset(85% 0 11% 0);
  }
  15% {
    clip-path: inset(26% 0 36% 0);
  }
  20% {
    clip-path: inset(83% 0 3% 0);
  }
  25% {
    clip-path: inset(76% 0 7% 0);
  }
  30% {
    clip-path: inset(65% 0 2% 0);
  }
  35% {
    clip-path: inset(22% 0 75% 0);
  }
  40% {
    clip-path: inset(70% 0 6% 0);
  }
  45% {
    clip-path: inset(31% 0 51% 0);
  }
  50% {
    clip-path: inset(33% 0 26% 0);
  }
  55% {
    clip-path: inset(23% 0 58% 0);
  }
  60% {
    clip-path: inset(58% 0 35% 0);
  }
  65% {
    clip-path: inset(39% 0 14% 0);
  }
  70% {
    clip-path: inset(37% 0 57% 0);
  }
  75% {
    clip-path: inset(41% 0 23% 0);
  }
  80% {
    clip-path: inset(51% 0 24% 0);
  }
  85% {
    clip-path: inset(25% 0 21% 0);
  }
  90% {
    clip-path: inset(27% 0 26% 0);
  }
  95% {
    clip-path: inset(20% 0 17% 0);
  }
  100% {
    clip-path: inset(63% 0 17% 0);
  }
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: #1c1c1e;
  overflow: hidden;
  animation: noise-anim-2 15s infinite linear alternate-reverse;
  -moz-animation: noise-anim-2 15s infinite linear alternate-reverse;
  -webkit-animation: noise-anim-2 15s infinite linear alternate-reverse;
  -o-animation: noise-anim-2 15s infinite linear alternate-reverse;
}

.half1 {
  display: flex;
  position: static;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10vw;
}

.half2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 20px;
}

.mountain {
  height: 40vw;
}

h1 {
  font-size: 3vw;
  font-family: "Tomorrow", sans-serif;
}

p {
  font-family: "Tomorrow", sans-serif;
  font-size: 20px;
}
</style>