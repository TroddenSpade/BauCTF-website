<template>
  <div class="container" v-if="!signedIn">
    <div class="title">
      <h2>Open Register</h2>
      <p>Open for all</p>
    </div>
    <input class="name" type="text" placeholder="Your Team's Name" v-model="user" />
    <div style="margin: 10px 0 10px 0;"></div>
    <input type="email" placeholder="E-Mail" v-model="email" />
    <div style="margin: 10px 0 10px 0;"></div>
    <input type="password" placeholder="Password" v-model="password" />
    <div style="margin: 10px 0 10px 0;"></div>
    <div style="margin: 10px 0 10px 0;"></div>
    <button class="submit" @click="submit">REGISTER</button>
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
import axios from "axios";

export default {
  data: function() {
    return {
      user: "",
      password: "",
      email: "",
      callback: () => {
        this.$router.push({
          path: "/Login"
        });
      }
    };
  },
  computed: mapState(["signedIn"]),
  methods: {
    register(data) {
      axios
        .post("http://kntuctf.ir/api/register.php", {
          username: data.user,
          password: data.password,
          open: 1,
          email: data.email.toLowerCase()
        })
        .then(res => {
          if (res.data) {
            data.callback();
          }
        })
        .catch(err => {
          if (err.response) return alert(err.response.data.error);
          return alert(err);
        });
    },
    submit() {
      if (this.user.length == 0 || this.password.length == 0) {
        return alert("invalid username or password");
      }
      if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          this.email.toLowerCase()
        )
      ) {
        return this.register(this);
      }
      return alert("invalid email");
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
  font-family: "Teko", sans-serif;
}

.title {
  text-align: center;
  padding: 20px;
}

.loggedin {
  letter-spacing: 10px;
  font-size: 40px;
  font-family: "Teko", sans-serif;
  text-shadow: 2px 0 black, 0 1px black, 2px 0 black, 0 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
}

h2 {
  font-size: 40px;
  letter-spacing: 10px;
  font-family: "Teko", sans-serif;
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
  margin-bottom: 0px;
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
  /* width: 200px; */
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