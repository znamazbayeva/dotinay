<template>
  <div>
    <nuxt-link :to="`/blog/${post.id}/`">
      <div class="laptop:flex-[0_0_29%] w-full h-full shadow-lg shadow-gray-300 rounded-xl p-5 hover:cursor-pointer hover:-translate-y-2 transition-all">
        <div class="w-full h-full flex flex-col gap-2">
          <div class="rounded-xl">
            <img :src="post.photo" alt="project image" class="h-52 w-full object-cover" />
          </div>
          <div class="flex justify-between items-center">
            <div class="text-2xl font-semibold">{{ post.title }}</div>
            <!-- TODO: add date -->
            <div>August 2022</div>
          </div>
          <div>
            {{ post.subtitle }}
          </div>
        </div>
      </div>
    </nuxt-link>
    </div>
</template>
<script setup lang="ts">
import { Post } from '~/types/index'
const props = defineProps<{
  post: Post
}>()
</script>
