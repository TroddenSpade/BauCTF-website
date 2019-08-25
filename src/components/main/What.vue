<template>
  <div class="main">
    <div class="half1">
      <h1>What is CTF ?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis. Vel facilisis volutpat est velit egestas dui id ornare. Bibendum arcu vitae elementum curabitur vitae nunc sed. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cursus vitae congue mauris rhoncus. Enim nulla aliquet porttitor lacus. Viverra nam libero justo laoreet sit amet cursus sit. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Parturient montes nascetur ridiculus mus mauris vitae. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Risus feugiat in ante metus dictum at. Ut enim blandit volutpat maecenas. Arcu dui vivamus arcu felis. Amet facilisis magna etiam tempor orci eu lobortis elementum. Habitant morbi tristique senectus et netus et malesuada fames. Varius quam quisque id diam vel quam elementum pulvinar etiam. Velit egestas dui id ornare arcu odio. Euismod in pellentesque massa placerat.</p>
    </div>
    <div class="half2"></div>
  </div>
</template>

<script>
export default {
  name: "what-is-ctf"
};
</script>

<style scoped>
.main {
  height: 90vh;
  width: 100vw;
  display: flex;
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
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
}

h1 {
  font-family: "Anton", sans-serif;
}
</style>