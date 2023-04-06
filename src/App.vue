<template>
  <NavBar />
  <RouterView></RouterView>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import "./index.css";
export default { components: { NavBar } };
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  padding: 20px;
}
</style>
