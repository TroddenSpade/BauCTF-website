<template>
  <div class="main">
    <div data-aos="fade-right" data-aos-duration="1000" class="half1">
      <h1>How it Works ?</h1>
      <p>Our Version of CTF is more based on solving intuitive challenges rather than skill-based challenges, so KNTU CTF is a team competition in which you have to get the highest score from 12 challenges, the score is decided by the number of challenges done and by the time each challenge has taken. the top 3 teams will also receive a prize from our prize pool.</p>
    </div>
    <div class="half2">
      <img class="mountain" src="../../assets/mountain.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "how-it-works"
};
</script>

<style scoped>
.main {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.half1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vh;
  width: 50%;
  height: 100%;
}

.half2 {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
}

.mountain {
  width: 40vw;
  height: auto;
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