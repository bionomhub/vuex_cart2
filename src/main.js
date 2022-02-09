import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import storeState from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store(storeState);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
