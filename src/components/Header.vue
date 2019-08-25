<template>
  <div>
    <div class="fake-navbar" v-show="isStuck"></div>
    <div class="navbar" :class="{'sticky-navbar':isStuck}">
      <img class="img" src="../assets/logo.png" />
      <a>
        <p>HOME</p>
      </a>
      <a>
        <p>SCOREBOARD</p>
      </a>
      <a>
        <p>CHALLENGES</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { isStuck: false };
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > window.innerHeight) {
        this.isStuck = true;
      } else {
        this.isStuck = false;
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
.navbar {
  height: 10vh;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}

.fake-navbar {
  height: 10vh;
}

.img {
  height: 10vh;
}

.sticky-navbar {
  position: fixed;
  top: 0%;
  width: 100%;
  border-bottom: solid yellow;
  border-bottom-width: 3px;
}

p {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
}
</style>