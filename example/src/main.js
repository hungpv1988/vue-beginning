import Vue from 'vue';
import App from './App.vue';
import router from './components/router';

require('../node_modules/todomvc-app-css/index.css');
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 