<template>
  <div class="release-app-wrap">
    <div class="container release-content">
      <div class="release-header">
        <div class="route">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ name: 'publish' }" @click.native="changeHeightLight">发布应用</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'applist' }">我的应用</el-breadcrumb-item>
            <el-breadcrumb-item>小新应用</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-row>
        <el-col :span="4">
          <div class="menu">
            <el-menu :default-active="defaultActive" @select="selectMenu" active-text-color="#157df1">
              <!-- <el-menu-item index="appinfo">
                <i slot="title" class="tff tff-up-load"></i>
                <span slot="title">应用详情</span>
              </el-menu-item> -->
              <el-menu-item index="appsetting">
                <i slot="title" class="tff tff-viewlist"></i>
                <span slot="title">应用设置</span>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultActive: 'appsetting'
    }
  },
  methods: {
    selectMenu (index) {
      this.$router.push({
        name: index
      })
    },
    changeHeightLight () {
      this.defaultActive = 'info'
    }
  }
}
</script>
<style lang="scss" scoped>
  .release-app-wrap {
    background: #f5f7f9;
    .release-content {
      padding: 20px 0 50px;
      .release-header {
        display: flex;
        justify-content: space-between;
        .route {
          padding-top: 16px;
          height: 43px;
          box-sizing: border-box;
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
        // background: #fff;
        margin-left: 20px;
        min-height: 600px;
      }
    }
  }
</style>
