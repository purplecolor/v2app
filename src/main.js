import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/common/flex.css"
Vue.config.productionTip = false
import * as echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$echarts=echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
