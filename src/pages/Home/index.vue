<template>
  <div class="home">
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="200">
        <h1 class="logo"></h1>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <template slot="title">
              <i class="iconfont icon-shouye"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span slot="title">管理首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">学员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student">
                <i class="iconfont icon-wode1"></i>学员项目管理
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="1">
            <template slot="title">
              <i class="iconfont icon-wode"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span slot="title">我的中心</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶栏布局 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="grid-content shouqi">
                <i class="iconfont icon-shouqi" @click="isCollapse=!isCollapse"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">学生管理系统</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-avatar
                  :size="40"
                  fit="fit"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3638704920,4019030403&fm=26&gp=0.jpg"
                ></el-avatar>
                <span>欢迎您:</span>
                <b class="nickname">{{userInfo.nickname}}</b>
                <span class="quit" @click="quit">退出</span>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- 主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import { mapState } from "vuex"
export default {
   computed:{
    ...mapState(['userInfo'])
  },
  data() {
    return {
      //控制menu是否收起
      isCollapse: false
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    quit(){
      //退出登录
      // 1.清除token和userInfo
      // 2.跳转到登录界面
      localStorage.removeItem("qf-token");
      localStorage.removeItem("qf-userInfo");

      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-header {
  background: linear-gradient(135deg, #4c67ff, #5635df);
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.29);
  padding-left: 0;
  background-color: #41b883;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-col {
  border-radius: 4px;
}
/* .el-row {
  /* margin-bottom: 20px; */
/* &:last-child {
    margin-bottom: 0;
  } */
*/ .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
/* 顶栏样式 */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.shouqi {
  padding-left: 10px;
  text-align: left;
}
.icon-shouqi {
  font-size: 30px;
  cursor: pointer;
  color: #fff;
}
.nickname {
  margin-left: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
}
.el-avatar {
  vertical-align: middle;
  margin-right: 10px;
}
.quit{
  cursor: pointer;
  color:hotpink;
}
.row-bg {
  /* padding: 10px 0;
  background-color: #4c67ff; */
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/* aside样式 */
.el-aside {
  background-color: #4c67ff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.logo {
  height: 60px;
  background: #4c67ff;
  background-image: url("../../assets/imgs/logo.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


