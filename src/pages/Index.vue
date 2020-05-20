<template>
  <div>
    <div class="background">
      <canvas id="c"></canvas>
    </div>

    <div class="main-logo">
      <g-image id="icon" src="~/assets/image/logo.png" />
      <g-image id="down" class="down" src="~/assets/image/double-down-64.png" />
    </div>

    <Layout :stickable="false">
      <div class="main-info" :class="{ 'main_dark': dark }">
        <div class="half1">
          <div
            :class="{'glitch-dark':dark,'glitch-info':!dark}"
            data-text="WTF is CTF ?"
          >WTF is CTF ?</div>
        </div>
        <div class="half2">
          <p>
            CTF (Capture The Flag) is a competition in which contestants have to
            solve a variety of tasks ranging from basic to expert programming
            exercises, such as file scavenging or decrypting a message. In these
            challenges, the contestant is usually asked to find a specific string
            that may be hidden on the server or behind a webpage. This goal is
            called the flag, hence the name!
          </p>
        </div>
      </div>
      <div class="main-info" :class="{'main_dark':dark}">
        <div class="half1">
          <div
            :class="{'glitch-dark':dark,'glitch-info':!dark}"
            data-text="How does it Work ?"
          >How does it Work ?</div>
        </div>
        <div class="half2">
          <p>Our Version of CTF is more based on solving intuitive challenges rather than skill-based challenges, so KNTU CTF is a team competition in which you have to get the highest score from all the challenges, the score is decided by the number of challenges done and by the time each challenge has taken.</p>
        </div>
      </div>
      <div class="main-info" :class="{'main_dark':dark}">
        <div class="half1">
          <div
            :class="{'glitch-dark':dark,'glitch-info':!dark}"
            data-text="Who is it for ?"
          >Who is it for ?</div>
        </div>
        <div class="half2">
          <p>As mentioned, KNTU CTF is more of an intuitive based challenge, so all you need to participate in our event is a basic programming knowledge, good intuition and out of the box thinking. if you think you have these qualities then stay tuned for our events, because you belong there.</p>
        </div>
      </div>

      <div class="team-container">
        <div class="event" v-if="latestEvent != null">
          <div class="event-top">
            <h1>Latest Event</h1>
            <a class="button" href="/register">REGISTER NOW</a>
          </div>
          <div class="event-info">
            <h2>{{latestEvent.name}}</h2>
            <h3>{{latestEvent.type}} - {{latestEvent.format}}</h3>
            <h3>{{latestEvent.start}} -- {{latestEvent.end}}</h3>
          </div>
        </div>

        <div class="team" :class="{'team_dark':dark}">
          <div class="glitch" data-text="OUR TEAM">OUR TEAM</div>
          <div class="members">
            <div class="line">
              <div class="profile">
                <g-image class="pic" src="~/assets/profile/sam.jpg" alt />
                <p class="name">Parsa Samadnejad</p>
                <p class="info">
                  Leader
                  <br />Challenge Designer
                  <br />Full-Stack Developer
                </p>
              </div>
              <div class="profile">
                <g-image class="pic" src="~/assets/profile/mahdi.jpg" alt />
                <p class="name">Mahdi Mahmoodian</p>
                <p class="info">Executive Director</p>
              </div>
              <div class="profile">
                <g-image class="pic" src="~/assets/profile/kazemi.jpg" alt />
                <p class="name">Mohammad Kazemi</p>
                <p class="info">Back-end Developer</p>
              </div>
              <div class="profile">
                <g-image class="pic" src="~/assets/profile/sarah.png" alt />
                <p class="name">Sarah Firouzabadi</p>
                <p class="info">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="contact">
          <a href="mailto:support@kntuctf.ir" target="_blank">
            <g-image class="logo" src="~/assets/logo/gmail-64.png" alt="email" />
          </a>
          <a href="https://t.me/kntuctf" target="_blank">
            <g-image class="logo" src="~/assets/logo/telegram-app-64-2.png" alt="telegram" />
          </a>
          <a href="#" target="_blank">
            <g-image class="logo" src="~/assets/logo/discord-64.png" alt="discord" />
          </a>
          <a href="https://github.com/kntuctf" target="_blank">
            <g-image class="logo" src="~/assets/logo/GitHub-Mark-Light-64px.png" alt="github" />
          </a>
        </div>

        <div class="bottom">
          <p class="copy">Copyright © 2020 3P1X</p>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "KNTU CTF"
  },
  computed: mapState(["dark", "latestEvent"]),
  components: {},
  mounted: function() {
    this.$store.dispatch("latestEvent");
    // geting canvas by Boujjou Achraf
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    var matrix =
      "田由甲申甴电甶男甸甹町画甼甽甾甿abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgb(17, 17, 17,0.08)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "rgb(20, 148, 20)";
      ctx.font = font_size + "px arial";
      for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    }
    setInterval(draw, 30);
  },
  methods: {
    handleScroll() {
      let container = document.getElementById("container");
      if (window.scrollY >= 50) {
        document.getElementById("down").className = "down-hide";
      } else {
        document.getElementById("down").className = "down";
      }
    }
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
.event-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  background: var(--second-color);
  color: var(--background-dark);
  text-transform: uppercase;
  border: none;
  padding: 0.7em 1em;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  font-family: "Tomorrow", sans-serif;
  transition: 1s;
}

