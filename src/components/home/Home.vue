<template>
  <div class="home">
    <div class="_container">
      <!-- swiper -->
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
      <!-- publicity-warp -->
      <div class="publicity-wrap">
        <div class="container">
          <el-row>
            <el-col :span="6">
              <div class="publicity-item">
                <div class="title">封装APP</div>
                <div class="blue-line">——</div>
                <p>自助式操作，功能齐全，<br>1分钟，网站快速变成APP</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="publicity-item">
                <div class="title">封装APP</div>
                <div class="blue-line">——</div>
                <p>自助式操作，功能齐全，<br>1分钟，网站快速变成APP</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="publicity-item">
                <div class="title">封装APP</div>
                <div class="blue-line">——</div>
                <p>自助式操作，功能齐全，<br>1分钟，网站快速变成APP</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="publicity-item">
                <div class="title">封装APP</div>
                <div class="blue-line">——</div>
                <p>自助式操作，功能齐全，<br>1分钟，网站快速变成APP</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- certificate-signing -->
      <div class="container">
        <div class="certificate-signing index-common">
          <h1>iOS企业证书签名</h1>
          <h4>无需上架，免越狱安装，不限制iOS设备，无限制安装</h4>
          <el-row>
            <el-col :span="8">
              <div class="certificate-signing-item">
                <img src="static/images//icon-1.jpg" class="img-responsive" alt="">
                <div class="title">自动化签名，快速高效</div>
                <div class="blue-line">——</div>
                <p>根据自身需要，购买套餐，<br>
                  上传所需签名的APP包，10分钟即可测试&amp;取包</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="certificate-signing-item">
                  <img src="static/images//icon-2.jpg" class="img-responsive" alt="">
                <div class="title">官方企业证书</div>
                <div class="blue-line">——</div>
                <p>专业技术开发团队，拥有国内外<br>
                  官方企业签证书，分类签名，保证<br>
                  APP的长久稳定</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="certificate-signing-item">
                  <img src="static/images//icon-3.jpg" class="img-responsive" alt="">
                <div class="title">独立专享证书服务</div>
                <div class="blue-line">——</div>
                <p>单张企业证书只签名一个APP<br>
                  专享使用，同时另外提供备用证书，<br>
                  双重保证</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- encapsulation-app -->
      <div class="encapsulation-app-warp">
        <div class="container">
          <div class="encapsulation-app index-common">
            <h1>网站封装APP</h1>
            <h4>只要一个网站地址，1分钟做好安卓和iOS APP ，提供免费测试链接</h4>
            <img src="static/images/img-1.png" alt="">
          </div>
        </div>
      </div>
      <!-- closed-beta-distribution -->
      <div class="container">
        <div class="closed-beta-distribution index-common">
          <h1>内测分发</h1>
          <h4>上传APP包后，提供短链接和下载二维码，方便用户推广下载 </h4>
          <el-row>
            <el-col :span="6">
              <div class="closed-beta-distribution-item">
                <div class="con">
                  <div class="top"></div>
                  <div class="content">
                    <img src="static/images//icon-4.png" class="img-responsive" alt="">
                    <h4>每天免费1000次</h4>
                    <p>
                      每个实名认证的用户，<br>
                      每天免费1000次
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="closed-beta-distribution-item">
                <div class="con">
                  <div class="top"></div>
                  <div class="content">
                    <img src="static/images//icon-5.png" class="img-responsive" alt="">
                    <h4>自动识别安卓和苹果</h4>
                    <p>
                      支持安卓和苹果合并应用<br>一码二用
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="closed-beta-distribution-item">
                <div class="con">
                  <div class="top"></div>
                  <div class="content">
                    <img src="static/images//icon-6.png" class="img-responsive" alt="">
                    <h4>一包多传</h4>
                    <p>
                      单个APP最大支持1.5G<br>高速CDN下载
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="closed-beta-distribution-item">
                <div class="con">
                  <div class="top"></div>
                  <div class="content">
                    <img src="static/images//icon-7.png" class="img-responsive" alt="">
                    <h4>精美的下载模板</h4>
                    <p>
                      提供多套不同主题的下载模板<br>
                      提高用户下载转化率
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
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
    ._container {
      max-width: 1920px;
      margin: auto;
    }
    .publicity-wrap {
      background-color: #f5f9fe;
      .publicity-item {
        padding: 35px 20px 30px;
        border-left: 1px solid #eee;
        .title {
          font-size: 18px;
          color: #333;
        }
        .blue-line {
          color: #157df1;
        }
        p {
          font-size: 14px;
          line-height: 24px;
          color: #848484;
        }
        &:hover {
          background: #fff;
          .title {
            color: #157df1;
          }
        }
      }
    }
    .index-common {
      text-align: center;
      padding: 90px 0;
      h1 {
        color: #348dee;
      }
      h4 {
        font-size: 17px;
        margin-top: 25px;
      }
    }
    .certificate-signing {
      h4 {
        margin-bottom: 70px;
      }
      .certificate-signing-item {
        .title {
          font-size: 18px;
          color: #333;
        }
        .blue-line {
          color: #157df1;
        }
        p {
          font-size: 14px;
          line-height: 24px;
          color: #848484;
        }
      }
    }
    .encapsulation-app-warp {
      background: url('/static/images/bg-1.jpg') no-repeat center;
      height: 875px;
      h1, h4 {
        color: #fff;
      }
      img {
        margin: 70px auto 0;
        max-width: 100%;
      }
    }
    .closed-beta-distribution {
      .closed-beta-distribution-item {
        border-top: none;
        padding: 0 20px;
        .con {
          border: 1px solid #eee;
          .top {
            height: 6px;
            margin-left: -1px;
          }
          .content {
            padding: 40px 0;
            img {
              height: 81;
              margin: auto;
            }
            h4 {
              margin-top: 30px;
            }
            p {
              margin-top: 25px;
              color: #666;
              font-size: 14px;
            }
          }
          &:hover {
            box-shadow: 0 5px 20px rgba(0,0,0,.1);
          }
        }
        &:nth-of-type(1) {
          .top {
            background: linear-gradient(to right, #5caafd , #57d4f8);
          }
        }
        &:nth-of-type(2) {
          .top {
            background: linear-gradient(to right, #507dfb , #5598fa);
          }
        }
        &:nth-of-type(3) {
          .top {
            background: linear-gradient(to right, #4483dd , #649efc);
          }
        }
        &:nth-of-type(3) {
          .top {
            background: linear-gradient(to right, #5958d9 , #8e1fe5);
          }
        }
      }
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
