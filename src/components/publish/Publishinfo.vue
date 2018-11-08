<template>
  <div class="container release-content">
    <div class="release-header">
      <div class="route">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ name: 'publish' }" @click.native="changeHeightLight">发布应用</el-breadcrumb-item>
          <el-breadcrumb-item>应用列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="how-many">
        <span class="text">今日免费剩余下载次数
          <span class="num">5</span>
          <el-tooltip effect="light" placement="top">
            <div slot="content">1. 账号下所有应用共用此剩余下载次数 <br> 2. 每天免费1000次下载，凌晨0点重置数据</div>
            <sup type="sup" class="tff tff-prompt"></sup>
          </el-tooltip>
        </span>
        <span class="text">付费剩余下载次数
          <span class="num">5</span>
          <el-tooltip effect="light" placement="top">
            <div slot="content">1. 购买的下载次数包没有时间限制，用完为止<br>2. 购买的下载次数包为总的下载次数，不会每日重置</div>
            <sup type="sup" class="tff tff-prompt"></sup>
          </el-tooltip>
        </span>
        <el-button style="margin: 6px 0 0 20px;height: 32px;vertical-align: super;" type="warning" size="small">购 买</el-button>
      </div>
    </div>
    <el-row>
      <el-col :span="4">
        <div class="menu">
          <el-menu :default-active="defaultActive" @select="selectMenu" active-text-color="#157df1">
            <el-menu-item index="upload">
              <i slot="title" class="tff tff-up-load"></i>
              <span slot="title">上传应用</span>
            </el-menu-item>
            <el-menu-item index="applist">
              <i slot="title" class="tff tff-viewlist"></i>
              <span slot="title">应用列表</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultActive: 'upload'
    }
  },
  methods: {
    selectMenu (index) {
      this.$router.push({
        name: index
      })
    },
    changeHeightLight () {
      this.defaultActive = 'upload'
    }
  }
}
</script>
<style lang="scss" scoped>
  .release-content {
    padding: 20px 0 50px;
    .release-header {
      display: flex;
      justify-content: space-between;
      .route {
        margin-top: 16px;
      }
      .how-many {
        display: flex;
        justify-content: flex-end;
        .text {
          display: inline-block;
          padding: 5px 20px;
          border-right: 1px solid #ddd;
          font-size: 10px;
          color: #999999;
          .num {
            font-size: 24px;
            color: #333;
            margin: 0 10px;
          }
          .tff-prompt {
            color: #feac21;
          }
        }
      }
      margin-bottom: 20px;
    }
    .menu {
      height: 600px;
      background: #fff;
      .el-menu {
        border: none;
        i {
          margin-right: 5px;
          color: #157df1;
        }
        .el-subment_title {
          .ttf-viewlist {
            margin: 0 9px 0 4px;
          }
        }
      }
    }
    .content {
      background: #fff;
      margin-left: 20px;
      min-height: 600px;
    }
  }
</style>
