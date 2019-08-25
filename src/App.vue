<template>
  <div>
    <Logo />
    <Header />
    <Main />
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Logo,
    Header,
    Main
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Teko:700&display=swap");

body {
  margin: 0;
}
</style>