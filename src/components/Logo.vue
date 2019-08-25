<template>
  <div class="logo">
    <img class="img" src="../assets/logo.png" />
    <p>Scroll Down</p>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
.logo {
  display: flex;
  flex: 1;
  background-color: yellow;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.img {
  height: 70%;
}

p {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
  animation: scrollDown 2s infinite;
  -webkit-animation: scrollDown 2s infinite;
  -moz-animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes scrollDown {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes scrollDown {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>