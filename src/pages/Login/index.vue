<template>
  <div class="login">
    <div class="left"></div>
    <div class="loginContainer">
      <h1 class="title">学生管理系统</h1>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" @keydown.native.enter="submitForm('loginForm')"  v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <video
      class="bg_video"
      muted
      src="../../assets/video/bg-video.mp4"
      autoplay
      loop
      preload="auto"
    ></video>
  </div>
</template>
<script>
//登入逻辑的实现

//1.收集用户输入的username&password传递给后端

//2.登入通过后，将后端返回的token存在本地,跳转到主页

//3.每次请求的说话，携带token到请求头authorization

//4.展示token校验正确的数据

//5.校验不通过，跳转到登入页面

import { login } from "@/api";
import {mapMutator, mapMutations} from "vuex"

export default {
 
  data() {
    //jsDoc  注释
    /**
     * @param {Object} rule 就是一个表单验证对象
     * @param {String} value 输入值
     * @param {Function} callback 校验通过不传参 不通过传参
     */
    var validateUsername = (rule, value, callback) => {
      //用户名正则，4到16位(字母，数字，下划线，减号)
      // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      // if (!uPattern.test(value)) {
      if (!value) {
        callback("4到16位(字母，数字，下划线，减号");
      } else {
        callback();
      }
      // console.log(rule);
      // console.log(value);
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        callback("请输入密码");
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        //validator:传入校验的函数，trigger：触发它的条件：失去焦点
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_USERINFO']),
    submitForm(formName) {
      // console.log(this.$refs[formName]);
      //获取注册在refs对象上面的组件的引用
      this.$refs[formName].validate(valid => {
        //代表本地校验通过
        if (valid) {
          //打开登入加载动画
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });

          let { username, password } = this.loginForm;
          //发送登入请求
          login(username, password)
            .then(res => {
              //服务器响应，关闭loading页面
              loading.close();

              if (res.data.state) {
                this.$message.success("登录成功！")
                //用户名和密码正确
                localStorage.setItem("qf-token", res.data.token);
                localStorage.setItem("qf-userInfo",JSON.stringify(res.data.userInfo));
                //更改vuex中state['userInfo']的值
                this.SET_USERINFO(res.data.userInfo)

                //跳转到主页
                this.$router.push("/");
              } else {
                //用户名或密码错误
                this.$message.error("用户名或密码错误");
              }
            })
            .catch(err => {
              console.log(err);
            });
          // window.location.replace("./pages/Home/index.vue");
        } else {
          // this.$message.error("请输入用户名或密码");
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/imgs/bg.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
}
.left {
  z-index: 9;
  width: 50%;
  height: 100%;
  background: url("../../assets/imgs/bg2.png") no-repeat;
  background-size: 50%;
  position: absolute;
  opacity: 0.7;
  background-position: 60% 65%;
}
.loginContainer {
  // position: relative;
  z-index: 9;
  width: 25rem;
  height: 30.47619048rem;
  border-radius: 11px;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 75%;
  background: rgba(83, 107, 182, 0.46);
  background: rgba(0, 0, 0, 0.2);
  .title {
    color: #fff;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .el-button.el-button--primary {
    width: 100%;
    background: linear-gradient(90deg, #1596fb, #002dff);
  }
}
.bg_video {
  display: block;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  // opacity: 0.5;
}
.el-form.demo-loginForm {
  position: absolute;
}
</style>
