<template>
  <div class="container">
    <div class="header">
      <div class="header-slice">
        <div class="arrow-container" @click="home()">
          <i class="arrow left"></i>
        </div>
        <div class="icon-container">
          <g-image
            href="javascript:void(0);"
            class="icon"
            @click="collapse"
            src="~/assets/svgs/bars-solid.svg"
          />
        </div>
      </div>
      <h2>DASHBOARD</h2>
      <div class="signout-container" @click="logout()">
        <g-link tag="p">SIGNOUT</g-link>
      </div>
    </div>
    <div class="body">
      <div class="fake-nav"></div>
      <div class="body-container">
        <div class="fake-left"></div>
        <div id="panel" class="left-panel" ref="panel">
          <ul>
            <li class="items active-item" @click="clicked(0)">Main</li>
            <li class="items" @click="clicked(1)">Events</li>
          </ul>
        </div>
        <div class="rest">
          <Main v-if="active == 0" />
          <Event v-if="active == 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Event from "~/components/Event";
import Main from "~/components/Main";

export default {
  computed: mapState(["signedIn"]),
  components: {
    Event,
    Main
  },
  data() {
    return {
      active: 0
    };
  },
  created() {
    if (!this.signedIn) {
      this.$router.push({
        path: "/login"
      });
    } else {
      this.$store.dispatch("user");
    }
  },
  mounted() {},
  methods: {
    home() {
      this.$router.push({
        path: "/"
      });
    },
    collapse() {
      var panel = this.$refs.panel;
      panel.classList.toggle("left-panel-active");
    },
    logout() {
      this.$store.dispatch("signout", {
        route: () =>
          this.$router.push({
            path: "/"
          })
      });
      console.log("signouted");
    },
    clicked(i) {
      var panel = this.$refs.panel;
      var btns = panel.getElementsByClassName("items");
      btns[this.active].className = btns[this.active].className.replace(
        " active-item",
        ""
      );
      btns[i].className += " active-item";
      this.active = i;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  color: white;
}

.header {
  z-index: 998;
  position: fixed;
  height: 8vh;
  width: 100%;
  background-color: var(--background-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Teko";
  -webkit-box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.75);
}

.icon {
  visibility: hidden;
}

.icon-container {
  height: 60%;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.icon-container:hover .icon {
  transform: scale(1.2);
  transition: transform 0.5s;
}

.header-slice {
  height: 100%;
  width: 80px;
  margin-left: 20px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.signout-container {
  width: 80px;
  margin-right: 20px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
}

.signout-container > p {
  margin: 0;
  cursor: pointer;
  color: var(--second-color);
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
}

.left-panel {
  height: 92vh;
  width: 200px;
  background-color: #0f0f0f;
  position: fixed;
  z-index: 999;
}

.left-panel > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  padding-left: 20px;
  margin-bottom: 10px;
  height: 4vh;
  font-family: "Tomorrow", sans-serif;
  font-size: 1em;
  transition: 0.2s;
  cursor: pointer;
}

.items:not(.active-item):hover {
  background-color: var(--background-dark);
}

.active-item {
  background-color: var(--second-color);
}

.fake-left {
  width: 200px;
  height: 100%;
}

.body {
  height: 100%;
}

.body-container {
  height: 92vh;
  display: flex;
  flex-direction: row;
}

.rest {
  width: calc(100% - 200px);
  height: 92vh;
  background: var(--background-dark);
}

.fake-nav {
  height: 8vh;
  width: 100%;
}

.arrow-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.arrow {
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
}

.arrow-container:hover .arrow {
  border: solid var(--second-color);
  border-width: 0 4px 4px 0;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  transition: 0.5s;
}

@media screen and (max-width: 600px) {
  .icon {
    visibility: visible;
    height: 20px;
    width: auto;
    -webkit-filter: invert(100%);
    filter: invert(100%);
    cursor: pointer;
  }

  .left-panel {
    z-index: 999;
    position: fixed;
    left: 0px;
    height: 100%;
    width: 200px;
    background-color: #111111;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }

  .left-panel-active {
    transform: translateX(0%);
  }

  .fake-left {
    width: 0;
  }

  .rest {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
}
</style>
