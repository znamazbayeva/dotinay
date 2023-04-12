<template>
  <div class="flex-1 flex flex-col">
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="mt-6 dark:text-white max-w-none">
        <h1 class="font-bold text-4xl mb-8 leading-relaxed">
          {{ post?.title }}
        </h1>
      </div>
      <div class="mb-6 text-gray-500">{{ post?.subtitle }}</div>
      <div class="ck-content" v-html="post?.content"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed  } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from '~/types/index'
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // you can change

const post = ref<Post | null>(null);
const route  = useRoute()
const postId = computed(() => {
  return Number(route.params.id);
})

const { result } =  await myFetch<Post>(`posts/${unref(postId)}`) ;
post.value = result.value 

onMounted(() => {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
})
</script>
