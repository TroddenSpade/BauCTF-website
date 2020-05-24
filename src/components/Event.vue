<template>
  <div class="events-container">
    <div
      :class="{ event: true, 'grey-event': event.disabled }"
      v-for="(event, index) in events"
      :key="index"
    >
      <div class="info">
        <h2>{{ event.name }}</h2>
        <h5>{{ event.type }} - {{ event.format }}</h5>
        <h4>{{ event.start }}</h4>
        <h4>{{ event.end }}</h4>
      </div>
      <div class="participate">
        <span class="checkmark" v-if="event.participated">
          <div class="checkmark_circle"></div>
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
        <button
          v-if="!event.participated"
          :class="{ button: !event.disabled, disabled: event.disabled }"
          @click="participate(index, event.id)"
        >
          Participate
        </button>
        <input
          v-if="!event.open && !event.disabled && !event.participated"
          type="password"
          class="code"
          name="code"
          placeholder="Entry Code"
          v-model="codes[index]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["signedIn", "events"]),
  data() {
    return {
      active: 0,
      codes: [],
    };
  },
  created() {
    this.$store.dispatch("events");
  },
  mounted() {},
  methods: {
    participate(i, id) {
      this.$store.dispatch("participate", {
        id: id,
        code: this.codes[i],
      });
    },
  },
};
</script>

<style scoped>
.events-container {
  width: 100%;
  min-height: 100%;
  background-color: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
}

.event {
  width: 450px;
  height: 250px;
  background-color: #111111;
  margin: 30px;
  border: solid 2px var(--second-color);
  font-family: "Tomorrow", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.grey-event {
  border: solid 2px grey;
}

.event h4 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.event h5 {
  margin-top: 3px;
  margin-bottom: 5px;
}

.event h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.info {
  width: 80%;
  margin-top: 20px;
}

.participate {
  width: 80%;
  margin: 20px;
}

.button {
  position: relative;
  background: none;
  color: var(--second-color);
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid var(--second-color);
  padding: 0.5em 1em;
  margin: 10px;
  font-size: 0.8em;
  cursor: pointer;
}

.button:hover {
  border: 0.2em solid white;
  color: white;
}

.button::before,
.disabled::before {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #222;
  height: 0.3em;
  right: 20%;
  top: -0.21em;
  transform: skewX(-45deg);
  -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.button::after,
.disabled::after {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #222;
  height: 0.3em;
  left: 20%;
  bottom: -0.25em;
  transform: skewX(45deg);
  -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.button:hover::before {
  right: 80%;
}
.button:hover::after {
  left: 80%;
}

.disabled {
  color: grey;
  border: 0.2em solid grey;
  transform: none;
  position: relative;
  background: none;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 10px;
  font-size: 0.8em;
}

.code {
  margin: 10px;
  padding-left: 5px;
  height: 25px;
  width: 150px;
  border: solid 3px var(--second-color);
  outline: 0;
  font: 400 14px system-ui;
}

.checkmark {
  display: inline-block;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  margin-left: 5px;
}

.checkmark_circle {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: var(--second-color);
  border-radius: 11px;
  left: 0;
  top: 0;
}

.checkmark_stem {
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: var(--background-dark);
  left: 11px;
  top: 6px;
}

.checkmark_kick {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: var(--background-dark);
  left: 8px;
  top: 12px;
}
</style>
