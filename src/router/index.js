import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import Home from '@/pages/Home'

Vue.use(VueRouter);
import allRoutes from './allRoutes'
const routes = [
  {
    path: "/login",
    // name: "login",
    component: Login
  },
  {
    path:'*',
    component:()=>import(/*webpackChunkName:'page404' */ '../pages/Page404')
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
