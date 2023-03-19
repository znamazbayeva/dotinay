<template>
  <div class="my-20">
    <div class="container mx-auto">
      <img :src="post?.photo" alt="post photo" />
      <div>{{ post?.title }}</div>
      <div>{{ post?.subtitle }}</div>
      <div>{{ post?.content }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed  } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from '~/types/index'

const post = ref<Post | null>(null);
const route  = useRoute()
const postId = computed(() => {
  return Number(route.params.id);
})

const { result } =  await myFetch<Post>(`posts/${unref(postId)}`) ;
post.value = result.value 



</script>
