<template>
  <div class="layout">
    <div class="fake-navbar" v-show="isStuck || stickable"></div>
    <div
      class="navbar"
      :class="{
        navbar_dark: !stickable && dark,
        dark: stickable || dark,
        'sticky-navbar': isStuck || stickable
      }"
    >
      <g-link
        class="link"
        to="/"
        tag="a"
        :active-class="stickable || dark ? 'active_dark' : 'active'"
        exact
      >HOME</g-link>
      <g-link
        class="link"
        to="/scoreboard"
        tag="a"
        :active-class="stickable || dark ? 'dark' : 'active'"
      >SCOREBOARD</g-link>
      <g-link
        class="link"
        to="/challenges"
        tag="a"
        :active-class="stickable || dark ? 'dark' : 'active'"
      >CHALLENGES</g-link>
      <div class="status">
        <g-link
          class="login"
          to="/login"
          tag="a"
          :active-class="stickable || dark ? 'dark' : 'active'"
          v-if="!signedIn"
        >LOGIN</g-link>
        <a class="login" v-else @click="logout()">SIGN OUT</a>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["stickable"],
  data: function() {
    return { isStuck: false };
  },
  computed: mapState(["signedIn", "dark"]),
  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        this.isStuck = true;
        this.$store.commit("darkMode", true);
      } else {
        this.isStuck = false;
      }
    },
    logout() {
      this.$store.dispatch("signOut");
    }
  },
  created: function() {
    if (!this.stickable) window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    if (!this.stickable)
      window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.navbar {
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}

.dark {
  background-color: #1c1c1e;
  color: #fefefe;
}

.navbar_dark {
  animation: convert linear 0.5s;
  background-color: #1c1c1e;
  color: #fefefe;
}

@keyframes convert {
  0% {
    background-color: white;
    color: black;
  }
  100% {
    background-color: #1c1c1e;
    color: #fefefe;
  }
}

.fake-navbar {
  height: 10vh;
}

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

.link {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
  text-decoration: none;
  color: grey;
}

.link:not(.active):hover {
  color: lightgrey;
}

.active {
  color: black;
  text-shadow: none;
}

.active_dark {
  color: #fefefe;
}
</style>
