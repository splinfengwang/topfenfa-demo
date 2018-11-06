<template>
    <div class="login-common">
        <div class="tit">找回密码</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入您的注册邮箱">
                  <i slot="prefix" class="tff tff-email"></i>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="submit">
          <el-button type="primary">发送邮件</el-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'restpsd',
  data () {
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        // TODO: 字段校验
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    toRegister () {
      this.$router.push({
        name: 'register'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-common {
    width: 500px;
    border-radius: 3px;
    border: 1px solid #eee;
    padding: 60px 55px;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    margin: 100px auto;
    box-sizing: border-box;
    .tit {
        font-size: 18px;
        color: #333;
        text-align: center;
        margin-bottom: 30px;
    }
    i {
      font-size: 16px;
    }
    .submit {
      button {
        width: 100%;
        margin-top: 20px;
      }
    }
    .operations {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 14px;
      color: #666666;
      span {
        cursor: pointer;
      }
    }
}
</style>
