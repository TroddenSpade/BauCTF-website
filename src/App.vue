<template>
  <div>
    <Header v-show="$route.path != '/'" :stickable="$route.path!= '/'" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Teko:700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
@font-face {
  font-family: "Arcade";
  font-style: normal;
  src: url("./assets/ARCADE_N.TTF");
}
body {
  margin: 0;
}
html {
  overflow: scroll;
  overflow-x: hidden;
}
a {
  color: black;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>