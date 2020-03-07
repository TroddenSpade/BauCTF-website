<template>
  <div>
    <Logo />
    <Header :stickable="false" />
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