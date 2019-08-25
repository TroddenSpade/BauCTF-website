<template>
  <div class="main">
    <div class="team">
      <h1>OUR TEAM</h1>
      <div class="members">
        <div class="profile">
          <img class="pic" src="https://randomuser.me/api/portraits/men/86.jpg" alt />
          <p class="name">Parsa Samadnejad</p>
          <p class="info">
            Front-end Developer
            <br />
          </p>
        </div>
        <div class="profile">
          <img class="pic" src="https://randomuser.me/api/portraits/men/54.jpg" alt />
          <p class="name">Parsa Sam</p>
          <p class="info">
            Back-end Developer
            <br />
          </p>
        </div>
        <div class="profile">
          <img class="pic" src="https://randomuser.me/api/portraits/men/32.jpg" alt />
          <p class="name">Parsa Sam</p>
          <p class="info">
            Designer
            <br />
          </p>
        </div>
        <div class="profile">
          <img class="pic" src="https://randomuser.me/api/portraits/men/12.jpg" alt />
          <p class="name">Parsa Sam</p>
          <p class="info">
            CFO
            <br />
          </p>
        </div>
      </div>
    </div>

    <div class="contact">
      <h1 class="part">CONTACT US</h1>
      <a class="part">
        <img class="logo" src="../../assets/gmail-logo.png" alt="gmail" />
      </a>
      <a class="part">
        <img class="logo" src="../../assets/telegram_logo.png" alt="telegram" />
      </a>
      <a class="part">
        <img class="logo" src="../../assets/github_logo.png" alt="github" />
      </a>
    </div>

    <div class="bottom">
      <p class="copy">Copyright © 2019 Parsa Samadnejad</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "team"
};
</script>

<style scoped>
.main {
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.members {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.profile {
  justify-content: center;
  align-items: center;
  font-family: "Teko", sans-serif;
}

.profile:hover .pic {
  filter: grayscale(0%);
}

.profile:hover .name {
  background-color: yellow;
}

.pic {
  height: 30vh;
  border-radius: 30vh;
  border: solid;
  border-width: 3px;
  border-color: yellow;
  filter: grayscale(100%);
}

.name {
  font-size: 3vh;
  display: flex;
  justify-content: center;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: white;
}

.info {
  font-size: 2vh;
  display: flex;
  justify-content: center;
  color: grey;
}

.contact {
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.bottom {
  height: 5vh;
  width: 100vw;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
}

.copy {
  font-family: "Teko", sans-serif;
}

.part {
  width: 25%;
  display: flex;
  justify-content: center;
}

.logo {
  height: 5vh;
  transition: transform 0.5s;
}

.logo:hover {
  transform: scale(1.2);
}

h1 {
  font-family: "Anton", sans-serif;
}
</style>