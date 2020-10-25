<template>
  <div>
    <h1>Welcome</h1>
    <button @click="send">发送请求</button>
    <button @click="abort">发送中断请求</button>
  </div>
</template>
<script>
import { getLoginLog } from "@/api";
export default {
  methods: {
    send() {
      getLoginLog(this) //this指当前组件的实例
        .then(res => {
          console.log(res);
        });
    },
    abort() {
      if (typeof this.cancel === "function") {
        this.cancel();
      }
      console.log(this.cancel);
    }
  }
};
</script>
