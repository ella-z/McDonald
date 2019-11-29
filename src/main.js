import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import './cube-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount("#app");
