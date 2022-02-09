import Vue from "vue";
import Router from "vue-router";
import IndexPage from "@/views/Index";
import CheckoutPage from "@/views/Checkout";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      title: "Home",
      component: IndexPage
    },
    {
      path: "/checkout",
      name: "Checkout",
      title: "Checkout",
      component: CheckoutPage
    }
  ]
});
