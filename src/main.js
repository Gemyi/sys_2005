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

//路由前置钩子(导航守卫)
router.beforeEach((to, from, next) => {
  //用户登入之后,localstorage中有token
  let token = localStorage.getItem('qf-token');
  // console.log(to);
  if (token) {
    //如果是注册页面或者是登入页面,直接放行;
    next()
  } else { //没token
    if (to.path === "/login") {
      next()
    } else { //访问的不是登入页,就要跳转到登入页
      next({ path: "/login" })
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
