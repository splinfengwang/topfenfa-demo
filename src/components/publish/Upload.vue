<template>
  <div class="drag-upload">
      <el-upload drag multiple class="content">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
  </div>
</template>
<script>
export default {
  name: 'upload'
}
</script>
<style lang="scss" scoped>
  .drag-upload {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    .content {
      text-align: center;
    }
  }
</style>
