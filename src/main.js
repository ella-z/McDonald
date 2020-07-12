import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";
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

router.beforeEach((to,from,next)=>{
  if(to.name==='member'||to.name==='user'){
    if(window.sessionStorage.account){
      if(window.sessionStorage.identity==='administrator'){
        next('/index/user/administratorIndex');
      }else if(window.sessionStorage.identity==='client'){
        next('/index/user/client');
      }
    }else{
      next();
    }
  }else{
    next();
  }
})