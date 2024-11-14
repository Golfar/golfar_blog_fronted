<script setup lang="ts">

import { onMounted, onUpdated, reactive, ref } from 'vue'
import { getPostDetailUsingPost } from '@/api/postController'
import { useRouter } from 'vue-router'


const postQueryDetailRequest = reactive({
  isMyPost: false,
  postId: -1,
})

const getPostDetailRequest = async () => {
  try{
    const res = await getPostDetailUsingPost(postQueryDetailRequest);
    if(res.data){
      console.log(res.data)
    }
  }catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  const router = useRouter()
  postQueryDetailRequest.isMyPost = router.query.isMyPost
  postQueryDetailRequest.postId = router.params.postId
  console.log(router.query);

})

</script>

<template>

</template>

<style scoped>

</style>
