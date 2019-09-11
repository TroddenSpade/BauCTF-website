<template>
  <div class="main">
    <div data-aos="fade-right" data-aos-duration="1500" class="half1">
      <img class="running" src="../../assets/running.png" alt />
    </div>

    <div data-aos="fade-left" data-aos-duration="1000" class="half2">
      <h1>Who is it for ?</h1>
      <p>As mentioned, KNTU CTF is more of an intuitive based challenge, so all you need to participate in our event is a basic programming knowledge, good intuition and out of the box thinking. if you think you have these qualities then stay tuned for our events, because you belong there.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "who-is-it-for"
};
</script>

<style scoped>
.main {
  min-height: 70vh;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
}

.half2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5vh;
  width: 50%;
  height: 100%;
}

.half1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.running {
  width: 30vw;
}

h1 {
  font-size: 3vw;
  font-family: "Anton", sans-serif;
}

p {
  font-family: "teko", sans-serif;
  font-size: 20px;
}
</style>