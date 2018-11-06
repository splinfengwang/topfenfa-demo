<template>
    <div class="login-common">
        <div class="tit">账号注册</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入您的用户名">
                  <i slot="prefix" class="tff tff-account"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入手机号">
                  <i slot="prefix" class="tff tff-phone"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="name">
              <div style="display: flex;">
                <el-input v-model="ruleForm.name" placeholder="请输入短信验证码">
                  <i slot="prefix" class="tff tff-email"></i>
                </el-input>
                <el-button style="margin-left: 20px;" type="primary">获取验证码</el-button>
              </div>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入密码">
                  <i slot="prefix" class="tff tff-password"></i>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="submit">
          <el-button type="primary">注册</el-button>
        </div>
        <div class="operations">
          已有账号，<span @click="toLogin">点击登录</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'register',
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
    toLogin () {
      this.$router.push({
        name: 'login'
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
      text-align: center;
      font-size: 14px;
      color: #666666;
      margin-top: 20px;
      span {
        color: #58b7ff;
        cursor: pointer;
      }
    }
}
</style>
