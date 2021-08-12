<template>
  <AppHeader @open-login-modal="isLogin = true" />
  <Login v-if="isLogin" @close-login="isLogin = false" />

  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Login from "./components/Login.vue";
export default {
  components: {
    AppHeader,
    Login,
  },
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  max-width: 1440px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
