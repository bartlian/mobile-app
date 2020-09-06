import Vue from 'vue';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/store';
import { toast } from '@/components/Toast';

import '@/assets/css/base.css';
import '@/assets/icons/iconfont.css';

Vue.config.productionTip = false;

Vue.prototype.$toast = toast;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
