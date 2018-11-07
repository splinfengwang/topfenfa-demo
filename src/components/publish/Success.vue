<template>
  <div class="upload-success">
    <img src="/static/images/default-icon.png" alt="">
    <div class="tit">Brevent，发布成功</div>
    <el-button type="primary" icon="tff tff-download">查看下载页</el-button>
    <div class="footer">
      <el-button plain icon="tff tff-up-load" @click="toUpload">继续上传</el-button>
      <el-button plain icon="tff tff-setting">APP设置</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'success',
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
  .upload-success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    img {
        width: 90px;
        height: 90px;
        border-radius: 15px;
        border: 1px solid #eee;
    }
    .tit {
        font-size: 20px;
        color: #333;
        margin-top: 15px;
    }
    button {
      font-size: 14px;
      margin-top: 15px;
      background: #157df1;
      border: 1px solid #157df1;
    }
    .footer {
      width: 550px;
      display: flex;
      justify-content: space-around;
      margin-top: 25px;
      button {
        background: #fff;
        color: #157df1;
      }
    }
  }
</style>
<style lang="scss">
.upload-success {
  button {
    i {
      margin-right: 5px;
    }
  }
}
</style>
