<template>
  <div class="container" v-if="!signedIn">
    <h2>LOGIN</h2>
    <input class="name" type="text" placeholder="Your Team's Name" v-model="user" />
    <div style="margin: 10px 0 10px 0;"></div>
    <input type="password" placeholder="Password" v-model="password" />
    <div style="margin: 10px 0 10px 0;"></div>
    <div style="margin: 10px 0 10px 0;"></div>
    <button class="submit" @click="submit">LOGIN</button>
  </div>
  <div v-else class="container loggedin">
    <h1>
      SignOut
      <br />To
      <br />Continue
      <br />...
    </h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      user: "",
      password: "",
      callback: () => {
        this.$router.push({
          path: "/challenges"
        });
      }
    };
  },
  computed: mapState(["signedIn"]),
  methods: {
    submit() {
      if (this.user.length == 0 || this.password.length == 0) {
        return alert("invalid username or password");
      }
      this.$store.dispatch("signin", this.$data);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: yellow;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loggedin {
  letter-spacing: 10px;
  font-size: 40px;
  font-family: "Teko", sans-serif;
  text-shadow: 2px 0 black, 0 1px black, 2px 0 black, 0 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
}

h2 {
  font-size: 40px;
  letter-spacing: 10px;
  font-family: "Teko", sans-serif;
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
}

input {
  height: 30px;
  width: 300px;
  padding: 5px;
  border-radius: 10px;
  border-color: black;
  outline: 0;
}

.container {
  background-image: linear-gradient(135deg, yellow 25%, transparent 25%),
    linear-gradient(225deg, yellow 25%, transparent 25%),
    linear-gradient(45deg, yellow 25%, transparent 25%);
  background-position: 25px 0, 25px 0, 0 0, 0 0;
  background-size: 100px 100px;
  background-repeat: repeat;
  background-color: rgb(223, 223, 22);
}

button {
  height: 60px;
  width: 200px;
  padding: 5px;
  background-color: black;
  color: white;
  letter-spacing: 7px;
  font-size: 40px;
  font-family: "Teko", sans-serif;
  border-radius: 10px;
  border-color: black;
  cursor: pointer;
}

button:focus {
  outline: 0;
}
</style>