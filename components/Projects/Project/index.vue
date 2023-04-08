<template>
  <article class="not-prose mt-14 flex flex-col sm:flex-row gap-6">
    <div class="flex-shrink-0">
      <img
        class="w-40 h-40 border object-cover rounded-xl"
        :src="project.photo"
      />
    </div>
    <div>
      <h2 class="font-medium text-lg text-gray-800 dark:text-gray-200">
        <a
          :href="project.url"
          target="_blank"
          class="hover:underline focus:underline cursor-pointer"
        >
          {{ project.name }}
        </a>
      </h2>
      <div class="mt-3 prose prose-sm dark:prose-invert text-gray-500">
        <p>
          {{ project.description }}
        </p>
      </div>
      <p class="mt-3 text-sm text-gray-700 dark:text-gray-300"></p>
      <p
        @click="$emit('onClick')"
        class="hover:underline focus:underline cursor-pointer"
      >
        Read more →
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
import { Project } from "~/types/index";
const props = defineProps<{
  backgroundColor: string;
  project: Project;
}>();
</script>
