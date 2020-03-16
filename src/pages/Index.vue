<template>
  <div>
    <Logo />

    <Layout :stickable="false">
      <Info />
      <Team />
    </Layout>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Info from "~/components/Info.vue";
import Team from "~/components/Team.vue";

export default {
  metaInfo: {
    title: "KNTU CTF"
  },
  components: {
    Logo,
    Info,
    Team
  }
};
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