.button:hover {
  background-color: white;
}

.event {
  width: 80%;
  font-family: "Tomorrow", sans-serif;
  color: white;
  margin-bottom: 20px;
}

.event-top > h1 {
  color: var(--second-color);
}

.event-top > h1 {
  color: var(--second-color);
}

.event-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.event-info > h3 {
  margin: 5px;
}

.home-links a {
  margin-right: 1rem;
}

.main-logo {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: fixed;
  z-index: -1;
  background-color: rgb(17, 17, 17);
}

.down {
  top: 90%;
  position: absolute;
  height: 3vh;
  width: auto;
  animation: scrollDown 2s infinite;
  -webkit-animation: scrollDown 2s infinite;
  -moz-animation: scrollDown 2s infinite;
}

.down-hide {
  display: none;
}

@keyframes glitch {
  0% {
    background-position: 50% 50%;
    /* filter: hue-rotate(0deg); */
  }
  1% {
    background-position: 40% 52%;
  }
  2% {
    background-position: 60% 52%;
  }
  3% {
    background-position: 47% 47%;
  }
  4% {
    background-position: 50% 50%;
    /* filter: hue-rotate(360deg); */
  }
  19% {
    background-position: 50% 50%;
  }
  20% {
    background-position: 40% 52%;
  }
  21% {
    background-position: 60% 52%;
  }
  22% {
    background-position: 47% 47%;
  }
  23% {
    background-position: 50% 50%;
    /* filter: hue-rotate(360deg); */
  }
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

@-webkit-keyframes scrollDown {
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

@-moz-keyframes scrollDown {
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

.team-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.register {
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.team {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}

.team_dark {
  animation: convert linear 0.5s;
  background-color: var(--background-dark);
  background-image: none;
  color: #fefefe;
}

.glitch {
  font-family: "Tomorrow", sans-serif;
  color: white;
  font-size: 3em;
  position: relative;
  margin: 5vh;
  animation: convert linear 0.5s;
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
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  width: fit-content;
  color: white;
  background: var(--background-dark);
  overflow: hidden;
  animation: noise-anim 5s infinite linear alternate-reverse;
  -moz-animation: noise-anim 5s infinite linear alternate-reverse;
  -o-animation: noise-anim 5s infinite linear alternate-reverse;
  -webkit-animation: noise-anim 5s infinite linear alternate-reverse;
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
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: #1a1a1a;
  overflow: hidden;
  animation: noise-anim-2 15s infinite linear alternate-reverse;
  -moz-animation: noise-anim-2 15s infinite linear alternate-reverse;
  -webkit-animation: noise-anim-2 15s infinite linear alternate-reverse;
  -o-animation: noise-anim-2 15s infinite linear alternate-reverse;
}

.team > h1 {
  font-size: 50px;
}

.line {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Teko", sans-serif;
  margin: 2vh;
}

.profile:hover .pic {
  filter: grayscale(0%);
  transition: filter 1s;
}

.profile:hover .name {
  background-color: rgb(20, 148, 20);
  color: var(--background-dark);
  transition: background-color 1s;
}

.pic {
  height: 20vh;
  width: auto;
  border-radius: 20vh;
  border: solid;
  border-width: 3px;
  border-color: rgb(20, 148, 20);
  filter: grayscale(100%);
}

.name {
  font-size: 3vh;
  display: flex;
  justify-content: center;
  border: solid;
  border-width: 0px;
  border-radius: 5px;
  margin: 10px;
  padding-left: 5px;
  padding-right: 5px;
}

.info {
  font-size: 2vh;
  display: flex;
  justify-content: center;
  color: grey;
  margin: 0;
  min-height: 9vh;
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.contact {
  height: 10vh;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.copy {
  font-family: "Teko", sans-serif;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 2em;
  transition: transform 0.5s;
}

.logo:hover {
  transform: scale(1.2);
}

.main-info {
  background-color: white;
  color: var(--background-dark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  padding-bottom: 10vh;
}

.main_dark {
  animation: convert linear 0.5s;
  background-color: var(--background-dark);
  color: #fefefe;
}

@keyframes convert {
  0% {
    background-color: white;
    color: black;
  }
  100% {
    background-color: var(--background-dark);
    color: white;
  }
}

.half1 {
  display: flex;
  position: static;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 200px;
  margin: 5vw;
}

.half2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 20px;
}

.flag {
  width: auto;
  height: 30vw;
}

.main-info p {
  font-family: "Tomorrow", sans-serif;
  font-size: 20px;
}

.glitch-info {
  /* background-color: var(--background-dark); */
  font-family: "Tomorrow", sans-serif;
  /* color: white; */
  font-size: 4em;
  position: relative;
  margin: 0 auto;
}

.glitch-dark {
  background-color: var(--background-dark);
  font-family: "Tomorrow", sans-serif;
  font-size: 4em;
  position: relative;
  margin: 0 auto;
  animation: convert linear 0.5s;
}

.glitch-dark::after {
  content: attr(data-text);
  position: absolute;
  left: 0px;
  text-shadow: -1px 0 red;
  top: 0;
  width: fit-content;
  overflow: hidden;
  animation: noise-anim 2s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -moz-animation: noise-anim 2s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -o-animation: noise-anim 2s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -webkit-animation: noise-anim 2s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
}

.glitch-dark::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  animation: convert linear 0.5s forwards;
  overflow: hidden;
  animation: noise-anim-2 5s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -moz-animation: noise-anim-2 5s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -webkit-animation: noise-anim-2 5s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
  -o-animation: noise-anim-2 5s infinite linear alternate-reverse,
    convert linear 0.5s forwards;
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

.glitch-info::after {
  content: attr(data-text);
  position: absolute;
  left: 0px;
  text-shadow: -1px 0 red;
  top: 0;
  width: fit-content;
  overflow: hidden;
  color: var(--background-dark);
  background-color: #fefefe;
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
.glitch-info::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  animation: convert linear 0.5s forwards;
  overflow: hidden;
  color: var(--background-dark);
  background-color: #fefefe;
  animation: noise-anim-2 5s infinite linear alternate-reverse;
  -moz-animation: noise-anim-2 5s infinite linear alternate-reverse;
  -webkit-animation: noise-anim-2 5s infinite linear alternate-reverse;
  -o-animation: noise-anim-2 5s infinite linear alternate-reverse;
}
</style>
