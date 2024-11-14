<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { loginUsingPost } from '@/api/userController'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { definedUser } from '@/stores/user'

const user = definedUser()
const router = useRouter()
const loginForm = reactive({
  userAccount: '',
  userPassword: '',
})

const login = async (loginForm) =>{
  try{
    const res = await loginUsingPost(loginForm);
    if(res.data){
      ElMessage({
        message: '登陆成功',
        type: 'success',
        plain: true,
      })
      // 保存用户状态
      user.setUser(res.data)
      router.push('/home')
    }
  } catch (error){
    ElMessage({
      message: error.message,
      type: 'error',
      plain: true,
    })
  }

}



</script>

<template>
  <div class="box">
    <div class="content">
      <el-col :span="14" />
      <el-col :span="10">
        <div class="login-wrapper">
          <h1>登录</h1>
          <div class="login-form">
            <el-form
              :model="loginForm"
              label-width="auto"
            >
              <el-form-item label="账号" prop="userAccount">
                <el-input v-model="loginForm.userAccount" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="密码" prop="userPassword">
                <el-input v-model="loginForm.userPassword" type="password" autocomplete="off" />
              </el-form-item>
              <el-button type="primary" @click="login(loginForm)">
                登录
              </el-button>
            </el-form>
          </div>
          <span>没有帐号？<RouterLink to="/register">去注册</RouterLink></span>
        </div>
      </el-col>
    </div>
  </div>
</template>

<style scoped>












</style>
