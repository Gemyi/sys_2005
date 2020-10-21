import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入全局css和element-rest
import './assets/css/global.css'
import '@/assets/css/el-reset.css'
//引入iconfont
import './assets/iconFonts/iconfont.css'
// 第一种方法
//全局配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
