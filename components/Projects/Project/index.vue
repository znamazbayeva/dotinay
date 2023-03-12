<template>
  <div :class="[backgroundColor,  'laptop:flex-[0_0_29%] w-full h-full shadow-lg shadow-gray-300 rounded-xl p-5 hover:cursor-pointer hover:-translate-y-2 transition-all']">
    <div class="w-full h-full flex flex-col gap-2">
      <div class="flex justify-between align-center">
        <div class="text-white text-2xl font-semibold">Project name</div>
        <div class="text-white">August 2022</div>
      </div>
      <div class="text-gray-100">
        Tools: vue.js
      </div>
      <div class="rounded-xl">
        <img src="~/assets/img/project.png" alt="project image" class="max-h-44 w-full object-cover" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  backgroundColor: string
}>()
</script>