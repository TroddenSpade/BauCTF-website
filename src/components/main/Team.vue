<template>
  <div class="main">
    <div class="team">
      <h1>OUR TEAM</h1>
      <div class="members">
        <div class="line" data-aos="fade-up" data-aos-duration="1000">
          <div class="profile">
            <img class="pic" src="../../assets/profile/sam.jpg" alt />
            <p class="name">Parsa Samadnejad</p>
            <p class="info">
              Leader
              <br />Full-Stack JS Developer
              <br />Challenge Designer
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/reza.jpg" alt />
            <p class="name">Reza Liaghat</p>
            <p class="info">
              Executive Director
              <br />Challenge Designer
              <br />Content Creator
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/mahdi.jpg" alt />
            <p class="name">Mahdi Mahmoodian</p>
            <p class="info">Executive Director</p>
          </div>
        </div>
        <div class="line" data-aos="fade-up" data-aos-duration="1000">
          <div class="profile">
            <img class="pic" src="../../assets/profile/parsa.jpg" alt />
            <p class="name">Parsa Mazaheri</p>
            <p class="info">
              Challenge Designer
              <br />Executive staff
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/rambod.jpg" alt />
            <p class="name">Rambod Azimi</p>
            <p class="info">
              Content Creator
              <br />
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/elahi.jpg" alt />
            <p class="name">Ali Elahi</p>
            <p class="info">
              Public Relations
              <br />
            </p>
          </div>
        </div>
        <div class="line" data-aos="fade-up" data-aos-duration="1000">
          <div class="profile">
            <img class="pic" src="../../assets/profile/mehran.jpg" alt />
            <p class="name">Mehran Ghajari</p>
            <p class="info">
              Executive staff
              <br />
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/kolagar.png" alt />
            <p class="name">M Reza Koagar</p>
            <p class="info">
              Executive staff
              <br />
            </p>
          </div>
          <div class="profile">
            <img class="pic" src="../../assets/profile/arman.jpg" alt />
            <p class="name">Arman Takestani</p>
            <p class="info">
              Executive staff
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact">
      <h1 class="part">CONTACT US</h1>
      <div class="part">
        <a target="_blank">
          <img class="logo" src="../../assets/gmail-logo.png" alt="gmail" />
        </a>
      </div>
      <div class="part">
        <a href="https://t.me/kntuctf" target="_blank">
          <img class="logo" src="../../assets/telegram_logo.png" alt="telegram" />
        </a>
      </div>
      <div class="part">
        <a href="https://www.instagram.com/kntuctf" target="_blank">
          <img class="logo" src="../../assets/instagram-logo.png" alt="github" />
        </a>
      </div>
      <div class="part">
        <a href="https://github.com/kntu-ctf" target="_blank">
          <img class="logo" src="../../assets/github-logo.png" alt="github" />
        </a>
      </div>
    </div>

    <div class="bottom">
      <p class="copy">Copyright © 2019 CTF kntu</p>
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
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.team {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  background-image: radial-gradient(rgb(255, 255, 160) 20%, transparent 0),
    radial-gradient(rgb(255, 255, 160) 20%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}

.team > h1 {
  font-size: 50px;
}

.line {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.profile {
  justify-content: center;
  align-items: center;
  font-family: "Teko", sans-serif;
  margin: 2vh;
}

.profile:hover .pic {
  filter: grayscale(0%);
  transition: filter 1s;
}

.profile:hover .name {
  background-color: yellow;
  transition: background-color 1s;
}

.pic {
  height: 23vh;
  border-radius: 20vh;
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
  margin-top: 0;
  margin-bottom: 10px;
}

.info {
  font-size: 2vh;
  display: flex;
  justify-content: center;
  color: grey;
  margin: 0;
  min-height: 9vh;
}

.contact {
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5vw;
  background-color: yellow;
}

.bottom {
  height: 5vh;
  width: 100%;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
}

.copy {
  font-family: "Teko", sans-serif;
}

.part {
  width: 20%;
  display: flex;
  justify-content: center;
}

.logo {
  max-width: 5vw;
  max-height: 5vh;
  transition: transform 0.5s;
}

.logo:hover {
  transform: scale(1.2);
}

h1 {
  font-family: "Anton", sans-serif;
}
</style>