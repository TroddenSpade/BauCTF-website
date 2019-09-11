<template>
  <div class="main">
    <div data-aos="fade-right" data-aos-duration="1000" class="half1">
      <h1>What is CTF ?</h1>
      <p>CTF (Capture The Flag) is a competition in which contestants have to solve a variety of tasks ranging from basic to expert programming exercises, such as file scavenging or decrypting a message. In these challenges, the contestant is usually asked to find a specific string that may be hidden on the server or behind a webpage. This goal is called the flag, hence the name!</p>
    </div>
    <div class="half2">
      <img class="flag" src="../../assets/flag.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "what-is-ctf"
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
  position: static;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vh;
  width: 50%;
  height: 100%;
}

.half2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.flag {
  width: auto;
  height: 30vw;
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