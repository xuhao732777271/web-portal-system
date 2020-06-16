import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用elem
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// rem适配
import '../node_modules/lib-flexible/flexible.js'; // rem适配
// 引用自定义基本样式
import './style/define.less';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
