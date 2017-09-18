<template>
  <div class="template-container">
    <div class="bg-img"></div>
    <!-- header nav -->
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="my-logo">
        <img src="../../assets/logo/all-logo.jpg"> 一直脚的猫
      </div>
      <el-menu-item index="1">关于</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的项目</template>
        <el-menu-item index="idx" v-for="(item,idx) in projectList" :key="idx">{{item.name}}</el-menu-item>
        
      </el-submenu>
    </el-menu>
    <!-- header nav end -->

    <!-- main -->
    <div class="enter-main">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in projectList" :key="item">
          <img src="../../assets/img/myproject.png" alt="">
          <h3>{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>


<script>
import './style.css'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      projectList:[
       {
         name:"简历模板"
       },{
         name:"TodoList(微信)"
       },{
         name:"公共聊天室"
       } ,{
         name:"选择困难症助手(微信)"
       }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

