<template>
  <div :class="[backgroundColor,  'laptop:flex-[0_0_29%] w-full h-full shadow-lg shadow-gray-300 rounded-xl p-5 hover:cursor-pointer hover:-translate-y-2 transition-all']">
    <div class="w-full h-full flex flex-col gap-2">
      <div class="flex justify-between align-center">
        <div class="text-white text-2xl font-semibold">{{ project.name }}</div>
        <div class="text-white">{{ project.company }}</div>
      </div>
      <div class="text-gray-100">
        {{ project.tools }}
      </div>
      <div class="rounded-xl">
        <img :src="project.photo" alt="project image" class="max-h-44 w-full object-cover" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/index'
const props = defineProps<{
  backgroundColor: string,
  project: Project
}>()
</script>