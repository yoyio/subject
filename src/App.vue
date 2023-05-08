<template>
  <navbar />
  <router-view />
</template>

<script>
import navbar from './components/NavbarView.vue'
export default {
  components: {
    navbar
  }
}
</script>

<style >
/* 載入字型 */
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap&subset=chinese-traditional");

html,
body {
  width: 100%;
  height: 100%;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Lato", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
}
</style>
