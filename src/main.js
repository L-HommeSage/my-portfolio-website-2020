import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "particles.vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(Particles);

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')

