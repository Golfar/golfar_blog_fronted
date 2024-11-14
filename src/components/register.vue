<script setup lang="ts">

import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { registerUsingPost } from '@/api/userController'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const registerForm = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
})

const register = async (registerForm) =>{
  try{
    const res = await registerUsingPost(registerForm);
    if(res.data){
      ElMessage({
        message: '注册成功',
        type: 'success',
        plain: true,
      })
      router.push('/login')
    }
  } catch(error){
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
        <div>
          <h1>注册</h1>
          <div class="register-form">
            <el-form
              :model="registerForm"
              label-width="auto"
              status-icon
              :rules="rules"
              ref="ruleFormRef"
            >
              <el-form-item label="账号" prop="userAccount">
                <el-input v-model="registerForm.userAccount" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="密码" prop="userPassword">
                <el-input v-model="registerForm.userPassword" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="确认密码" prop="checkedPassword">
                <el-input v-model="registerForm.checkPassword" type="password" autocomplete="off" />
              </el-form-item>
              <el-button type="primary" @click="register(registerForm)">
                注册
              </el-button>
            </el-form>
          </div>
          <span>已有账号？<RouterLink to="/login">去登录</RouterLink></span>
        </div>
      </el-col>
    </div>
  </div>
</template>

<style scoped>

</style>
