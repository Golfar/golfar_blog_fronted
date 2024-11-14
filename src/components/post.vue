<script setup lang="ts">

import { onMounted, reactive, ref } from 'vue'
import { getPostPageUsingPost } from '@/api/postController'
import { definedUser } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = definedUser()
const postQueryPageRequest = reactive({
  isMyPost: false,
  pageNum: 1,
  pageSize: 20
})

let posts = ref({
  total: 20,
  records: [
    {
      title: "学java",
      userName: "hahaha",
      tags: ["java", "typescript"],
      viewCount: 0,
      thumbCount: 0,
    },
    {
      title: "学java",
      userName: "hahaha",
      tags: ["java", "typescript"],

    },
    {
      title: "学java",
      userName: "hahaha",
      tags: ["java", "typescript"],

    },
    {
      title: "学java",
      userName: "hahaha",
      tags: ["java", "typescript"],

    }
  ]
})



const handleCurrentChange = (currentPage) => {
  postQueryPageRequest.pageNum = currentPage
  getPostList()
}

const getPostList = async () => {
  try{
    const res = await getPostPageUsingPost(postQueryPageRequest);
    if(res.data){
      posts.value.total = res.data.total
      posts.value.records = res.data.records
    }
  }catch(error){
    console.log(error)
  }
}

const getPostDetail = (postId: number, userId: number) => {
  const isMyPost = userId === user.id
  router.push({ name: "essay" ,query:{ postId, isMyPost } })
}

onMounted(()=>{
  getPostList()
})
</script>

<template>
  <div class="container">
    <div class="post-container">
      <el-card style="width: 800px; margin-top: 15px" shadow="hover" class="post" v-for="post in posts.records" :key="post.id" @click="getPostDetail(post.id, post.userId)">
        <template #header>
          <div class="card-header">
            <el-row>
              <el-col :span="16"><span style="font-size: 20px">{{ post.title }}</span></el-col>
              <el-col :span="4">
                <div style="font-size: 10px; display: flex; justify-content: center; text-align: center;">
                  <el-icon :size="15"><View /></el-icon>{{ post.viewCount }}
                </div>
              </el-col>
              <el-col :span="4"><span style="margin-left: auto">作者：{{ post.userName }}</span></el-col>
            </el-row>
          </div>
        </template>
        这是一个关于java的帖子dwadwadawdwaw aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa这是一个关于java的帖子dwadwadawdwaw aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...
        <template #footer>
          <el-row>
            <el-col :span="20"><el-tag type="primary" v-for="tag in post.tags" style="margin-right: 10px">{{ tag }}</el-tag></el-col>
            <el-col :span="4"><span style="margin-left: auto">{{ post.categoryName }}</span></el-col>
          </el-row>

        </template>
      </el-card>
    </div>
    <el-pagination
      background layout="prev, pager, next"
      :total=Number(posts.total)
      :page-size="postQueryPageRequest.pageSize"
      :current-page="postQueryPageRequest.pageNum"
      @current-change="handleCurrentChange"
      style="justify-content: center; margin-top: 20px"
    />
  </div>


</template>

<style scoped>
.post{
  margin-right: auto;
  margin-left: auto;
}
</style>
