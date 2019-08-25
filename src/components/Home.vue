<template>
  <div>
    <Logo />
    <Header />
    <Main />
  </div>
</template>

<script>
import Logo from "./Logo";
import Header from "./Header";
import Main from "./Main";

export default {
  name: "home",
  components: {
    Logo,
    Header,
    Main
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Teko:700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
body {
  margin: 0;
}
</style>