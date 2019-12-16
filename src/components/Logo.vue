<template>
  <div class="logo">
    <!-- <img class="img" src="../assets/logo.png" /> -->
    <canvas id="c"></canvas>

    <section></section>
    <img class="down" src="../assets/down.png" />
  </div>
</template>

<script>
export default {
  name: "logo",
  mounted: function() {
    // geting canvas by Boujjou Achraf
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    var matrix =
      "田由甲申甴电甶男甸甹町画甼甽甾甿abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgb(255,255,0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "rgba(28,28,30)";
      ctx.font = font_size + "px arial";
      for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    }

    setInterval(draw, 30);
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  flex: 1;
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
  top: 90%;
  position: absolute;
  height: 3vh;
  animation: scrollDown 2s infinite;
  -webkit-animation: scrollDown 2s infinite;
  -moz-animation: scrollDown 2s infinite;
}

section {
  position: absolute;
  height: 70vh;
  width: 80vw;
  background-image: url(../assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

/* section::before {
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
  animation: glitch 4s linear infinite;
  -webkit-animation: glitch 4s infinite;
  -moz-animation: glitch 4s infinite;
} */

@keyframes glitch {
  0% {
    background-position: 50% 50%;
    /* filter: hue-rotate(0deg); */
  }
  1% {
    background-position: 40% 52%;
  }
  2% {
    background-position: 60% 52%;
  }
  3% {
    background-position: 47% 47%;
  }
  4% {
    background-position: 50% 50%;
    /* filter: hue-rotate(360deg); */
  }
  19% {
    background-position: 50% 50%;
  }
  20% {
    background-position: 40% 52%;
  }
  21% {
    background-position: 60% 52%;
  }
  22% {
    background-position: 47% 47%;
  }
  23% {
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