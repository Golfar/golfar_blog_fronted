<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const search = () => {
  console.log(searchInput.value)
}
const searchInput = ref('')
const isLogin = ref(true)
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
)
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="HeadComponentWithoutHover">
            <img
              style="width: 50px"
              src="./assets/image/logo.jpg"
              alt="GolfarBlog logo"
            />
            <span style="font-size: 20px; margin-left: 10px; font-weight: bold"
              >我的博客</span
            >
          </div>
          <el-menu-item index="0">主页</el-menu-item>
          <el-menu-item index="1">帖子</el-menu-item>
          <el-menu-item index="2">碎碎念</el-menu-item>
          <el-sub-menu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-sub-menu index="3-4">
              <template #title>item four</template>
              <el-menu-item index="3-4-1">item one</el-menu-item>
              <el-menu-item index="3-4-2">item two</el-menu-item>
              <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <div class="HeadComponentWithoutHover">
            <el-input
              v-model="searchInput"
              style="width: 400px; height: 70%"
              placeholder="请输入搜索的内容"
            >
              <template #append>
                <el-button :icon="Search" @click="search" />
              </template>
            </el-input>
          </div>
          <div v-if="!isLogin" @click="search" class="HeadComponent">
            <el-avatar :size="30" :src="circleUrl" />
            <span style="margin-left: 5px; font-size: 13px; color: #cdcdcd"
              >未登录</span
            >
          </div>
          <el-sub-menu index="4" v-if="isLogin" class="HeaderRight">
            <template #title
              ><el-avatar :size="30" :src="circleUrl" />
              <span style="margin-left: 5px; font-size: 13px; color: #cdcdcd"
                >username</span
              ></template
            >
            <el-menu-item index="4-1">个人中心</el-menu-item>
            <el-menu-item index="4-2">我的帖子</el-menu-item>
            <el-menu-item index="4-3">我的收藏</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main class="main">
        <RouterView />
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(4) {
  margin-right: auto;
}
.HeadComponent:hover {
  background-color: #f7f7f7;
}
.HeadComponent {
  display: flex;
  padding: 5px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
}
.HeadComponentWithoutHover {
  display: flex;
  padding: 5px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
}
</style>
