<template>
  <div id="app">
    <div class="app-header">
      <div class="container">
        <div class="left">
          <img src="static/images/logo-top.png" alt="">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#157df1">
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="release">发布</el-menu-item>
            <el-menu-item index="price">价格</el-menu-item>
          </el-menu>
        </div>
        <div class="right">
          <el-button size="small">登 录</el-button>
          <el-button type="primary" size="small">注 册</el-button>
        </div>
      </div>
    </div>
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (index) {
      console.log(index)
      this.$router.push({
        name: index
      })
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  a {
    outline: none;
    text-decoration: none;
    color: #848484;
    cursor: pointer;
  }
</style>
<style lang="scss" scoped>
#app {
  .app-header {
      border-bottom: 1px solid #eee;
      .container {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        .left {
          display: flex;
          flex: 1;
          img {
            height: 60px;
          }
          .el-menu.el-menu--horizontal {
            border: 0;
            padding-left: 40px;
          }
          .el-menu--horizontal>.el-menu-item {
            height: 45px;
            line-height: 55px;
            padding: 0 10px;
            margin: 0 10px;
          }
        }
        .right {
          padding-top: 15px;
        }
      }
    }
}
</style>
