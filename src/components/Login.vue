<template>
  <section class="screen-bg" @click="close"></section>
  <div class="screen">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style scoped>
.screen-bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: gray;
  opacity: 0.5;
  top: 0;
  z-index: 1;
}
.screen {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  top: 0;
}
.box {
  position: absolute;
  z-index: 3;
  width: 700px;
  height: 700px;
  background: white;
  border-radius: 30px;
}
</style>
