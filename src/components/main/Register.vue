<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="main">
    <h1>Would you like to participate ?</h1>
    <a class="link" :href="link" target="_blank">
      <img class="register" src="../../assets/register.png" alt />
    </a>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      link: ""
    };
  }
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 40vh;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.link {
  border: solid;
  border-width: 5px;
  padding: 5px;
  border-width: 3px;
  border-radius: 10px;
  border-color: black;
  transition: 0.5s;
}

.link:hover {
  transform: scale(1.02);
  background-color: white;
}

.register {
  width: 18vw;
  height: auto;
}

h1 {
  font-size: 3vw;
  font-family: "Anton", sans-serif;
}
</style>