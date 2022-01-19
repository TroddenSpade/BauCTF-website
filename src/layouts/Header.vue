<template>
  <div class="layout">
    <div class="fake-navbar" v-show="isStuck || stickable"></div>
    <div
      class="navbar"
      :class="{
        'dark': stickable ,
        'navbar_dark': !stickable && dark,
        'sticky-navbar': isStuck || stickable
      }"
    >
      <ul class="links" ref="links">
        <li>
          <g-link
            class="link"
            to="/"
            tag="a"
            :active-class="stickable || dark ? 'active_dark' : 'active'"
            exact
          >HOME</g-link>
        </li>
        <li>
          <g-link
            class="link"
            to="/scoreboard/4"
            tag="a"
            :active-class="stickable || dark ? 'active_dark' : 'active'"
          >SCOREBOARD</g-link>
        </li>
        <li>
          <g-link
            class="link"
            to="/challenges"
            tag="a"
            :active-class="stickable || dark ? 'active_dark' : 'active'"
          >CHALLENGES</g-link>
        </li>
        <li>
          <g-link
            class="login link"
            to="/login"
            tag="a"
            :active-class="stickable || dark ? 'active_dark' : 'active'"
            v-if="!signedIn"
          >LOGIN</g-link>
          <g-link class="login" v-else to="/dashboard">Dashboard</g-link>
        </li>
      </ul>
      <div class="icon-container">
        <g-image
          href="javascript:void(0);"
          :class="{
        icon: true,
        'image-dark': stickable || dark,
        }"
          @click="collapse"
          :active-class="stickable || dark ? 'active_dark' : 'active'"
          src="~/assets/svgs/bars-solid.svg"
        />
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
    collapse() {
      var x = this.$refs.links;
      x.classList.toggle("links-active");
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


<style scoped>
ul {
  margin: 0;
  padding: 0;
}

.navbar {
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 8vh;
  background-color: white;
  font-family: "Teko";
  font-size: 1.3rem;
}

.dark {
  background-color: var(--background-dark);
  animation: shadow linear 0.5s forwards;
}

.navbar_dark {
  animation: convert linear 0.5s, shadow linear 0.5s forwards;
  background-color: var(--background-dark);
}

@keyframes shadow {
  from {
  }
  to {
    -webkit-box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
  }
}

.sticky-navbar {
  position: fixed;
  top: 0%;
  z-index: 1;
  width: 100%;
}

.fake-navbar {
  height: 8vh;
}

.links {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-weight: bold;
}

.links li {
  list-style-type: none;
  display: flex;
}

.link {
  font-family: "Teko", sans-serif;
  text-decoration: none;
  color: grey;
}

.link:not(.active_dark):hover {
  color: lightgrey;
}

.icon {
  display: none;
  max-width: 3vh;
  cursor: pointer;
}

.active {
  color: black;
  text-shadow: none;
}

.active_dark {
  color: #fefefe;
}

.logo {
  max-width: 10vh;
}

.image-dark {
  animation: convert-image 0.5s forwards;
}

@keyframes convert {
  0% {
    background-color: white;
    color: black;
  }
  100% {
    background-color: var(--background-dark);
    color: #fefefe;
  }
}

@keyframes convert-image {
  0% {
  }
  100% {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
}

@media screen and (max-width: 600px) {
  body {
    overflow-x: hidden;
  }

  .links {
    position: relative;
    height: 92vh;
    left: 40%;
    background-color: var(--background-dark);
    top: 50vh;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }
  .icon {
    display: block;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    width: 10%;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    width: 30%;
  }
}

.links-active {
  transform: translateX(0%);
}

.login {
  color: rgb(20, 148, 20);
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
}
</style>
