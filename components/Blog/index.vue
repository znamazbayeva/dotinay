<template>
  <div class="my-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap flex-row gap-8 justify-between">
        <BlogPost v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Post } from '~/types/index'
const posts = ref<Post[] | null>(null);
const { result } =  await myFetch<Post[] >('posts', true) ;
posts.value = result.value 

</script>