<template>
  <div class="main">
    <p>Score Board</p>
  </div>
</template>

<script>
export default {
  name: "score-board"
};
</script>

<style scoped>
.navbar {
  height: 10vh;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}

.fake-navbar {
  height: 10vh;
}

.img {
  height: 10vh;
}

.sticky-navbar {
  position: fixed;
  top: 0%;
  width: 100%;
  border-bottom: solid yellow;
  border-bottom-width: 3px;
}

a {
  font-family: "Teko", sans-serif;
  font-size: 3vh;
  text-decoration: none;
  color: grey;
}

.active {
  color: black;
}
</style>