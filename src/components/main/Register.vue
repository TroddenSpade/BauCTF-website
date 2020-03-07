<template>
  <div class="main">
    <div class="crack">
      <p class="p">Would you like to participate ?</p>
    </div>
    <div class="block">
      <a class="link" :href="openLink" target="_blank">Open Register</a>
      <a class="link" :href="link" target="_blank">KNTU Register</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.word = this.$el.getElementsByClassName("p")[0];
    this.INITIAL_WORD = this.$el.getElementsByClassName("p")[0].innerHTML;
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
      openLink: "http://kntuctf.ir/#/Register",
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
.main {
  width: 100vw;
  min-height: 20vh;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 10px 0;
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

.register {
  width: 15em;
  height: auto;
}

.crack {
  width: 900px;
  text-align: center;
}

p {
  margin: 0;
  font-size: 3em;
  font-family: "Tomorrow", sans-serif;
}
</style>