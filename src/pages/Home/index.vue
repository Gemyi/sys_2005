<template>
  <div class="home">
   <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <h3 class="medium">
        <img :src="item" alt="">
      </h3>
    </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        imgs:[
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3403065019,3579833467&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=894633857,367968802&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2874038517,2849421051&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3720913580,350315824&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3513195417,4108046800&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976760874,1033889733&fm=26&gp=0.jpg"
        ]
      }
    }
  }
</script>
<style>
  /* html{
    background-color: #ccc;
    width: 100%;
    height: 100%;
    
  } */
  .el-carousel{
    width:500px;
  }
</style>