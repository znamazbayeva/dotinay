<template>
  <div class="flex-1 flex flex-col">
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="mt-8 dark:text-white max-w-none">
        <h1 class="font-bold text-4xl mb-8 leading-relaxed">
          Things that flows in my head
        </h1>
      </div>
      <section class="mt-12 space-y-16">
        <BlogPost v-for="post in posts" :key="post.id" :post="post" />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Post } from "~/types/index";
const posts = ref<Post[] | null>(null);
const { result } = await myFetch<Post[]>("posts", true);
posts.value = result.value;
</script>
