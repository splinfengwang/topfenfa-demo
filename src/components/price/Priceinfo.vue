<template>
  <div class="price">
    <div class="price-banner"></div>
    <div class="container">
      <div class="buy-number">
        <h1>小包分发次数
          <span>（300M以下）</span>
        </h1>
        <p class="p1">实名认证用户每天可以免费下载1000次，如超过免费次数，可以购买分发下载次数</p>
        <el-row>
          <el-col :span="8">
            <div class="con">
              <div class="c-top">
                <div class="num">1,000<span>次</span></div>
                <p>累计下载次数</p>
              </div>
            <div class="bottom-con">
              <dl>
              <dd><span class="tff tff-gou"></span>默认模板使用</dd>
              <dd><span class="tff tff-gou"></span>APP可以保存90天
                <el-tooltip class="item" effect="light" content="APP上传后，可以在第八区平台保存90天" placement="top">
                  <span class="tff tff-prompt"></span>
                </el-tooltip>
              </dd>
              <dd><span class="tff tff-gou"></span>下载次数不受时间限制</dd>
              </dl>
              <div class="b-price"><span>20</span>元</div>
            </div>
            <div class="bottom">
              <el-button size="medium" type="primary" class="buy">购买</el-button>
            </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="con">
              <i class="tff tff-recommend"></i>
              <div class="c-top">
                <div class="num">10,000<span>次</span></div>
                <p>累计下载次数</p>
              </div>
            <div class="bottom-con">
              <dl>
                <dd><span class="tff tff-gou"></span>CDN加速下载</dd>
                <dd><span class="tff tff-gou"></span>下载页无广告</dd>
                <dd><span class="tff tff-gou"></span>下载次数不受时间限制</dd>
                <dd><span class="tff tff-gou"></span>APP可以保存365天
                  <el-tooltip class="item" effect="light" content="APP上传后，可以在第八区平台保存90天" placement="top">
                    <span class="tff tff-prompt"></span>
                  </el-tooltip>
                </dd>
                <dd><span class="tff tff-gou"></span>下载页专享模板</dd>
              </dl>
              <div class="b-price"><span>180</span>元</div>
            </div>
            <div class="bottom">
              <el-button size="medium" type="primary" class="buy">购买</el-button>
            </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="con">
              <div class="c-top">
                <div class="num">100,000<span>次</span></div>
                <p>累计下载次数</p>
              </div>
            <div class="bottom-con">
              <dl>
                <dd><span class="tff tff-gou"></span>CDN加速下载</dd>
                <dd><span class="tff tff-gou"></span>下载页无广告</dd>
                <dd><span class="tff tff-gou"></span>下载次数不受时间限制</dd>
                <dd><span class="tff tff-gou"></span>APP可以保存365天
                  <el-tooltip class="item" effect="light" content="APP上传后，可以在第八区平台保存90天" placement="top">
                    <span class="tff tff-prompt"></span>
                  </el-tooltip>
                </dd>
                <dd><span class="tff tff-gou"></span>下载页专享模板</dd>
              </dl>
              <div class="b-price"><span>1600</span>元</div>
            </div>
            <div class="bottom">
              <el-button size="medium" type="primary" class="buy">购买</el-button>
            </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="price-common">
        <h1>常见问题</h1>
        <div class="help">
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">支持安卓和苹果同一个二维码下载吗？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">
              支持，上传好IPA和APK包后，在【我的应用】中，选择要合并的APP，点击合并应用即可。
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right"> 超过每天下载次数，APP还能下载吗？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">不能下载。请根据自己推广的需要，购买次数包，购买后，次数立即到账，即可下载。</span>
            </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">如何查看APP下载次数？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">登录dibaqu.com，点击右上角账号，选择【我的服务】，便能查看剩余下载次数。</span>
            </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">有时候iOS APP不能下载，是下载链接的问题吗？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">iOS APP需要做企业签名，才可以安装，如果没有做过企业签名or企业签名失效，则iOS APP会下载失败。安卓APP则不需要做企业签名。</span>
            </dd>
          </dl>
          <dl>
          <dt class="clearfix">
          <span class="left">Q ：</span>
          <span class="right">超过300M以上的包，有每天免费次数吗？</span>
          </dt>
          <dd class="clearfix">
          <span class="left">A ：</span>
          <span class="right">没有。必须购买大包分发次数，才可以进行分发下载。</span>
          </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">大包是否也有大小限制？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">有限制，大于300M，小于1.5G，都可以上传。超过1.5G，则不能上传。</span>
            </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">大包和小包，购买的下载次数是否可以共享？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">不能共享，各自分开使用独立的次数。</span>
            </dd>
          </dl>
          <dl>
            <dt class="clearfix">
              <span class="left">Q ：</span>
              <span class="right">如何查看大包剩余的下载次数？</span>
            </dt>
            <dd class="clearfix">
              <span class="left">A ：</span>
              <span class="right">登录网站后，点击发布，在左侧栏，点“大包上传”，页面右上角，即可查看大包剩余下载次数。</span>
            </dd>
          </dl>
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
  .price {
    .price-banner {
      background: url('/static/images/price-1.jpg') no-repeat center;
      height: 170px;
    }
    .container {
      .buy-number{
        padding: 80px 40px;
        h1 {
          color: #157df1;
          text-align: center;
          margin-bottom: 20px;
          span {
            color: #fd641d;
            font-size: 18px;
          }
        }
        .p1 {
          color: #666;
          text-align: center;
          font-size: 16px;
          margin-bottom: 40px;
        }
        .con {
          margin: 0 20px;
          border: 1px solid #eee;
          padding-bottom: 40px;
          position: relative;
          i {
              position: absolute;
              font-size: 84px;
              right: -1px;
              color: #f11c1c;
              top: -4px;
          }
          &:hover {
              box-shadow: 0 5px 10px rgba(21,125,241,.2);
          }
          .c-top {
              text-align: center;
              padding: 30px 0 35px;
              position: relative;
              .num {
                color: #333;
                font-size: 50px;
                span {
                  font-size: 16px;
                }
              }
              p {
                color: #666;
                font-size: 14px;
              }
          }
          .bottom-con {
            padding: 0 30px;
            dl {
                border-top: 1px solid #eee;
                text-align: left;
                color: #666;
                padding-top: 20px;
                height: 195px;
                dd {
                  margin: 10px 0;
                  font-size: 14px;
                  .tff-gou {
                      margin-right: 10px;
                      font-size: 14px;
                      color: #157df1;
                  }
                  .tff-prompt {
                    margin-left: 10px;
                    font-size: 16px;
                    color: rgb(254, 172, 33);
                  }
                }
            }
            .b-price {
                font-size: 16px;
                color: #157df1;
                text-align: center;
                margin-bottom: 25px;
                span {
                  font-size: 40px;
                }
            }
          }
          .bottom {
            text-align: center;
            .buy {
              height: 40px;
              background: #157df1;
              width: 120px;
              border: 1px solid #157df1;
              cursor: pointer;
            }
          }
        }
      }
      .price-common {
        font-size: 14px;
        h1 {
            color: #157df1;
            text-align: center;
            margin-bottom: 20px;
        }
        .help {
            text-align: left;
            padding: 40px 0;
            dl {
                margin-bottom: 15px;
                color: #333;
            }
            dt {
                line-height: 30px;
                font-weight: 600;
            }
            dd {
                line-height: 30px;
            }
        }
      }
    }
  }
</style>
