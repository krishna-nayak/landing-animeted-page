<template>
  <header id="nav">
    <!-- <router-link class="logo" to="/">LOGO</router-link> -->
    <router-link to="/"
      ><img
        class="logo"
        src="../assets/logo.png"
        alt=""
        style="width: 50px; height: 50px"
      />
    </router-link>
    <router-link
      class="link"
      v-for="item in items"
      :key="item.to"
      :to="item.to"
    >
      {{ item.title }}
    </router-link>

    <button type="submit" class="start-btn">Start Now</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { to: "/about", title: "About" },
        { to: "/features", title: "Features" },
        { to: "/contact", title: "Contact" },
      ],
    };
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
  position: relative;
  color: #342047;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #342047;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .logo {
  margin-right: 80px;
}
#nav .link {
  margin: 20px;
}

#nav .start-btn {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translate(0, -50%);
  width: 150px;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid grey;
  font-weight: 600;
  background: transparent;
}
</style>
