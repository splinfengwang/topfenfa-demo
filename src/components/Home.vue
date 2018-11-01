<template>
  <div class="home">
    <div class="container">
      <el-carousel height="430px">
        <el-carousel-item>
          <a class="a-el-carousel" href="" style="background: url('static/images/index-banner-3.jpg') no-repeat center">
          <div class="text-left banner-con pl65">
            <h1 class="mt110">内测分发<span class="ml20">高速CDN</span> <span class="ml10">支持超大文件下载</span></h1>
            <h2 class="mt25">
            只需两步，将内测的APP上传至第八区，生成下载链接和二维码，即可安装<br>
            单个APP最大支持<span class="font22 bold">1.5G</span><span class="ml50">每天免费<span class="font22 bold">1000</span>次下载</span>
            </h2>
            <button href="#" class="ms-btn mt30">立即上传</button>
          </div>
          </a>
        </el-carousel-item>
        <el-carousel-item>
          <a class="a-el-carousel" href="" style="background: url('static/images/index-banner-2.jpg') no-repeat center">
            <div class="text-center banner-con">
              <h1 class="mt110">iOS企业证书签名</h1>
              <h2 class="mt25">
              第八区为您提供iOS企业证书签名服务，让您的APP免提交App Store商店，也可<br>
              免越狱下载安装，全自动签名，让您的APP快速与用户见面
              </h2>
              <button href="#" class="ms-btn mt30">立即签名</button>
            </div>
          </a>
        </el-carousel-item>
        <el-carousel-item>
          <a class="a-el-carousel" href="" style="background: url('static/images/index-banner-1.jpg') no-repeat center">
            <div class="text-center banner-con">
              <h1 class="mt70">在线封装APP</h1>
              <h2 class="mt25">
              只需一个手机网站，无需编程，支持安卓和苹果系统，丰富的功能插件，<br>
              让制作APP变得更为简单，一键生成
              </h2>
              <button href="#" class="ms-btn mt30">立即封装</button>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    .container {
      max-width: 1920px;
      margin: auto;
    }
  }
  .a-el-carousel {
    font-size: 0;
    display: block;
    height: 430px;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
    ::before {
      content: '';
      display: inline-block;
    }
    .text-left {
      text-align: left;
      max-width: 1200px;
      margin: auto;
      h1 {
        font-size: 32px;
        font-weight: 600;
      }
      h2 {
        font-size: 18px;
        line-height: 36px;
        font-weight: 300;
      }
      .ms-btn {
        font-size: 14px;
        font-weight: 100px;
        display: inline-block;
        padding: 6px 12px;
        border-radius: 3px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        background: none;
        border: 1px solid transparent;
        border-color: #fff;
        width: 110px;
        color: #fff;
      }
    }
    .text-center {
      text-align: center;
      h1 {
        font-size: 32px;
        font-weight: 600;
      }
      h2 {
        font-size: 18px;
        line-height: 36px;
        font-weight: 300;
      }
      .ms-btn {
        font-size: 14px;
        font-weight: 100px;
        display: inline-block;
        padding: 6px 12px;
        border-radius: 3px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        background: none;
        border: 1px solid transparent;
        border-color: #fff;
        width: 110px;
        color: #fff;
      }
    }
    .mt110 {
      margin-top: 110px;
    }
    .mt25 {
      margin-top: 25px;
    }
    .mt70 {
      margin-top: 70px;
    }
  }
</style>
