<template>
  <div>
    <What />
    <Who />
    <How />
    <Register />
    <Team />
  </div>
</template>

<script>
import What from "./main/What";
import Who from "./main/Who";
import How from "./main/How";
import Register from "./main/Register";
import Team from "./main/Team";

export default {
  name: "main",
  components: {
    What,
    Who,
    How,
    Team,
    Register
  }
};
</script>