<template>
  <div class="main">
    <What />
    <Who />
    <How />
    <Team />
  </div>
</template>

<script>
import What from "./main/What";
import Who from "./main/Who";
import How from "./main/How";
import Team from "./main/Team";
export default {
  name: "main",
  components: {
    What,
    Who,
    How,
    Team
  }
};
</script>

<style scoped>
.main {
  height: 200vh;
}
</style>