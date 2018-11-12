<template>
  <div class="user">
    <div class="container user-content">
      <div class="user-header">
        <div class="route">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ name: 'user' }" @click.native="changeHeightLight">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的订单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-row>
        <el-col :span="4">
          <div class="menu">
            <el-menu :default-active="defaultActive" @select="selectMenu" active-text-color="#157df1">
              <el-menu-item index="myorder">
                <i slot="title" class="tff tff-order"></i>
                <span slot="title">我的订单</span>
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
      defaultActive: 'myorder'
    }
  },
  methods: {
    selectMenu (index, indexPath) {
      console.log(index, indexPath)
      this.$router.push({
        name: index
      })
    },
    changeHeightLight () {
      this.defaultActive = 'myorder'
    }
  }
}
</script>
<style lang="scss" scoped>
.user {
  background: #f5f7f9;
  .user-content {
    padding: 20px 0 50px;
    .user-header {
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
}
</style>
