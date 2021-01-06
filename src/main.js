import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// fontawesomeの環境設定
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faAddressCard)
library.add(faChalkboardTeacher)
library.add(faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
