/* eslint-disable */
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
    <div
      :class="{ 'links-active': navToggle, 'display-none': !navToggle }"
      class="links"
    >
      <router-link
        class="link"
        v-for="item in items"
        :key="item.to"
        :to="item.to"
      >
        {{ item.title }}
      </router-link>
    </div>

    <button type="submit" class="start-btn" @click="$emit('open-login-modal')">
      Check your position
    </button>
    <button @click="navMenu" class="nav-toggle-btn">
      <i class="fas fa-bars fa-2x"></i>
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navToggle: false,
      items: [
        { to: "/about", title: "About" },
        { to: "/features", title: "Features" },
        { to: "/contact", title: "Contact" },
      ],
    };
  },
  methods: {
    navMenu() {
      this.navToggle = !this.navToggle;
    },
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
#nav .links {
  display: flex;
  align-items: center;
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
  padding: 15px 30px;
  border-radius: 10px;
  border: 1px solid black;
  font-weight: 600;
  background: transparent;
  transition: all 0.2s ease;
}
#nav .start-btn:hover {
  border: 2px solid white;
  color: white;
  background: linear-gradient(to right, #e48f10, #efb45a, #eec07a);
}
#nav .start-btn:active {
  opacity: 0.7;
}
.nav-toggle-btn {
  display: none;
}
/* moblie */

@media (max-width: 650px) {
  .nav-toggle-btn {
    border: none;
    display: initial;
    background: white;
    margin-left: auto;
    align-self: flex-start;
  }

  .links-active {
    align-items: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    display: block;
    margin: 0 auto;
    flex-direction: column;
  }
  #nav .display-none {
    display: none;
  }
  #nav .logo {
    margin: 0;
  }
  .start-btn {
    display: none;
  }
}

/* 650px */
</style>
