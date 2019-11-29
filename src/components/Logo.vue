<template>
  <div class="logo">
    <!-- <img class="img" src="../assets/logo.png" /> -->
    <section></section>
    <img class="down" src="../assets/down.png" />
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.img {
  max-height: 70vh;
  max-width: 80vw;
}

.down {
  height: 2vh;
  animation: scrollDown 2s infinite;
  -webkit-animation: scrollDown 2s infinite;
  -moz-animation: scrollDown 2s infinite;
}

section {
  position: relative;
  height: 70vh;
  width: 80vw;
  background-image: url(../assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

section::before {
  content: url();
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(../assets/logo.png);
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0.5;
  animation: glitch 2s linear infinite;
  -webkit-animation: glitch 2s infinite;
  -moz-animation: glitch 2s infinite;
}

@keyframes glitch {
  0% {
    background-position: 50% 50%;
    /* filter: hue-rotate(0deg); */
  }
  2% {
    background-position: 40% 52%;
  }
  4% {
    background-position: 60% 52%;
  }
  6% {
    background-position: 47% 47%;
  }
  8% {
    background-position: 50% 50%;
    /* filter: hue-rotate(360deg); */
  }
  10% {
    background-position: 40% 52%;
  }
  12% {
    background-position: 60% 52%;
  }
  14% {
    background-position: 47% 47%;
  }
  16% {
    background-position: 50% 50%;
    /* filter: hue-rotate(360deg); */
  }
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