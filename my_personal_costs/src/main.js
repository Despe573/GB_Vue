import Vue from 'vue';
import App from './App.vue';

import store from './store/index.js';
import router from './router/index.js';
import modale from './plugins/modalWindow/index.js';

Vue.config.productionTip = false
Vue.use(modale);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')