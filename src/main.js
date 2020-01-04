import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo, {
  duration: 500,
  easing: [0.77, 0.0, 0.175, 1.0],
  offset: 0
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
