import axios from 'axios';

import router from '../router'
import ElementUI from 'element-ui'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http://www.chst.vip"

//允许请求携带认证
axios.defaults.withCredentials = true;


// 创建请求拦截器，可以给每个请求都携带上想要传递的内容

axios.interceptors.request.use(config => {
    //登入和注册是不需要携带token的    ??????
    //登录和验证码需要携带token
    console.log(config);
    if (config.url == "/users/login") {
        return config;
    } else {
        let token = localStorage.getItem('qf-token')
        //config的值是每个请求对象
        config.headers['authorization'] = token;
        //放行
        return config;
    }
})

//响应拦截

axios.interceptors.response.use(config => {
    let { data } = config;
    if(data.code == "1004" || data.code == "10022"){
        //在当前的后台api中1004代表token校验失败，提示错误，并且让页面跳转到登录页面
        //10022表示session到期失效

        // alert("登录信息失效，请重新登录");
        // console.log("router")
        // console.log(ElementUI);

        ElementUI.Message.error("登入信息失效,请重新登入")
        router.push("/")

    }
    return config;
})

axios.create({
    //请求时间
    timeout: 4000
})

export default axios