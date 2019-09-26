<template>
  <div>
    <div class="fake-navbar" v-show="isStuck || stickable"></div>
    <div class="navbar" :class="{'sticky-navbar':isStuck || stickable}">
      <img class="img" src="../assets/logo.png" />
      <router-link to="/" tag="a" active-class="active" exact>HOME</router-link>
      <router-link to="/scoreboard" tag="a" active-class="active">SCOREBOARD</router-link>
      <router-link to="/challenges" tag="a" active-class="active">CHALLENGES</router-link>
      <div class="status">
        <router-link to="/login" class="login" tag="a" active-class="active" v-if="!signedIn">LOGIN</router-link>
        <a class="login" v-else @click="logout()">SIGN OUT</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["stickable"],
  data: function() {
    return { isStuck: false };
  },
  computed: mapState(["signedIn"]),
  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        this.isStuck = true;
      } else {
        this.isStuck = false;
      }
    },
    logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      this.$store.commit("signInStatus", false);
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

p,
.login {
  font-family: "Teko", sans-serif;

  font-size: 18px;
  color: yellow;
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
  cursor: pointer;
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

.status {
  width: 10%;
  display: flex;
  justify-content: center;
  align-content: center;
}

a {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
  text-decoration: none;
  color: rgb(189, 189, 189);
  /* text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black; */
}

a:not(.active):hover {
  color: rgb(129, 129, 129);
}

.active {
  color: black;
  text-shadow: none;
}
</style>