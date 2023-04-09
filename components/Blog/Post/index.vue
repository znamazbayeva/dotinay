<template>
  <div>
    <article class="">
      <p class="text-gray-500 text-sm">{{ post.created_at }}</p>
      <h2 class="mt-3 font-medium text-lg text-gray-800 dark:text-gray-200">
        <nuxt-link
          :to="`/blog/${post.id}/`"
          class="hover:underline focus:underline"
        >
          {{ post.title }}
        </nuxt-link>
      </h2>
      <p class="mt-3 text-base text-gray-500 leading-relaxed">
        {{ post.subtitle }}
      </p>
      <p class="mt-3 text-base text-gray-700 dark:text-gray-300">
        <nuxt-link
          :to="`/blog/${post.id}/`"
          class="hover:underline focus:underline"
          >Read article →</nuxt-link
        >
      </p>
    </article>
  </div>
</template>
<script setup lang="ts">
import { Post } from "~/types/index";
const props = defineProps<{
  post: Post;
}>();
</script>
