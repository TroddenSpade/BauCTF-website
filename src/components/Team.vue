<template>
  <div class="container">
    <div class="register">
      <div class="crack">
        <p class="crack-p">Would you like to participate ?</p>
      </div>
      <div class="block">
        <a class="link" :href="openLink">Open Register</a>
        <a class="link" :href="link" target="_blank">KNTU Register</a>
      </div>
    </div>

    <div class="team" :class="{'team_dark':dark}">
      <div class="glitch" data-text="OUR TEAM">OUR TEAM</div>
      <div class="members">
        <div class="line">
          <div class="profile">
            <g-image class="pic" src="~/assets/profile/sam.png" alt />
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

    <div class="contact">
      <a href="mailto:support@kntuctf.ir" target="_blank">
        <g-image class="logo" src="~/assets/gmail-logo.png" alt="gmail" />
      </a>
      <a href="https://t.me/kntuctf" target="_blank">
        <g-image class="logo" src="~/assets/telegram_logo.png" alt="telegram" />
      </a>
      <a href="https://www.instagram.com/kntuctf" target="_blank">
        <g-image class="logo" src="~/assets/instagram-logo.png" alt="github" />
      </a>
      <a href="https://github.com/kntuctf" target="_blank">
        <g-image class="logo" src="~/assets/github-logo.png" alt="github" />
      </a>
    </div>

    <div class="bottom">
      <p class="copy">Copyright © 2020 3P1X</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["dark"]),
  mounted: function() {
    this.word = this.$el.getElementsByClassName("crack-p")[0];
    this.INITIAL_WORD = this.$el.getElementsByClassName("crack-p")[0].innerHTML;
    this.$el
      .getElementsByClassName("link")[0]
      .addEventListener("mouseenter", this.init);
    this.$el
      .getElementsByClassName("link")[1]
      .addEventListener("mouseenter", this.init);
  },
  data: function() {
    return {
      link: "https://evand.com/events/kntuctf",
      openLink: "/register",
      interv: "undefined",
      canChange: false,
      globalCount: 0,
      count: 0,
      isGoing: false
    };
  },
  methods: {
    rand: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomLetter: function() {
      var alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "!",
        "1",
        "#",
        "$",
        "&",
        "*"
      ];
      return alphabet[this.rand(0, alphabet.length - 1)];
    },
    getRandomWord: function(word) {
      var text = word.innerHTML;

      var finalWord = "";
      for (var i = 0; i < text.length; i++) {
        finalWord += text[i] == " " ? " " : this.getRandomLetter();
      }

      return finalWord;
    },
    init: function() {
      if (this.isGoing) return;

      this.isGoing = true;
      var randomWord = this.getRandomWord(this.word);
      this.word.innerHTML = randomWord;

      this.interv = setInterval(
        function() {
          var finalWord = "";
          for (var x = 0; x < 31; x++) {
            if (x <= this.count && this.canChange) {
              finalWord += this.INITIAL_WORD[x];
            } else {
              finalWord += this.getRandomLetter();
            }
          }
          this.word.innerHTML = finalWord;
          if (this.canChange) {
            this.count++;
          }
          if (this.globalCount >= 20) {
            this.canChange = true;
          }
          if (this.count >= 31) {
            clearInterval(this.interv);
            this.count = 0;
            this.canChange = false;
            this.globalCount = 0;
            this.isGoing = false;
          }
          this.globalCount++;
        }.bind(this),
        50
      );
    }
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.block {
  height: 10vh;
}

.register {
  width: 100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.crack {
  width: 100%;
  text-align: center;
}

.link {
  border: solid;
  font-size: 1.5em;
  font-family: "Teko";
  text-decoration: none;
  border-width: 3px;
  padding: 5px;
  border-width: 3px;
  border-radius: 10px;
  border-color: black;
  transition: 0.5s;
  margin: 5vh;
}

.link:hover {
  transform: scale(1.02);
  background-color: white;
}

.crack-p {
  margin: 10;
  font-size: 3em;
  font-family: "Tomorrow", sans-serif;
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
  animation: convert linear 2s;
  background-color: #1c1c1e;
  background-image: none;
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
  font-size: 3.5em;
  position: relative;
  margin: 5vh;
  min-width: 300px;
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
  background-color: yellow;
  color: #1c1c1e;
  transition: background-color 1s;
}

.pic {
  height: 23vh;
  width: auto;
  border-radius: 20vh;
  border: solid;
  border-width: 3px;
  border-color: yellow;
  filter: grayscale(100%);
}

.name {
  font-size: 3vh;
  display: flex;
  justify-content: center;
  border: solid;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 0;
  margin-bottom: 10px;
}

.info {
  font-size: 2vh;
  display: flex;
  justify-content: center;
  color: grey;
  margin: 0;
  min-height: 9vh;
}

.contact {
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: yellow;
}

.bottom {
  height: 5vh;
  width: 100%;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
}

.copy {
  font-family: "Teko", sans-serif;
}

.logo {
  max-width: 2em;
  transition: transform 0.5s;
}

.logo:hover {
  transform: scale(1.2);
}
</style>