import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Features from "../pages/Features.vue";
import Contact from "../pages/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
