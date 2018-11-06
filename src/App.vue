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
    <div class="app-footer">
      <div class="container">
        <el-row>
          <el-col :span="5">
            <h1>产品服务</h1>
            <p>—</p>
            <p>企业签名</p>
            <p>封装APP</p>
            <p>提取IPA</p>
            <p>托管分发</p>
          </el-col>
          <el-col :span="5">
            <h1>关于我们</h1>
            <p>—</p>
            <p>公司简介</p>
            <p>服务协议</p>
            <p>应用审核规范</p>
            <p>隐私政策</p>
          </el-col>
          <el-col :span="5">
            <h1>联系我们</h1>
            <p>—</p>
            <p>QQ：38612890</p>
            <p>邮箱：service@dibaqu.com</p>
            <p>地址：福州市鼓楼区碧玉花园连接体<br><span>4-5座连接体206-1室</span></p>
          </el-col>
          <el-col :span="5" style="display: flex;justify-content: space-around;">
            <a href="">
              <img src="static/images/label_lg_90030.png" alt="">
            </a>
            <a href="">
              <img src="static/images/bottom_large_img.png" alt="">
            </a>
          </el-col>
          <el-col :span="4">
            <div class="weixin">
              <img class="logo" src="static/images/logo-top.png" alt="">
              <img src="static/images/weixin.png" alt="">
              <p>&nbsp;&nbsp;&nbsp;微信扫描二维码</p>
            </div>
          </el-col>
        </el-row>
        <p class="copy-right">Copyright © 2018 福建喜佳宝网络科技有限公司 闽ICP备18002436号-2</p>
      </div>
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
  },
  mounted () {
    // console.log(this.$route, 'route')
    this.activeIndex = this.$route.name
  }
}
</script>

<style>
  html, body, p, h1, dl, dd {
    margin: 0;
    padding: 0;
  }
  a {
    outline: none;
    text-decoration: none;
    color: #848484;
    cursor: pointer;
  }
  .container {
    max-width: 1200px;
    margin: auto;
  }
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
</style>
<style lang="scss" scoped>
#app {
  .app-header {
    border-bottom: 1px solid #eee;
    .container {
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
  .app-footer {
    background-color: #2e3033;
    padding: 60px 0;
    .container {
      color: #fff;
      font-weight: 100;
      h1 {
        font-size: 18px;
        font-weight: 100;
      }
      p {
        font-size: 12px;
        margin-bottom: 10px;
        span {
          margin-left: 38px;
        }
      }
      a {
        display: inline-block;
        padding-top: 110px;
        width: 40%;
        img {
          width: 100%;
        }
      }
      .weixin {
        img {
          float: right;
          width: 110px;
          border-radius: 4px;
        }
        .logo {
          margin-bottom: 20px;
        }
        p {
          float: right;
          margin-top: 10px;
        }
      }
      .copy-right {
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
