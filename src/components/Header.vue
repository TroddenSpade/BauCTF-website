<template>
  <div>
    <div class="fake-navbar" v-show="isStuck || stickable"></div>
    <div class="navbar" :class="{'sticky-navbar':isStuck || stickable}">
      <img class="img" src="../assets/logo.png" />
      <router-link to="/" tag="a" active-class="active" exact>HOME</router-link>
      <router-link to="/scoreboard" tag="a" active-class="active">SCOREBOARD</router-link>
      <router-link to="/challenges" tag="a" active-class="active">CHALLENGES</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stickable"],
  data: function() {
    return { isStuck: false };
  },
  methods: {
    handleScroll() {
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
  z-index: 1;
  width: 100%;
  border-bottom: solid yellow;
  border-bottom-width: 3px;
}

a {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
  text-decoration: none;
  color: rgb(189, 189, 189);
}

a:not(.active):hover {
  color: rgb(129, 129, 129);
}

.active {
  color: black;
}
</style>