<template>
  <div class="app-setting">
    <div class="app-details">
      <div class="upload-icon">
        <img src="/static/images/default-icon.png" alt="">
      </div>
      <div class="infomations">
        <div class="app-name">
          有钱袋
          <i class="tff tff-android"></i>
          <!-- <i class="tff tff-ios"></i> -->
        </div>
        <div class="des">适用于安卓3.0系统以上的设备</div>
        <div class="des">版本&nbsp;1.1.0.0.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大小&nbsp;12.76M</div>
      </div>
      <div class="operations">
        <el-button plain @click="toUpload">上传新版本</el-button>
        <el-button plain>预览</el-button>
      </div>
    </div>
    <div class="app-set">
      <el-tabs type="border-card">
        <el-tab-pane label="基本设置">
          <div style="width:500px;margin-top: 15px;">
            <el-form label-position="right" label-width="80px">
              <el-form-item label="应用名称">
                <el-input placeholder="APP的名字"></el-input>
              </el-form-item>
              <el-form-item label="短链接">
                <el-input placeholder="例如：ddag">
                  <template slot="prepend">https://dibaqu.com/</template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="合并应用">
          <div class="merge-app" v-if="!isMerged">
            <div class="tips">请选择已有应用进行合并</div>
            <div class="apps">
              <div class="item" @click="isMerged = true">
                <img src="/static/images/default-icon.png" alt="">
                <p>立信宝</p>
              </div>
              <div class="item">
                <img src="/static/images/default-icon.png" alt="">
                <p>立信宝</p>
              </div>
              <div class="item">
                <img src="/static/images/default-icon.png" alt="">
                <p>立信宝</p>
              </div>
            </div>
          </div>
          <div class="merged" v-else>
            <div class="tips">已经与<span>立信宝</span>合并</div>
            <div class="apps">
              <div class="item">
                <img src="/static/images/default-icon.png" alt="">
                <p>立信宝</p>
              </div>
              <div class="item">
                <i class="tff tff-merge"></i>
              </div>
              <div class="item">
                <img src="/static/images/default-icon.png" alt="">
                <p>立信宝</p>
              </div>
            </div>
            <el-button round size="small" @click="isMerged = false">解除合并</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload',
  data () {
    return {
      labelPosition: 'left',
      isMerged: false
    }
  },
  methods: {
    toUpload () {
      this.$router.push({
        name: 'upload'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-setting {
    .app-details {
      padding: 30px;
      box-sizing: border-box;
      background: #fff;
      display: flex;
      width: 100%;
      .upload-icon {
        img {
          width: 80px;
          height: 80px;
          border-radius: 18px;
        }
      }
      .infomations {
        margin-left: 10px;
        flex: 1;
        .app-name {
          font-size: 24px;
          margin-bottom: 5px;
          color: #333;
        }
        .des {
          font-size: 12px;
          color: #999;
          line-height: 20px;
        }
      }
      .operations {
        button {
          color: #157df1;
          border: 1px solid #157df1;
        }
      }
    }
    .app-set {
      .el-tabs--border-card {
        box-shadow: none;
        min-height: 432px;
        margin-top: 20px;
        border-color: #eee;
      }
      .merge-app, .merged {
        width: 100%;
        height: 364px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .tips {
          color: #999;
          margin-bottom: 30px;
          span {
            font-weight: 900;
            margin: 0 5px;
          }
        }
        .apps {
          display: flex;
          .item {
            margin: 0 40px;
            cursor: pointer;
            img {
              width: 80px;
              height: 80px;
              border-radius: 18px;
              &:hover {
                box-shadow: 0 0 4px 3px #7ab4e0a3;
              }
            }
            p {
              text-align: center;
              color: #999;
              font-size: 12px;
            }
            i {
              font-size: 24px;
              margin-top: 25px;
              display: inline-block;
              color: #999;
            }
          }
        }
        button {
          margin-top: 20px;
          color: #157df1;
          border: 1px solid #157df1;
        }
      }
    }
  }
</style>
