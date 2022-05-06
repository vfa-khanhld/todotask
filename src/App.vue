<template>
  <h1>Todotask Web</h1>
  <nav-comp />
  <router-view />
</template>

<script>
import NavComp from "./components/NavComp.vue";
export default {
  name: "App",

  components: { NavComp },
};
</script>

<style>
body {
  background-image: linear-gradient(
    to right,
    rgb(146, 250, 255),
    rgb(174, 255, 246)
  );
}

h1 {
  text-align: center;
  font-weight: 700;
}

* {
  text-align: center;
}
</style>
