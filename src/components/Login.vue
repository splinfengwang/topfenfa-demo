<template>
    <div class="login-common">
        <div class="tit">账号登录</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-loginForm">
            <el-form-item prop="email">
                <el-input v-model="loginForm.email" placeholder="请输入手机号">
                  <i slot="prefix" class="tff tff-phone"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入密码">
                  <i slot="prefix" class="tff tff-password"></i>
                </el-input>
            </el-form-item>
        </el-form>
        <el-checkbox v-model="checked">记住我</el-checkbox>
        <div class="submit">
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </div>
        <div class="operations">
          <span @click="toRegister">免费注册</span>
          <span @click="toRestpsd">忘记密码</span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'login',
  computed: {
    ...mapGetters([])
  },
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        // TODO: 字段校验
        email: { required: true, message: '请输入邮箱', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      },
      checked: true
    }
  },
  methods: {
    ...mapActions(['login']),
    toRegister () {
      this.$router.push({
        name: 'register'
      })
    },
    toRestpsd () {
      this.$router.push({
        name: 'restpsd'
      })
    },
    handleSubmit () {
      console.log(this.$store)
      this.$store.dispatch('login', this.loginForm)
        .then(() => {
          this.$router.push({
            name: 'home'
          })
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
